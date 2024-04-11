
export let users = [
    {
    id: "1",
    username: "tae",
    password: "$2a$12$vQ2GmBnh6N4tc1rmHNhmzOAneuz5P/xSUPXqh2TgCjGn8PSBpxEoi",
    name: "tae",
    email: "uxogus@naver.com",
    url: ""
   
    },
];
//$2a$12$vQ2GmBnh6N4tc1rmHNhmzOAneuz5P/xSUPXqh2TgCjGn8PSBpxEoi
//Login specified ID find logic

export async function findByUsername(username){

    return users.find((user) => user.username === username);

}
export async function findById(id){
    return users.find((user) => user.id === id );
}
//회원가입
export async function createUser(user){
    const created = {...user, id: Date.now().toString() };
    users.push(created);
    return created.id;
}