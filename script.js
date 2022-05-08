const wrapper = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const comment = document.createElement('h2');
comment.classList.add('comment');
comment.innerHTML = 'Клавиатура создана в Windows <br> Переключение языков по комбинации LCtrl+LAlt';
keyboard.classList.add('keyboard');
let clicked;
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);
document.body.appendChild(textarea);
document.body.appendChild(keyboard);
document.body.appendChild(comment);
wrapper.innerHTML = 'Virtual Keyborad RSSchool';
const keycodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'Shift', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash'];
const eng = [['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\u005C', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\u0027', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '\u2BC5', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '\u2BC7', '\u2BC6', '\u2BC8', 'Ctrl']];
const engCaps = [['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\u005C', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\u0027', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '\u2BC5', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '\u2BC7', '\u2BC6', '\u2BC8', 'Ctrl']];
const engCapsShift = [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '\u2BC5', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '\u2BC7', '\u2BC6', '\u2BC8', 'Ctrl']];
const engShift = [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '\u2BC5', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '\u2BC7', '\u2BC6', '\u2BC8', 'Ctrl']];
const rus = [['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '\u2BC5', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '\u2BC7', '\u2BC6', '\u2BC8', 'Ctrl']];
const rusCaps = [['Ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '\u2BC5', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '\u2BC7', '\u2BC6', '\u2BC8', 'Ctrl']];
const rusShift = [['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '\u2BC5', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '\u2BC7', '\u2BC6', '\u2BC8', 'Ctrl']];
const rusCapsShift = [['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '\u2BC5', 'Shift'],
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

const keys = document.getElementsByClassName('key');
let engLang = localStorage.getItem('engLang') || 'true';
let b = textarea.selectionStart;
let q = textarea.selectionEnd;
let Caps = false;
let Shift = false;
let currentType;
function currentKeyboard() {
  if (localStorage.getItem('engLang') === 'true' && Caps === true && Shift === true) {
    currentType = engCapsShift;
  } else if ((localStorage.getItem('engLang') === 'true') && Caps === false && Shift === true) {
    currentType = engShift;
  } else if ((localStorage.getItem('engLang') === 'true') && Caps === false && Shift === false) {
    currentType = eng;
  } else if ((localStorage.getItem('engLang') === 'true') && Caps === true && Shift === false) {
    currentType = engCaps;
  } else if ((localStorage.getItem('engLang') === 'false') && Caps === false && Shift === true) {
    currentType = rusShift;
  } else if ((localStorage.getItem('engLang') === 'false') && Caps === false && Shift === false) {
    currentType = rus;
  } else if ((localStorage.getItem('engLang') === 'false') && Caps === true && Shift === false) {
    currentType = rusCaps;
  } else if ((localStorage.getItem('engLang') === 'false') && Caps === true && Shift === true) {
    currentType = rusCapsShift;
  }
}
currentKeyboard();
function checkDiff(arr) {
  Array.prototype.map.call(keys, (e, n) => {
    if (e.innerHTML !== arr.flat()[n]) {
      e.innerHTML = arr.flat()[n];
    }
  });
}

function hadleClicks(j) {
  clicked = this;
  j.preventDefault();
  b = textarea.selectionStart;
  q = textarea.selectionEnd;
  textarea.setSelectionRange(q, q);
  textarea.focus();
  switch (this.innerHTML) {
    case 'Enter':
      textarea.value = `${textarea.value.slice(0, b)}\n${textarea.value.slice(q, textarea.value.length)}`;
      q += b - q + 1;
      break;
    case 'Ctrl': textarea.value += '';
      if (document.querySelector('.Alt').classList.contains('active')) {
        if (engLang === 'false') { engLang = 'true'; } else { engLang = 'false'; }
        localStorage.setItem('engLang', engLang);
      }
      break;
    case 'Shift':
      Shift = true;

      break;
    case 'Alt': textarea.value += '';
      if (document.querySelector('.Ctrl').classList.contains('active')) {
        if (engLang === 'false') { engLang = 'true'; } else { engLang = 'false'; }
        localStorage.setItem('engLang', engLang);
      }
      break;
    case 'Tab': textarea.value = `${textarea.value.slice(0, b)}\t${textarea.value.slice(q, textarea.value.length)}`;
      q += b - q + 1;
      break;
    case 'Win': textarea.value += '';
      break;
    case 'Backspace':
      if (b - q !== 0) {
        textarea.value = textarea.value.slice(0, b)
      + textarea.value.slice(q, textarea.value.length);
        q += b - q;
      } else if (q !== 0) {
        textarea.value = textarea.value.slice(0, q - 1)
      + textarea.value.slice(q, textarea.value.length);

        q -= 1;
      }

      break;
    case 'CapsLock':

      Caps = !Caps;

      break;
    case 'Space': textarea.value = `${textarea.value.slice(0, b)} ${textarea.value.slice(q, textarea.value.length)}`;
      q += b - q + 1;
      break;
    case 'Del':
      if (b - q !== 0) {
        textarea.value = textarea.value.slice(0, b)
        + textarea.value.slice(q, textarea.value.length);
      } else {
        textarea.value = textarea.value.slice(0, b)
      + textarea.value.slice(q + 1, textarea.value.length);
      }
      q += b - q;
      break;
    default:

      textarea.value = textarea.value.slice(0, b) + this.innerText
      + textarea.value.slice(q, textarea.value.length);

      q += b - q + 1;
  }
  this.classList.toggle('active');
  currentKeyboard();
  checkDiff(currentType);
  textarea.setSelectionRange(q, q);
  textarea.focus();
}

const rows = document.getElementsByClassName('row');
function fillwithKeys(arr, n) {
  const res = [];
  for (let i = 0; i < currentType[n].length; i += 1) {
    const key = document.createElement('div');
    key.innerHTML = arr[n][i];
    key.classList.add('key');
    key.classList.add(`${arr[n][i]}`);

    key.addEventListener('mousedown', hadleClicks);

    res.push(key);
  }
  return res;
}

document.getElementsByClassName('keyboard')[0].append(...fillwithrow());
Array.prototype.map.call(rows, (e, n) => {
  e.append(...fillwithKeys(currentType, n));
  return e;
});

function handlemouseUP() {
  if (clicked === undefined) return null;
  if (clicked.innerText !== 'CapsLock') {
    clicked.classList.remove('active');
  }
  if (clicked.innerHTML === 'Shift') {
    Shift = false;
    currentKeyboard();
    checkDiff(currentType);
  }
  return null;
}

document.addEventListener('mouseup', handlemouseUP);

function handlekeydown(e) {
  const key1 = e.key;
  const k = keys[keycodes.indexOf(e.code)];
  b = textarea.selectionStart;
  q = textarea.selectionEnd;
  textarea.setSelectionRange(q, q);
  textarea.focus();
  e.preventDefault();
  switch (key1) {
    case 'Alt':
      if (e.location === 1 && e.key !== 'AltGraph') {
        document.querySelectorAll('.Alt')[0].classList.toggle('active');
        if (document.querySelector('.Ctrl').classList.contains('active')) {
          if (engLang === 'false') { engLang = 'true'; } else { engLang = 'false'; }
          localStorage.setItem('engLang', engLang);
        }
      } else { document.querySelectorAll('.Alt')[1].classList.toggle('active'); }
      break;
    case 'AltGraph': document.querySelectorAll('.Alt')[1].classList.toggle('active');
      break;
    case 'Control':
      if (e.location === 1) {
        document.querySelectorAll('.Ctrl')[0].classList.toggle('active');
        if (document.querySelector('.Alt').classList.contains('active')) {
          if (engLang === 'false') { engLang = 'true'; } else { engLang = 'false'; }
          localStorage.setItem('engLang', engLang);
        }
      } else { document.querySelectorAll('.Ctrl')[1].classList.toggle('active'); }
      break;
    case 'Meta':
      e.preventDefault();
      Array.prototype.filter.call(document.querySelectorAll('.key'), (h) => h.innerText === 'Win')[0].classList.toggle('active');
      break;
    case 'CapsLock':
      document.querySelector('.CapsLock').classList.toggle('active');

      Caps = !Caps;

      break;
    case 'Tab':
      document.querySelector('.Tab').classList.toggle('active');
      textarea.value = `${textarea.value.slice(0, b)}\t${textarea.value.slice(q, textarea.value.length)}`;
      q += b - q + 1;
      break;
    case 'Shift':
      Shift = true;
      if (e.location === 1) { document.querySelector('.Shift').classList.toggle('active'); } else { document.querySelectorAll('.Shift')[1].classList.toggle('active'); }
      break;
    case 'Delete':
      if (b - q !== 0) {
        textarea.value = textarea.value.slice(0, b)
        + textarea.value.slice(q, textarea.value.length);
      } else {
        textarea.value = textarea.value.slice(0, b)
      + textarea.value.slice(q + 1, textarea.value.length);
      }
      q += b - q;
      document.querySelector('.Del').classList.toggle('active');
      break;
    case 'Backspace':
      if (b - q !== 0) {
        textarea.value = textarea.value.slice(0, b)
      + textarea.value.slice(q, textarea.value.length);
        q += b - q;
      } else if (q !== 0) {
        textarea.value = textarea.value.slice(0, q - 1)
      + textarea.value.slice(q, textarea.value.length);

        q -= 1;
      }

      Array.prototype.filter.call(
        document.querySelectorAll('.key'),
        (h) => h.innerText === key1,
      )[0].classList.toggle('active');
      break;
    case 'Enter':
      textarea.value = `${textarea.value.slice(0, b)}\n${textarea.value.slice(q, textarea.value.length)}`;
      q += b - q + 1;
      document.querySelector('.Enter').classList.toggle('active');
      break;
    case 'ArrowUp':
      textarea.value = textarea.value.slice(0, b) + eng[3][11]
    + textarea.value.slice(q, textarea.value.length);
      Array.prototype.filter.call(
        document.querySelectorAll('.key'),
        (h) => h.innerText === '\u2BC5',
      )[0].classList.toggle('active');
      q += b - q + 1;
      break;
    case 'ArrowDown':
      textarea.value = textarea.value.slice(0, b) + eng[4][6]
    + textarea.value.slice(q, textarea.value.length);
      Array.prototype.filter.call(
        document.querySelectorAll('.key'),
        (h) => h.innerText === '\u2BC6',
      )[0].classList.toggle('active');
      q += b - q + 1;
      break;
    case 'ArrowLeft':
      textarea.value = textarea.value.slice(0, b) + eng[4][5]
    + textarea.value.slice(q, textarea.value.length);
      Array.prototype.filter.call(
        document.querySelectorAll('.key'),
        (h) => h.innerText === '\u2BC7',
      )[0].classList.toggle('active');
      q += b - q + 1;
      break;
    case 'ArrowRight':
      textarea.value = textarea.value.slice(0, b) + eng[4][7]
      + textarea.value.slice(q, textarea.value.length);
      Array.prototype.filter.call(
        document.querySelectorAll('.key'),
        (h) => h.innerText === '\u2BC8',
      )[0].classList.toggle('active');
      q += b - q + 1;
      break;
    case ' ':
      textarea.value = `${textarea.value.slice(0, b)} ${
        textarea.value.slice(q, textarea.value.length)}`;
      q += b - q + 1;
      Array.prototype.filter.call(document.querySelectorAll('.key'), (h) => h.innerText === 'Space')[0].classList.toggle('active');
      break;
    default:
      if (k !== undefined) {
        textarea.value = textarea.value.slice(0, b) + k.innerHTML
      + textarea.value.slice(q, textarea.value.length);
        q += b - q + 1;
        if (e.location === 0 || e.location === 1) {
          k.classList.toggle('active');
        } else if (e.location === 2) {
          document.querySelectorAll(`.${e.key}`)[1].classList.toggle('active');
        }

        break;
      }
  }

  currentKeyboard();
  checkDiff(currentType);
  textarea.setSelectionRange(q, q);
  textarea.focus();
}
function handlekeyUp(e) {
  e.preventDefault();

  const k = keys[keycodes.indexOf(e.code)];
  switch (e.key) {
    case 'ArrowUp':
      Array.prototype.filter.call(
        document.querySelectorAll('.key'),
        (h) => h.innerText === '\u2BC5',
      )[0].classList.remove('active');
      break;
    case 'ArrowLeft':
      Array.prototype.filter.call(
        document.querySelectorAll('.key'),
        (h) => h.innerText === '\u2BC7',
      )[0].classList.remove('active');
      break;
    case 'ArrowRight':
      Array.prototype.filter.call(
        document.querySelectorAll('.key'),
        (h) => h.innerText === '\u2BC8',
      )[0].classList.remove('active');
      break;
    case 'ArrowDown':
      Array.prototype.filter.call(
        document.querySelectorAll('.key'),
        (h) => h.innerText === '\u2BC6',
      )[0].classList.remove('active');
      break;
    case 'Delete': document.querySelector('.Del').classList.remove('active');
      break;
    case ' ': document.querySelector('.Space').classList.remove('active');
      break;
    case 'Control': if (e.location === 1) {
      document.querySelector('.Ctrl').classList.remove('active');
    } else {
      document.querySelectorAll('.Ctrl')[1].classList.remove('active');
    }
      break;
    case 'Alt':
      if (e.location === 1) {
        document.querySelector('.Alt').classList.remove('active');
      } else {
        document.querySelectorAll('.Alt')[1].classList.remove('active');
      }
      break;
    case 'AltGraph': document.querySelectorAll('.Alt')[1].classList.remove('active');
      break;
    case 'Meta': document.querySelector('.Win').classList.remove('active');
      break;
    case 'Shift': if (e.location === 1) {
      document.querySelector('.Shift').classList.remove('active');
    } else {
      document.querySelectorAll('.Shift')[1].classList.remove('active');
    }
      break;
    default:
      if (k !== undefined) {
        if (!k.classList.contains('CapsLock')) {
          k.classList.remove('active');
        }
      }
      break;
  }
  if (e.key === 'Shift') {
    Shift = false;
    currentKeyboard();
    checkDiff(currentType);
  }
}
document.addEventListener('keydown', handlekeydown);
document.addEventListener('keyup', handlekeyUp);
