import './container.scss'

type Props = {
    children: React.ReactNode
}

const Container = ({ children }: Props) => {
    return (
        <div className="my-container">
            {children}
        </div>
    )
}

export default Container;
