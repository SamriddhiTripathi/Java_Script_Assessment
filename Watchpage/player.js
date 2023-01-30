document.ready(function () {
  function createPlaylistCard(obj, pos) {
    var mainDiv = document.createElement("div");
    mainDiv.id = "card" + obj.id;
    mainDiv.className = "playlist-card";

    var thumbnail = document.createElement("img");
    thumbnail.src = obj.thumbnail;
    thumbnail.className = "thumbnail";

    var title = document.createElement("h3");
    title.className = "video-card-title";
    title.innerHTML = obj.title;

    mainDiv.appendChild(thumbnail);
    mainDiv.appendChild(title);

    return mainDiv;
  }
});
