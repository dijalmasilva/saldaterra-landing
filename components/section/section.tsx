import './section.scss'
import Container from "@/components/container/container";

type Props = {
    children: React.ReactNode
    className?: string;
    style?: React.CSSProperties;
}

const Section = ({ children, className, style }: Props) => {
    return (
        <section className={className} style={style}>
            <Container>
                {children}
            </Container>
        </section>
    )
}

export default Section;
