import {fireEvent, render,screen} from '@testing-library/react';
import InpuBox from '../Components/InpuBox';

//  grouping all ui test for a input element
describe("UI test for Input",()=>{
    // first test for few basic ui parts
    test("Testing for input Box",()=>{
        render(<InpuBox/>);
        const inputElement=screen.getByPlaceholderText("enter your username");
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute("type","text");
    })

    //getByDisplyValue matches the value attribute as mentioned in the query
    test("Testing for input Element",()=>{
        render(<InpuBox/>);
        const inputElement=screen.getByDisplayValue("username");
        expect(inputElement).toBeInTheDocument();
    })
})


// grouping for all logic test for a input element
describe("Logic Test for Input",()=>{
    test("Test case 1",()=>{
        render(<InpuBox/>)
        let inputElement=screen.getByPlaceholderText("enter your username");
        fireEvent.change(inputElement,{target:{value:"abc"}});
        expect(inputElement.value).toBe("abc");
    })
})