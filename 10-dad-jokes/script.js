const jokeEle = document.getElementById('joke')
const jokebtn = document.getElementById('jokebtn')

jokebtn.addEventListener('click', generteJoke)

generteJoke()

async function generteJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)
  const data = await res.json()
  jokeEle.innerHTML = data.joke
}

// function generteJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then(
//       (data) =>
//         //  console.log(data)
//         (jokeEle.innerHTML = data.joke)
//     )
// }
