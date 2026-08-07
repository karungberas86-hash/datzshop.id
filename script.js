function copyPayment(number, button) {
    navigator.clipboard.writeText(number).then(function () {

        const originalText = button.innerText;

        button.innerText = "✓ BERHASIL DISALIN";

        setTimeout(function () {
            button.innerText = originalText;
        }, 2000);

    }).catch(function () {
        alert("Nomor: " + number);
    });
}
