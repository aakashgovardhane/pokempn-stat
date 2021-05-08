import React from 'react'

class Pokemon extends React.Component {
    render() {
        const { pokemonData } = this.props
        const { pokemon, pokemonName } = pokemonData
        console.log(pokemon)
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={pokemon ? pokemon.sprites.front_shiny : null} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title pb-2 card-heading">{pokemonName}</h5>
                        <div><div className="statLabel d-inline-block">Height</div> {pokemon ? pokemon.height : null}</div>
                        <div><div className="statLabel d-inline-block">Weight </div> {pokemon ? pokemon.weight : null}</div>
                        <div><div className="statLabel d-inline-block">HP </div> {pokemon ? pokemon.stats[0].base_stat : null}</div>
                        <div><div className="statLabel d-inline-block">speed  </div> {pokemon ? pokemon.stats[5].base_stat : null}</div>
                        <div><div className="statLabel d-inline-block">attack </div> {pokemon ? pokemon.stats[1].base_stat : null}</div>
                        <div><div className="statLabel d-inline-block">special-attack</div> {pokemon ? pokemon.stats[3].base_stat : null}</div>
                        <div><div className="statLabel d-inline-block">defence</div> {pokemon ? pokemon.stats[2].base_stat : null}</div>
                        <div><div className="statLabel d-inline-block">special-defence  </div> {pokemon ? pokemon.stats[4].base_stat : null}</div>
                    </div>
                </div>
                {/* {pokemon?pokemon.stats[0].base_stat} */}
            </>
        )
    }
}

export default Pokemon