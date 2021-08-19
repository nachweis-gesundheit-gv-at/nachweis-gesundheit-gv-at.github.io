function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function HideCookieBanner() {
    document.getElementById("cookiebanner-wrapper").style.setProperty("display", "none");
    setCookie("askcookie", "false", 365);
}

function VerifyBirth() {
    let dy = document.getElementById("day").valueAsNumber;
    let mo = Number.parseInt(document.getElementById("month").value);
    let yr = document.getElementById("year").valueAsNumber;
    let dt = Date.parse(mo + "/" + dy + "/" + yr);
    if (dt == 991692000000) {
        location.href += "result/";
    } else if (dt == 977958000000) {
        location.href += "result/";
    }
}

function VerifyBirth() {
    let dy = document.getElementById("day").valueAsNumber;
    let mo = Number.parseInt(document.getElementById("month").value);
    let yr = document.getElementById("year").valueAsNumber;
    let dt = Date.parse(mo + "/" + dy + "/" + yr);
    if (dt == 991692000000) {
        location.href += "result/";
    } else if (dt == 977958000000) {
        location.href += "result/";
    }
}

function UpdateTestDate() {
    if (getCookie("namae") != "") {
        let d = new Date();
        d.setTime(d.getTime() - (1 * 24 * 60 * 60 * 1000));
        let testdate = d.getDate().toString() + "." + (d.getMonth() + 1).toString() + "." + d.getFullYear().toString();
        document.getElementById("displayname").innerText = getCookie("namae");
        document.getElementById("displaydate").innerText = testdate.toString();
        document.getElementById("displayboxdate").innerText = testdate.toString();
    } else {
        location.href = "about:blank";
    }
}

if (getCookie("askcookie") == false) {
    HideCookieBanner();
}
UpdateTestDate();
