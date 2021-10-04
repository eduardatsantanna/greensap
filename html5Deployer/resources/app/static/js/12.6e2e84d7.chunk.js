(this["webpackJsonpgreen-sap"]=this["webpackJsonpgreen-sap"]||[]).push([[12],{596:function(e,r,t){"use strict";t.r(r),t.d(r,"getFirstLayerOrTableId",(function(){return L})),t.d(r,"getNumLayersAndTables",(function(){return g})),t.d(r,"load",(function(){return f})),t.d(r,"preprocessFSItemData",(function(){return j}));var n=t(8),a=t.n(n),u=t(14),c=t(22),s=t(785),i=t(86),o=t(488),l=t(453),p=t(890);function f(e,r){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(a.a.mark((function e(r,t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=r.instance.portalItem)||!n.id){e.next=8;break}return e.next=4,n.load(t);case 4:b(r),e.t0=h(r,t),e.next=9;break;case 8:e.t0=Promise.resolve();case 9:return e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){var r=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(r.type))throw new c.a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}function h(e,r){return v.apply(this,arguments)}function v(){return v=Object(u.a)(a.a.mark((function e(r,t){var n,u,c,s,i,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.instance,u=n.portalItem,c=u.url,s=u.title,i=Object(o.a)(u),"group"!==n.type){e.next=3;break}return e.abrupt("return",(n.read({title:s},i),y(n,r)));case 3:return c&&n.read({url:c},i),e.next=6,k(r,t);case 6:return p=e.sent,e.abrupt("return",(p&&n.read(p,i),n.resourceReferences={portalItem:u,paths:i.readResourcePaths},n.read({title:s},i),Object(l.a)(n,i)));case 8:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function y(e,r){var t,n,i=e.portalItem.type;switch(i){case"Feature Service":case"Feature Collection":t=s.a.FeatureLayer;break;case"Stream Service":t=s.a.StreamLayer;break;case"Scene Service":t=s.a.SceneLayer;break;default:throw new c.a("portal:unsupported-item-type-as-group","The item type '".concat(i,"' is not supported as a 'IGroupLayer'"))}return t().then((function(e){return n=e,k(r)})).then(function(){var r=Object(u.a)(a.a.mark((function r(t){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("Feature Service"!==i){r.next=7;break}return r.next=3,j(t,e.portalItem.url);case 3:t=r.sent,r.t0=w(e,n,t),r.next=8;break;case 7:r.t0=g(t)>0?w(e,n,t):m(e,n);case 8:return r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function m(e,r){return e.portalItem.url?Object(p.a)(e.portalItem.url).then((function(t){var n,a;function u(e){return{id:e.id,name:e.name}}t&&w(e,r,{layers:null==(n=t.layers)?void 0:n.map(u),tables:null==(a=t.tables)?void 0:a.map(u)})})):Promise.resolve()}function w(e,r,t){var n=t.layers||[],a=t.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((function(e){var r;"Table"===(null==e||null==(r=e.layerDefinition)?void 0:r.type)&&a.push(e)})),n=n.filter((function(e){var r;return"Table"!==(null==e||null==(r=e.layerDefinition)?void 0:r.type)}))),n.reverse().forEach((function(n){var a=x(e,r,t,n);e.add(a)})),a.reverse().forEach((function(n){var a=x(e,r,t,n);e.tables.add(a)}))}function x(e,r,t,n){var a=new r({portalItem:e.portalItem.clone(),layerId:n.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var u={origin:"portal-item",portal:e.portalItem.portal||i.a.getDefault()};a.read(n,u);var c=t.showLegend;null!=c&&a.read({showLegend:c},u)}return a}function k(e,r){if(!1===e.supportsData)return Promise.resolve(void 0);var t=e.instance;return t.portalItem.fetchData("json",r).catch((function(){return null})).then(function(){var e=Object(u.a)(a.a.mark((function e(r){var n,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(t)){e.next=3;break}return u=!0,e.abrupt("return",(r&&g(r)>0&&(null==t.layerId&&(t.layerId=L(r)),(n=I(r,t.layerId))&&(1===g(r)&&(u=!1),null!=r.showLegend&&(n.showLegend=r.showLegend))),u&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),n));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())}function j(e,r){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(a.a.mark((function e(r,t){var n,u,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(null==(n=r)?void 0:n.layers)&&null!=(null==(u=r)?void 0:u.tables)){e.next=5;break}return e.next=3,Object(p.a)(t);case 3:c=e.sent,(r=r||{}).layers=r.layers||(null==c?void 0:c.layers),r.tables=r.tables||(null==c?void 0:c.tables);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}function I(e,r){var t=e.layers;if(t)for(var n=0;n<t.length;n++)if(t[n].id===r)return t[n];var a=e.tables;if(a)for(var u=0;u<a.length;u++)if(a[u].id===r)return a[u];return null}function g(e){var r,t,n,a;return(null!=(r=null==e||null==(t=e.layers)?void 0:t.length)?r:0)+(null!=(n=null==e||null==(a=e.tables)?void 0:a.length)?n:0)}function S(e){return"stream"!==e.type&&"layerId"in e}},785:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var n=t(8),a=t.n(n),u=t(14),c={BingMapsLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(160).then(t.bind(null,981));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),BuildingSceneLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(11),t.e(72)]).then(t.bind(null,971));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),CSVLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(83).then(t.bind(null,982));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ElevationLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(37).then(t.bind(null,978));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),FeatureLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(null,437));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),GroupLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(38).then(t.bind(null,905));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),GeoRSSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(161).then(t.bind(null,954));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ImageryLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(16),t.e(25),t.e(162)]).then(t.bind(null,972));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ImageryTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(16),t.e(25),t.e(84)]).then(t.bind(null,970));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),IntegratedMeshLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(11),t.e(94)]).then(t.bind(null,975));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),KMLLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(95).then(t.bind(null,983));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),MapImageLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(71)]).then(t.bind(null,899));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),MapNotesLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(96).then(t.bind(null,957));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),OGCFeatureLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(30),t.e(97)]).then(t.bind(null,984));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),OpenStreetMapLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(85).then(t.bind(null,958));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),PointCloudLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(11),t.e(69)]).then(t.bind(null,973));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),RouteLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(163).then(t.bind(null,959));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),SceneLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(11),t.e(73)]).then(t.bind(null,985));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),StreamLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(164).then(t.bind(null,986));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),TileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(98)]).then(t.bind(null,960));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),UnknownLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(165).then(t.bind(null,961));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),UnsupportedLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(166).then(t.bind(null,962));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),VectorTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(null,470));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),VoxelLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(167).then(t.bind(null,969));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WebTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(99).then(t.bind(null,786));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WFSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(31),t.e(86)]).then(t.bind(null,987));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WMSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(82).then(t.bind(null,979));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WMTSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(74).then(t.bind(null,976));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}},890:function(e,r,t){"use strict";t.d(r,"a",(function(){return s}));var n=t(8),a=t.n(n),u=t(14),c=t(62);function s(e){return i.apply(this,arguments)}function i(){return i=Object(u.a)(a.a.mark((function e(r){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.default)(r,{responseType:"json",query:{f:"json"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}}}]);
//# sourceMappingURL=12.6e2e84d7.chunk.js.map