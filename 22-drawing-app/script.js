const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase')
const DecreaseBtn = document.getElementById('decrease')
const sizeEl = document.getElementById('size')
const colorEl = document.getElementById('color')
const clearEl = document.getElementById('clear')

const ctx = canvas.getContext('2d')

let size = 20
let color = '#000'
let isPressed = false
let x
let y

canvas.addEventListener('mousedown', (e) => {
  isPressed = true

  x = e.offsetX
  y = e.offsetY

  console.log(isPressed, x, y)
})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    x2 = e.offsetX
    y2 = e.offsetY

    console.log(x2, y2)
    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false

  x = undefined
  y = undefined

  console.log(isPressed, x, y)
})

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

// drawCircle(100, 100, 20)
// drawCircle(500, 500, 50)

// drawLine(300, 300, 300, 500)
// drawLine(500, 400, 300, 400)
function updateSizeOnScreen() {
  sizeEl.innerText = size
}

colorEl.addEventListener('change', (e) => (color = e.target.value))

increaseBtn.addEventListener('click', () => {
  size += 5

  if (size > 50) {
    size = 50
  }

  updateSizeOnScreen()
})

DecreaseBtn.addEventListener('click', () => {
  size -= 5

  if (size < 5) {
    size = 5
  }

  updateSizeOnScreen()
})

clearEl.addEventListener('click', () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
)
