//
// Working with Promises in TypeScript
//


import axios from "axios";


type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};


function getPosts(): Promise<Post[]> {
    const url = "https://jsonplaceholder.typicode.com/posts";
    return axios.get(url).then(response => response.data);
}


function getComment(commentId: number): Promise<Comment> {
    const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
    return axios.get(url).then(response => response.data);
}


getPosts()
    .then(res => {
        res.forEach((element) => {
            console.log(element.title);
        });
    })
    .catch(e => {
        console.log(e);
    });


getComment(3)
    .then(res => {
        console.log(res.postId);
    })
    .catch(e => {
        console.log(e);
    });