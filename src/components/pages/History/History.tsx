import { Component } from "react";
import { nutritionItems } from "../../../utils/mockData";
import DayNutrition from "../../DayNutrition/DayNutrition";

class History extends Component {

    
    getTenDaysAgo() {
        let day = 1;
        while (day < 10) {
            var d = new Date();
            d.setDate(d.getDate() - day);

            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
        
            const today = `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
    
            day++;
        }
    }

    render() {
        
        return <div>
            <ul>
            </ul>
        </div>
    }
}

export default History;