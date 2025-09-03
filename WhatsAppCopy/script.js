function openchat1() {
    document.getElementById("chatscreen").style.display = "none";
    document.getElementById("chatscreen").style.display = "block";
    document.getElementById("chatperson").innerHTML = "Person 1";
    document.getElementById("profilepic").src = 'avatar.png';

    const container = document.getElementById("scrollBox");
    container.scrollTop = container.scrollHeight;
    document.getElementById("msgInput").focus();
    document.getElementById("unread").style.display = "none";

}
function openchat16() {
    document.getElementById("chatscreen").style.display = "none";
    document.getElementById("chatscreen").style.display = "block";
    document.getElementById("chatperson").innerHTML = "Person 16";
    document.getElementById("profilepic").src = 'avatar.png';
    document.getElementById("msgInput").focus();
    const container = document.getElementById("scrollBox");
    container.scrollTop = container.scrollHeight;
}
function openchat14() {
    document.getElementById("chatscreen").style.display = "none";
    document.getElementById("chatscreen").style.display = "block";
    document.getElementById("chatperson").innerHTML = "Person 14";
    document.getElementById("profilepic").src = 'avatar.png';
    document.getElementById("msgInput").focus();
    const container = document.getElementById("scrollBox");
    container.scrollTop = container.scrollHeight;
}

function openchat9() {
    document.getElementById("chatscreen").style.display = "none";
    document.getElementById("chatscreen").style.display = "block";
    document.getElementById("chatperson").innerHTML = "Person 9";
    document.getElementById("profilepic").src = 'avatar.png';
    document.getElementById("msgInput").focus();
    const container = document.getElementById("scrollBox");
    container.scrollTop = container.scrollHeight;
}

function openchat10() {
    document.getElementById("chatscreen").style.display = "none";
    document.getElementById("chatscreen").style.display = "block";
    document.getElementById("chatperson").innerHTML = "Person 10";
    document.getElementById("profilepic").src = 'batman_hero_avatar_comics-512.png';
    document.getElementById("msgInput").focus();
    const container = document.getElementById("scrollBox");
    container.scrollTop = container.scrollHeight;
}

function openchat11() {
    document.getElementById("chatscreen").style.display = "none";
    document.getElementById("chatscreen").style.display = "block";
    document.getElementById("chatperson").innerHTML = "Person 11";
    document.getElementById("profilepic").src = 'batman_hero_avatar_comics-512.png';
    const container = document.getElementById("scrollBox");
    container.scrollTop = container.scrollHeight;
    document.getElementById("msgInput").focus();
}

function openchat2() {
    document.getElementById("chatscreen").style.display = "none";
    document.getElementById("chatscreen").style.display = "block";
    document.getElementById("chatperson").innerHTML = "Person 2";
    document.getElementById("profilepic").src = 'pngtree-man-avatar-with-circle-frame-vector-ilustration-png-image_6110328.png';
    document.getElementById("msgInput").focus();
    const container = document.getElementById("scrollBox");
    container.scrollTop = container.scrollHeight;
    document.getElementById("unread2").style.display = "none";

}

function openchat3() {
    document.getElementById("chatscreen").style.display = "none";
    document.getElementById("chatscreen").style.display = "block";
    document.getElementById("chatperson").innerHTML = "Person 3";
    document.getElementById("profilepic").src = 'images.jpeg';
    document.getElementById("msgInput").focus();
    const container = document.getElementById("scrollBox");
    container.scrollTop = container.scrollHeight;

}

function openchat12() {
    document.getElementById("chatscreen").style.display = "none";
    document.getElementById("chatscreen").style.display = "block";
    document.getElementById("chatperson").innerHTML = "Person 12";
    document.getElementById("profilepic").src = 'images.jpeg';
    document.getElementById("msgInput").focus();
    const container = document.getElementById("scrollBox");
    container.scrollTop = container.scrollHeight;

}

function openchat4() {
    document.getElementById("chatscreen").style.display = "none";
    document.getElementById("chatscreen").style.display = "block";
    document.getElementById("chatperson").innerHTML = "Person 4";
    document.getElementById("profilepic").src = 'stylish-spectacles-guy-3d-avatar-character-illustrations-png.png';
    const container = document.getElementById("scrollBox");
    container.scrollTop = container.scrollHeight;
    document.getElementById("msgInput").focus();
    document.getElementById("unread4").style.display = "none";

}

function openchat13() {
    document.getElementById("chatscreen").style.display = "none";
    document.getElementById("chatscreen").style.display = "block";
    document.getElementById("chatperson").innerHTML = "Person 13";
    document.getElementById("profilepic").src = 'stylish-spectacles-guy-3d-avatar-character-illustrations-png.png';
    const container = document.getElementById("scrollBox");
    container.scrollTop = container.scrollHeight;
    document.getElementById("msgInput").focus();
}

function openchat8() {
    document.getElementById("chatscreen").style.display = "none";
    document.getElementById("chatscreen").style.display = "block";
    document.getElementById("chatperson").innerHTML = "Person 8";
    document.getElementById("profilepic").src = 'stylish-spectacles-guy-3d-avatar-character-illustrations-png.png';
    const container = document.getElementById("scrollBox");
    container.scrollTop = container.scrollHeight;
    document.getElementById("msgInput").focus();

}

