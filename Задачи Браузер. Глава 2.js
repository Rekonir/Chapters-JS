'________________________________________'
/*
document.getElementById('hider').onclick = function () {
    document.getElementById('text').hidden = true;
}

let field2 = document.getElementById('field2')
let ball2 = document.getElementById('ball2')
field2.onclick = function (event) {
    let field2Coords = this.getBoundingClientRect();
    let ball2Coords = {
        top: event.clientY - field2Coords.top - field2.clientTop - ball2.clientHeight / 2,
        left: event.clientX - field2Coords.left - field2.clientLeft - ball2.clientWidth / 2
    };

    if (ball2Coords.top < 0) ball2Coords.top = 0;
    if (ball2Coords.left < 0) ball2Coords.left = 0;
    if (ball2Coords.left + ball2.clientWidth > field2.clientWidth) {
        ball2Coords.left = field2.clientWidth - ball2.clientWidth;
    }
    if (ball2Coords.top + ball2.clientHeight > field2.clientHeight) {
        ball2Coords.top = field2.clientHeight - ball2.clientHeight;
    }
    ball2.style.left = ball2Coords.left + 'px';
    ball2.style.top = ball2Coords.top + 'px';
}

let title = document.getElementsByClassName("title")[0];
let rol = document.getElementsByClassName("rol")[0];
title.onclick = function () {
    title.classList.toggle('open');
};


let panes = document.querySelectorAll('.pane');
for (let pane of panes) {
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    pane.firstChild.onclick = () => pane.remove();
}



let i = 1;
for (let li of carousel.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}
let width = 130;
let count = 3;
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
let position = 0;
carousel.querySelector('.prev').onclick = function () {
    position += width * count;
    list.style.marginLeft = position + 'px';
};
carousel.querySelector('.next').onclick = function () {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
}*/
'________________________________________'
/*
let container = document.getElementById('container')
container.onclick = function (event) {
    if (event.target.className != 'remove-button') return;
    let pane = event.target.closest('.pane');
    pane.remove();
};


for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);}
tree.onclick = function (event) {
    if (event.target.tagName != 'SPAN') {
        return;
    }
    let childrenContainer = event.target.parentNode.querySelector('ul');
    if (!childrenContainer) return;
    childrenContainer.hidden = !childrenContainer.hidden;
}
let grid = document.getElementById('grid')
grid.onclick = function (e) {
    if (e.target.tagName != 'TH') return;
    let th = e.target;
    sortGrid(th.cellIndex, th.dataset.type);
};
function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody');
    let rowsArray = Array.from(tbody.rows);
    let compare;
    switch (type) {
        case 'number':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
        case 'string':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            };
            break;
    }
    rowsArray.sort(compare);
    tbody.append(...rowsArray);
}

let tooltipElem;
document.onmouseover = function (event) {
    let target = event.target;
    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;
    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);
    let coords = target.getBoundingClientRect();
    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;
    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
    }
    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
};
document.onmouseout = function (e) {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
};
*/
'________________________________________'
/*
let contains = document.getElementById('contains')
contents.onclick = function (event) {
    function handleLink(href) {
        let isLeaving = confirm(`Leave for ${href}?`);
        if (!isLeaving) return false;
    }
    let target = event.target.closest('a');
    if (target && contents.contains(target)) {
        return handleLink(target.getAttribute('href'));
    }
};

let thumbs = document.getElementById('thumbs')

thumbs.onclick = function (event) {
    let thumbnail = event.target.closest('a');

    if (!thumbnail) return;
    showThumbnail(thumbnail.href, thumbnail.title);
    event.preventDefault();
}

function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
}*/