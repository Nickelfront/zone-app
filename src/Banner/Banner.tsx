import { Component } from "react";

type BannerProps = {
    text: string
    imgSrc: string
}
class Banner extends Component<BannerProps> {

    render() {
        return <div className="flex bg-white rounded-3xl p-5 grid grid-cols-2">
            <h4 className="text-purple-dark text-xl">{this.props.text}</h4>
            <img className="object-right object-contain w-20" src={this.props.imgSrc}/>
        </div>
    }
}

export default Banner;