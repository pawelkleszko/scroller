class Scroller {
    constructor(event) {

    }
    showScroller(event) {
        this.deltaY = event.deltaY;
        console.log(this.deltaY);
    }
}