type Props = {
    children: React.ReactNode;
    className?: string;
}

const ButtonContent = ({ children, className }: Props) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default ButtonContent;
