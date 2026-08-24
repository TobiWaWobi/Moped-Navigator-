// Moped-Navigator – Mopedverwaltung

let mopeds = JSON.parse(localStorage.getItem("mopeds")) || [];

// Neues Moped speichern
function addMoped(name, model, tankSize, consumption, currentFuel) {

    const moped = {
        id: Date.now(),
        name: name,
        model: model,
        tankSize: Number(tankSize),
        consumption: Number(consumption),
        currentFuel: Number(currentFuel)
    };

    mopeds.push(moped);

    saveMopeds();

    return moped;
}


// Mopeds speichern
function saveMopeds() {

    localStorage.setItem(
        "mopeds",
        JSON.stringify(mopeds)
    );
}


// Alle gespeicherten Mopeds abrufen
function getMopeds() {

    return mopeds;
}


// Moped löschen
function deleteMoped(id) {

    mopeds = mopeds.filter(
        moped => moped.id !== id
    );

    saveMopeds();
}


// Reichweite berechnen
function calculateRange(moped) {

    if (
        !moped ||
        !moped.consumption ||
        moped.consumption <= 0
    ) {

        return 0;
    }

    return (
        moped.currentFuel /
        moped.consumption
    ) * 100;
}
