import './button.scss'

type ButtonProps = {
    children: React.ReactNode;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const ButtonRoot = ({ children, ...props}: ButtonProps) => {
    return <button {...props}>{children}</button>
}

export default ButtonRoot
