#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
rdatamaps <- function(
  data = NULL,
  scope = NULL,
  fills = NULL,
  projection = NULL,
  dataUrl = NULL,
  keyCol = NULL,
  clng = NULL,
  clat = NULL,
  cwidth = NULL,
  cheight = NULL,
  popup = NULL,
  popupVar = NULL,
  width = NULL,
  height = NULL) {


  x <- list(
    scope = scope,
    projection = projection,
    fills = fills,
    dataUrl = dataUrl,
    keyCol = keyCol,
    clng = clng,
    clat = clat,
    width = cwidth,
    height = cheight,
    data= data,
    popup = popup,
    popupVar = paste0("data.",popupVar))

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
rdatamapsOutput <- function(outputId, width = '100%', height = '100%'){

  shinyWidgetOutput(outputId, 'rdatamaps', width, height, package = 'rdatamaps')
}

#' Widget render function for use in Shiny
#'
#' @export
renderRdatamaps <- function(expr, env = parent.frame(), quoted = FALSE) {

  if (!quoted) { expr <- substitute(expr) } # force quoted
  shinyRenderWidget(expr, rdatamapsOutput, env, quoted = TRUE)
}
