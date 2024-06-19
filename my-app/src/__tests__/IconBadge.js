import {fireEvent, render,screen} from '@testing-library/react';
import IconBadge from '../Components/IconBadge';


test("Icon Testing",()=>{
    render(<IconBadge/>);
    const iconElement=screen.getByTitle("icon");
    expect(iconElement).toBeInTheDocument();
})