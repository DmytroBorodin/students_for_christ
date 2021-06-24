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
  longitude: 10.534
};

let ids = ["FI", "DK", "SE", "DE", "NL", "BE", "FR", "ES", "HR", "IT", "BA", "HU", "AT", "CZ", "AL", "GR", "IE"];

/* Connected countries */
let series1 = chart.series.push(new am4maps.MapPolygonSeries());
series1.name = "Northern Europe";
series1.useGeodata = true;
series1.include = ids;
series1.mapPolygons.template.tooltipText = "{name}";
series1.mapPolygons.template.fill = gradient;
series1.fill = gradient;

/* Configure label series */
let labelSeries = chart.series.push(new am4maps.MapImageSeries());
let labelTemplate = labelSeries.mapImages.template.createChild(am4core.Label);
labelTemplate.horizontalCenter = "middle";
labelTemplate.verticalCenter = "middle";
labelTemplate.fontSize = 15;
labelTemplate.fontFamily = "Futura PT";
labelTemplate.interactionsEnabled = false;
labelTemplate.nonScaling = true;

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
  for(let i = 0; i < ids.length; i++){
    let polygon = series1.getPolygonById(ids[i]);
    if(polygon){
        let label = labelSeries.mapImages.create();
        let countryId = polygon.dataItem.dataContext.id;
        let country = countries.find((obj) => countryId === obj.id);
        let countryName = country.country;
        label.latitude = polygon.visualLatitude;
        label.longitude = polygon.visualLongitude;
        if (country.id === 'ES') {
            label.latitude = 40;
            label.longitude = -4;
        }
        if (country.id === 'HR') {
            label.latitude = 45.4
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
series2.include = ["LI", "LT", "PL", "SK", "SI", "CH", "LV", "EE", "MD", "BY", "UA", "RU", "AZ", "GE", "AM", "BG", "XK", "MK", "ME", "RO", "RS", "LU", "MC", "GB", "PT", "AD"];
series2.mapPolygons.template.fill = am4core.color("rgba(196, 196, 196, 0.5)");
series2.fill = am4core.color("rgba(196, 196, 196, 0.5)");

