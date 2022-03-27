import{a9 as u,bA as f,bB as c,bC as m,id as p,r as a,F as g,hz as y,t as I,e as l,d as o,n as v}from"./vendor.2e4165c5.js";import{i as x}from"./RefreshableLayerView.bf73a209.js";const h=u.getLogger("esri.views.3d.layers.WMTSLayerView3d");let r=class extends x(f(c(m))){constructor(){super(...arguments),this.type="wmts-3d"}get hasMixedImageFormats(){return!0}_getCompatibleTileInfoMatrixSet(t,e=!1){const i=p(this.layer);if(a(i)){if(g.isCollection(i))return i.find(d=>{const s=t(d);return a(s)&&(e?h.error("The selected tile matrix set is not compatible with the view",s):this.addResolvingPromise(Promise.reject(s))),s==null});const n=t(i);return a(n)&&(e?h.error("The selected tile matrix set is not compatible with the view",n):this.addResolvingPromise(Promise.reject(n))),i}return null}initialize(){this._getCompatibleTileInfoMatrixSet(e=>this._getTileInfoSupportError(e.tileInfo,e.fullExtent));const t=y(this.view,"basemapTerrain.tilingSchemeLocked").then(()=>{const e=this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoSupportError(i.tileInfo,i.fullExtent)||this._getTileInfoCompatibilityError(i.tileInfo,this.view.basemapTerrain.tilingScheme));I(e)||(this.layer.activeLayer.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),this.tileInfo=e.tileInfo,this.layer.fullExtent=e.fullExtent)});this.addResolvingPromise(t),this.when(()=>this._initialized())}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const t=this.layer.activeLayer.tileMatrixSet;return t&&!this._getTileInfoError(t.tileInfo,t.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_initialized(){this.updatingHandles.add(()=>{var t,e;return(t=this.layer)==null||(e=t.activeLayer)==null?void 0:e.styleId},()=>this.refresh()),this.updatingHandles.add(()=>{var t;return(t=this.layer)==null?void 0:t.activeLayer},t=>{const e=this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoSupportError(i.tileInfo,i.fullExtent)||this._getTileInfoCompatibilityError(i.tileInfo,this.view.basemapTerrain.tilingScheme),!0);a(e)&&t.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()})}_getTileInfoError(t,e){return this._getTileInfoSupportError(t,e)||this._getTileInfoCompatibilityError(t,this.view.basemapTerrain.tilingScheme)}};l([o({readOnly:!0})],r.prototype,"hasMixedImageFormats",null),l([o()],r.prototype,"layer",void 0),l([o()],r.prototype,"suspended",void 0),r=l([v("esri.views.3d.layers.WMTSLayerView3D")],r);const E=r;export{E as default};