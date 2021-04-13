import { Component } from "react";

type BannerProps = {
    text: string
    imgSrc: string
}
class Banner extends Component<BannerProps> {

    render() {
        return <div className="flex justify-between bg-white rounded-3xl p-10">
            <h4 className="text-dark text-xl self-center w-8/12">{this.props.text}</h4>
            <img className="object-right object-contain w-20" src={this.props.imgSrc}/>
        </div>
    }
}

export default Banner;