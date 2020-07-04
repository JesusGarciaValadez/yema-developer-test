import React from "react";
import PropTypes from 'prop-types'

const Paginator = ({ max_pages, handleClick }) => {
    return (
        <ol className="flex flex-row content-center align-middle items-center my-8 p-0 text-gray-800 tracking-tighter leading-tight font-light text-sm text-center w-full">
            {
                max_pages.map((page, index) => {
                    return <li className="border border-gray-300 bg-white p-3 cursor-pointer" key={index} onClick={(e) => handleClick(e, page) }>{ page }</li>
                })
            }
        </ol>
    )
}

Paginator.propTypes = {
    max_pages: PropTypes.array,
    handleClick: PropTypes.func,
}

export default Paginator
