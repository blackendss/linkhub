function updateClock() {
    // Manually set the time to midnight
    var now = new Date();
    //For testing
    //now.setHours(0);
    //now.setMinutes(0);

    var options = {
        timeZone: 'Europe/Budapest',
        hour: 'numeric',
        minute: 'numeric'
    };
    var timeString = now.toLocaleTimeString('en-US', options);
    document.getElementById('clock').textContent = timeString;

    // Check if it's midnight (00:00) and if the overlay is hidden
    if (now.getHours() === 0 && now.getMinutes() === 0 && !isOverlayVisible()) {
        // Create special message element
        var specialMessageElement = document.createElement('div');
        specialMessageElement.id = 'specialMessage';
        specialMessageElement.textContent = "Akkor is megveszem azt a TANKOT!";
        specialMessageElement.classList.add('special-message');
        
        // Append special message element to body
        document.body.appendChild(specialMessageElement);

        // Show the special message element
        specialMessageElement.style.opacity = 1;
    }
}

// Function to check if the overlay is visible
function isOverlayVisible() {
    var overlay = document.getElementById('overlay');
    if (overlay) {
        var overlayComputedStyle = window.getComputedStyle(overlay);
        return overlayComputedStyle.display !== 'none';
    }
    return false;
}

setInterval(updateClock, 1000);
