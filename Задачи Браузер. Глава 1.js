'_____________________________________________'
/*
document.body.children[0]
document.body.children[1]
document.body.children[1].lastElementChild

let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}
*/
'_____________________________________________'
/*
let table = document.getElementById('age-table')
document.querySelectorAll('#age-table label')
table.querySelector('td')
let form = document.getElementsByName('search')[0]
form.getElementsByTagName('input')[0]
inputs[inputs.length-1]
*/
'_____________________________________________'
/*
for (let li of document.querySelectorAll('li')) {
    let text = li.firstChild.data;
    text = text.trim();
    let count = li.getElementsByTagName('li').length;
    alert(text + ': ' + count);
}
*/
'_____________________________________________'
/*
let elem = document.querySelector('[data-widget-name]');
alert(elem.dataset.widgetName);

let links = document.querySelectorAll('a');
for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue;
  if (!href.includes('://')) continue;
  if (href.startsWith('http://internal.com')) continue;
  link.style.color = 'orange';
}*/
'_____________________________________________'
/*
function rem(elem) {
    elem.innerHTML = '';
}

let ul = document.createElement('ul');
document.body.append(ul);
while (true) {
    let data = prompt("Добавьте элемент списка:", "");
    if (!data) {
        break;
    }
    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};
function createTree(cont, obj) {
    cont.append(createTreeDom(obj));
}
function createTreeDom(obj) {
    if (!Object.keys(obj).length) return;
    let ul = document.createElement('ul');
    for (let key in obj) {
        let li = document.createElement('li');
        li.innerHTML = key;
        let childUl = createTreeDom(obj[key]);
        if (childUl) {
            li.append(childUl);
        }
        ul.append(li);
    }
    return ul;
}
let cont = document.getElementById('container');
createTree(cont, data);

let ul = document.getElementsByTagName('li');
for (let li of ul) {
  let length = li.getElementsByTagName('li').length;
  if (!length) continue;
  li.firstChild.data += ' [' + length + ']';
}

function createCalendar(elem, year, month) {
    let trueMon = month - 1;
    let d = new Date(year, trueMon);
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }
    while (d.getMonth() == trueMon) {
        table += '<td>' + d.getDate() + '</td>';
        if (getDay(d) % 7 == 6) {
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }
    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }
    table += '</tr></table>';
    elem.innerHTML = table;
}

function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7
    return day - 1;
}
createCalendar(calendar, 2023, 3)

let timerId;
function timer() {
    let clock = document.getElementById('clock');
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;
    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
}
function Start() {
    if (!timerId) {
        timerId = setInterval(timer, 1000);
    }
    timer();
}
function Stop() {
    clearInterval(timerId);
    timerId = null;
}

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
table.tBodies[0].append(...sortedRows);
*/
'_____________________________________________'
/*
function showNotification({ top = 0, right = 0, className, html }) {
    let notification = document.createElement('div');
    notification.className = "notification";
    if (className) {
        notification.classList.add(className);
    }
    notification.style.top = top + 'px';
    notification.style.right = right + 'px';
    notification.innerHTML = html;
    document.body.append(notification);
    setTimeout(() => notification.remove(), 1500);
}
let i = 1;
setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' + i++,
        className: "welcome"
    });
}, 2000);
*/
'_____________________________________________'
/*
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

let div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '120px';
div.style.height = '120px';
document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();
alert(scrollWidth);

let ball = document.getElementById('ball')
let field = document.getElementById('field')
ball.style.left= Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px'
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'
*/
'_____________________________________________'
/*
let field1 = document.getElementById("field1")
let fieldCoord = field1.getBoundingClientRect();
    let coord = [
      [ 
        fieldCoord.left,
        fieldCoord.top
      ],
      [ 
        fieldCoord.right,
        fieldCoord.bottom
      ],
      [ 
        fieldCoord.left + field.clientLeft,
        fieldCoord.top + field.clientTop
      ],
      [ 
        fieldCoord.left + field.clientLeft + field.clientWidth,
        fieldCoord.top + field.clientTop + field.clientHeight
      ]
    ];

alert(coord.join('  '));

function positionAt(anchor, position, elem) {
    let anchorCoords = anchor.getBoundingClientRect();
    switch (position) {
        case "top":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
            break;
        case "right":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;
        case "bottom":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
            break;
    }
}
function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);
    positionAt(anchor, position, note);
}
function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
function positionAt(anchor, position, elem) {
    let anchorCoords = getCoords(anchor);
    switch (position) {
        case "top":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
            break;
        case "right":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;
        case "bottom":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
            break;
    }
}
function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);
    positionAt(anchor, position, note);
}

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);
    positionAt(anchor, position, note);
}
function positionAt(anchor, position, elem) {
    let anchorCoords = getCoords(anchor);
    switch (position) {
        case "top-out":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
            break;
        case "right-out":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;
        case "bottom-out":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
            break;
        case "top-in":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + "px";
            break;
        case "right-in":
            elem.style.width = '150px';
            elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;
        case "bottom-in":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
            break;
    }
}

let blockquote = document.querySelector('blockquote');
showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");*/