import styles from "./styles.module.scss";

type InputType = {
  label?: string;
  placeholder?: string;
  icon?: string;
  iconColor?: string;
  type: string;
  name: string;
  value: string | number;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  error: boolean;
  onBlur: (e: React.FormEvent<HTMLInputElement>) => void;
};

const Input = ({
  placeholder,
  icon,
  iconColor,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  ...props
}: InputType) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper} style={{ borderColor: iconColor ? iconColor : "#333" }}>
        {icon && (
          <span
            className={`fa ${icon} ${styles.inputIcon}`}
            style={{ color: iconColor ? iconColor : "#333" }}
          />
        )}
        <input
          className={styles.inputField}
          type={type}
          id={name}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
        />
      </div>
      {error && <p className={styles.error}>Campo {placeholder} é obrigatório</p>}
    </div>
  );
};

export default Input;
