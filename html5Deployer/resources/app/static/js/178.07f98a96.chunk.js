(this["webpackJsonpgreen-sap"]=this["webpackJsonpgreen-sap"]||[]).push([[178],{1056:function(e,t,r){"use strict";r.r(t),r.d(t,"Blur",(function(){return l}));var i=r(2),s=r(4),a=(r(648),r(649)),n=(r(16),r(647),r(646),r(653),r(651),r(645),r(650),r(758)),u=[1,0],o=[0,1],l=function(){function e(){Object(i.a)(this,e),this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}return Object(s.a)(e,[{key:"dispose",value:function(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}},{key:"draw",value:function(e,t,r){var i=e.context,s=r.type,a=r.radius;if(0!==a){this._createOrResizeResources(e),this._quad||(this._quad=new n.a(i,[-1,-1,1,-1,-1,1,1,1]));var u=this._quad;u.bind(),"blur"===s?this._gaussianBlur(e,t,a):this._radialBlur(e,t),u.unbind()}}},{key:"_gaussianBlur",value:function(e,t,r){var i=e.context,s=e.state,a=e.painter,n=e.pixelRatio,l=s.size,d=a.materialManager,h=this._programDesc,p=this._quad,c=[Math.round(n*l[0]),Math.round(n*l[1])],b=this._blurFBO,_=d.getProgram(e,h.gaussianBlur,[{name:"radius",value:Math.ceil(r)}]);i.useProgram(_),i.setBlendingEnabled(!1),i.bindFramebuffer(b),i.bindTexture(t.colorTexture,4),_.setUniform1i("u_colorTexture",4),_.setUniform2fv("u_texSize",c),_.setUniform2fv("u_direction",u),_.setUniform1f("u_sigma",r),p.draw(),i.bindFramebuffer(t),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.bindTexture(b.colorTexture,5),_.setUniform1i("u_colorTexture",5),_.setUniform2fv("u_direction",o),p.draw(),i.setBlendingEnabled(!0),i.setBlendFunction(1,771),i.setStencilTestEnabled(!0)}},{key:"_radialBlur",value:function(e,t){var r=e.context,i=e.painter.materialManager,s=this._programDesc,a=this._quad,n=this._blurFBO;r.bindFramebuffer(n);var u=i.getProgram(e,s.radialBlur);r.useProgram(u),r.setBlendingEnabled(!1),r.bindTexture(t.colorTexture,4),u.setUniform1i("u_colorTexture",4),a.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setBlendingEnabled(!0);var o=i.getProgram(e,s.blit);r.useProgram(o),r.bindTexture(n.colorTexture,5),o.setUniform1i("u_texture",5),r.setBlendFunction(1,771),a.draw()}},{key:"_createOrResizeResources",value:function(e){var t=e.context,r=e.state,i=e.pixelRatio,s=r.size,n=Math.round(i*s[0]),u=Math.round(i*s[1]);this._blurFBO&&this._size[0]===n&&this._size[1]===u||(this._size[0]=n,this._size[1]=u,this._blurFBO?this._blurFBO.resize(n,u):this._blurFBO=new a.a(t,{colorTarget:0,depthStencilTarget:0,width:n,height:u},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:u}))}}]),e}()}}]);
//# sourceMappingURL=178.07f98a96.chunk.js.map