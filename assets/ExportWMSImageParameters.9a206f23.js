import{cI as h,h as m,e as t,d as a,n as b}from"./vendor.2e4165c5.js";const v={visible:"visibleSublayers"};let s=class extends h(m){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("wms-sublayer-update",r=>this.notifyChange(v[r.propertyName]))],"layer"))}get layers(){const{visibleSublayers:e}=this;return e.filter(r=>r.name).map(r=>r.name).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:r}=this,l=e==null?void 0:e.sublayers,i=[],o=n=>{const{minScale:y,maxScale:p,sublayers:u,visible:c}=n;c&&(r===0||(y===0||r<=y)&&(p===0||r>=p))&&(u?u.forEach(o):i.unshift(n))};return l==null||l.forEach(o),i}toJSON(){const{layer:e,layers:r}=this,{imageFormat:l,imageTransparency:i,version:o}=e;return{format:l,request:"GetMap",service:"WMS",styles:"",transparent:i?"TRUE":"FALSE",version:o,layers:r}}};t([a()],s.prototype,"layer",null),t([a({readOnly:!0})],s.prototype,"layers",null),t([a({type:Number})],s.prototype,"scale",void 0),t([a({readOnly:!0})],s.prototype,"version",null),t([a({readOnly:!0})],s.prototype,"visibleSublayers",null),s=t([b("esri.layers.support.ExportWMSImageParameters")],s);export{s as l};
