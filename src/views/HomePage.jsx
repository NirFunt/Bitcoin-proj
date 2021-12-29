import { useState,useEffect } from 'react'
import { userService } from "../services/userService.js";
import { BitcoinService } from '../services/BitcoinService.js';
import { MoveList } from '../cmps/MoveList.jsx';

export const HomePage = (props) =>  {

  const [user,setUser] = useState(null);
  const [USDBitcoinRate,setUSDBitcoinRate] = useState('');

  useEffect( ()=> {
    const user = userService.getUser();
    if (!user) {
      props.history.push('/signup');
      return;
    }
    else setUser (user );
    BitcoinService.getRate()
      .then(res => setUSDBitcoinRate( res ))
  },[])


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

