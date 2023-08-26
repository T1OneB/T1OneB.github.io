function generate_captcha() {
    let result = '';
    const characters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
    }
    return result
}

function check_captcha() {
    var captcha = document.getElementById ('captcha').innerHTML;
    var captcha_by_user = document.getElementById("captcha_by_user");

    if (captcha_by_user.value == captcha) {
        location.reload();
        alert("Успех!");
    } else {
        location.reload();
        alert("Провал...");
    }
}