import styles from './Checkbox.module.scss';

export default function Checkbox({ value, description, onChange, checked }) {
    return (
        <label className={styles.label}>
            <input
                type="checkbox"
                value={value}
                onChange={onChange}
                checked={checked}
                 />
            <span>{description}</span>
        </label>
    )
}
