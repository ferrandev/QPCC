import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


    render() {
        return (
            <Html lang="es">
                <Head>

                    <link rel="icon" type="image/png" href="static/favicon/favicon.ico" />
                    <meta name="google-site-verification" content="R_BWGqFErYGxkAoam11SdBZW67nJNB7mFKB90YfsiUg" />
                    <meta name="google-site-verification" content="pp8BxspkSI4A5A03bxI9pxbMWgkjpHeD1UD-So_2qZg" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="Que puedo comprar con pesos" />




                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument