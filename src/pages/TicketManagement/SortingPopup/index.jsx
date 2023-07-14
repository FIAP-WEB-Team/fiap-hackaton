import React, { useState } from 'react';
import styles from './SortingPopup.module.scss';

import { SortCriteria } from '../dataclasses';

import Radio from '../../../components/Radio'
import Button from '../../../components/Button';


export default function SortingPopup({ onClose, onApplyChanges, currentSorting }) {
    const [selectedSortingCriteria, setSelectedOption] = useState(currentSorting);

    const handleRadioChange = (_, value) => {
        setSelectedOption(Number(value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onApplyChanges(selectedSortingCriteria)
    };

    return (
        <>
            <h2>Ordenar reclamações</h2>
            <div className={styles.entry}>
                <Radio description="Criação mais recente" name="sortingSelection" updateFieldHandler={handleRadioChange} disabled={false}
                    extraProps={{ 'checked': selectedSortingCriteria === SortCriteria.DateDesc }} value={SortCriteria.DateDesc} />
                <Radio description="Criação mais antiga" name="sortingSelection" updateFieldHandler={handleRadioChange} disabled={false}
                    extraProps={{ 'checked': selectedSortingCriteria === SortCriteria.DateAsc }} value={SortCriteria.DateAsc} />
                <Radio description="Atualização mais recente" name="sortingSelection" updateFieldHandler={handleRadioChange} disabled={false}
                    extraProps={{ 'checked': selectedSortingCriteria === SortCriteria.LastUpdateDesc }} value={SortCriteria.LastUpdateDesc} />
                <Radio description="Atualização mais antiga" name="sortingSelection" updateFieldHandler={handleRadioChange} disabled={false}
                    extraProps={{ 'checked': selectedSortingCriteria === SortCriteria.LastUpdateAsc }} value={SortCriteria.LastUpdateAsc} />
            </div>
            <Button description="Aplicar" handle={handleSubmit} />
            <p />
            <Button description="Cancelar" handle={onClose} />
        </>
    );
};
