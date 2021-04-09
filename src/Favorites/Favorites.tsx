import { Component } from "react";
import FavoriteItem from "../FavoriteItem/FavoriteItem";

class Favorites extends Component {

    render() {
        
        return <section>
            <FavoriteItem name="Tomato" rating={0.5}/>
        </section>
    }
}

export default Favorites;