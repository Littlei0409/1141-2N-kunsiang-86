import './app_86.scss';
import books_data from "./booklist_data2";
console.log('book_data',books_data);

const App2_86 = () => {
  return (
    <div>
    <BookList_86/>
    </div>
  );
}

const BookList_86 = () => {
  return (
    <section className="booklist">{books_data.map((book) => {
      const {id,img,title,author} = book;
      return <Book_86 key={id} img={img} title={title} author={author}/>;
    })}</section>
  );
};

const Book_86 = ({img, title, author}) => {
  return (
    <article className="book">
        <img src={img}/>
        <div className="bookinfo">
          <h1>{title}</h1>
          <h4>{author}</h4>
        </div>
      </article>
  );
};


export default App2_86;