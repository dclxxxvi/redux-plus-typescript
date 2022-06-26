import React from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

function PostContainer() {
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(10)

  return (
    <div>
      {error && <h1>Произошла ошибка</h1>}
      {isLoading && <h1>Идет загрузка...</h1>}
      {posts?.map(post => {
        return <PostItem key={post.id} post={post}/>
      })}
    </div>
  );
}

export default PostContainer;