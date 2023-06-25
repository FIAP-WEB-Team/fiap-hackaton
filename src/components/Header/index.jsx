import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <ul className={styles.header_ul}>
                <li className={'tab-establishment'} position="0" data-current="true" >
                    <a href="javascript:void(0)">Cadastrar Solicitação</a>
                </li>
                <li className={'tab-establishment'} position="2" data-current="false" >
                    <a href="javascript:void(0)">Analisar Solicitação</a>
                </li>
                <li className={'tab-establishment'} position="3" data-current="false" >
                    <a href="javascript:void(0)">Gerenciamento ??</a>
                </li>
            </ul>
        </header>
    )
}
