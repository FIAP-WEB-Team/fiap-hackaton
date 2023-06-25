import styles from './Input.module.scss';

export default function Input( {type='text', description, name, placeholder, data, handleValidator, disabled, children} ) {
    return (
        <div className={styles.divField}>
            <label htmlFor={name}>{description}</label>
            <div className={styles.divField__group}>
                <input 
                    type={type}
                    autoComplete="off" 
                    id={name} 
                    name={name} 
                    size="20" 
                    // type="text" 
                    placeholder={placeholder} 
                    value={data[`${name}`] || ""} 
                    onChange={handleValidator}
                    disabled={disabled} 
                    /> 
                {children}
            </div>
        </div>
    )
}
