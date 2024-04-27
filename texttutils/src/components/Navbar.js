//components are made to make the app.js file easy and specified. 
import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">{props.title}</a>         { /*props means properties use to directly access any thing from components to app*/}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
        
      </ul>
      
    </div>
  </nav>
  )

 
}

 Navbar.propTypes={
    title :PropTypes.string.isRequired,         /* isRequired is uesd when any thing is imp and need to be set*/
   aboutText: PropTypes.string.isRequired}       /*string is send so proptype is string title="TextUtils*/

  Navbar.defaultProps={
    title:'Set title here',
    aboutText: 'About '      /*default text is set in here when not provided*/
  }                  
