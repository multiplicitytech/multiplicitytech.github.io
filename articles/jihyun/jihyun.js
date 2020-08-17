//define some sample data
var tabledata = [
    {id:1, country:"South Korea", map:"1", traffic:"", drive:"", walk:""},
    {id:2, country:"US", map:"1", traffic:"1", drive:"1", walk:"1"},
    {id:3, country:"UK", map:"1", traffic:"1", drive:"1", walk:"1"},
    {id:4, country:"India", map:"1", traffic:"1", drive:"1", walk:"1"},
  {id:5, country:"China", map:"1", traffic:"", drive:"1", walk:"1"},
  {id:6, country:"Russia", map:"1", traffic:"1", drive:"1", walk:"1"}
];
//create Tabulator on DOM element with id "example-table"
var table = new Tabulator("#example-table", {
    // height:'100%', // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data:tabledata, //assign data to table
  layout:"fitColumns", //fit columns to width of table (optional)
  rowFormatter:function(row){
       if(row.getData().country == "South Korea"){
           row.getElement().style.backgroundColor = "#ffeac5";
       }
   },
    columns:[ //Define Table Columns
        {title:"Country <br> ", field:"country", width:100},
        {title:"Map <br> Tiles", field:"map", hozAlign:"center", formatter:"tickCross"},
        {title:"Traffic <br> Layer", field:"traffic", formatter:"tickCross", hozAlign:"center"},
    {title:"Driving <br> Directions", field:"drive", formatter:"tickCross", hozAlign:"center"},
    {title:"Walking <br> Directions", field:"walk", formatter:"tickCross", hozAlign:"center"}
    ],
});

$(document).ready(function() {
   $('#one').hover(function() {
      $('.change').html(' <p class="breakdown" style="color:#2b8db5;"><b>Baemin owns 55.7% of the market share.</b></p>'); 
   });
   $('#two').hover(function() {
      $('.change').html('<p class="breakdown" style="color:#c51928;"><b>Yogiyo owns 33.7% of the market share.</b></p>'); 
   });
   $('#three').hover(function() {
      $('.change').html('<p class="breakdown" style="color:#ffa300;"><b>Baedaltong owns 10.8% of the market share.</b></p>'); 
   });
   $('#def').hover(function() {
    // $('.SOC').html('<p  class="breakdown" style="color:#0600ff; ">What is Social Overhead Capital (SOC)? Definition?</p>'); 
    $('.change2').html('<p style="color:#0600ff;"><b>A form of economic infrastructure; the source of certain “basic” services required in the production of virtually all commodities</b></p>'); 
 });
 $('#char').hover(function() {
    // $('.SOC').html('<p class="breakdown" style="color:#0600ff;">What is Social Overhead Capital (SOC)? Characteristics?</p>'); 
    $('.change2').html('<p style="color:#0600ff;"><b>External economies, high barrier of entry due to massive upfront investment, and an importance in facilitating economic development as a whole</b></p>'); 
 });
 $('#exp').hover(function() {
    // $('.SOC').html('<p class="breakdown" style="color:#0600ff;">What is Social Overhead Capital (SOC)? Examples?</p>'); 
    $('.change2').html('<p style="color:#0600ff;"><b>Highways, schools, roads, public parks, and hospitals</b></p>'); 
 });

});



