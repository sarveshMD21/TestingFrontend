import {render,screen} from '@testing-library/react';
import App from './App'

// used to find if a statement exsits in react in a case insensitive manner
test("Testing for App component",()=>{
  render(<App/>);
  const textElement=screen.getByText(/first react test case/i);
 expect(textElement).toBeInTheDocument();
})


test("Testing for InputBox component",()=>{
  render(<App/>);
  const buttonElement = screen.getByTestId('custom-inputbox');
    expect(buttonElement).toBeInTheDocument();
})