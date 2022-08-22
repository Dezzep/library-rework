import Ratings from './Ratings';
import { useEffect, useState } from 'react';




const Library = ({ book, editStars, deleteBook }) => {
  const [details, setDetails] = useState(false);

  // const hideDetails = { display: details ? 'none' : '' };
  // const showDetails = { display: details ? '' : 'none' };

  const toggleDetails = () => {
    setDetails(!details);
  };

  return (
    <div className="flex flex-col bg-neutral h-96 items-center justify-center mx-auto mt-6   w-8/12">
      <Ratings book={book} editStars={editStars}></Ratings>

      <h3 className="text-xl">{book.title} </h3>
      <p className="text-lg">{book.author}</p>

      {/* <div className="rating rating-lg rating-half">
          <input
            type="radio"
            name={`rating-10${book.title}`}
            className="rating-hidden"
          />
          <input
            type="radio"
            name={`rating-10${book.title}`}
            className="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name={`rating-10${book.title}`}
            className="bg-green-500 mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name={`rating-10${book.title}`}
            className="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name={`rating-10${book.title}`}
            className="bg-green-500 mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name={`rating-10${book.title}`}
            className="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name={`rating-10${book.title}`}
            className="bg-green-500 mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name={`rating-10${book.title}`}
            className="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name={`rating-10${book.title}`}
            className="bg-green-500 mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name={`rating-10${book.title}`}
            className="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name={`rating-10${book.title}`}
            className="bg-green-500 mask mask-star-2 mask-half-2"
          /> */}
      {/* </div> */}
    </div>
    //       {/* <div style={showDetails}> */}
    //         {/* <div>
    //           {book.title} <button onClick={toggleDetails}>hide</button>
    //         </div>
    //         <p>{book.pages}</p>
    //         <div>
    //           {book.stars}
    //           <button
    //             onClick={() =>
    //               editStars(
    //                 book.id,
    //                 book.title,
    //                 book.author,
    //                 book.pages,
    //                 (book.stars = 2),
    //                 book.user.id
    //               )
    //             }
    //           >
    //             like
    //           </button>
    //         </div>
    //         <p>{book.author}</p>
    //       </div>
    //       <button onClick={() => deleteBook(book.id)}>remove</button> */}
    //     {/* </div> */}
    //   {/* );
    // }; */}
  );
};

export default Library;
