import { useState, useEffect } from 'react'
import { userService } from "../services/userService.js";

export const  SignupPage = (props) => {

    const [username,setUsername] = useState(null);

  
    const setttingUsername = (ev) => {
        const {target} = ev;
        setUsername(target.value);
    }

    const signupUser = (ev) => {
        ev.preventDefault();
        userService.signup(username);
        props.history.push('/');
    }

        return (
            <section className='signup-page main-layout'>
                <form onSubmit={signupUser}>
                    <img src='https://digitalcoinmarketcap.com/wp-content/uploads/2021/07/BITCOIN-PRICE.jpg' />
                    <label htmlFor='username'>Enter Your Username</label>
                    <input type="text" id="username" name='username' onChange={setttingUsername} />
                    <button>Sign up</button>
                </form>
            </section>
        )
    }

