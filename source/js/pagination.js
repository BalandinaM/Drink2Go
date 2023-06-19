//Скрытие кнопок назад и вперед

let linkFirstPage = document.querySelector(".pagination__item--first");
let linkButtonBack = document.querySelector(".pagination__item--back");

linkFirstPage.addEventListener('click', function(){
  linkButtonBack.classList.add('pagination__item--hidden');
  linkFirstPage.classList.add('pagination__item--current');
});

let linkLastPage = document.querySelector(".pagination__item--last");
let linkButtonOnward = document.querySelector(".pagination__item--onward");

linkLastPage.addEventListener('click', function(){
  linkButtonOnward.classList.add('pagination__item--hidden');
  linkLastPage.classList.add('pagination__item--current');
})


//Попытка сделать реакцию на переключение страниц, провалилась=(

/*let linksPages = document.querySelectorAll(".pagination__item");
console.log(linksPages);

/*for (let linkPage of linksPages) {
  linkPage.addEventListener('click', function() {
    if (linkPage.classList.contains("pagination__link--current")) {
      linkPage.classList.remove("pagination__link--current");
    } else {
      linkPage.classList.add("pagination__link--current");
    }
  })
}

linkPage.addEventListener('click', function() {
  if (linkPage.classList.contains("pagination__link--current")) {
    linkPage.classList.remove("pagination__link--current");
  } else {
    linkPage.classList.add("pagination__link--current");
  }
})*/
