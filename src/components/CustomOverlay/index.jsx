import React, { useRef, useEffect } from 'react';
import styles from './CustomOverlay.module.scss';

import Radio from '../Radio'
import Button from '../Button';


export default function CustomOverlay({ onClose, component }) {
    const overlayRef = useRef();

    const handleClickOutside = (event) => {
        if (overlayRef.current && !overlayRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.overlay}>
            <div className={styles.overlay__content} ref={overlayRef}>
                {component}
            </div>
        </div>
    );
};
