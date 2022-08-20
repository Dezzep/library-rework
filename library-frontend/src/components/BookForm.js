import { useState } from 'react';

const BookForm = ({ user, bookSubmitHandler }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handlePageChange = (e) => {
    setPages(e.target.value);
  };

  const handleSubmit = (e, title, author, url) => {
    bookSubmitHandler(e, title, author, url);

    if (title.length >= 3) {
      setTitle('');
      setAuthor('');
      setPages('');
    }
  };

  if (user) {
    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '7em',
          gap: '.3em',
        }}
      >
        <label>
          Title:
          <input
            type={'text'}
            name={'username'}
            value={title}
            onChange={handleTitleChange}
          />
        </label>
        <label>
          Author:
          <input
            type={'text'}
            name={'author'}
            value={author}
            onChange={handleAuthorChange}
          />
        </label>
        <label>
          Pages:
          <input
            type={'number'}
            name={'pages'}
            value={pages}
            onChange={handlePageChange}
          />
        </label>
        <button onClick={(e) => handleSubmit(e, title, author, pages)}>
          Submit
        </button>
      </form>
    );
  }
};

export default BookForm;
