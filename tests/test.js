var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

var runTest = function () {
    describe('Default options', function() {
        it('default selector', function() {
            assert.equal(picturefillBackgroundOptions.selector, 'picturefill-background');
        });

        it('default background size', function() {
            assert.equal(picturefillBackgroundOptions.backgroundSize, 'cover');
        });

        it('default background position', function() {
            assert.equal(picturefillBackgroundOptions.backgroundPosition, '50% 50%');
        });

        it('default background repeat', function() {
            assert.equal(picturefillBackgroundOptions.backgroundRepeat, 'no-repeat');
        });
    });

    describe('Override default options', function() {
        var options = picturefillBackgroundOptions;

        it('default selector', function() {
            picturefillBackgroundOptions.selector = "selector";
            assert.equal(picturefillBackgroundOptions.selector, 'selector');
        });

        it('default background size', function() {
            picturefillBackgroundOptions.backgroundSize = "size";
            assert.equal(picturefillBackgroundOptions.backgroundSize, 'size');
        });

        it('default background position', function() {
            picturefillBackgroundOptions.backgroundPosition = "position";
            assert.equal(picturefillBackgroundOptions.backgroundPosition, 'position');
        });

        it('default background repeat', function() {
            picturefillBackgroundOptions.backgroundRepeat = "repeat";
            assert.equal(picturefillBackgroundOptions.backgroundRepeat, 'repeat');
        });

        picturefillBackgroundOptions = options;
    });

    describe('Current background picture', function() {
        var viewportWidth = document.documentElement.clientWidth;
        var container = document.getElementsByClassName( picturefillBackgroundOptions.selector );
        var picture = container[0].style.backgroundImage;

        var type = "big";

        if (viewportWidth < 400) {
            type = "small";
        }
        else if (viewportWidth < 640) {
            type = "medium";
        }
        else if (viewportWidth < 800) {
            type = "large";
        }

        it(type + " background", function() {
            assert.equal(picture, "url(http:\/\/" + type + "\/)");
        });
    });

    mocha.run();
};

