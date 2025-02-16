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
    
    let valid = true
    const form = e.currentTarget  
    const errorhtml = form.querySelectorAll('.error') //a formon belül mindenet aminek error classal rendelkezik beletesszük egy változoba
    for(const errorelement of errorhtml){  //minden egyes element ami ebben az errorhtml-ben van 
        errorelement.innerHTML = '' //annak legyen az innerhtml-je üres string. (igy eltűnik majd a validácios szöveg ha tényleg irunk valamit)
    }   
   
    
    
    function alapcheck(ertek, uzenet) {
        if (!ertek.value) { 
            valid = false
            const parentElement = ertek.parentElement; 
            const errormsg = parentElement.querySelector('.error'); 
            if (errormsg) { //ha az errormsg van akkor 
                errormsg.innerHTML = uzenet; //legyen a megadott uzenetünk az
            }
        }
    
    }

    function optionalcheck(ertek, ertek2, uzenet) {
        if (!ertek.value && ertek2.value) { 
            valid = false
            const parentElement = ertek.parentElement; 
            const errormsg = parentElement.querySelector('.error'); 
            if (errormsg) { //ha az errormsg van akkor 
                errormsg.innerHTML = uzenet; //legyen a megadott uzenetünk az
            }
        }
    
    }
    
    
    alapcheck(szarmazas, "Szarmazas nem jó")
    alapcheck(szerzo, "Szerzo nem jó")
    alapcheck(szerzomu, "Mű nem jó nem jó")


    optionalcheck(szerzo1, szerzo1mu, "Kérlek előszőr szerzőt adj meg!")
    optionalcheck(szerzo1mu, szerzo1, "Ha megadtad a második szerzőt kérlek töltsd ki a második szerző művet.")




    form.reset()


    if(valid) {
        const ujadat = { // egy uj objektumot hozunk létre 
            Nemzetiség: szarmazasertek, 
            Szerző : szerzoertek, 
            Szerző1 : szerzo1ertek,
            Mű1 : szerzomuertek ,
            Mű2 : szerzo1muertek 
        }
        array.push(ujadat) 
        tbody.innerHTML = "" 
        rendertable()
    }
     
})