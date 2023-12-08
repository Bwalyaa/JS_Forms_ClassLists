function headline2() {
    let headlineElement = document.getElementById('headline');
    headlineElement.classList.add('changeHeadline');
}

function removeHeadline() {
    let headlineElement = document.getElementById('headline');
    headlineElement.classList.remove('changeHeadline');
    headlineElement.classList.add('resetHeadline');
}