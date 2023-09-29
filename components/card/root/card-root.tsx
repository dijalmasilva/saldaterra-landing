import './card-root.scss'

type Props = {
    children: React.ReactNode
    className?: string
}

const CardRoot = ({ children, className }: Props) => {
    return (
        <div className={`my-card ${className ?? ''}`}>
            {children}
        </div>
    )
}

export default CardRoot;
