
// Using spread operater and save nested object value in new variable

let mobilesCampanes = {
    samsung: {
        modals: {
            modals1: "sumsangG2",
            modals2: "sumsangG3",
            modals3: "sumsangG4",
        },
    },
    infinex: {
        modals: {
            modals1: "Infinexs5",
            modals2: "Infinexs6",
            modals3: "Infinexs7",
        },
    },
    vivo: {
        modals: {
            modals1: "VivoY1s",
            modals2: "VivoY2s",
            modals3: "VivoY4s",
        },
    },

};

let newMobilecompane = {...mobilesCampanes.infinex.modals};
console.log(newMobilecompane);