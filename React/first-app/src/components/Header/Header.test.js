import { render, screen } from '@testing-library/react';
import {render as renderer, unmountComponentAtNode} from 'react-dom'
import Header from './Header';


describe("Testing Header component",()=>{
    let element;
   beforeEach(()=>{
     element= document.createElement("div")
     document.body.appendChild(element)
   })
   afterEach(()=>{
    unmountComponentAtNode(element)
    element.remove()
    element=null
   })

    test("Demo test",()=>{
        console.log("Test executed");
    })

    test("Should have Natwest text in header",()=>{
        render(<Header/>)
        expect(screen.getByText("Natwest")).toBeInTheDocument()
    })

  it("Should have 3 anchor links in header component",()=>{
        renderer(<Header/>,element)
        const count=element.getElementsByTagName('a').length
        expect(count).toBe(3)

    })

    test("Should have navbar-brand class in brand-link",()=>{
        render(<Header/>)
        expect(screen.getByTestId("brandname")).toHaveClass("navbar-brand")
    })

    test("Anchor links should have nav-link class",()=>{
        renderer(<Header/>,element)
        const links=element.getElementsByTagName("a")
        for (let index = 1; index < links.length; index++) {
            expect(links[index]).toHaveClass("nav-link")
        }
    })
})