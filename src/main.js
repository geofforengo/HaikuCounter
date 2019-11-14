import { Haiku } from './../src/haiku.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#triangle-form').submit(function(event) {
    event.preventDefault();
    // var sideA = parseInt($("#sideA").val());
    // var sideB = parseInt($("#sideB").val());
    // var sideC = parseInt($("#sideC").val());
    // let myTriangle = new Triangle(sideA, sideB, sideC);
    // $('#output').text(myTriangle.checkType());

  });
});
