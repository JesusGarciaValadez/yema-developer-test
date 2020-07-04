import Head from "next/head";
import Navigation from './Navigation'
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div className="bg-gray-100 flex flex-col justify-center align-middle min-h-screen">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://unpkg.com/tailwindcss@^1.2/dist/tailwind.min.css" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/@tailwindcss/ui@latest/dist/tailwind-ui.min.css" rel="stylesheet" />
            </Head>

            <Navigation />

            <main className="m-auto flex-auto h-full container">
                { children }
            </main>

            <Footer />
        </div>
    )
}

export default Layout
