$(document).ready(function() {
  var api_link = [];
  var btn = [];
  var streamer_link = [];
  var json_stream = [];
  var streamers_online = [];
  var streamers_offline = [];
  // creating an array of streamers 
  var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  //creating an array of api links for each streamer and a for loop to fill this array
  for (var i = 0; i < streamers.length; i++) {
    //creating a link for every streamer and string it in an array
    streamer_link[i] = "https://www.twitch.tv/" + streamers[i];
    //creating an api link for each streamer
    api_link[i] = "https://api.twitch.tv/kraken/streams/" + streamers[i] + "?client_id=400lkbp8cu4tw8hf3mrqqmym0vsehgb&callback=?";
    //creating buttons for all streamers when the page loads
    btn[i] = document.createElement("div");
    btn[i].className = "well";
    btn[i].id = ("button" + [i]);
    btn[i].innerHTML = ("Twitch Streamer: " + "<a href=\"" + streamer_link[i] + "\" target = \"_blank\">" + streamers[i]);
    document.getElementById("all_results").appendChild(btn[i]);
  }
  //creating a list of stream value online or offline from the JSON respond
  for (var j=0; j<7 ; j++){
  $.getJSON(api_link[0], function(json) {
    if ((JSON.stringify(json.stream)) === "null") {
      document.getElementById("button0").setAttribute("class", "well offline");
    } else {
      document.getElementById("button0").setAttribute("class", "well online");
      document.getElementById("button0").innerHTML = ("<img src = \""+JSON.stringify(json.stream.channel.logo).replace(/["]/,"")+"\" class=\"img-circle\" height=\"60\";width=\"60\";\"> Twitch Streamer: " + "<a href=\"" + streamer_link[0] + "\" target = \"_blank\">" + streamers[0]);
    }
  });
  $.getJSON(api_link[1], function(json) {
    if ((JSON.stringify(json.stream)) === "null") {
      document.getElementById("button1").setAttribute("class", "well offline");
    } else {
      document.getElementById("button1").setAttribute("class", "well online");
      document.getElementById("button1").innerHTML = ("<img src = \""+JSON.stringify(json.stream.channel.logo).replace(/["]/,"")+"\" class=\"img-circle\" height=\"60\";width=\"60\";\"> Twitch Streamer: " + "<a href=\"" + streamer_link[1] + "\" target = \"_blank\">" + streamers[1]);
    }
  });
  $.getJSON(api_link[2], function(json) {
    if ((JSON.stringify(json.stream)) === "null") {
      document.getElementById("button2").setAttribute("class", "well offline");
    } else {
      document.getElementById("button2").setAttribute("class", "well online");
      document.getElementById("button2").innerHTML = ("<img src = \""+JSON.stringify(json.stream.channel.logo).replace(/["]/,"")+"\" class=\"img-circle\" height=\"60\";width=\"60\";\"> Twitch Streamer: " + "<a href=\"" + streamer_link[2] + "\" target = \"_blank\">" + streamers[2]);
    }
  });
   $.getJSON(api_link[3], function(json) {
    if ((JSON.stringify(json.stream)) === "null") {
      document.getElementById("button3").setAttribute("class", "well offline");
    } else {
      document.getElementById("button3").setAttribute("class", "well online");
      document.getElementById("button3").innerHTML = ("<img src = \""+JSON.stringify(json.stream.channel.logo).replace(/["]/,"")+"\" class=\"img-circle\" height=\"60\";width=\"60\";\"> Twitch Streamer: " + "<a href=\"" + streamer_link[3] + "\" target = \"_blank\">" + streamers[3]);
    }
  });
  $.getJSON(api_link[4], function(json) {
    if ((JSON.stringify(json.stream)) === "null") {
      document.getElementById("button4").setAttribute("class", "well offline");
    } else {
      document.getElementById("button4").setAttribute("class", "well online");
      document.getElementById("button4").innerHTML = ("<img src = \""+JSON.stringify(json.stream.channel.logo).replace(/["]/,"")+"\" class=\"img-circle\" height=\"60\";width=\"60\";\"> Twitch Streamer: " + "<a href=\"" + streamer_link[4] + "\" target = \"_blank\">" + streamers[4]);
    }
  });
  $.getJSON(api_link[5], function(json) {
    if ((JSON.stringify(json.stream)) === "null") {
      document.getElementById("button5").setAttribute("class", "well offline");
    } else {
      document.getElementById("button5").setAttribute("class", "well online");
      document.getElementById("button5").innerHTML = ("<img src = \""+JSON.stringify(json.stream.channel.logo).replace(/["]/,"")+"\" class=\"img-circle\" height=\"60\";width=\"60\";\"> Twitch Streamer: " + "<a href=\"" + streamer_link[5] + "\" target = \"_blank\">" + streamers[5]);
    }
  });
  $.getJSON(api_link[6], function(json) {
    if ((JSON.stringify(json.stream)) === "null") {
      document.getElementById("button6").setAttribute("class", "well offline");
    } else {
      document.getElementById("button6").setAttribute("class", "well online");
      document.getElementById("button6").innerHTML = ("<img src = \""+JSON.stringify(json.stream.channel.logo).replace(/["]/,"")+"\" class=\"img-circle\" height=\"60\";width=\"60\";\"> Twitch Streamer: " + "<a href=\"" + streamer_link[6] + "\" target = \"_blank\">" + streamers[6]);
    }
  });
  $.getJSON(api_link[7], function(json) {
    if ((JSON.stringify(json.stream)) === "null") {
      document.getElementById("button7").setAttribute("class", "well offline");
    } else {
      document.getElementById("button7").setAttribute("class", "well online");
      document.getElementById("button7").innerHTML = ("<img src = \""+JSON.stringify(json.stream.channel.logo).replace(/["]/,"")+"\" class=\"img-circle\" height=\"60\";width=\"60\";\"> Twitch Streamer: " + "<a href=\"" + streamer_link[7] + "\" target = \"_blank\">" + streamers[7]);
    }
  });
  //getting online only
  $("#online").on("click",function(){
    $(".offline").hide();
    $(".online").show();
  });
  //getting offline only
  $("#offline").on("click", function(){
    $(".online").hide();
    $(".offline").show();
  });
  }
});