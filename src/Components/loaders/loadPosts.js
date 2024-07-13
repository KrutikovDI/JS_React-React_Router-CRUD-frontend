// import { defer } from "react-router-dom";

// const getPosts = async() => {
//     const resolve = await fetch('http://localhost:7071/posts');
//     const resData = await resolve.json()
//     console.log(resData)
//     return resData
// }

// export const postsLoader = async() => {
//     return defer({
//         posts: getPosts()
//     });
// };

export const postLoader = async({ params }) => {
    const { id } = params;
    const resolve = await fetch(`http://localhost:7071/posts/${id}`);
    const post = await resolve.json();
    return post;
}