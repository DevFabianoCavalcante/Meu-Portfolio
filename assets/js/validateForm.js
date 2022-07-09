const allLabelArea = document.querySelectorAll('.label-area');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageArea = document.querySelector('#messageArea');
const btnSubmit = document.querySelector('#btn-submit');
const form = document.querySelector('#form-contact');

const setMaskName = () => {
    let setName = nameInput.value;
    setName = setName.replace(/\d*/g, '').replace(/[!@#$%^&*=;:"|\\\+\{}\[\]><\/?\.\-]/g, '');
    nameInput.value = setName;
};

const alertForm = (inputArea) => {
    inputArea.classList.toggle('alert');
    setTimeout(()=> {
        inputArea.classList.toggle('alert');
    }, 5000);
};

const validateForm = (e) => {
    e.preventDefault();

    let email = emailInput.value;
    let user = email.substring(0, email.indexOf('@'));
    let domain = email.substring(email.indexOf('@') +1, email.length);
    let finalEmail = email.indexOf('.com') !== -1;

    if(nameInput.value == '' || nameInput.value.length < 3) {
        alertForm(allLabelArea[0]);

    } else if((user.length <=2) ||
    (domain.length <=3) ||
    (user.search('@') !=-1) ||
    (domain.search('@') !=-1) ||
    (user.search(' ') !=-1) ||
    (domain.search(' ') !=-1) ||
    (domain.search('.') ==-1) ||
    (domain.indexOf('.') <=1) ||
    (domain.lastIndexOf('.') > domain.length -1)) {
      
        alertForm(allLabelArea[1]);
    } else if(messageArea.value == '' || messageArea.value.length < 3) {
        alertForm(allLabelArea[2])
    } else {
        form.submit();
    };
};

setMaskName();

nameInput.addEventListener('keyup', setMaskName);
btnSubmit.addEventListener('click', validateForm);
