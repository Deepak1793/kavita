import { render, screen } from '@testing-library/react';
import SaveCustomerList from './SaveCustomerList';

describe("Testing SaveCustomerList component",()=>{
    test("Should have submit text in button",()=>{
        render(<SaveCustomerList/>)
        expect(screen.getByTestId("btnsubmit")).toHaveTextContent("Submit")
    })
})