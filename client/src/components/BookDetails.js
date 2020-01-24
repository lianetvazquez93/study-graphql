import React from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries";

class BookDeatils extends React.Component {
  render() {
    return (
      <div className="book-details">
        <p>Output book details here</p>
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookDeatils);
