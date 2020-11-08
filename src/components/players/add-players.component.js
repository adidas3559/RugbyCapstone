import React, { Component } from "react";
import PlayersDataService from "../../services/players.service";

export default class AddPlayers extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: null,
            name: "",
            year: "",
            major: "",
            position: "",
            hometown: "",

            submitted: false
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeMajor = this.onChangeMajor.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangeHometown = this.onChangeHometown.bind(this);
        this.savePlayers = this.savePlayers.bind(this);
        this.newPlayers = this.newPlayers.bind(this);

    }

    //onChanges
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            year: e.target.value
        });
    }

    onChangeMajor(e) {
        this.setState({
            major: e.target.value
        });
    }

    onChangePosition(e) {
        this.setState({
            position: e.target.value
        });
    }

    onChangeHometown(e) {
        this.setState({
            hometown: e.target.value
        });
    }

    //Save and new players
    savePlayers() {
        var data = {
            name: this.state.name,
            year: this.state.year,
            major: this.state.major,
            position: this.state.position,
            hometown: this.state.hometown,
        };

        PlayersDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    year: response.data.year,
                    major: response.data.major,
                    position: response.data.position,
                    hometown: response.data.hometown,

                    submitted:true
                });
                console.log("response", response.data);
            }).catch(e => {
                console.log(e, data);
            });

    }

    newPlayers() {
        this.setState({
            id: null,
            name: "",
            year: "",
            major: "",
            position: "",
            hometown: "",

            submitted: false
        });
    }


    render() {
        return (
            <div className="page-wrapper">
                <div className="page-content-wrapper">
                    <div className="submit-form">
                        {this.state.submitted ? (
                        <div>
                            <h4>You submitted successfully!</h4>
                            <button className="btn" onClick={this.newPlayers}>
                                Add
                            </button>
                        </div>
                        ) : (
                        <div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    required
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                                    name="name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="year">Year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="year"
                                    required
                                    value={this.state.year}
                                    onChange={this.onChangeYear}
                                    name="year"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="major">major</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="major"
                                    required
                                    value={this.state.major}
                                    onChange={this.onChangeMajor}
                                    name="major"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="position">position</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="position"
                                    required
                                    value={this.state.position}
                                    onChange={this.onChangePosition}
                                    name="position"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="hometown">hometown</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="hometown"
                                    required
                                    value={this.state.hometown}
                                    onChange={this.onChangeHometown}
                                    name="hometown"
                                />
                            </div>

                            <button onClick={this.savePlayers} className="btn">
                                Submit
                            </button>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            

        );
        
    }


}