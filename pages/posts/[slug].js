import Head from 'next/head';

import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../utils/posts-util';
import { Fragment } from 'react';

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Blog website</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilesnames = getPostsFiles();

  const slugs = postFilesnames.map((fileName) => {
    return fileName.replace(/\.md$/, '');
  });

  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          slug: slug,
        },
      };
    }),
    fallback: false,
  };
}

export default PostDetailPage;
