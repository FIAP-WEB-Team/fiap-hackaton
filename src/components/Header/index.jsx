import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
    const location = useLocation();
    let active = [];
    active[0] = 'false';
    active[1] = 'false';
    active[2] = 'false';
    active[3] = 'false';

    if (location.pathname === '/form') {
        active[0] = 'true';
    } else if (location.pathname === '/management') {
        active[1] = 'true';
    } else if (location.pathname === '/analysis') {
        active[2] = 'true';
    }
    else {
        active[3] = 'true';
    }

    return (
        <header className={styles.header} data-current={active[3]}>
            <ul className={styles.header_ul}>
                <li className={'tab-establishment'} position="0" data-current={active[0]} >
                    <Link to='/form'>Cadastrar Solicitação</Link>
                </li>
                <li className={'tab-establishment'} position="1" data-current={active[1]} >
                    <Link to='/management'>Gerenciamento</Link>
                </li>
                <li className={'tab-establishment'} position="2" data-current={active[2]} >
                    <Link to='/analysis'>Analisar Solicitação</Link>
                </li>
            </ul>
        </header>
    )
}
