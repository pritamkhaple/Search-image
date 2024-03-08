const accessKey = "w9ezCeVNR_IOqxQ95bg2Yzfgph-djmE8oqyoBnKtjrc"
let searchForm = document.getElementById("search-form")
let searchBox = document.getElementById("search-box")
let searchResult = document.getElementById("searc-result")
let showMoreBtn = document.getElementById("show-more-btn")

let keyword = "";
let page = 1;


async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    searchResult.innerHTML = '';
    results.forEach(result => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imgLink = document.createElement("a")
        imgLink.href = result.links.html;
        imgLink.target = ("_blank");

        imgLink.appendChild(image);
        searchResult.appendChild(imgLink);
    });

    showMoreBtn.style.display="block";
}

searchForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click", () => {
    console.log("clicked")
    page++;
    searchImages();
})