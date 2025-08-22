const links = document.querySelectorAll('nav a');

function activeLink(link) {
  const href = link.href;
  const url = document.location.href;

  if(href === url) {
    link.style.backgroundColor = "black";
    link.style.color = "white";
  }
}

links.forEach(activeLink);