import { render, screen } from '@testing-library/react';
import BoneButton from '../components/BoneButton';

test('the button contains the text "Go!"', () => {
    render(<BoneButton />);
    const buttonElement = screen.getByText(/Go!/i);
    expect(buttonElement).toBeInTheDocument();
});