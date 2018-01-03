import gql from 'graphql-tag';

export default gql`
mutation UpdatePostMutation($id: ID!, $author: String, $title: String, $content:String, $expectedVersion: Int!) {
    updatePost(
        id: $id
        author: $author
        title: $title
        content: $content
        expectedVersion: $expectedVersion
    ) {
        __typename
        id
        author
        title
        version
    }
}`;