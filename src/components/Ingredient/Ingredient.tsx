import { Component } from "react";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

type IngredientProps = {
    name: string
}
class Ingredient extends Component<IngredientProps> {
    render() {
        return <div className="p-2">
            <ArrowRightIcon/>
            <span>{this.props.name}</span>
        </div>
    }
}

export default Ingredient;