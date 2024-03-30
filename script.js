
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

function setInitial(){
    console.log(users);
    select(".maincard img").src = users[curr].displayPic;
    // select(".incomingcard img").src = users[curr+1]?.displayPic;

    select(".prflimg img").src = users[curr]?.profilePic;
    select(".badge h5").textContent = users[curr].pendingMessage;
    select(".location h3").textContent = users[curr]?.location;
    select(".name h1:nth-child(1)").textContent = users[curr]?.name;
    select(".name h1:nth-child(2)").textContent = users[curr]?.age;

    var clutter = "";
    users[curr].interests.forEach(function(interest){
        clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
            ${interest.icon}
            <h3 class="text-md tracking-tight" >${interest.interest}</h3>
            </div>`;
    })
    select(".tags").innerHTML = clutter;

    select(".bio p").textContent = users[curr].bio;

    curr =2;

}

setInitial();