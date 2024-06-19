import {fireEvent, render,screen, within} from '@testing-library/react';
import App from './App'

// UI testing for the APP page
describe("UI testing for APP",()=>{
  test("Testing for App component",()=>{
    render(<App/>);
    const textElement=screen.getByText(/first react test case/i);
   expect(textElement).toBeInTheDocument();
  })
  
  //testing text by  a function
  test("Testing for Text",()=>{
    render(<App/>);
    const textElement=screen.getByText((content,element)=>content.startsWith("Hel"));
    expect(textElement).toBeInTheDocument();
  })

  test("Testing for InputBox component",()=>{
    render(<App/>);
    const inputElement = screen.getByTestId('custom-inputbox');
      expect(inputElement).toBeInTheDocument();
  })

   test("Testing for Button",()=>{
    render(<App/>)
    const buttonElement=screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
   })

   test("Testing for select",()=>{
    render(<App/>)
    const options=screen.getAllByRole("option");
    options.forEach((e)=>{
      expect(e).toBeInTheDocument();
    })
   })

   //QueryBy fetches all the elements which are in the code while get by only fetches those that are rendered on the screen
   test("Testing for query by",()=>{
    render(<App/>)
    const buttonElement=screen.queryByText("Logout");
    expect(buttonElement).not.toBeInTheDocument();
   })
// Used to find elemetns which load after a while
   test("Testing for find by",async ()=>{
    render(<App/>)
    const fetchedData=await screen.findByText("Data found",{},{timeout:4000});
    expect(fetchedData).toBeInTheDocument();
   })
   // testing for elements whitin a parent element using within keyword
   test("Testing for child element",()=>{
    render(<App/>)
    const parent=screen.getByTestId("parent");
    const child=within(parent).getByText("Child");
    expect(parent).toBeInTheDocument();
    expect(child).toBeInTheDocument();
   })
})

describe("Logic for App",()=>{
  test("Testing for increment",()=>{
     render(<App/>)
     const buttonElement=screen.getByText("Click Me");
     const valueDisplay=screen.getByTestId("value-display");
     expect(valueDisplay).toHaveTextContent("0");
     fireEvent.click(buttonElement);
     expect(valueDisplay).toHaveTextContent("1");
  })
})