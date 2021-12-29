
import { Component } from 'react'

export class TransferFund extends Component {

    state = {
        amount: null,
    }

    componentDidMount() {

    }

    handleChange = ({ target }) => {
        this.setState({ amount: target.value });
    }

    render() {
        const { amount } = this.state;
        return (
            <div className="transfer-fund">
                <h2>Transfer coins to {this.props.contact.name}: </h2>
                <label htmlFor='amount'>Amount:</label>
                <input type="number" onChange={this.handleChange} id="amount" name='amount' />
                <button onClick={() => this.props.addMove(this.props.contact, amount)}>Transfer</button>
            </div>
        )
    }
}









