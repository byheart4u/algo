"use strict";var globalVariable="sdfsdfd";function outerFunction(a){function o(o){console.log("global variable ",globalVariable),console.log("variable1 ","var one"),console.log("variable2 ","var two"),console.log("param1 ",a),console.log("param2 ",o)}o("param one"),console.dir(o)}outerFunction("param two");