let songArr = [
    document.querySelector('.song0'),
    document.querySelector('.song1'),
    document.querySelector('.song2'),
]

let imgArr = [
    'url(./img/Lund.jpg)',
    'url(./img/Neptune.jpg)',
    'url(./img/Car.jpg)'
]

let singerArr = [
    'Lund',
    'Sleeping At Last',
    'Twenty One Pilots'
]

let titleArr = [
    'Broken',
    'Neptune',
    'Car Radio'
]

const playButton = document.querySelector('.play-stop-button');
let playButtonPicture = document.querySelector('.play');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let songPicture = document.querySelector('.pic');
let isPlay = false;
let playNum = 0;
let song = document.querySelector('.song-name');
let singer = document.querySelector('.singer');
let songProgress = document.querySelector('input')
let currentTime = document.querySelector('.current-time');
let duration = document.querySelector('.duration');
let wrapper = document.querySelector('.player-wrapper');

song.textContent = titleArr[0];
singer.textContent = singerArr[0];
songPicture.style.backgroundImage = imgArr[playNum];
wrapper.style.backgroundImage = imgArr[playNum];
songProgress.value = 0;
songProgress.value = ((songArr[playNum].currentTime / songArr[playNum].duration) * 100);

function playAudio() {
    songArr[playNum].currentTime = 0;
    songArr[playNum].play();
    playButtonPicture.classList.remove('play');
    playButtonPicture.classList.add('stop');
    songPicture.style.backgroundImage = imgArr[playNum];
    wrapper.style.backgroundImage = imgArr[playNum];
    isPlay = true;
}

function pauseAudio() {
    songArr[playNum].pause();
    playButtonPicture.classList.remove('stop');
    playButtonPicture.classList.add('play');
    isPlay = false;
}

if (Math.round(songArr[playNum].duration % 60) <= 9){
    duration.textContent = ((songArr[playNum].duration - (songArr[playNum].duration % 60)) / 60) + ':0' + Math.round(songArr[playNum].duration % 60);
}
else {
    duration.textContent = ((songArr[playNum].duration - (songArr[playNum].duration % 60)) / 60) + ':' + Math.round(songArr[playNum].duration % 60);
}

playButton.addEventListener('click', function () {
    if (isPlay) {
        pauseAudio();
        isPlay = false;
    }
    else {
        playAudio();
        isPlay = true;
    }
    
});

setInterval(function () {
    songProgress.value = ((songArr[playNum].currentTime / songArr[playNum].duration) * 100);
    if (Math.round(songArr[playNum].currentTime % 60 < 9.5)){
        currentTime.textContent = ((songArr[playNum].currentTime - (songArr[playNum].currentTime % 60)) / 60) + ':0' + Math.round(songArr[playNum].currentTime % 60);
    }
    else {
        currentTime.textContent = ((songArr[playNum].currentTime - (songArr[playNum].currentTime % 60)) / 60) + ':' + Math.round(songArr[playNum].currentTime % 60);
    }
    if (Math.round(songArr[playNum].duration % 60) <= 9){
        duration.textContent = ((songArr[playNum].duration - (songArr[playNum].duration % 60)) / 60) + ':0' + Math.round(songArr[playNum].duration % 60);
    }
    else {
        duration.textContent = ((songArr[playNum].duration - (songArr[playNum].duration % 60)) / 60) + ':' + Math.round(songArr[playNum].duration % 60);
    }
}, 1000)

/*function progressFunction (e) {
    console.log(songProgress.value);
    songArr[playNum].currentTime = songProgress.value * songArr[playNum].duration;
}*/

nextButton.addEventListener('click', function () {
    pauseAudio();
    playNum++;
    if (playNum >= songArr.length) {
        playNum = 0;
    }
    playAudio();
    song.textContent = titleArr[playNum];
    singer.textContent = singerArr[playNum];
})

prevButton.addEventListener('click', function () {
    pauseAudio();
    playNum--;
    if (playNum < 0) {
        playNum = 2;
    }
    playAudio();
    song.textContent = titleArr[playNum];
    singer.textContent = singerArr[playNum];
})