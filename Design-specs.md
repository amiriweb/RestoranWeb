# Design specs

## Table of Contents
0. A word on the supplied designs
1. Colors
2. Typography
3. Layout
4. Media queries

## Supplied Designs
In the video, I mention that the designs
are PDFs. XD exports insanely giant PDFs
(200mb each) that, aparently, don't get smaller
when you optimize them. So until that's fixed
I've supplied PNGs instead.

## Colors
- Neutral colors, lightest to darkest:
  - #FFFFFF 
  - #F3F3F3
  - #9D9D9D
  - #5D5D5D
  - #212121
- Primary: #F55D3E

## Typography

### Fonts
- @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Lato:300,400,900');
- Serif font: 'Abril Fatface', cursive;
- Sans serif font: 'Lato', sans-serif;

### Font sizes

- Base settings:
  - small screens: 1rem / 1.6
  - large screens: 1.125rem / 1.6
  - font weight: light
- main title:
  - small screens: 3rem / 1.2
  - large screens: 5rem / 1.2
- section title:
  - small screens: 3rem / 1
  - large screens: 3.75rem
- section subtitles:
  - 1.68rem / 1.1
  - font weight: normal
- h3:
  - 1.3125rem / 1.2

## Layout

Most component spacing, such as grid gaps and component padding, is 2em.

## Media queries

- 0 - 449px
- 449px - 859px
- 860px +