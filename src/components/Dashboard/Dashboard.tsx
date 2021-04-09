import { Component } from "react";
import Banner from "../../Banner/Banner";
import Search from "../../Search/Search";
import bannerImg from '../../img/arabica-149.png';
import DateDisplay from "../../DateDisplay/DateDisplay";
import Suggestions from "../../Suggestions/Suggestions";
import { Recipe, MealType } from "../../utils/types";
import dish from '../../img/dish.png';
import Favorites from "../../Favorites/Favorites";

class Dashboard extends Component {

    render() {
        let img = dish;
        let meals: Recipe[] = [
            {name: 'Tomato', type: MealType.CARB, img: img, rating: 4.2, prepTime: 60},
            {name: 'Meat', type: MealType.PROTEIN, img: img, rating: 4.6, prepTime: 120},
            {name: 'Eggs', type: MealType.PROTEIN, img: img, rating: 4.9, prepTime: 30},
            {name: 'Avocado', type: MealType.FAT, img: img, rating: 5, prepTime: 40},
        ];
        return <section className="px-10 space-y-5">
            <div className="flex justify-between">
                <Search className="max-w-lg"/>
                <DateDisplay/>
            </div>
            <Banner text="Good news, you've stayed in the zone for 2 months!" imgSrc={bannerImg}/>
            <Suggestions meals={meals}/>
            <Favorites/>
        </section>
    }
}

export default Dashboard;