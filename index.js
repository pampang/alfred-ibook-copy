"use strict";
var alfy = require('alfy');
var cp = require('child_process');

const inputText = cp.spawnSync('pbpaste', {
    encoding: 'utf8',
}).stdout;

const final = inputText.substr(1).replace(/”\n\n摘录来自.+Apple Books\./, '');

alfy.output([{
    title: `结果：${final}`,
    subtitle: `原文：${inputText}`,
    arg: final,
    // text: {
    //     copy: final,
    // },
}]);
