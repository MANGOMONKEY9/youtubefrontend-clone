
document.querySelector(".searchbar").addEventListener("focus", (event) => {
    const searchContainer = document.querySelector(".search-container");
    const searchbarWithin = document.querySelector(".search-bar-within");
    const searchIcon = document.querySelector(".search-logo-on-click");
    const blueBorder = document.querySelector(".blue-outline");

    searchContainer.classList.toggle("hide-container");   
    searchbarWithin.classList.toggle("hide-container");
    searchIcon.classList.toggle("hidden");
    blueBorder.classList.toggle("hide-container");
});

document.querySelector(".searchbar").addEventListener("blur", (event) => {
    const searchContainer = document.querySelector(".search-container");
    const searchbarWithin = document.querySelector(".search-bar-within");
    const searchIcon = document.querySelector(".search-logo-on-click");
    const blueBorder = document.querySelector(".blue-outline");

    searchContainer.classList.toggle("hide-container");   
    searchbarWithin.classList.toggle("hide-container");
    searchIcon.classList.toggle("hidden");
    blueBorder.classList.toggle("hide-container");
});

const settingsButton = document.querySelector(".additional-css-1");
const settingsButton2 = document.querySelector(".additional-css-2");
const dropdownButton = document.querySelector(".dropdown-css-1");
const dropdownButton2 = document.querySelector(".dropdown-css-2");
const settingsMenu = document.querySelector("#settings-dropdown");
const miniButton = document.querySelector(".mini-css-1");
const miniButton2 = document.querySelector(".mini-css-2");
const miniSidebar = document.querySelector(".mini-guide");
const normalSidebar = document.querySelector(".guide-renderer");
const root = document.querySelector(":root");
const rightArrow = document.querySelector(".right-arrow");


    document.querySelector(".sidebar-menu").addEventListener("click", (event) => {
        const pageManager = document.querySelector(".page-manager");
        const gridRows = document.querySelectorAll(".grid-row");
        miniSidebar.classList.toggle("none");
        normalSidebar.classList.toggle("none");
        pageManager.classList.toggle("page-manager-resize")
        const chipsRenderer = document.querySelector(".chips-renderer")
        const chipsWidth = getComputedStyle(chipsRenderer).width;
        
        if (miniSidebar.classList.contains("none")){
            chipsRenderer.style.setProperty("width", "1284px")
            rightArrow.classList.remove("none");
        }   else if (normalSidebar.classList.contains("none")) {
            chipsRenderer.style.setProperty("width", "1448px");
            const chips = document.querySelector(".chips");
            const chipsStyle = getComputedStyle(chips);
            const matrixValue = chipsStyle.transform.match(/matrix\((.+?)\)/);
            if (matrixValue && matrixValue[1]) {
                const matrixComponents = matrixValue[1].split(", ");
                const translateX = parseFloat(matrixComponents[4])
                console.log(translateX)
                if (translateX === -820.21) {
                    chips.style.transform = "translateX(-656.21px)";
                }
        }}


        const itemsPerRow = getComputedStyle(root).getPropertyValue("--items-per-row").trim();
        const newItemsPerRow = (itemsPerRow === "3") ? "4" : "3"
        root.style.setProperty("--items-per-row", newItemsPerRow)


        gridRows.forEach((gridRow) => {
            gridRow.dataset.itemsPerRow = newItemsPerRow;
            if (newItemsPerRow === "4") {
                const newItemRendererHTML = `
                <div class="item-renderer">
                            <div class="item-within">
                                <div class="post-content">
                                    <div class="thumbnail">
                                        <a class="thumbnail-link" href="https://youtu.be/G7EPO9Rtyqw?si=8PnbPS4zTbFxQCLn">
                                            <img class="thumbnail-pic" alt="Placeholder Photo" src="https://d1jyigdp4kaa8p.cloudfront.net/wp-content/uploads/2022/06/video-placeholder-brain-bites.png">
                                            <div class="overlays">
                                                <div class="thumbnail-time-renderer">
                                                    <div class="thumbnail-badge">
                                                        00:00
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="details">
                                        <a class="avatar-link" title="Channel Name">
                                            <div class="img-shadow">
                                                <img height="36px" width="36px" draggable="false" src="https://i.redd.it/high-resolution-remakes-of-the-old-default-youtube-avatar-v0-bgwxf7bec4ob1.png?width=2160&format=png&auto=webp&s=2bdfee069c06fd8939b9c2bff2c9917ed04771af">
                                            </div>
                                        </a>
                                        <div class="details-meta">
                                            <h3 class="details-title">
                                                <a style="display: block; cursor: pointer; text-decoration: none;" href="https://youtu.be/G7EPO9Rtyqw?si=8PnbPS4zTbFxQCLn">
                                                   <div class="title-string" title="Placeholder Title">
                                                        Placeholder Title
                                                   </div> 
                                                </a>
                                            </h3>
                                            <div class="post-details">
                                                <div class="metadata">
                                                   <div class="byline-container">
                                                        <div class="channel-name">
                                                            <div class="channel-name-container" title="Channel Name">
                                                                Channel Name
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="metadata-line">
                                                        <span class="inline-item-views">X views</span>
                                                        <span class="inline-item-date">
                                                            X days ago
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="menu">
                                            <div class="menu-renderer">
                                                <button class="dropdown-button" style="background-color: transparent; border: none;">
                                                    <svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%; fill:white"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
                                                </button>
                                                <div class="additional-css">
                                                    <div class="dropdown-css-1"></div>
                                                    <div class="dropdown-css-2"></div>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `
                gridRow.insertAdjacentHTML('beforeend', newItemRendererHTML);
            } else if (newItemsPerRow === "3") {
                const itemsToRemove = Array.from(gridRow.children).slice(newItemsPerRow)
                itemsToRemove.forEach((itemsToRemove) => {
                    itemsToRemove.remove();
                });
            }
        });
        });

    document.querySelector(".settings-container").addEventListener("mousedown", (event) => {
        settingsButton.classList.add("down");
    })

    document.querySelector(".menu-renderer").addEventListener("mousedown", (event) => {
        dropdownButton.classList.add("down");
    })

    document.querySelector(".mini-guide-item").addEventListener("mousedown", (event) => {
        miniButton.classList.add("down")
        }
    )

    document.querySelector(".settings-container").addEventListener("click", (event) => {
        event.stopPropagation();
        settingsMenu.classList.toggle("none")
    })

    document.querySelector("html").addEventListener("click", (event) => {
        settingsMenu.classList.add("none");
    })

    document.querySelector("html").addEventListener("mouseup", (event) => {
        if (settingsButton.classList.contains("down")){
            settingsButton.classList.remove("down");
            settingsButton2.classList.add("down2");
            setTimeout(() => {
                settingsButton2.classList.remove("down2")
        }, 100)}
        if (dropdownButton.classList.contains("down")){
            dropdownButton.classList.remove("down");
            dropdownButton2.classList.add("down2");
            setTimeout(() => {
                dropdownButton2.classList.remove("down2")
            }, 100)}
        if (miniButton.classList.contains("down")){
            miniButton.classList.remove("down");
            miniButton2.classList.add("down2");
            setTimeout(() => {
                    miniButton2.classList.remove("down2")
                }, 100)}
    })

