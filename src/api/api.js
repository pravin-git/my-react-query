
const  getPosts = async () =>{
    const res = await fetch(`http://localhost:3000/posts`);
    const data = await res.json();
    return data;
};

const addPosts = async (post) => {
    const res = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(post),
    });
    return res.json();
};

const getTags = async () =>{
    const res = await fetch("http://localhost:3000/tags");
    const data = await res.json();
    return data;
}

export { getPosts, addPosts, getTags};