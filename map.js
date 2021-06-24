var chart = am4core.create("chartdiv", am4maps.MapChart);

/* Set map definition */
chart.geodata = am4geodata_worldLow;

/* Set projection */
chart.projection = new am4maps.projections.Mercator();
chart.homeZoomLevel = 3.55;
chart.homeGeoPoint = {
  latitude: 56.238,
  longitude: 1.39
};

/* Northern Europe */
var series1 = chart.series.push(new am4maps.MapPolygonSeries());
series1.name = "Northern Europe";
series1.useGeodata = true;
series1.include = ["FI", "DK", "SE", "NO", "LT", "LV", "EE", "IS"];
series1.mapPolygons.template.tooltipText = "{name}";
series1.mapPolygons.template.fill = am4core.color("#96BDC6");
series1.fill = am4core.color("#96BDC6");

/* Central Europe */
var series2 = chart.series.push(new am4maps.MapPolygonSeries());
series2.name = "Central Europe";
series2.useGeodata = true;
series2.include = ["AT", "CZ", "DE", "HU", "LI", "PL", "SK", "SI", "CH"];
series2.mapPolygons.template.tooltipText = "{name}";
series2.mapPolygons.template.fill = am4core.color("#81968F");
series2.fill = am4core.color("#81968F");

/* Eastern Europe */
var series3 = chart.series.push(new am4maps.MapPolygonSeries());
series3.name = "Eastern Europe";
series3.useGeodata = true;
series3.include = ["MD", "BY", "UA", "RU", "AZ", "GE", "AM"];
series3.mapPolygons.template.tooltipText = "{name}";
series3.mapPolygons.template.fill = am4core.color("#CFB9A5");
series3.fill = am4core.color("#CFB9A5");

/* Southeast Europe */
var series4 = chart.series.push(new am4maps.MapPolygonSeries());
series4.name = "Southeast Europe";
series4.useGeodata = true;
series4.include = ["AL", "BA", "BG", "HR", "GR", "XK", "MK", "ME", "RO", "RS"];
series4.mapPolygons.template.tooltipText = "{name}";
series4.mapPolygons.template.fill = am4core.color("#E8CCBF");
series4.fill = am4core.color("#E8CCBF");

/* Western Europe */
var series5 = chart.series.push(new am4maps.MapPolygonSeries());
series5.name = "Western Europe";
series5.useGeodata = true;
series5.include = ["BE", "FR", "IE", "IT", "LU", "MC", "NL", "GB", "ES", "PT", "AD"];
series5.mapPolygons.template.tooltipText = "{name}";
series5.mapPolygons.template.fill = am4core.color("#99C78F");
series5.fill = am4core.color("#99C78F");
