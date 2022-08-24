import { useState, useEffect, useRef } from 'react';
import Library from './components/Library';
import libService from './services/library';
import LoginForm from './components/LoginForm';
import loginService from './services/login';
import BookForm from './components/BookForm';
import Togglable from './components/Togglable';
import '../src/index.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);
  const [bookToRead, setBookToRead] = useState(null);

  const bookFormRef = useRef();

  const logOut = () => {
    setUser(null);
    localStorage.removeItem('loggedLibUser');
  };

  const getSetAndSort = async () => {
    // get all books sort them by most likes, then set them to state as an array (of objects).
    const allBooks = await libService.getAll();

    if (user) {
      const usersBooks = allBooks.filter((book) => book.username === user.name);

      await usersBooks.reverse(); //newest to oldest

      setBooks(usersBooks);
    }
  };

  const loginFormSubmit = async (event, username, password) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem('loggedLibUser', JSON.stringify(user));
      libService.setToken(user.token);
      setUser(user);

      return 1;
    } catch (exception) {
      setErrorMessage('Wrong Username or Password');
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const bookSubmitHandler = async (e, title, author, pages) => {
    e.preventDefault();
    if (title.length < 3) {
      setErrorMessage('Title must be atleast 3 characters.');
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    } else {
      try {
        await libService.create({ title, author, pages });
        getSetAndSort();
        bookFormRef.current.toggleVisibility();
        setMessage(`${title} by ${author} has been added`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      } catch (exception) {
        setErrorMessage(`'please fill out required forms'`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    }
  };

  const editStars = async (
    id,
    title,
    author,
    pages,
    stars,
    user,
    readStatus
  ) => {
    try {
      await libService.update(id, {
        title: title,
        author: author,
        pages,
        stars,
        user,
        readStatus,
      });
      getSetAndSort();
    } catch (exception) {
      console.log('error adding like');
    }
  };

  const deleteBook = async (id, name) => {
    if (window.confirm(`Do you really want to delete ${name}?`)) {
      try {
        await libService.remove(id);
        getSetAndSort();
      } catch {
        setErrorMessage('you do not have permission to delete this book.');
      }
    }
  };
  const selectRandomBook = () => {
    const unreadBooks = books.filter((book) => !book.readStatus);
    const bookToReadTimeout = setTimeout(() => {
      setBookToRead(null);
    }, 5000);

    if (unreadBooks.length > 0) {
      clearTimeout(bookToReadTimeout);
      const randomBook =
        unreadBooks[Math.floor(Math.random() * unreadBooks.length)];
      console.log(randomBook);
      setBookToRead(`you should read ${randomBook.title}`);
    } else {
      setBookToRead("It looks like you've already read all your books!");
    }
  };

  useEffect(() => {
    getSetAndSort();
  }, [user]);
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedLibUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      libService.setToken(user.token);
    }
  }, []);

  if (!user) {
    return (
      <div>
        <LoginForm loginFormSubmit={loginFormSubmit} user={user} />

        <h3 style={{ color: 'red' }}>{errorMessage}</h3>
      </div>
    );
  }
  return (
    <div>
      <div className="flex px-4 py-1">
        <h1 className="text-3xl  font-bold">Books4Bem</h1>
        <div className="ml-auto flex flex-col items-end gap-2 mr-4 ">
          <p className="font-bold">{user.name} </p>
          <button
            className="btn btn-sm rounded-3xl bg-error hover:btn-warning text-error-content"
            onClick={logOut}
          >
            Log Out
          </button>
          <button
            onClick={selectRandomBook}
            className="btn btn-sm rounded-3xl btn-info hover:btn-secondary"
          >
            Random Book
          </button>
          {bookToRead ? <p>{bookToRead}</p> : null}
        </div>
      </div>
      <div className="flex justify-center">
        <Togglable buttonLabel={'new book'} ref={bookFormRef}>
          <BookForm user={user} bookSubmitHandler={bookSubmitHandler} />
          <h3 style={{ color: 'red', backgroundColor: '#3f3f3f' }}>
            {errorMessage}
          </h3>
        </Togglable>
        <h3 style={{ backgroundColor: 'green' }}>{message}</h3>
      </div>

      <div className="grid lg:grid-cols-2">
        {books.map((book) => (
          <Library
            key={book.id}
            book={book}
            editStars={editStars}
            deleteBook={deleteBook}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
