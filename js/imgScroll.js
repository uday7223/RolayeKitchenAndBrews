    let containerScroll = document.querySelector(".container");
    let left = document.getElementById("left");
    let right = document.getElementById("right");

    containerScroll.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        containerScroll.scrollLeft += evt.deltaY;   
    })

    left.addEventListener("click", () => {
        containerScroll.style.scrollBehavior = "smooth";
        containerScroll.scrollLeft += 1350;

    })
   
    right.addEventListener("click", () => {
        containerScroll.style.scrollBehavior = "smooth";
        containerScroll.scrollLeft -= 1350;

    })

    

