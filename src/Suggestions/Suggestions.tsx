import { Component } from "react";
import SuggestedRecipe from "../SuggestedRecipe/SuggestedRecipe";
import { Recipe } from "../utils/types";

type SuggestionsProps = {
    meals: Recipe[]
}
class Suggestions extends Component<SuggestionsProps> {
    
    constructor(props: SuggestionsProps) {
        super(props);
    }
    
    render() {
        let recipeItems : any[] = [];
        for (const [index, item] of this.props.meals.entries()) {
            recipeItems.push(<li key={index}><SuggestedRecipe prepTime={item.prepTime} rating={item.rating} name={item.name} type={item.type} img={item.img} isEven={index % 2 == 0}/></li>);
        }
        return <section className="">
            <h2 className="text-purple-dark text-xl"><strong>Suggested</strong> for you</h2>
            <div>
                <ul className="flex flex-row space-x-10">
                    {recipeItems}
                </ul>
            </div>
        </section>
    }
}

export default Suggestions;