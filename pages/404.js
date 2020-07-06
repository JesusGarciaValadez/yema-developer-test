import Layout from "../components/Layout";
import Head from "next/head";
import React from "react";

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>404 This page could not found | Yema Developer Test App</title>
                <meta name="description" content="404 This page could not be found | Yema Developer Test App" />
            </Head>

            <div className="flex flex-row max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 p-10 text-md font-light tracking-normal leading-normal">
                <h1 style={ { display: 'inline-block', borderRight: '1px solid rgba(0, 0, 0,.3)', margin: '0', marginRight: '20px', padding: '10px 23px 10px 0', fontSize: '24px', fontWeight: '500', verticalAlign: 'top' } }>404</h1>
                <div style={ { display: 'inline-block', textAlign: 'left', lineHeight: '49px', height: '49px', verticalAlign: 'middle' } }>
                    <h2 style={ { fontSize: '14px', fontWeight: 'normal', lineHeight: 'inherit', margin: '0', padding:'0' } }>This page could not be found.</h2>
                </div>
            </div>
        </Layout>
    )
}
