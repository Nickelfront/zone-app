import { Component } from "react";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import food from '../img/food.jpg';

type FavoriteItemProps = {
    name: string
    rating: number
}
class FavoriteItem extends Component<FavoriteItemProps> {

    render() {
        let starsRating = [];
        for (let index = 0; index < Math.floor(this.props.rating); index++) {
            starsRating.push(<StarIcon key={starsRating.length} className="text-yellow"/>);            
        }
        if (this.props.rating % 1 != 0) {
            starsRating.push(<StarHalfIcon key={starsRating.length} className="text-yellow"/>);
        }
        if (starsRating.length < 5) {
            while(starsRating.length < 5) {
                starsRating.push(<StarBorderIcon key={starsRating.length} className="text-yellow"/>);
            }
        }

        return <div className="bg-white rounded-xl">
                <span>{this.props.name}</span>
            {starsRating}
        </div>
    }
}

export default FavoriteItem;