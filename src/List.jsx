import React from 'react'
import { getPosts } from "./api/api"
import { useQuery } from '@tanstack/react-query'

const PostList = () => {

  const { data: myPosts, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  //console.log(myPosts, isLoading, isError, error);


  return (
    <div className='container'>
      {isLoading && <p>Loading ....</p>}
      {isError && <p>{error?.message}</p>}

      {myPosts && myPosts.map((p) => {
        return (
          <div className='post' key={p.id}>
            <div>{p.title}</div>
            {p.tags.map((t) => {
              return <span key={t}>{t}</span>
            })}
          </div>
        );
      })}

    </div>
  )
}

export default PostList
