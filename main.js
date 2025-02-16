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
/**
 * Ez generálja le nekünk a formot aminek a bemeneti értéke egy array. Azon iterálunk végig és csináljuk a formot.
 * @param {array} array 
 */
function formgenerate(array) { //formgenerate function
    const form = document.createElement('form') //létrehozunk egy formot
    form.id = "form" //form idje legyen form
    form.action = "#"

    for(let i = 0; i < array.length; i++) { //végigiterálunk a formon

        const div = document.createElement('div') //csinálnuk egy div-et
        const label = document.createElement('label') //csinálunk egy label-t
        const input = document.createElement('input') //csinálnuk egy input-ot
        const br = document.createElement('br') //csinálunk egy br-t

        label.innerHTML = formarray[i].label //a labelnek az innerhtmlje legyen az adott indexnél található label az arrayünkben
        label.htmlFor = formarray[i].for//a labelnek az for-ja legyen az adott indexnél található for az arrayünkben
        input.type = "text" //input typja legyen text
        input.id = formarray[i].id //input idja legyen az adott id az arrayünkben
        input.name = formarray[i].id  //input neve legyen az adott id az arrayünkben

        const errordiv = document.createElement('div') //csinálunk egy errodivet
        errordiv.className = "error" //ennek a divnek a classneve legyen error
    

        div.appendChild(label) //hozzátesszük a fődivhez a labelt
        div.appendChild(br) //hozzátesszük a fődivhez a brt
        div.appendChild(input) //hozzátesszük a fődivhez a inputot
        div.appendChild(errordiv) //hozzátesszük a fődivhez az errordivet

        form.appendChild(div) //az egész formhoz hozzátesszük a fődivet
    }
    document.body.appendChild(form) //majd a formot a bodyhoz
    const button = document.createElement('button') //csinálunk egy gombot
    button.innerHTML = "Hozzáadás" //a gombnak legyen az innerhtml-je a "Hozzáadás"
    document.body.appendChild(form) //a bodyhoz hozzátesszük a formot
    form.appendChild(button) //majd a gombot pedig a formhoz
}

formgenerate(formarray)

const tablazat = document.createElement('table') //csinálnuk egy tablet

const tbody = document.createElement('tbody')   //csinálnuk egy tbodyt

const thead = document.createElement('thead')  //csinálnuk egy theadet

document.body.appendChild(tablazat) //hozzátesszük a tablet a bodyhoz
tablazat.appendChild(thead) //hozzátesszük a táblázathot  a theadet
tablazat.appendChild(tbody)  //hozzátesszük a táblázathot  a tbpdyt
 

const tr = document.createElement('tr') //csinálunk egy tr-t
thead.appendChild(tr) //theadhez hozzátesszük a tr-t

/**
 * Ez függvény generálja le nekünk a fejlécet bemeneti paraméterek alapján
 * @param {array} headerobjek 
 * @param {HTMLTableRowElement} sor 
 */
function headergenerator(headerobjek,sor) { 
    for(let adat of headerobjek) { //végigmegyünk az adott array adatain
        const th = document.createElement('th'); //csinálunk egy th-t
    
        th.innerHTML = adat.szoveg //a th-nak a szövege legyen az adott arrayben lévő szöveg
        sor.appendChild(th); //hozzátesszük a sorhoz amit beadtunk mint paraméter a th-t
        if(adat.szoveg == "Mű") { //ha az adat szövege az "Mű"
            th.colSpan = 2 //akkor az ottani Th legyen colspan2
        }
        }
    
}

headergenerator(fejlec,tr)
/**
 * Ez generálja le nekünk a táblaztot. Bemeneti értékei egy array és egy globális tbody.
 * @param {array} thearray 
 * @param {HTMLTableSectionElement} bodyelement 
 */
