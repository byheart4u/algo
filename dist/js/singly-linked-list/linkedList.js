"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var Node=function t(n){_classCallCheck(this,t),this.value=void 0,this.value=n,this.next=null},push=function(t){if(!list)return list=t;for(var n=list;n;){if(null===n.next)return n.next=t,list;n=n.next}},pop=function(){if(!list)return null;for(var t=list,n=list.next;n;){if(null===n.next)return t.next=null,list||null;n=(t=n).next}return null},shift=function(){return list=list.next},unshift=function(t){return t.next=list,list=t},deleteAt=function(t){if(!list)return!1;0===t&&shift();for(var n=0,e=list.next,l=list;e;){if(n===t-1)return l.next=e.next,list;e=(l=e).next,n++}return null},getAtIndex=function(t){for(var n=0,e=list;e;){if(n===t)return e;n++,e=e.next}return-1},editAtIndex=function(t,n){if(!list)return!1;for(var e=list,l=0;e;){if(l===t)return e.value=n,!0;l++,e=e.next}return!1},reverseList=function(){for(var t=list,n=[];t;)n.push(t.value),t=t.next;list=null;for(var e=n.length-1;0<=e;e--)push(new Node(n[e]));return list},list=null;push(new Node(12)),push(new Node(13)),push(new Node(14)),push(new Node(15)),push(new Node(16)),push(new Node(17)),push(new Node(18)),push(new Node(19)),push(new Node(20)),console.log(reverseList());