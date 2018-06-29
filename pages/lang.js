import React, { Component } from 'react'
import { translate } from 'react-i18next'

class LangPang extends Component {
  render (props) {
    const { t } = this.props

    return (
      <div>
        <h1>{t('common:hello')}, {t('common:morning')}</h1>
        {t('namespace1:greatMorning')}
      </div>
    )
  }
}

export default translate(['namespace1'])(LangPang)