import{i6 as E,a9 as D,hd as B,K as I,hL as a}from"./vendor.2e4165c5.js";import{e as o,n as T}from"./enums.c01b5663.js";import"./number.dc47462b.js";var r,L,h,_,c,O,S;(function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT",t[t.LABEL=4]="LABEL"})(r||(r={})),function(t){t[t.SUCCEEDED=0]="SUCCEEDED",t[t.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(L||(L={})),function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(h||(h={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(_||(_={})),function(t){t[t.NONE=0]="NONE",t[t.OPACITY=1]="OPACITY",t[t.COLOR=2]="COLOR",t[t.ROTATION=4]="ROTATION",t[t.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",t[t.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",t[t.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",t[t.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(c||(c={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(O||(O={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(S||(S={}));class l{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(s,i,u,N,R,U,f,C,d){this.color=s,this.haloColor=i,this.haloSize=u,this.size=N,this.angle=R,this.offsetX=U,this.offsetY=f,this.hAnchor=C,this.vAnchor=d}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}l.pool=new E(l);const A=D.getLogger("esri.views.2d.engine.webgl.Utils"),e="geometry",M=[{name:e,strideInBytes:36}],P=[{name:e,strideInBytes:32}],G=[{name:e,strideInBytes:20}],m=[{name:e,strideInBytes:12}],y=[{name:e,strideInBytes:40}],p=[{name:e,strideInBytes:36}],F=[{name:e,strideInBytes:36}];function n(t){const s={};for(const i of t)s[i.name]=i.strideInBytes;return s}const H=n(M),v=n(P),w=n(G),g=n(m),Y=n(y),$=n(p),X=n(F);function V(t,{fill:s}){switch(t){case r.MARKER:return H;case r.FILL:return s==="dot-density"?g:s==="simple"?w:v;case r.LINE:return Y;case r.TEXT:return $;case r.LABEL:return X}}function K(t){switch(t){case"butt":return o.BUTT;case"round":return o.ROUND;case"square":return o.SQUARE;default:return A.error(new I("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),o.ROUND}}function W(t){switch(t){case"miter":return T.MITER;case"bevel":return T.BEVEL;case"round":return T.ROUND;default:return A.error(new I("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),T.ROUND}}e+"",B.STATIC_DRAW;function q(t){switch(t){case a.UNSIGNED_BYTE:return Uint8Array;case a.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case a.FLOAT:return Float32Array;default:return void A.error(new I("webgl-utils",`Unable to handle type ${t}`))}}export{c as A,r as E,h as I,K as J,W as Q,O as _,q as c,V as z};