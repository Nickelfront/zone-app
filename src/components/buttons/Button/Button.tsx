import { Component } from "react";

type ButtonProps = {
    classStyles?: string
    label: string
    icon?: any
    filled?: boolean
    bordered?: boolean
}
class Button extends Component<ButtonProps> {
    constructor(props: ButtonProps) { 
        super(props);
    }

    render() {
        let classNames = ''
        if (this.props.filled) {
            classNames += ' bg-primary text-white '
        } else if (this.props.bordered) {
            classNames += ' bg-white border-primary text-primary '
        }
        return <button className={classNames + " py-5 text-lg justify-self-stretch rounded-full " + this.props.classStyles}>
            {this.props.label}
        </button>
    }
}

export default Button;