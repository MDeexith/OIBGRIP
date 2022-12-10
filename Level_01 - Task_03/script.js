function tempconv() {
    var temp = document.getElementById("temp").value;
    var unit = document.getElementById("unit-ip").value;
    var res1, res2;
    var t1, t2;
    if (unit == "C") {
        res1 = (temp * 9 / 5 + 32);
        res2 = (temp * 1 + 273.15);
        t1 = "Fahrenheit °F";
        t2 = "Kelvin °K";
    } else if (unit == "F") {
        res1 = ((temp - 32) * 5 / 9);
        res2 = ((temp - 32) * 5 / 9 + 273.15);
        t1 = "Celsius °C";
        t2 = "Kelvin °K";
    } else {
        res1 = (temp - 273.15);
        res2 = (temp - 273.15) * 9 / 5 + 32;
        t1 = "Celsius °C";
        t2 = "Fahrenheit °F";
    }
    document.getElementById('result').innerHTML = "The temperature in other units is:";
    document.getElementById('result1').innerHTML = res1.toFixed(2) + ' ' + t1;
    document.getElementById('result2').innerHTML = res2.toFixed(2) + ' ' + t2;
}