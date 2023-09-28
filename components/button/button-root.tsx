import './button.scss'

type ButtonProps = {
    children: React.ReactNode;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const ButtonRoot = ({ children, ...props}: ButtonProps) => {
    return <button {...props} className={`button ${props.className ?? ''}`}>{children}</button>
}

export default ButtonRoot
