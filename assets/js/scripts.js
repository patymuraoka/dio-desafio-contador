window.addEventListener('load', () => {
    const btnAdicionar = document.getElementById("adicionar")
    const btnSubtrair = document.getElementById("subtrair")

    let currentNumberWrapper = document.getElementsByTagName("span")[0]
    let currentNumber = 0

    const changeColor = () => {
        if (currentNumberWrapper.innerText < 0) {
            currentNumberWrapper.style.color = '#00008B'
        } else {
            currentNumberWrapper.style.color = '#8B008B'
        }
    }
    
    const increment = () => {
        currentNumber += 1
        currentNumberWrapper.innerText = currentNumber
    }

    const decrement = () => {
        currentNumber -= 1
        currentNumberWrapper.innerText = currentNumber
    }

    btnAdicionar.addEventListener('click', () => {
        if (currentNumber < 10) {
            increment()
            changeColor()
        }
    })

    btnSubtrair.addEventListener('click', () => {
        if (currentNumber > -10) {
            decrement()
            changeColor()
        }
    })
})