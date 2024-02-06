const movieContainer = document.getElementById('modal-body')
const searchMoviesBtn = document.getElementById('searchBtn')

const watchLibraryContainer = document.getElementById('displayContainer')
const watchLibraryBtn = document.getElementById('watch-library-button')
const watchLibraryheading = document.getElementById('w-l-heading')
const watchLibrarySlogan = document.getElementById('w-l-info')

var searchValue = document.getElementById('searchValue')
var savedMovies = []

// fetching results, opening a modal, displaying the results
searchMoviesBtn.addEventListener('click', function(e) {
  e.preventDefault()
  console.log(e.target)
  var queryString = `https://www.omdbapi.com/?s=${searchValue.value}&i=tt3896198&apikey=9a161259`
  fetch(queryString).then(res => {
    return res.json()
  }).then(data => {
    // console.log(data)
    let results = data.Search
    const clonedArray = [...results]
    console.log(clonedArray)
    movieContainer.innerHTML = ''
    
    clonedArray.forEach((item) => {
      let movieDiv = document.createElement('div')
      movieDiv.innerHTML = `
        <div class='card d-flex justify-content-center align-items-center'>
          ${item.Title}
          <img src='${item.Poster}' alt='${item.Title}'>
          <button id='${item.imdbID}'class='saveBook btn btn-primary' type='submit' value='${item.imdbID}'>
          <!---<i class='fa-regular fa-bookmark' value='${item.imdbID}'></i>--->
          bookmark
          </button>
        </div>
      `
      movieContainer.append(movieDiv)
      let bookmarkBtn = document.getElementById(`${item.imdbID}`)
      bookmarkBtn.addEventListener('click', function(e) {
        e.preventDefault()
        console.log(e.target.value, item.imdbID)
        //push the movie to the savedmovies list - when the current bookmark id is the same as the movie id
        if (e.target.value === item.imdbID) {
          savedMovies.push(item)
          let currentElement = item
          watchLibraryBtn.addEventListener('click', function() {
            displayWatchList(currentElement)
          })
            
        }
        
        // return savedMovies
      })
    })
  }).catch(err => console.log(err))
  // return savedMovies
})

// watchLibraryBtn.addEventListener('click', function(e) {
//   console.log(e.target)
//   displayWatchList(savedMovies)
// })

function displayWatchList(item) {
  // hide the text and view library button
  showWatchLibrary()
  // add flexbox to watchlibrary container
  watchLibraryContainer.classList.add('flexContainer')
  // loop through movies array and display them within the displayContainer
  // movies.forEach((item) => {
    let div = document.createElement('div')
    div.classList.add('cardbody')
    div.innerHTML = `
      <p class="card-text">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>

      <img src='${item.Poster}' class='img-formatting'>
      <h5>${item.Title}</h5>
      <button class='btn btn-primary'>Remove</button>
    `
    watchLibraryContainer.append(div)
  // })
  // console.log(movies)
  
}



// `<div class="card-body">
// <p class="card-text">
//   This is a wider card with supporting text below as a natural
//   lead-in to additional content. This content is a little bit
//   longer.
// </p>
// <div
//   class="d-flex justify-content-between align-items-center"
// >
//   <div class="btn-group">
//     <button
//       type="button"
//       class="btn btn-sm btn-outline-secondary"
//     >
//       View
//     </button>
//     <button
//       type="button"
//       class="btn btn-sm btn-outline-secondary"
//     >
//       Edit
//     </button>
//   </div>
//   <small class="text-body-secondary">9 mins</small>
// </div>
// </div>`

function showWatchLibrary() {
  // hide the headings and buttons 
  watchLibraryheading.classList.add('hide')
  watchLibrarySlogan.classList.add('hide')
  watchLibraryBtn.classList.add('hide')
}

// // creating the card for how each movie search result should look when displayed
// function createCard(div, item) {
//   div.classList.add('card', 'd-flex', 'justify-content-center', 'align-items-center')
//   let img = document.createElement('img')
//   img.src = item.Poster
//   img.alt = item.Title
//   let div2 = document.createElement('div')
//   div2.classList.add('card-body', 'd-flex', 'justify-content-center', 'align-items-center')
//   let h5 = document.createElement('h5')
//   h5.classList.add('card-title', 'text-center')
//   h5.textContent = item.Title
//   let p = document.createElement('p')
//   p.classList.add('card-text')
//   p.textContent = item.Plot
//   let bookmark = document.createElement('i')
//   bookmark.innerHTML = "<i class='fa-regular fa-bookmark'></i>"
//   bookmark.addEventListener('click', bookMarkEvent)
//   // btn.classList.add('btn', 'btn-primary')
//   div2.append(h5, p, bookmark)
//   div.append(img, div2)
//   // bookmark.addEventListener('click', bookMarkEvent)
//   movieContainer.append(div)
//   return movieContainer
// }




