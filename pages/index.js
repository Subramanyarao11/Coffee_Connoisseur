import Head from 'next/head'
import Styles from "../styles/Home.module.css"
import Banner from "../components/Banner"


export default function Home() {

    const handleOnBannerButton = () => {
        console.log("Button clicked!")
    }
    return (
        <>
            <Head>
                <title>Coffee Connoisseur</title>
                <meta name="description" content="A Next JS App to discover surrounding coffee shops!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={Styles.main}>
                <Banner buttonText="View stores nearby!" handleOnClick={handleOnBannerButton}/>
            </main>

        </>
    )
}
