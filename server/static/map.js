$(function() {
  var image = $('body').data('image');

  var po = org.polymaps;

  var map = po.map()
      .container(document.getElementById("map").appendChild(po.svg("svg")))
      .center({lat: 0.0, lon: 0.0})
      .zoomRange([1, 5])
      .zoom(3)
      .add(po.interact())
      .add(po.hash());

  map.add(po.image()
      .url(po.url("/tiles/" + image + "/256/{Z}/{X},{Y}.png")
      ));

  map.add(po.compass()
      .pan("none"));

});