import React from "react";

// import alumni from "../../../static/assets/images/squares/alumni.PNG";

export default function() {
    const bigPic = {
        height: '100%',
        marginBottom: "30px"
    }

    return (
        <div className="page-wrapper">
            <div className="page-content-wrapper">
                <h1>Alumni</h1>
                <div className="page-image-wrapper">
                    <img src={require("../../../static/assets/images/squares/alumni.png")} />
                </div>
                
                <p>
                    If you're a K-State/Fort Riley Alumni, we thank you for being part of the family!
                    Our Alumni are very important to us and we have many events where we try to connect with you all.
                    The biggest event to look out for is our Alumni Game we have every September in Manhattan.
                    A full 15s match of Alumni vs Current players, followed by a huge barbeque/social!
                </p>

                <div className="page-image-with-text">
                    <div>
                        <img src={require("../../../static/assets/images/squares/alumni1.jpg")}/>
                        {/* <div className="image-text">Team Building</div> */}
                    </div>

                    <div>
                        <h2>Alumni Participation</h2>
                        <p>
                            If you would like to participate in this or any other Alumni events, please follow our social media pages.
                            If you'd like to help the team in any way, reach out to us with facebook message.
                            Also, you can join the K-State/Fort Riley Alumni Group on Facebook! This is the best way to connect with other alumni.
                        </p>
                    </div>
                </div>

                <div className="page-image-with-text">
                    <div>
                        <h2>Support the Team</h2>
                        <p>
                            If you'd like to come to our games, or see if there's any games near you, check out our Support the Team page!
                            On there you'll also find a link to our merch page so you can support us while rocking a shirt or jersey.
                            For the most up to date news, make sure to follow our facebook or instagram!
                        </p>
                    </div>
                    
                    <div>
                        <img src={require("../../../static/assets/images/squares/alumni2.jpg")} />
                    </div>
                </div>

                <div className="page-image-wrapper">
                    <img style={bigPic} src={require("../../../static/assets/images/squares/alumni.png")} />
                </div>

                {/* add facebook links */}
                {/* ask dilly if we still have the newsletter from rugby2jack or tfbrown */}

                {/* <p>
                Thanks to all who came out this year!	 
 	            Alumni who would like to be added to the email list should contact one of our officers. 
                Also, don't forget about our Alumni game every September in Manhattan. 
                This game is played the Saturday of Labor Day weekend at Memorial Stadium. 
                In addition, there is a newletter that offers KSUFR Rugby updates via email. 
                If you would like to be added, please send an email to rugby2jack@yahoo.com or tfbrown@bluevalley.net.
                </p>
                <p> 	 
 	            We currently play in the Memorial Stadium on the Kansas State University campus. 
                The pitch is located adjacent to the Alumni Center at the intersection of Anderson Avenue and 17th Street. 
                Parking is available on the west side of the stadium, just off of Denison Avenue. 
                Post match socials are generally held at the southeast corner of Harris Avenue. and Hunting Avenue, just a couple of blocks west of the stadium.
                </p> */}

            </div>
        </div>
    );
}