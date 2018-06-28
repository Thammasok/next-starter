import {Component} from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import DefaultAppLayout from '../components/Layout/DefaultApp';

class Index extends Component {
  render () {
    
    const PostLink = (props) => (
      <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
          <a>{props.title}</a>
        </Link>
      </li>
    )

    return (
      <DefaultAppLayout>
        <h1>Hello Next.js</h1>
        <hr />
        <ul>
          <PostLink id="hello-nextjs" title="Hello Next.js"/>
          <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
          <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
        </ul>
        <hr />
        <h1>Batman TV Shows</h1>
        <ul>
          {this.props.shows.map(({show}) => (
            <li key={show.id}>
              <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </DefaultAppLayout>
    )
  }
}

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index