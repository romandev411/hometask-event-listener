// 1
const btn = document.querySelector('.toggle-img__btn');

function toggleImg() {
    const [img1, img2] = document.querySelectorAll('.toggle-img__img');
    const src1 = img1.getAttribute('src');
    const src2 = img2.getAttribute('src');

    img1.setAttribute('src', src2);
    img2.setAttribute('src', src1);
}

btn.addEventListener('click', toggleImg);

// 2
document.querySelector('.disposable-btn').addEventListener('click', function(e) {
    e.currentTarget.setAttribute('disabled', 'disabled');
});
