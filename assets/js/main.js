const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const containerSounds = document.getElementById('containerSounds');
const displaySelectedSong = document.getElementById('displaySelectedSong')
const songs = [
    { nome: "M83 'Midnight City'", source: 'assets/audio/Midnight-City.mp3' },
    { nome: "Dan Croll - From Nowhere (Baardsen Remix Video)", source: 'assets/audio/From-Nowhere.mp3' },
    { nome: "Neon Indian - Polish Girl", source: 'assets/audio/Polish-Girl.mp3' },
    { nome: "The Chain Gang of 1974 - Sleepwalking", source: 'assets/audio/Sleepwalking.mp3' }
];
let currentSong;

playButton.addEventListener('click', reproduce);
pauseButton.addEventListener('click', pause);
stopButton.addEventListener('click', stop);
createListOfSongs();

function createListOfSongs() {
    for (let index in songs) {
        let { nome } = songs[index];
        const eachSong = document.createElement('button');
        eachSong.classList.add('songs');
        eachSong.innerText = nome;
        containerSounds.appendChild(eachSong);
    }
    const songsButtons = [...document.getElementsByClassName('songs')];
    songsButtons.forEach((e, index) => {
        let { nome, source } = songs[index];
        e.addEventListener('click', function () {
            if (nome.includes(e.innerHTML)) {
                stop();
                currentSong = new Audio(source);
                displaySelectedSong.innerText = `Música selecionada: ${nome}`;
            }
        })
    })
}

function reproduce() {
    if (currentSong) {
        currentSong.play();
    } else {
        alert('Escolha um som primeiro!')
    }
}

function pause() {
    if (currentSong) {
        currentSong.pause();
    }
}

function stop() {
    if (currentSong) {
        pause();
        currentSong.currentTime = 0;
    }
}