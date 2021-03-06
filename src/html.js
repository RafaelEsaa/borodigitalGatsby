import React from 'react';

export default class HTML extends React.Component {
    render() {
        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    {this.props.headComponents}
                    <link href="/img/favicon.ico" rel="icon" type="image/x-icon" />
                    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
                </head>
                <body>
                    <div
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    {this.props.postBodyComponents}
                    <script
                        async
                        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                    />
                    <script src="https://unpkg.com/scrollreveal" />
                </body>
            </html>
        )
    }
}
