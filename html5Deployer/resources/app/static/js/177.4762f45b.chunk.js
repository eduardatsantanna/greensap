(this["webpackJsonpgreen-sap"]=this["webpackJsonpgreen-sap"]||[]).push([[177],{1007:function(e,t,i){"use strict";i.r(t),i.d(t,"DropShadow",(function(){return p}));var r=i(2),s=i(5),a=i(40),o=(i(592),i(590)),n=(i(16),i(587),i(589),i(593),i(586)),l=(i(591),i(699)),u=[1,0],h=[0,1],p=function(){function e(){Object(r.a)(this,e),this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/drop-shadow",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}return Object(s.a)(e,[{key:"dispose",value:function(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null)}},{key:"draw",value:function(e,t,i){var r=e.context,s=e.state,o=e.painter,n=e.pixelRatio,p=o.materialManager,d=this._programDesc,c=t.width,_=t.height,f=[Math.round(c/2),Math.round(_/2)],B=i.blurRadius,g=i.offsetX,m=i.offsetY,F=i.color,b=[n*Object(a.c)(g/2),n*Object(a.c)(m/2)];this._createOrResizeResources(e,c,_,f);var v=this._horizontalBlurFBO,O=this._verticalBlurFBO;r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1);var w=this._layerFBOTexture;t.copyToTexture(0,0,c,_,0,0,w),this._quad||(this._quad=new l.a(r,[-1,-1,1,-1,-1,1,1,1])),r.setViewport(0,0,f[0],f[1]);var T=this._quad;T.bind(),r.setBlendingEnabled(!1);var x=p.getProgram(e,d.blur,[{name:"radius",value:Math.ceil(B)}]);r.useProgram(x),r.bindFramebuffer(v),r.bindTexture(t.colorTexture,4),x.setUniformMatrix3fv("u_displayViewMat3",s.displayMat3),x.setUniform2fv("u_offset",b),x.setUniform1i("u_colorTexture",4),x.setUniform2fv("u_texSize",f),x.setUniform2fv("u_direction",u),x.setUniform1f("u_sigma",B),T.draw(),r.bindFramebuffer(O),r.bindTexture(v.colorTexture,5),x.setUniformMatrix3fv("u_displayViewMat3",s.displayMat3),x.setUniform2fv("u_offset",[0,0]),x.setUniform1i("u_colorTexture",5),x.setUniform2fv("u_direction",h),T.draw(),r.bindFramebuffer(t),r.setViewport(0,0,c,_);var z=p.getProgram(e,d.composite);r.useProgram(z),r.bindTexture(O.colorTexture,2),z.setUniform1i("u_blurTexture",2),r.bindTexture(w,3),z.setUniform1i("u_layerFBOTexture",3),z.setUniform4fv("u_shadowColor",[F[3]*(F[0]/255),F[3]*(F[1]/255),F[3]*(F[2]/255),F[3]]),T.draw(),r.setBlendingEnabled(!0),r.setStencilTestEnabled(!0),r.setBlendFunction(1,771),T.unbind()}},{key:"_createOrResizeResources",value:function(e,t,i,r){var s=e.context;this._horizontalBlurFBO&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(r[0],r[1]):this._horizontalBlurFBO=new o.a(s,{colorTarget:0,depthStencilTarget:0,width:r[0],height:r[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r[0],height:r[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(r[0],r[1]):this._verticalBlurFBO=new o.a(s,{colorTarget:0,depthStencilTarget:0,width:r[0],height:r[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r[0],height:r[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new n.a(s,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:t,height:i}))}}]),e}()}}]);
//# sourceMappingURL=177.4762f45b.chunk.js.map