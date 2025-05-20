let w = 120 / 100
w

console.log(60 * 1.2)

history.pushState({}, null, '#settings')

window.onpopstate = e => console.log(e.target.location.hash)
