import styles from './Radio.module.scss';

export default function Radio( {description, name, updateFieldHandler, disabled, value=null, extraProps={}} ) {
    if (value === null)
        value = description
    return (
        <label className={styles.label}>
            <input              
                type="radio" 
                name={name} 
                value={value} 
                onChange={(e) => updateFieldHandler(`${name}`, e.target.value)} 
                disabled={disabled} 
                required
                {...extraProps}/>
            <span>{description}</span>
        </label>
    )
}
