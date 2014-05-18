# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

change_selected = () ->
    $('.selected').removeClass('selected');
    $('input:checked').parents('li').addClass('selected');

$(() ->
    change_selected()
    $('.radio').on('click', change_selected);
)
