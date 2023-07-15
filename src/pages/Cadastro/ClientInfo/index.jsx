import React from 'react';
import Input from '../../../components/Input';
import Radio from '../../../components/Radio';
import styles from './ClientInfo.module.scss';

export default function ClientInfo( {data, handleValidator, handleEmailChange, updateFieldHandler} ) {
    return (
        <div className='client'>
            <Input 
                description="Nome Completo" 
                name="ticketUsername" 
                placeholder="Ex: Lianne Sandlot"
                data={data}
                handleValidator={handleValidator}
                disabled={false} >                                
            </Input>  
            <Input 
                description="E-mail" 
                name="emailClient" 
                placeholder="Ex: nome@email.com.br"
                data={data}
                handleValidator={handleEmailChange}
                disabled={false} >                                
            </Input>            

            <h3 className={styles.h3}>Canal da reclamação?</h3>
            <div className={styles.divRadio}> 
                <Radio 
                    description="Chatbox"
                    name="channel" 
                    data={data}
                    updateFieldHandler={updateFieldHandler}
                    disabled={false} 
                />
                <Radio 
                    description="Email"
                    name="channel" 
                    data={data}
                    updateFieldHandler={updateFieldHandler}
                    disabled={false} 
                />
                <Radio 
                    description="Site"
                    name="channel" 
                    data={data}
                    updateFieldHandler={updateFieldHandler}
                    disabled={false} 
                /> 
                <Radio 
                    description="Phone"
                    name="channel" 
                    data={data}
                    updateFieldHandler={updateFieldHandler}
                    disabled={false} 
                /> 
                <Radio 
                    description="Whatsapp"
                    name="channel" 
                    data={data}
                    updateFieldHandler={updateFieldHandler}
                    disabled={false} 
                />
            </div>             

        </div>
    )
}
