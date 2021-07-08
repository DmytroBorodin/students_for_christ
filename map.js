var chart = am4core.create("chartdiv", am4maps.MapChart);

/* Set map definition */
chart.geodata = am4geodata_worldHigh;

/* countries background linear gradient*/
let gradient = new am4core.LinearGradient();
gradient.addColor(am4core.color("#F68857"));
gradient.addColor(am4core.color("#F1DA67"));

/* Set projection */
chart.projection = new am4maps.projections.Mercator();
chart.chartContainer.wheelable = false;
chart.homeZoomLevel = 3.854;
chart.homeGeoPoint = {
  latitude: 56.665,
  longitude: 10.534,
};
chart.tooltip.label.wrap = false;

let ids = [
  "FI",
  "DK",
  "SE",
  "DE",
  "NL",
  "BE",
  "FR",
  "ES",
  "HR",
  "IT",
  "BA",
  "HU",
  "AT",
  "CZ",
  "AL",
  "GR",
  "IE",
];

/* Connected countries */
let series1 = chart.series.push(new am4maps.MapPolygonSeries());
series1.name = "Northern Europe";
series1.useGeodata = true;
series1.include = ids;
// series1.mapPolygons.template.tooltipText = `{name} : {groupName}`;
series1.mapPolygons.template.fill = gradient;
series1.fill = gradient;
series1.mapPolygons.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
series1.data = [
  {
    id: "AL",
    countryName: "Albania",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1525280882386-VRF32Z95VZKOYMKS5XQ8/Albaniaflag.gif?format=300w",
    tooltipTemplate: `
    <h2 class="country__name__title">Albania</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text">Name: S4C Durrës</p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:Elihu@live.it" class="inline__link">Emanuele Mango</a>, <a href="mailto:denymazz@gmail.com" class="inline__link">Denise Mazzoleni</a></p>
        </div>
        `,
  },
  {
    id: "AT",
    countryName: "Austria",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1484143722770-4E0UJCCKJ1I3ZCRSLQ3I/218px-Flag_of_Austria.svg.png?format=300w",
    tooltipTemplate: `
        <h2 class="country__name__title">Austria</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:alan.ambrose@agmd.org" class="inline__link">Alan & Michelle Ambrose</a></p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text">Vienna Christian Center Young Adults</p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:austin.henderson@ma.agmd.org" class="inline__link">Austin & Tsehaynesh Henderson</a></p>
        </div>
        `,
  },
  {
    id: "BE",
    countryName: "Belgium",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1487853185540-78EA1E5X3ZFC21I6KI59/image-asset.png?format=300w",
    tooltipTemplate: `
        <h2 class="country__name__title">Belgium</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text"><a href="http://www.sfcbelgium.net/" class="inline__link">SfC Belgium</a></p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="http://www.sfcbelgium.net" class="inline__link">Annayiz Goutier</a></p>
        </div>
        `,
  },
  {
    id: "BA",
    countryName: "Bosnia and Herzegovina",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1586535679549-RI5T4L8ON21D11RPG6SA/bosnia-herzegovina.jpg?format=300w",
    tooltipTemplate: `
        <h2 class="country__name__title">Bosnia and Herzegovina</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:curthobbs@gmail.com" class="inline__link">Curt and Sara Hobbs</a></p>
        </div>
        `,
  },
  {
    id: "HR",
    countryName: "Croatia",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1525290308678-G1BLCRONWKULETN688PC/croatia.jpg?format=300w",
    tooltipTemplate: `
        <h2 class="country__name__title">Croatia</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:stephen.turley@agmd.org" class="inline__link">Steve</a> & <a href=href="mailto:deanne.turley@agmd.org" class="inline__link">Daenan</a> Turley</p>
        </div>
        `,
  },
  {
    id: "CZ",
    countryName: "Czech Republic",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1484143876575-K24T9IOZJ8NJKUOTT475/image-asset.png?format=300w",
    tooltipTemplate: `
        <h2 class="country__name__title">Czech Republic</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text">Nová Generace</p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:posp.pavel@gmail.com" class="inline__link">Pavel & Kristina Pospisil</a></p>
        </div>
        `,
  },
  {
    id: "DK",
    countryName: "Denmark",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1484144364202-HJIV0Z6TCEKXA8I6X9MP/Flag_of_Denmark.svg.png?format=300w",
    tooltipTemplate: `
        <h2 class="country__name__title">Denmark</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text">Crossroads KBH</p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:danyelachrisan@gmail.com" class="inline__link">Daniela Crisan</a></p>
        </div>
        `,
  },
  {
    id: "FI",
    countryName: "Finland",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1521453493361-56Q9RFUAQ4OPWHI8NFUF/finish.png?format=300w",
    tooltipTemplate: `
        <h2 class="country__name__title">Finland</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text"><a href="https://www.luminacampus.fi/" class="inline__link">Lumina Campus (Jyväskylä)</a></p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="https://www.luminacampus.fi/" class="inline__link">Miika</a> & <a href="https://www.luminacampus.fi/" class="inline__link">Merja</a> Toukola</p>
        </div>`,
  },
  {
    id: "FR",
    countryName: "France",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1484144394904-UC08ALMA6YB7LG8N1ITG/image-asset.png?format=300w",
    tooltipTemplate: `
        <h2 class="country__name__title">France</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text"><a href="https://remixetudiants.com" class="inline__link">Remix – Grenoble</a></p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:remixgrenoble@gmail.com" class="inline__link">Mark & Dalene Good</a></p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text"><a href="http://www.thebridgeparis.com/" class="inline__link">The Bridge – Paris</a></p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:suzannespolarich@gmail.com" class="inline__link">Suzanne Spolarich</a></p>
        </div>
        `,
  },
  {
    id: "DE",
    countryName: "Germany",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1525280506576-A7IYKO9BOZAFUK64MP3Q/image-asset.png?format=300w",
    tooltipTemplate: `
        <h2 class="country__name__title">Germany</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text"><a href="http://www.studenten-fuer-christus.de" class="inline__link">Studenten für Christus</a></p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto://john.koeshall@sfcd.de" class="inline__link">John & Kristen Koeshall</a></p>
        </div>
        `,
  },
  {
    id: "GR",
    countryName: "Greece",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1525280527416-QHCZROHZMS2KVPYFIHAU/greekflag.jpg?format=300w",
    tooltipTemplate: `
        <h2 class="country__name__title">Greece</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:briggsingreece@gmail.com" class="inline__link">Kennon & Amanda Briggs</a></p>
        </div>
        `,
  },
  {
    id: "HU",
    countryName: "Hungary",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1487853259263-ONUC74RUJ3JJK44G1VBB/image-asset.png?format=300w",
    tooltipTemplate: `
        <h2 class="country__name__title">Hungary</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text"><a href="https://www.facebook.com/riversideexit" class="inline__link">EXIT</a></p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:riversideexitgroup@gmail.com" class="inline__link">Elyse Hill</a></p>
        </div>
        `,
  },
  {
    id: "IE",
    countryName: "Ireland",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1487853627329-QDGOM96BC4MXPXN8M407/image-asset.png?format=300w",
    tooltipTemplate: `
        <h2 class="country__name__title">Ireland</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text">SfC Ireland</p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:naomi.r.carson@gmail.com" class="inline__link">Naomi Carson</a></p>
        </div>
        `,
  },
  {
    id: "IT",
    countryName: "Italy",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1484144834998-EXJV0ZKWBTX7YU7NOFC7/image-asset.png?format=300w",
    tooltipTemplate: `
        <h2 class="country__name__title">Italy</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text">SfC Italy</p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:kurtis.denton@agmd.org" class="inline__link">Kurtis & Amy Denton</a></p>
        </div>
        `,
  },
  {
    id: "NL",
    countryName: "Netherlands",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1484144933334-J9B0BD6KK6605OC1NQUK/218px-Flag_of_the_Netherlands.svg.png?format=300w",
    tooltipTemplate: `
        <h2 class="country__name__title">Netherlands</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text"><a href="http://damascusroadic.com/drum/" class="inline__link">DR:UM (Maastricht)</a></p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto://john.koeshall@sfcd.de" class="inline__link">Bruno</a> & <a href="mailto://john.koeshall@sfcd.de" class="inline__link">Aline</a> Lubascher</p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text"><a href="https://www.studentsforchrist.nl" class="inline__link">SFC-Rotterdam</a></p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:joshallenhomes@gmail.com" class="inline__link">Josh & Angela Allen</a></p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text">SFC-Utrecht</p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:austin.mangham@agmd.org" class="inline__link">Austin & Amy Mangham</a></p>
        </div>
        `,
  },
  {
    id: "ES",
    countryName: "Spain",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1484145100361-ZVTVD2EI4LC37Q1Y10E3/image-asset.png?format=300w",
    tooltipTemplate: `
        <h2 class="country__name__title">Spain</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text"><a href="http://raicesgranada.org/" class="inline__link">Raíces-Granada</a></p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:shawn.galyen@gmail.com" class="inline__link">Shawn & Deborah Galyen</a></p>
        </div>
        `,
  },
  {
    id: "SE",
    countryName: "Sweden",
    flagURL:
      "https://images.squarespace-cdn.com/content/v1/5873d0bcb3db2b7d5e37770e/1484145158522-T41WKKDLKJW3QXOZ8N1R/image-asset.png?format=300w",
    tooltipTemplate: `
        <h2 class="country__name__title">Sweden</h2>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Group Name:</h3>
            <p class="tooltip__text"><a href="http://mosaikstudent.se/" class="inline__link">Mosaik</a></p>
        </div>
        <div class="tooltip__block">
            <h3 class="tooltip__title">Contact Person:</h3>
            <p class="tooltip__text"><a href="mailto:mosaik@pingstung.se" class="inline__link">Brandon & Angela Koenes</a></p>
        </div>
        `,
  },
];

