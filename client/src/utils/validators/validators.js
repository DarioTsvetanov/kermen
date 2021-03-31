const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const email = (email) => {
    if (email.match(emailRegEx)) {
        return '';
    }

    return 'Please enter a valid email!';
}

const password = (password) => {
    if (password.match(passwordRegEx)) {
        return '';
    }

    return 'The password should be bigger than 8 characters and should include a small letter, a capital letter and a number!';
}

const repeatPassword = (repeatPassword, password) => {
    if (repeatPassword === password) {
        return '';
    }

    return 'Паролите не съвпадат.';
}

const title = (title) => {
    if (title.length >= 10 && title.length <= 50) {
        return '';
    }

    return 'Темата трябва да е между 10 и 50 символа.'
}


const grade = (grade) => {
    if(grade >= 1 && grade <= 12){
        return '';
    }

    return 'Изберете клас.';
}

const description = (description) => {
    if(description.length >= 30){
        return '';
    }

    return 'Описанието трябва да е поне 30 символа.';
}

const validators = {
    email,
    password,
    repeatPassword,
    title,
    grade,
    description

};
export default validators;