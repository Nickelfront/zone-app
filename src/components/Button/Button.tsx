import { Component } from "react";

type ButtonProps = {
    classStyles: string
    label: string
}
class Button extends Component<ButtonProps> {
    constructor(props: ButtonProps) { 
        super(props);
    }

    render() {
        return <button className={this.props.classStyles}>
            {this.props.label}
        </button>
    }
}

export default Button;