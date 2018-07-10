/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  'use strict';

  // Make the dashboard widgets sortable Using jquery UI
  $('.connectedSortable').sortable({
    placeholder         : 'sort-highlight',
    connectWith         : '.connectedSortable',
    handle              : '.box-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex              : 999999
  });
  $('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');


  
  var ctx = document.getElementById("bar-chart-grouped").getContext('2d');
  var myChart = new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["0-30", "30-60", "60-90 dias"],
      datasets: [
        {
          label: "Anticarsia gemmatalis",
          backgroundColor: "#1048A9",
          data: [10, 20, 30]
        }, {
          label: "Chrysodexis includens",
          backgroundColor: "#A6120A",
          data: [20, 30, 40]
        },
        {
          label: "Spodoptera spp",
          backgroundColor: "#00B74A",
          data: [30, 40, 50]
        }, {
          label: "Grupo Heliothinae",
          backgroundColor: "#FFCB1E",
          data: [40, 50, 60]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Título'
      },
      scales: {
        yAxes: [{
          ticks: {

            min: 0,
            max: 100,
            callback: function (value) { return value + "%" }
          },
          scaleLabel: {
            display: true,
            labelString: "Percentage"
          }
        }]
      }
    }
  });


  var ctx = document.getElementById("pie-chart").getContext('2d');
  var myChart = new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Anticarsia gemmatalis", "Chrysodexis includens", "Spodoptera spp", "Grupo Heliothinae"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#1048A9", "#A6120A", "#00B74A", "#FFCB1E"],
        data: [1000, 5267, 734, 784]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Titulo'
      }
    }
  });


  var ctx = document.getElementById("pie-chart2").getContext('2d');
  var myChart = new Chart(document.getElementById("pie-chart2"), {
    type: 'pie',
    data: {
      labels: ["Anticarsia gemmatalis", "Chrysodexis includens", "Spodoptera spp", "Grupo Heliothinae"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#1048A9", "#A6120A", "#00B74A", "#FFCB1E"],
        data: [2478, 5267, 734, 784]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Titulo'
      }
    }
  });




});
