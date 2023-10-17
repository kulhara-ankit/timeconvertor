let convertBtnEl = document.getElementById("convertBtn");

convertBtnEl.addEventListener("click", function getSeconds() {

    let hoursInputEl = document.getElementById("hoursInput");
    let minutesInputEl = document.getElementById("minutesInput");
    let containerEl = document.getElementById("containerEl");
    let timeInSecondsEl = document.getElementById("timeInSeconds");
    let errorMsgEl = document.getElementById("errorMsg");

    let hoursInputVal = parseInt(hoursInputEl.value);
    let minutesInputVal = parseInt(minutesInputEl.value);

    let seconds = (hoursInputVal * 3600) + (minutesInputVal * 60);

    if (hoursInputEl.value === "") {
        errorMsgEl.textContent = "Enter a valid numbers of hours";
        hoursInputVal.textContent = "";
    } else if (minutesInputEl.value === "") {
        errorMsgEl.textContent = "Entera valid numbers of minutes";
        minutesInputVal.textContent = "";
    } else {
        errorMsgEl.textContent = "";
        timeInSecondsEl.textContent = seconds + "s";
        timeInSecondsEl.classList.add("time-in-seconds");
    }
});