import React from "react";
import { graphql } from "react-apollo";

import { getBooksQuery } from "../queries";

class BookList extends React.Component {
  displayBooks() {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading books...</div>;
    }

    return data.books.map(book => {
      return <li key={book.id}>{book.name}</li>;
    });
  }
  render() {
    return (
      <div>
        <ul className="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
