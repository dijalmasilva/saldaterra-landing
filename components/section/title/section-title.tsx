import './section-title.scss'
import Typography from "@/components/typography/typography";

type Props = {
    title: string;
    subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => {
    return (
        <div className="section-title">
            <div className="title-div">
                <Typography variant="h2" className="title">{title}</Typography>
                <hr className="divider" />
            </div>
            {subtitle && (
                <Typography className="subtitle" variant="p">{subtitle}</Typography>
            )}
        </div>
    )
}

export default SectionTitle
