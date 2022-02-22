import { Link } from "react-router-dom";
// import "./MainNavigation.css"
import classes from "./MainNavigation.module.css"

function MainNavigation(){
// return <header>
//     <div >React Meetups</div>
return <header className={classes.header}>
    <div className={classes.logo}>React Meetups</div>
    <nav>
        <ul>
            <li><Link to="/">All Meetups</Link></li>
            <li><Link to="/new-meetup">Add Meetup</Link></li>
            <li><Link to="/favourites">My favourites</Link></li>
        </ul>
    </nav>
</header>
}
export default MainNavigation;