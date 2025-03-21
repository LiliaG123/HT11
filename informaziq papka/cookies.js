function setCookie(cname, cvalue, expires){
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

function getCookie(cname){
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let carray = document.cookie.split(';');
    for(let i = 0; i < carray.lenght; i++){
        let cookie = carray[i];
        while(cookie.charAt(0) == ' '){
            cookie = cookie.substring(1);
        }
        if(cookie.indexOf(name) == 0){
            return cookie.substring(name.length, cookie.length);
        }
    }

    return "";
}

function checkCookie(){
    let user = getCookie("username");
    if(user != ""){
        alert("Welcome again " + user);
    } else{
        user = prompt("Pleace enter your name:", "");
        if(user != "" && user != null){
            setCookie("username", user, 30);
        }
    }
}