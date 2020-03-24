import React, { Component } from "react";

class StarWarsCharacters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfChracters: []

        }
    }
    componentDidMount = () => {
        this.loadData();
    }
    loadData = async () => {
        const response = await fetch(' https://swapi.co/api/people/ ')
        const json = await response.json();
        console.log(json.results) // make sure you're actually checking this log
        this.setState({ listOfChracters: json.results })
    }
    render() {
        return (
            <div>

                {this.state.listOfChracters.map((characters) => {
                    return (
                        <div key={characters}>
                            <p>character:{characters.name}</p>
                            <p>year: {characters.birth_year}</p>
                            <p>gender:{characters.gender}</p>

                        </div>

                    )
                })}

            </div>

        )
    }

}

export default StarWarsCharacters