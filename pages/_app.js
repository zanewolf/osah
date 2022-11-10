import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from "next/head";
import Router from "next/router";
import {useEffect,useState} from 'react'
import LoadingScreen from "../components/LoadingScreen";


function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);

  return (
      <>
          <Head>

              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>{Component.title}</title>
              {Component.keywords &&
                  <meta className="keywords" content={Component.keywords}/>
              }
              {/*<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />*/}

          </Head>

          {/*<ParallaxProvider>*/}
          <Layout>
              {loading ? (
                  <LoadingScreen/>
              ) : (
                  <Component {...pageProps} />
              )}
              <div id="modal-root"></div>
          </Layout>
          {/*</ParallaxProvider>*/}
      </>
  )
}

export default MyApp
