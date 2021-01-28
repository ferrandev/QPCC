import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


    render() {
        return (
            <Html lang="es">
                <Head>

                    <link rel="icon" type="image/png" href="static/favicon/favicon.ico" />


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