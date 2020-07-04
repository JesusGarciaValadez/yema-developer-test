import React from 'react'
import Layout from "../components/Layout"
import Head from "next/head"
import Header from "../components/Header"

const About = () => (
    <Layout>
        <Head>
            <title>About Us | Yema Developer Test App</title>
        </Head>

        <Header>About Us</Header>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 p-10 text-md font-light tracking-normal leading-normal">
            <div className="w-6/8 m-auto">
                <div className="-my-2 py-4 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Architecto aut dolor ducimus eveniet excepturi facere, facilis, fuga ipsa minima non possimus quia ratione reiciendis sed soluta ullam velit vero voluptate.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Architecto aut dolor ducimus eveniet excepturi facere, facilis, fuga ipsa minima non possimus quia ratione reiciendis sed soluta ullam velit vero voluptate.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Architecto aut dolor ducimus eveniet excepturi facere, facilis, fuga ipsa minima non possimus quia ratione reiciendis sed soluta ullam velit vero voluptate.</p>
                </div>
            </div>
        </div>
    </Layout>
)

export default About
