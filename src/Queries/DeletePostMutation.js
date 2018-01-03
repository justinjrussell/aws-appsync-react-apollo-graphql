import gql from 'graphql-tag';

export default gql`
mutation DeletePostMutation($id: ID!) {
    deletePost(id: $id) {
        __typename
        id
        author
        title
        version
    }
}`;