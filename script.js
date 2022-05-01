const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

document.body.appendChild(textarea);
document.body.appendChild(keyboard);
const eng = [['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\u005C', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\u0027', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '\u2BC5', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '\u2BC7', '\u2BC6', '\u2BC8', 'Ctrl']];
function fillwithrow() {
  const res = [];
  for (let i = 0; i < 5; i += 1) {
    const rowPref = document.createElement('div');
    rowPref.classList.add('row');
    res.push(rowPref);
  }
  return res;
}
const rows = document.getElementsByClassName('row');
function fillwithKeys(n) {
  const res = [];
  for (let i = 0; i < eng[n].length; i += 1) {
    const key = document.createElement('div');
    key.innerHTML = eng[n][i];
    key.classList.add('key');
    key.classList.add(`${eng[n][i]}`);
    res.push(key);
  }
  return res;
}
document.getElementsByClassName('keyboard')[0].append(...fillwithrow());
Array.prototype.map.call(rows, (e, n) => {
  e.append(...fillwithKeys(n));
  return e;
});
