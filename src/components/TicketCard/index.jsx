import React from 'react';
import styles from './TicketCard.module.scss';
import { Status } from '../../pages/TicketManagement/dataclasses.jsx'


const dateOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
};


export default function TicketCard({ ticket, clickCallback }) {
    var cardStyle = styles.blueCard;
    if (ticket.status == Status.Completed)
        cardStyle = styles.greenCard;
    else if (ticket.status == Status.Forwarded)
        cardStyle = styles.pinkCard;
    return (
        <button className={cardStyle} onClick={() => clickCallback(ticket)}>
            <div className={styles.pinkCard__textFieldWithLine}>
                <div>{ticket.problemType}</div>
                <div>&nbsp;</div>
                <div style={{ fontWeight: "bold" }}>{ticket.status}</div>
            </div>
            <div className={styles.pinkCard__simpleTextField}>
                <div>{ticket.client}</div>
                <div className={styles.pinkCard__dateEntry}>{ticket.initDate.toLocaleString('pt-BR', dateOptions)}</div>
                <div className={styles.pinkCard__dateEntry}>{ticket.updateDate.toLocaleString('pt-BR', dateOptions)}</div>
            </div>
        </button>
    )
}