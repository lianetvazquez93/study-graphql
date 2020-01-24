import React from "react";

import BookList from "./BookList";
import AddBook from "./AddBook";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    );
  }
}

export default App;
