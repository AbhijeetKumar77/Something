document.getElementById('firstbtn').addEventListener('click', function() {
    window.location.href = 'done.html';
});
document.getElementById('secondbtn').addEventListener('mouseover', function() {
    this.style.position = 'absolute';
    this.style.top = Math.random() * window.innerHeight + 'px';
    this.style.left = Math.random() * window.innerWidth + 'px';
});