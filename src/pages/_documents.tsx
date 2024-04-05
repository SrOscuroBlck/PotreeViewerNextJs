import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" type="text/css" href="./libs/potree/potree.css" />
                    <link rel="stylesheet" type="text/css" href="./libs/jquery-ui/jquery-ui.min.css" />
                    <link rel="stylesheet" type="text/css" href="./libs/openlayers3/ol.css" />
                    <link rel="stylesheet" type="text/css" href="./libs/spectrum/spectrum.css" />
                    <link rel="stylesheet" type="text/css" href="./libs/jstree/themes/mixed/style.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
