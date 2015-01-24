library(shiny)
library(rdatamaps)
require(magrittr)
require(dplyr)


ui = shinyUI(fluidPage(
  fluidRow(  column(3,sliderInput("integer", "Multiplier:",
                                  min=1, max=5, value=1)),
    column(6,
  rdatamaps::rdatamapsOutput('map'))

)))

server = function(input, output, session) {

##
  output$map <- renderRdatamaps({
    if(!is.null(input$integer)) {
      mult <- input$integer
#       val <- beerData[beerData$label=="Bud Light",2]
#       beerData[beerData$label=="Bud Light",2] <- mult*val
    }
rdatamaps(
  dataUrl='https://dl.dropboxusercontent.com/s/0cd691mgwv4hepz/mx_states.json')

 } )
}


shinyApp(ui = ui, server = server)
