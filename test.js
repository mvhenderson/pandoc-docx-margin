/*! pandoc-docx-margin | (C) 2014 Mike Henderson <mvhenderson@tds.net> | License: MIT */
/* global describe, it */
'use strict';

var should = require('should');
var margin = require('./index');

it('should append narrow margin', function () {
  margin([
    {
      "unMeta": {}
    },
    [
      {
        "c": [
          {
            "c": "hello world",
            "t": "Str"
          }
        ],
        "t": "Para"
      }
    ]
  ]).should.eql([
    {
      "unMeta": {}
    },
    [
      {
        "c": [
          {
            "c": "hello world",
            "t": "Str"
          }
        ],
        "t": "Para"
      },
      {
        t: 'RawBlock',
        c: [
          'openxml',
          [
            '<w:sectPr w:rsidR="00DA4B4F" w:rsidSect="008B47F3">',
            '  <w:pgSz w:w="12240" w:h="15840"/>',
            '  <w:pgMar w:top="720" w:right="720" w:bottom="720" w:left="720" w:header="720" w:footer="720" w:gutter="0"/>',
            '  <w:cols w:space="720"/>',
            '  <w:docGrid w:linePitch="360"/>',
            '</w:sectPr>',
          ].join('')
        ]
      }
    ]
  ]);

});
