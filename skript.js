const userYearOfBornInput = prompt('Enter your year of birth:');
if (userYearOfBornInput === null) {
    alert('You did not want to enter your year of birth');
} else if (userYearOfBornInput.trim() === '') {
    alert('You entered empty numbers');
} else if (isNaN(Number(userYearOfBornInput))) {
    alert('Year must be a number');
} else if (+userYearOfBornInput < 1910 || +userYearOfBornInput >= 2024) {
    alert('Year of birth must be between 1910 to 2024');
}
else {
    const userCityOfResidenceInput = prompt('Enter your city of residence:');
    if (userCityOfResidenceInput === null) {
        alert('You did not want to enter your city of residence');
    } else if (userCityOfResidenceInput.trim() === '') {
        alert('You entered empty city');
    } else {
        const userFavoriteSportInput = prompt('Enter your favorite sport:');
        if (userFavoriteSportInput === null) { alert('You did not want to enter your favorite sport') }
        else if (userFavoriteSportInput.trim() === '') {
            alert('You entered empty sport');
        }
        else {
            const ageOfUser = new Date().getFullYear() - Number(userYearOfBornInput);

            if ((userCityOfResidenceInput === "Kyiv" || userCityOfResidenceInput === "Washington, D.C."
                || userCityOfResidenceInput === "London") && userFavoriteSportInput === "football") {
                {
                    alert(`Your age is ${ageOfUser} and you live in capital ${userCityOfResidenceInput}, 
                    Cool! You want to become Messi?`)
                }

            } else if ((userCityOfResidenceInput === "Kyiv" || userCityOfResidenceInput
                === "Washington, D.C." || userCityOfResidenceInput === "London")
                && userFavoriteSportInput === "basketball") {
                {
                    alert(`Your age is ${ageOfUser} and you live in capital ${userCityOfResidenceInput}, 
                    Cool! You want to become Michael Jordan?`)
                }

            } else if ((userCityOfResidenceInput === "Kyiv" || userCityOfResidenceInput === "Washington, D.C."
                || userCityOfResidenceInput === "London")
                && userFavoriteSportInput === "tennis") {
                {
                    alert(`Your age is ${ageOfUser} and you live in capital ${userCityOfResidenceInput}, 
                    Cool! You want to become Rafael Nadal?`)
                }

            } else if (userFavoriteSportInput === "football") {
                alert(`Your age is ${ageOfUser} and you live in ${userCityOfResidenceInput},
                     Cool! You want to become Messi?`)
            } else if (userFavoriteSportInput === "basketball") {
                alert(`Your age is ${ageOfUser} and you live in ${userCityOfResidenceInput}, 
                    Cool! You want to become Michael Jordan?`)
            } else if (userFavoriteSportInput === "tennis") {
                alert(`Your age is ${ageOfUser} and you live in ${userCityOfResidenceInput}, 
                    Cool! You want to become Rafael Nadal?`)
            }
            else alert(`Your age is ${ageOfUser} and you live in ${userCityOfResidenceInput} 
                and your favorite sport is ${userFavoriteSportInput}`)

        }
    }
}
