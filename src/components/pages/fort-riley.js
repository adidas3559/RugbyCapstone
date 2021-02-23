import React from "react";

export default function() {
    const bigPic = {
        height: '100%'
    }

    return (
        <div className="page-wrapper">
            <div className="page-content-wrapper">
                <h1>Alumni</h1>
                <div className="page-image-wrapper">
                    <img src={require("../../../static/assets/images/squares/fort-riley1.png")} />
                </div>
                
                <p>
                    Half of our name is "Fort Riley" for a reason. Fort Riley was historically a very large part of our rugby community.
                    Soldiers have even invited college players to their group work outs and other team building events.
                   
                </p>

                <p>
                    Soldiers are also encouraged to come to any practices or socials they can.       
                    While soldiers might not be able to play in league matches anymore, there will always be a place on the team for soldiers and a place for Fort Riley in the team name. 
                    We also believe it's important to keep the Fort Riley roots in the team.
                </p>

                <div className="page-image-with-text">
                    <div>
                        <img src={require("../../../static/assets/images/squares/alumni1.jpg")}/>
                        {/* <div className="image-text">Team Building</div> */}
                    </div>

                    <div>
                        <h2>Soldier Participation</h2>
                        <p>
                            Unfortunately, when the team went from a general club team to a collegiate club team, there were rules set up that only full time students could play in league games.
                            However, any exhibition matches can be played by any player. There are typically a decent handful of exhibition matches a semester, including a "B" game after many league games.
                        </p>
                    </div>
                </div>

                <div className="page-image-with-text">
                    <div>
                        <h2>Warrior Mindset</h2>
                        <p>
                            Rugby culture and military culture have a surprising overlap.
                            That being said, soldiers bring a unique physicality to the game.
                            The same physicality and mindset that Army Officer Jason (showed right) brought to games and practice.
                            He and others in turn brought up the whole team and are always welcome.
                        </p>
                    </div>
                    
                    <div>
                        <img src={require("../../../static/assets/images/squares/jasonRuns.jpg")} />
                    </div>
                </div>



            </div>
        </div>
    );
}