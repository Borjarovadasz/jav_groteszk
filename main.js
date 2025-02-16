const fejlec  = //létrehozunk egy fejléc arrayt objektumokkal
    [
        {
            szoveg: "Nemzetiség" //elso objektomunk amiben eltároljuk a szöveget
        },
        {
            szoveg: "Szerző" //második objektomunk amiben eltároljuk a szöveget
        },
        {
            szoveg: "Mű", colSpan: 2 //harmadik objektomunk amiben eltároljuk a szöveget és adunk neki colspan-2 is
        }
    ]


    const array = [
        {
            Nemzetiség : "Orosz",
            Szerző : "Gogol",
            Szerző1 : "Csehov",
            Mű1 : "	A köpönyeg",
            Mű2 : "A csinovnyik halála"
    
        },
        {
            Nemzetiség : "Cseh",
            Szerző : "Franz Kafka",
            Mű1 : "	Az átváltozás",
    
        },
        {
            Nemzetiség : "Magyar",
            Szerző : "Örkény István	",
            Szerző1 : "József Attila	",
            Mű1 : "Egyperces Novellák",
            Mű2 : "Klárisok"
    
        },
        {
            Nemzetiség : "Svájc	",
            Szerző : "Friedrich Dürrenmatt	",
            Mű1 : "	A fizikusok",
    
        },
    
    ]



const tablazat = document.createElement('table')

const tbody = document.createElement('tbody')

const thead = document.createElement('thead')

document.body.appendChild(tablazat)
tablazat.appendChild(thead)
tablazat.appendChild(tbody)


const tr = document.createElement('tr')
thead.appendChild(tr)

for(let adat of fejlec) {
    const th = document.createElement('th');

    th.innerHTML = adat.szoveg
    console.log(adat);
    tr.appendChild(th);
    if(adat.szoveg == "Mű") {
        th.colSpan = 2
    }
    }



function rendertable() {
    for(let adat of array) {
        const sor = document.createElement('tr')

        tbody.appendChild(sor)

        const elsocella = document.createElement('td')
        elsocella.innerHTML = adat.Nemzetiség
        if(adat.Szerző1 && adat.Mű1){
            elsocella.rowSpan = 2
        }
        sor.appendChild(elsocella)

        const masidokcella = document.createElement('td')
        masidokcella.innerHTML = adat.Szerző
       
        sor.appendChild(masidokcella)

        const harmadikcella = document.createElement('td')
        harmadikcella.innerHTML = adat.Mű1
       
        sor.appendChild(harmadikcella)
        
        if(elsocella.rowSpan == 2) {
            const sor1 = document.createElement('tr')

            const negyedikcella = document.createElement('td')
            negyedikcella.innerHTML = adat.Szerző1
    
            const ötödikcella = document.createElement('td')
            ötödikcella.innerHTML = adat.Mű2
    
            sor1.appendChild(negyedikcella)
            sor1.appendChild(ötödikcella)
            tbody.appendChild(sor1)
        }
       

       
    }
}

rendertable()

const form = document.getElementById('form') // megszerezzük az id alapján a formot
form.addEventListener('submit', function(e) {
    e.preventDefault(); //az alapértelmezett böngészű lefusson megakadályozza
    const szarmazas = document.getElementById("szarmazas")
    const szerzo = document.getElementById("szerzo1") 
    const szerzomu = document.getElementById("szerzo1mu") 
    const szerzo1 = document.getElementById("szerzo2") 
    const szerzo1mu = document.getElementById("szerzo2mu")



    const szarmazasertek = szarmazas.value //itt egy másik változóba belerakom az elöbb elkért terulet változó értékét
    const szerzoertek = szerzo.value //itt egy másik változóba belerakom az elöbb elkért idoszak változó értékét
    const szerzomuertek = szerzomu.value //itt egy másik változóba belerakom az elöbb elkért tudos1 változó értékét
    const szerzo1ertek = szerzo1.value//itt egy másik változóba belerakom az elöbb elkért tudos2 változó értékét
    const szerzo1muertek = szerzo1mu.value//itt egy másik változóba belerakom az elöbb elkért tudos2 változó értékét
    const ujadat = { // egy uj objektumot hozunk létre 
        Nemzetiség: szarmazasertek, // az uj fizikateruletnek a teruletertek lesz az értéke
        Szerző : szerzoertek, // az idoszaknak az idoszakerteke lesz az értéke
        Szerző1 : szerzo1ertek, // a tudos1-nek a tudos1ertek lesz az új értéke
        Mű1 : szerzomuertek ,// a tudos2-nek a tudos2ertek lesz az új értéke
        Mű2 : szerzo1muertek // a tudos2-nek a tudos2ertek lesz az új értéke
    }
    array.push(ujadat) //belerakjuk az arrayben ami ugye már létezik ezt az új létrehozott adatobjektumunkat.
    tbody.innerHTML = "" //kitörlöm a táblázatot azért a tbodyt mert abban van igazából az egész táblázat a headerrel nem kell foglalkozni.
    rendertable() // és az ujonnan belerakott dologgal ujragenerálom a táblát.
})