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

    return 'Passwords does not match!';
}

const productName = (productName) => {
    if (productName.length >= 5 && productName.length <= 20) {
        return '';
    }

    return 'The name should be between 5 and 20 characters!'
}


const price = (price) => {
    if (price >= 0) {
        return '';
    }

    return 'Price should be a positive number';
}

const imageURL = (imageURL) => {
    if (imageURL.startsWith('http') || imageURL.startsWith('https')) {
        return '';
    }

    return 'Image URL should start with http or https!';
}

const description = (description) => {
    if (description.length >= 20) {
        return '';
    }

    return 'Description should be at least 20 characters!';
}

const validators = {
    email,
    password,
    repeatPassword,
    productName,
    price,
    description,
    imageURL
};
export default validators;