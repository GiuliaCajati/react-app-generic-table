export function getRandomColor() {
    // this function generates a random hex color from the letters below
    const letters = '123456789AB' // <-- cutting off top end so we can lighten the color twice with 'reduceColor'
    let color = '#'
    for (let i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * 11)]
    }
    return color
  }
  
  
  export const newFunction = () => {
    let newColor = getRandomColor()
    return(newColor)
  }