document.addEventListener("DOMContentLoaded", (event) => {
    const leftArrow = document.querySelector(".left-arrow");
    const chips = document.querySelector(".chips");
    const chipsStyle = getComputedStyle(chips);
    const matrixValue = chipsStyle.transform.match(/matrix\((.+?)\)/);
    if (matrixValue && matrixValue[1]) {
        const matrixComponents = matrixValue[1].split(", ");
        const translateX = parseFloat(matrixComponents[4]);
        console.log(translateX)
        if (translateX === 0 ) {
            leftArrow.classList.add("none");
        } 
    };
})


document.querySelector(".right-arrow").addEventListener("click", (event) => {
    const rightArrow = document.querySelector(".right-arrow");
    const leftArrow = document.querySelector(".left-arrow");
    if (miniSidebar.classList.contains("none")) {
        maxTranslateX = -820.21;
    }   else if (normalSidebar.classList.contains("none")) {
        maxTranslateX = -656.21;
    };
    const chips = document.querySelector(".chips");
    const chipsStyle = getComputedStyle(chips);
    const matrixValue = chipsStyle.transform.match(/matrix\((.+?)\)/);
    if (matrixValue && matrixValue[1]) {
        const matrixComponents = matrixValue[1].split(", ");
        const translateX = parseFloat(matrixComponents[4])
        const newTranslateX = translateX - 320;
        const clampedTranslateX = Math.max(newTranslateX, maxTranslateX);
        chips.style.transform = `translateX(${clampedTranslateX}px)`
        console.log(clampedTranslateX)
        if (clampedTranslateX === maxTranslateX) {
            rightArrow.classList.add("none");
        } else {
            rightArrow.classList.remove("none");
        }
        if (clampedTranslateX === 0) {
            leftArrow.classList.add("none");
        } else {
            leftArrow.classList.remove("none");
        }
    }
})

document.querySelector(".left-arrow").addEventListener("click", (event) => {
    const rightArrow = document.querySelector(".right-arrow");
    const leftArrow = document.querySelector(".left-arrow");
    minTranslateX = 0;
    const chips = document.querySelector(".chips");
    const chipsStyle = getComputedStyle(chips);
    const matrixValue = chipsStyle.transform.match(/matrix\((.+?)\)/);
    if (matrixValue && matrixValue[1]) {
        const matrixComponents = matrixValue[1].split(", ");
        const translateX = parseFloat(matrixComponents[4])
        const newTranslateX = translateX + 320;
        const clampedTranslateX = Math.min(newTranslateX, minTranslateX);
        chips.style.transform = `translateX(${clampedTranslateX}px)`
        if (clampedTranslateX === 0) {
            leftArrow.classList.add("none");
        } else {
            leftArrow.classList.remove("none");
        }
        if (clampedTranslateX === -820.21) {
            rightArrow.classList.add("none");
        } else {
            rightArrow.classList.remove("none");
        }
    }
})