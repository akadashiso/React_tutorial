import React, { Fragment } from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css';
//  setup vars
const books = [
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg',
    title: 'A Practical Guide to Personal Freedom',
    author: 'Don Miguel Ruiz',
  },
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
    title: 'A Promised Land',
    author: 'Barack Obama',
  },
];
const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
  return <h1>{name}</h1>
});
console.log(newNames);
function BookList() {
  return <section className="booklist">{newNames}</section>;
}
const Book = (props) => {
  const { img, title, author, } = props;

  return (
    <article className='book'>
      <img src={img}alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root')
);
