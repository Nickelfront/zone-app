import { Component } from "react";
import mealImg from '../../img/meal.jpg'
import { Meal } from "../../utils/classes/Meal";
import Button from "../buttons/Button/Button";

type MealItemProps = {
    mealProps: Meal
}
class MealItem extends Component<MealItemProps> {
    
    render() {
        let nutritionInfo = []
        for (const [index, item] of this.props.mealProps.macronutrients.entries()) {
            nutritionInfo.push(<p key={index} className="text-gray">{item.type}: {item.weight}{item.unit} per block</p>)
        }

        return <div className="w-96">
            <img src={mealImg}/>
            <div className="px-5 py-10 rounded-b-3xl bg-white align-middle">
                <div className="flex-1">
                    <h1 className="text-xl"><strong>{this.props.mealProps.name}</strong></h1>
                    {nutritionInfo}
                </div>
                <div className="space-x-5 pt-5 container justify-center">
                    <Button size="sm" filled={true} label="View"
                        classStyles="w-40 px-5"/>
                    <Button size="sm" bordered={true} label="Add to Meals"
                        classStyles="w-40 px-5"/>
                </div>
            </div>
        </div>
    }
}

export default MealItem;