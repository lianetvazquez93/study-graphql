import React from "react";
import { graphql } from "react-apollo";

import { getAuthorsQuery } from "../queries";

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: "",
    };
  }
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

  submitForm = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form className="add-book" onSubmit={this.submitForm}>
          <div className="field">
            <label>Book name:</label>
            <input type="text" onChange={e => this.setState({ name: e.target.value })} />
          </div>
          <div className="field">
            <label>Genre:</label>
            <input type="text" onChange={e => this.setState({ genre: e.target.value })} />
          </div>
          <div className="field">
            <label>Author:</label>
            <select onChange={e => this.setState({ authorId: e.target.value })}>
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
