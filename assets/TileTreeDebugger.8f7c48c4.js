import{e as r,d as c,n as P,h as $,S as j,g as S,r as g,l as x,a as O,b as A,f as L,t as k,s as z}from"./vendor.2e4165c5.js";const T=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let o=class extends ${constructor(s){super(s),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=T.map(s=>new j({color:[s[0],s[1],s[2],.6],outline:{color:"black",width:1}})),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(s){this._enabled!==s&&(this._enabled=s,this.update())}update(){if(!this._enabled)return void this.clear();const s=e=>{if(g(e.label))return e.label;let a=e.lij.toString();return g(e.loadPriority)&&(a+=` (${e.loadPriority})`),a},n=this.getTiles(),h=new Array,d=new Set((this._labels.size,this._labels.keys()));n.forEach((e,a)=>{const t=e.lij.toString();d.delete(t);const M=e.lij[0],p=e.geometry;if(this.enablePolygons&&!this._polygons.has(t)){const i=new S({geometry:p,symbol:this._symbols[M%this._symbols.length]});this._polygons.set(t,i),h.push(i)}if(this.enableLabels){const i=s(e),_=a/(n.length-1),b=z(0,200,_),u=z(20,6,_)/.75,w=g(e.loadPriority)&&e.loadPriority>=n.length,m=new x([b,w?0:b,w?0:b]),f=this.view.type==="3d"?()=>new O({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new A({text:i,halo:{color:"white",size:1/.75},material:{color:m},size:u})]}):()=>new L({text:i,haloColor:"white",haloSize:1/.75,color:m,size:u});if(this._labels.has(t)){const l=this._labels.get(t),v=f();(k(l.symbol)||JSON.stringify(v)!==JSON.stringify(l.symbol))&&(l.symbol=v)}else{const l=new S({geometry:p.extent.center,symbol:f()});this._labels.set(t,l),h.push(l)}}});const y=new Array;d.forEach(e=>{this._polygons.has(e)&&(y.push(this._polygons.get(e)),this._polygons.delete(e)),this._labels.has(e)&&(y.push(this._labels.get(e)),this._labels.delete(e))}),this.view.graphics.removeMany(y),this.view.graphics.addMany(h)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};r([c({constructOnly:!0})],o.prototype,"view",void 0),r([c({readOnly:!0})],o.prototype,"updating",void 0),r([c()],o.prototype,"enabled",null),o=r([P("esri.views.support.TileTreeDebugger")],o);export{o as b};
