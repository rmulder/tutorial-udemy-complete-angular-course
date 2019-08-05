/*
DIFFERENZE
- Names:
isSelected class member
onClick()
this.isSelected = !this.isSelected

// Onliner if increment / decrement
this.likesCount += (this.isSelected) ? 1 : -1;

*/
export class Button{
    
    constructor(private _likes: number = 0, private _state: boolean = false){
    };
    print () {
        if (this._state) var stateStr = 'clicked.';
        else var stateStr = 'not clicked.';
        console.log(`Button has ${this._likes} likes. Button ${stateStr}`)
    };

    like() {
        console.log('Button.like()')
        this._likes += 1;
        this._state = true;
    };
    unlike() {
        console.log('Button.unlike()')
        this._likes -= 1;
        this._state = false;
    };
    click(){
        if( this._state ){
            //already clicked
            this.unlike();
        }
        else{
            // not clicked yet
            this.like();
        }
    };

    public get state(): boolean {
        return this._state;
    };
    public get likes(): number {
        return this._likes;
    };
};