(this["webpackJsonpgreen-sap"]=this["webpackJsonpgreen-sap"]||[]).push([[101,171],{1043:function(e,t,r){"use strict";r.r(t),r.d(t,"create",(function(){return l})),r.d(t,"projectGeometry",(function(){return f}));var n=r(8),a=r.n(n),o=r(14),i=r(72),s=r(22),c=r(86),u=r(879);function l(){return p.apply(this,arguments)}function p(){return p=Object(o.a)(a.a.mark((function e(){var t,n,o,u=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.length>0&&void 0!==u[0]?u[0]:null,n=u.length>1?u[1]:void 0,!i.a.geometryServiceUrl){e.next=9;break}return e.next=6,r.e(21).then(r.bind(null,968));case 6:return e.t0=e.sent.default,e.t1={url:i.a.geometryServiceUrl},e.abrupt("return",new e.t0(e.t1));case 9:if(t){e.next=11;break}throw new s.a("internal:geometry-service-url-not-configured");case 11:return o="portal"in t?t.portal||c.a.getDefault():t,e.next=14,o.load({signal:n});case 14:if(!(o.helperServices&&o.helperServices.geometry&&o.helperServices.geometry.url)){e.next=21;break}return e.next=18,r.e(21).then(r.bind(null,968));case 18:return e.t2=e.sent.default,e.t3={url:o.helperServices.geometry.url},e.abrupt("return",new e.t2(e.t3));case 21:throw new s.a("internal:geometry-service-url-not-configured");case 22:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(e,t){return h.apply(this,arguments)}function h(){return h=Object(o.a)(a.a.mark((function e(t,r){var n,o,i,c,p,f=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>2&&void 0!==f[2]?f[2]:null,o=f.length>3?f[3]:void 0,e.next=4,l(n,o);case 4:return i=e.sent,(c=new u.a).geometries=[t],c.outSpatialReference=r,e.next=9,i.project(c,{signal:o});case 9:if(!(p=e.sent)||!Array.isArray(p)||1!==p.length){e.next=12;break}return e.abrupt("return",p[0]);case 12:throw new s.a("internal:geometry-service-projection-failed");case 13:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}},879:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(2),a=r(4),o=r(6),i=r(7),s=r(0),c=r(24),u=r(1),l=(r(16),r(18),r(15),r(10)),p=r(73),f=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).geometries=null,a.outSpatialReference=null,a.transformation=null,a.transformForward=null,a}return Object(a.a)(r,[{key:"toJSON",value:function(){var e=this.geometries.map((function(e){return e.toJSON()})),t=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:Object(p.c)(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}}]),r}(c.a);Object(s.a)([Object(u.b)()],f.prototype,"geometries",void 0),Object(s.a)([Object(u.b)({json:{read:{source:"outSR"}}})],f.prototype,"outSpatialReference",void 0),Object(s.a)([Object(u.b)()],f.prototype,"transformation",void 0),Object(s.a)([Object(u.b)()],f.prototype,"transformForward",void 0);var h=f=Object(s.a)([Object(l.a)("esri.rest.support.ProjectParameters")],f)}}]);
//# sourceMappingURL=101.a5ed2274.chunk.js.map