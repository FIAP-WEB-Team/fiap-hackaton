import React from 'react';
import Input from '../../../components/Input';
import Radio from '../../../components/Radio';
import styles from './ClientInfo.module.scss';

export default function ClientInfo() {
    return (
        <div className='client'>
            <Input 
                description="Nome Completo" 
                name="first_name" 
                placeholder="Ex: Lianne Sandlot"
                data=""
                handleValidator=""
                disabled={false} >                                
            </Input>            

            <h3 className={styles.h3}>Canal da reclamação?</h3>
            <div className={styles.divRadio}>                    
                <Radio 
                    description="Telefone"
                    name="channel" 
                    data=""
                    handleValidator=""
                    disabled={false} 
                /> 
                <Radio 
                    description="Whatsapp"
                    name="channel" 
                    data=""
                    handleValidator=""
                    disabled={false} 
                />
                <Radio 
                    description="E-mail"
                    name="channel" 
                    data=""
                    handleValidator=""
                    disabled={false} 
                />
            </div>          
        </div>
    )
}
