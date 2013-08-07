var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

var runTest = function () {
    describe('Default options', function() {
        it('default selector', function() {
            assert.equal(picturefillOptions.selector, 'picturefill-background');
        });

        it('default background size', function() {
            assert.equal(picturefillOptions.backgroundSize, 'cover');
        });

        it('default background position', function() {
            assert.equal(picturefillOptions.backgroundPosition, '50% 50%');
        });

        it('default background repeat', function() {
            assert.equal(picturefillOptions.backgroundRepeat, 'no-repeat');
        });
    });

    describe('Override default options', function() {
        var options = picturefillOptions;

        it('default selector', function() {
            picturefillOptions.selector = "selector";
            assert.equal(picturefillOptions.selector, 'selector');
        });

        it('default background size', function() {
            picturefillOptions.backgroundSize = "size";
            assert.equal(picturefillOptions.backgroundSize, 'size');
        });

        it('default background position', function() {
            picturefillOptions.backgroundPosition = "position";
            assert.equal(picturefillOptions.backgroundPosition, 'position');
        });

        it('default background repeat', function() {
            picturefillOptions.backgroundRepeat = "repeat";
            assert.equal(picturefillOptions.backgroundRepeat, 'repeat');
        });

        picturefillOptions = options;
    });

    describe('Current background picture', function() {
        var viewportWidth = document.documentElement.clientWidth;
        var container = document.getElementsByClassName( picturefillOptions.selector );
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

