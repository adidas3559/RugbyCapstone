import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const NavigationComponent = (props) => {


    return (
        <div className="nav-wrapper">

            <div className="navigation-top-row">

                <div className="banner-side">
                    <img src={ require("../../../static/assets/images/Header.jpg")} />
                </div>

                <div className="link-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            Home
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/join-team" activeClassName="nav-link-active">
                            Join Team
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/alumni" activeClassName="nav-link-active">
                            Alumni
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to={"/add"} activeClassName="nav-link-active">
                            Add
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to={"/players"} activeClassName="nav-link-active">
                            players
                        </NavLink>
                    </div>


                    <div className="hamburger-wrapper">
                        <div id="menuToggle">
                            <input type="checkbox" />

                            <span></span>
                            <span></span>
                            <span></span>

                            <ul id="menu">
                                <Link to={"/"}>
                                    <li>Home</li>
                                </Link>
                                <Link to={"/join-team"}>
                                    <li>Join Team</li>
                                </Link>
                                <Link to={"/alumni"}>
                                    <li>Alumni</li>
                                </Link>
                                <Link to={"/add"}>
                                    <li>Add</li>
                                </Link>
                                <Link to={"/players"}>
                                    <li>Players</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="navigation-bottom-row">
                {/* <img src="images/PurpleBar.gif" alt="purpleBar" /> */}
            </div>

            
        </div>
    )
}

export default withRouter(NavigationComponent);