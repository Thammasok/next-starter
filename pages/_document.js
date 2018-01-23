import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
        <meta charset="utf-8" />
        <title>Prosper</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Site Description Here" />
        <link href="/static/css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
        <link href="/static/css/stack-interface.css" rel="stylesheet" type="text/css" media="all" />
        <link href="/static/css/socicon.css" rel="stylesheet" type="text/css" media="all" />
        <link href="/static/css/lightbox.min.css" rel="stylesheet" type="text/css" media="all" />
        <link href="/static/css/flickity.css" rel="stylesheet" type="text/css" media="all" />
        <link href="/static/css/iconsmind.css" rel="stylesheet" type="text/css" media="all" />
        <link href="/static/css/jquery.steps.css" rel="stylesheet" type="text/css" media="all" />
        <link href="/static/css/theme.css" rel="stylesheet" type="text/css" media="all" />
        <link href="/static/css/custom.css" rel="stylesheet" type="text/css" media="all" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,400i,500,600,700%7CMerriweather:300,300i" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Head>
        <body className="custom_class">
          <a id="start"></a>
          {this.props.customValue}
          <Main />
          <NextScript />
          <a class="back-to-top inner-link" href="#start" data-scroll-class="100vh:active">
            <i class="stack-interface stack-up-open-big"></i>
          </a>
          <script
            src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous" />
        </body>
      </html>
    )
  }
}