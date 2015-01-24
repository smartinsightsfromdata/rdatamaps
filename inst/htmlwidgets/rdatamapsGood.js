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
//
// PJM -- call datamaps with JQuery
// options parameter to be supplied e.g. $('#'+el.id).datamaps(options);
//$('#'+el.id).datamaps();
//
var election = new Datamap(
  {
    element: el,
    scope: 'world',
    projection: 'mercator',
    fills: {
        defaultFill: '#afa99a',
        Overdue: '#990000',
        Acknowledged: '#80298C',
        Impending: '#FDCD08',
        Active: '#5A9942',
        Completed: '#4863AD',
        UNKNOWN: 'rgb(0,0,0)'
    },
    geographyConfig: {
        highlightBorderColor: '#7d7d7d',
        highlightBorderWidth: 1,
        popupTemplate: function (geo, data) {
            if ( !data ) return;
            return ['<div class="hoverinfo"><strong>',
                '' + geo.properties.name,
                ': ' + data.Tasks,
                '</strong></div>'].join('');
        }
    },
    data: {
        AUS: {
            fillKey: 'Overdue',
            Milestones: 100,
            Tasks: 487
        },
        USA: {
            fillKey: 'Active'
        },
        IND: {
            fillKey: 'Acknowledged'
        },
        RUS: {
            fillKey: 'Impending'
        },
        FRA: {
            fillKey: 'Completed'
        }
    }
});
election.legend();
},



  resize: function(el, width, height, instance) {

  }

});

