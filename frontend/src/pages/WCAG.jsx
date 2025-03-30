import React from 'react';

function WCAG() {
  return (
    <div className="wcag-page">
      <h2>WCAG Guidelines</h2>
      <p>
        The Web Content Accessibility Guidelines (WCAG) ensure that web content is accessible to everyone, including those with disabilities.
        Key principles include:
      </p>
      <ul>
        <li>Perceivable: Provide text alternatives for non-text content (e.g., alt text for images).</li>
        <li>Operable: Ensure all functionality is available via keyboard.</li>
        <li>Understandable: Make content readable and predictable.</li>
        <li>Robust: Maximize compatibility with assistive technologies.</li>
      </ul>
      <p>Learn more at <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">w3.org</a>.</p>
    </div>
  );
}

export default WCAG;