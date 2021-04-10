import { Component } from "react";
import Carousel from "../Carousel/Carousel";
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

        const carouselSettings = {
            dragSpeed: 2,
            itemWidth: 300,
            itemHeight: 180,
            itemSideOffsets: 5,
        }
      
        return <section>
            <h2 className="text-purple-dark text-xl">Your <strong>Favorites</strong></h2>
            <div className="mt-5">
                {/* <Carousel {...carouselSettings} _data={favorites}>
                    { */}
                    <ul className="flex flex-row space-x-10">
                        {favorites}
                    </ul>
                {/* }
                </Carousel> */}
            </div>
        </section>
    }
}

export default Favorites;