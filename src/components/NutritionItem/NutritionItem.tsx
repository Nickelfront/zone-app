import { Component } from "react";
import MealItem from "../MealItem/MealItem";

type NutritionItemProp = {
    name: string
    blocks: number
    img: any
}
class NutritionItem extends Component<NutritionItemProp> {

    render() {
        return <div className="rounded-lg w-48 bg-white flex flex-cols space-y-10">
            <img src={this.props.img} />
            <h3 className="text-lg">{this.props.name}</h3>
            <MealItem/>
        </div>
    }
}

export default NutritionItem;