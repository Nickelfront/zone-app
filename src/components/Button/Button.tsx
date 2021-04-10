import { Component } from "react";

type ButtonProps = {
    classes: string
    label: string
}
class Button extends Component<ButtonProps> {
    constructor(props: ButtonProps) { 
        super(props);
    }

    render() {
        return <button className={this.props.classes}>
            {this.props.label}
        </button>
    }
}

export default Button;