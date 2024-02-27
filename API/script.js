const userImage = document.querySelector(".userImage")
const userName = document.querySelector(".userName")


const xhr = new XMLHttpRequest()
const requestedUrl = "https://api.github.com/users/emtushar"
xhr.open("GET",requestedUrl);
xhr.onreadystatechange = function(){
    console.log(this.readyState)
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
        userImage.setAttribute("src",data.avatar_url)
        userName.innerText = data.login.toUpperCase()
        console.log(data)
    }
}
console.log(xhr.readyState);
xhr.send()
