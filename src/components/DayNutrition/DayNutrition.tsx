import { Component } from "react";
import food from '../../img/food.jpg';
import NutritionItem from "../NutritionItem/NutritionItem";

type DayNutritionProps = {
    day: string
    nutritionItems: any[]
}
class DayNutrition extends Component<DayNutritionProps> {

    render() {
        let items = [];
        for(const [index, item] of this.props.nutritionItems.entries()) {
            items.push(<li key={index}><NutritionItem name={item.name} blocks={item.blocks} img={item.img} /></li>)
        }

        return <section className="">
            <h3 className="text-xl">{this.props.day}</h3>
            <ul>
                {items}
            </ul>
        </section>
    }
}

export default DayNutrition;