import {Component} from 'react'
import Link from 'next/link'

class Header extends Component {
  render () {
    const linkStyle = {
      marginRight: 15
    }
    
    return (
      <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
      </div>
    )
  }
}

export default Header