import { Component } from "react";
import { Recipe } from "../../utils/types";
import SuggestedRecipe from "../SuggestedRecipe/SuggestedRecipe";

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
        
        const carouselSettings = {
            dragSpeed: 2,
            itemWidth: 300,
            itemHeight: 180,
            itemSideOffsets: 5,
        }
        return <section>
            <h2 className="text-purple-dark text-xl"><strong>Suggested</strong> for you</h2>
            <div className="mt-5">
            {/* <Carousel {...carouselSettings} _data={recipeItems}>
                { */}
                   <ul className="flex flex-row space-x-10">
                    {recipeItems}
                </ul>
                {/* }
                </Carousel> */}
            </div>
        </section>
    }
}

export default Suggestions;