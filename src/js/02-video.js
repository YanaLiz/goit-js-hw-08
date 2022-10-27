import Player from "@vimeo/player";
import throttle from 'lodash.throttle';


const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const STORAGE_KAY = "videoplayer-current-time";




const videoplayer = localStorage.getItem(STORAGE_KAY);

const onPlay = function(data) {
    localStorage.setItem(STORAGE_KAY, data.seconds); 
};

player.on('timeupdate', onPlay);
player.getCurrentTime(STORAGE_KAY).then(function(seconds) {
    // seconds = the current playback position
}).catch(function(error) {

});

player.on("loaded", function () {
        if (videoplayer) {
            player.setCurrentTime(videoplayer);
        }
    });

