import React from "react";

import BookList from "./BookList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Reading List</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
