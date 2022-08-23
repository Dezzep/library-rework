import Ratings from './Ratings';
import ReadStatus from './ReadStatus';

const Library = ({ book, editStars, deleteBook }) => {
  return (
    <div className="flex flex-col bg-neutral h-96 items-center justify-center mx-auto mt-6   w-8/12">
      <h3 className="text-2xl text-primary">{book.title} </h3>
      <p className="mb-4">{book.author}</p>

      <Ratings book={book} editStars={editStars}></Ratings>
      <p className="mt-4">{book.pages} pages</p>
      <div className="w-3/4 flex mt-8">
        <ReadStatus editReadStatus={editStars} book={book} />
        <button className="btn bg-error text-warning-content hover:bg-warning ml-auto ">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Library;
