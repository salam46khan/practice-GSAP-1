// fast move 
// gsap.to('.box-1', {
//     duration:2,
//     x:100,
//     delay:0.5
// })

// I can target many .class or #id 
// gsap.to('.box-1, .circle-1', {
//     duration:2,
//     x:200,
//     delay:0.5
// })


// I can tagrget variable
// const reg = document.getElementById('reg')
// gsap.to(reg, {
//     x:300,
//     duration:2
// })


// an array and a var , target now  (can not target 2 or more var without array)
// const reg = document.getElementById('reg');
// const box = document.getElementsByClassName('box-1')
// const circle = document.getElementsByClassName('circle-1')
// gsap.to([reg, box, circle] , {
//     x:300,
//     duration:2,
//     stagger:0.3
// })


// use css property and some vars
// gsap.to('.box-1, .circle-1', {
    // xPercent:50,
    // duration:2,
    // x:"+=300",
    // skewY: 10
    // rotation: "1.25rad" ,
    // rotation: 360
    // border: "2px solid red",
    // backgroundColor: "blue"
// })


// we can change attribute 
// gsap.to('.myImg', {
//     duration: 2,
//     x: 200,
//     delay:1,
//     attr: {
//         src:"./img/two.png"
//     }
// })