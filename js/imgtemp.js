
function showImg( id ) {
// hide previously shown image
for ( i = 1; i < 10; i++) {
    var obj = document.getElementById( "picture" + i );
    if (obj != null)
        obj.className = 'hide';
}
var obj = document.getElementById( "picture" + id );
if (obj != null)
    obj.className = 'show';
  }
