const linkedinBtn = document.getElementById("social-btn-linkedin")
const instagramBtn = document.getElementById("social-btn-instagram")
const githubBtn = document.getElementById("social-btn-github")
const emailBtn = document.getElementById("social-btn-email")

const linkedIn = "https://www.linkedin.com/in/icarovscarvalho/"
const instagram = "https://www.instagram.com/icarovscarvalho/"
const github = "https://github.com/icarovscarvalho"
const email = "mailto:icarvscarvalho@gmail.com"

function getLink(e, link) {
  e.onclick = () => {
    window.open(link, '_blank')
  }
}

getLink(linkedinBtn, linkedIn)
getLink(instagramBtn, instagram)
getLink(githubBtn, github)
getLink(emailBtn, email)