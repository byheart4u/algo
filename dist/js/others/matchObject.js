"use strict";function matches(e,r){if(Object.keys(e).length!==Object.keys(r).length)return!1;for(var a in e)if(!r[a]||e[a]!==r[a])return!1;return!0}console.log(matches({hair:"long",beard:!0},{hair:"long",beard:!0})),console.log(matches({hair:"long",beard:!0},{age:25,hair:"long",beard:!0})),console.log(matches({age:25,hair:"long",beard:!0},{hair:"long",beard:!0}));