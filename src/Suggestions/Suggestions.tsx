import { Component } from "react";
import MealItem from "../MealItem/MealItem";
import { Meal } from "../utils/types";

type SuggestionsProps = {
    meals: Meal[]
}
class Suggestions extends Component<SuggestionsProps> {
    
    constructor(props: SuggestionsProps) {
        super(props);
    }
    
    render() {
        let mealItems : any[] = [];
        for (const [index, item] of this.props.meals.entries()) {
            mealItems.push(<li key={index}><MealItem rating={item.rating} name={item.name} type={item.type} img={item.img} isEven={index % 2 == 0}/></li>);
        }

        return <section className="">
            <h2 className="text-purple-dark"><strong>Suggested</strong> for you</h2>
            <div>
                <ul>
                    {mealItems}
                </ul>
            </div>
        </section>
    }
}

export default Suggestions;