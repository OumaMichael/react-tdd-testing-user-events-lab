import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test('displays an image with alt text', () => {
    render(<App />);
    
    // Act
    const image = screen.getByAltText(/your name/i);  // Match the alt text
    
    // Assert
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });
  test('displays a second-level heading with the text "About Me"', () => {
    render(<App />);
    
    // Act
    const aboutMeHeading = screen.getByRole('heading', {
      name: /about me/i,
      level: 2,
    });
    
    // Assert
    expect(aboutMeHeading).toBeInTheDocument();
  });
  test('displays a paragraph with the biography text', () => {
    render(<App />);
    
    // Act
    const bioParagraph = screen.getByText(/your biography text/i);
    
    // Assert
    expect(bioParagraph).toBeInTheDocument();
  });
  test('displays a link to GitHub and LinkedIn', () => {
    render(<App />);
    
    // Act
    const githubLink = screen.getByRole('link', { name: /github/i });
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    
    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/yourusername');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/yourusername');
  });
        