const password = prompt('Enter password');

if(password[0].toLowerCase() === password[0] || password.length < 6 || password.includes(' ') || password.includes('$') || password.includes('*') || password.includes('#')) {
    console.log('Wrong Password');
} else {
    console.log('Correct Password!');
}