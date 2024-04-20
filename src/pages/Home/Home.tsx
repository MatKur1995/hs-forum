import "./Home.css";
import {LeftSideBar} from "./LeftSideBar/LeftSideBar";
import {RightSideBar} from "./RightSideBar/RightSideBar";
import {ForumStats} from "./ForumStats/ForumStats";



export const Home = () => {

    return (
        <div className="main-view">
            <div className="homepage">
                <div className="leftSideBar">
                    <LeftSideBar/>
                </div>
                <div className="rightSideBar">
                    <RightSideBar/>
                </div>
            </div>
            <div className="stats">
                <ForumStats/>
            </div>
        </div>
    )
}