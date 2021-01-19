import React, { Fragment } from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css';

function BookList() {
  return (
  <section className="booklist">
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
  );
}

const Book = () =>{
  return (
  <article className='book'>
    <Image></Image>
    <Title />
    <Author />
  </article>
  );
};
const Image = () => (
<img
 src="https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg" 
 alt=""
 />
);

const Title = () => <h1>The Four Agreements: A Practical Guide to Personal Freedom</h1>
const Author = () => <h4>Don Miguel Ruiz</h4>

ReactDom.render(<BookList />, document.getElementById('root')
);
