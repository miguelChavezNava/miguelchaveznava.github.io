const videoContainer = document.getElementById('videoContainer');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const youtubeFrame = document.getElementById('youtubeFrame');
const video = document.getElementById('gameplay')

var width = window.innerWidth;

var path = window.location.pathname;
var page = path.split("/").pop();

let LNS = "LNS";
let TFA = "TFA";
let TBH = "TBH";
let GPV = "GPV";

if(width <= 800 && page === "index.html")
{
    document.getElementById("TBH").href="https://youtu.be/DdO5zQ_xI3M?si=y3egdGyBMJLbry9o"; 
    document.getElementById("TBH").onclick = null; 
    document.getElementById("TBH").target = "_blank"; 
    document.getElementById("TFA").href="https://youtu.be/TVLuD5qirdU?si=XsWPVaVAvk8OitYC"; 
    document.getElementById("TFA").onclick = null; 
    document.getElementById("TFA").target = "_blank"; 
    document.getElementById("LNS").href="https://youtu.be/E_GGNKIrWQk?si=f_TsKde17i8sgbwB"; 
    document.getElementById("LNS").onclick = null; 
    document.getElementById("LNS").target = "_blank"; 
}

function playVideo(vidName)
{
    
    document.body.style.overflow = 'hidden'; // Stop scrolling
    if(vidName === LNS)
    {
        youtubeFrame.src = "https://www.youtube.com/embed/E_GGNKIrWQk"; // Load and autoplay video
    }
    else if(vidName === TFA)
    {
        youtubeFrame.src = "https://www.youtube.com/embed/TVLuD5qirdU";
    } 
    else if(vidName === TBH)
    {
        youtubeFrame.src = "https://www.youtube.com/embed/DdO5zQ_xI3M";
    }
    overlay.classList.add('active');
    videoContainer.classList.add('active');
    if(vidName === GPV)
    {
        setTimeout(() => {
        video.play();
        }, 300);
    }
}

function closeVideo() {
    document.body.style.overflow = ''; // Restore scrolling
    videoContainer.classList.remove('active');
    overlay.classList.remove('active');
    video.pause();
    video.currentTime = 0;
    youtubeFrame.src = ""; // Stop video completely
}

closeBtn.addEventListener('click', closeVideo);


