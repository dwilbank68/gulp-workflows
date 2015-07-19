$ = require 'jquery'

do fill = (item = 'The most creaky minds in Art') ->
  $('.tagline').append '#{item}'
fill