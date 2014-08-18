(function( w ) {
    "use strict";

    /**
     * Default options
     * Redefine this value to replace some of the options
     * (ex: w.picturefillBackgroundOptions.selector = "custom";)
     */
    w.picturefillBackgroundOptions = {
        selector: "picturefill-background",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%"
    };

    /**
     * Apply a responsive background image
     */
    w.picturefillBackground = function() {
        var picturefills = w.document.getElementsByClassName( w.picturefillBackgroundOptions.selector );

        for ( var i = 0, il = picturefills.length; i < il; i++ ) {
            var sources = picturefills[ i ].getElementsByTagName( "span" ),
                matches = [];

            for( var j = 0, jl = sources.length; j < jl; j++ ) {
                var src   = sources[ j ].getAttribute( "data-src" ),
                    media = sources[ j ].getAttribute( "data-media" );


                if ( src && (!media || ( w.matchMedia && w.matchMedia( media ).matches )) ) {
                    matches.push( sources[ j ] );
                }
            }

            if ( matches.length ) {
                picturefills[i].style.backgroundImage = "url(" + matches.pop().getAttribute( "data-src" ) + ")";
                picturefills[i].style.backgroundSize = w.picturefillBackgroundOptions.backgroundSize;
                picturefills[i].style.backgroundRepeat = w.picturefillBackgroundOptions.backgroundRepeat;
                picturefills[i].style.backgroundPosition = w.picturefillBackgroundOptions.backgroundPosition;
            }
        }
    };

    /**
     * Run on resize and domready (w.load as a fallback)
     */
    if ( w.addEventListener ) {
        w.addEventListener( "load", w.picturefillBackground, false );
        w.addEventListener( "resize", w.picturefillBackground, false );
        w.addEventListener( "DOMContentLoaded", function() {
            w.picturefillBackground();
            w.removeEventListener( "load", w.picturefillBackground, false );
        }, false );
    }
    else if ( w.attachEvent ) {
        w.attachEvent( "onload", w.picturefillBackground );
    }

}( this ));
