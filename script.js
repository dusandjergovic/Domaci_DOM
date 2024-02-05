let tekst = document.querySelector('#tekst')

let changeStyle = () => {
    tekst.setAttribute('class', 'color');
};

tekst.addEventListener('click', changeStyle);

