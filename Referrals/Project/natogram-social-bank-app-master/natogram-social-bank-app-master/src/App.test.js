import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
// import App from './App'

// test('renders herounit', () => {
//   render(<App />)
//   const Herounit = screen.getByTitle('HeroUnit')
//   expect(Herounit).toBeInTheDocument();
// });

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
// describe("App Component", function () {
//   it("should have hello world message", function () {
//     let { getByText } = render(<HomePage />);
//     expect(getByText("Natogram")).toMatchInlineSnapshot(`
//       <h5 class="display-6 fw-bold">Natogram</h5>
//     `);
//   });
// });

test('test', ()=> {
  expect(true).toBe(true)
})


// test('render-homepage', ()=> {
//   <BrowserRouter>
//   render(<HomePage />);
//   </BrowserRouter>
//   const todoElement = screen.getByTestId('herounit');
//   expect(todoElement).toBeInTheDocument()
// })

test('find herounit in homepage', () => {
    // act(() => {
    render(
    <BrowserRouter>
        <Routes>   
            <Route path="*" element= {<HomePage />}/>
        </Routes>
    </BrowserRouter>
        );
    // });
    const heroUnit = screen.getByTestId('herounit');
    expect(heroUnit).toBeInTheDocument()
});



test('finding appName homepage', () => {
  render(
  <BrowserRouter>
      <Routes>   
          <Route path="*" element= {<HomePage />}/>
      </Routes>
  </BrowserRouter>
      );
  const appName = screen.getByTestId('herounit');
  expect(appName).toBeInTheDocument()
  expect(appName).toHaveTextContent('Natogram')
});