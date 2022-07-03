let title = document.querySelector('#title-description');

const write = (el) => {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, index) => {
        setTimeout(()=> el.innerHTML += letter, 100 * index);
    });

};

write(title);
