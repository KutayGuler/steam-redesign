# Report

This project aims to redesign various pages of Steam to make the UX and UI more consistent
that the current website.

## Problems of Current Website

- Too many different shades of blue
- Inconsistent components, you can come across to a new button every few pages
- Verbose and repetitive way of conveying information

## Solutions

### Typography

- Used only one font, Motiva Sans, which is Steam's official font.
- For text sizes, I used Tailwind's typography system which is as follows:

<!-- TODO: put image here -->

### Colors

- Used tailwind's color palette & black and white.
  - Backgrounds:
    - Primary colors:
      - Slate (600, 700, 800, 900)
    - Secondary colors:
      - Blue (500, 700)
      - Sky (500)
    - Accent colors:
      - Red (400)
      - Yellow (500)
      - Green (500, 600)
  - Texts:
    - Slate (400)
    - Gray (300)
    - Blue (500)
    - Sky (500)
    - Red (400)
    - Yellow (500)
    - Green (500, 600)

### Navbar

- Made the background transparent for a less obtrusive look
- Centered hamburger vertically, put it on the right side for easier access, since
  most people are right handed

### Hamburger

- Reduced the number of links, put the most important links instead
- Removed footers from the bottom of the hamburger
- Added a more prominent sign in button

### Hero

- Removed categories, put the highlighted products instead moved search bar below the highlighted products
