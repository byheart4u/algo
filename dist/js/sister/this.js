"use strict";var _this=void 0;function abc(){console.log(this)}console.log(void 0);var normal=function(){console.log(this)},arrow=function(){console.log(_this)};!function(){console.log(this)}(),function(){console.log(this)}();var obj={a:"10",methodKey:function(){var o=this;console.log("methodKey : ",this);!function(){console.log("outer : ",this)}(),console.log("ancestor : ",o)},method:function(){console.log("method : ",this)},methodArrow:function(){console.log("methodArrow : ",_this);!function(){console.log("apple : ",this)}(),console.log("aaa : ",_this)}};abc(),normal(),arrow(),obj.methodKey(),obj.method(),obj.methodArrow();var obj2={a:"10",methodKey:function(){var o=this;console.log(this),function(){console.log(this)}();console.log("arrr : ",o),function(){console.log("sample : ",this)}()},mehtodArrow:function(){console.log("mehtodArrow : ",_this),function(){console.log("kakak : ",this)}()}};obj2.methodKey(),obj2.mehtodArrow();