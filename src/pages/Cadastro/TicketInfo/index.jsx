import React from 'react';
import Input from '../../../components/Input';
import styles from './TicketInfo.module.scss';

export default function TicketInfo() {
    return (
        <>
            <div className={styles.divStep2}>
                <div className={styles.divStep2__stepCount}>2</div>
                <div className={styles.divStep2__stepDescription2}>
                    <h2>Sobre a sua atuação</h2>
                    <span>Etapa 2 de 2</span>
                </div>
            </div>

            <div className='ticket'>                

                <Input 
                    description="Nome Completo" 
                    name="first_name" 
                    placeholder="Ex: Lianne Sandlot"
                    data=""
                    handleValidator=""
                    disabled={false} >                                
                </Input>            
                
            </div>
        </>
    )
}
