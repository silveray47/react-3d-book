[![npm version](https://badge.fury.io/js/react-3d-book-alpha-vertion.svg)](https://badge.fury.io/js/react-3d-book-alpha-vertion) 


<h1 align="center">
This component is still under construction.

Most of the described features are not yet active.

See ToDo list  
<h1>

# A react-3D-book
> A react UI component of a fully animated 3d book. 


## Description 
This project is a react UI library that allows you to display the content of the website on the pages of a 3D book. The position and viewing angle of the book can be fully controlled. The pages are animated and you can browse between the different pages.
The library is very easy and does not require previous downloads except react and reac-dom.
The library uses stylrd-componenst and the required purchases will be installed if the library is installed.\

## Getting Started
This project requires NodeJS (version 8 or later) and NPM. 
In addition the project requires react and react-dom to be instaled.
To install the project, run the command
```bash
npm i react-3d-book-alpha-vertion
```

## Usage
Using the library is very strat forward. 
The library contains 3 main components
- Book
- Page
- Gutter

The book wraps all the other components. Inside the book, all the props are transferred, the rules such as page size, angle, etc.
Inside the book the pages are called. Each page is a wrapper element within which you can enter your content. 

ll pages will be stacked one on top of the other. And the order is preserved while flipping through the pages.
A Gutter is the center of an open book. Gutter is an empty element and its only purpose is to mark the center of the book.

All pages called above the gutter will be stacked on the left side of the of the open book (the last Page is the top page), 
and all the Pages called under the Gutter will show on the Right side on the Open Book

### The simplest use 
```tsx
import Page from './components/Page';
import Book from './components/Book'
import Gutter from './components/Gutter';

function App() {
  return (
      <Book >
        <Page > The last page on the left </Page>
        <Page > ... </Page>
        <Page > ... </Page>
        <Page > ... </Page>
        <Page > This is the top page on the left side </Page>
        <Gutter/>  
        <Page > The last page on the right </Page>
        <Page > ... </Page>
        <Page > ... </Page>
        <Page > ... </Page>
        <Page > ... </Page>
        <Page > This is the top page on the right side </Page>
      </Book>
  );
}
```

## ToDo List
- ### importent 
    - add Default.json
    - Default propertis and logic 
    - button desing  
    - left side / right side page 
    - content animation *
    - content on one side *
    - content on last pages (left and right)

    - multi-page hendeling
    ---------------------------
- ### secendery tasks 
    - fine expretion for segment Vs flip width and bend angle
    - shadows
    - Different button designs 
    - add animations presets 
    - page flexibility setings 
    - animation for content
    - <Lastpage> and <firstpage> components,

- ### good to have
    - content on both sides
    - book cover 
    - <BookMark> 

- ### Impossible 
    - Animate written content along with the page
    - Dragging the page with mouse

## Bsic API 
### Book props

| prop | Default | Description |
| --- | --- |--- |
| `width` |  |  |
| `height` |  |  |
| `bookAngle` |  |  |
| `bookColor` |  |  |
| `speed` |  |  |
| `pageColor` |  |  |
| `coverColor` |  |  |
| `border` |  |  |
| `animationType` |  |  |
| `buttonStyle` |  |  |

### Page props
| prop | Default | Description |
| --- | --- |--- |
| `speed` |  |  |
| `pageColor` |  |  |
| `border` |  |  |
| `animationType` |  |  |
| `buttonStyle` |  |  |
| `backgroundImage` |  |  |
| `pageNumber` |  |  |