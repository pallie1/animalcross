import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './search.scss';

export default function Search(props) {
    const [input, setInput] = useState("");

    const handleChange = event => {
        const userInput = event.target.value;
        setInput(userInput);
        props.onSubmitFromApp(input);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setInput("")
    }

    return (
        <>
            <Link to='/search' className='noUnderline'>
                <Form inline  className='search-form-mobile'>
                    <FormControl 
                    type="text" 
                    placeholder="Find an animal" 
                    className="mr-sm-2" 
                    value={input} 
                    onChange={handleChange} 
                    onBlur={handleChange}/>
                        <Button onClick={handleSubmit} variant="success" type='submit' >Search</Button>
                </Form>
            </Link>
         </>
    ) 
   
}