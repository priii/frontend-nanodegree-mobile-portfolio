## Website Performance Optimization portfolio project

### Things Done to optimize the website

#### Part 1: Optimize PageSpeed Insights score for index.html

1. Included the css in the html file.
2. Added the async attribute to the script tags.
3. removed the webfont.
4. Added perfmatters.js directly to the index.html.

#### Part 2: Optimize Frames per Second in pizza.html

1. Replaced all querySelectors with getElementById or getElementsByClassName.
2. Minimized the calculations in the update position function.
3. Used requestAnimationFrame for scrolling event.
4. Added will-change: transform to .mover css class for composite layers and transform : translateZ(0) for older browsers
5. Reduced the no of moving pizza from 200 to 35 (arbitrary value )
6. used style.transform instead of style.left to achieve animation.
7. Used grunt to minify the images.

### Testing

you can check the website performance by Copy Paste this link " http://c8422bb4.ngrok.io" in [pageSpeed insights](https://developers.google.com/speed/pagespeed/insights/) .
