import { useState, useEffect } from 'react'

export const ContactFilter = (props) => {

    const [term, setTerm] = useState('');

    useEffect(() => {
        props.onChangeFilter(term);
    }, [term])


    const handleChange = (ev) => {
        const { target } = ev;;
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        setTerm({[field]:value});
    }

    return (
        <section className='contact-filter'>
            <label htmlFor='search'>Search</label>
            <input type="text" name="term" id="search" onChange={handleChange} />
        </section>
    )
}


