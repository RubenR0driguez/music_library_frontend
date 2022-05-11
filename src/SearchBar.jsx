import React from 'react'
import axios from 'axios'

function searchbar({placeholder,data}) {

  return (
    <div className='search'>
        <div className='searchInputs'>
            <input type='text' />
            <div className= 'searchIcon'></div>
        </div>
        <div className='dataResults'></div>
        </div>
  )
}

export default searchbar