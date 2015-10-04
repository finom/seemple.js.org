if (!('open' in document.createElement('details'))) {
    document.styleSheets[0].insertRule('details > :not(summary) { display: none; }', 0);
    document.styleSheets[0].insertRule('details.open > :not(summary) { display: block; }', 0);
    document.addEventListener( 'click', function( evt ) {
        if( evt.target.tagName == 'SUMMARY' && evt.target.parentNode.tagName == 'DETAILS' ) {
            evt.target.parentNode.classList.toggle( 'open' );
        }
    });
}
