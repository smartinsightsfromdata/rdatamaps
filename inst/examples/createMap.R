library(rdatamaps)
library(dplyr)

hom <- read.csv("./inst/examples/hom.csv", stringsAsFactors=FALSE)
hom$rate <- round(hom$rate,3)

dat <- transform(hom, fillKey = cut(rate, breaks = 5, dig.lab = 2))
dat$states <- dat$name
keyNames <- levels(dat$fillKey)

fills <- setNames( c(RColorBrewer::brewer.pal(5, 'YlOrRd')
   , 'red'), c(levels(dat$fillKey), 'defaultFill'))

fill <- fills[1:5]
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
dataUrl='https://dl.dropboxusercontent.com/s/0cd691mgwv4hepz/mx_states.json'
)
#   dataUrl='mx_states.json'


