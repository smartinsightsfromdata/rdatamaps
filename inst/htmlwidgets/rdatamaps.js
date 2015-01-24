HTMLWidgets.widget({

  name: 'rdatamaps',

  type: 'output',

  initialize: function(el, width, height) {
    return {
  //   pie: pie
      // TODO: add instance fields as required
    }

  },

  renderValue: function(el, x, instance) {
 //   console.log(el);
//   console.log('x =' +JSON.stringify(x));
 //     console.log('x =' +JSON.stringify(x.dataUrl));
//
// PJM -- call datamaps with JQuery
// options parameter to be supplied e.g. $('#'+el.id).datamaps(options);
//$('#'+el.id).datamaps();
// //    dataUrl: "https://dl.dropboxusercontent.com/s/0cd691mgwv4hepz/mx_states.json"

  var chartParams = {
 "element": el,
"width":    800,
"height":    400,
"scope": "states",
"fills": {
 "(1.94,7.16]": "#FFFFB2",
"(7.16,10.8]": "#FECC5C",
"(10.8,14.3]": "#FD8D3C",
"(14.3,22.8]": "#F03B20",
"(22.8,59.2]": "#BD0026"
},
 data: {
 "Aguascalientes": {
 "state_code": [ 1 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [     39 ],
"population": [ 1.253e+06 ],
"rate": [ 3.1126 ],
"name": [ "Aguascalientes" ],
"fillKey": [ "(1.94,7.16]" ]
},
"Baja California": {
 "state_code": [ 2 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    775 ],
"population": [ 3.3832e+06 ],
"rate": [ 22.907 ],
"name": [ "Baja California" ],
"fillKey": [ "(22.8,59.2]" ]
},
"Baja California Sur": {
 "state_code": [ 3 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [     56 ],
"population": [ 7.1915e+05 ],
"rate": [ 7.7869 ],
"name": [ "Baja California Sur" ],
"fillKey": [ "(7.16,10.8]" ]
},
"Campeche": {
 "state_code": [ 4 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [     67 ],
"population": [ 8.8087e+05 ],
"rate": [ 7.6061 ],
"name": [ "Campeche" ],
"fillKey": [ "(7.16,10.8]" ]
},
"Chiapas": {
 "state_code": [ 7 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    540 ],
"population": [ 5.1219e+06 ],
"rate": [ 10.543 ],
"name": [ "Chiapas" ],
"fillKey": [ "(7.16,10.8]" ]
},
"Chihuahua": {
 "state_code": [ 8 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [   1443 ],
"population": [ 3.6375e+06 ],
"rate": [  39.67 ],
"name": [ "Chihuahua" ],
"fillKey": [ "(22.8,59.2]" ]
},
"Coahuila de Zaragoza": {
 "state_code": [ 5 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    645 ],
"population": [ 2.8916e+06 ],
"rate": [ 22.306 ],
"name": [ "Coahuila de Zaragoza" ],
"fillKey": [ "(14.3,22.8]" ]
},
"Colima": {
 "state_code": [ 6 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    178 ],
"population": [ 6.988e+05 ],
"rate": [ 25.472 ],
"name": [ "Colima" ],
"fillKey": [ "(22.8,59.2]" ]
},
"Distrito Federal": {
 "state_code": [ 9 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    749 ],
"population": [ 8.8928e+06 ],
"rate": [ 8.4225 ],
"name": [ "Distrito Federal" ],
"fillKey": [ "(7.16,10.8]" ]
},
"Durango": {
 "state_code": [ 10 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    476 ],
"population": [ 1.7292e+06 ],
"rate": [ 27.528 ],
"name": [ "Durango" ],
"fillKey": [ "(22.8,59.2]" ]
},
"Guanajuato": {
 "state_code": [ 11 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    641 ],
"population": [ 5.7216e+06 ],
"rate": [ 11.203 ],
"name": [ "Guanajuato" ],
"fillKey": [ "(10.8,14.3]" ]
},
"Guerrero": {
 "state_code": [ 12 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [   2087 ],
"population": [ 3.5247e+06 ],
"rate": [ 59.211 ],
"name": [ "Guerrero" ],
"fillKey": [ "(22.8,59.2]" ]
},
"Hidalgo": {
 "state_code": [ 13 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    124 ],
"population": [ 2.8078e+06 ],
"rate": [ 4.4163 ],
"name": [ "Hidalgo" ],
"fillKey": [ "(1.94,7.16]" ]
},
"Jalisco": {
 "state_code": [ 14 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [   1099 ],
"population": [ 7.746e+06 ],
"rate": [ 14.188 ],
"name": [ "Jalisco" ],
"fillKey": [ "(10.8,14.3]" ]
},
"Mï¿½xico": {
 "state_code": [ 15 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [   1932 ],
"population": [ 1.6375e+07 ],
"rate": [ 11.799 ],
"name": [ "Mï¿½xico" ],
"fillKey": [ "(10.8,14.3]" ]
},
"Michoacï¿½n de Ocampo": {
 "state_code": [ 16 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    902 ],
"population": [ 4.5312e+06 ],
"rate": [ 19.906 ],
"name": [ "Michoacï¿½n de Ocampo" ],
"fillKey": [ "(14.3,22.8]" ]
},
"Morelos": {
 "state_code": [ 17 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    597 ],
"population": [ 1.8751e+06 ],
"rate": [ 31.838 ],
"name": [ "Morelos" ],
"fillKey": [ "(22.8,59.2]" ]
},
"Nayarit": {
 "state_code": [ 18 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    151 ],
"population": [ 1.1793e+06 ],
"rate": [ 12.804 ],
"name": [ "Nayarit" ],
"fillKey": [ "(10.8,14.3]" ]
},
"Nuevo Leï¿½n": {
 "state_code": [ 19 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    719 ],
"population": [ 4.9441e+06 ],
"rate": [ 14.543 ],
"name": [ "Nuevo Leï¿½n" ],
"fillKey": [ "(14.3,22.8]" ]
},
"Oaxaca": {
 "state_code": [ 20 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    536 ],
"population": [ 3.9601e+06 ],
"rate": [ 13.535 ],
"name": [ "Oaxaca" ],
"fillKey": [ "(10.8,14.3]" ]
},
"Puebla": {
 "state_code": [ 21 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    428 ],
"population": [ 6.0701e+06 ],
"rate": [ 7.0509 ],
"name": [ "Puebla" ],
"fillKey": [ "(1.94,7.16]" ]
},
"Querï¿½taro": {
 "state_code": [ 22 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    111 ],
"population": [ 1.9451e+06 ],
"rate": [ 5.7066 ],
"name": [ "Querï¿½taro" ],
"fillKey": [ "(1.94,7.16]" ]
},
"Quintana Roo": {
 "state_code": [ 23 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    214 ],
"population": [ 1.4868e+06 ],
"rate": [ 14.393 ],
"name": [ "Quintana Roo" ],
"fillKey": [ "(14.3,22.8]" ]
},
"San Luis Potosï¿½": {
 "state_code": [ 24 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    261 ],
"population": [ 2.7032e+06 ],
"rate": [ 9.6554 ],
"name": [ "San Luis Potosï¿½" ],
"fillKey": [ "(7.16,10.8]" ]
},
"Sinaloa": {
 "state_code": [ 25 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [   1208 ],
"population": [ 2.9334e+06 ],
"rate": [ 41.181 ],
"name": [ "Sinaloa" ],
"fillKey": [ "(22.8,59.2]" ]
},
"Sonora": {
 "state_code": [ 26 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    575 ],
"population": [ 2.8531e+06 ],
"rate": [ 20.154 ],
"name": [ "Sonora" ],
"fillKey": [ "(14.3,22.8]" ]
},
"Tabasco": {
 "state_code": [ 27 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    140 ],
"population": [ 2.3355e+06 ],
"rate": [ 5.9945 ],
"name": [ "Tabasco" ],
"fillKey": [ "(1.94,7.16]" ]
},
"Tamaulipas": {
 "state_code": [ 28 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    555 ],
"population": [ 3.463e+06 ],
"rate": [ 16.027 ],
"name": [ "Tamaulipas" ],
"fillKey": [ "(14.3,22.8]" ]
},
"Tlaxcala": {
 "state_code": [ 29 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [     70 ],
"population": [ 1.2435e+06 ],
"rate": [ 5.6295 ],
"name": [ "Tlaxcala" ],
"fillKey": [ "(1.94,7.16]" ]
},
"Veracruz de Ignacio de la Llave": {
 "state_code": [ 30 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    863 ],
"population": [ 7.9256e+06 ],
"rate": [ 10.889 ],
"name": [ "Veracruz de Ignacio de la Llave" ],
"fillKey": [ "(10.8,14.3]" ]
},
"Yucatan": {
 "state_code": [ 31 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [     40 ],
"population": [ 2.0653e+06 ],
"rate": [ 1.9368 ],
"name": [ "Yucatï¿½n" ],
"fillKey": [ null ]
},
"Zacatecas": {
 "state_code": [ 32 ],
"year": [ 2013 ],
"type": [ "DOLOSOS" ],
"total": [    167 ],
"population": [ 1.5507e+06 ],
"rate": [ 10.769 ],
"name": [ "Zacatecas" ],
"fillKey": [ "(7.16,10.8]" ]
}
},
        geographyConfig: {
        highlightBorderColor: '#07F5F5',
        highlightBorderWidth: 1,
        popupTemplate: function (geo, data) {
                if ( !data ) return;
                return ['<div class="hoverinfo"><strong>',
                    'Rate in ' + geo.properties.name,
                    ': ' + data.rate,
                    '</strong></div>'].join('');
        },
 dataUrl: x.dataUrl,
 dataType: 'json'
},
"setProjection":  function( element, options ) {
   var projection, path;
   projection = d3.geo.mercator()
    .center([-89, 21]).scale(element.offsetWidth)
    .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

   path = d3.geo.path().projection( projection );
   return {path: path, projection: projection};
    } ,
"id": el
}

  var map = new Datamap(chartParams);
map.legend();

  setProjection = function( element, options ) {
    var projection, path;

      projection = d3.geo.mercator()
        .scale(element.offsetWidth)
        .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

    path = d3.geo.path()
      .projection( projection );

    return {path: path, projection: projection};
  }

},



  resize: function(el, width, height, instance) {

  }

});

