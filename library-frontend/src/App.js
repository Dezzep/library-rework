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

  const bookFormRef = useRef();

  const logOut = () => {
    setUser(null);
    localStorage.removeItem('loggedLibUser');
  };

  const getSetAndSort = async () => {
    // get all books sort them by most likes, then set them to state as an array (of objects).
    const allBooks = await libService.getAll();
    await allBooks.sort((a, b) => a.stars - b.stars).reverse(); //most likes is displayed first.
    setBooks(allBooks);
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
        setErrorMessage('please fill out required forms');
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    }
  };

  const editStars = async (id, title, author, pages, stars, user) => {
    try {
      await libService.update(id, { title:title, author:author, pages, stars, user });
      getSetAndSort();
    } catch (exception) {
      console.log('error adding like');
    }
  };

  const deleteBook = async (id) => {
    if (window.confirm('do you really want to delete this?')) {
      try {
        await libService.remove(id);
        getSetAndSort();
      } catch {
        setErrorMessage('you do not have permission to delete this book.');
      }
    }
  };

  useEffect(() => {
    getSetAndSort();
  }, []);
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
      <h2>books</h2>
      <div>
        {user.name} logged in <button onClick={logOut}>Log Out</button>
      </div>
      <Togglable buttonLabel={'new book'} ref={bookFormRef}>
        <h2>create new</h2>
        <BookForm user={user} bookSubmitHandler={bookSubmitHandler} />
        <h3 style={{ color: 'red', backgroundColor: '#3f3f3f' }}>
          {errorMessage}
        </h3>
      </Togglable>
      <h3 style={{ backgroundColor: 'green' }}>{message}</h3>

      <h2>books</h2>
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
