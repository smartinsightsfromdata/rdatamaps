library(shiny)
library(rdatamaps)
# require(magrittr)
# require(dplyr)


ui = shinyUI(fluidPage(
  fluidRow(  column(3,sliderInput("integer", "Multiplier:",
                                  min=1, max=5, value=1)),
             column(6,
                    rdatamaps::rdatamapsOutput('map'))
             
  )))