import {Component} from 'react'

import Header from '../Include/Header'

class DefaultApp extends Component {
  render() {
    const layoutStyle = {
      margin: 20,
      padding: 20,
      border: '1px solid #DDD'
    }

    return(
      <div style={layoutStyle}>
        <Header />

        {this.props.children}
      </div>
    )
  }
}

export default DefaultApp