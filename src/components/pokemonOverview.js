import React from 'react'
import axios from 'axios'
import queryString from 'query-string'
import Pokemon from './pokemon'

class pokemonOverview extends React.Component {
    constructor() {
        super()
        this.state = {
            pokemonName: undefined,
            pokemon: undefined
        }
    }

    componentDidMount() {
        const qs = queryString.parse(this.props.location.search)
        this.setState({ pokemonName: qs.name })
        axios({
            url: `https://pokeapi.co/api/v2/pokemon/${qs.name}`,
            method: "GET",
            header: { "Content-Type": "application/json" }
        }).then(
            result => this.setState({ pokemon: result.data })
        )
    }
    render() {
        const { pokemonName, pokemon } = this.state
        return (
            <div className="m-4">
                <div className="text-center container header p-3 pb-5">
                    <h1>Pokemon Stats</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <Pokemon pokemonData={{ "pokemon": pokemon, "pokemonName": pokemonName }} />
                </div>
            </div>
        )
    }
}

export default pokemonOverview