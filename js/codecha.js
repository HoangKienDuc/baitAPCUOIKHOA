const buttonRandom = document.querySelector('.button-random');
const colors = [
    '#00aefd',
    '#ffa400',
    '#07a787',
    '#ff7870',
    '#AA0000',
    '#BB0000',
    '#FFFF99',
    '#e74c3c',
    '#FF0099',
    '#66CC33',
    '##9999CC',
    '#000077',
    '#000055',
    '#CC3300',
    '#6633FF',
    '#003333',
    '#660066',
    '#330066'
];
buttonRandom.addEventListener('click', function() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    alert(randomColor);
    document.getElementById('myInput').value = randomColor;


});

function myFunction() {

    let copy_color = document.getElementById("myInput");
    copy_color.select();
    navigator.clipboard.writeText(copy_color.value);
    alert("Copied the color: " + copy_color.value);
}