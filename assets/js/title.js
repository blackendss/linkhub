function animateSpecialTitle(specialTitles, speed) {
    let index = 0;
    const titlesLength = specialTitles.length;
    
    // Interval function to change the title text
    const interval = setInterval(() => {
      document.title = specialTitles[index];
      index = (index + 1) % titlesLength;
    }, speed);
}

// Example usage
animateSpecialTitle(["S", "SC", "SC4", "SC4L", "SC4LP", "SC4LP3 ", "SC4LP3L"], 500); // Change the titles and speed as needed
