import { Component } from "react";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import { MealType } from "../utils/types";

class Favorites extends Component {

    render() {
        let favorites = [];
        

        return <section>
            <h2 className="text-purple-dark text-xl">Your <strong>Favorites</strong></h2>
            <FavoriteItem name="Kiwi" mealType={MealType.CARB} rating={3.5}/>
        </section>
    }
}

export default Favorites;