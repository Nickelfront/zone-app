import { Component } from "react";
import { nutritionItems } from "../../../utils/mockData";
import DateDisplay from "../../DateDisplay/DateDisplay";
import MealItem from "../../MealItem/MealItem";
import Search from "../../Search/Search";

class Meals extends Component {

    render() {
        let items = [];
        for (const [index, item] of nutritionItems.entries()) {
            items.push(<li key={index}><MealItem mealProps={item}/></li>);
        } 
        return <section className="space-y-5">
            <div className="flex justify-between">
                <Search className="max-w-lg"/>
                <DateDisplay/>
            </div>
            <div>
                <ul className="grid gap-4 grid-cols-4">
                    {items}
                </ul>
            </div>

        </section>
    }
}

export default Meals;