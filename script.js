const btn = document.getElementById("search");
const output = document.querySelector(".output")
btn.addEventListener("click", findUser);
function findUser() {
	const username = document.getElementById("username").value;
	if (!username) {
		output.innerHTML = `<h2 class="name">No Input !</h2>
					  <img class="error-img" src="images/octocat.png">`;
	} else {
		const apiurl = "https://api.github.com/users/" + username;
		fetch(apiurl)
			.then(response => {
				if (!response.ok) {
					const responseError = {
						statusText: response.statusText,
						status: response.status
					};
					throw responseError;
				}
				return response.json()
			})
			.then((data) => {
				if (data.name === null) {
					data.name = `Oops ! No name :( `
				}
				if (data.bio === null) {
					data.bio = `Oops ! No Bio :( `
				}
				output.innerHTML = `
					
					  <h2 class="name heading">${data.name}</h2>
					  <div class="card">
					  <img class="profile-img" src="${data.avatar_url}">
					  <div class="parent">
					  <div class="square"><p class="numbers">${data.followers}</p> 
					  					  <p>Followers</p></div>
					  <div class="square"><p class="numbers">${data.following}<p>
					  					  <p> Following</p></div>
					  <div class="square"><p class="numbers">${data.public_repos}</p>
					  					  <p> Repositories</p></div>
					  </div>
					  </div>
					  <p class="text heading"> <strong>Profile : </strong> ${data.bio}</p>
					  <p class="username"> <strong> UserName : </strong>@${data.login}</p>
					  <a href="${data.html_url}" target="_blank"><i class="arrow uil uil-arrow-right"></i></a>
					  `
			})

			.catch(errorHandler)
	}
}
function errorHandler(error) {

	if (error.status == 404) {
		output.innerHTML = `<div class="name">Oops! User Not found :( </div>
        					<img class="error-img" src="images/octocat.png">`;

	}

	if (error.status == 403) {
		output.innerHTML = `<div class="name">Oops! Rate Limit Exceeded! Try again later :( </div>
        					<img class="error-img" src="images/octocat.png">`;
	}

}
document.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		findUser();
	}
})

// Content : 
let navLink = document.getElementById('nav_link');
let showPara = document.getElementById('hov_para');
// navLink.onmouseenter(() => {
// 	showPara.style.color = "royalblue";
// 	// navLink.classList.add('.hov_para');
// })
navLink.addEventListener("mouseover", () => {
	showPara.style.display = "flex";

})
navLink.addEventListener("mouseout", () => {
	setTimeout(() => {
		showPara.style.display = "none";
	}, 500);

})


