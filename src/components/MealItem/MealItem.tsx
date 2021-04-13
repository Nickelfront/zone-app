import { Component } from "react";
import mealImg from '../../img/meal.jpg'
import Button from "../buttons/Button/Button";

class MealItem extends Component {
    
    render() {
        return <div className="">
            <img src={mealImg}/>
            <div className="px-5 py-10 rounded-b-3xl bg-white flex flex-col align-middle">
                <div className="flex-1">
                    <h1 className="text-xl"><strong>Delicious meal here</strong></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <div className="flex flex-row space-x-10 pt-5">
                    <Button filled={true} label="View"
                        classStyles="flex-1"/>
                    <Button bordered={true} label="Add to Meals"
                        classStyles="flex-1"/>
                </div>
            </div>
        </div>
    }
}

export default MealItem;