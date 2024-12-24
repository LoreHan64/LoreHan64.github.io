function timeFormat() {
    const now = new Date();
    const YYYY = now.getFullYear();
    const MM = String(now.getMonth() + 1).padStart(2, "0");
    const DD = String(now.getDate()).padStart(2, "0");
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
}
function timeShow() {
    document.getElementById("datetime").textContent = timeFormat();
}
setInterval(timeShow, 1000);
timeShow();