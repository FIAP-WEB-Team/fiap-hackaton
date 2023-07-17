import React, { useState, useEffect, useContext } from 'react';
import styles from './TicketManagement.module.scss';

import { UserContext } from '../../contexts/UserContext';
import { Link, Navigate } from 'react-router-dom';
import FilterIcon from '../../assets/images/icons/filter-icon.svg';
import SortAscIcon from '../../assets/images/icons/arrow-down-short-wide.svg';
import SortDescIcon from '../../assets/images/icons/arrow-up-wide-short.svg';
import { Ticket, ProblemType, Status, SortCriteria, Filter, DUMMY_TICKETS, LastUpdateFilter } from './dataclasses.jsx';
import TicketCard from '../../components/TicketCard'
import FilterPopup from './FilterPopup'
import SortingPopup from './SortingPopup';
import CustomOverlay from '../../components/CustomOverlay';
import { returnComplaints } from '../../utils/databaseAPI';


function filterTickets(tickets, filters, setDisplayTickets) {
    const filteredTickets = tickets.filter((ticket) => {
        var accept = true;
        var limitDate = new Date()
        if (filters.lastUpdateFilter === LastUpdateFilter.LastSevendDays)
            limitDate.setDate(limitDate.getDate() - 7)
        else if (filters.lastUpdateFilter === LastUpdateFilter.LastThirtyDays)
            limitDate.setDate(limitDate.getDate() - 30)
        else if (filters.lastUpdateFilter === LastUpdateFilter.LastThreeMonths)
            limitDate.setMonth(limitDate.getMonth() - 3)
        if (filters.lastUpdateFilter !== LastUpdateFilter.None)
            accept = ticket.updateDate >= limitDate
        accept = accept && filters.statusAllowed[ticket.status]

        return accept
    })

    setDisplayTickets(filteredTickets)
}

function compTickets(ticket1, ticket2, sortCriteria) {
    if (sortCriteria === SortCriteria.DateAsc)
        return ticket1.initDate - ticket2.initDate
    else if (sortCriteria === SortCriteria.DateDesc)
        return ticket2.initDate - ticket1.initDate
    else if (sortCriteria === SortCriteria.LastUpdateAsc)
        return ticket1.updateDate - ticket2.updateDate
    else
        return ticket2.updateDate - ticket1.updateDate
}

function ticketButtonPressed(ticket) {
    console.log(ticket)
}

export default function TicketManagement() {
    const { signed } = useContext(UserContext);
    const [filters, setFilters] = useState(new Filter(true, true, true, LastUpdateFilter.None))
    const [sortCriteria, setSortCriteria] = useState(SortCriteria.DateDesc)
    const [tickets, setTickets] = useState(DUMMY_TICKETS)
    const [displayTickets, setDisplayTickets] = useState(DUMMY_TICKETS)
    const [isFilterOverlayVisible, setIsFilterOverlayVisible] = useState(false)
    const [isSortOverlayVisible, setIsSortOverlayVisible] = useState(false)

    useEffect(() => {
        fetchTickets();
    }, []);

    useEffect(() => {
        filterTickets(tickets, filters, updateDisplayTickets )
    }, [tickets, filters])

    async function fetchTickets() {
        try {            
            const fetchedTickets = await returnComplaints();
            if (fetchedTickets) {
            const ticketData = fetchedTickets.map((ticket) => {
                return new Ticket(
                    ticket.ticketID,
                    ProblemType[ticket.type],
                    Status[ticket.status],
                    new Date(ticket.date),
                    new Date(ticket.lastUpdate),
                    ticket.ticketUsername
                );
            });
            setTickets(ticketData);
            setDisplayTickets(ticketData);
          } else {
            console.error('Invalid ticket data: ', fetchedTickets);
          }
        } catch (error) {
          console.error('Error fetching tickets:', error);
        }
    }

    function updateDisplayTickets(filteredTickets) {
        setDisplayTickets(filteredTickets);
    }
      
    const ticketsShow = Array.isArray(displayTickets)
        ? [...displayTickets].sort((ticket1, ticket2) => compTickets(ticket1, ticket2, sortCriteria))
            .map((ticket) => (
                <Link key={ticket.id} to={`/analysis/${ticket.id}`}>
                    <TicketCard ticket={ticket} clickCallback={ticketButtonPressed} />
                </Link>
            ))
        : null;

    const sortIcon = (sortCriteria === SortCriteria.DateAsc || sortCriteria === SortCriteria.LastUpdateAsc) ? SortAscIcon : SortDescIcon;
    const closeFilterWindow = () => setIsFilterOverlayVisible(false)
    const closeSortingWindow = () => setIsSortOverlayVisible(false)

    if (!signed) {
        return <Navigate to="/" />;
    }

    return (
        <section className={styles.section}>
            <h1>Gerenciamento de reclamações</h1>
            <article className={styles.section__article}>
                {isFilterOverlayVisible && <CustomOverlay onClose={closeFilterWindow} component=<FilterPopup onClose={closeFilterWindow}
                    onApplyChanges={(filters) => { setFilters(filters); closeFilterWindow() }} startingFilter={filters} /> />}
                {isSortOverlayVisible && <CustomOverlay onClose={closeSortingWindow} component=<SortingPopup onClose={closeSortingWindow}
                    onApplyChanges={(sortCriteria) => { setSortCriteria(sortCriteria); closeSortingWindow() }} currentSorting={sortCriteria} /> />}
                <div className={styles.section__article__filterAndSorting}>
                    <div className={styles.section__article__filterAndSorting__component}>
                        <button onClick={() => { setIsFilterOverlayVisible(true) }}>
                            <img src={FilterIcon} alt="Filter icon" />
                        </button>
                        <div>Filtrar</div>
                    </div>
                    <div className={styles.section__article__filterAndSorting__component}>
                        <button onClick={() => { setIsSortOverlayVisible(true) }}>
                            <img src={sortIcon} alt="Sort icon" />
                        </button>
                        <div>Ordenar</div>
                    </div>
                </div>
                <div className={styles.section__article__cardContainer}>
                    {ticketsShow}
                </div>
            </article>
        </section>
    );
};