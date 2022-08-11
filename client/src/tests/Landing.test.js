import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import LandingPage from '../components/LandingPage/LandingPage';

describe('LandingPage tests', () => {
  test('should render the logo', () =>{
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const logo = screen.getByAltText('Befos logo');
    expect(logo).toBeTruthy();
  });
  test('should render the dog image', () =>{
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const dog = screen.getByAltText('Bella Estrellita');
    expect(dog).toBeTruthy();
  });
  test('should render the Page Title', () =>{
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const dog = screen.getByTestId('page-title');
    expect(dog).toBeTruthy();
  });
  test('should render a p element with the description', () =>{
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const description = screen.getByTestId('page-description');
    expect(description).toBeTruthy();
  });
  test('should render the bone button', () =>{
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const bone = screen.getByRole('button');
    expect(bone).toBeTruthy();
  });
});