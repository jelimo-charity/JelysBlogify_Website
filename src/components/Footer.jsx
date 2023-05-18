import React from 'react'
import './footer.css'
function Footer() {
    const currentDate = new Date().getFullYear();
  return (
    <div className='footer'>
         © charity.jelimo {currentDate}

    </div>
  )
}

export default Footer
