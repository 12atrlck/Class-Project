// let principal;
// let rate;
// let time;

function upload() {
    let forceValue= document.getElementById(`force`).value
    let distanceValue = document.getElementById(`distance`).value;
    let timeValue = document.getElementById(`time`).value;

    let force = parseFloat(forceValue);
    let distance = parseFloat(distanceValue);
    let time = parseFloat(timeValue);

    let work = (force * distance) / time;

    document.getElementById(`Result`).innerHTML = `The workdone is: ` + work;


}