import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {toJson} from 'unsplash-js/lib/unsplash'
import PhotoService from '../services/PhotoService'
import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ImageCard from '../components/ImageCard'
import Paginator from '../components/Paginator'

class Home extends Component {
    state = {
        photos: [],
        max_pages: [1, 2, 3]
    }

    static async getInitialProps () {
        const data = await PhotoService.photos.listPhotos(1, 12, 'latest')
        const photos = await toJson(data)

        return { photos }
    }

    constructor (props) {
        super(props)
        this.state = {
            ...this.state,
            photos: this.props.photos
        }

        this.handleClick = this.handleClick.bind(this)
    }

    async handleClick (e, page) {
        e.preventDefault()

        const data = await PhotoService.photos.listPhotos(page, 12)
        const photos = await toJson(data)

        this.setState({ photos })
    }

    render () {
        const { photos, max_pages } = this.state

        return (
            <Layout>
                <Head>
                    <title>Yema Developer Test App</title>
                    <meta name="description" content="Photos for Yema Developer Test App" />
                </Head>

                <Header>Photos</Header>

                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 p-10 text-md font-light tracking-normal leading-normal">
                    <div className="w-6/8 m-auto">
                        <div className="-my-2 py-4 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div
                                className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-rows-1 sm:grid-rows-1 md:grid-rows-1 lg:grid-rows-4 xl:grid-rows-4 gap-4 align-middle inline-block min-w-full">
                                {
                                    photos.map((image, index) => {
                                        return <ImageCard image={image} key={image.id} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <Paginator max_pages={ max_pages } handleClick={ this.handleClick } />
                </div>
            </Layout>
        )
    }
}

Home.propTypes = {
    photod: PropTypes.array
}

export default Home
