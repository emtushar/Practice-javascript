function InsideMain (username){
    this.username = username,
    console.log("Called")
}

function OneMain (username,useremail,loggedin){

    InsideMain.call(this,username)
    this.useremail = useremail,
    this.loggedin = loggedin

}
const user = new OneMain("dejkml","ejdnk@hiksj.com",true)

console.log(user);

