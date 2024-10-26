import React, {useState} from "react"
import { Link } from 'react-router-dom'
import gumPic from './assets/Gum.jpeg'

const Gum = () => {
    return (
        <div>
            <div>
                <Link to="/">Back To List</Link>
            </div>
            <div>
                <img src={gumPic}/>
            </div>
        </div>
    )
}

export default Gum