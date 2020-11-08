import React from "react";

export default function() {
    return (
        <div className="page-wrapper">
            <div className="page-content-wrapper">
                <h1>Join the Team</h1>
                <div className="page-image-wrapper">
                    <img src={require("../../../static/assets/images/backgrounds/team-photo1.jpg")} />
                </div>
                
                <p>
                The rugby team offers an enjoyable experience for players who are up for a challenge. 
                Team members participate in weekday practices on Tuesday, Wednesday, and Thursday, as well as weekend games against other club and college teams.
                There are also several social events, including our annual game against the K-State alumni. 
                If you would like to play rugby, you can attend some of our practices at Memorial Stadium to get a feel for the team.	 
 	            
                Email one of our officers for more information or if you are interested in joining the KSUFR Rugby team.
                </p>
            </div>
        </div>
    );
}