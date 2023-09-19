import React from 'react'
import { MainFooter } from '../layouts/MainFooter'
import { ProductCard } from '../Card/ProductCard'
import { Banner } from '../Banner/Banner'
import { Header } from '../layouts/Header'
import Category from '../Card/Category'
const Home = () => {
  return (
    <>
    <Header/>
      <Banner />
      <Category />
      <ProductCard />
      <MainFooter/>
    </>
  )
}

export default Home
