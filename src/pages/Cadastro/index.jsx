import React, { useState, useContext } from 'react';
import styles from './Cadastro.module.scss'; 
import CheckWhiteIcon from '../../assets/images/icons/check-icon-white.svg';
import { useForm } from '../../hooks/complainForm'; 
import ClientInfo from './ClientInfo';
import TicketInfo from './TicketInfo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/Button';
import { UserContext } from '../../contexts/UserContext';
import { Navigate } from 'react-router-dom';


const formTemplate = {
    clerkID: "",
    ticketUsername: "",
    emailClient: "",
    channel: "", 
    type: "", 
    description: "",
    clerkDescription: "",
    level: 1,
    status: 'Pending',
    bytePhotos: [] 
} 

export default function Cadastro() {
    const { signed, clerk } = useContext(UserContext);    
    const [data, setData] = useState(formTemplate);

    const updateFieldHandler = (key, value) => {
        // console.log(data);
        setData((prev) => {
          return {...prev, [key]: value};
        });
    }

    const fieldValidate = (e, isValid) => {    
        const value = e.target.value;
        const name = e.target.getAttribute('name');
    
        if(isValid) {
            e.target.setAttribute('error', 0);
        }else {
            e.target.setAttribute('error', 1); 
        }
    
        updateFieldHandler(name, value); 
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleValidator = (e) => {
        const value = e.target.value;
        const isValid = (value.length >= 2) ? true : false;
        
        fieldValidate(e, isValid);
    }

    const handleEmailChange = (e) => {
        const value = e.target.value;
        const isValid = validateEmail(value);
    
        fieldValidate(e, isValid);
    }

    const nextForm = () => {
        const clientDiv = document.querySelector('.client');
        const inputs = clientDiv.querySelectorAll('input');
        const radios = clientDiv.querySelectorAll('input[type="radio"]'); 
        let error = 0;
    
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
            const radiosWithName = clientDiv.querySelectorAll(`input[type="radio"][name="${name}"]`);
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
    
        if(error === 0){
            changeStep(currentStep + 1);
        }else {
            toast.error('Preencha todas informações!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const save = () => {
        updateFieldHandler('clerkID', clerk); 
        const clientDiv = document.querySelector('.ticket');
        const textareas = clientDiv.querySelectorAll('textarea');
        const selects = clientDiv.querySelectorAll('select'); 
        let error = 0;
    
        for(let i = 0; i < textareas.length; i++) {
          const textarea = textareas[i];
          if(textarea.value.trim() === '' || textarea.getAttribute('error') === '1') {
                error++;
                textarea.setAttribute('error', 1);
          }
        }

        for(let i = 0; i < selects.length; i++) {
            const select = selects[i];
            if(select.value.trim() === '') {
                error++;
            }
        }

    
        if(error === 0){
            console.log(data);
            alert('Cadastrando...');
        }else {
            toast.error('Preencha todas informações!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const formComponents = [
        <ClientInfo data={data} handleValidator={handleValidator} handleEmailChange={handleEmailChange} updateFieldHandler={updateFieldHandler} />,
        <TicketInfo data={data} handleValidator={handleValidator} updateFieldHandler={updateFieldHandler} />
    ];
    const { currentStep, currentComponent, isFirstStep, changeStep } = useForm(formComponents);

    if(!signed) { 
        return <Navigate to="/" />;         
    } 

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
                                    <Button description="Prosseguir" handle={nextForm} />
                                    
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
                                <Button description="Cadastrar" handle={save} />
                            </>
                        )
                    }                    
            
                </form>

            </article> 

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </section>
    );
}
