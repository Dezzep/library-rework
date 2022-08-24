import { useEffect, useState } from 'react';

const Ratings = ({ book, editStars }) => {
  const [starCount, setStarCount] = useState(0);

  const changeStateAndUpdateDB = (
    bookid,
    title,
    author,
    pages,
    stars,
    user,
    readStatus
  ) => {
    setStarCount(stars);
    editStars(bookid, title, author, pages, stars, user, readStatus);
  };

  useEffect(() => {
    if (book.stars !== undefined) {
      setStarCount(book.stars);
    }
  }, [book.stars]);

  const starsChecked = (n) => (n === book.stars ? true : false);

  return (
    <div className="rating rating-lg">
      <input
        type="radio"
        name={`rating-4${book.title}`}
        className="mask mask-star-2 bg-green-500"
        onClick={() =>
          changeStateAndUpdateDB(
            book.id,
            book.title,
            book.author,
            book.pages,
            0,
            book.user.id,
            book.readStatus
          )
        }
        defaultChecked={starsChecked(0)}
      />
      <input
        type="radio"
        name={`rating-4${book.title}`}
        className="mask mask-star-2 bg-green-500"
        defaultChecked={starsChecked(1)}
        onClick={() =>
          changeStateAndUpdateDB(
            book.id,
            book.title,
            book.author,
            book.pages,
            1,
            book.user.id,
            book.readStatus
          )
        }
      />
      <input
        type="radio"
        name={`rating-4${book.title}`}
        className="mask mask-star-2 bg-green-500"
        defaultChecked={starsChecked(2)}
        onClick={() =>
          changeStateAndUpdateDB(
            book.id,
            book.title,
            book.author,
            book.pages,
            2,
            book.user.id,
            book.readStatus
          )
        }
      />
      <input
        type="radio"
        name={`rating-4${book.title}`}
        className="mask mask-star-2 bg-green-500"
        defaultChecked={starsChecked(3)}
        onClick={() =>
          changeStateAndUpdateDB(
            book.id,
            book.title,
            book.author,
            book.pages,
            3,
            book.user.id,
            book.readStatus
          )
        }
      />
      <input
        type="radio"
        name={`rating-4${book.title}`}
        className="mask mask-star-2 bg-green-500"
        defaultChecked={starsChecked(4)}
        onClick={() =>
          changeStateAndUpdateDB(
            book.id,
            book.title,
            book.author,
            book.pages,
            4,
            book.user.id,
            book.readStatus
          )
        }
      />
    </div>
  );
};

export default Ratings;
