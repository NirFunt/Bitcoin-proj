import { Component } from 'react'
import { userService } from "../services/userService.js";

export class SignupPage extends Component {

    state = {
        username: null,
    }

    componentDidMount() {
    }

    setUsername = (ev) => {
        const {target} = ev;
        this.setState({username : target.value});
    }

    signupUser = (ev) => {
        ev.preventDefault();
        userService.signup(this.state.username);
        this.props.history.push('/');
    }

    render() {

        return (
            <section className='signup-page main-layout'>
                <form onSubmit={this.signupUser}>
                    <img src='https://digitalcoinmarketcap.com/wp-content/uploads/2021/07/BITCOIN-PRICE.jpg' />
                    <label htmlFor='username'>Enter Your Username</label>
                    <input type="text" id="username" name='username' onChange={this.setUsername} />
                    <button>Sign up</button>
                </form>
            </section>
        )
    }
}

