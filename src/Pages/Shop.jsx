import React from 'react'
import Popular from '../Components/Popular/Popular'
import Hero from '../Components/Hero/Hero'
import Offers from '../Components/Offers/Offer'
import NewCollections from '../Components/NewCollection/NewCollections'


const Shop = () => {
    return(
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
        </div>
    )
}

export default Shop