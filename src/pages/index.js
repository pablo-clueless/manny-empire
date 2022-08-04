import React from 'react'

const Catalogue = React.lazy(() => import('./Catalogue'))
const Checkout = React.lazy(() => import('./Checkout'))
const Home = React.lazy(() => import('./Home'))
const Modeling = React.lazy(() => import('./Modeling'))
const Product = React.lazy(() => import('./Product'))

export {
    Catalogue,
    Checkout,
    Home,
    Modeling,
    Product,
}