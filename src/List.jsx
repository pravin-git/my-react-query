import React from 'react'
import { getPosts, addPosts, getTags } from "./api/api"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const PostList = () => {

  const { data: myPosts, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const { data: myTags } = useQuery({
    queryKey: ["tags"],
    queryFn: getTags,
  });

  const qClient = useQueryClient()

  //console.log(myPosts, isLoading, isError, error);
  const { mutate, isError: isPosterror, isPending, reset } = useMutation({
    mutationFn: addPosts,
    onMutate: () => {
      console.log('onmutate');
    },
    onSuccess: (data, variables, context) => {
      qClient.invalidateQueries({
        queryKey: ["posts"]
      })
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const tags = Array.from(formData.keys()).filter(
      (key) => formData.get(key) === "on"
    );
    if (!title || !tags) return;
    console.log(title, tags)
    mutate({ id: myPosts.length + 1, title, tags })
    e.target.reset();
  }


  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Enter your post...'
          className='postbox'
          name="title"
        />
        <div className='tags'>
          {myTags?.map((tag) => {
            return (
              <div key={tag}>
                <input name={tag} id={tag} type="checkbox" />
                <lable htmlFor={tag} >{tag}</lable>
              </div>
            )
          })
          }
        </div>
        <button>Post</button>

      </form>
      {isLoading && <p>Loading ....</p>}
      {isError && <p>{error?.message}</p>}

      {myPosts?.map((p) => {
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
