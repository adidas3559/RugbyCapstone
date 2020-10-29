import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom"

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
                </div>

            </div>

            <div className="navigation-bottom-row">
                {/* <img src="images/PurpleBar.gif" alt="purpleBar" /> */}
            </div>

            
        </div>
    )
}

export default withRouter(NavigationComponent);