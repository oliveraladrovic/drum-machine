let drums = document.querySelectorAll('.drum-pad');
drums.forEach(drum =>
  drum.addEventListener('click', e => {
    e.target.classList.add('active-drum-pad');
    document.querySelector('#display').innerHTML = `<h3>${e.target.id}</h3>`;
    document.querySelector(
      `#${e.target.id.slice(-1).toUpperCase()}`
    ).currentTime = 0;
    document.querySelector(`#${e.target.id.slice(-1).toUpperCase()}`).play();
    setTimeout(() => {
      e.target.classList.remove('active-drum-pad');
    }, 100);
  })
);
document.documentElement.onkeydown = Play;
function Play(e) {
  switch (e.key) {
    case 'q':
    case 'w':
    case 'e':
    case 'a':
    case 's':
    case 'd':
    case 'z':
    case 'x':
    case 'c':
    case 'Q':
    case 'W':
    case 'E':
    case 'A':
    case 'S':
    case 'D':
    case 'Z':
    case 'X':
    case 'C':
      document.querySelector(`#drum-${e.key.toLowerCase()}`).click();
  }
}
