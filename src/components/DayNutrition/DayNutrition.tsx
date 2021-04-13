import { Component } from "react";
import food from '../../img/food.jpg';
import { Meal } from "../../utils/classes/Meal";
import MealItem from "../MealItem/MealItem";

type DayNutritionProps = {
    day: string
    nutritionItems: Meal[]
}
class DayNutrition extends Component<DayNutritionProps> {


    render() {
        
        let items = [];
        for(const [index, item] of this.props.nutritionItems.entries()) {
            items.push(<li key={index}><MealItem mealProps={item} /></li>)
        }

        return <section className="space-y-5">
            <h3 className="text-xl">{this.props.day}</h3>
            <ul className="flex space-x-10">
                {items}
            </ul>
        </section>
    }
}

export default DayNutrition;