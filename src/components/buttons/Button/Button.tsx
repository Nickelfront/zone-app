import { Component } from "react";

type ButtonProps = {
    classStyles?: string
    label: string
    icon?: any
    filled?: boolean
    bordered?: boolean
    size?: 'sm' | 'lg' 
}
class Button extends Component<ButtonProps> {
    constructor(props: ButtonProps) { 
        super(props);
    }

    render() {
        let classNames = ''
        if (this.props.filled) {
            classNames += 'bg-primary text-white '
        } else if (this.props.bordered) {
            classNames += 'bg-white border border-primary text-primary '
        }
        if (this.props.size == 'sm') {
            classNames += ' py-1 ';
        } else if (this.props.size == 'lg') {
            classNames += ' py-10 ';
        } else {
            classNames += ' py-5 '
        }
        return <button className={classNames + " text-lg justify-self-stretch rounded-full " + this.props.classStyles}>
            {this.props.label}
        </button>
    }
}

export default Button;