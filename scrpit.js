// 1
const btn = document.querySelector('.toggle-img__btn');

function toggleImg() {
    const [...srcs] = document.querySelectorAll('.toggle-img__img');

    const links = srcs.map((el) => el.getAttribute('src'));

    for (let i = 0; i < srcs.length; i++) {
        const item = links[i-1] ? links[i-1] : links[links.length-1];

        srcs[i].setAttribute('src', item);
    }
}

btn.addEventListener('click', toggleImg);


// 2
function disposable(e) {
    e.currentTarget.setAttribute('disabled', 'disabled');

    e.currentTarget.removeEventListener('click', disposable)
}

document.querySelector('.disposable-btn').addEventListener('click', disposable);
