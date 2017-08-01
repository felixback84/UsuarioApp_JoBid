# states-countify

Now available as an NPM, states-countify is the repository for all fifty, nifty United states. 

## Install

```bash
    
    $ npm install --save states-countify
```

Or you can have a look at the source and take what you need. The advantage of installing with npm is the ease of having all 50 states on a single require.

## Usage

```js
  
    var USA = require('states-countify');

    // JSON String
    var arizona = USA.AZ;

    // JS Object
    var arizonaGeometries = JSON.parse(arizona);
```


## Now that you have the data, play with it!

__Playgrounds__
+ [Require Bin](http://requirebin.com/)
+ [JSBin](http://jsbin.com/)

__Sample Libraries__
+ [Leaflet.js](http://www.leafletjs.com)
+ [D3.js](http://www.d3js.org)

__Tutorials Worth Looking At__
+ [Leaflet Quick-Start](http://leafletjs.com/examples/quick-start.html)
+ [D3 + Leaflet](http://bost.ocks.org/mike/leaflet/)

__Alternatives__
+ [CartoDB](http://www.cartodb.com)

## Thanks
Thanks to @johan's [world.geo.json repo](https://github.com/johan/world.geo.json), I was able to compile all of the county multipolygons for each respective state.
Clone and use as you wish.  I'd love to see what projects you work on given the data!

Thanks to @substack for encouraging everyone to [publish everything on NPM](https://www.youtube.com/watch?v=DCQNm6yiZh0). 

## License

MIT
