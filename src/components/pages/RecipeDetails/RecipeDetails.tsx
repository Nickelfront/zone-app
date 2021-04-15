import { TrendingUpSharp } from "@material-ui/icons";
import { Component } from "react";
import { Redirect, withRouter } from "react-router";
import { recipes } from "../../../utils/mockData";
import { Recipe } from "../../../utils/types";
import Ingredient from "../../Ingredient/Ingredient";

type RecipeDetailsState = {
    recipe?: Recipe | null
    isLoading: boolean
}
class RecipeDetails extends Component<any, RecipeDetailsState> {

    constructor(props: any) {
        super(props);
        this.state = {recipe: null, isLoading: true};
    }
    
    componentDidMount() {
        // setTimeout(() => {
            
            const id = this.props.match.params.id; 
            const recipe = recipes.find(recipe => recipe.slug === id);
            this.setState({recipe: recipe, isLoading: false}); // mock; should come from server
        // }, 500);
    }

    render() {
        if (this.state.isLoading) {
            return <h1>Loading, please wait...</h1>
        }
        if (this.state.recipe) {
            const recipe: Recipe = this.state.recipe;
            const ingredients = [];
            for (const [index, item] of recipe.ingredients.entries()) {
                ingredients.push(<li className={`${ index != recipe.ingredients.length-1 ? 'border-b-2' : ''}`} key={index}><Ingredient name={item.name}/></li>);
            }

            return <section className="w-3/4">
                <img className="w-52" src={recipe.img}/>
                <h1 className="text-3xl"><strong>{recipe.name}</strong></h1>
                <article className="grid grid-cols-2  mt-10">
                    <div className="rounded-3xl p-5 bg-white w-64">
                        <h2 className="font-semibold">What you need:</h2>
                        <ul>
                            {ingredients}
                        </ul>
                    </div>
                    <article className="">
                        <p>{recipe.description}</p>
                    </article>
                </article>
            </section>
        }
        return <Redirect to='/'/>
    }
}

export default withRouter(RecipeDetails);