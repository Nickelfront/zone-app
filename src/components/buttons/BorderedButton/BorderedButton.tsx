import { Component } from "react";

type BorderedButtonProps = {
    classStyles?: string
    label: string
}
class BorderedButton extends Component<BorderedButtonProps> {
    constructor(props: BorderedButtonProps) { 
        super(props);
    }

    render() {
        return <button className={"py-5 text-lg justify-self-stretch bg-white border-purple-dark text-purple-dark rounded-full " + this.props.classStyles}>
            {this.props.label}
        </button>
    }
}

export default BorderedButton;