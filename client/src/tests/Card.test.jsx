import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';

test('the card contains the text temperament and weight', () => {
    render(<Card />);
    const cardElement = screen.getByText(/Temperament/i);
    expect(cardElement).toBeInTheDocument();
});