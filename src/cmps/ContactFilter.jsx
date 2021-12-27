import { Component } from 'react'

export class ContactFilter extends Component {

    state = {
        term : '',
    }

    componentDidMount() {

    }

    handleChange = (ev) => {
        console.log(ev);
        const { target } = ev;
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter(this.state)
        })
    }

    render() {
        return (
            <section className='contact-filter'>
                <label htmlFor='search'>Search</label>
                <input type="text" name="term" id="search" onChange={this.handleChange} />
            </section>
        )
    }
}


