(this["webpackJsonpgreen-sap"]=this["webpackJsonpgreen-sap"]||[]).push([[173],{607:function(e,r,t){"use strict";t.r(r),t.d(r,"clearBoundingBoxCache",(function(){return y})),t.d(r,"computeIconLayerResourceSize",(function(){return w})),t.d(r,"computeLayerResourceSize",(function(){return h})),t.d(r,"computeLayerSize",(function(){return m})),t.d(r,"computeObjectLayerResourceSize",(function(){return k}));var n=t(8),u=t.n(n),o=t(14),c=t(62),i=t(22),a=t(458),s=t(11),p=t(332),f=t(351),b=l();function l(){return new a.a(50)}function y(){b=l()}function h(e,r){if("icon"===e.type)return w(e,r);if("object"===e.type)return k(e,r);throw new i.a("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}function m(e,r){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(u.a.mark((function e(r,t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("icon"!==r.type){e.next=2;break}return e.abrupt("return",j(r,t));case 2:if("object"!==r.type){e.next=4;break}return e.abrupt("return",O(r,t));case 4:throw new i.a("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,r){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(u.a.mark((function e(r,t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.resource.href){e.next=2;break}return e.abrupt("return",x(r.resource.href).then((function(e){return[e.width,e.height]})));case 2:if(!r.resource.primitive){e.next=4;break}return e.abrupt("return",Object(s.j)(t)?[t,t]:[256,256]);case 4:throw new i.a("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,r){return w(e,r).then((function(r){if(null==e.size)return r;var t=r[0]/r[1];return t>1?[e.size,e.size/t]:[e.size*t,e.size]}))}function x(e){return Object(c.default)(e,{responseType:"image"}).then((function(e){return e.data}))}function k(e,r){return function(e,r){return g.apply(this,arguments)}(e,r).then((function(e){return Object(p.m)(e)}))}function O(e,r){return z.apply(this,arguments)}function z(){return(z=Object(o.a)(u.a.mark((function e(r,t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(r,t);case 2:return n=e.sent,e.abrupt("return",Object(f.c)(n,r));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(o.a)(u.a.mark((function e(r,n){var o,c,a,l,y,h;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.isPrimitive){e.next=11;break}if(o=r.resource.href,void 0===(c=b.get(o))){e.next=4;break}return e.abrupt("return",Promise.resolve(c));case 4:return e.next=6,Promise.all([t.e(0),t.e(13),t.e(15),t.e(50)]).then(t.bind(null,992));case 6:return a=e.sent,e.next=9,a.fetch(o,{disableTextures:!0});case 9:return l=e.sent,e.abrupt("return",(b.put(o,l.referenceBoundingBox),l.referenceBoundingBox));case 11:if(y=null,r.resource&&r.resource.primitive&&(y=Object(p.b)(Object(f.b)(r.resource.primitive)),Object(s.j)(n)))for(h=0;h<y.length;h++)y[h]*=n;return e.abrupt("return",y?Promise.resolve(y):Promise.reject(new i.a("symbol:invalid-resource","The symbol does not have a valid resource")));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=173.dd865ba8.chunk.js.map