import { Component } from "react";
import Banner from "../../Banner/Banner";
import Search from "../../Search/Search";
import DateDisplay from "../../DateDisplay/DateDisplay";
import Suggestions from "../../Suggestions/Suggestions";
import Favorites from "../../Favorites/Favorites";
import bannerImg, { bannerText, favorites, meals } from "../../utils/mockData";

class Dashboard extends Component {

    render() {

        return <section className="space-y-5">
            <div className="flex justify-between">
                <Search className="max-w-lg"/>
                <DateDisplay/>
            </div>
            <Banner text={bannerText} imgSrc={bannerImg}/>
            <Suggestions meals={meals}/>
            <Favorites favorites={favorites}/>
        </section>
    }
}

export default Dashboard;