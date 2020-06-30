import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default function Search(props) {
    const [input, setInput] = useState("");

    const handleChange = event => {
        console.log('handleChange clicked', event.target.value)
        const userInput = event.target.value;
        setInput(userInput);
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log('handleSubmit clicked')
        props.onSubmitFromApp(input);
        // console.log('search side props.onSubmitFromApp - ', props.onSubmitFromApp)
        setInput("")
    }
// console.log('input - ', input)

    return (
        <>
            {/* onSubmitFromApp={handleSubmit} */}
            {/* <form onSubmit={handleSubmit}> */}
            <Link to='/search'>
                <Form inline  >
                    <FormControl type="text" placeholder="Find a critter" className="mr-sm-2" value={input} onChange={handleChange} />
                 
                        <Button variant="success" type='submit' onClick={handleSubmit} >Search</Button>
                 
                </Form>
                </Link>
            {/* </form> */}
{/*  
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Find a critter' onChange={handleChange} value={input} />
                <button type='submit'>SUBMIT</button>
            </form> */}
         </>
    ) 
   
}