import React, { Fragment } from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css';
//  setup vars
const books = [
  {
    id: 1,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg',
    title: 'A Practical Guide to Personal Freedom',
    author: 'Don Miguel Ruiz',
  },
  {
    id: 2,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
    title: 'A Promised Land',
    author: 'Barack Obama',
  },
  {
    id: 3,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91hzcTMy3GL._AC_UL200_SR200,200_.jpg',
    title: 'Grumpy Monkey',
    author: 'Suzanne Lang',
  },
];

function BookList() {
  return (
  <section className="booklist">
    {books.map((book, index) => {
      return <Book key={book.id} {...book}></Book>;
    })}
  </section>
  );
}

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('はろーーーー');
  };
  const complexExample = (author) =>{
    console.log(author);
  };
  return (
    <article className='book'>
      <img src={img}alt='' />
      <h1 onClick={()=> console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root')
);
