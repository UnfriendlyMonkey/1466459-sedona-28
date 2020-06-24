var hotelSearch = document.querySelector(".hotels-button");
var searchForm = document.querySelector(".hotels-search-form")
var fromDate = searchForm.querySelector(".from-date")
var howManyAdults = searchForm.querySelector(".adults")
var howManyChildren = searchForm.querySelector(".children")

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

window.onload = function() {
   	if (searchForm.classList.contains("form-appear")) {
   		searchForm.classList.remove("form-appear");
   	}
};

hotelSearch.addEventListener("click", function (evt) {
  	evt.preventDefault();
    if (searchForm.classList.contains("form-appear")) {
      searchForm.classList.remove("form-appear");
      searchForm.classList.remove("form-error");
    } else {
      searchForm.classList.add("form-appear");
      if (storage) {
        howManyAdults.value = localStorage.getItem("adults");
        howManyChildren.value = localStorage.getItem("children");
      }
    }
});

window.addEventListener("keydown", function (evt) {
  	if (evt.keyCode === 27) {
    	if (searchForm.classList.contains("form-appear")) {
      		evt.preventDefault();
      		searchForm.classList.remove("form-appear");
          searchForm.classList.remove("form-error");
    	}
  	}
});

searchForm.addEventListener("submit", function (evt) {
	if (!fromDate.value || !howManyAdults.value) {
    	evt.preventDefault();
      searchForm.classList.remove("form-error");
      searchForm.offsetWidth = searchForm.offsetWidth;
      searchForm.classList.add("form-error");
    } else {
      localStorage.setItem("adults", howManyAdults.value);
      localStorage.setItem("children", howManyChildren.value);
    }
});