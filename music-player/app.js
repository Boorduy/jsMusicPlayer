//progress to use input range to display song start to end
let progress = document.getElementById('progress')
let song = document.getElementById('song')
//cntrlIcon to control the pause and play button icons
let cntrlIcon = document.getElementById('cntrlIcon')
//gonna use newsong to change music
let newsong= document.getElementById('newsong')

let musicH1 = document.getElementById('music-h1')
//changing musicH1 to songTitle:
//changing musicP to newsong.files[].name
let musicP = document.getElementById('music-p')

//now I'm gonna have a change picture ability for the music picture
let pic = document.getElementById('song-img')
let newPic = document.getElementById('newpic')

//create a change menus's feature
let containerMenu = document.getElementById('edit-Container')
let container = document.getElementById('music-player')
//testmenu


function showMe() {
    containerMenu.style.display= 'block'

    container.style.display='none'
}

function showmee() {
    containerMenu.style.display= 'none'

    container.style.display='block'
}




cntrlIcon.classList.add('fa-play')

newPic.onchange = function() {
    pic.src = window.URL.createObjectURL(newPic.files[0])
}
newsong.onchange = function() {
    song.src = window.URL.createObjectURL(newsong.files[0])
    let name = newsong.files[0].name
    let result = name.replaceAll('.mp3','')
    .replaceAll('.m4a','')
    .replaceAll('MP3','')
    .replaceAll('Lyric','')
    .replaceAll('AUDIO','')
    .replaceAll('-','')
    .replaceAll('_','  ')
    musicP.textContent = result
    musicH1.textContent = 'Song Title :'
}

song.onloadedmetadata = function() {
    progress.max = song.duration
    progress.value = song.currentTime

    if (progress.value === 0) {
        cntrlIcon.classList.remove('fa-pause')
cntrlIcon.classList.add('fa-play')
    }
}
function playPause() {
    if (cntrlIcon.classList.contains('fa-pause')) {
        song.pause()
        cntrlIcon.classList.remove('fa-pause')
        cntrlIcon.classList.add('fa-play')
    }
    else {
        song.play()
        cntrlIcon.classList.remove('fa-play')
        cntrlIcon.classList.add('fa-pause')
    }
}

    
progress.onchange = function() {
    song.play()
    song.currentTime = progress.value
    cntrlIcon.classList.remove('fa-play')
        cntrlIcon.classList.add('fa-pause')
}
function goBack() {
    song.currentTime =(progress.value --- 5)
}
function goForward() {
    song.currentTime =(progress.value +++ 5)

}

function show() {

}

//this used to work but created weirdness in the input range part so i removed and commented it
// if(song.play()) {
//         setInterval(() => {
//             progress.value = song.currentTime
//         }, 500);
//         cntrlIcon.classList.remove('fa-pause')
//         cntrlIcon.classList.add('fa-play')
        
//     }
//     if (song.pause()) {
        
//         cntrlIcon.classList.remove('fa-play')
//         cntrlIcon.classList.add('fa-pause')
//     }