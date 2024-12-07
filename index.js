// your code goesfunction getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateStats() {
    let likes = document.getElementById("likes");
    let shares = document.getElementById("shares");
    let visits = document.getElementById("visits");

    let likeCount = 0, shareCount = 0, visitCount = 0;

    let likeInterval = setInterval(() => {
        likeCount = getRandomInt(0, 1069);
        likes.textContent = likeCount;
    }, 50);

    let shareInterval = setInterval(() => {
        shareCount = getRandomInt(0, 1011);
        shares.textContent = shareCount;
    }, 50);

    let visitInterval = setInterval(() => {
        visitCount = getRandomInt(0, 2039);
        visits.textContent = visitCount;
    }, 50);

    setTimeout(() => {
        clearInterval(likeInterval);
        clearInterval(shareInterval);
        clearInterval(visitInterval);

        likes.textContent = 1069;
        shares.textContent = 1011;
        visits.textContent = 2039;
    }, 2000);
}

window.onload = updateStats;
 here