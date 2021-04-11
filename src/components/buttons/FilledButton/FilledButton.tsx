import { Component } from "react";

type FilledButtonProps = {
    classStyles?: string
    label: string
    icon?: any
}
class FilledButton extends Component<FilledButtonProps> {
    constructor(props: FilledButtonProps) { 
        super(props);
    }

    render() {
        return <button className={ this.props.classStyles + " py-5 text-lg justify-self-stretch bg-purple-dark text-white rounded-full"}>
            {this.props.label}
            {this.props.icon}
        </button>
    }
}

export default FilledButton;