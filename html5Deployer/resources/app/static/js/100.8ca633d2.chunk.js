(this["webpackJsonpgreen-sap"]=this["webpackJsonpgreen-sap"]||[]).push([[100],{606:function(e,r,t){"use strict";t.r(r),t.d(r,"fromUrl",(function(){return f}));var n=t(8),a=t.n(n),u=t(12),c=t(14),s=t(62),i=(t(22),t(11)),o=t(27),l=t(165),p=t(785);function f(e){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function e(r){var n,c,s,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=null==(n=r.properties)?void 0:n.customParameters,e.next=3,h(r.url,c);case 3:if(s=e.sent,i=Object(u.a)(Object(u.a)({},r.properties),{},{url:r.url}),s.sublayerIds){e.next=7;break}return e.abrupt("return",(null!=s.layerOrTableId&&(i.layerId=s.layerOrTableId,i.sourceJSON=s.sourceJSON),new s.Constructor(i)));case 7:return e.next=10,t.e(38).then(t.bind(null,905));case 10:return e.t0=e.sent.default,e.t1={title:s.parsedUrl.title},o=new e.t0(e.t1),e.abrupt("return",(y(o,s,i),o));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,r){return e?e.find((function(e){return e.id===r})):null}function y(e,r,t){function n(e,n){var a=Object(u.a)(Object(u.a)({},t),{},{layerId:e,sublayerTitleMode:"service-name"});return Object(i.j)(n)&&(a.sourceJSON=n),new r.Constructor(a)}r.sublayerIds.forEach((function(t){var a=n(t,d(r.sublayerInfos,t));e.add(a)})),r.tableIds.forEach((function(t){var a=n(t,d(r.tableInfos,t));e.tables.add(a)}))}function h(e,r){return v.apply(this,arguments)}function v(){return v=Object(c.a)(a.a.mark((function e(r,t){var n,u,c,s,o,p,f,b,d,y,h,v,x;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(l.e)(r),e.t0=Object(i.i)(n),!e.t0){e.next=6;break}return e.next=5,w(r,t);case 5:n=e.sent;case 6:if(!Object(i.i)(n)){e.next=8;break}throw new h("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});case 8:c=(u=n).serverType,s=u.sublayer,p={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},e.t1=c,e.next="MapServer"===e.t1?13:"ImageServer"===e.t1?15:"SceneServer"===e.t1?17:19;break;case 13:return o=null!=s?"FeatureLayer":T(r,t).then((function(e){return e?"TileLayer":"MapImageLayer"})),e.abrupt("break",20);case 15:return o=C(r,t).then((function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!r||"LERC"!==r.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"})),e.abrupt("break",20);case 17:return o=C(n.url.path,t).then((function(e){var r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var t=e.layers[0].layerType;if(null!=r[t])return r[t]}return"SceneLayer"})),e.abrupt("break",20);case 19:o=p[c];case 20:return f={FeatureLayer:!0,SceneLayer:!0},d={parsedUrl:n,Constructor:null,layerOrTableId:(b="FeatureServer"===c)?s:null,sublayerIds:null,tableIds:null},e.next=25,o;case 25:if(y=e.sent,!f[y]||null!=s){e.next=32;break}return e.next=29,O(r,c,t);case 29:h=e.sent,b&&(d.sublayerInfos=h.layerInfos,d.tableInfos=h.tableInfos),1!==h.layerIds.length+h.tableIds.length?(d.sublayerIds=h.layerIds,d.tableIds=h.tableIds):b&&(d.layerOrTableId=null!=(v=h.layerIds[0])?v:h.tableIds[0],d.sourceJSON=null!=(x=h.layerInfos[0])?x:h.tableInfos[0]);case 32:return e.next=34,I(y);case 34:return d.Constructor=e.sent,e.abrupt("return",d);case 36:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function w(e,r){return x.apply(this,arguments)}function x(){return x=Object(c.a)(a.a.mark((function e(r,t){var n,u,c,s,p,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(r,t);case 2:if(u=e.sent,c=null,s=null,"Feature Layer"===(p=u.type)||"Table"===p?(c="FeatureServer",s=u.id):"indexedVector"===p?c="VectorTileServer":u.hasOwnProperty("mapName")?c="MapServer":u.hasOwnProperty("bandCount")&&u.hasOwnProperty("pixelSizeX")?c="ImageServer":u.hasOwnProperty("maxRecordCount")&&u.hasOwnProperty("allowGeometryUpdates")?c="FeatureServer":u.hasOwnProperty("streamUrls")?c="StreamServer":m(u)?(c="SceneServer",s=u.id):u.hasOwnProperty("layers")&&m(null==(n=u.layers)?void 0:n[0])&&(c="SceneServer"),c){e.next=7;break}return e.abrupt("return",null);case 7:return f=null!=s?Object(l.f)(r):null,e.abrupt("return",{title:Object(i.j)(f)&&u.name||Object(o.k)(r),serverType:c,sublayer:s,url:{path:Object(i.j)(f)?f.serviceUrl:Object(o.K)(r).path}});case 9:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function m(e){return(null==e?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&"number"==typeof e.id}function O(e,r,t){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(a.a.mark((function e(r,t,n){var u,c,s,i,o,l,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=!1,"FeatureServer"!==t){e.next=8;break}return e.next=4,L(r,n);case 4:o=e.sent,i=!!o.layersJSON,s=o.layersJSON||o.serviceJSON,e.next=11;break;case 8:return e.next=10,C(r,n);case 10:s=e.sent;case 11:return l=null==(u=s)?void 0:u.layers,p=null==(c=s)?void 0:c.tables,e.abrupt("return",{layerIds:(null==l?void 0:l.map((function(e){return e.id})).reverse())||[],tableIds:(null==p?void 0:p.map((function(e){return e.id})).reverse())||[],layerInfos:i?l:[],tableInfos:i?p:[]});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return!e.type||"Feature Layer"===e.type}function L(e,r){return S.apply(this,arguments)}function S(){return(S=Object(c.a)(a.a.mark((function e(r,t){var n,u,c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(r,t);case 2:if((c=(c=e.sent)||{}).layers=(null==(n=c.layers)?void 0:n.filter(k))||[],s={serviceJSON:c},!(c.currentVersion<10.5)){e.next=7;break}return e.abrupt("return",s);case 7:return e.next=9,C(r+"/layers",t);case 9:return i=e.sent,e.abrupt("return",(s.layersJSON={layers:(null==i||null==(u=i.layers)?void 0:u.filter(k))||[],tables:(null==i?void 0:i.tables)||[]},s));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return P.apply(this,arguments)}function P(){return(P=Object(c.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.a[r])());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,r){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(a.a.mark((function e(r,t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(r,t);case 2:return e.abrupt("return",e.sent.tileInfo);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,r){return M.apply(this,arguments)}function M(){return(M=Object(c.a)(a.a.mark((function e(r,t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.default)(r,{responseType:"json",query:Object(u.a)({f:"json"},t)});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},785:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var n=t(8),a=t.n(n),u=t(14),c={BingMapsLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(160).then(t.bind(null,981));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),BuildingSceneLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(11),t.e(72)]).then(t.bind(null,971));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),CSVLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(83).then(t.bind(null,982));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ElevationLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(37).then(t.bind(null,978));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),FeatureLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(null,437));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),GroupLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(38).then(t.bind(null,905));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),GeoRSSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(161).then(t.bind(null,954));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ImageryLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(16),t.e(25),t.e(162)]).then(t.bind(null,972));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ImageryTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(16),t.e(25),t.e(84)]).then(t.bind(null,970));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),IntegratedMeshLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(11),t.e(94)]).then(t.bind(null,975));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),KMLLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(95).then(t.bind(null,983));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),MapImageLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(71)]).then(t.bind(null,899));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),MapNotesLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(96).then(t.bind(null,957));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),OGCFeatureLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(30),t.e(97)]).then(t.bind(null,984));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),OpenStreetMapLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(85).then(t.bind(null,958));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),PointCloudLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(11),t.e(69)]).then(t.bind(null,973));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),RouteLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(163).then(t.bind(null,959));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),SceneLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(11),t.e(73)]).then(t.bind(null,985));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),StreamLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(164).then(t.bind(null,986));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),TileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(98)]).then(t.bind(null,960));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),UnknownLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(165).then(t.bind(null,961));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),UnsupportedLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(166).then(t.bind(null,962));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),VectorTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(null,470));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),VoxelLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(167).then(t.bind(null,969));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WebTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(99).then(t.bind(null,786));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WFSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(31),t.e(86)]).then(t.bind(null,987));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WMSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(82).then(t.bind(null,979));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WMTSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(74).then(t.bind(null,976));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=100.8ca633d2.chunk.js.map