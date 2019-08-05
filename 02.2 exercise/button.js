"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
DIFFERENZE
- Names:
isSelected class member
onClick()
this.isSelected = !this.isSelected

// Onliner if increment / decrement
this.likesCount += (this.isSelected) ? 1 : -1;

*/
var Button = /** @class */ (function () {
    function Button(_likes, _state) {
        if (_likes === void 0) { _likes = 0; }
        if (_state === void 0) { _state = false; }
        this._likes = _likes;
        this._state = _state;
    }
    ;
    Button.prototype.print = function () {
        if (this._state)
            var stateStr = 'clicked.';
        else
            var stateStr = 'not clicked.';
        console.log("Button has " + this._likes + " likes. Button " + stateStr);
    };
    ;
    Button.prototype.like = function () {
        console.log('Button.like()');
        this._likes += 1;
        this._state = true;
    };
    ;
    Button.prototype.unlike = function () {
        console.log('Button.unlike()');
        this._likes -= 1;
        this._state = false;
    };
    ;
    Button.prototype.click = function () {
        if (this._state) {
            //already clicked
            this.unlike();
        }
        else {
            // not clicked yet
            this.like();
        }
    };
    ;
    Object.defineProperty(Button.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Button.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Button;
}());
exports.Button = Button;
;
