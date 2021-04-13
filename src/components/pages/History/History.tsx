import { Component, useState } from "react";
import { daysOfTheWeek, monthNames } from "../../../utils/constants";
import { nutritionItems } from "../../../utils/mockData";
import DayNutrition from "../../DayNutrition/DayNutrition";

type HistoryProps = {

}
type HistoryState = {

}
class History extends Component<HistoryProps,HistoryState> {

    constructor(props: HistoryProps) {
        super(props);
    }

    getTenDaysAgo() {
        let day = 1;
        let dh = [];

        while (day < 10) {
            var d = new Date();
            d.setDate(d.getDate() - day);

            const dayString = `${daysOfTheWeek[d.getDay()]}, ${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
    
            dh.push(<li key={day}><DayNutrition day={dayString} nutritionItems={[]}/></li>)
            day++;
        }

        return dh;
    }

    render() {
        
        return <div>
            <ul>
                {this.getTenDaysAgo()}
            </ul>
        </div>
    }
}

export default History;