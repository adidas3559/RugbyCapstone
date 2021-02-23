import React from "react";

export default function() {
    const purpleFont = {
        color: 'purple'
    };

    const longerPhoto = {
        width: '105%'
    };

    return (
        <div className="page-wrapper">
            <div className="page-content-wrapper">
                <h1>Join the Team</h1>
                <div className="page-image-wrapper">
                    <img src={require("../../../static/assets/images/backgrounds/team-photo1.jpg")} />
                    {/* <div className="image-text" style={purpleFont}>Join the Team</div> */}
                </div>
                
                <p>
                    The rough and rugged sport of rugby is a sport of all shapes and sizes!
                    With 15 players on each team, there's spots for smaller speedy players, technique wizards, and big bruisers.
                    Our league offers a unique position where we play against other college teams around the midwest, including KU, Oklahoma, UMKC, MU, and more.
                    Our league is great for experienced rugby players trying to play after high school, but still has a majority of new players who are just learning how to ruck and scrum.
                    With roughly 15 games a semester (usually on Saturdays) and practice every Tuesday, Wednesday, Thursday at 6:00-8:00pm, there's no shortage of play for our team.                    
                </p>

                {/* <div className="page-image-wrapper">
                    <img src={require("../../../static/assets/images/squares/social3.png")} />
                    <div className="image-text">Team Building</div>
                </div>

                <p>
                    We also have many social events, including team socials after games, holiday socials, weekly team gatherings, and our annual game against the K-State Alumni.
                    These frequent events are extremely important for building team chemistry and spreading the inclusive culture of rugby.
                </p>


                <div className="page-image-wrapper">
                    <img src={require("../../../static/assets/images/backgrounds/areial-of-stadium.jpg")} />
                    <div className="image-text">Come to Practice</div>
                </div>

                <p>
                    If you'd like to join, simply walk in to our pratices, Tuesday, Wednesday, Thursday at 6:00-8:00pm to get a feel for the game.
                    Practices are at Memorial Stadium, on campus. If it's the cold winter months, practice might be in the Ahearn indoor track at a different time.
                    If you aren't sure practice isn't going on, or when, feel free to send us a message over Facebook, and make sure to like the team page while you're at it!
                </p> */}
                {/* add link here */}


                <div className="page-image-with-text">
                    <div>
                        <img src={require("../../../static/assets/images/squares/social3.png")} style={longerPhoto}/>
                        {/* <div className="image-text">Team Building</div> */}
                    </div>

                    <div>
                        <h2>Team Building</h2>
                        <p>
                            We also have many social events, including team socials after games, holiday socials, weekly team gatherings, and our annual game against the K-State Alumni.
                            These frequent events are extremely important for building team chemistry and spreading the inclusive culture of rugby.
                        </p>
                    </div>
                </div>

                <div className="page-image-with-text">
                    <div>
                        <h2>Come to Practice</h2>
                        <p>
                            If you'd like to join, simply walk in to our pratices, Tuesday, Wednesday, Thursday at 6:00-8:00pm to get a feel for the game.
                            Practices are at Memorial Stadium, on campus. If it's the cold winter months, practice might be in the Ahearn indoor track at a different time.
                            If you aren't sure practice is going on, or when, feel free to send us a message over Facebook, and make sure to like the team page while you're at it!
                        </p>
                    </div>
                    
                    <div>
                        <img src={require("../../../static/assets/images/backgrounds/areial-of-stadium.jpg")} />
                    </div>
                </div>

            </div>
        </div>
    );
}