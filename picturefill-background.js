(function( w ) {
    "use strict";

    /**
     * Default options
     * Redefine this value to replace some of the options
     * (ex: picturefillOptions.selector = "custom";)
     */
    w.picturefillOptions = {
        selector: "picturefill-background",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%"
    };

    /**
     * Apply a responsive background image
     */
    w.picturefill = function() {
        var picturefills = w.document.getElementsByClassName( w.picturefillOptions.selector );

        for ( var i = 0, il = picturefills.length; i < il; i++ ) {
            var sources = picturefills[ i ].getElementsByTagName( "span" ),
                matches = [];

            for( var j = 0, jl = sources.length; j < jl; j++ ) {
                var media = sources[ j ].getAttribute( "data-media" );

                if ( !media || ( w.matchMedia && w.matchMedia( media ).matches ) ) {
                    matches.push( sources[ j ] );
                }
            }

            if ( matches.length ) {
                picturefills[i].style.backgroundImage = "url(" + matches.pop().getAttribute( "data-src" ) + ")";
                picturefills[i].style.backgroundSize = w.picturefillOptions.backgroundSize;
                picturefills[i].style.backgroundRepeat = w.picturefillOptions.backgroundRepeat;
                picturefills[i].style.backgroundPosition = w.picturefillOptions.backgroundPosition;
            }
        }
    };

    /**
     * Run on resize and domready (w.load as a fallback)
     */
    if ( w.addEventListener ) {
        w.addEventListener( "load", w.picturefill, false );
        w.addEventListener( "resize", w.picturefill, false );
        w.addEventListener( "DOMContentLoaded", function() {
            w.picturefill();
            w.removeEventListener( "load", w.picturefill, false );
        }, false );
    }
    else if ( w.attachEvent ) {
        w.attachEvent( "onload", w.picturefill );
    }

}( this ));
