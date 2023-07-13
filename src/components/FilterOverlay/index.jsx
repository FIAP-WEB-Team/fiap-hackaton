import React from 'react';
import styles from './FilterOverlay.module.scss';


export default function FilterOverlay({ onClose }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.overlay__content}>
                <h1>Overlay Content</h1>
                <p>This is the content of the overlay screen.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};
