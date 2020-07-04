import React, { Component } from 'react'

class ImageCard extends Component {
    render () {
        const { alt_description, created_at, likes, urls, user } = this.props.image
        const date = new Date(created_at)

        return (
            <figure className="border border-gray-300 rounded rounded-lg shadow shadow-lg w-full block p-5">
                <div className="overflow-hidden w-full object-cover object-bottom">
                    <img className="w-auto h-auto" src={ urls.regular } alt={ alt_description } />
                </div>
                <div className="flex flex-row align-baseline items-center w-full">
                    <figcaption className="text-left text-md font-light tracking-tight leading-tight m-3 mx-0 p-3 px-0 w-4/5">
                        <p>{ alt_description }</p>
                    </figcaption>
                    <div className="text-right w-1/5">
                        <p><span className="text-green-700">▲</span> { likes }</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row align-baseline items-center m-auto w-full">
                    <p className="text-sm text-left m-auto w-full sm:w-full md:w-full lg:w-3/5 xl:w-3/5">
                        <img src={ user.profile_image.small }
                             alt={ user.username }
                             className="rounded rounded-full inline m-2" />
                        <a href={ user.links.html } className="cursor-pointer text-gray-800 underline">{ user.username }</a>
                    </p>
                    <p className="text-xs text-right w-full sm:w-full md:w-full lg:w-2/5 xl:w-2/5">{ date.toDateString() }</p>
                </div>
            </figure>
        )
    }
}

export default ImageCard
