import React from "react";
import { graphql } from "react-apollo";

import { getAuthorsQuery } from "../queries";

class AddBook extends React.Component {
  displayAuthors() {
    const { data } = this.props;
    if (data.loading) {
      return <option disabled>Loading author...</option>;
    }

    return data.authors.map(author => {
      return (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      );
    });
  }
  render() {
    return (
      <div>
        <form className="add-book">
          <div className="field">
            <label>Book name:</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Genre:</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Author:</label>
            <select>
              <option>Select author</option>
              {this.displayAuthors()}
            </select>
          </div>
          <button>+</button>
        </form>
      </div>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