function openchat5() {
    document.getElementById("chatscreen").style.display = "none";
    document.getElementById("chatscreen").style.display = "block";
    document.getElementById("chatperson").innerHTML = "Person 5";
    document.getElementById("profilepic").src = 'images (1).png';
    const container = document.getElementById("scrollBox");
    container.scrollTop = container.scrollHeight;
    document.getElementById("msgInput").focus();
}

function openchat15() {
    document.getElementById("chatscreen").style.display = "none";
    document.getElementById("chatscreen").style.display = "block";
    document.getElementById("chatperson").innerHTML = "Person 15";
    document.getElementById("profilepic").src = 'images (1).png';
    document.getElementById("msgInput").focus();
}

function openchat6() {
    document.getElementById("chatscreen").style.display = "none";
    document.getElementById("chatscreen").style.display = "block";
    document.getElementById("chatperson").innerHTML = "Person 6";
    document.getElementById("profilepic").src = 'pngtree-man-avatar-with-circle-frame-vector-ilustration-png-image_6110328.png';
    const container = document.getElementById("scrollBox");
    container.scrollTop = container.scrollHeight;
    document.getElementById("msgInput").focus();
    document.getElementById("unread6").style.display = "none";

}

function openchat7() {
    document.getElementById("chatscreen").style.display = "none";
    document.getElementById("chatscreen").style.display = "block";
    document.getElementById("chatperson").innerHTML = "Person 7";
    document.getElementById("profilepic").src = 'smiling-young-man-illustration_1308-174669.png';
    document.getElementById("msgInput").focus();
    const container = document.getElementById("scrollBox");
    container.scrollTop = container.scrollHeight;

}

function hidesidepannel() {
    const checkbox = document.getElementById("menu");
    if (checkbox.checked) {
        document.getElementById("sidepannelslide").style.left = "0";
        document.getElementById("menuoverlay").style.display = "block";
    } else {
        document.getElementById("menuoverlay").style.display = "none";
        document.getElementById("sidepannelslide").style.left = "-200px";
    }
}

function openoverlay() {
    const checkbox = document.getElementById("pro");
    if (checkbox.checked) {
        document.getElementById("profileouter").style.display = "block";
    } else {
        document.getElementById("profileouter").style.display = "none";
    }
}

function morepanneloverlay() {
    const checkbox = document.getElementById("morepannel");
    if (checkbox.checked) {
        document.getElementById("morepanneloverlay").style.display = "block";
    } else {
        document.getElementById("morepanneloverlay").style.display = "none";
    }
}

function closechat() {
    document.getElementById("chatscreen").style.display = "none";
}

const targetElement = document.getElementById('chatscreen');

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        targetElement.style.display = 'none';
    }
});

function getInputValue() {
    const inputValue = document.getElementById("msgInput").value;
    console.log("Input value is:", inputValue);

    if (inputValue != "") {
        const newDiv = document.createElement("div");

        newDiv.className = "msgright";

        newDiv.innerHTML = "<div>" + inputValue + "</div>";

        document.getElementById("scrollBox").appendChild(newDiv);
    }

    document.getElementById("msgInput").value = "";
    document.getElementById("msgInput").focus();

    const container = document.getElementById("scrollBox");
    container.scrollTop = container.scrollHeight;

}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        getInputValue();
    }
});

function showcalls() {
    document.getElementById("callscreenid").style.top = "0px";
    document.getElementById("chatscreenid").style.visibility = "hidden";
    document.getElementById("sidepannelslide").style.left = "-200px";
    document.getElementById("chatbutton1").style.backgroundColor = "transparent";
    document.getElementById("callbutton1").style.backgroundColor = "#424343";
    document.getElementById("callbutton1").style.borderLeft = "3px solid #25D366"; 
    document.getElementById("chatbutton1").style.borderLeft = "0"; 
    document.getElementById("statusscreenid").style.top = "-1000px";
    document.getElementById("statusbutton1").style.borderLeft = "0"; 
    document.getElementById("statusbutton1").style.backgroundColor = "transparent";
}

function showchats() {
    document.getElementById("callscreenid").style.top = "-1000px";
    document.getElementById("chatscreenid").style.visibility = "visible";
    document.getElementById("sidepannelslide").style.left = "-200px";
    document.getElementById("chatbutton1").style.backgroundColor = "#424343";
    document.getElementById("callbutton1").style.backgroundColor = "transparent";
    document.getElementById("callbutton1").style.borderLeft = "0"; 
    document.getElementById("chatbutton1").style.borderLeft = "3px solid #25D366"; 
    document.getElementById("statusscreenid").style.top = "-1000px";
    document.getElementById("statusbutton1").style.borderLeft = "0"; 
    document.getElementById("statusbutton1").style.backgroundColor = "transparent";

    
} 

function showstatus() {
    document.getElementById("statusscreenid").style.top = "0px";
    document.getElementById("chatscreenid").style.visibility = "hidden";
    document.getElementById("sidepannelslide").style.left = "-200px";
    document.getElementById("chatbutton1").style.backgroundColor = "transparent";
    document.getElementById("callbutton1").style.backgroundColor = "transparent";
    document.getElementById("statusbutton1").style.backgroundColor = "#424343"; 
    document.getElementById("statusbutton1").style.borderLeft = "3px solid #25D366";
    document.getElementById("chatbutton1").style.borderLeft = "0"; 
    document.getElementById("callbutton1").style.borderLeft = "0"; 

}    