function rendertable(thearray, bodyelement) { 
    for(let adat of thearray) { //végigmegyünk az adatokon az adott arrayben
        const sor = document.createElement('tr') //csinálunk egy sort

        bodyelement.appendChild(sor) //az adott tbodyhoz hozzátesszük ezt a sort

        const elsocella = document.createElement('td') //csinálunk egy td
        elsocella.innerHTML = adat.Nemzetiség //az elsocella innerhtml-je legyen az adott adat nemzetisége
        if(adat.Szerző1 && adat.Mű1){ //ha az adott objektumban az arrayben van második szerző és mű
            elsocella.rowSpan = 2 //akkor legyen a nemzetíség 2 rowspan
        }
        sor.appendChild(elsocella) //hozzátesszük a sorunkhoz

        const masidokcella = document.createElement('td') //csinálink egy td-t
        masidokcella.innerHTML = adat.Szerző //ennek legyen az innerhtml-je az adott szerző
        
        sor.appendChild(masidokcella)//hozzátesszük a sorunkhoz

        const harmadikcella = document.createElement('td')  //csinálunk egy td-t
        harmadikcella.innerHTML = adat.Mű1 //ennek legyen az innerhtml-je az adott mű
       
        sor.appendChild(harmadikcella)//hozzátesszük a sorunkhoz
        
        if(elsocella.rowSpan == 2) { //hogyha az elsocella rowspanja kettő azaz van tőbb szerző és mű
            const sor1 = document.createElement('tr') //csinálunk egy új sort

            const negyedikcella = document.createElement('td') //csinálunk egy tdt
            negyedikcella.innerHTML = adat.Szerző1 //ennek legyen az értéke az adott szerző2 az arrayben
    
            const ötödikcella = document.createElement('td') //csinálunk egy tdt
            ötödikcella.innerHTML = adat.Mű2 //ennek legyen az értéke az adott mű2 az arrayben
    
            sor1.appendChild(negyedikcella) //hozzátesszük a sorunkhoz
            sor1.appendChild(ötödikcella) //hozzátesszük a sorunkhoz
            bodyelement.appendChild(sor1) //és végűl a tbodyhoz hozzátesszük ezt az új sort
        }
       

       
    }
}

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
    
    let valid = true
    const form = e.currentTarget  
    const errorhtml = form.querySelectorAll('.error') //a formon belül mindenet aminek error classal rendelkezik beletesszük egy változoba
    for(const errorelement of errorhtml){  //minden egyes element ami ebben az errorhtml-ben van 
        errorelement.innerHTML = '' //annak legyen az innerhtml-je üres string. (igy eltűnik majd a validácios szöveg ha tényleg irunk valamit)
    }   
   
    /**
     * 
     * @param {HTMLElement} ertek 
     * @param {string} uzenet 
     */
    
    function alapcheck(ertek, uzenet) { 
        if (!ertek.value) {  //hogyha a bejövö értéknek a valuja undefined vagy ""
            valid = false //akkor legyen valid false
            const parentElement = ertek.parentElement;  //megnézzük a parentelementjét a bejövő HTMLELEMENT-nek
            const errormsg = parentElement.querySelector('.error');  //megnézzük hogy van benne olyan element aminek a class-ja error.
            if (errormsg) { //ha az errormsg van akkor 
                errormsg.innerHTML = uzenet; //legyen a megadott uzenetünk az
            }
        }
    
    }
    /**
     * Ez a check megnézi hogy ha az egyik érték az nem létezik de a másik igen akkor kiirjuk a megfelelő üzenetet az első értéknek.
     * @param {HTMLElement} ertek 
     * @param {HTMLElement} ertek2 
     * @param {string} uzenet 
     */
    function optionalcheck(ertek, ertek2, uzenet) {
        if (!ertek.value && ertek2.value) {  //hogyha az egyik bejővő érték undefined vagy "" és a másik pedig létezik
            valid = false //akkor legyen valid false
            const parentElement = ertek.parentElement;  //megnézzük a parentelementjét a bejövő HTMLELEMENT-nek
            const errormsg = parentElement.querySelector('.error');   //megnézzük hogy van benne olyan element aminek a class-ja error.
            if (errormsg) { //ha az errormsg van akkor 
                errormsg.innerHTML = uzenet; //legyen a megadott uzenetünk az
            }
        }
    
    }
    
    
    alapcheck(szarmazas, "Szarmazas nem jó") //függvényhívás bemeneti értékkel
    alapcheck(szerzo, "Szerzo nem jó")  //függvényhívás bemeneti értékkel
    alapcheck(szerzomu, "Mű nem jó nem jó")  //függvényhívás bemeneti értékkel


    optionalcheck(szerzo1, szerzo1mu, "Kérlek előszőr szerzőt adj meg!")  //függvényhívás bemeneti értékkel
    optionalcheck(szerzo1mu, szerzo1, "Ha megadtad a második szerzőt kérlek töltsd ki a második szerző művet.")  //függvényhívás bemeneti értékkel




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
        rendertable(array,tbody)
    }
     
})