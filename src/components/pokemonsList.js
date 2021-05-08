import React from 'react'
import '../stylesheets/stylesheet.css'
import axios from 'axios'

class pokemonsList extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            totalPokemons: null,
            actionUrl: undefined,
            praviousPage: undefined,
            nextPage: undefined
        }
    }
    showOverview = (name) => {
        this.props.history.push(`./pokemon/?name=${name}`)
    }
    Pagination = (option) => {
        const { previousPage, nextPage } = this.state
        if (option === "previous") {
            this.setState({ actionUrl: previousPage })
        } else {
            this.setState({ actionUrl: nextPage })
        }
    }
    componentDidUpdate(){
        const { actionUrl } = this.state
        axios({
            url: actionUrl,
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(
            result => {
                this.setState({ pokemons: result.data.results, totalPokemons: result.data.count, previousPage: result.data.previous, nextPage: result.data.next })
            })
    }
    componentDidMount() {
        axios({
            url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(
            result => {
                this.setState({ pokemons: result.data.results, totalPokemons: result.data.count, previousPage: result.data.previous, nextPage: result.data.next })
            })
    }
    render() {
        const { pokemons, totalPokemons } = this.state
        return (
            <div className="m-4">
                <div className="text-center container header p-2">
                    <h1>Pokemons List</h1>
                </div>
                <div className="container text-right">
                    Total Pokemons : {totalPokemons}
                    <br />
                Click On Row To Show Overview
                </div>
                <div className="container text-center">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Number</th>
                                <th scope="col">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pokemons ? pokemons.map((item) => {
                                const pokemonNumber = item.url.slice(34, -1)
                                return <tr className="pokemons" key={pokemonNumber} onClick={() => this.showOverview(item.name)}>
                                    <th scope="col">{pokemonNumber}</th>
                                    <th scope="col">{item.name}</th>
                                </tr>
                            }) : null}
                        </tbody>
                    </table>
                    <div className="row justify-content-around">
                        <button className="col-xxl-2 col-5  btn btn-danger" onClick={() => this.Pagination("previous")}>
                            Previous
                            </button>
                        <button className="col-xxl-2 col-5 btn btn-success" onClick={() => this.Pagination("next")}>
                            Next
                            </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default pokemonsList