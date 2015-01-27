library(dplyr)


hom <- read.csv("./hom.csv", stringsAsFactors=FALSE)
hom$rate <- round(hom$rate,3)

cuts <- 6
dat <- transform(hom, fillKey = cut(rate, breaks = cuts, dig.lab = 2))
dat$states <- dat$name
keyNames <- levels(dat$fillKey)

fill <- setNames( RColorBrewer::brewer.pal(cuts, 'YlOrRd'), keyNames)


