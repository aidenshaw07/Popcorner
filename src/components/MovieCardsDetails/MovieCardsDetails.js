import React from 'react'
import { useParams,useLocation } from 'react-router-dom'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import NavBar from '../Navbar/NavBar'

const MovieCardsDetails = (props) => {

  const { movieId } = useParams()

  //filter function
  return (
    
    <div>
      <Header />
      Avengers
      Directo Name
      Year
      MovieCardsDetails
      </div>
  )
}

export default MovieCardsDetails