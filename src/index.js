import React, { Fragment } from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css';
//  setup vars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg',
  title: 'A Practical Guide to Personal Freedom',
  author: 'Don Miguel Ruiz'
}

function BookList() {
  return (
    <section className="booklist">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
      <Book title='random title' number={22} />
    </section>
  );
}
const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img }alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root')
);
