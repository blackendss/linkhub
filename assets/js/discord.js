// discord.js

document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById("overlay");

    overlay.addEventListener("click", function() {
        // Replace 'USER_ID' with the actual user ID you want to fetch
        const userId = '1151739099598835833';
        
        // Hard-coded Unix epoch time (e.g. Epoch timestamp: 1609718400) https://www.epochconverter.com
        const unixEpochTime = 237634560000;

        fetch(`https://discord-lookup-api-alpha.vercel.app/v1/user/${userId}`)
            .then(response => response.json())
            .then(data => {
                // Extract relevant information
                const { avatar, global_name } = data;

                // Create an image element for the profile picture
                const profilePicture = document.createElement('img');
                profilePicture.src = avatar.link;
                profilePicture.alt = 'Profile Picture';

                // Create a div for the blurred box
                const blurredBox = document.createElement('div');
                blurredBox.classList.add('blurred-box');

                // Create a heading for the global name
                const heading = document.createElement('h2');
                heading.textContent = global_name;

                // Append the profile picture and heading to the blurred box
                blurredBox.appendChild(profilePicture);
                blurredBox.appendChild(heading);

                // Append the blurred box to the body
                document.body.appendChild(blurredBox);

                // Hardcoded fake activity
                const fakeActivity = document.createElement('div');
                fakeActivity.textContent = 'Playing A Game';
                fakeActivity.style.color  = 'white';
                blurredBox.appendChild(fakeActivity);

                // Hardcoded fake game details
                const gameDetails = document.createElement('div');
                gameDetails.classList.add('game-details');

                // Fake game image
                const gameImage = document.createElement('img');
                gameImage.src = './assets/images/warthunedrlogo.jpg'; // Placeholder image URL
                gameImage.alt = 'Game Image';
                gameImage.style.width = '50px'; // Adjust the width as needed
                gameImage.style.height = '50px'; // Adjust the width as needed
                gameDetails.appendChild(gameImage);

                // Left content (game name and epoch timer)
                const leftContent = document.createElement('div');
                leftContent.classList.add('left-content');

                // Fake game name
                const gameName = document.createElement('p');
                gameName.textContent = 'War Thunder';
                gameName.style.color = 'white';
                leftContent.appendChild(gameName);

                // Epoch timer
                const { duration, characterCount } = formatEpochToDuration(unixEpochTime);
                const epochTimer = document.createElement('p');
                epochTimer.textContent = `for ${duration}`;
                
                // Adjust font size based on character count
                if (characterCount > 10) {
                    epochTimer.style.fontSize = '12px'; // Adjust as needed
                } else {
                    epochTimer.style.fontSize = '16px'; // Default font size
                }

                epochTimer.style.color = 'white';
                leftContent.appendChild(epochTimer);

                // Append left content to game details
                gameDetails.appendChild(leftContent);

                // Append the fake game details to the blurred box
                blurredBox.appendChild(gameDetails);

                // Add links under the fake activity
                const linksContainer = createLinks();
                blurredBox.appendChild(linksContainer);
            })
            .catch(error => {
                console.error('Error fetching user information:', error);
            });
    });
});


function formatEpochToDuration(epoch) {
    const currentDate = new Date();
    const elapsedTimeInSeconds = Math.abs(currentDate.getTime() / 1000 - epoch);

    const days = Math.floor(elapsedTimeInSeconds / (3600 * 24));
    const hours = Math.floor((elapsedTimeInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((elapsedTimeInSeconds % 3600) / 60);

    let formattedDuration = '';

    if (days > 0) {
        if (days < 10000) { // Adjust the threshold as needed
            formattedDuration += days.toLocaleString('en-US') + (days === 1 ? ' day' : ' days') + '.';
        } else {
            return { duration: days.toLocaleString('en-US') + ' days.', characterCount: 0 }; // Return only days
        }
    }
    
    if (hours > 0) {
        formattedDuration += hours.toLocaleString('en-US') + (hours === 1 ? ' hour' : ' hours') + '.';
    }

    if (minutes > 0) {
        formattedDuration += minutes.toLocaleString('en-US') + (minutes === 1 ? ' minute' : ' minutes') + '.';
    }

    const characterCount = formattedDuration.length;

    return { duration: formattedDuration.trim(), characterCount };
}
