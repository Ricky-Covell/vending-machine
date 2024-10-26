import React, {useState} from "react"
import { Link } from 'react-router-dom'
import chipPic from './assets/Gum.jpeg'

const Chips = () => {
    return (
        <div>
            <div>
                <Link to="/">Back To List</Link>
            </div>
            <div>
                <img src={chipPic}/>
            </div>
        </div>
    )
}

export default Chips