series1.tooltip.label.interactionsEnabled = true;
series1.tooltip.keepTargetHover = true;
series1.calculateVisualCenter = true;
series1.mapPolygons.template.tooltipPosition = "fixed";

let poligonTemplate = series1.mapPolygons.template;
poligonTemplate.tooltipHTML = `
<div class="tooltip__wrapper">
        <img src="{flagURL}" alt="" class="flag__icon">
        <div class="tooltip__container">{tooltipTemplate}</div>
    </div>
`;

series1.tooltip.getFillFromObject = false;
series1.tooltip.background.fill = am4core.color("rgba(0, 0, 0, 0)");
series1.tooltip.background.stroke = am4core.color("rgba(0, 0, 0, 0)");
series1.tooltip.pointerOrientation = "vertical";
let shadow = series1.tooltip.background.filters.getIndex(0);
shadow.dx = 0;
shadow.dy = 0;
shadow.blur = 0;

/* Configure label series */
let labelSeries = chart.series.push(new am4maps.MapImageSeries());
let labelTemplate = labelSeries.mapImages.template.createChild(am4core.Label);
labelTemplate.horizontalCenter = "middle";
labelTemplate.verticalCenter = "middle";
labelTemplate.fontSize = 15;
labelTemplate.fontFamily = "Futura PT";
labelTemplate.interactionsEnabled = false;
labelTemplate.nonScaling = true;
labelSeries.zIndex = 2;

