(this["webpackJsonpgreen-sap"]=this["webpackJsonpgreen-sap"]||[]).push([[55],{600:function(t,e,r){"use strict";r.r(e),r.d(e,"ElevationSamplerWorker",(function(){return d})),r.d(e,"default",(function(){return d}));var n=r(13),a=r(8),i=r.n(a),o=r(14),c=r(2),u=r(4),f=r(16),l=r(11),s=r(745),h=r(779),d=function(){function t(){Object(c.a)(this,t)}return Object(u.a)(t,[{key:"createIndex",value:function(){var t=Object(o.a)(i.a.mark((function t(e,r){var n,a,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=new Array,e.vertexAttributes&&e.vertexAttributes.position){t.next=3;break}return t.abrupt("return",new s.a);case 3:if(a=this.createMeshData(e),!Object(l.j)(r)){t.next=10;break}return t.next=7,r.invoke("createIndexThread",a,{transferList:n});case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=this.createIndexThread(a).result;case 11:return o=t.t0,t.abrupt("return",this.createPooledRBush().fromJSON(o));case 13:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"createIndexThread",value:function(t){var e=new Float64Array(t.position),r=this.createPooledRBush();return t.components?this.createIndexComponentsThread(r,e,t.components.map((function(t){return new Uint32Array(t)}))):this.createIndexAllThread(r,e)}},{key:"createIndexAllThread",value:function(t,e){for(var r=new Array(e.length/9),n=0,a=0;a<e.length;a+=9)r[n++]=b(e,a+0,a+3,a+6);return t.load(r),{result:t.toJSON()}}},{key:"createIndexComponentsThread",value:function(t,e,r){var a,i=0,o=Object(n.a)(r);try{for(o.s();!(a=o.n()).done;){i+=a.value.length/3}}catch(d){o.e(d)}finally{o.f()}var c,u=new Array(i),f=0,l=Object(n.a)(r);try{for(l.s();!(c=l.n()).done;)for(var s=c.value,h=0;h<s.length;h+=3)u[f++]=b(e,3*s[h+0],3*s[h+1],3*s[h+2])}catch(d){l.e(d)}finally{l.f()}return t.load(u),{result:t.toJSON()}}},{key:"createMeshData",value:function(t){var e=(t.transform?Object(h.b)({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some((function(t){return!t.faces}))?{position:e}:{position:e,components:t.components.map((function(t){return t.faces}))}}},{key:"createPooledRBush",value:function(){return new s.a(9,Object(f.a)("csp-restrictions")?function(t){return t}:[".minX",".minY",".maxX",".maxY"])}}]),t}();function b(t,e,r,n){return{minX:Math.min(t[e+0],t[r+0],t[n+0]),maxX:Math.max(t[e+0],t[r+0],t[n+0]),minY:Math.min(t[e+1],t[r+1],t[n+1]),maxY:Math.max(t[e+1],t[r+1],t[n+1]),p0:[t[e+0],t[e+1],t[e+2]],p1:[t[r+0],t[r+1],t[r+2]],p2:[t[n+0],t[n+1],t[n+2]]}}},703:function(t,e,r){"use strict";function n(){return[1,0,0,0,1,0,0,0,1]}function a(t,e){return new Float64Array(t,e,9)}r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return n}));Object.freeze({__proto__:null,create:n,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,e,r,n,a,i,o,c,u){return[t,e,r,n,a,i,o,c,u]},createView:a})},720:function(t,e,r){"use strict";function n(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function a(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function i(t,e){return new Float64Array(t,e,16)}r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return a})),r.d(e,"d",(function(){return n}));var o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,create:n,clone:a,fromValues:function(t,e,r,n,a,i,o,c,u,f,l,s,h,d,b,v){return[t,e,r,n,a,i,o,c,u,f,l,s,h,d,b,v]},createView:i,IDENTITY:o})},736:function(t,e,r){"use strict";function n(){return[0,0,0,1]}function a(t){return[t[0],t[1],t[2],t[3]]}function i(t,e){return new Float64Array(t,e,4)}r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return a})),r.d(e,"d",(function(){return i}));var o=[0,0,0,1];Object.freeze({__proto__:null,create:n,clone:a,fromValues:function(t,e,r,n){return[t,e,r,n]},createView:i,IDENTITY:o})},745:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(6),a=r(7),i=r(13),o=r(2),c=r(4),u=r(111),f=r(11),l=r(157),s=r(449),h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,r=arguments.length>1?arguments[1]:void 0;Object(o.a)(this,t),this.compareMinX=p,this.compareMinY=m,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),r&&("function"==typeof r?this.toBBox=r:this._initFormat(r)),this.clear()}return Object(c.a)(t,[{key:"destroy",value:function(){this.clear(),_.prune(),B.prune(),T.prune(),w.prune()}},{key:"all",value:function(t){this._all(this.data,t)}},{key:"search",value:function(t,e){var r=this.data,n=this.toBBox;if(M(t,r))for(_.clear();r;){for(var a=0,i=r.children.length;a<i;a++){var o=r.children[a],c=r.leaf?n(o):o;M(t,c)&&(r.leaf?e(o):x(t,c)?this._all(o,e):_.push(o))}r=_.pop()}}},{key:"collides",value:function(t){var e=this.data,r=this.toBBox;if(!M(t,e))return!1;for(_.clear();e;){for(var n=0,a=e.children.length;n<a;n++){var i=e.children[n],o=e.leaf?r(i):i;if(M(t,o)){if(e.leaf||x(t,o))return!0;_.push(i)}}e=_.pop()}return!1}},{key:"load",value:function(t){if(!t.length)return this;if(t.length<this._minEntries){for(var e=0,r=t.length;e<r;e++)this.insert(t[e]);return this}var n=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var a=this.data;this.data=n,n=a}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this}},{key:"insert",value:function(t){return t&&this._insert(t,this.data.height-1),this}},{key:"clear",value:function(){return this.data=new E([]),this}},{key:"remove",value:function(t){if(!t)return this;var e,r=this.data,n=null,a=0,i=!1,o=this.toBBox(t);for(T.clear(),w.clear();r||T.length>0;){var c;if(r||(r=Object(f.c)(T.pop()),n=T.data[T.length-1],a=null!=(c=w.pop())?c:0,i=!0),r.leaf&&-1!==(e=Object(u.e)(r.children,t,r.children.length,r.indexHint)))return r.children.splice(e,1),T.push(r),this._condense(T),this;i||r.leaf||!x(r,o)?n?(a++,r=n.children[a],i=!1):r=null:(T.push(r),w.push(a),a=0,n=r,r=r.children[0])}return this}},{key:"toJSON",value:function(){return this.data}},{key:"fromJSON",value:function(t){return this.data=t,this}},{key:"_all",value:function(t,e){var r=t;for(B.clear();r;){var n;if(!0===r.leaf){var a,o=Object(i.a)(r.children);try{for(o.s();!(a=o.n()).done;){e(a.value)}}catch(c){o.e(c)}finally{o.f()}}else B.pushArray(r.children);r=null!=(n=B.pop())?n:null}}},{key:"_build",value:function(t,e,r,n){var a=r-e+1,i=this._maxEntries;if(a<=i){var o=new E(t.slice(e,r+1));return d(o,this.toBBox),o}n||(n=Math.ceil(Math.log(a)/Math.log(i)),i=Math.ceil(a/Math.pow(i,n-1)));var c=new k([]);c.height=n;var u=Math.ceil(a/i),f=u*Math.ceil(Math.sqrt(i));A(t,e,r,f,this.compareMinX);for(var l=e;l<=r;l+=f){var s=Math.min(l+f-1,r);A(t,l,s,u,this.compareMinY);for(var h=l;h<=s;h+=u){var b=Math.min(h+u-1,s);c.children.push(this._build(t,h,b,n-1))}}return d(c,this.toBBox),c}},{key:"_chooseSubtree",value:function(t,e,r,n){for(;n.push(e),!0!==e.leaf&&n.length-1!==r;){for(var a=void 0,i=1/0,o=1/0,c=0,u=e.children.length;c<u;c++){var f=e.children[c],l=j(f),s=O(t,f)-l;s<o?(o=s,i=l<i?l:i,a=f):s===o&&l<i&&(i=l,a=f)}e=a||e.children[0]}return e}},{key:"_insert",value:function(t,e,r){var n=this.toBBox,a=r?t:n(t);T.clear();var i=this._chooseSubtree(a,this.data,e,T);for(i.children.push(t),v(i,a);e>=0&&T.data[e].children.length>this._maxEntries;)this._split(T,e),e--;this._adjustParentBBoxes(a,T,e)}},{key:"_split",value:function(t,e){var r=t.data[e],n=r.children.length,a=this._minEntries;this._chooseSplitAxis(r,a,n);var i=this._chooseSplitIndex(r,a,n);if(i){var o=r.children.splice(i,r.children.length-i),c=r.leaf?new E(o):new k(o);c.height=r.height,d(r,this.toBBox),d(c,this.toBBox),e?t.data[e-1].children.push(c):this._splitRoot(r,c)}else console.log("  Error: assertion failed at PooledRBush._split: no valid split index")}},{key:"_splitRoot",value:function(t,e){this.data=new k([t,e]),this.data.height=t.height+1,d(this.data,this.toBBox)}},{key:"_chooseSplitIndex",value:function(t,e,r){var n,a,i;n=a=1/0;for(var o=e;o<=r-e;o++){var c=b(t,0,o,this.toBBox),u=b(t,o,r,this.toBBox),f=g(c,u),l=j(c)+j(u);f<n?(n=f,i=o,a=l<a?l:a):f===n&&l<a&&(a=l,i=o)}return i}},{key:"_chooseSplitAxis",value:function(t,e,r){var n=t.leaf?this.compareMinX:p,a=t.leaf?this.compareMinY:m;this._allDistMargin(t,e,r,n)<this._allDistMargin(t,e,r,a)&&t.children.sort(n)}},{key:"_allDistMargin",value:function(t,e,r,n){t.children.sort(n);for(var a=this.toBBox,i=b(t,0,e,a),o=b(t,r-e,r,a),c=y(i)+y(o),u=e;u<r-e;u++){var f=t.children[u];v(i,t.leaf?a(f):f),c+=y(i)}for(var l=r-e-1;l>=e;l--){var s=t.children[l];v(o,t.leaf?a(s):s),c+=y(o)}return c}},{key:"_adjustParentBBoxes",value:function(t,e,r){for(var n=r;n>=0;n--)v(e.data[n],t)}},{key:"_condense",value:function(t){for(var e=t.length-1;e>=0;e--){var r=t.data[e];if(0===r.children.length)if(e>0){var n=t.data[e-1],a=n.children;a.splice(Object(u.e)(a,r,a.length,n.indexHint),1)}else this.clear();else d(r,this.toBBox)}}},{key:"_initFormat",value:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}]),t}();function d(t,e){b(t,0,t.children.length,e,t)}function b(t,e,r,n,a){a||(a=new E([])),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(var i,o=e;o<r;o++)i=t.children[o],v(a,t.leaf?n(i):i);return a}function v(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function p(t,e){return t.minX-e.minX}function m(t,e){return t.minY-e.minY}function j(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function y(t){return t.maxX-t.minX+(t.maxY-t.minY)}function O(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function g(t,e){var r=Math.max(t.minX,e.minX),n=Math.max(t.minY,e.minY),a=Math.min(t.maxX,e.maxX),i=Math.min(t.maxY,e.maxY);return Math.max(0,a-r)*Math.max(0,i-n)}function x(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function M(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function A(t,e,r,n,a){for(var i=[e,r];i.length;){var o=Object(f.c)(i.pop()),c=Object(f.c)(i.pop());if(!(o-c<=n)){var u=c+Math.ceil((o-c)/n/2)*n;Object(s.a)(t,u,c,o,a),i.push(c,u,u,o)}}}var _=new l.a,B=new l.a,T=new l.a,w=new l.a({deallocator:void 0}),Y=function(t){Object(n.a)(r,t);var e=Object(a.a)(r);function r(){var t;return Object(o.a)(this,r),(t=e.apply(this,arguments)).height=1,t.indexHint=new u.a,t}return r}((function t(){Object(o.a)(this,t),this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0})),E=function(t){Object(n.a)(r,t);var e=Object(a.a)(r);function r(t){var n;return Object(o.a)(this,r),(n=e.call(this)).children=t,n.leaf=!0,n}return r}(Y),k=function(t){Object(n.a)(r,t);var e=Object(a.a)(r);function r(t){var n;return Object(o.a)(this,r),(n=e.call(this)).children=t,n.leaf=!1,n}return r}(Y)},754:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return w})),r.d(e,"d",(function(){return v})),r.d(e,"e",(function(){return s})),r.d(e,"f",(function(){return f}));var n=r(703),a=r(736),i=r(75),o=r(49),c=r(53),u=r(299);function f(t,e,r){r*=.5;var n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t}function l(t,e){var r=2*Math.acos(e[3]),n=Math.sin(r/2);return n>o.a?(t[0]=e[0]/n,t[1]=e[1]/n,t[2]=e[2]/n):(t[0]=1,t[1]=0,t[2]=0),r}function s(t,e,r){var n=e[0],a=e[1],i=e[2],o=e[3],c=r[0],u=r[1],f=r[2],l=r[3];return t[0]=n*l+o*c+a*f-i*u,t[1]=a*l+o*u+i*c-n*f,t[2]=i*l+o*f+n*u-a*c,t[3]=o*l-n*c-a*u-i*f,t}function h(t,e,r,n){var a,i,c,u,f,l=e[0],s=e[1],h=e[2],d=e[3],b=r[0],v=r[1],p=r[2],m=r[3];return(i=l*b+s*v+h*p+d*m)<0&&(i=-i,b=-b,v=-v,p=-p,m=-m),1-i>o.a?(a=Math.acos(i),c=Math.sin(a),u=Math.sin((1-n)*a)/c,f=Math.sin(n*a)/c):(u=1-n,f=n),t[0]=u*l+f*b,t[1]=u*s+f*v,t[2]=u*h+f*p,t[3]=u*d+f*m,t}function d(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function b(t,e){var r,n=e[0]+e[4]+e[8];if(n>0)r=Math.sqrt(n+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{var a=0;e[4]>e[0]&&(a=1),e[8]>e[3*a+a]&&(a=2);var i=(a+1)%3,o=(a+2)%3;r=Math.sqrt(e[3*a+a]-e[3*i+i]-e[3*o+o]+1),t[a]=.5*r,r=.5/r,t[3]=(e[3*i+o]-e[3*o+i])*r,t[i]=(e[3*i+a]+e[3*a+i])*r,t[o]=(e[3*o+a]+e[3*a+o])*r}return t}function v(t,e,r,n){var a=.5*Math.PI/180;e*=a,r*=a,n*=a;var i=Math.sin(e),o=Math.cos(e),c=Math.sin(r),u=Math.cos(r),f=Math.sin(n),l=Math.cos(n);return t[0]=i*u*l-o*c*f,t[1]=o*c*l+i*u*f,t[2]=o*u*f-i*c*l,t[3]=o*u*l+i*c*f,t}var p=u.c,m=u.k,j=u.a,y=s,O=u.b,g=u.d,x=u.i,M=u.e,A=M,_=u.f,B=_,T=u.j,w=u.g,Y=u.h;var E=Object(i.e)(),k=Object(i.g)(1,0,0),X=Object(i.g)(0,1,0);var F=Object(a.b)(),S=Object(a.b)();var P=Object(n.b)();Object.freeze({__proto__:null,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:f,getAxisAngle:l,multiply:s,rotateX:function(t,e,r){r*=.5;var n=e[0],a=e[1],i=e[2],o=e[3],c=Math.sin(r),u=Math.cos(r);return t[0]=n*u+o*c,t[1]=a*u+i*c,t[2]=i*u-a*c,t[3]=o*u-n*c,t},rotateY:function(t,e,r){r*=.5;var n=e[0],a=e[1],i=e[2],o=e[3],c=Math.sin(r),u=Math.cos(r);return t[0]=n*u-i*c,t[1]=a*u+o*c,t[2]=i*u+n*c,t[3]=o*u-a*c,t},rotateZ:function(t,e,r){r*=.5;var n=e[0],a=e[1],i=e[2],o=e[3],c=Math.sin(r),u=Math.cos(r);return t[0]=n*u+a*c,t[1]=a*u-n*c,t[2]=i*u+o*c,t[3]=o*u-i*c,t},calculateW:function(t,e){var r=e[0],n=e[1],a=e[2];return t[0]=r,t[1]=n,t[2]=a,t[3]=Math.sqrt(Math.abs(1-r*r-n*n-a*a)),t},slerp:h,random:function(t){var e=Object(o.b)(),r=Object(o.b)(),n=Object(o.b)(),a=Math.sqrt(1-e),i=Math.sqrt(e);return t[0]=a*Math.sin(2*Math.PI*r),t[1]=a*Math.cos(2*Math.PI*r),t[2]=i*Math.sin(2*Math.PI*n),t[3]=i*Math.cos(2*Math.PI*n),t},invert:function(t,e){var r=e[0],n=e[1],a=e[2],i=e[3],o=r*r+n*n+a*a+i*i,c=o?1/o:0;return t[0]=-r*c,t[1]=-n*c,t[2]=-a*c,t[3]=i*c,t},conjugate:d,fromMat3:b,fromEuler:v,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},copy:p,set:m,add:j,mul:y,scale:O,dot:g,lerp:x,length:M,len:A,squaredLength:_,sqrLen:B,normalize:T,exactEquals:w,equals:Y,rotationTo:function(t,e,r){var n=Object(c.e)(e,r);return n<-.999999?(Object(c.d)(E,k,e),Object(c.u)(E)<1e-6&&Object(c.d)(E,X,e),Object(c.o)(E,E),f(t,E,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Object(c.d)(E,e,r),t[0]=E[0],t[1]=E[1],t[2]=E[2],t[3]=1+n,T(t,t))},sqlerp:function(t,e,r,n,a,i){return h(F,e,a,i),h(S,r,n,i),h(t,F,S,2*i*(1-i)),t},setAxes:function(t,e,r,n){var a=P;return a[0]=r[0],a[3]=r[1],a[6]=r[2],a[1]=n[0],a[4]=n[1],a[7]=n[2],a[2]=-e[0],a[5]=-e[1],a[8]=-e[2],T(t,b(t,a))}})},755:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return o})),r.d(e,"e",(function(){return a}));var n=r(781);function a(t,e,r){if(t.count===e.count)for(var a=t.count,i=r[0],o=r[1],c=r[2],u=r[4],f=r[5],l=r[6],s=r[8],h=r[9],d=r[10],b=r[12],v=r[13],p=r[14],m=t.typedBuffer,j=t.typedBufferStride,y=e.typedBuffer,O=e.typedBufferStride,g=0;g<a;g++){var x=g*j,M=g*O,A=y[M],_=y[M+1],B=y[M+2];m[x]=i*A+u*_+s*B+b,m[x+1]=o*A+f*_+h*B+v,m[x+2]=c*A+l*_+d*B+p}else n.a.error("source and destination buffers need to have the same number of elements")}function i(t,e,r){if(t.count===e.count)for(var a=t.count,i=r[0],o=r[1],c=r[2],u=r[3],f=r[4],l=r[5],s=r[6],h=r[7],d=r[8],b=t.typedBuffer,v=t.typedBufferStride,p=e.typedBuffer,m=e.typedBufferStride,j=0;j<a;j++){var y=j*v,O=j*m,g=p[O],x=p[O+1],M=p[O+2];b[y]=i*g+u*x+s*M,b[y+1]=o*g+f*x+h*M,b[y+2]=c*g+l*x+d*M}else n.a.error("source and destination buffers need to have the same number of elements")}function o(t,e,r){for(var n=Math.min(t.count,e.count),a=t.typedBuffer,i=t.typedBufferStride,o=e.typedBuffer,c=e.typedBufferStride,u=0;u<n;u++){var f=u*i,l=u*c;a[f]=r*o[l],a[f+1]=r*o[l+1],a[f+2]=r*o[l+2]}}function c(t,e){for(var r=Math.min(t.count,e.count),n=t.typedBuffer,a=t.typedBufferStride,i=e.typedBuffer,o=e.typedBufferStride,c=0;c<r;c++){var u=c*a,f=c*o,l=i[f],s=i[f+1],h=i[f+2],d=Math.sqrt(l*l+s*s+h*h);if(d>0){var b=1/d;n[u]=b*l,n[u+1]=b*s,n[u+2]=b*h}}}function u(t,e,r){for(var n=Math.min(t.count,e.count),a=t.typedBuffer,i=t.typedBufferStride,o=e.typedBuffer,c=e.typedBufferStride,u=0;u<n;u++){var f=u*i,l=u*c;a[f]=o[l]>>r,a[f+1]=o[l+1]>>r,a[f+2]=o[l+2]>>r}}Object.freeze({__proto__:null,transformMat4:a,transformMat3:i,scale:o,normalize:c,shiftRight:u})},766:function(t,e,r){"use strict";function n(t,e,r){for(var n=t.typedBuffer,a=t.typedBufferStride,i=e.typedBuffer,o=e.typedBufferStride,c=r?r.count:e.count,u=(r&&r.dstIndex?r.dstIndex:0)*a,f=(r&&r.srcIndex?r.srcIndex:0)*o,l=0;l<c;++l)n[u]=i[f],n[u+1]=i[f+1],n[u+2]=i[f+2],u+=a,f+=o}function a(t,e,r,n,a){for(var i,o,c=t.typedBuffer,u=t.typedBufferStride,f=null!=(i=null==a?void 0:a.count)?i:t.count,l=(null!=(o=null==a?void 0:a.dstIndex)?o:0)*u,s=0;s<f;++s)c[l]=e,c[l+1]=r,c[l+2]=n,l+=u}r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}));Object.freeze({__proto__:null,copy:n,fill:a})},772:function(t,e,r){"use strict";function n(t,e){var r;return t.isGeographic||t.isWebMercator&&(null==(r=null==e?void 0:e.geographic)||r)}r.d(e,"a",(function(){return n}))},779:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return m})),r.d(e,"c",(function(){return j})),r.d(e,"d",(function(){return y})),r.d(e,"e",(function(){return O}));var n=r(11),a=r(61),i=r(703),o=r(101),c=r(720),u=r(240),f=r(204),l=r(242),s=r(802),h=r(740),d=r(755),b=r(772),v=r(782);function p(t,e,r){return Object(b.a)(e.spatialReference,r)?function(t,e,r){var n=e.spatialReference,a=_(e,r,Y),i=new Float64Array(t.position.length),o=function(t,e,r,n){Object(d.e)(h.v.fromTypedArray(n),h.v.fromTypedArray(t),e);var a=new Float64Array(t.length);return Object(v.a)(n,a,r)}(t.position,a,n,i),c=Object(u.a)(k,a);return{position:o,normal:g(o,i,t.normal,c,n),tangent:x(o,i,t.tangent,c,n)}}(t,e,r):function(t,e,r){for(var n=new Float64Array(t.position.length),a=t.position,i=e.x,o=e.y,c=e.z||0,u=w(r?r.unit:null,e.spatialReference),f=u.horizontal,l=u.vertical,s=0;s<a.length;s+=3)n[s+0]=a[s+0]*f+i,n[s+1]=a[s+1]*f+o,n[s+2]=a[s+2]*l+c;return{position:n,normal:t.normal,tangent:t.tangent}}(t,e,r)}function m(t,e,r){var a=t.position,i=t.normal,o=t.tangent;if(Object(n.i)(e))return{position:a,normal:i,tangent:o};var c=e.localMatrix;return p({position:Object(v.h)(a,new Float64Array(a.length),c),normal:Object(n.j)(i)?Object(v.g)(i,new Float32Array(i.length),c):null,tangent:Object(n.j)(o)?Object(v.i)(o,new Float32Array(o.length),c):null},e.getOriginPoint(r),{geographic:e.geographic})}function j(t,e,r){var n;return null!=r&&r.useTransform?{vertexAttributes:{position:t.position,normal:t.normal,tangent:t.tangent},transform:new s.a({origin:[e.x,e.y,null!=(n=e.z)?n:0],geographic:Object(b.a)(e.spatialReference,r)})}:{vertexAttributes:p(t,e,r),transform:null}}function y(t,e,r){return Object(b.a)(e.spatialReference,r)?A(t,e,r):M(t,e,r)}function O(t,e,r,a){if(Object(n.i)(e))return y(t,r,a);var i=m(t,e,r.spatialReference);return r.equals(e.getOriginPoint(r.spatialReference))?M(i,r,a):Object(b.a)(r.spatialReference,a)?A(i,r,a):M(i,r,a)}function g(t,e,r,a,i){if(Object(n.i)(r))return null;var o=new Float32Array(r.length);return Object(d.a)(h.u.fromTypedArray(o),h.u.fromTypedArray(r),a),Object(v.b)(o,t,e,i,o),o}function x(t,e,r,a,i){if(Object(n.i)(r))return null;var o=new Float32Array(r.length);Object(d.a)(h.u.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT),h.u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),a);for(var c=3;c<o.length;c+=4)o[c]=r[c];return Object(v.d)(o,t,e,i,o),o}function M(t,e,r){for(var n=new Float64Array(t.position.length),a=t.position,i=e.x,o=e.y,c=e.z||0,u=w(r?r.unit:null,e.spatialReference),f=u.horizontal,l=u.vertical,s=0;s<a.length;s+=3)n[s+0]=(a[s+0]-i)/f,n[s+1]=(a[s+1]-o)/f,n[s+2]=(a[s+2]-c)/l;return{position:n,normal:t.normal,tangent:t.tangent}}function A(t,e,r){var n=e.spatialReference;_(e,r,Y);var a=Object(o.b)(E,Y),i=new Float64Array(t.position.length),c=function(t,e,r,n){var a=Object(v.f)(t,e,n),i=h.v.fromTypedArray(a),o=new Float64Array(a.length),c=h.v.fromTypedArray(o);return Object(d.e)(c,i,r),o}(t.position,n,a,i),f=Object(u.a)(k,a);return{position:c,normal:B(t.normal,t.position,i,n,f),tangent:T(t.tangent,t.position,i,n,f)}}function _(t,e,r){Object(f.c)(t.spatialReference,[t.x,t.y,t.z||0],r,Object(l.g)(t.spatialReference));var n=w(e?e.unit:null,t.spatialReference),a=n.horizontal,i=n.vertical;return Object(o.e)(r,r,[a,a,i]),r}function B(t,e,r,a,i){if(Object(n.i)(t))return null;var o=Object(v.c)(t,e,r,a,new Float32Array(t.length)),c=h.u.fromTypedArray(o);return Object(d.a)(c,c,i),o}function T(t,e,r,a,i){if(Object(n.i)(t))return null;var o=Object(v.e)(t,e,r,a,new Float32Array(t.length)),c=h.u.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT);return Object(d.a)(c,c,i),o}function w(t,e){if(Object(n.i)(t))return X;var r=e.isGeographic?1:Object(a.c)(e),i=e.isGeographic?1:Object(a.e)(e),o=Object(a.b)(1,t,"meters");return{horizontal:o*r,vertical:o*i}}var Y=Object(c.d)(),E=Object(c.d)(),k=Object(i.b)(),X={horizontal:1,vertical:1}},780:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return f})),r.d(e,"d",(function(){return c})),r.d(e,"e",(function(){return u}));var n=r(63),a=r(754),i=r(736),o=r(53);function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return[t[0],t[1],t[2],t[3]]}function u(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return Object(o.h)(r,t),r[3]=e,r}function f(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return Object(a.f)(b,t,s(t)),Object(a.f)(v,e,s(e)),Object(a.e)(b,v,b),h(r,Object(n.p)(Object(a.b)(r,b)))}function l(t){return t}function s(t){return Object(n.g)(t[3])}function h(t,e){return t[3]=e,t}var d=[0,0,1,0],b=Object(i.b)(),v=Object(i.b)();c()},781:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=r(15).a.getLogger("esri.views.3d.support.buffer.math")},782:function(t,e,r){"use strict";r.d(e,"a",(function(){return O})),r.d(e,"b",(function(){return j})),r.d(e,"c",(function(){return m})),r.d(e,"d",(function(){return _})),r.d(e,"e",(function(){return A})),r.d(e,"f",(function(){return y})),r.d(e,"g",(function(){return x})),r.d(e,"h",(function(){return g})),r.d(e,"i",(function(){return M}));var n=r(15),a=r(11),i=r(240),o=r(703),c=r(720),u=r(53),f=r(75),l=r(204),s=r(242),h=r(43),d=r(58),b=r(740),v=r(755),p=n.a.getLogger("esri.geometry.support.meshUtils.normalProjection");function m(t,e,r,n,a){return T(n)?(B(0,b.u.fromTypedArray(t),b.v.fromTypedArray(e),b.v.fromTypedArray(r),n,b.u.fromTypedArray(a)),a):(p.error("Cannot convert spatial reference to PCPF"),a)}function j(t,e,r,n,a){return T(n)?(B(1,b.u.fromTypedArray(t),b.v.fromTypedArray(e),b.v.fromTypedArray(r),n,b.u.fromTypedArray(a)),a):(p.error("Cannot convert to spatial reference from PCPF"),a)}function y(t,e,r){return Object(l.j)(t,e,0,r,Object(s.g)(e),0,t.length/3),r}function O(t,e,r){return Object(l.j)(t,Object(s.g)(r),0,e,r,0,t.length/3),e}function g(t,e,r){if(Object(a.i)(t))return e;var n=b.v.fromTypedArray(t),i=b.v.fromTypedArray(e);return Object(v.e)(i,n,r),e}function x(t,e,r){if(Object(a.i)(t))return e;Object(i.a)(X,r);var n=b.u.fromTypedArray(t),o=b.u.fromTypedArray(e);return Object(v.a)(o,n,X),Object(i.f)(X)||Object(v.c)(o,o),e}function M(t,e,r){if(Object(a.i)(t))return e;Object(i.a)(X,r);var n=b.u.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),o=b.u.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT);if(Object(v.a)(o,n,X),Object(i.f)(X)||Object(v.c)(o,o),t!==e)for(var c=3;c<t.length;c+=4)e[c]=t[c];return e}function A(t,e,r,n,a){if(!T(n))return p.error("Cannot convert spatial reference to PCPF"),a;B(0,b.u.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),b.v.fromTypedArray(e),b.v.fromTypedArray(r),n,b.u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT));for(var i=3;i<t.length;i+=4)a[i]=t[i];return a}function _(t,e,r,n,a){if(!T(n))return p.error("Cannot convert to spatial reference from PCPF"),a;B(1,b.u.fromTypedArray(t,16),b.v.fromTypedArray(e),b.v.fromTypedArray(r),n,b.u.fromTypedArray(a,16));for(var i=3;i<t.length;i+=4)a[i]=t[i];return a}function B(t,e,r,n,a,o){if(e){var c=r.count,f=Object(s.g)(a);if(w(a))for(var h=0;h<c;h++)n.getVec(h,Y),e.getVec(h,E),Object(l.c)(f,Y,k,f),Object(i.e)(X,k),1===t&&Object(i.l)(X,X),Object(u.t)(E,E,X),o.setVec(h,E);else for(var b=0;b<c;b++){n.getVec(b,Y),e.getVec(b,E),Object(l.c)(f,Y,k,f),Object(i.e)(X,k);var v=Object(d.h)(r.get(b,1)),p=Math.cos(v);0===t&&(p=1/p),X[0]*=p,X[1]*=p,X[2]*=p,X[3]*=p,X[4]*=p,X[5]*=p,1===t&&Object(i.l)(X,X),Object(u.t)(E,E,X),Object(u.o)(E,E),o.setVec(b,E)}return o}}function T(t){return w(t)||function(t){return t.isWebMercator}(t)}function w(t){return t.isWGS84||Object(h.f)(t)||Object(h.i)(t)||Object(h.j)(t)}var Y=Object(f.e)(),E=Object(f.e)(),k=Object(c.d)(),X=Object(o.b)()},802:function(t,e,r){"use strict";r.d(e,"a",(function(){return B}));var n,a=r(20),i=r(2),o=r(4),c=r(6),u=r(7),f=r(0),l=r(24),s=r(11),h=r(1),d=(r(16),r(18),r(15),r(10)),b=r(101),v=r(720),p=r(53),m=r(75),j=r(55),y=r(204),O=r(242),g=r(780),x=r(740),M=r(755),A=r(766),_=n=function(t){Object(c.a)(r,t);var e=Object(u.a)(r);function r(t){var n;return Object(i.a)(this,r),(n=e.call(this,t)).origin=Object(m.e)(),n.translation=Object(m.e)(),n.rotation=Object(g.d)(),n.scale=Object(m.g)(1,1,1),n.geographic=!0,n}return Object(o.a)(r,[{key:"localMatrix",get:function(){var t=Object(v.d)();return Object(b.e)(t,t,this.scale),Object(b.c)(t,t,Object(g.a)(this.rotation),Object(g.b)(this.rotation)),Object(b.m)(t,t,this.translation),t}},{key:"localMatrixInverse",get:function(){return Object(b.b)(Object(v.d)(),this.localMatrix)}},{key:"applyLocal",value:function(t,e){return Object(p.n)(e,t,this.localMatrix)}},{key:"applyLocalInverse",value:function(t,e){return Object(p.n)(e,t,this.localMatrixInverse)}},{key:"project",value:function(t,e){var r=new Float64Array(t.length),n=x.v.fromTypedArray(r),a=x.v.fromTypedArray(t);if(this.geographic){var i=Object(O.h)(Object(O.e)(e)),o=Object(v.d)();return Object(y.c)(e,this.origin,o,i),Object(b.i)(o,o,this.localMatrix),Object(M.e)(n,a,o),Object(y.j)(r,i,0,r,e,0,r.length/3),r}var c=this.localMatrix,u=this.origin;Object(b.f)(c,v.a)?Object(A.a)(n,a):Object(M.e)(n,a,c);for(var f=0;f<r.length;f+=3)r[f+0]+=u[0],r[f+1]+=u[1],r[f+2]+=u[2];return r}},{key:"getOriginPoint",value:function(t){var e=Object(a.a)(this.origin,3),r=e[0],n=e[1],i=e[2];return new j.a({x:r,y:n,z:i,spatialReference:t})}},{key:"equals",value:function(t){return Object(s.j)(t)&&this.geographic===t.geographic&&Object(p.l)(this.origin,t.origin)&&Object(b.g)(this.localMatrix,t.localMatrix)}},{key:"clone",value:function(){var t={origin:Object(m.c)(this.origin),translation:Object(m.c)(this.translation),rotation:Object(g.d)(this.rotation),scale:Object(m.c)(this.scale),geographic:this.geographic};return new n(t)}}]),r}(l.a);Object(f.a)([Object(h.b)({type:[Number],nonNullable:!0,json:{write:!0}})],_.prototype,"origin",void 0),Object(f.a)([Object(h.b)({type:[Number],nonNullable:!0,json:{write:!0}})],_.prototype,"translation",void 0),Object(f.a)([Object(h.b)({type:[Number],nonNullable:!0,json:{write:!0}})],_.prototype,"rotation",void 0),Object(f.a)([Object(h.b)({type:[Number],nonNullable:!0,json:{write:!0}})],_.prototype,"scale",void 0),Object(f.a)([Object(h.b)({type:Boolean,nonNullable:!0,json:{write:!0}})],_.prototype,"geographic",void 0),Object(f.a)([Object(h.b)()],_.prototype,"localMatrix",null),Object(f.a)([Object(h.b)()],_.prototype,"localMatrixInverse",null);var B=_=n=Object(f.a)([Object(d.a)("esri.geometry.support.MeshTransform")],_)}}]);
//# sourceMappingURL=55.33bd39e0.chunk.js.map