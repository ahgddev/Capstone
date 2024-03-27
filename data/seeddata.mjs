let postsseed = [
{
    user_id: 1,
    username: "test",
    post_id: 1,
    title: "A Test Post 1",
    text: "Lorem Ipsum Cordia",
    img: {imgURL: "flower.png", imgALT: "A flower" },
    post_date: "2024-03-21",
    tags: ["test1", "test2", "test3", "test4", "test5"]
},{
    user_id: 1,
    username: "test",
    post_id: 2,
    title: "A Test Post 2",
    text: "Lorem Ipsum Cordia Ranran",
    img: {imgURL: "flower.png", imgALT: "A flower" },
    post_date: "2024-03-21",
    tags: ["test1", "test6", "test4", "test5"]
},{
    user_id: 1,
    username: "test",
    post_id: 3,
    title: "A Test Post 3",
    text: "Lorem Ipsum Cordia Ranran Maple Syrup",
    img: {imgURL: "flower.png", imgALT: "A flower" },
    post_date: "2024-03-20",
    tags: ["test6", "test4", "test5"]
},{
    user_id: 2,
    username: "test2",
    post_id: 4,
    title: "A Test Post for user Test 2",
    text: "Lorem Cordia Ranran",
    img: {imgURL: "flower.png", imgALT: "A flower" },
    post_date: "2024-03-18",
    tags: ["test1", "test6", "test4", "test5", "test7"]
},{
    user_id: 3,
    username: "test3",
    post_id: 5,
    title: "A Test Post for user Test 3",
    text: "Lorem Cordial Pine Cone Ranran",
    img: {imgURL: "flower.png", imgALT: "A flower" },
    post_date: "2024-03-01",
    tags: ["test2", "test6", "test4", "test5", "test7"]
},{
    user_id: 1,
    username: "test",
    post_id: 6,
    title: "A Test Post 4",
    text: "Lorem Ipsum Cordia Ranran Maple Syrup Banana Pie",
    img: {imgURL: "flower.png", imgALT: "A flower" },
    tags: []
},{
    user_id: 3,
    username: "test3",
    post_id: 7,
    title: "A Test Post for user Test 3.1",
    text: "Lorem Cordial Pine Cone Ranran May May June July",
    img: {imgURL: "flower.png", imgALT: "A flower" },
    tags: ["test5", "test7"]
},
{
    user_id: 5,
    username: "test5",
    post_id: 8,
    title: "A Test Post for user Test 5",
    text: " ",
    img: {imgURL: "flower.png", imgALT: "A flower" },
    tags: ["test7"]
}]

let usersseed = [{
    user_id: 1,
    username: "firstuser",
    password: "testtest",
    email: "firsttorise@email.com",
    avatar: "https://blogs.missouristate.edu/international/files/2020/09/early_bird-700x420.jpg",
    following: [2,3,4],
},{
    user_id: 2,
    username: "beckyk",
    password: "testtest2",
    email: "beckyk@plantparent.com",
    avatar: "https://cdn-images.kyruus.com/providermatch/summa/photos/200/lee-becky-1457856833.jpg",
    following: [1]
},{
    user_id: 3,
    username: "nmjlee",
    password: "testtest3",
    email: "plantlover3@test.com",
    avatar: "https://t3.ftcdn.net/jpg/03/68/89/98/240_F_368899830_nQRHQGdJTMuoCvmXQIpbjUeyOUOl4pih.jpg",
    following: [2,4]
},{
    user_id: 4,
    username: "mackymaemackmackster",
    password: "testtest4",
    email: "mackiemack@plants.com",
    avatar: "https://cdn.mos.cms.futurecdn.net/XtfwufS8JojrtghHLczPDj-650-80.jpeg.webp",
    following: []
},{
    user_id: 5,
    username: "barkersgarden",
    password: "testtest5",
    email: "barkersgarden@sayhi.com",
    avatar: "https://media.istockphoto.com/id/636475496/photo/portrait-of-brown-puppy-with-bokeh-background.jpg?s=1024x1024&w=is&k=20&c=P_jn3dOG4ju2hxHGabNxJ9mIq_uRaXGR3F7OG2bs2MQ=",
    following: [4]
},{
    user_id: 6,
    username: "BBQPORKFORPLANTS",
    password: "testtest6",
    email: "bbqkingoftexas@teaxs.com",
    avatar: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    following: [4,1]
},{
    user_id: 7,
    username: "toinataparty",
    password: "testtest7",
    email: "toitoi@matts.com",
    avatar: "https://images.unsplash.com/photo-1545250888-30e5b5addc36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    following: [4]
},{
    user_id: 8,
    username: "mako",
    password: "testtest8",
    email: "mako@mako.com",
    avatar: "https://images.squarespace-cdn.com/content/v1/5b621f125cfd79831a7effc2/1553025866798-1VVE54VPF62TCE91C1FC/20190314_bkp_makosush_01_12584.jpg?format=1500w",
    following: [4,1,2,3,5,6]
},{
    user_id: 9,
    username: "makomako",
    password: "testtest9",
    email: "makomako@test.com",
    avatar: "https://images.squarespace-cdn.com/content/v1/5b621f125cfd79831a7effc2/1553034230113-58TO544HSYFP57X5G7IB/20190314_bkp_makosush_01_12905.jpg?format=1500w",
    following: []
}]

export {postsseed, usersseed}