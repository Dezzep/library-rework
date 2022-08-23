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
      <h3 className="text-2xl text-primary">{book.title} </h3>
      <p className="mb-4">{book.author}</p>
      
      <Ratings book={book} editStars={editStars}></Ratings>
      <p className='mt-4'>{book.pages} pages</p>      


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
