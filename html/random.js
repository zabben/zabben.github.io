function randomPage() {
  var links = [
    "blog/help-my-parrot-is-yelling.html",
    "blog/parrots-in-movies.html",
    "blog/help-my-parrot-is-yelling.html",
    "blog/parrots-in-movies.html",
    "blog/help-my-parrot-is-yelling.html",
    "blog/parrots-in-movies.html",
    "blog/help-my-parrot-is-yelling.html"
  ];
  var page = links[Math.floor(Math.random() * links.length)];
  window.open(page);
}
