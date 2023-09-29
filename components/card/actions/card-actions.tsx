type Props = {
    children: React.ReactNode
}

const CardActions = ({ children }: Props) => {
    return (
        <div className="pb-8">
            { children }
        </div>
    )
}

export default CardActions;
