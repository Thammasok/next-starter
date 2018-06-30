import App, {Container} from 'next/app'
import React from 'react'
import localStorage from 'localStorage'
import { I18nextProvider } from 'react-i18next'
import { translate } from 'react-i18next'

import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import createStore from '../store_example/store'

import { getTranslation } from '../tools/translationHelpers'
import startI18n from '../tools/startI18n'
import localFile from '../static/locales/local'

// get language from query parameter or url path
const lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'th';
const localURL = process.env.BASE_URL + '/static/locales/'

class MyApp extends App {
  constructor (props) {
    super(props)
    
    this.i18n = startI18n(props.translations, lang)
  }

  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <I18nextProvider i18n={this.i18n}>
            <Component {...pageProps} />
          </I18nextProvider>
        </Provider>
      </Container>
    )
  }
}

MyApp.getInitialProps = async function() {
  const translations = await getTranslation(
    lang,
    localFile,
    localURL
  )
  
  return { translations: translations }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(MyApp))