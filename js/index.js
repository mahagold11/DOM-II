// Your code goes here

// image swap

const introImg = document.querySelector('.intro img');

introImg.addEventListener('dblclick', () => {
    introImg.src = "https://images.unsplash.com/photo-1527548052773-0cb9eeec5176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2224&q=80";
    console.log('img changed');
    
});


// nav mouse leave and mouse enter
const navLinks = document.querySelectorAll('.nav-link');
const navEventEnter = (event) => {
    event.target.style.transform = "scale(1.5)";
    event.target.style.transition = "all .3s";
    event.target.style.color = "red"
};
const navEventLeave = (event) => {
    event.target.style.transform = "scale(1.0)";
    event.target.style.transition = "all .3s";
    event.target.style.color = "black"
};


navLinks.forEach(title => {
    title.addEventListener('mouseenter', navEventEnter);
});
navLinks.forEach(title => {
    title.addEventListener('mouseleave', navEventLeave);
});

// Change Header Colors

const changeHeader = document.querySelectorAll('h2');
const changeHeaderEvent = (event) => {
    event.target.style.color = "purple";

    setTimeout(function() {
        event.target.style.color = "";
    }, 3000)
}

changeHeader.forEach(title => {
    title.addEventListener('mouseover', changeHeaderEvent);
});

const changeBottomHeader = document.querySelectorAll('h4');
const changeBottomHeaderEvent = (event) => {
    event.target.style.color = "red";
    event.target.style.transform = "scale(1.8)";

    setTimeout(function() {
        event.target.style.color = "";
        event.target.style.transform = "";
    }, 2000)
}

changeBottomHeader.forEach(title => {
    title.addEventListener('mouseover', changeBottomHeaderEvent);
});

// Scrollable

window.addEventListener('scroll', () => {

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;

    const scrolled = window.scrollY;

    if (scrolled === scrollable) {
        alert (`Slow Your Roll`);
        console.log('Bottom Reached');
    }
});










