let toggleNavStatus = false;

let toggleNav= function() {
    let getTopbar = document.querySelector(".Nav-topbar");
    let getTopbarUl = document.querySelector(".Nav-topbar ul");
    let getTopbarLink = document.querySelectorAll(".Nav-topbar a");

    if(toggleNavStatus === false) {
        getTopbar.style.display= "block";
        getTopbarUl.style.visibility= "visible"; 

        let arraylength=getTopbarLink.length;
        for(let i = 0; i<arraylength; i++){
            getTopbarLink[i].style.opacity="1";
        }

        toggleNavStatus = true;
        
    }
    else if(toggleNavStatus === true) {
        getTopbar.style.display= "none";
        getTopbarUl.style.visibility= "visible"; 

        let arraylength=getTopbarLink.length;
        for(let i = 1; i<arraylength; i--){
            getTopbarLink[i].style.opacity="0";
        }

        toggleNavStatus = hidden;
        
    }
}