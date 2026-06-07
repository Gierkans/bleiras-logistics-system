let trucks = JSON.parse(localStorage.getItem("trucks")) || [];
let trailers = JSON.parse(localStorage.getItem("trailers")) || [];
let drivers = JSON.parse(localStorage.getItem("drivers")) || [];
let services = JSON.parse(localStorage.getItem("services")) || [];

function showSection(id){

document.querySelectorAll('.section')
.forEach(section => section.classList.add('hidden'));

document.getElementById(id)
.classList.remove('hidden');

}

function addTruck(){

let truck = {
number: truckNumber.value,
brand: truckBrand.value,
model: truckModel.value,
mileage: truckMileage.value
};

trucks.push(truck);

render();

}

function addTrailer(){

trailers.push({
number: trailerNumber.value,
type: trailerType.value
});

render();

}

function addDriver(){

drivers.push({
name: driverName.value
});
localStorage.setItem("trucks", JSON.stringify(trucks));
localStorage.setItem("trailers", JSON.stringify(trailers));
localStorage.setItem("drivers", JSON.stringify(drivers));
localStorage.setItem("services", JSON.stringify(services));j
render();
window.onload = function(){
    render();
}
}

function render(){

truckCount.innerText = trucks.length;
trailerCount.innerText = trailers.length;
driverCount.innerText = drivers.length;

truckTable.innerHTML = "";

trucks.forEach(t => {

truckTable.innerHTML += `
<tr>
<td>${t.number}</td>
<td>${t.brand}</td>
<td>${t.model}</td>
<td>${t.mileage}</td>
</tr>
`;

});

trailerTable.innerHTML = "";

trailers.forEach(t => {

trailerTable.innerHTML += `
<tr>
<td>${t.number}</td>
<td>${t.type}</td>
</tr>
`;

});

driverTable.innerHTML = "";

drivers.forEach(d => {

driverTable.innerHTML += `
<tr>
<td>${d.name}</td>
</tr>
`;

});

}
