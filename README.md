# Welcome to responsive image map!




## how to use ? (step 1)
just include the image_map.js in your web page <br>
<b>example :<b>
```
<script type="text/javascript" src="YOUR_WEBSITE_PATH/image_map.js"></script>
```

## (step 2)
after including <b>image_map.js</b> <br>
place this inside <b>your OWN js file</b> 
```
window.onload = function () {
var map = $('#map_ID'); // id for <map>
var image = $('#img_ID')[0]; // id for <img>
new ResponsiveImageMap(map, image, image.naturalWidth);
   
}
 
```

## Dependencies 

1- <b>jquery</b> <br>
2- make sure to <b>include image_map.js before your own js file</b>
