
const tablazat = document.createElement('table') // Létrehozzuk a táblázat változo

document.body.appendChild(tablazat) // hozzá appendáljuk a táblázatot a bodyhoz

const fejlec = document.createElement('thead') // létrehozzuk a fejléc változót

tablazat.appendChild(fejlec) // a táblázathoz hozzá appendáljuk a thedünket

const tr = document.createElement('tr') // létrehozzunk a fejlécünknek a tr-jét
fejlec.appendChild(tr) // hozzá appendáljuk a fejléchez a tr (sort)


const th = document.createElement('th') //th létrehozása
th.innerHTML = "Nemzetiség" // th értékmegadása
tr.appendChild(th) // th hozzá appendálása a tr (fejléc sor)

const th2 = document.createElement('th') //th létrehozása
th2.innerHTML = "Szerző"  // th értékmegadása
tr.appendChild(th2) // th hozzá appendálása a tr (fejléc sor)

const th3 = document.createElement('th') //th létrehozása
th3.innerHTML = "Mű" // th értékmegadása
tr.appendChild(th3) // th hozzá appendálása a tr (fejléc sor)



/////////////////////////////////////////////////////

const tbody = document.createElement('tbody') // lérehozzuk a tbody változót

tablazat.appendChild(tbody) //hozzátesszük a bodyhoz a tbody változót

const firstrowtr = document.createElement('tr') // megcsináljuk az első sorunkat 

const cella1 = document.createElement('td') // az első td cella létrehozás
cella1.innerHTML = "Orosz" // td cella értékadás
cella1.rowSpan = 2
firstrowtr.appendChild(cella1) // cella hozzáfűzése az első sorhoz

const cella2 = document.createElement('td')  // a második td cella létrehozás
cella2.innerHTML = "Gogol" // td cella értékadás
firstrowtr.appendChild(cella2) // cella hozzáfűzése az első sorhoz

const cella3 = document.createElement('td')  // a harmadik td cella létrehozás
cella3.innerHTML = "A köpönyeg" // td cella értékadás
firstrowtr.appendChild(cella3) // cella hozzáfűzése az első sorhoz

tbody.appendChild(firstrowtr) // a tbodyhoz hozzáfűzzük az első sorunkat

const secondrow = document.createElement('tr') // megcsináljuk a második sorunkat 

const second1 = document.createElement('td') // az első td cella létrehozás
second1.innerHTML = "Csehov" // td cella értékadás
secondrow.appendChild(second1) // cella hozzáfűzése az második sorhoz

const second2 = document.createElement('td') // a második td cella létrehozás
second2.innerHTML = "A csinovnyik halála" // td cella értékadás
secondrow.appendChild(second2) // cella hozzáfűzése az második sorhoz

tbody.appendChild(secondrow) // a tbodyhoz hozzáfűzzük a második sorunkat

const thirdrow = document.createElement('tr') // megcsináljuk a harmadik sorunkat 


const third1 = document.createElement('td') // az első td cella létrehozás
third1.innerHTML = "Cseh" // td cella értékadás
thirdrow.appendChild(third1) // cella hozzáfűzése az harmadik sorhoz

const third2 = document.createElement('td') // a második td cella létrehozás
third2.innerHTML = "Franz Kafka	" // td cella értékadás
thirdrow.appendChild(third2) // cella hozzáfűzése az harmadik sorhoz

const third3 = document.createElement('td') // a harmadik td cella létrehozás
third3.innerHTML = "Az átváltozás" // td cella értékadás
thirdrow.appendChild(third3)// cella hozzáfűzése az harmadik sorhoz

tbody.appendChild(thirdrow) // a tbodyhoz hozzáfűzzük a harmadik sorunkat


const fourthrow = document.createElement('tr') // megcsináljuk a negyedik sorunkat 


const fourthrow1 = document.createElement('td') // az első td cella létrehozás
fourthrow1.innerHTML = "Magyar" // td cella értékadás
fourthrow1.rowSpan = 2
fourthrow.appendChild(fourthrow1) // cella hozzáfűzése az negyedik sorhoz

const fourthrow2 = document.createElement('td') // a második td cella létrehozás
fourthrow2.innerHTML = "Örkény István" // td cella értékadás
fourthrow.appendChild(fourthrow2) // cella hozzáfűzése az negyedik sorhoz

const fourthrow3 = document.createElement('td') // a harmadik td cella létrehozás
fourthrow3.innerHTML = "Egyperces novellák"// td cella értékadás
fourthrow.appendChild(fourthrow3) // cella hozzáfűzése az negyedik sorhoz



tbody.appendChild(fourthrow) // a tbodyhoz hozzáfűzzük a negyedik sorunkat 


const fifthrow = document.createElement('tr') // megcsináljuk a ötödik sorunkat 

const fifthrow1 = document.createElement('td') // az első td cella létrehozás
fifthrow1.innerHTML = "József Attila" // td cella értékadás
fifthrow.appendChild(fifthrow1) // cella hozzáfűzése az ötödik sorhoz

const fifthrow2 = document.createElement('td') // a második td cella létrehozás
fifthrow2.innerHTML = "Klárisok" // td cella értékadás
fifthrow.appendChild(fifthrow2) // cella hozzáfűzése az ötödik sorhoz

tbody.appendChild(fifthrow) // a tbodyhoz hozzáfűzzük a ötödik sorunkat 



const sixthrow = document.createElement('tr') // megcsináljuk a hatodik sorunkat 

const sixthrow1 = document.createElement('td') // az első td cella létrehozás
sixthrow1.innerHTML = "Svájc" // td cella értékadás
sixthrow.appendChild(sixthrow1) // cella hozzáfűzése az hatodik sorhoz

const sixthrow2 = document.createElement('td') // a második td cella létrehozás
sixthrow2.innerHTML = "Friedrich Dürrenmatt" // td cella értékadás
sixthrow.appendChild(sixthrow2) // cella hozzáfűzése az hatodik sorhoz

const sixthrow3 = document.createElement('td') // a második td cella létrehozás
sixthrow3.innerHTML = "A fizikusok" // td cella értékadás
sixthrow.appendChild(sixthrow3) // cella hozzáfűzése az hatodik sorhoz

tbody.appendChild(sixthrow) // a tbodyhoz hozzáfűzzük a hatodik sorunkat 