import React from "react";
import { graphql } from "react-apollo";

import { getBooksQuery } from "../queries";
import BookDetails from "./BookDetails";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  displayBooks() {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading books...</div>;
    }

    return data.books.map(book => {
      return (
        <li key={book.id} onClick={e => this.setState({ selected: book.id })}>
          {book.name}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul className="book-list">{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
