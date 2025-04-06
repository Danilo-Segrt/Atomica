document.addEventListener("DOMContentLoaded", function() {
    const inputRa = document.getElementById("inputRa");
    const inputRn = document.getElementById("inputRn");
    const checkBtn = document.getElementById("checkBtn");
    const resultContainer = document.getElementById("resultContainer");
    const correctResult = document.getElementById("correctResult");
    const incorrectResult = document.getElementById("incorrectResult");
    const tryAgainBtn = document.getElementById("tryAgainBtn");

    correctResult.style.display = "none";
    incorrectResult.style.display = "none";
    resultContainer.style.display = "none";

    function validateInput() {
        if (inputRa.value.length > 0 && inputRn.value.length > 0) {
            checkBtn.classList.add("active");
            checkBtn.disabled = false;
        } else {
            checkBtn.classList.remove("active");
            checkBtn.disabled = true;
        }
    }

    function resetForm() {
        inputRa.value = "";
        inputRn.value = "";
        correctResult.style.display = "none";
        incorrectResult.style.display = "none";
        resultContainer.style.display = "none";
        checkBtn.classList.remove("active");
        checkBtn.disabled = true;
        inputRa.focus();
    }

    checkBtn.addEventListener("click", function() {
        if (inputRa.value.trim() === "92" && inputRn.value.trim() === "235") {
            correctResult.style.display = "block";
            incorrectResult.style.display = "none";
        } else {
            correctResult.style.display = "none";
            incorrectResult.style.display = "block";
        }
        resultContainer.style.display = "block";
    });

    tryAgainBtn.addEventListener("click", function(e) {
        e.preventDefault();
        resetForm();
    });

    inputRa.addEventListener("input", validateInput);
    inputRn.addEventListener("input", validateInput);
});