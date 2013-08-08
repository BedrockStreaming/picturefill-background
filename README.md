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
w.picturefillOptions = {
    selector: "picturefill-background",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%"
};
```

Redefine this value to replace some of the options

```js
picturefillOptions.selector = "custom-selector";
```

### Explained...

Notes on the markup above...

* The `div[class="picturefill-background"]` element's is used for apply background-image attribute.
* The `span[data-picture]` element can contain any number of `div[data-source]` elements.
* Each `div[data-src]` element must have a `data-src` attribute specifying the image path.
* Each `div[data-src]` element can have an optional `[data-media]` attribute to make it apply in specific media settings. Both media types and queries can be used, like a native `media` attribute, but support for media _queries_ depends on the browser (unsupporting browsers fail silently).
* The `matchMedia` polyfill is necessary to support the `data-media` attribute across browsers (such as IE9), even in browsers that support media queries, although it is becoming more widely supported in new browsers.
