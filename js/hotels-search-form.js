var hotelSearch = document.querySelector(".hotels-button");
var searchForm = document.querySelector(".hotels-search-form")
hotelSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle("visually-hidden");
});