import React, { useState } from 'react';
import styles from './TicketManagement.module.scss';

import FilterIcon from '../../assets/images/icons/filter-icon.svg';
import SortAscIcon from '../../assets/images/icons/arrow-down-short-wide.svg';
import SortDescIcon from '../../assets/images/icons/arrow-up-wide-short.svg';
import { SortCriteria, Filter, Status, Ticket, DUMMY_TICKETS } from './dataclasses.jsx';
import TicketCard from '../../components/TicketCard'
import FilterOverlay from '../../components/FilterOverlay'


function filterTickets(tickets, filters, setDisplayTickets) {
    var filter = new Filter(false, false, false)

    setDisplayTickets(tickets)
}

function sortTickets(tickets, sortCriteria, setDisplayTickets) {
    if (sortCriteria === SortCriteria.DateAsc)
        tickets.sort((ticket1, ticket2) => ticket1.initDate - ticket2.initDate)
    else if (sortCriteria === SortCriteria.DateDesc)
        tickets.sort((ticket1, ticket2) => ticket2.initDate - ticket1.initDate)
    else if (sortCriteria === SortCriteria.LastUpdateAsc)
        tickets.sort((ticket1, ticket2) => ticket1.updateDate - ticket2.updateDate)
    else
        tickets.sort((ticket1, ticket2) => ticket2.updateDate - ticket1.updateDate)
}

function ticketButtonPressed(ticket) {
    console.log(ticket)
}

export default function TicketManagement() {
    const [filters, setFilters] = useState(new Filter(false, false, false))
    const [sortCriteria, setSortCriteria] = useState(SortCriteria.DateDesc)
    const [tickets, setTickets] = useState(DUMMY_TICKETS)
    const [displayTickets, setDisplayTickets] = useState(DUMMY_TICKETS)
    const [isFilterOverlayVisible, setIsFilterOverlayVisible] = useState(true)
    const [isSortOverlayVisible, setIsSortOverlayVisible] = useState(false)

    console.log(displayTickets)

    const ticketsShow = displayTickets.map((ticket) => {
        return (
            <div key={ticket.id}>
                <TicketCard ticket={ticket} clickCallback={ticketButtonPressed} />
            </div>
        )
    })

    var sortIcon = (sortCriteria == SortCriteria.DateAsc || sortCriteria == SortCriteria.LastUpdateAsc) ? SortAscIcon : SortDescIcon;

    return (
        <section className={styles.section}>
            <h1>Gerenciamento de reclamações</h1>
            <article className={styles.section__article}>
                <div className={styles.section__article__defaultFilters}>test</div>
                {isFilterOverlayVisible && <FilterOverlay onClose={() => setIsFilterOverlayVisible(false)} />}
                <div className={styles.section__article__filterAndSorting}>
                    <button onClick={() => { setIsFilterOverlayVisible(true) }}>
                        <img src={FilterIcon} alt="Filter icon" />
                    </button>
                    <button onClick={() => { setIsSortOverlayVisible(true) }}>
                        <img src={sortIcon} alt="Sort icon" />
                    </button>
                </div>
                <div className={styles.section__article__cardContainer}>
                    {ticketsShow}
                </div>
            </article>
        </section>
    );
};