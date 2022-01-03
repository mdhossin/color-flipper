const colors = ["green", "red", "rgba(133,122,200)", "#f15025", 'blue', 'olive', 'yellow'];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    // get the random number between colors.length

    const randomNumber = getRandom()
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})


const getRandom = () => {
    return Math.floor(Math.random() * colors.length)
}
