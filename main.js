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


    const array = [ //csinálunk egy arrayt 
        { //elso objektum
            Nemzetiség : "Orosz",
            Szerző : "Gogol",
            Szerző1 : "Csehov",
            Mű1 : "	A köpönyeg",
            Mű2 : "A csinovnyik halála"
    
        }, //masodik objektum
        {
            Nemzetiség : "Cseh",
            Szerző : "Franz Kafka",
            Mű1 : "	Az átváltozás",
    
        }, //harmadik objektum
        {
            Nemzetiség : "Magyar",
            Szerző : "Örkény István	",
            Szerző1 : "József Attila	",
            Mű1 : "Egyperces Novellák",
            Mű2 : "Klárisok"
     
        }, //negyedik objektum
        {
            Nemzetiség : "Svájc	",
            Szerző : "Friedrich Dürrenmatt	",
            Mű1 : "	A fizikusok",
    
        },
    
    ]

const formarray = [
    { //elso obj
        label: "Származás:",
        id: "szarmazas",
        for: "szarmazas"
    },
    { //masodik obj
        label: "1. szerző:",
        id: "szerzo1",
        for: "szerzo1"
    },
    { //harmadik obj
        label: "1. szerző műve:",
        id: "szerzo1mu",
        for: "szerzo1mu"
    },
    { //negyedik obj
        label: "2. szerző:",
        id: "szerzo2",
        for: "szerzo2"
    },
    { //otodik objs
        label: "2. szerző műve:",
        id: "szerzo2mu",
        for: "szerzo2mu"
    }
]


formgenerate(formarray)

const tablazat = document.createElement('table') //csinálnuk egy tablet

const tbody = document.createElement('tbody')   //csinálnuk egy tbodyt

const thead = document.createElement('thead')  //csinálnuk egy theadet

document.body.appendChild(tablazat) //hozzátesszük a tablet a bodyhoz
tablazat.appendChild(thead) //hozzátesszük a táblázathot  a theadet
tablazat.appendChild(tbody)  //hozzátesszük a táblázathot  a tbpdyt
 

const tr = document.createElement('tr') //csinálunk egy tr-t
thead.appendChild(tr) //theadhez hozzátesszük a tr-t

headergenerator(fejlec,tr)


rendertable(array,tbody)

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
    
    const form = e.currentTarget  
    const errorhtml = form.querySelectorAll('.error') //a formon belül mindenet aminek error classal rendelkezik beletesszük egy változoba
    for(const errorelement of errorhtml){  //minden egyes element ami ebben az errorhtml-ben van 
        errorelement.innerHTML = '' //annak legyen az innerhtml-je üres string. (igy eltűnik majd a validácios szöveg ha tényleg irunk valamit)
    }   
   
  
    const valid = alapcheck(szarmazas, "Származás nem jó",);
    const valid1 = alapcheck(szerzo, "Szerző nem jó");
    const valid2 = alapcheck(szerzomu, "Mű nem jó");
    
    
    const valid3 = optionalcheck(szerzo1, szerzo1mu, "Kérlek előszőr szerzőt adj meg!")  //függvényhívás bemeneti értékkel
    const valid4 = optionalcheck(szerzo1mu, szerzo1, "Ha megadtad a második szerzőt kérlek töltsd ki a második szerző művet.")  //függvényhívás bemeneti értékkel
    



    form.reset()

    if(valid &&valid1 && valid2 && valid3 && valid4) {
        const ujadat = { // egy uj objektumot hozunk létre 
            Nemzetiség: szarmazasertek, 
            Szerző : szerzoertek, 
            Szerző1 : szerzo1ertek,
            Mű1 : szerzomuertek ,
            Mű2 : szerzo1muertek 
        }
        array.push(ujadat) 
        tbody.innerHTML = "" 
        rendertable(array,tbody)
    }
     
})

    
