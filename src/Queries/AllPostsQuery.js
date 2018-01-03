import gql from 'graphql-tag';

export default gql`
query AllPosts {
    allPost {
        posts {
            id
            title
            author
            version
        }
    }
}`;