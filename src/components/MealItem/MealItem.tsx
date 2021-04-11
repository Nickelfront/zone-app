import { Component } from "react";
import FilledButton from '../buttons/FilledButton/FilledButton';
import BorderedButton from '../buttons/BorderedButton/BorderedButton';
import mealImg from '../../img/meal.jpg'

class MealItem extends Component {
    
    render() {
        return <div className="">
           <div className="rounded-t-3xl">
               <img src={mealImg}/>
            </div> 
            <div className="px-5 py-10 rounded-b-3xl bg-white flex flex-col align-middle">
                <div className="flex-1">
                    <h1 className="text-xl"><strong>Delicious meal here</strong></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <div className="flex-1">
                    <span>$12.50</span>
                </div>
                <div className="flex flex-row space-x-10">
                    <FilledButton label="View"
                        classStyles="flex-1"/>
                    <BorderedButton label="Add to Meals"
                        classStyles="flex-1"/>
                </div>
            </div>
        </div>
    }
}

export default MealItem;