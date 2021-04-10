import { Component } from "react";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { MealType } from "../utils/types";

type FavoriteItemProps = {
    name: string
    rating: number
    mealType: MealType
    imgSrc: any
}
class FavoriteItem extends Component<FavoriteItemProps> {

    render() {
        let starsRating = [];
        for (let index = 0; index < Math.floor(this.props.rating); index++) {
            starsRating.push(<StarIcon key={starsRating.length} className="text-yellow-500"/>);            
        }
        if (this.props.rating % 1 != 0) {
            starsRating.push(<StarHalfIcon key={starsRating.length} className="text-yellow-500"/>);
        }
        if (starsRating.length < 5) {
            while(starsRating.length < 5) {
                starsRating.push(<StarBorderIcon key={starsRating.length} className="text-yellow-500"/>);
            }
        }

        return <div className="bg-white rounded-xl w-80 px-10 py-5 flex">
            <div className="pr-5">
                <img className="shadow rounded-full max-w-full h-20 align-middle border-none" src={this.props.imgSrc}/>
            </div>
            <div className="flex flex-col align-middle">
                <span>{this.props.name}</span>
                <span className="text-gray-400 text-sm">{this.props.mealType}</span>
                <div>
                    {starsRating}
                </div>
            </div>
        </div>
    }
}

export default FavoriteItem;