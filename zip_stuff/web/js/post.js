if (document.getElementById("all-post-grid")) {
    postGridSetHeight();
    window.addEventListener("resize", postGridSetHeight);    
}

function postGridSetHeight() {
    const posts = document.querySelectorAll(".post");
    let finalHeight = 0;
    if (window.innerWidth <= 600) {
        for (const post of posts) {
            finalHeight += post.offsetHeight;
        }
    } else {
        let oddHeight = 0, evenHeight = 0, itemCount = 1;
        for (const post of posts) {
            if (itemCount % 2 == 0) {
                evenHeight += post.offsetHeight;
            } else {
                oddHeight += post.offsetHeight;
            }
            itemCount++;
        }
        finalHeight = oddHeight > evenHeight ? oddHeight : evenHeight;
    }
    document.getElementById("all-post-grid").style.height = finalHeight + 100 + "px";
}