import React from 'react'

function Header() {
  return (
    <header className="main-header">
    <nav className="main-nav nav">
      <ul>
        <li>
          <a href="index.html">HOME</a>
        </li>
        <li>
          <a href="store.html">STORE</a>
        </li>
        <li>
          <a href="about.html">ABOUT</a>
        </li>
      </ul>
    </nav>
    <h3 className="band-name band-name-large">💢</h3>
  </header>
  )
}

export default Header