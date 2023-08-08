const url = "http://localhost:3000/movies"
const movieList = document.querySelector("#movie-list")
const movieForm = document.querySelector("#blood-form")
const firstImg = document.querySelector("#detail-image")
const title = document.querySelector('#title')
const year = document.querySelector('#year-released')
const description = document.querySelector('#description')
const watched = document.querySelector('#watched')
const bloodCount = document.querySelector("#amount")

fetch(`${url}`)
.then(res => res.json())
.then(data => {
    firstImg.src = data[0].image
    title.innerText = data[0].title
    year.innerText = data[0].release_year
    description.innerText = data[0].description
    bloodCount.innerText = data[0].blood_amount

    if (data[0].watched === false) {
        watched.innerText = 'Unwatched'
    } else {
        watched.innerText = 'watched'
    }

    watched.addEventListener('click', e => {
        if (watched.innerText === 'watched') {
            watched.innerText = 'unwatched'
        } else {
            watched.innerText = 'watched'
        }
    })

    movieForm.addEventListener('submit', e => {
        e.preventDefault()

        let bloody = e.target['blood-amount'].value
        let bloodyInt = Number(bloody)
        let randomBloodNumber = 0
        randomBloodNumber = randomBloodNumber + bloodyInt

        bloodCount.innerText = randomBloodNumber
    })

    data.forEach((movieObject)=>{
        const img = document.createElement('img')
        img.src = movieObject.image
        movieList.append(img)
        img.addEventListener('click', e => {
            firstImg.src = movieObject.image
            title.innerText = movieObject.title
            year.innerText = movieObject.release_year
            description.innerText = movieObject.description
            bloodCount.innerText = movieObject.blood_amount

            if (movieObject.watched === false) {
                watched.innerText = 'Unwatched'
            } else {
                watched.innerText = 'watched'
            }

        })
    })
})
