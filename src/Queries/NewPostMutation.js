import gql from 'graphql-tag';

export default gql`
mutation AddPostMutation($author: String!, $title: String!, $content: String!, $url: String!) {
    addPost(
        author: $author
        title: $title
        content: $content
        url: $url
    ) {
        __typename
        id
        author
        title
        version
    }
}`;