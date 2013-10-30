#!/usr/bin/env node

var child = require('child_process');
var shortener = require('../');
var input = process.argv[2];

shortener.shorten( input, function( error, result ){
  if ( error ) throw error;

  var pbcopy = child.spawn( 'pbcopy' );

  pbcopy.on( 'close', function(){
    process.exit(0);
  });

  pbcopy.stdin.write( result );
  pbcopy.stdin.end();
});