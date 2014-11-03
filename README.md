# Picturefill-background
A Responsive Images approach like Picturefill but managing a picture on background-image css attribute.

**Note:** Picturefill-background works best in browsers that support CSS3 media queries..

## Markup pattern and explanation

Mark up your responsive images like this.

```html
<div class="picturefill-background">
    <span data-src="small.jpg"></span>
    <span data-src="medium.jpg" data-media="(min-width: 400px)"></span>
    <span data-src="large.jpg" data-media="(min-width: 640px)"></span>
    <span data-src="big.jpg" data-media="(min-width: 800px)"></span>
</div>
```

### Default options

```js
w.picturefillBackgroundOptions = {
    selector: "picturefill-background",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%"
};
```

Redefine this value to replace some of the options

```js
picturefillBackgroundOptions.selector = "custom-selector";
```

### Explained...

Notes on the markup above...

* The `div[class="picturefill-background"]` element is used to apply `background-image` attribute.
* The `div[class="picturefill-background"]` element can contain any number of `div[data-source]` elements.
* Each `div[data-src]` element must have a `data-src` attribute specifying the image path.
* Each `div[data-src]` element can have an optional `[data-media]` attribute to make it apply in specific media settings. Both media types and queries can be used, like a native `media` attribute, but support for media _queries_ depends on the browser (unsupported browsers fail silently).
* The [matchMedia](https://github.com/paulirish/matchMedia.js) polyfill is required to support the `data-media` attribute in older browsers (e.g. IE9, Android 2.3 Browser). See [http://caniuse.com/#feat=matchmedia](http://caniuse.com/#feat=matchmedia) for a table detailing native support for the `matchMedia` API.
