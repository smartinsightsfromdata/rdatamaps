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

var chartParams = {
 element: el,
width:    x.width,
height:   x.height,
scope: x.scope,
done : function(datamap) {
  datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
    Shiny.onInputChange(el.id, {
  name: geography.properties.name
  , '.nonce': Math.random()
});
  });
  },
fills: x.fills,
data: x.data,
geographyConfig: {
highlightBorderColor: '#07F5F5',
highlightBorderWidth: 1,
popupTemplate: function (geo, data) {
        if ( !data ) return;
        return ['<div class="hoverinfo"><strong>',
            x.popup + geo.properties.name,
            ': ' + eval(x.popupVar),
            '</strong></div>'].join('');
},
 dataUrl: x.dataUrl,
},
setProjection:  function( element, options ) {
   var projection, path;
   projection = eval(x.projection)  // d3.geo.mercator()
    .center([x.clng, x.clat]).scale(element.offsetWidth)
    .scale(x.scale)
    .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

   path = d3.geo.path().projection( projection );
   return {path: path, projection: projection};
    } ,
id: el
}

function sortByProperty(property) {
    'use strict';
    return function (a, b) {
        var sortStatus = 0;
        if (a[property] < b[property]) {
            sortStatus = -1;
        } else if (a[property] > b[property]) {
            sortStatus = 1;
        }

        return sortStatus;
    };
}

// sorting the data is not really required it just lists the data by state and looks neater when debugging
var tmp = HTMLWidgets.dataframeToD3(x.data).sort(sortByProperty('states'));

/*
Pass the JSON data grouped by and by what attribute.
After assembling new JSON the original attribute is removed.
*/
function groupBy(jsondata,attr){
    var sum ={};

    jsondata.forEach( function(obj){
         sum[obj[attr]] = obj;
         delete sum[obj[attr]][attr];
    });
    return sum;
}

// pass the sorted JSON and the attribute to be grouped by, in this case it is "states".
var groupedByJson = groupBy(tmp,x.keyCol);


// change the original data for the new grouped by data
chartParams.data = groupedByJson;

if (el.hasChildNodes()) {
   $(el).empty();
}
//console.log('chartParams '+ JSON.stringify(chartParams));
var map = new Datamap(chartParams);
map.legend();

},



  resize: function(el, width, height, instance) {

  }

});

