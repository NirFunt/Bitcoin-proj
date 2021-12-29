import { Component } from 'react'
import { userService } from "../services/userService.js";
import { BitcoinService } from '../services/BitcoinService.js';
import { MoveList } from '../cmps/MoveList.jsx';

export class HomePage extends Component {

  state = {
    user: null,
    USDBitcoinRate: '',
  }

  componentDidMount() {
    const user = userService.getUser();
    if (!user) {
      this.props.history.push('/signup');
      return;
    }
    else this.setState({ user });
    BitcoinService.getRate()
      .then(res => this.setState({ USDBitcoinRate: res }))
  }

  render() {
    const { user, USDBitcoinRate } = this.state;

    if (!user) return <div>Loading...</div>
    return (
      <section className='home-page main-layout'>
        <section>
        <h1>Hello {user.username}!</h1>
        <img src={`https://robohash.org/${user.username}?set=set4`} />
        <h3>💰 Coings: {user.coins}</h3>
        <h3> 🎈 BTC: {USDBitcoinRate} </h3>
        </section>
        <MoveList loggedinUser={user} contact ={null} />
      </section>
    )
  }
}

