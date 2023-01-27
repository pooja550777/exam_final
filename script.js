const buttoncalled=document.getElementById("button");
buttoncalled.addEventListener('click', submit)
const getButtoncalled=document.getElementById("get");
getButtoncalled.addEventListener('click', get)

function submit(){
    let name1=document.getElementById("firstname").value;
    let name2=document.getElementById("middlename").value;
    let name3=document.getElementById("lastname").value;
    document.getElementById("password").value = "password";
    let name4= password;
    let request = new Request('http://localhost:8080/registrations',{
        headers: new Headers({
            
            'Content-type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({
            "firstname": name1,
            "middlename": name2,
            "lastname": name3,
            "password":name4
        })
});
function generatePassword(fname, mname, lname) {
    var password = fname.substring(0, 2) + mname.substring(0, 2) + lname.substring(0, 2)  + Math.floor(Math.random() * 1000 ) + Math.floor(Math.random() * 1000 );
    return password;
  }
}