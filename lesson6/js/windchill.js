const t = document.getElementById('temper').textContent;
const s = document.getElementById('speed').textContent;

let wc = 35.74 + (0.615 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));

wc = Math.round(wc);


if (t<=50 && s>3) {
    document.getElementById('chill').textContent = "Wind Chill is "+wc+""
} else {
    document.getElementById("chill").textContent = "No Wind Chill Today"
}
