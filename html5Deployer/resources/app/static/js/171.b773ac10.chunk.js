(this["webpackJsonpgreen-sap"]=this["webpackJsonpgreen-sap"]||[]).push([[171],{879:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var o=r(2),a=r(4),i=r(6),n=r(7),s=r(0),c=r(24),f=r(1),u=(r(16),r(18),r(15),r(10)),p=r(73),O=function(t){Object(i.a)(r,t);var e=Object(n.a)(r);function r(t){var a;return Object(o.a)(this,r),(a=e.call(this,t)).geometries=null,a.outSpatialReference=null,a.transformation=null,a.transformForward=null,a}return Object(a.a)(r,[{key:"toJSON",value:function(){var t=this.geometries.map((function(t){return t.toJSON()})),e=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=e.spatialReference.wkid||JSON.stringify(e.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:Object(p.c)(e),geometries:t}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}}]),r}(c.a);Object(s.a)([Object(f.b)()],O.prototype,"geometries",void 0),Object(s.a)([Object(f.b)({json:{read:{source:"outSR"}}})],O.prototype,"outSpatialReference",void 0),Object(s.a)([Object(f.b)()],O.prototype,"transformation",void 0),Object(s.a)([Object(f.b)()],O.prototype,"transformForward",void 0);var b=O=Object(s.a)([Object(u.a)("esri.rest.support.ProjectParameters")],O)}}]);
//# sourceMappingURL=171.b773ac10.chunk.js.map