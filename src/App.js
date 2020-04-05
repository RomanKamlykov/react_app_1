import React from 'react'
import './App.scss'

import Header from 'components/Header'
import Carousel from 'components/Carousel'
import Bestsellers from 'components/Bestsellers'
import Updates from 'components/Updates'
import Seo from 'components/Seo'
import Footer from 'components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Bestsellers />
      <Updates />
      <Seo />
      <Footer />
    </>
  );
}