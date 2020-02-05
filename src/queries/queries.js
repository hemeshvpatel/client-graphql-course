import { gql } from "apollo-boost";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

//practice
const addAuthorMutation = gql`
  mutation($name: String!, $age: String!) {
    addAuthor(name: $name, age: $age) {
      name
      age
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, addAuthorMutation };
