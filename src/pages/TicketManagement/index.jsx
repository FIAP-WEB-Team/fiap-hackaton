import React, { useState } from 'react';
import styles from './TicketManagement.module.scss';
import {SortCriteria, Filter, Status, Ticket, DUMMY_TICKETS} from './dataclasses.jsx';


function filterTickets() {
    var filter = new Filter(false, false, false)
    
}

export default function TicketManagement() {
    const [filters, setFilters] = useState(new Filter(false, false, false))
    const [sortCriteria, setSortCriteria] = useState(SortCriteria.DateDesc)
    const [tickets, setTickets] = useState(DUMMY_TICKETS)
    const [displayTickets, setDisplayTickets] = useState([])

    console.log(tickets)

    return (
        <section className={styles.section}>
            <h1>Gerenciamento de reclamações</h1>
            <article className={styles.section__article}>
                Test
            </article>
        </section>
    );
};