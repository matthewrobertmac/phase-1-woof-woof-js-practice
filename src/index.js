dogBar = document.getElementById("dog-bar")
dogInfo = document.getElementById("dog-info")


URL = "http://localhost:3000/pups"

fetch(URL)
  .then((response) => response.json())
  .then((dogs) => {
    let dogsArray = dogs
    console.log(dogsArray)
    updateDogBar(dogsArray)
  })

function updateDogBar(dogsArray) {
    dogInfoImg = document.createElement("img")
    dogInfoName = document.createElement("h2")
    dogInfoButton = document.createElement("button")


    dogsArray.forEach((dog) => {
        let dogName = document.createElement('span')
        dogName.textContent = dog.name

        console.log(dogName.textContent)
        dogImage = dog.image

        dogIsGoodDog = dog.isGoodDog
        
        dogBar.append(dogName)
        dogName.addEventListener("click", () => {
            dogInfoImg.src = dog.image
            dogInfoName.textContent = dog.name
            dogInfoButton.textContent = dog.isGoodDog
            if (dogInfoButton.textContent === "true") {
                dogInfoButton.textContent = "Good Dog!"
            } else {
                dogInfoButton.textContent = "Bad Dog!"
            }
            dogInfoButton.addEventListener("click", () => {
                if (dogInfoButton.textContent === "Bad Dog!") {
                    dogInfoButton.textContent = "Good Dog!"
                } else if (dogInfoButton.textContent === "Good Dog!") {
                    dogInfoButton.textContent = "Bad Dog!"
                } 
                })

            dogInfo.append(dogInfoImg, dogInfoName, dogInfoButton)
                    })
                })}