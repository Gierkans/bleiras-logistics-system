// Duomenys
let trucks = JSON.parse(localStorage.getItem("trucks")) || [];
let trailers = JSON.parse(localStorage.getItem("trailers")) || [];
let drivers = JSON.parse(localStorage.getItem("drivers")) || [];
let defects = JSON.parse(localStorage.getItem("defects")) || [];

// Išsaugojimas
function saveData() {
    localStorage.setItem("trucks", JSON.stringify(trucks));
    localStorage.setItem("trailers", JSON.stringify(trailers));
    localStorage.setItem("drivers", JSON.stringify(drivers));
    localStorage.setItem("defects", JSON.stringify(defects));
}

// Navigacija
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(sec => {
        sec.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");
}

// Autovežis
function addTruck() {

    const truck = {
        number: truckNumber.value,
        brand: truckBrand.value,
        model: truckModel.value,
        mileage: truckMileage.value
    };

    if (!truck.number) return;

    trucks.push(truck);

    truckNumber.value = "";
    truckBrand.value = "";
    truckModel.value = "";
    truckMileage.value = "";

    saveData();
    render();
}

// Priekaba
function addTrailer() {

    const trailer = {
        number: trailerNumber.value,
        type: trailerType.value
    };

    if (!trailer.number) return;

    trailers.push(trailer);

    trailerNumber.value = "";
    trailerType.value = "";

    saveData();
    render();
}

// Vairuotojas
function addDriver() {

    const driver = {
        name: driverName.value
    };

    if (!driver.name) return;

    drivers.push(driver);

    driverName.value = "";

    saveData();
    render();
}

// Gedimas
function addDefect() {

    const defect = {
        truck: defectTruck.value,
        text: defectText.value,
        date: new Date().toLocaleDateString("lt-LT")
    };

    if (!defect.truck || !defect.text) return;

    defects.push(defect);

    defectTruck.value = "";
    defectText.value = "";

    saveData();
    render();
}

// Atvaizdavimas
function render() {

    // Statistika
    truckCount.innerText = trucks.length;
    trailerCount.innerText = trailers.length;
    driverCount.innerText = drivers.length;

    // Autovežiai
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

    // Priekabos
    trailerTable.innerHTML = "";

    trailers.forEach(t => {

        trailerTable.innerHTML += `
        <tr>
            <td>${t.number}</td>
            <td>${t.type}</td>
        </tr>
        `;
    });

    // Vairuotojai
    driverTable.innerHTML = "";

    drivers.forEach(d => {

        driverTable.innerHTML += `
        <tr>
            <td>${d.name}</td>
        </tr>
        `;
    });

    // Gedimai
    if (typeof defectTable !== "undefined") {

        defectTable.innerHTML = "";

        defects.forEach(d => {

            defectTable.innerHTML += `
            <tr>
                <td>${d.date}</td>
                <td>${d.truck}</td>
                <td>${d.text}</td>
            </tr>
            `;
        });
    }
}

render();
