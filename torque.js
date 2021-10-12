function disable(value) {

    const arrayIds = ["distance", "force", "angle", "torque"];

    for (var i = arrayIds.length - 1; i >= 0; i--) {
        if (arrayIds[i] == value) {
            document.getElementById(arrayIds[i]).disabled = true;
            document.getElementById(arrayIds[i]).style.background = 'grey';
        } else {
            document.getElementById(arrayIds[i]).disabled = false;
            document.getElementById(arrayIds[i]).style.background = 'white';
        }
    }
}
function calculate() {

    var toCalculate = document.getElementById("perof5").value;

    var distance = Number(document.getElementById("distance").value);
    var force = Number(document.getElementById("force").value);
    var angle = Number(document.getElementById("angle").value);
    var torque = Number(document.getElementById("torque").value);
    // Torque = Distance x Force x Sin(Θ).
    switch (toCalculate) {

        case "force":
            var result = torque / (distance * Math.sin(angle));
            result = result.toFixed(5) + " N";
            document.getElementById('result-content').innerHTML = 'Force';
            break;
        case "distance":
            var result = torque / (force * Math.sin(angle));
            result = result.toFixed(5) + " m";
            document.getElementById('result-content').innerHTML = 'Distance';
            break;
        case "angle":
            var result = torque / (force * distance);
            result = result.toFixed(5) + " deg";
            document.getElementById('result-content').innerHTML = 'Angle';
            break;
        case "torque":
            var result = force * distance * Math.sin(angle);
            result = result.toFixed(5) + " Nm";
            document.getElementById('result-content').innerHTML = 'Torque';
            break;
    }
    document.getElementById('result').innerHTML = result;
    document.getElementById("scrollTo").scrollIntoView();
}
function clearTorque() {
    document.getElementById("angle").value = '';
    document.getElementById("torque").value = '';
    document.getElementById("force").value = '';
    document.getElementById("distance").value = '';
    document.getElementById('result').innerHTML = 'x';
    document.getElementById('result-content').innerHTML = 'Result';
    document.getElementById("scrollTo").scrollIntoView();
}
