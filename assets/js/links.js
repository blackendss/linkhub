// links.js

const links = [
    { url: 'https://open.spotify.com/artist/3AudxXmyJozkw5uqo7fkT0?si=aZ0ZMGP-Sv2RIIBWagCZ_Q', iconClass: 'fab fa-spotify' },
    { url: 'https://steamcommunity.com/id/blackendss666/', iconClass: 'fab fa-steam' },
    { url: 'https://discord.gg/HKjFD6RD', iconClass: 'fab fa-discord' }
];

function createLinks() {
    const linksContainer = document.createElement('div');
    linksContainer.classList.add('fake-activity-links');

    links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.target = '_blank'; // Open link in a new tab
        const iconElement = document.createElement('i');
        iconElement.className = link.iconClass; // Use className instead of classList.add
        linkElement.appendChild(iconElement);
        linksContainer.appendChild(linkElement);
    });

    return linksContainer;
}
