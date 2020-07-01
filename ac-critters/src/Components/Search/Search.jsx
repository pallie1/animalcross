import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './search.scss';


export default function Search(props) {
    const [input, setInput] = useState("");

    const handleChange = event => {
        console.log('handleChange clicked', event.target.value)
        const userInput = event.target.value;
        setInput(userInput);
        props.onSubmitFromApp(input);
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log('handleSubmit clicked')
        // props.onSubmitFromApp(input);
        // console.log('search side props.onSubmitFromApp - ', props.onSubmitFromApp)
        setInput("")
    }
// console.log('input - ', input)

    return (
        <>
            <Link to='/search' className='noUnderline'>
                <Form inline  >
                    <FormControl type="text" placeholder="Find a critter" className="mr-sm-2" value={input} onChange={handleChange} />
                        <Button onClick={handleSubmit} style={{cursor:'pointer'}} variant="success" type='submit' >Search</Button>
                </Form>
            </Link>
         </>
    ) 
   
}