#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
rdatamaps <- function(message=NULL, dataUrl= NULL, width = NULL, height = NULL) {
  # forward options using x
  jsonstr1 <- ' {
  "state_code": [ 1 ],
  "year": [ 2013 ],
  "type": [ "DOLOSOS" ],
  "total": [     39 ],
  "population": [ 1.253e+06 ],
  "rate": [ 3.1126 ],
  "name": [ "Aguascalientes" ],
  "fillKey": [ "(1.94,7.16]" ]
}'
  jsonstr2 <- ' {
  "state_code": [ 2 ],
  "year": [ 2013 ],
  "type": [ "DOLOSOS" ],
  "total": [    775 ],
  "population": [ 3.3832e+06 ],
  "rate": [ 22.907 ],
  "name": [ "Baja California" ],
  "fillKey": [ "(22.8,59.2]" ]
}'
  df1 <- data.frame(jsonlite::fromJSON(jsonstr1),stringsAsFactors =F)
  df2 <- data.frame(jsonlite::fromJSON(jsonstr2),stringsAsFactors =F)
  df <- rbind(df1,df2)
  df$states <- df$name

  x <- list(params = list(
    scope = 'states',
    projection = 'mercator',
    fills = list(
      '(1.94,7.16]'= "#FFFFB2",
      "(7.16,10.8]"= "#FECC5C",
      "(10.8,14.3]"= "#FD8D3C",
      "(14.3,22.8]"= "#F03B20",
      "(22.8,59.2]"= "#BD0026"
    )),
    dataUrl = dataUrl,
    data=df )

  # create widget
  htmlwidgets::createWidget(
    name = 'rdatamaps',
    x,
    width = width,
    height = height,
    package = 'rdatamaps'
  )
}

#' Widget output function for use in Shiny
#'
#' @export
rdatamapsOutput <- function(outputId, width = '100%', height = '400px'){
  print("shinyWidgetOutput")
  shinyWidgetOutput(outputId, 'rdatamaps', width, height, package = 'rdatamaps')
}

#' Widget render function for use in Shiny
#'
#' @export
renderRdatamaps <- function(expr, env = parent.frame(), quoted = FALSE) {
 # print("shinyRenderWidget")
  if (!quoted) { expr <- substitute(expr) } # force quoted
  shinyRenderWidget(expr, rdatamapsOutput, env, quoted = TRUE)
}
