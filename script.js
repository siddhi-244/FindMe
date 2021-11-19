const btn=document.getElementById("search");
const output=document.querySelector(".output")
btn.addEventListener("click",findUser);
function findUser(){
const username=document.getElementById("username").value;
const apiurl="https://api.github.com/users/"+username;
fetch(apiurl)
.then(response => response.json())
.then( (data) => {
	output.innerHTML=`
					
					  <h2 class="name">${data.name}</h2>
					  <div class="card">
					  <img class="profile-img" src="${data.avatar_url}">
					  <div class="parent">
					  <div class="square"><p>${data.followers}</p> 
					  					  <p>Followers</p></div>
					  <div class="square"><p>${data.following}<p>
					  					  <p> Following</p></div>
					  <div class="square"><p>${data.public_repos}</p>
					  					  <p> Repositories</p></div>
					  </div>
					  </div>
					  <p class="text">${data.bio}</p>
					  <p >@${data.login}</p>
					  <a href="${data.html_url}" target="_blank"><i class="arrow uil uil-arrow-right"></i></a>
					  `
});
}




