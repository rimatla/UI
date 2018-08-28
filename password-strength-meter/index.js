let strength = {
    0: "Very Weak",
    1: "Weak",
    2: "Medium",
    3: "Good",
    4: "Strong"
};
const password = document.getElementById('password');
const meter = document.getElementById('password-strength-meter');
const text = document.getElementById('password-strength-text');

password.addEventListener('input', function() {
    let val = password.value;
    let result = zxcvbn(val);

    // Update the password strength meter
    meter.value = result.score;

    // Update the text indicator
    if (val !== "") {
        text.innerHTML = "Strength: " + strength[result.score];
    } else {
        text.innerHTML = "";
    }
});