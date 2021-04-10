import { Component } from "react";
import FavoriteItem from "../FavoriteItem/FavoriteItem";

type FavoritesProps = {
    favorites: any[]
}
class Favorites extends Component<FavoritesProps> {

    render() {
        let favorites = [];
        
        for (const [index, item] of this.props.favorites.entries()) {
            favorites.push(<li key={index}><FavoriteItem name={item.name} mealType={item.mealType} rating={item.rating} imgSrc={item.imgSrc}/></li>);
        }

        return <section>
            <h2 className="text-purple-dark text-xl">Your <strong>Favorites</strong></h2>
            <div className="mt-5">
                <ul className="flex flex-row space-x-10">
                    {favorites}
                </ul>
            </div>
        </section>
    }
}

export default Favorites;