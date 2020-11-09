import React, { Component } from "react";
import PlayersDataService from "../../services/players.service";
import { Link } from "react-router-dom";

export default class PlayersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [],
            currentPlayer: null,
            currentIndex: -1,
            searchName: ""
        }

        this.onChangeSearchName = this.onChangeSearchName.bind(this);
        this.retrievePlayers = this.retrievePlayers.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActivePlayer = this.setActivePlayer.bind(this);
        this.removeAllPlayers = this.removeAllPlayers.bind(this);
        this.searchName = this.searchName.bind(this);
    }

    componentDidMount() {
        this.retrievePlayers();
    }

    onChangeSearchName(e) {
        const searchName = e.target.value;

        this.setState({
            searchName: searchName
        });
    }

    retrievePlayers() {
        PlayersDataService.getAll()
            .then(response => {
                this.setState({
                    players: response.data
                });
                console.log(response.data);
            }).catch(err => {
                console.log(err);
            });
    }

    refreshList() {
        this.retrievePlayers();
        this.setState({
            currentPlayer: null,
            currentIndex: -1
        });
    }

    setActivePlayer(player, index) {
        this.setState({
            currentPlayer: player,
            currentIndex: index
        });
    }

    removeAllPlayers() {
        PlayersDataService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshList();
            }).catch(err => {
                console.log(err);
            });
    }

    searchName() {
        PlayersDataService.findByTitle(this.state.searchName)
            .then(response => {
                this.setState({
                    players: response.data
                });
                console.log(response.data);
            }).catch(err => {
                console.log(err);
            });
    }


    render() {
        const { searchName, players, currentPlayer, currentIndex } = this.state;

        return (
            <div className="page-wrapper">
                <div className="page-content-wrapper">
                    <div className="player-list-page-wrapper">
                        <div className="players-column__list">
                            <h4>Players List</h4>

                            <ul className="player-list-wrapper">
                                {players && players.map((player, index) => (
                                    <li
                                        key={player.id}
                                        className={
                                            "player-list-item " +
                                            (index === currentIndex ? "active" : "")
                                        }
                                        onClick={() => this.setActivePlayer(player, index)}
                                    >
                                        {player.name}
                                    </li>
                                ))}
                            </ul>

                        </div>

                        <div className="players-column__info">
                            {currentPlayer ? (
                                <div>
                                <h4>Player</h4>
                                <div>
                                    <label>
                                    <strong>name:</strong>
                                    </label>{" "}
                                    {currentPlayer.name}
                                </div>
                                <div>
                                    <label>
                                    <strong>year:</strong>
                                    </label>{" "}
                                    {currentPlayer.year}
                                </div>
                                <div>
                                    <label>
                                    <strong>major:</strong>
                                    </label>{" "}
                                    {currentPlayer.major}
                                </div>
                                <div>
                                    <label>
                                    <strong>position:</strong>
                                    </label>{" "}
                                    {currentPlayer.position}
                                </div>
                                <div>
                                    <label>
                                    <strong>hometown:</strong>
                                    </label>{" "}
                                    {currentPlayer.hometown}
                                </div>

                                <Link
                                    to={"/players/" + currentPlayer.id}
                                    className="player-link"
                                >
                                    Edit
                                </Link>
                                </div>
                            ) : (
                                <div>
                                    <br />
                                    <p>Click on player to find out more</p>
                                </div>
                            )}
                        </div>
                    </div>                
                </div>
            </div>
        );
    }


}