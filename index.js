/*! pandoc-docx-margin | (C) 2014 Mike Henderson <mvhenderson@tds.net> | License: MIT */
'use strict';

var _ = require('lodash');

var defaults = {
    size: {
        width: 12240,
        height: 15840,
    },
    margin: {
        top: 720,
        right: 720,
        bottom: 720,
        left: 720,
        header: 720,
        footer: 720,
        gutter: 0,
    },
    cols: {
        space: 720
    },
    grid: {
        linePitch: 360
    }
};

module.exports = function docxMargin(data, options) {
    options = options || {};
    var opts = {};
    _.forOwn(defaults, function (val,key) {
        opts[key] = _.extend(options[key] || {}, val);
    })

    var raw = {
      t: 'RawBlock',
      c: [
        'openxml',
        [
          '<w:sectPr w:rsidR="00DA4B4F" w:rsidSect="008B47F3">',
          '  <w:pgSz w:w="'+opts.size.width+'" w:h="'+opts.size.height+'"/>',
          '  <w:pgMar w:top="'+opts.margin.top+'" w:right="'+opts.margin.right+'" w:bottom="'+opts.margin.bottom+'" w:left="'+opts.margin.left+'" w:header="'+opts.margin.header+'" w:footer="'+opts.margin.footer+'" w:gutter="'+opts.margin.gutter+'"/>',
          '  <w:cols w:space="'+opts.cols.space+'"/>',
          '  <w:docGrid w:linePitch="'+opts.grid.linePitch+'"/>',
          '</w:sectPr>',
        ].join('')
      ]
    };

    data[1].push(raw);
    return data;
}

