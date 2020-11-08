import React, { Component } from "react";
import PlayersDataService from "../../services/players.service";

export default class Player extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          currentPlayer: {
            id: null,
            name: "",
            year: "",
            major: "",
            position: "",
            hometown: "",
          },
          message: ""
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeMajor = this.onChangeMajor.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangeHometown = this.onChangeHometown.bind(this);
        this.getPlayer = this.getPlayer.bind(this);
        this.updatePlayer = this.updatePlayer.bind(this);
        this.deletePlayer = this.deletePlayer.bind(this);
    }

    componentDidMount() {
        this.getPlayer(this.props.match.params.id);
    }

    //onChange Functions
    onChangeName(e) {
        const name = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentPlayer: {
              ...prevState.currentPlayer,
              name: name
            }
          };
        });
    }

    onChangeYear(e) {
        const year = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentPlayer: {
              ...prevState.currentPlayer,
              year: year
            }
          };
        });
    }

    onChangeMajor(e) {
        const major = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentPlayer: {
              ...prevState.currentPlayer,
              major: major
            }
          };
        });
    }

    onChangePosition(e) {
        const position = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentPlayer: {
              ...prevState.currentPlayer,
              position: position
            }
          };
        });
    }

    onChangeHometown(e) {
        const hometown = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentPlayer: {
              ...prevState.currentPlayer,
              hometown: hometown
            }
          };
        });
    }

    getPlayer(id) {
        PlayersDataService.get(id)
            .then(response => {
                this.setState({
                    currentPlayer: response.data
                });
                console.log(response.data);
            }).catch(e => {
                console.log(e);
            });
    }

    updatePlayer() {
        PlayersDataService.update(
            this.state.currentPlayer.id,
            this.state.currentPlayer
        ).then(response => {
            console.log(response.data);
                this.setState({
                    message: "The player was updated successfully!"
                });
            }).catch(e => {
                console.log(e);
            });
    }

    deletePlayer() {    
        PlayersDataService.delete(this.state.currentPlayer.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/players')
            })
            .catch(e => {
                console.log(e);
            });
    }


    render() {
        const { currentPlayer } = this.state;

        return(
            <div className="page-wrapper">
                <div className="page-content-wrapper">
                    {currentPlayer ? (
                        <div className="edit-form">
                            <h4>Edit Player:</h4>
                            <form>
                            <div className="form-group">
                                <label htmlFor="name">name</label>
                                <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={currentPlayer.name}
                                onChange={this.onChangeName}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="year">year</label>
                                <input
                                type="text"
                                className="form-control"
                                id="year"
                                value={currentPlayer.year}
                                onChange={this.onChangeYear}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="major">major</label>
                                <input
                                type="text"
                                className="form-control"
                                id="major"
                                value={currentPlayer.major}
                                onChange={this.onChangeMajor}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="position">position</label>
                                <input
                                type="text"
                                className="form-control"
                                id="position"
                                value={currentPlayer.position}
                                onChange={this.onChangePosition}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="hometown">hometown</label>
                                <input
                                type="text"
                                className="form-control"
                                id="hometown"
                                value={currentPlayer.hometown}
                                onChange={this.onChangeHometown}
                                />
                            </div>
                            
                            </form>

                            <div>
                                <button
                                className="btn"
                                onClick={this.deletePlayer}
                                >
                                Delete
                                </button>

                                <button
                                type="submit"
                                className="btn"
                                onClick={this.updatePlayer}
                                >
                                Update
                                </button>
                            </div>
                            
                            <p>{this.state.message}</p>
                        </div>
                        ) : (
                        <div>
                            <br />
                            <p>Please click on a player...</p>
                        </div>
                    )}
                </div>
            </div> 
        );
    }


}