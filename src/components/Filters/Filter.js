import React from 'react'
import { BsToggles } from 'react-icons/bs'
import { BiChevronRightCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './filter.css'

const Filter = () => {

    const filterPics = [
        {
            name: "Amazing views",
            src: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
        },
        {
            name: "OMG!",
            src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
        },
        {
            name: "Cabins",
            src: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
        },
        {
            name: "Skiing",
            src: "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg"
        },
        {
            name: "A-frames",
            src: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"
        },
        {
            name: "Treehouses",
            src: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg"
        },
        {
            name: "Mansions",
            src: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
            link: '/mansions'
        },
        {
            name: "Luxe",
            src: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg"
        },
        {
            name: "Beachfront",
            src: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
        },
        {
            name: "Tiny homes",
            src: "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg"
        },
        {
            name: "Trending",
            src: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
        },
        {
            name: "Containers",
            src: "https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg"
        },
    ];
    
    return (
        <div className='filter-container'>
            {filterPics.map(pic => (
                <Link to={pic.link} className='filter-item' key={pic.src}>
                    <img src={pic.src} alt={pic.name} />
                    <div>{pic.name}</div>
                </Link>
            ))}
        <div className='filter-more'>
            <i><BiChevronRightCircle /></i>
        </div>
        <div className='filter-options'>
            <i><BsToggles /></i>
            <h2>Filters</h2>
        </div>
        </div>
    )
}

export default Filter
