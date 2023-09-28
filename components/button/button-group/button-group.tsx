import './button-group.scss'

type ButtonGroupProps = {
    children: React.ReactNode;
};

const ButtonGroup = ({ children }: ButtonGroupProps) => {

    return (
        <div className="button-group">
            {children}
        </div>
    )
}

export default ButtonGroup;
