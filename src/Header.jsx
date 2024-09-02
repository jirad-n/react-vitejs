import React from 'react'
import Navbar from './Navbar'

// function Header({setPage}) {

//   return (
//     <div className='header'>
//         <h1>Logo</h1>
//       <Navbar setPage={setPage}/>
//     </div>
//   )
// }

function Header(props) {

    return (
      <div className='header'>
          <h1>Logo</h1>
        <Navbar {...props}/>
      </div>
    )
  }

export default Header
