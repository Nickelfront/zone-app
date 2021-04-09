import { Component } from "react";
import { MealType } from "../utils/types";

type MealItemProps = {
    name: string
    rating: number
    type: MealType
    img: any
    isEven: boolean
}

class MealItem extends Component<MealItemProps> {

    constructor(props: MealItemProps) {
        super(props);
    }

    render() {
        switch(this.props.type) {
            case MealType.CARB:
                break;
            case MealType.PROTEIN:
                break;
            case MealType.FAT:
                break;
        }

        return <div>
            <div className={`rounded ${this.props.isEven ? "bg-red-200" : "bg-white"}`}>
                <img src={this.props.img}/>
                <label>{this.props.name}</label>
            </div>
        </div>
    }
}

export default MealItem;