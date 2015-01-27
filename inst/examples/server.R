library(shiny)
library(rdatamaps)


server = function(input, output, session) {
observe ({
  if(is.null(input$map)) { return() }
  # browser()
  print(input$map$name)
})
  ##

  output$map <- renderRdatamaps({
    if(!is.null(input$integer)) {
      mult <- input$integer
      #       val <- beerData[beerData$label=="Bud Light",2]
      #       beerData[beerData$label=="Bud Light",2] <- mult*val
    }
    rdatamaps(
      data = dat,
      scope = "states",
      fills = fill,
      projection = "d3.geo.mercator()",
      keyCol = "name",
      clng = -89,
      clat = 21,
      cwidth = 800,
      cheight = 400,
      width = NULL,
      height = NULL,
      dataUrl='mx_states.json')
    #   dataUrl='https://dl.dropboxusercontent.com/s/0cd691mgwv4hepz/mx_states.json'
  } )
}