let countries = [
  {
    country: "Finland",
    id: "FI",
  },
  {
    country: "Sweden",
    id: "SE",
  },
  {
    country: "Italy",
    id: "IT",
  },
  {
    country: "Denmark",
    id: "DK",
  },
  {
    country: "Germany",
    id: "DE",
  },
  {
    country: "Netherland",
    id: "NL",
  },
  {
    country: "Ireland",
    id: "IE",
  },
  {
    country: "Belgium",
    id: "BE",
  },
  {
    country: "France",
    id: "FR",
  },
  {
    country: "Spain",
    id: "ES",
  },
  {
    country: "Croatia",
    id: "HR",
  },
  {
    country: "Austria",
    id: "AT",
  },
  {
    country: "Czech Republic",
    id: "CZ",
  },
  {
    country: "Bosnia and Herzegovina",
    id: "BA",
  },
  {
    country: "Hungary",
    id: "HU",
  },
  {
    country: "Albania",
    id: "AL",
  },
  {
    country: "Greece",
    id: "GR",
  },
];

// Set up label series to populate
series1.events.on("inited", function () {
  for (let i = 0; i < ids.length; i++) {
    let polygon = series1.getPolygonById(ids[i]);
    if (polygon) {
      let label = labelSeries.mapImages.create();
      let countryId = polygon.dataItem.dataContext.id;
      let country = countries.find((obj) => countryId === obj.id);
      let countryName = country.country;
      label.latitude = polygon.visualLatitude;
      label.longitude = polygon.visualLongitude;
      if (country.id === "ES") {
        label.latitude = 40;
        label.longitude = -4;
      }
      if (country.id === "HR") {
        label.latitude = 45.4;
        label.longitude = polygon.visualLongitude;
      }
      label.children.getIndex(0).text = countryName;
    }
  }
});

/* Unconnected countries */
var series2 = chart.series.push(new am4maps.MapPolygonSeries());
series2.name = "Central Europe";
series2.useGeodata = true;
series2.include = [
  "LI",
  "LT",
  "PL",
  "SK",
  "SI",
  "CH",
  "LV",
  "EE",
  "MD",
  "BY",
  "UA",
  "RU",
  "AZ",
  "GE",
  "AM",
  "BG",
  "XK",
  "MK",
  "ME",
  "RO",
  "RS",
  "LU",
  "MC",
  "GB",
  "PT",
  "AD",
];
series2.mapPolygons.template.fill = am4core.color("rgba(196, 196, 196, 0.5)");
series2.fill = am4core.color("rgba(196, 196, 196, 0.5)");

/* connectect countries mobile */

let countriesList = document.querySelector(".connected__countries__mobile");

function createElement(el, className) {
  let newEl = document.createElement(el);
  newEl.classList.add(className);
  return newEl;
}

series1.data.forEach((dataObj) => {
  let infoBlock = createElement("div", "tooltip__wrapper");
  let flagImg = createElement("img", "flag__icon");
  flagImg.setAttribute("src", `${dataObj.flagURL}`);
  let infoContainer = createElement("div", "tooltip__container");
  infoContainer.innerHTML = dataObj.tooltipTemplate;
  infoBlock.append(flagImg);
  infoBlock.append(infoContainer);
  countriesList.append(infoBlock);
});
