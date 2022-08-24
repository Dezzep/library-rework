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
      <form className=" flex flex-col gap-4 justify-center items-center">
        <h3 className="text-primary font-bold text-xl">New Book</h3>
        <label className="w-64">
          Title:
          <input
            type={'text'}
            name={'username'}
            value={title}
            onChange={handleTitleChange}
            className="input input-bordered input-info w-full max-w-xs mt-2 "
          />
        </label>
        <label className="w-64">
          Author:
          <input
            type={'text'}
            name={'author'}
            value={author}
            onChange={handleAuthorChange}
            className="input input-bordered input-info w-full max-w-xs mt-2 "
          />
        </label>
        <label className="w-64">
          Pages:
          <input
            type={'number'}
            name={'pages'}
            value={pages}
            onChange={handlePageChange}
            className="input input-bordered input-info w-full max-w-xs mt-2 "
          />
        </label>
        <button
          className="btn btn-secondary"
          onClick={(e) => handleSubmit(e, title, author, pages)}
        >
          Add Book
        </button>
      </form>
    );
  }
};

export default BookForm;
