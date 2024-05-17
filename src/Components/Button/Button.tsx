import styles from './Button.module.css';

interface Props {
  children: string;
  colour?: "primary" | "secondary" | "danger" | 'warning';
  onClick: () => void;
}

const Button = ({ children, colour = "primary", onClick }: Props) => {
  return (
    <div>
      <button type="button" className={[styles.btn, styles["btn-" + colour]].join(' ')} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
