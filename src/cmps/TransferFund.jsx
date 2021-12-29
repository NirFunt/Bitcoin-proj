
import { useState, useEffect } from 'react'

export const TransferFund = (props) => {

    const [amount,setAmout] = useState(null);

    const handleChange = ({ target }) => {
        setAmout( target.value );
    }

        return (
            <div className="transfer-fund">
                <h2>Transfer coins to {props.contact.name}: </h2>
                <label htmlFor='amount'>Amount:</label>
                <input type="number" onChange={handleChange} id="amount" name='amount' />
                <button onClick={() => props.addMove(props.contact, amount)}>Transfer</button>
            </div>
        )
}









