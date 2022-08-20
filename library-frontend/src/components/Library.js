import { useState } from 'react';

const Library = ({ book, editStars, deleteBook }) => {
  const [details, setDetails] = useState(false);

  const hideDetails = { display: details ? 'none' : '' };
  const showDetails = { display: details ? '' : 'none' };

  const toggleDetails = () => {
    setDetails(!details);
  };

  const bookStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  };

  return (
    <div style={bookStyle}>
      <div style={hideDetails}>
        {book.title} - {book.author}
        <button onClick={toggleDetails}>view</button>
      </div>
      <div style={showDetails}>
        <div>
          {book.title} <button onClick={toggleDetails}>hide</button>
        </div>
        <p>{book.pages}</p>
        <div>
          {book.stars}
          <button
            onClick={() =>
              editStars(
                book.id,
                book.title,
                book.author,
                book.pages,
                (book.stars = 2),
                book.user.id
              )
            }
          >
            like
          </button>
        </div>
        <p>{book.author}</p>
      </div>
      <button onClick={() => deleteBook(book.id)}>remove</button>
    </div>
  );
};

export default Library;
