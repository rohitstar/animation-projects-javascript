const toggles = document.querySelectorAll('.toggle-checkbox')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => doTheTrick(e.target))
)

function doTheTrick(clickedBox) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === clickedBox) {
      fast.checked = false
    }

    if (cheap === clickedBox) {
      good.checked = false
    }

    if (fast === clickedBox) {
      cheap.checked = false
    }
  }
}
