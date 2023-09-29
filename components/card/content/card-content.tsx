type Props = {
    children: React.ReactNode
    className?: string
}

const CardContent = ({ children, className }: Props) => {
    return (
        <div className={`p-8 ${className ?? ''}`}>
            {children}
        </div>
    )
}

export default CardContent
