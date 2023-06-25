import React, { useState } from 'react';
import Input from '../../components/Input';
import styles from './Cadastro.module.scss'; 
import CheckWhiteIcon from '../../assets/images/icons/check-icon-white.svg';
import { useForm } from '../../hooks/complainForm'; 
import ClientInfo from './ClientInfo';
import TicketInfo from './TicketInfo';

const formTemplate = {
    name: "",
    channel: "", 
    type: "", 
    description: "" 
} 

export default function Cadastro() {
    const [data, setData] = useState(formTemplate);
    const updateFieldHandler = (key, value) => {
        // console.log(data);
        setData((prev) => {
          return {...prev, [key]: value};
        });
    }

    const formComponents = [
        <ClientInfo />,
        <TicketInfo />
    ];
    const { currentStep, currentComponent, isFirstStep, changeStep, save } = useForm(formComponents);

    return (
        <section className={styles.section}>
            <h1>Formulário de Reclamação</h1>
            <article className={styles.section__article}>                     
                    
                <form className={styles.section__article__form}>

                    {
                        isFirstStep ? (
                            <div className={styles.section__article__form__divStep}>
                                <div className={styles.section__article__form__divStep__stepCount}>1</div>
                                <div className={styles.section__article__form__divStep__stepDescription}>
                                    <h2>Dados do Cliente</h2>
                                    <span>Etapa 1 de 2</span>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.divStepBefore}>
                                <div className={styles.divStepBefore__stepCheck}>
                                    <img src={CheckWhiteIcon} alt="Check icon" />
                                </div>
                                <div className={styles.divStepBefore__stepDescription}>
                                    <h2>Dados do Cliente</h2>
                                    <span onClick={(e) => changeStep(currentStep - 1)}>Editar</span>
                                </div>
                            </div>
                        )
                    }                    

                    { currentComponent }

                    {
                        isFirstStep ? (
                            <>
                                <div className={styles.spacing}></div>
                                    <button type="button" className={styles.buttonNext} onClick={(e) => changeStep(currentStep + 1)}>
                                        <div className={styles.buttonNext__groupButton}>
                                            <span>Prosseguir</span>
                                        </div>
                                    </button>
                                    
                                    <div className={styles.section__article__form__divStep2}>
                                    <div className={styles.section__article__form__divStep2__stepCount}>2</div>
                                    <div className={styles.section__article__form__divStep2__stepDescription2}>
                                        <h2>Reclamação</h2>
                                        <span>Etapa 2 de 2</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={styles.spacing}></div>
                                <button type="button" className={styles.buttonNext} onClick={(e) => save()}>
                                    <div className={styles.buttonNext__groupButton}>
                                        <span>Cadastrar</span>
                                    </div>
                                </button>
                            </>
                        )
                    }                    
            
                </form>

            </article> 
        </section>
    );
}
