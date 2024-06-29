import Head from 'next/head';

import { getAllPosts } from '../../utils/posts-util';
import AllPosts from '../../components/posts/all-posts';
import { Fragment } from 'react';

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Blog website</title>
        <meta name="description" content="blog" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
