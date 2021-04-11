import { Component } from "react";
import { MealType } from "../../utils/types";
import StarIcon from '@material-ui/icons/Star';
import FilledButton from "../buttons/FilledButton/FilledButton";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

type SuggestedRecipeProps = {
    name: string
    rating: number
    blocks: number
    img: any
    isEven: boolean
    prepTime: number
}

class SuggestedRecipe extends Component<SuggestedRecipeProps> {

    constructor(props: SuggestedRecipeProps) {
        super(props);
    }

    render() {
 
        return <div className={`rounded-3xl mt-20 p-10 top-70 min-h-100 w-70 ${this.props.isEven ? "bg-red-200" : "bg-white"}`}>
            <div className="block mb-3">
                <div className="-mt-28">
                    <img src={this.props.img} className="w-40 justify-self-center"/>
                </div>
            </div>
            <div className="block flex">
                <div className="flex-grow">
                    <StarIcon className="text-purple"/> <span className="text-sm">{this.props.rating}</span>
                    <h3>{this.props.name}</h3>
                    <h4 className="text-gray-500"><strong>{this.props.blocks}</strong> blocks</h4>
                </div>
                <div className="ml-5 rounded-full bg-purple-dark h-14 w-14 flex flex-col items-center justify-center">
                    <span className="text-purple-light text-sm">{this.props.prepTime}</span>
                    <span className="text-purple-light text-xs">min</span>
                </div>
            </div>
            <div className="flex justify-self-right">
                <FilledButton classStyles="flex-1 mt-10 px-5" label="View Recipe" icon={<ArrowRightAltIcon/>}/>
            </div>
        </div>
    }
}

export default SuggestedRecipe;