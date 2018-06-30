import React from 'react'
import {connect} from 'react-redux'

import {loadData, startClock, tickClock} from '../actions/clock'
import Page from '../components/redux/page'

class ReduxSaga extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    store.dispatch(tickClock(isServer))

    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }

    return { isServer }
  }

  componentDidMount () {
    this.props.dispatch(startClock())
  }

  render () {
    return <Page title='Redux Saga Page' linkTo='/other' NavigateTo='Other Page' />
  }
}

export default connect()(ReduxSaga)
