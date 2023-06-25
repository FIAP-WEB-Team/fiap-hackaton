import React, { useState } from 'react';

export function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep(i, e) {
        if(e) e.preventDefault();
        if(i < 0 || i >= steps.length) return false;

        setCurrentStep(i);
    }

    function save() {
        const personalDiv = document.querySelector('.company');
        const radios = personalDiv.querySelectorAll('input[type="radio"]');        
        const inputs = personalDiv.querySelectorAll('input:not(:disabled)');
        let error = 0;

        // Check all input text
        for(let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            if(input.value.trim() === '' || input.getAttribute('error') === '1') {
                error++;
                input.setAttribute('error', 1);
            }
        }

        // Check all radio buttons
        radios.forEach((radio) => {
            const name = radio.getAttribute('name');
            const radiosWithName = personalDiv.querySelectorAll(`input[type="radio"][name="${name}"]`);
            let checked = false;

            radiosWithName.forEach((radioWithName) => {
                if (radioWithName.checked) {
                    checked = true;
                }
            });

            if (!checked) {
                error++;
            }
        });

        if(error > 0) {
            alert('Favor preencher todas informações');
        }else {
            alert('Enviando informacoes...');
        }
        
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        isFirstStep: currentStep === 0 ? true : false,
        changeStep,
        save 
    };
}