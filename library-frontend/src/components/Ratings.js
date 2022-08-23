import { useEffect, useState } from 'react';

const Ratings = ({ book, editStars }) => {
  const [starCount, setStarCount] = useState(0);

  const changeStateAndUpdateDB = (
    bookid,
    title,
    author,
    pages,
    stars,
    user
  ) => {
    setStarCount(stars);
    editStars(bookid, title, author, pages, stars, user);
  };

  
  useEffect(() => {
    if (book.stars !== undefined) {
      setStarCount(book.stars);
    }
  }, [book.stars]);

  const starsChecked = (n) => (n === book.stars ? true : false);

  return (
    <div className="rating rating-lg rating-half">
      <input
        type="radio"
        name={`rating-10${book.title}`}
        className="rating-hidden"
        onClick={() =>
          changeStateAndUpdateDB(
            book.id,
            book.title,
            book.author,
            book.pages,
            0,
            book.user.id
          )
        }
        defaultChecked={starsChecked(0)}
      />
      <input
        type="radio"
        name={`rating-10${book.title}`}
        className="bg-secondary mask mask-star-2 mask-half-1"
        defaultChecked={starsChecked(1)}
        onClick={() =>
          changeStateAndUpdateDB(
            book.id,
            book.title,
            book.author,
            book.pages,
            1,
            book.user.id
          )
        }
      />
      <input
        type="radio"
        name={`rating-10${book.title}`}
        className="bg-secondary mask mask-star-2 mask-half-2"
        defaultChecked={starsChecked(2)}
        onClick={() =>
          changeStateAndUpdateDB(
            book.id,
            book.title,
            book.author,
            book.pages,
            2,
            book.user.id
          )
        }
      />
      <input
        type="radio"
        name={`rating-10${book.title}`}
        className="bg-secondary mask mask-star-2 mask-half-1"
        defaultChecked={starsChecked(3)}
        onClick={() =>
          changeStateAndUpdateDB(
            book.id,
            book.title,
            book.author,
            book.pages,
            3,
            book.user.id
          )
        }
      />
      <input
        type="radio"
        name={`rating-10${book.title}`}
        className="bg-secondary mask mask-star-2 mask-half-2"
        defaultChecked={starsChecked(4)}
        onClick={() =>
          changeStateAndUpdateDB(
            book.id,
            book.title,
            book.author,
            book.pages,
            4,
            book.user.id
          )
        }
      />
      <input
        type="radio"
        name={`rating-10${book.title}`}
        className="bg-secondary mask mask-star-2 mask-half-1"
        defaultChecked={starsChecked(5)}
        onClick={() =>
          changeStateAndUpdateDB(
            book.id,
            book.title,
            book.author,
            book.pages,
            5,
            book.user.id
          )
        }
      />
      <input
        type="radio"
        name={`rating-10${book.title}`}
        className="bg-secondary mask mask-star-2 mask-half-2"
        defaultChecked={starsChecked(6)}
        onClick={() =>
          changeStateAndUpdateDB(
            book.id,
            book.title,
            book.author,
            book.pages,
            6,
            book.user.id
          )
        }
      />
      <input
        type="radio"
        name={`rating-10${book.title}`}
        className="bg-secondary mask mask-star-2 mask-half-1"
        defaultChecked={starsChecked(7)}
        onClick={() =>
          changeStateAndUpdateDB(
            book.id,
            book.title,
            book.author,
            book.pages,
            7,
            book.user.id
          )
        }
      />
      <input
        type="radio"
        name={`rating-10${book.title}`}
        className="bg-secondary mask mask-star-2 mask-half-2"
        defaultChecked={starsChecked(8)}
        onClick={() =>
          changeStateAndUpdateDB(
            book.id,
            book.title,
            book.author,
            book.pages,
            8,
            book.user.id
          )
        }
      />
      <input
        type="radio"
        name={`rating-10${book.title}`}
        className="bg-secondary mask mask-star-2 mask-half-1"
        defaultChecked={starsChecked(9)}
        onClick={() =>
          changeStateAndUpdateDB(
            book.id,
            book.title,
            book.author,
            book.pages,
            9,
            book.user.id
          )
        }
      />
      <input
        type="radio"
        name={`rating-10${book.title}`}
        className="bg-secondary mask mask-star-2 mask-half-2"
        defaultChecked={starsChecked(10)}
        onClick={() =>
          changeStateAndUpdateDB(
            book.id,
            book.title,
            book.author,
            book.pages,
            10,
            book.user.id
          )
        }
      />
    </div>
  );
};

export default Ratings;
