let i = 0;

setInterval(() => {
 i++
 show( i );
}, 1000)

function show( output ) {
  console.log( output )
} 

function check( name ) {
  if( name === '' ) return false

  return true
}