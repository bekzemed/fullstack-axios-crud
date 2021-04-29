import React from 'react';
import './App.css';
import Books from './components/Books';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditBooks from './components/EditBooks';
import AddBook from './components/AddBook';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/book/:id" component={EditBooks} />
        <Route exact path="/add/book" component={AddBook} />
      </Switch>
    </Router>
  );
}

export default App;
