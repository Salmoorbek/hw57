//task1
let user = {
    firstName: "Имя",
    lastName: "Фамилия",
    email: "example@gmail.com",
    password: "qwerty",
    isLoggedIn: false,
};

//task2
let post = {
    id: 1,
    title: "Заголовок поста",
    content: "Текст поста",
    date: "2023-04-04",
    liked: true,
    author: user
};

//task3
let comment = {
    id: 1,
    text: "Комментарий",
    date: "2023-04-04",
    publication: post
};

//task4
let posts = [];
function addPost(post) {
    posts.push(post);
}
addPost(post);
console.log(posts);

//task5
function authorizeUser(user) {
    user.isLoggedIn = true;
}
authorizeUser(user)
console.log(user)
function toggleLikePost(posts, postId) {
    const post = posts.find(post => post.id === postId);
    if (post) {
        post.liked = !post.liked;
    }
}
toggleLikePost(posts, 1)
console.log(posts)