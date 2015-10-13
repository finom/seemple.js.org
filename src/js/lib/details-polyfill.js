if (!('open' in document.createElement('details'))) {
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule('details > :not(summary) { display: none; }', styleSheet.cssRules.length);
    styleSheet.insertRule('details.open > :not(summary) { display: block; }', styleSheet.cssRules.length);
    document.addEventListener( 'click', function( evt ) {
        if( evt.target.tagName == 'SUMMARY' && evt.target.parentNode.tagName == 'DETAILS' ) {
            evt.target.parentNode.classList.toggle( 'open' );
        }
    });
}
