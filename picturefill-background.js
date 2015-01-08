(function( w ) {
    "use strict";

    /**
     * Utilities
     */
    var escapeRegExp = function( string ) {
        return string.replace( /[.*+?^${}()|[\]\\]/g, '\\$&' );
    };

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
                    matches.push( src );
                }
            }

            if ( matches.length ) {
                src = matches.pop();
                var exp = new RegExp( escapeRegExp( src ) );

                // Update target element's background image, if necessary
                if ( !exp.test( picturefills[ i ].style.backgroundImage ) ) {
                    picturefills[i].style.backgroundImage = "url('" + src + "')";
                    picturefills[i].style.backgroundSize = w.picturefillBackgroundOptions.backgroundSize;
                    picturefills[i].style.backgroundRepeat = w.picturefillBackgroundOptions.backgroundRepeat;
                    picturefills[i].style.backgroundPosition = w.picturefillBackgroundOptions.backgroundPosition;
                }
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
