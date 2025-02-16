/**
 * Ez generálja le nekünk a formot aminek a bemeneti értéke egy array. Azon iterálunk végig és csináljuk
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
  /**
     * 
     * @param {HTMLElement} ertek 
     * @param {string} uzenet 
     */
    
  function alapcheck(ertek, uzenet) { 
    let jo = true //csinálunk egy jo változót aminek az értéke true lesz
    if (!ertek.value) {  //hogyha a bejövö értéknek a valuja undefined vagy ""
        const parentElement = ertek.parentElement;  //megnézzük a parentelementjét a bejövő HTMLELEMENT-nek
        const errormsg = parentElement.querySelector('.error');  //megnézzük hogy van benne olyan element aminek a class-ja error.
        if (errormsg) { //ha az errormsg van akkor 
            errormsg.innerHTML = uzenet; //legyen a megadott uzenetünk az
          
        }
        jo = false //hogyha hibás akkor legyen false a jó és akkor nem adjuk hozzá az adatokat
        
    }
    return jo //visszatérunk a jó változó értékkel (ami amúgy true)
    
}

  /**
     * Ez a check megnézi hogy ha az egyik érték az nem létezik de a másik igen akkor kiirjuk a megfelelő üzenetet az első értéknek.
     * @param {HTMLElement} ertek 
     * @param {HTMLElement} ertek2 
     * @param {string} uzenet 
     */
  function optionalcheck(ertek, ertek2, uzenet) {
    let jo = true //csinálunk egy jo változót aminek az értéke true lesz
    if (!ertek.value && ertek2.value) {  //hogyha az egyik bejővő érték undefined vagy "" és a másik pedig létezik
        valid = false //akkor legyen valid false
        const parentElement = ertek.parentElement;  //megnézzük a parentelementjét a bejövő HTMLELEMENT-nek
        const errormsg = parentElement.querySelector('.error');   //megnézzük hogy van benne olyan element aminek a class-ja error.
        if (errormsg) { //ha az errormsg van akkor 
            errormsg.innerHTML = uzenet; //legyen a megadott uzenetünk az
        }
        jo = false //hogyha hibás akkor legyen false a jó és akkor nem adjuk hozzá az adatokat
    }
    return jo //visszatérunk a jó változó értékkel (ami amúgy true)

}


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

