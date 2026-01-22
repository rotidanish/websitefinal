// JavaScript Document
const cont1 = document.getElementById('videocontainer1');
const img1 = document.getElementById('rotihover1');
const vid1 = document.getElementById('rotivideo1');

cont1.onmouseover = function() { img1.style.display='none'; vid1.style.display='block'; vid1.play(); };
cont1.onmouseout = function() { vid1.pause(); vid1.style.display='none'; img1.style.display='block'; };

// --- BOX 2 (Chicken Chop) ---
const cont2 = document.getElementById('videocontainer2');
const img2 = document.getElementById('rotihover2');
const vid2 = document.getElementById('rotivideo2');

cont2.onmouseover = function() { img2.style.display='none'; vid2.style.display='block'; vid2.play(); };
cont2.onmouseout = function() { vid2.pause(); vid2.style.display='none'; img2.style.display='block'; };

// --- BOX 3 (Shokupan) ---
const cont3 = document.getElementById('videocontainer3');
const img3 = document.getElementById('rotihover3');
const vid3 = document.getElementById('rotivideo3');

cont3.onmouseover = function() {
    img3.style.display = 'none';
    vid3.style.display = 'block';
    vid3.play();   // Make sure this is vid3, NOT vid2
};

cont3.onmouseout = function() {
    vid3.pause();  // Make sure this is vid3, NOT vid2
    vid3.style.display = 'none';
    img3.style.display = 'block';
};

const cont4 = document.getElementById('videocontainer4');
const img4 = document.getElementById('rotihover4');
const vid4 = document.getElementById('rotivideo4');

cont4.onmouseover = function() {
    img4.style.display = 'none';
    vid4.style.display = 'block';
    vid4.play();   
};

cont4.onmouseout = function() {
    vid4.pause();  
    vid4.style.display = 'none';
    img4.style.display = 'block';}