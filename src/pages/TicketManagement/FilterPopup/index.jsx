import React, { useState } from 'react';
import styles from './FilterPopup.module.scss';

import { LastUpdateFilter, Status, Filter } from '../dataclasses';

import Radio from '../../../components/Radio'
import Checkbox from '../../../components/Checkbox/input';
import Button from '../../../components/Button';


export default function FilterPopup({ onClose, onApplyChanges: onUpdateFilter, startingFilter }) {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState(Object.keys(
        startingFilter.statusAllowed).filter((key) => startingFilter.statusAllowed[key]));
    const [selectedLastUpdateFilter, setSelectedOption] = useState(startingFilter.lastUpdateFilter);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedCheckboxes((prevCheckboxes) => [...prevCheckboxes, value]);
        } else {
            setSelectedCheckboxes((prevCheckboxes) =>
                prevCheckboxes.filter((checkbox) => checkbox !== value)
            );
        }
    };

    const handleRadioChange = (_, value) => {
        setSelectedOption(Number(value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const filter = new Filter(false, false, false, selectedLastUpdateFilter)
        selectedCheckboxes.forEach((status) => {
            filter.statusAllowed[status] = true;
        });
        onUpdateFilter(filter)
    };

    return (
        <>
            <h2>Aplique filtros</h2>
            <div className={styles.entry}>
                <div className={styles.entry__title}>Última modificação</div>
                <Radio description="Últimos 7 dias" name="dateFilter" updateFieldHandler={handleRadioChange} disabled={false}
                    extraProps={{ 'checked': selectedLastUpdateFilter === LastUpdateFilter.LastSevendDays }} value={LastUpdateFilter.LastSevendDays} />
                <Radio description="Últimos 30 dias" name="dateFilter" updateFieldHandler={handleRadioChange} disabled={false}
                    extraProps={{ 'checked': selectedLastUpdateFilter === LastUpdateFilter.LastThirtyDays }} value={LastUpdateFilter.LastThirtyDays} />
                <Radio description="Últimos 3 meses" name="dateFilter" updateFieldHandler={handleRadioChange} disabled={false}
                    extraProps={{ 'checked': selectedLastUpdateFilter === LastUpdateFilter.LastThreeMonths }} value={LastUpdateFilter.LastThreeMonths} />
                <Radio description="Desde o início" name="dateFilter" updateFieldHandler={handleRadioChange} disabled={false}
                    extraProps={{ 'checked': selectedLastUpdateFilter === LastUpdateFilter.None }} value={LastUpdateFilter.None} />
            </div>
            <div className={styles.entry}>
                <div className={styles.entry__title}>Estado Reclamação</div>
                <Checkbox description="Pendente" value={Status.Pending} onChange={handleCheckboxChange} checked={selectedCheckboxes.includes(Status.Pending)} />
                <Checkbox description="Encaminhado" value={Status.Forwarded} onChange={handleCheckboxChange} checked={selectedCheckboxes.includes(Status.Forwarded)} />
                <Checkbox description="Completado" value={Status.Completed} onChange={handleCheckboxChange} checked={selectedCheckboxes.includes(Status.Completed)} />
            </div>
            <Button description="Aplicar" handle={handleSubmit} />
            <p />
            <Button description="Cancelar" handle={onClose} />
        </>
    );
};
