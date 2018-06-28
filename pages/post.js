import {Component} from 'react'
import fetch from 'isomorphic-unfetch'

import DefaultAppLayout from '../components/Layout/DefaultApp'


class Post extends Component {
  render() {
    return(
      <DefaultAppLayout>
        <h1>{this.props.show.name}</h1>
        <p>{this.props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={this.props.show.image.medium}/>
      </DefaultAppLayout>
    )
  }
}

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post