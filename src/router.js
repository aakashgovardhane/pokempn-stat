import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import pokemonsList from './components/pokemonsList'
import pokemonOverview from './components/pokemonOverview'

const Router = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={pokemonsList} />
            <Route path='/pokemon' component={pokemonOverview} />
        </BrowserRouter>
    )
}

export default Router