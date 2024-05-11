interface Props {
  children: string;
  colour?: "primary" | "secondary" | "danger" | 'warning';
  onClick: () => void;
}

const Button = ({ children, colour = "primary", onClick }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + colour} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
