
var users = [
    {
    profilePic: "https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    displayPic: "https://images.unsplash.com/photo-1602077422495-c8733eb58c34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    pendingMessage: 4,
    location: "Delhi, India",
    name: "Sanskriti",
    age: 23,
    interests: [ {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writer"
     } ,{
        icon: `<i class="text-md ri-music-2-fill"></i>`,
        interest: "music"
    }],
    
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga porro ex, itaque rerum quis sunt!",
    isFriend: null
},
{
    profilePic: "https://images.unsplash.com/photo-1521676259650-675b5bfec1ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    displayPic: "https://images.unsplash.com/photo-1603080948624-12c7a4ee73ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    pendingMessage: 4,
    location: "Bangalore, India",
    name: "Shivangi",
    age: 23,
    interests: [ {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writer"
     } ,{
        icon: `<i class="text-md ri-music-2-fill"></i>`,
        interest: "music"
    }],
    
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga porro ex, itaque rerum quis sunt!",
    isFriend: null
},
{
    profilePic: "https://images.unsplash.com/photo-1585066699728-a56ef32a992b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    displayPic: "https://images.unsplash.com/photo-1635412200279-709276202012?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    pendingMessage: 4,
    location: "Hyderabad, India",
    name: "Rashi",
    age: 23,
    interests: [ {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writer"
     } ,{
        icon: `<i class="text-md ri-music-2-fill"></i>`,
        interest: "music"
    }],
    
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga porro ex, itaque rerum quis sunt!",
    isFriend: null
},
{
    profilePic: "https://images.unsplash.com/photo-1635412200279-709276202012?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    displayPic: "https://images.unsplash.com/photo-1567452524285-61f617f210bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxwb3RyYWl0fGVufDB8fDB8fHww",
    pendingMessage: 4,
    location: "Tamilnadu, India",
    name: "Chetna",
    age: 23,
    interests: [ {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writer"
     } ,{
        icon: `<i class="text-md ri-music-2-fill"></i>`,
        interest: "music"
    }],
    
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga porro ex, itaque rerum quis sunt!",
    isFriend: null
}];

function select(elem){
    return document.querySelector(elem);
}

var curr=0;
let isAnimating = false;

function setData(index){
    select(".prflimg img").src = users[index]?.profilePic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index]?.location;
    select(".name h1:nth-child(1)").textContent = users[index]?.name;
    select(".name h1:nth-child(2)").textContent = users[index]?.age;

    var clutter = "";
    users[index].interests.forEach(function(interest){
        clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
            ${interest.icon}
            <h3 class="text-md tracking-tight" >${interest.interest}</h3>
            </div>`;
    })
    select(".tags").innerHTML = clutter;

    select(".bio p").textContent = users[index].bio;

}

function setInitial(){
    console.log(users);
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr+1]?.displayPic;

    setData(curr);
    
    curr =2;

}

setInitial();


// 1. deny mai animation lga kar incoming card ko aage leaaye.
function imageChange(){

    if(!isAnimating){
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: function(){
                isAnimating = false;
                let main = select(".maincard");
                let incoming = select(".incomingcard");
    
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale: 1,
                    opacity: 1
                })
                if(curr === users.length) curr = 0;
                select(".maincard img").src = users[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
    
                
            }
        });
    
        tl.to(".maincard",{
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9
        }, "a")
        .from(".incomingcard",{
            scale: .9,
            opacity: 0,
            ease: Circ,
            duration: 1.1
        }, "a") // a flag se dono ek sath start honge, and name jo a diya hai koi bhi de skte hai
    }
    
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y:"100%",
        // opacity: 0,
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
    })
})

//2. but hum yahan, incoming card ko maincard bna denge and jo maincard ko gayab kiya hai isse incoming card bna denge.

accept.addEventListener("click", function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y:"100%",
        // opacity: 0,
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
    })
})

function containerCreator(){
    document.querySelectorAll('.element')
    .forEach(function(element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
        div.appendChild(element);
        select(".details").appendChild(div);
    })
}

containerCreator();

