document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById("overlay");
    var video = document.getElementById("video-background");

    // Array of video sources
    var videos = ["./assets/backvideo/backvideo1.mp4", "./assets/backvideo/backvideo2.mp4", "./assets/backvideo/backvideo3.mp4", "./assets/backvideo/backvideo4.mp4"];

    // Randomly select a video
    var randomIndex = Math.floor(Math.random() * videos.length);
    video.src = videos[randomIndex];
    video.pause(); // Pause the video initially

    // Set volume to 0.1 (10%)
    video.volume = 0.1;

    // Function to start the video and hide the overlay
    function startVideo() {
        overlay.style.display = "none";
        video.style.display = "block";
        video.play();
        video.muted = false; // Allow video sound
    }

    // Event listener to start video when the document is clicked
    document.addEventListener("click", startVideo);
});
