import './typography.scss'

type Props = {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

const Typography = ({ variant: Component = 'span', children, className, style }: Props) => {

    return (
        <div className="typography">
            <Component className={className} style={style}>
                {children}
            </Component>
        </div>
    )
}

export default Typography
