#!/usr/bin/env node

/*! pandoc-docx-margin | (C) 2014 Mike Henderson <mvhenderson@tds.net> | License: MIT */
'use strict';

var margin = require('..');
var json = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (data) {
  json += data;
});
process.stdin.on('end', function () {
  var format = (process.argv.length > 2 ? process.argv[2] : '');
  if (format === 'docx' || format === 'openxml') {
    json = JSON.stringify(margin(JSON.parse(json)));
  }  
  process.stdout.write(json);
});

