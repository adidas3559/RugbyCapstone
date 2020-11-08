import React from "react";
import { Link } from "react-router-dom";

export default function() {
    return (
        <div className="square-wrapper">
                    
                    <div className="square-pair">
                        <div className="square-image">
                            <img src={ require("../../../static/assets/images/squares/scrum1.jpg")} />
                        </div>
                        <div className="square-text">
                            <h1>Come to our practices!</h1>
                            <p>Interested in finding out if you have what it takes to play rugby? Just come drop into our practices! No experience needed, all are welcome.</p>
                            <Link to={"join-team"} >
                                <button type="button" className="btn">Go</button>
                            </Link>
                        </div>                        
                    </div>

                    <div className="square-pair">
                        <div className="square-text">
                            <h1>Support the Team</h1>
                            <p>Come watch our players compete against other schools/teams. Check out our schedule and location, and make sure to check our facebook page for any changes.</p>
                            <Link to={"join-team"} >
                                <button type="button" className="btn">Go</button>
                            </Link>
                        </div>
                        <div className="square-image">
                            <img src={ require("../../../static/assets/images/squares/me.jpg")} />
                        </div>
                    </div>

                    <div className="square-pair">
                        <div className="square-image">
                            <img src={ require("../../../static/assets/images/squares/gabeJumos.jpg")} />
                        </div>
                        <div className="square-text">
                            <h1>Learn about the game</h1>
                            <p>Learn more about the world’s most popular full-contact sport that’s been growing everyday in the States! While it may seem complex, it doesn’t take much to get into the sport!</p>
                            <Link to={"join-team"} >
                                <button type="button" className="btn">Go</button>
                            </Link>
                        </div>
                    </div>

                    <div className="square-pair">
                        <div className="square-text">
                            <h1>Fort Riley Community</h1>
                            <p>The relationship between K-State players and Fort Riley players has always been an important aspect of the team. If you’re a soldier from Fort Riley and want to know more, go here!</p>
                            <Link to={"join-team"} >
                                <button type="button" className="btn">Go</button>
                            </Link>
                        </div>
                        <div className="square-image">
                            <img src={ require("../../../static/assets/images/squares/jasonRuns.jpg")} />
                        </div>
                    </div>

                </div>
    );
}