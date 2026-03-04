Gushwork Frontend Assignment – Product Landing Page

This project is a responsive product landing page built using Vanilla HTML, CSS, and JavaScript. The goal of this assignment was to implement the provided Figma design with pixel-perfect accuracy while following modern frontend development practices.

The page includes interactive UI components, dynamic content rendering, and responsive layouts optimized for desktop, tablet, and mobile devices.

Live Preview

You can open the project locally by running the index.html file in a browser.

Tech Stack

HTML5 – Semantic markup for page structure

CSS3 – Layout and styling using Flexbox & Grid

Vanilla JavaScript – Interactive UI behavior

Responsive Design – Implemented using media queries

Features Implemented
Sticky Header

The header becomes fixed at the top when the user scrolls past the hero section.

It disappears when the user scrolls back up.

Smooth transitions are implemented using CSS animations.

Responsive Navigation Menu

Desktop view displays navigation links normally.

Mobile view displays a hamburger menu.

Clicking the hamburger icon opens a drawer-style navigation panel.

The navigation drawer includes a close button for better usability.

Image Carousel with Thumbnail Navigation

A custom interactive image carousel was implemented using Vanilla JavaScript.

Features:

Previous and Next navigation buttons

Thumbnail image selection

Active thumbnail highlighting

Navigation buttons disabled when reaching first or last image

Smooth hover zoom effect on images

Dynamic Content Rendering

Several UI sections are dynamically generated using JavaScript to keep the code modular and maintainable.

Sections rendered dynamically include:

Certification badges

Technical specification table

Feature cards

FAQ items

Portfolio cards

Resource list

This approach improves scalability and keeps the HTML structure clean.

FAQ Accordion

An interactive FAQ section allowing users to expand and collapse answers.

Features:

Click to toggle answers

Rotating icon indicating open/closed state

Only one FAQ item remains open at a time

Smooth expand/collapse animation

Applications Carousel

A horizontally scrollable carousel displaying different industry applications.

Responsive behavior:

Desktop → 3 cards

Tablet → 2 cards

Mobile → 1 card

Navigation is controlled using previous and next buttons with smooth transitions.

Manufacturing Process Stepper

The manufacturing process section adapts based on screen size.

Desktop:

Displays a stepper-style layout showing all steps.

Tablet & Mobile:

Converts into a slider interface with previous and next navigation.

Modal Popup Form

Clicking Download Full Technical Datasheet opens a modal form.

Features:

Overlay background

Form validation

Submit button disabled until required fields are filled

Phone number field optional

User inputs displayed in an alert after submission

Modal closes automatically after submission

Contact Call-To-Action Section

A CTA section allowing users to request a custom quote.

Features:

Responsive form layout

Phone number input with country code selector

Two-column layout on desktop

Stacked layout on mobile

Trusted Collaboration Section

Displays logos of partner companies.

Responsive behavior:

Desktop → 6 logos displayed

Mobile → 3 logos displayed

Fully Responsive Layout

The entire website is optimized for multiple screen sizes using CSS media queries.

Key responsive adjustments include:

Navigation transformation for mobile devices

Grid layouts converting to single-column layouts

Carousel adjustments for smaller screens

Responsive spacing and typography

Project Structure
project-root
│
├── index.html
├── styles.css
├── script.js
│
├── assets
│ ├── images
│ ├── icons
│ └── logos
│
└── README.md
How to Run the Project

Clone the repository or download the files.

git clone <https://github.com/ShrabanaG/vanila_javascript_assessment>

Open the project folder.

Run the project by opening:

index.html

in any modern web browser.

No additional dependencies or installations are required.

Code Quality & Best Practices

The project follows the required coding standards:

Semantic HTML5 elements

Modular JavaScript functions

Clean and organized CSS structure

Use of Flexbox and Grid layouts

Commented code for important functionality

Responsive design principles

Author

Shrabana Goswami
Frontend Developer – React / Next.js
