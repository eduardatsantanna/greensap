(this["webpackJsonpgreen-sap"]=this["webpackJsonpgreen-sap"]||[]).push([[64],{601:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return B}));var r=n(8),i=n.n(r),a=n(12),s=n(13),u=n(14),o=n(2),c=n(4),l=n(62),d=n(22),h=n(11),f=n(73),p=n(43),y=n(396),v=n(763),m=n(681),b=n(793),g=n(783),j=n(737),x=n(803),_=n(432),O=n(456),I=n(68),k={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}},B=function(){function e(){Object(o.a)(this,e),this._queryEngine=null}return Object(c.a)(e,[{key:"destroy",value:function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}},{key:"load",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,u,o,c,f,x,B,w,F,M,E,S,T,Y,X,q,P,R,D,A,C,G,Z,L,Q,N;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,this._checkProjection(t.spatialReference);case 3:if(r=null,!t.url){e.next=10;break}return e.next=7,Object(l.default)(t.url,{responseType:"json"});case 7:return r=e.sent.data,e.next=10,Object(g.d)(r);case 10:u=Object(g.c)(r,{geometryType:t.geometryType}),o=t.fields||u.fields||[],c=null!=t.hasZ?t.hasZ:u.hasZ,f=u.geometryType,x=t.objectIdField||("number"===u.objectIdFieldType?u.objectIdFieldName:"OBJECTID")||"OBJECTID",B=t.spatialReference||p.b,w=t.timeInfo,"string"===u.objectIdFieldType&&n.push({name:"geojson-layer:unsupported-id-type",message:"Feature ids are of type string and can't be honored."}),o===u.fields&&u.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:u.unknownFields}}),x&&(F=null,o.some((function(e){return e.name===x&&(F=e,!0)}))?(F.type="esriFieldTypeOID",F.editable=!1,F.nullable=!1):o.unshift({alias:x,name:x,type:"esriFieldTypeOID",editable:!1,nullable:!1})),M=Object(s.a)(o),e.prev=14,M.s();case 16:if((E=M.n()).done){e.next=24;break}if(null==(S=E.value).name&&(S.name=S.alias),null==S.alias&&(S.alias=S.name),S.name){e.next=20;break}throw new d.a("geojson-layer:invalid-field-name","field name is missing",{field:S});case 20:if(S.name===x&&(S.type="esriFieldTypeOID"),-1!==O.a.jsonValues.indexOf(S.type)){e.next=22;break}throw new d.a("geojson-layer:invalid-field-type",'invalid type for field "'.concat(S.name,'"'),{field:S});case 22:e.next=16;break;case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(14),M.e(e.t0);case 29:return e.prev=29,M.f(),e.finish(29);case 32:T={},this._requiredFields=[],Y=Object(s.a)(o);try{for(Y.s();!(X=Y.n()).done;)"esriFieldTypeOID"!==(q=X.value).type&&"esriFieldTypeGlobalID"!==q.type&&(q.editable=null==q.editable||!!q.editable,q.nullable=null==q.nullable||!!q.nullable,P=Object(I.o)(q),q.nullable||void 0!==P?T[q.name]=P:this._requiredFields.push(q))}catch(i){Y.e(i)}finally{Y.f()}if(this._fieldsIndex=new _.a(o),w&&(w.startTimeField&&((R=this._fieldsIndex.get(w.startTimeField))?(w.startTimeField=R.name,R.type="esriFieldTypeDate"):w.startTimeField=null),w.endTimeField&&((D=this._fieldsIndex.get(w.endTimeField))?(w.endTimeField=D.name,D.type="esriFieldTypeDate"):w.endTimeField=null),w.trackIdField&&((A=this._fieldsIndex.get(w.trackIdField))?w.trackIdField=A.name:(w.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:w}}))),w.startTimeField||w.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:w}}),w=null)),C=f?Object(j.d)(f):null,G={warnings:n,featureErrors:[],layerDefinition:Object(a.a)(Object(a.a)({},k),{},{drawingInfo:C,templates:Object(j.c)(T),extent:null,geometryType:f,objectIdField:x,fields:o,hasZ:!!c,timeInfo:w})},this._queryEngine=new b.a({fields:o,geometryType:f,hasM:!1,hasZ:c,objectIdField:x,spatialReference:B,timeInfo:w,featureStore:new v.a({geometryType:f,hasM:!1,hasZ:c}),cacheSpatialQueries:!0}),this._createDefaultAttributes=Object(j.b)(T,x),this._nextObjectId=u.maxObjectId+1,Z=Object(g.a)(r,{geometryType:f,hasZ:c,objectIdField:"number"===u.objectIdFieldType?x:null}),!Object(p.d)(B,p.b)){L=Object(s.a)(Z);try{for(L.s();!(Q=L.n()).done;)N=Q.value,Object(h.j)(N.geometry)&&(N.geometry=Object(y.d)(Object(m.b)(Object(y.k)(N.geometry,f,c,!1),p.b,B)))}catch(i){L.e(i)}finally{L.f()}}return e.abrupt("return",(this._loadInitialFeatures(G,Z),G));case 42:case"end":return e.stop()}}),e,this,[[14,26,29,32]])})));return function(t){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this._queryEngine,r=n.spatialReference,a=n.geometryType,e.next=3,Promise.all([Object(x.c)(r,a),Object(m.a)(t.adds,r),Object(m.a)(t.updates,r)]);case 3:return e.abrupt("return",this._applyEdits(t));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQuery(e,t.signal)}},{key:"queryFeatureCount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForCount(e,t.signal)}},{key:"queryObjectIds",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForIds(e,t.signal)}},{key:"queryExtent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForExtent(e,t.signal)}},{key:"querySnapping",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForSnapping(e,t.signal)}},{key:"_loadInitialFeatures",value:function(e,t){var n,r=this._queryEngine,i=r.featureStore,a=r.objectIdField,u=[],o=Object(s.a)(t);try{for(o.s();!(n=o.n()).done;){var c=n.value,l=this._createDefaultAttributes(),d=Object(x.d)(this._fieldsIndex,l,c.attributes,this._requiredFields,!0,e.warnings);d?e.featureErrors.push(d):(this._assignObjectId(l,c.attributes,!0),c.attributes=l,c.objectId=l[a],u.push(c))}}catch(y){o.e(y)}finally{o.f()}if(i.addMany(u),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){var h=this._queryEngine.timeExtent,f=h.start,p=h.end;e.layerDefinition.timeInfo.timeExtent=[f,p]}return e}},{key:"_applyEdits",value:function(e){var t=e.adds,n=e.updates,r=e.deletes,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(i,t),n&&n.length&&this._applyUpdateEdits(i,n),r&&r.length){var a,u=Object(s.a)(r);try{for(u.s();!(a=u.n()).done;){var o=a.value;i.deleteResults.push(Object(x.b)(o))}}catch(c){u.e(c)}finally{u.f()}this._queryEngine.featureStore.removeManyById(r)}return{fullExtent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:i}}},{key:"_applyAddEdits",value:function(e,t){var n,r=e.addResults,i=this._queryEngine,a=i.geometryType,u=i.hasM,o=i.hasZ,c=i.objectIdField,l=i.spatialReference,d=i.featureStore,p=[],v=Object(s.a)(t);try{for(v.s();!(n=v.n()).done;){var b=n.value;if(b.geometry&&a!==Object(f.c)(b.geometry))r.push(Object(x.a)("Incorrect geometry type."));else{var g=this._createDefaultAttributes(),j=Object(x.d)(this._fieldsIndex,g,b.attributes,this._requiredFields);if(j)r.push(j);else{if(this._assignObjectId(g,b.attributes),b.attributes=g,null!=b.uid){var _=b.attributes[c];e.uidToObjectId[b.uid]=_}Object(h.j)(b.geometry)&&(b.geometry=Object(m.b)(Object(x.e)(b.geometry,l),b.geometry.spatialReference,l)),p.push(b),r.push(Object(x.b)(b.attributes[c]))}}}}catch(O){v.e(O)}finally{v.f()}d.addMany(Object(y.c)([],p,a,o,u,c))}},{key:"_applyUpdateEdits",value:function(e,t){var n,r=e.updateResults,i=this._queryEngine,a=i.geometryType,u=i.hasM,o=i.hasZ,c=i.objectIdField,l=i.spatialReference,d=i.featureStore,p=Object(s.a)(t);try{for(p.s();!(n=p.n()).done;){var v=n.value,b=v.attributes,g=v.geometry,j=b&&b[c];if(null!=j)if(d.has(j)){var _=Object(y.i)(d.getFeature(j),a,o,u);if(Object(h.j)(g)){if(a!==Object(f.c)(g)){r.push(Object(x.a)("Incorrect geometry type."));continue}_.geometry=Object(m.b)(Object(x.e)(g,l),g.spatialReference,l)}if(b){var O=Object(x.d)(this._fieldsIndex,_.attributes,b,this._requiredFields);if(O){r.push(O);continue}}d.add(Object(y.a)(_,a,o,u,c)),r.push(Object(x.b)(j))}else r.push(Object(x.a)("Feature with object id ".concat(j," missing")));else r.push(Object(x.a)("Identifier field ".concat(c," missing")))}}catch(I){p.e(I)}finally{p.f()}}},{key:"_assignObjectId",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this._queryEngine.objectIdField;n&&isFinite(t[r])?e[r]=t[r]:e[r]=this._nextObjectId++}},{key:"_checkProjection",value:function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.a)(p.b,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new d.a("geojson-layer","Projection not supported");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()},737:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return c}));var r=n(19),i=n(12),a=n(16),s=n(23),u=n(743),o=n(223);function c(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.a:"esriGeometryPolyline"===e?o.c:o.b}}}function l(e,t){if(Object(a.a)("csp-restrictions"))return function(){return Object(i.a)(Object(r.a)({},t,null),e)};try{var n="this.".concat(t," = null;");for(var s in e)n+="this".concat(s.indexOf(".")?'["'.concat(s,'"]'):".".concat(s)," = ").concat(JSON.stringify(e[s]),";");var u=new Function(n);return function(){return new u}}catch(o){return function(){return Object(i.a)(Object(r.a)({},t,null),e)}}}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:Object(s.a)(e)}}]}function h(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:u.a,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},745:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(6),i=n(7),a=n(13),s=n(2),u=n(4),o=n(111),c=n(11),l=n(157),d=n(449),h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,n=arguments.length>1?arguments[1]:void 0;Object(s.a)(this,e),this.compareMinX=v,this.compareMinY=m,this.toBBox=function(e){return e},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}return Object(u.a)(e,[{key:"destroy",value:function(){this.clear(),k.prune(),B.prune(),w.prune(),F.prune()}},{key:"all",value:function(e){this._all(this.data,e)}},{key:"search",value:function(e,t){var n=this.data,r=this.toBBox;if(O(e,n))for(k.clear();n;){for(var i=0,a=n.children.length;i<a;i++){var s=n.children[i],u=n.leaf?r(s):s;O(e,u)&&(n.leaf?t(s):_(e,u)?this._all(s,t):k.push(s))}n=k.pop()}}},{key:"collides",value:function(e){var t=this.data,n=this.toBBox;if(!O(e,t))return!1;for(k.clear();t;){for(var r=0,i=t.children.length;r<i;r++){var a=t.children[r],s=t.leaf?n(a):a;if(O(e,s)){if(t.leaf||_(e,s))return!0;k.push(a)}}t=k.pop()}return!1}},{key:"load",value:function(e){if(!e.length)return this;if(e.length<this._minEntries){for(var t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}var r=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var i=this.data;this.data=r,r=i}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this}},{key:"insert",value:function(e){return e&&this._insert(e,this.data.height-1),this}},{key:"clear",value:function(){return this.data=new E([]),this}},{key:"remove",value:function(e){if(!e)return this;var t,n=this.data,r=null,i=0,a=!1,s=this.toBBox(e);for(w.clear(),F.clear();n||w.length>0;){var u;if(n||(n=Object(c.c)(w.pop()),r=w.data[w.length-1],i=null!=(u=F.pop())?u:0,a=!0),n.leaf&&-1!==(t=Object(o.e)(n.children,e,n.children.length,n.indexHint)))return n.children.splice(t,1),w.push(n),this._condense(w),this;a||n.leaf||!_(n,s)?r?(i++,n=r.children[i],a=!1):n=null:(w.push(n),F.push(i),i=0,r=n,n=n.children[0])}return this}},{key:"toJSON",value:function(){return this.data}},{key:"fromJSON",value:function(e){return this.data=e,this}},{key:"_all",value:function(e,t){var n=e;for(B.clear();n;){var r;if(!0===n.leaf){var i,s=Object(a.a)(n.children);try{for(s.s();!(i=s.n()).done;){t(i.value)}}catch(u){s.e(u)}finally{s.f()}}else B.pushArray(n.children);n=null!=(r=B.pop())?r:null}}},{key:"_build",value:function(e,t,n,r){var i=n-t+1,a=this._maxEntries;if(i<=a){var s=new E(e.slice(t,n+1));return f(s,this.toBBox),s}r||(r=Math.ceil(Math.log(i)/Math.log(a)),a=Math.ceil(i/Math.pow(a,r-1)));var u=new S([]);u.height=r;var o=Math.ceil(i/a),c=o*Math.ceil(Math.sqrt(a));I(e,t,n,c,this.compareMinX);for(var l=t;l<=n;l+=c){var d=Math.min(l+c-1,n);I(e,l,d,o,this.compareMinY);for(var h=l;h<=d;h+=o){var p=Math.min(h+o-1,d);u.children.push(this._build(e,h,p,r-1))}}return f(u,this.toBBox),u}},{key:"_chooseSubtree",value:function(e,t,n,r){for(;r.push(t),!0!==t.leaf&&r.length-1!==n;){for(var i=void 0,a=1/0,s=1/0,u=0,o=t.children.length;u<o;u++){var c=t.children[u],l=b(c),d=j(e,c)-l;d<s?(s=d,a=l<a?l:a,i=c):d===s&&l<a&&(a=l,i=c)}t=i||t.children[0]}return t}},{key:"_insert",value:function(e,t,n){var r=this.toBBox,i=n?e:r(e);w.clear();var a=this._chooseSubtree(i,this.data,t,w);for(a.children.push(e),y(a,i);t>=0&&w.data[t].children.length>this._maxEntries;)this._split(w,t),t--;this._adjustParentBBoxes(i,w,t)}},{key:"_split",value:function(e,t){var n=e.data[t],r=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,r);var a=this._chooseSplitIndex(n,i,r);if(a){var s=n.children.splice(a,n.children.length-a),u=n.leaf?new E(s):new S(s);u.height=n.height,f(n,this.toBBox),f(u,this.toBBox),t?e.data[t-1].children.push(u):this._splitRoot(n,u)}else console.log("  Error: assertion failed at PooledRBush._split: no valid split index")}},{key:"_splitRoot",value:function(e,t){this.data=new S([e,t]),this.data.height=e.height+1,f(this.data,this.toBBox)}},{key:"_chooseSplitIndex",value:function(e,t,n){var r,i,a;r=i=1/0;for(var s=t;s<=n-t;s++){var u=p(e,0,s,this.toBBox),o=p(e,s,n,this.toBBox),c=x(u,o),l=b(u)+b(o);c<r?(r=c,a=s,i=l<i?l:i):c===r&&l<i&&(i=l,a=s)}return a}},{key:"_chooseSplitAxis",value:function(e,t,n){var r=e.leaf?this.compareMinX:v,i=e.leaf?this.compareMinY:m;this._allDistMargin(e,t,n,r)<this._allDistMargin(e,t,n,i)&&e.children.sort(r)}},{key:"_allDistMargin",value:function(e,t,n,r){e.children.sort(r);for(var i=this.toBBox,a=p(e,0,t,i),s=p(e,n-t,n,i),u=g(a)+g(s),o=t;o<n-t;o++){var c=e.children[o];y(a,e.leaf?i(c):c),u+=g(a)}for(var l=n-t-1;l>=t;l--){var d=e.children[l];y(s,e.leaf?i(d):d),u+=g(s)}return u}},{key:"_adjustParentBBoxes",value:function(e,t,n){for(var r=n;r>=0;r--)y(t.data[r],e)}},{key:"_condense",value:function(e){for(var t=e.length-1;t>=0;t--){var n=e.data[t];if(0===n.children.length)if(t>0){var r=e.data[t-1],i=r.children;i.splice(Object(o.e)(i,n,i.length,r.indexHint),1)}else this.clear();else f(n,this.toBBox)}}},{key:"_initFormat",value:function(e){var t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}]),e}();function f(e,t){p(e,0,e.children.length,t,e)}function p(e,t,n,r,i){i||(i=new E([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(var a,s=t;s<n;s++)a=e.children[s],y(i,e.leaf?r(a):a);return i}function y(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function v(e,t){return e.minX-t.minX}function m(e,t){return e.minY-t.minY}function b(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function g(e){return e.maxX-e.minX+(e.maxY-e.minY)}function j(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function x(e,t){var n=Math.max(e.minX,t.minX),r=Math.max(e.minY,t.minY),i=Math.min(e.maxX,t.maxX),a=Math.min(e.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,a-r)}function _(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function O(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function I(e,t,n,r,i){for(var a=[t,n];a.length;){var s=Object(c.c)(a.pop()),u=Object(c.c)(a.pop());if(!(s-u<=r)){var o=u+Math.ceil((s-u)/r/2)*r;Object(d.a)(e,o,u,s,i),a.push(u,o,o,s)}}}var k=new l.a,B=new l.a,w=new l.a,F=new l.a({deallocator:void 0}),M=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.apply(this,arguments)).height=1,e.indexHint=new o.a,e}return n}((function e(){Object(s.a)(this,e),this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0})),E=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this)).children=e,r.leaf=!0,r}return n}(M),S=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this)).children=e,r.leaf=!1,r}return n}(M)},753:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(2),i=n(4),a=n(16),s=n(745),u={minX:0,minY:0,maxX:0,maxY:0};var o=function(){function e(){var t=this;Object(r.a)(this,e),this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.a(9,Object(a.a)("csp-restrictions")?function(e){return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}}:["[0]","[1]","[2]","[3]"]),this._loadIndex=function(){if(t._indexInvalid){var e=new Array(t._idByBounds.size),n=0;t._idByBounds.forEach((function(t,r){e[n++]=r})),t._indexInvalid=!1,t._index.clear(),t._index.load(e)}else t._boundsToLoad.length&&(t._index.load(t._boundsToLoad.filter((function(e){return t._idByBounds.has(e)}))),t._boundsToLoad.length=0)}}return Object(i.a)(e,[{key:"clear",value:function(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}},{key:"delete",value:function(e){var t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}},{key:"forEachInBounds",value:function(e,t){var n=this;this._loadIndex(),function(e,t,n){u.minX=t[0],u.minY=t[1],u.maxX=t[2],u.maxY=t[3],e.search(u,n)}(this._index,e,(function(e){return t(n._idByBounds.get(e))}))}},{key:"get",value:function(e){return this._boundsById.get(e)}},{key:"has",value:function(e){return this._boundsById.has(e)}},{key:"invalidateIndex",value:function(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}},{key:"set",value:function(e,t){if(!this._indexInvalid){var n=this._boundsById.get(e);n&&(this._index.remove(n),this._idByBounds.delete(n))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}]),e}()},763:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(13),i=n(2),a=n(4),s=n(22),u=n(105),o=n(15),c=n(11),l=n(332),d=n(94),h=n(396),f=n(753),p=n(692),y=n(188),v=n(137),m={getObjectId:function(e){return e.objectId},getAttributes:function(e){return e.attributes},getAttribute:function(e,t){return e.attributes[t]},cloneWithGeometry:function(e,t){return new y.b(t,e.attributes,null,e.objectId)},getGeometry:function(e){return e.geometry},getCentroid:function(e,t){return e.centroid||(e.centroid=Object(p.a)(new v.a,e.geometry,t.hasZ,t.hasM)),e.centroid}},b=function(){function e(t){Object(i.a)(this,e),this.geometryInfo=t,this._boundsStore=new f.a,this._featuresById=new Map,this._markedIds=new Set,this.events=new u.a,this.featureAdapter=m}return Object(a.a)(e,[{key:"geometryType",get:function(){return this.geometryInfo.geometryType}},{key:"hasM",get:function(){return this.geometryInfo.hasM}},{key:"hasZ",get:function(){return this.geometryInfo.hasZ}},{key:"numFeatures",get:function(){return this._featuresById.size}},{key:"fullBounds",get:function(){var e=this;if(!this.numFeatures)return null;var t=Object(d.h)(d.a);return this._featuresById.forEach((function(n){var r=e._boundsStore.get(n.objectId);r&&(t[0]=Math.min(r[0],t[0]),t[1]=Math.min(r[1],t[1]),t[2]=Math.max(r[2],t[2]),t[3]=Math.max(r[3],t[3]))})),t}},{key:"storeStatistics",get:function(){var e=0;return this._featuresById.forEach((function(t){Object(c.j)(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}},{key:"add",value:function(e){this._add(e),this._emitChanged()}},{key:"addMany",value:function(e){var t,n=Object(r.a)(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;this._add(i)}}catch(a){n.e(a)}finally{n.f()}this._emitChanged()}},{key:"clear",value:function(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}},{key:"removeById",value:function(e){var t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}},{key:"removeManyById",value:function(e){this._boundsStore.invalidateIndex();var t,n=Object(r.a)(e);try{for(n.s();!(t=n.n()).done;){var i=t.value,a=this._featuresById.get(i);a&&this._remove(a)}}catch(s){n.e(s)}finally{n.f()}this._emitChanged()}},{key:"forEachBounds",value:function(e,t,n){var i,a=Object(r.a)(e);try{for(a.s();!(i=a.n()).done;){var s=i.value,u=this._boundsStore.get(s.objectId);u&&t(Object(l.h)(n,u))}}catch(o){a.e(o)}finally{a.f()}}},{key:"getFeature",value:function(e){return this._featuresById.get(e)}},{key:"has",value:function(e){return this._featuresById.has(e)}},{key:"forEach",value:function(e){this._featuresById.forEach((function(t){return e(t)}))}},{key:"forEachInBounds",value:function(e,t){var n=this;this._boundsStore.forEachInBounds(e,(function(e){t(n._featuresById.get(e))}))}},{key:"startMarkingUsedFeatures",value:function(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}},{key:"sweep",value:function(){var e=this,t=!1;this._featuresById.forEach((function(n,r){e._markedIds.has(r)||(t=!0,e._remove(n))})),this._markedIds.clear(),t&&this._emitChanged()}},{key:"_emitChanged",value:function(){this.events.emit("changed",void 0)}},{key:"_add",value:function(e){if(e){var t=e.objectId;if(null!=t){var n,r=this._featuresById.get(t);if(this._markedIds.add(t),r?(e.displayId=r.displayId,n=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(c.j)(this.onFeatureAdd)&&this.onFeatureAdd(e),Object(c.i)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);n=Object(h.r)(Object(c.j)(n)?n:Object(d.h)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),Object(c.j)(n)&&this._boundsStore.set(t,n),this._featuresById.set(t,e)}else o.a.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.a("featurestore:invalid-feature","feature id is missing",{feature:e}))}}},{key:"_remove",value:function(e){return Object(c.j)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}]),e}()},783:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return M})),n.d(t,"d",(function(){return F}));var r=n(20),i=n(8),a=n.n(i),s=n(13),u=n(22),o=n(188),c=n(137),l=a.a.mark(y),d=a.a.mark(v),h=a.a.mark(m),f={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function p(e){return f[e]}function y(e){var t,n,r;return a.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:i.t0=e.type,i.next="Feature"===i.t0?3:"FeatureCollection"===i.t0?6:25;break;case 3:return i.next=5,e;case 5:return i.abrupt("break",25);case 6:t=Object(s.a)(e.features),i.prev=7,t.s();case 9:if((n=t.n()).done){i.next=17;break}if(r=n.value,i.t1=r,!i.t1){i.next=15;break}return i.next=15,r;case 15:i.next=9;break;case 17:i.next=22;break;case 19:i.prev=19,i.t2=i.catch(7),t.e(i.t2);case 22:return i.prev=22,t.f(),i.finish(22);case 25:case"end":return i.stop()}}),l,null,[[7,19,22,25]])}function v(e){var t,n,r,i,u,o,c,l,h;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return",null);case 2:a.t0=e.type,a.next="Point"===a.t0?5:"LineString"===a.t0||"MultiPoint"===a.t0?8:"MultiLineString"===a.t0||"Polygon"===a.t0?10:"MultiPolygon"===a.t0?27:58;break;case 5:return a.next=7,e.coordinates;case 7:return a.abrupt("break",58);case 8:return a.delegateYield(e.coordinates,"t1",9);case 9:return a.abrupt("break",58);case 10:t=Object(s.a)(e.coordinates),a.prev=11,t.s();case 13:if((n=t.n()).done){a.next=18;break}return r=n.value,a.delegateYield(r,"t2",16);case 16:a.next=13;break;case 18:a.next=23;break;case 20:a.prev=20,a.t3=a.catch(11),t.e(a.t3);case 23:return a.prev=23,t.f(),a.finish(23);case 26:return a.abrupt("break",58);case 27:i=Object(s.a)(e.coordinates),a.prev=28,i.s();case 30:if((u=i.n()).done){a.next=50;break}o=u.value,c=Object(s.a)(o),a.prev=33,c.s();case 35:if((l=c.n()).done){a.next=40;break}return h=l.value,a.delegateYield(h,"t4",38);case 38:a.next=35;break;case 40:a.next=45;break;case 42:a.prev=42,a.t5=a.catch(33),c.e(a.t5);case 45:return a.prev=45,c.f(),a.finish(45);case 48:a.next=30;break;case 50:a.next=55;break;case 52:a.prev=52,a.t6=a.catch(28),i.e(a.t6);case 55:return a.prev=55,i.f(),a.finish(55);case 58:case"end":return a.stop()}}),d,null,[[11,20,23,26],[28,52,55,58],[33,42,45,48]])}function m(e){var t,n,r,i,u,l,d,f,y,v,m,b,g,j=arguments;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=j.length>1&&void 0!==j[1]?j[1]:{},n=t.geometryType,r=t.objectIdField,i=Object(s.a)(e),a.prev=3,i.s();case 5:if((u=i.n()).done){a.next=18;break}if(l=u.value,f=l.geometry,y=l.properties,v=l.id,!f||p(f.type)===n){a.next=10;break}return a.abrupt("continue",16);case 10:return b=null!=(d=(m=y||{})[r])?d:null,r&&null!=v&&!m[r]&&(m[r]=b=v),g=new o.b(f?x(new c.a,f,t):null,m,null,b),a.next=16,g;case 16:a.next=5;break;case 18:a.next=23;break;case 20:a.prev=20,a.t0=a.catch(3),i.e(a.t0);case 23:return a.prev=23,i.f(),a.finish(23);case 26:case"end":return a.stop()}}),h,null,[[3,20,23,26]])}function b(e){var t,n=Object(s.a)(e);try{for(n.s();!(t=n.n()).done;){if(t.value.length>2)return!0}}catch(r){n.e(r)}finally{n.f()}return!1}function g(e){for(var t=0,n=0;n<e.length;n++){var r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return t<=0}function j(e){var t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function x(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return I(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){var r,i=Object(s.a)(t.coordinates);try{for(i.s();!(r=i.n()).done;){I(e,r.value,n)}}catch(a){i.e(a)}finally{i.f()}return e}(e,t,n);case"MultiPolygon":return function(e,t,n){var r,i=Object(s.a)(t.coordinates);try{for(i.s();!(r=i.n()).done;){var a=r.value;_(e,a[0],n);for(var u=1;u<a.length;u++)O(e,a[u],n)}}catch(o){i.e(o)}finally{i.f()}return e}(e,t,n);case"Point":return function(e,t,n){return B(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){var r=t.coordinates;_(e,r[0],n);for(var i=1;i<r.length;i++)O(e,r[i],n);return e}(e,t,n)}}function _(e,t,n){var r=j(t);!function(e){return!g(e)}(r)?I(e,r,n):k(e,r,n)}function O(e,t,n){var r=j(t);!function(e){return g(e)}(r)?I(e,r,n):k(e,r,n)}function I(e,t,n){var r,i=Object(s.a)(t);try{for(i.s();!(r=i.n()).done;){B(e,r.value,n)}}catch(a){i.e(a)}finally{i.f()}e.lengths.push(t.length)}function k(e,t,n){for(var r=t.length-1;r>=0;r--)B(e,t[r],n);e.lengths.push(t.length)}function B(e,t,n){var i=Object(r.a)(t,3),a=i[0],s=i[1],u=i[2];e.coords.push(a,s),n.hasZ&&e.coords.push(u||0)}function w(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function F(e){if(!e)throw new u.a("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new u.a("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});var t=e.crs;if(t){var n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!r.test(n))throw new u.a("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}}function M(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=[],a=new Set,u=new Set,o=!1,c=Number.NEGATIVE_INFINITY,l=null,d=!1,h=r.geometryType,f=void 0===h?null:h,m=!1,g=Object(s.a)(y(e));try{var j=function(){var e=n.value,r=e.geometry,s=e.properties,h=e.id;if((!r||(f||(f=p(r.type)),p(r.type)===f))&&(o||(o=b(v(r))),d||(d=null!=h)&&("number"===(t=typeof h)&&(l=Object.keys(s).filter((function(e){return s[e]===h})))),d&&"number"===t&&null!=h&&(c=Math.max(c,h),l.length>1?l=l.filter((function(e){return s[e]===h})):1===l.length&&(l=s[l[0]]===h?l:[])),!m&&s)){var y=!0;for(var g in s)if(!a.has(g)){var j=s[g];if(null!=j){var x=w(j);"unknown"!==x?(u.delete(g),a.add(g),i.push({name:g,alias:g,type:x})):u.add(g)}else y=!1,u.add(g)}m=y}};for(g.s();!(n=g.n()).done;)j()}catch(k){g.e(k)}finally{g.f()}var x=l&&1===l.length&&l[0]||null;if(x){var _,O=Object(s.a)(i);try{for(O.s();!(_=O.n()).done;){var I=_.value;I.name===x&&(I.type="esriFieldTypeOID")}}catch(k){O.e(k)}finally{O.f()}}return{fields:i,geometryType:f,hasZ:o,maxObjectId:Math.max(0,c),objectIdFieldName:x,objectIdFieldType:t,unknownFields:Array.from(u)}}function E(e,t){return Array.from(m(y(e),t))}},803:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return g}));var r=n(8),i=n.n(r),a=n(14),s=n(13),u=n(2),o=n(43),c=n(68),l=function e(){Object(u.a)(this,e),this.code=null,this.description=null},d=function e(t){Object(u.a)(this,e),this.error=new l,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t};function h(e){return new d(e)}var f=function e(t){Object(u.a)(this,e),this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t};function p(e){return new f(e)}var y,v=new Set;function m(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=arguments.length>5?arguments[5]:void 0;for(var u in v.clear(),n){var o=e.get(u);if(o){var l=n[u],d=b(o,l);if(d!==l&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:o,originalValue:l,sanitizedValue:d}}),v.add(o.name),o&&(i||o.editable)){var f=Object(c.u)(o,d);if(f)return h(Object(c.v)(f,o,d));t[o.name]=d}}}if(r){var p,y=Object(s.a)(r);try{for(y.s();!(p=y.n()).done;){var m=p.value;if(!v.has(m.name))return h('missing required field "'.concat(m.name,'"'))}}catch(g){y.e(g)}finally{y.f()}}return null}function b(e,t){var n=t;return"string"==typeof t&&Object(c.p)(e)?n=parseFloat(t):null!=t&&Object(c.q)(e)&&"string"!=typeof t&&(n=String(t)),Object(c.s)(n)}function g(e,t){if(!e||!Object(o.l)(t))return e;if("rings"in e||"paths"in e){if(!y)throw new TypeError("geometry engine not loaded");return y.simplify(t,e)}return e}function j(){return x.apply(this,arguments)}function x(){return(x=Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=y,e.t0){e.next=6;break}return e.next=4,Promise.all([n.e(7),n.e(20)]).then(n.bind(null,807));case 4:y=e.sent,e.t0=y;case 6:return e.abrupt("return",e.t0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return O.apply(this,arguments)}function O(){return(O=Object(a.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!Object(o.l)(t)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n,e.t0){e.next=4;break}return e.next=4,j();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=64.8867787a.chunk.js.map