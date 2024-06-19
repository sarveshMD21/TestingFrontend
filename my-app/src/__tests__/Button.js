import {fireEvent, render,screen} from '@testing-library/react';
import Button from '../Components/Button';

require('dotenv').config();

beforeAll(()=>{
    //console.log(process.env.API_URL);
    if(!process.env.API_URL)
        throw new Error("API URL not configured");
    if(!process.env.API_KEY)
        throw new Error("API KEY not configured");
    console.log("Everythin ok");
})

test("Testing for Button",()=>{
    render(<Button/>)
    const buttonElement=screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
   })