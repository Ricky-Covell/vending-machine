import React, {useState} from "react"
import { Link } from 'react-router-dom'
import sodaPic from './assets/Soda.jpeg'

const Soda = () => {
    return (
        <div>
            <div>
                <Link to="/">Back To List</Link>
            </div>
            <div>
                <img src={sodaPic}/>
            </div>
        </div>
    )
}

export default Soda