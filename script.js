function calculate() {
    let v = parseFloat(document.getElementById("voltage").value);
    let i = parseFloat(document.getElementById("current").value);
    let r = parseFloat(document.getElementById("resistance").value);
    let resultParagraph = document.getElementById("power");

    resultParagraph.innerHTML = "Power (W): ";
    
    if (!isNaN(i) && !isNaN(r) && isNaN(v)) {
        let calcV = i * r;
        let power = calcV * i;
        resultParagraph.innerHTML = `Calculated Voltage: ${calcV.toFixed(2)} V<br>Power (W): ${power.toFixed(2)} W`;
    }
    
    else if (!isNaN(v) && !isNaN(r) && isNaN(i)) {
        if (r === 0) { resultParagraph.innerHTML = "Resistance cannot be 0!"; return; }
        let calcI = v / r;
        let power = v * calcI;
        resultParagraph.innerHTML = `Calculated Current: ${calcI.toFixed(2)} A<br>Power (W): ${power.toFixed(2)} W`;
    }
    
    else if (!isNaN(v) && !isNaN(i) && isNaN(r)) {
        if (i === 0) { resultParagraph.innerHTML = "Current cannot be 0!"; return; }
        let calcR = v / i;
        let power = v * i;
        resultParagraph.innerHTML = `Calculated Resistance: ${calcR.toFixed(2)} Ω<br>Power (W): ${power.toFixed(2)} W`;
    }
    
    else if (!isNaN(v) && !isNaN(i) && !isNaN(r)) {
        let power = v * i;
        resultParagraph.innerHTML = `Power (W): ${power.toFixed(2)} W`;
    }
    
    else {
        resultParagraph.innerHTML = "Please fill in at least two fields to calculate!";
    }
}
