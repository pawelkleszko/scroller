document.addEventListener('DOMContentLoaded', () => {

    const scroller = new Scroller();

    document.addEventListener('wheel', (event) => scroller.showScroller(event))
    //deltaY < 0 <== góra
    //deltaY > 0 <== dół

})