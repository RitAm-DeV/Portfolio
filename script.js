var typed = new Typed(".auto-type", {
    strings: ["Web Developer", "Web Designer", "Programmer", "Physics enthusiasts"],
    typeSpeed: 50,
    backSpeed: 100,
    loop: true
})

// -------------about section--------------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// ---------------css for small screens-------------------------------
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}
// ---------------contact form-------------------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbyluLAHCiE2SXE5alq9MYFJcD-DnCzWbG5-NH-xS-uK6AoGRJL9ALcPWYy2mrjIUYFMiw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log( response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    MediaSession.innerHTML = ""
                }, 5000)
                form.reset()
            }))
            .catch(error => console.error('Error!', error.message))
        })