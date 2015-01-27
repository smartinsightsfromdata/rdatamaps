### datamaps for R and shiny

The rdatamaps package is an R interface to the [datamaps](http://datamaps.github.io/) library, based on d3.js. It provides facilites for visualize great choropleths. 

See [datamaps](http://datamaps.github.io/) for examples and magnificent choropleth!


#### Installation

The rdatamaps package depends on the development version of the [htmlwidgets](https://github.com/ramnathv/htmlwidgets) package so you need to install both packages. You can do this using the **devtools** package as follows:

```R
devtools::install_github(c("ramnathv/htmlwidgets", "smartinsightsfromdata/rdatamaps"))
```

#### Usage

The process of creating a choropleth for any geographical area is actually quite simple. Mark Di Marco, the creator of datamaps has a nice tutorial [here](http://datamaps.markmarkoh.com/using-custom-map-data-w-datamaps/).

To start to use this library I suggest to study the examples.  I plan to prepare a blog as soon as I'll have time -:)


See the examples in ./inst/examples.