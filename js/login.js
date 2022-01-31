function validate()
{

    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").Value;
    if (username=="admin"&& password=="user")
    { 
        alert("login successfully");
        return false;

    }
    else
    {
        alert("login failed");

    }


}

function Register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
    var x = document.getElementById("Login");
    var y = document.getElementById("Register");
    var z = document.getElementById("btn");

