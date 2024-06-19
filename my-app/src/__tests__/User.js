import {fireEvent, render,screen} from '@testing-library/react';
import User from '../Components/User';

test("Testing for props",()=>{
    const name="anil";
    const handlefunc=jest.fn();
    render(<User name={name} handlefunc={handlefunc}/>)
    const element=screen.getByText(name);
    expect(element).toBeInTheDocument();
})

test("Testing for function mocking",()=>{
    const handlefunc=jest.fn();
    const name="";
    render(<User name={name} handlefunc={handlefunc} />)
    const btn=screen.getByText("Click");
    fireEvent.click(btn);
    expect(handlefunc).toHaveBeenCalledTimes(1);
})
