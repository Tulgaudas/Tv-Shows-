const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${searchTerm}`
        for
    );
    makeImg(res.data);
});
const makeImg = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
};