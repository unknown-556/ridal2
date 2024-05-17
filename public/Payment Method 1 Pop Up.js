let bankDetailsCopied = false;

function copyBankDetails() {
    if (!bankDetailsCopied) {
        const bankDetails = "Bank: Opay\nBank Account: 1234567890\nAccount Name: Ridal Account";
        navigator.clipboard.writeText(bankDetails).then(function () {
            document.querySelector(".copy-button").innerText = "Copied!";
            setTimeout(function () {
                document.querySelector(".copy-button").innerText = "Click here after transfer";
            }, 3000); // Change text after 3 seconds
            bankDetailsCopied = true;
        }, function (err) {
            console.error('Could not copy text: ', err);
        });
    }
}