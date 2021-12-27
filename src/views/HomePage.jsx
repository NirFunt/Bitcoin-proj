import { Component } from 'react'
import {userService} from "../services/userService.js";
import { BitcoinService } from '../services/BitcoinService.js';

export class HomePage extends Component {

  state = {
    user: null,
    USDBitcoinRate : '',
  }

  componentDidMount() {
    this.setState({ user: userService.getUser() })
    BitcoinService.getRate()
    .then (res =>this.setState( {USDBitcoinRate: res}) )
  }

  render() {
    const { user, USDBitcoinRate } = this.state;

    if (!user) return <div>Loading...</div>
    return (
      <section className='home-page main-layout'>
        <h1>Hello {user.name}!</h1>
        <img src={`https://robohash.org/${user.name}?set=set4`}/>
        <h3>💰 Coings: {user.coins}</h3>
        <h3> 🎈 BTC: {USDBitcoinRate} </h3>
      </section>
    )
  }
}

