import React, { useState, useEffect } from 'react';
import './App.css';
import AddBook from './components/AddBook';
import Books from './components/Books';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function App() {

  const [books, setBooks] = useState([])

  const [book, setBook] = useState({
    bookName: "",
    author: "",
    quantity: "",
    department: "",
    comments: ""
  })

  useEffect(() => {
    fetch('/books').then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(jsonRes => setBooks(jsonRes))
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prevInput => {
      return ({
        ...prevInput,
        [name]: value
      })
    })
  }

  const addBook = (e) => {
    e.preventDefault();
    const newBook = {
      bookName: book.bookName,
      author: book.author,
      quantity: book.quantity,
      department: book.department,
      comments: book.comments
    }
    axios.post('/newbook', newBook);
    alert(`The Book ${book.bookName} is added!`);
    setBook({ bookName: "", author: "", quantity: "", department: "", comments: "" })
  }

  const deleteBook = (id) => {
    axios.delete('/delete/' + id);
    alert(`The book with id ${id} is deleted!`)
  }

  const lendBook = (id) => {
    axios.put('/lend/' + id);
    alert(`The book with id ${id} is lended!`)
  }

  const backBook = (id) => {
    axios.put('/back/' + id);
    alert(`The book with id ${id} is back!`)
  }

  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">OALTUNORGU-BOOKS</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Books</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addbook">Add Book</Link>
                </li>
              </ul>
              {/* <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form> */}
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Books books={books} lendBook={lendBook} deleteBook={deleteBook} backBook={backBook} />
          </Route>
          <Route path="/addBook">
            <AddBook book={book} handleChange={handleChange} addBook={addBook} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
