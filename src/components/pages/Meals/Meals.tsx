import { Component } from "react";
import DateDisplay from "../../DateDisplay/DateDisplay";
import MealItem from "../../MealItem/MealItem";
import Search from "../../Search/Search";

class Meals extends Component {

    render() {
        let items = [];
        while (items.length < 11) {
            items.push(<li key={items.length}><MealItem/></li>);
        } 
        return <section className="space-y-5">
            <div className="flex justify-between">
                <Search className="max-w-lg"/>
                <DateDisplay/>
            </div>
            <div className="">
                <ul className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {items}
                </ul>
            </div>

        </section>
    }
}

export default Meals;