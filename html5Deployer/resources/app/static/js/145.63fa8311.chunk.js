(this["webpackJsonpgreen-sap"]=this["webpackJsonpgreen-sap"]||[]).push([[145],{767:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return r})),t.d(n,"e",(function(){return l}));var a=t(13);t(23),t(12),t(66);function r(e){var n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,a=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!t&&!a}function u(e){var n=e.values,t=e.supportsNullCount,a=n.filter((function(e){return null!=e})).length,r={count:a};return t&&(r.nullcount=n.length-a),r}function i(e){var n,t=e.values,r=e.useSampleStdDev,u=e.supportsNullCount,i=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,o=null,s=null,c=null,f=null,p=0,m=null==e.minValue?-1/0:e.minValue,v=null==e.maxValue?1/0:e.maxValue,b=Object(a.a)(t);try{for(b.s();!(n=b.n()).done;){var d=n.value;Number.isFinite(d)?d>=m&&d<=v&&(o+=d,i=Math.min(i,d),l=Math.max(l,d),p++):"string"==typeof d&&p++}}catch(N){b.e(N)}finally{b.f()}if(p&&null!=o){s=o/p;var h,x=0,g=Object(a.a)(t);try{for(g.s();!(h=g.n()).done;){var w=h.value;Number.isFinite(w)&&w>=m&&w<=v&&(x+=Math.pow(w-s,2))}}catch(N){g.e(N)}finally{g.f()}f=r?p>1?x/(p-1):0:p>0?x/p:0,c=Math.sqrt(f)}else i=null,l=null;var y={avg:s,count:p,max:l,min:i,stddev:c,sum:o,variance:f};return u&&(y.nullcount=t.length-p),y}function l(e,n){return n?(["avg","stddev","variance"].forEach((function(n){null!=e[n]&&(e[n]=Math.ceil(e[n]))})),e):e}function o(e,n,t,a){var r=null;switch(n){case"log":0!==e&&(r=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(a)&&0!==a&&(r=e/a*100);break;case"field":Number.isFinite(t)&&0!==t&&(r=e/t);break;case"natural-log":e>0&&(r=Math.log(e));break;case"square-root":e>0&&(r=Math.pow(e,.5))}return r}},936:function(e,n,t){"use strict";t.r(n),t.d(n,"getDataValues",(function(){return m})),t.d(n,"summaryStatistics",(function(){return f}));var a=t(9),r=t.n(a),u=t(14),i=t(82),l=t(45),o=t(767),s=t(118),c=null;function f(e){return p.apply(this,arguments)}function p(){return(p=Object(u.a)(r.a.mark((function e(n){var t,a,u,i,l,s,c,f,p,v;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.attribute,a=n.featuresJSON,u=t.normalizationType,i=t.normalizationField,l=t.minValue,s=t.maxValue,c=t.fieldType,e.next=9,m({field:t.field,valueExpression:t.valueExpression,normalizationType:u,normalizationField:i,normalizationTotal:t.normalizationTotal,viewInfoParams:t.viewInfoParams},a);case 9:return f=e.sent,p=Object(o.d)({normalizationType:u,normalizationField:i,minValue:l,maxValue:s}),v="string"===c?Object(o.b)({values:f,supportsNullCount:p}):Object(o.a)({values:f,minValue:l,maxValue:s,useSampleStdDev:!u,supportsNullCount:p}),e.abrupt("return",Object(o.e)(v,"date"===c));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,n){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(r.a.mark((function e(n,t){var a,u,f,p,m,v,b,d,h,x,g;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",[]);case 2:if(a=n.field,u=n.valueExpression,f=n.normalizationType,p=n.normalizationField,m=n.normalizationTotal,v=[],b=n.viewInfoParams,d=null,h=null,!u){e.next=12;break}if(c){e.next=11;break}return e.next=8,Object(s.e)();case 8:x=e.sent,g=x.arcadeUtils,c=g;case 11:d=c.createFunction(u),h=b&&c.getViewInfo({viewingMode:b.viewingMode,scale:b.scale,spatialReference:new l.a(b.spatialReference)});case 12:return e.abrupt("return",(t.forEach((function(e){var n,t=e.attributes;if(u){var r=c.createExecContext(e,h);n=c.executeFunction(d,r)}else t&&(n=t[a]);if(f&&Object(i.f)(n)){var l=t&&parseFloat(t[p]);n=Object(o.c)(n,f,l,m)}v.push(n)})),v));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=145.63fa8311.chunk.js.map