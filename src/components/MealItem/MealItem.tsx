import { Component } from "react";
import Button from '../Button/Button';
import mealImg from '../../img/meal.jpg'

class MealItem extends Component {
    
    render() {
        return <div className="">
           <div className="rounded-t-3xl">
               <img src={mealImg}/>
            </div> 
            <div className="px-5 py-10 rounded-b-3xl bg-white grid grid-cols-2">
                <div>
                    <h1 className="text-xl"><strong>Delicious meal here</strong></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <div className="">
                    <span>$12.50</span>
                </div>
                <Button label="View" classStyles="justify-self-stretch bg-purple-dark text-white rounded-full"/>
            </div>
        </div>
    }
}

export default MealItem;