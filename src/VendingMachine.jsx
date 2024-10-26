import React from 'react'
import { Link } from 'react-router-dom'

const VendingMachine = () => {
    return (
        <div>
            <p>Choose an item!</p>
            <div>
                <div>
                    <Link to='/soda'>Soda</Link>
                </div>
                <div>
                    <Link to='/chips'>Chips</Link>
                </div>
                <div>
                    <Link to='/gum'>Gum</Link>
                </div>
            </div>
        </div>
    )
}

export default VendingMachine