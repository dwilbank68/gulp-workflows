var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append('#{item}');
})('The most creaky minds in Art');

fill;
