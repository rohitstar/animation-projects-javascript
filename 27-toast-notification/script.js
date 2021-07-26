const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'Messages One',
  'Messages Two',
  'Messages Three',
  'Messages Four',
]

const type = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
  //   console.log(123)

  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : getRandomType())

  notif.innerText = message ? message : getRandomMessages()
  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessages() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return type[Math.floor(Math.random() * type.length)]
}
