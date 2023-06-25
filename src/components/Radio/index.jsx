import styles from './Radio.module.scss';

export default function Radio( {description, name, updateFieldHandler, disabled} ) {
    return (
        <label className={styles.label}>
            <input              
                type="radio" 
                name={name} 
                value={description} 
                onChange={(e) => updateFieldHandler(`${name}`, e.target.value)} 
                disabled={disabled} 
                required/>
            <span>{description}</span>
        </label>
    )
}
