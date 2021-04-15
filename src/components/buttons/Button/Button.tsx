import { Component } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
    classStyles?: string
    linkTo?: string
    component?: any
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
        if (!this.props.linkTo) {
            return <button className={classNames + " text-lg justify-self-stretch rounded-full " + this.props.classStyles}>
                {this.props.label}
            </button>
        } else {
            return <Link to={{pathname: this.props.linkTo}} component={this.props.component} className={classNames + " text-center text-lg rounded-full " + this.props.classStyles}>
                    {this.props.label}
                </Link>
        }
    }
}

export default Button;