import './button-icon.scss'
import {ElementType} from "react";

type Props = {
    icon: ElementType,
    className?: string
}

const ButtonIcon = ({ icon: Icon, className }: Props) => {
    return <Icon className={`button-icon ${className ?? ''}`} />
}

export default ButtonIcon;
