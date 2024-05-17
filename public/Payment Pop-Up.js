const bankTab = document.getElementById("bank-tab");
const cardTab = document.getElementById("card-tab");
const bankTabContent = document.querySelector(".bank-tab-content");
const cardTabContent = document.querySelector(".card-tab-content");
const cardNumberInput = document.getElementById("card-number");
const visaLogo = document.getElementById("visa-logo");
const mastercardLogo = document.getElementById("mastercard-logo");
const verveLogo = document.getElementById("verve-logo");

let bankDetailsCopied = false;

bankTab.addEventListener("click", function () {
  bankTab.classList.add("active-tab");
  cardTab.classList.remove("active-tab");
  bankTabContent.classList.add("active-tab-content");
  cardTabContent.classList.remove("active-tab-content");
});

cardTab.addEventListener("click", function () {
  cardTab.classList.add("active-tab");
  bankTab.classList.remove("active-tab");
  bankTabContent.classList.remove("active-tab-content");
  cardTabContent.classList.add("active-tab-content");
});

function copyBankDetails() {
  if (!bankDetailsCopied) {
    const bankDetails =
      "Bank: Opay\nBank Account: 1234567890\nAccount Name: Ridal Account";
    navigator.clipboard.writeText(bankDetails).then(
      function () {
        document.querySelector(".copy-button").innerText = "Copied!";
        setTimeout(function () {
          document.querySelector(".copy-button").innerText =
            "Click here after transfer";
        }, 3000); // Change text after 3 seconds
        bankDetailsCopied = true;
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  }
}

cardNumberInput.addEventListener("input", () => {
  const firstDigit = cardNumberInput.value.charAt(0);
  if (firstDigit === "4") {
    // Visa
    highlightLogo(visaLogo);
  } else if (firstDigit === "5") {
    // Mastercard
    highlightLogo(mastercardLogo);
  } else if (firstDigit === "6") {
    // Verve
    highlightLogo(verveLogo);
  } else {
    resetLogos();
  }
});

cardNumberInput.addEventListener("input", () => {
  let cardNumber = cardNumberInput.value.replace(/\s/g, ""); // Remove existing spaces
  cardNumber = cardNumber.replace(/(\d{4})/g, "$1 "); // Add space after every four digits
  cardNumberInput.value = cardNumber.trim(); // Trim any leading/trailing spaces
});

function highlightLogo(logo) {
  resetLogos();
  logo.classList.add("highlighted");
}

function resetLogos() {
  visaLogo.classList.remove("highlighted");
  mastercardLogo.classList.remove("highlighted");
  verveLogo.classList.remove("highlighted");
}
