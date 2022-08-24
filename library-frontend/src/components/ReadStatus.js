import { useState, useEffect } from 'react';

const ReadStatus = ({ editReadStatus, book }) => {
  const [readStatus, setReadStatus] = useState(false);

  const UpdateDB = (bookid, title, author, pages, stars, user, readStatus) => {
    editReadStatus(bookid, title, author, pages, stars, user, readStatus);
  };
  const toggleReadStatus = () => {
    UpdateDB(
      book.id,
      book.title,
      book.author,
      book.pages,
      book.stars,
      book.user.id,
      !readStatus
    );
    setReadStatus(!readStatus);
  };
  useEffect(() => {
    if (book.readStatus === true) {
      setReadStatus(true);
    }
  }, [book]);

  return (
    <button
      onClick={toggleReadStatus}
      className={`btn  ${readStatus ? 'btn-info' : 'btn-accent'}`}
    >
      {readStatus ? 'Finished' : 'Not Read'}
    </button>
  );
};

export default ReadStatus;
