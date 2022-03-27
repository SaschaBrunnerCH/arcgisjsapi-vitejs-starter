var Y=Object.defineProperty,K=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var T=(e,t,r)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))X.call(t,r)&&T(e,r,t[r]);if(I)for(var r of I(t))ee.call(t,r)&&T(e,r,t[r]);return e},v=(e,t)=>K(e,W(t));import{d4 as V,fO as te,g as re,r as p,dI as se,e as o,d as l,n as F,h as R,t as P,fP as ie,a5 as ae,bR as oe,fQ as le,fR as J,o as M,a9 as ne,fS as ue,cQ as ce,fT as de,az as pe,ax as D,cN as Q,cO as A,fU as j,E as he,fV as Z,b2 as ye,aE as L,fW as B,fX as fe,fY as G,fZ as me,f_ as ge,f$ as U,g0 as C,K as O,g1 as Fe,bB as we,bC as ve,G as k,U as z,w as _,P as H,g2 as be,g3 as xe,cS as _e}from"./vendor.2e4165c5.js";import{A as Ee,E as Oe,O as qe}from"./FeatureLikeLayerView3D.a88e360c.js";import{r as Re}from"./EventedSet.0bca3260.js";import{d as $,t as Ce}from"./popupUtils.79546965.js";import{i as $e}from"./RefreshableLayerView.bf73a209.js";class Pe{constructor(t){this._schedule=t,this._handle=new Me(t)}destroy(){this._handle.destroy()}invoke(t,r){return t.buffer&&t.buffer.byteLength!==0?(t.options.sourceSpatialReference&&t.options.sourceSpatialReference instanceof V&&(t.options=v(m({},t.options),{sourceSpatialReference:t.options.sourceSpatialReference.toJSON()})),this._handle.invoke(t,r).then(s=>this._schedule(()=>{if(s.spatialReference=V.fromJSON(s.spatialReference),s.fields)for(let a=0;a<s.fields.length;a++)s.fields[a]=te.fromJSON(s.fields[a]);const i=s.spatialReference;for(const a of s.features)a.uid=re.generateUID(),p(a.geometry)&&(a.geometry.spatialReference=i);return s}))):Promise.resolve(null)}}class Me extends se{constructor(t){super("PBFDecoderWorker","_parseFeatureQuery",t)}getTransferList(t){return[t.buffer]}}let g=class extends R{constructor(e){super(e)}get queryFeaturesDehydrated(){const e=this.layer.capabilities,t=e&&e.query;if(t&&t.supportsFormatPBF){var r,s;P(this._decoder)&&(this._decoder=new Pe(this.schedule));const i={sourceSpatialReference:(r=(s=this.layer.spatialReference)==null?void 0:s.toJSON())!=null?r:null,applyTransform:!0,maxStringAttributeLength:1024};return(a,u)=>ie(this.layer.parsedUrl,a,"pbf",this._createRequestOptions(u)).then(n=>(ae(u),p(this._decoder)?this._decoder.invoke({buffer:n.data,options:i},u.signal):Promise.reject(oe())))}return(i,a)=>le(this.layer.parsedUrl,i,this.layer.spatialReference,this._createRequestOptions(a)).then(u=>J(u.data))}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}destroy(){this._decoder=M(this._decoder)}_createRequestOptions(e){return v(m({},e),{query:m(v(m({},this.layer.customParameters),{token:this.layer.apiKey}),e==null?void 0:e.query)})}};o([l({constructOnly:!0})],g.prototype,"layer",void 0),o([l({constructOnly:!0})],g.prototype,"schedule",void 0),o([l({readOnly:!0})],g.prototype,"queryFeaturesDehydrated",null),g=o([F("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],g);let b=class extends R{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};o([l({constructOnly:!0})],b.prototype,"layer",void 0),o([l({readOnly:!0})],b.prototype,"queryFeaturesDehydrated",null),b=o([F("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],b);let q=class extends R{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}};o([l({constructOnly:!0})],q.prototype,"layer",void 0),q=o([F("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],q);let x=class extends R{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.source.queryFeaturesJSON(e,t).then(J,r=>{if(r&&r.name==="query-features-json:unsupported")return this.layer.queryFeatures(e,t);throw r})}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};function Ne(e,t){return e.type==="feature"&&e.source.type==="feature-layer"?p(e.infoFor3D)?new b({layer:e}):new g({layer:e,schedule:t}):e.type==="feature"&&e.source.type==="memory"||e.type==="csv"||e.type==="geojson"||e.type==="wfs"?new x({layer:e,source:e.source}):e.type==="ogc-feature"?new q({layer:e}):null}o([l({constructOnly:!0})],x.prototype,"layer",void 0),o([l({constructOnly:!0})],x.prototype,"source",void 0),x=o([F("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],x);class Se{constructor(t){this._memoryCache=null,this._capabilities=null;const r=t.layerView.layer;this.layerView=t.layerView,this.objectIdField=r.objectIdField,this.globalIdField="globalIdField"in r?r.globalIdField:null,this.returnZ=t.returnZ,this.returnM=t.returnM;const s=this.layerView.view.resourceController;this.query=Ne(r,i=>s.schedule(i)),s&&this.memoryCacheEnabled&&(this._memoryCache=s.memoryController.newCache(r.uid))}get memoryCacheEnabled(){switch(this.layerView.layer.source.type){case"feature-layer":case"ogc-feature":return!0;case"csv":case"geojson":case"memory":case"wfs":return!1}}destroy(){this._memoryCache=M(this._memoryCache),this.query.destroy()}createQuery(){const t=this.layerView.layer.createQuery();return t.outFields=this.layerView.availableFields,t.returnZ=this.returnZ,t.returnM=this.returnM,t.outSpatialReference=this.tilingScheme.spatialReference,t}get memoryCache(){return this._memoryCache}get viewingMode(){return this.layerView.view.state.viewingMode}get tilingScheme(){return this.layerView.view.featureTiles.tilingScheme}get scheduler(){const t=this.layerView.view.resourceController;return t?t.scheduler:null}get geometryType(){return this.layerView.layer.geometryType}get fullExtent(){return this.layerView.layer.fullExtent}get tileMaxRecordCount(){return this.layerView.layer.capabilities.query.tileMaxRecordCount}get maxRecordCount(){return this.layerView.layer.capabilities.query.maxRecordCount}get capabilities(){return p(this._capabilities)||(this._capabilities=Ee(this.layerView.layer)),this._capabilities}logFetchError(t,r){t.error("#fetchTile()",this.layerView.layer,r&&r.message?r.message:r)}}const E=ne.getLogger("esri.views.layers.FeatureLayerView"),Ie=e=>{let t=class extends e{constructor(...r){super(...r),this._updatingRequiredFieldsPromise=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){pe(this,["layer.renderer","layer.labelingInfo","layer.elevationInfo.featureExpressionInfo","layer.displayField","filter","featureEffect","layer.timeInfo","layer.floorInfo","timeExtent"],()=>this._handleRequiredFieldsChange(),!0),D(this,"view.floors","change",()=>this._handleRequiredFieldsChange()),D(this,"layer.sublayer","change",()=>this._handleRequiredFieldsChange())}get availableFields(){const{layer:r,layer:{fieldsIndex:s},requiredFields:i}=this;return"outFields"in r&&r.outFields?Q(s,[...A(s,r.outFields),...i]):Q(s,i)}set effect(r){j(E,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect=r}get effect(){return j(E,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(r){r!==void 0?this._override("featureEffect",r):this._clearOverride("featureEffect")}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(r){E.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(r){throw new Error("missing implementation")}createQuery(){const r={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},s=p(this.filter)?this.filter.createQuery(r):new he(r);if(this.layer.type==="feature"){const i=Z(this);p(i)&&(s.where=s.where?`(${s.where}) AND (${i})`:i)}return p(this.timeExtent)&&(s.timeExtent=p(s.timeExtent)?s.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),s}queryFeatures(r,s){throw new Error("missing implementation")}queryObjectIds(r,s){throw new Error("missing implementation")}queryFeatureCount(r,s){throw new Error("missing implementation")}queryExtent(r,s){throw new Error("missing implementation")}async fetchPopupFeatures(r,s){const i=this.validateFetchPopupFeatures(s);if(i)throw i;return this.fetchClientPopupFeatures(s)}_loadArcadeModules(r){if(r.get("expressionInfos.length")||Array.isArray(r.content)&&r.content.some(s=>s.type==="expression"))return ye()}_handleRequiredFieldsChange(){const r=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",r),r.then(()=>{this._updatingRequiredFieldsPromise===r&&this._set("_updatingRequiredFieldsPromise",null)})}async _updateRequiredFields(){if(!this.layer||!this.view)return;const r=this.view.type==="3d",{layer:s,layer:{fieldsIndex:i,objectIdField:a}}=this,u="renderer"in s&&s.renderer,n="orderBy"in s&&s.orderBy,d=s.featureReduction,c=new Set,w=await L([u?u.collectRequiredFields(c,i):null,B(c,s),r?fe(c,s):null,p(this.filter)?G(c,s,this.filter):null,p(this.featureEffect)?G(c,s,this.featureEffect.filter):null,d?me(c,s,d):null,n?ge(c,s,n):null]);if(s.timeInfo&&this.timeExtent&&U(c,s.fieldsIndex,[s.timeInfo.startField,s.timeInfo.endField]),s.type==="feature"&&s.floorInfo&&U(c,s.fieldsIndex,[s.floorInfo.floorField]),s.type==="subtype-group"){C(c,i,s.subtypeField);const y=s.sublayers.map(N=>{var S;return Promise.all([(S=N.renderer)==null?void 0:S.collectRequiredFields(c,i),B(c,N)])});await L(y)}for(const y of w)y.error&&E.error(y.error);C(c,i,a),r&&"displayField"in s&&s.displayField&&C(c,i,s.displayField);const f=Array.from(c).sort();this._set("requiredFields",f)}validateFetchPopupFeatures(r){if(P(r))return null;for(const s of r.clientGraphics){const i=s.layer;if("popupEnabled"in i&&!i.popupEnabled)return new O("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i});if("popupTemplate"in i&&!$(i,r))return new O("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:i});if(s.isAggregate&&!(i.featureReduction&&"popupTemplate"in i.featureReduction&&i.featureReduction.popupEnabled&&i.featureReduction.popupTemplate))return new O("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i})}}async fetchClientPopupFeatures(r){const s=p(r)?r.clientGraphics:null;if(!s||s.length===0)return[];const i=new Array(s.length),a=new Map,u=await this.createPopupQuery(r);for(let n=0;n<s.length;n++){const d=s[n];if(d.isAggregate){i[n]=d;continue}const{layer:c}=d;if(!("popupEnabled"in c))continue;const w=A(this.layer.fieldsIndex,u.outFields),f=$(c,r);if(!p(f))continue;const y=await this._loadArcadeModules(f);y&&y.arcadeUtils.hasGeometryOperations(f)||!Fe(w,d)?a.set(d.getObjectId(),n):i[n]=d}if(this.layer.type==="stream"||a.size===0)return i.filter(Boolean);u.objectIds=Array.from(a.keys());try{const n=await this.layer.queryFeatures(u);for(const d of n.features)i[a.get(d.getObjectId())]=d}catch{}return i.filter(Boolean)}async createPopupQuery(r){const s=this.layer.createQuery(),i=new Set;let a=!1;const u=p(r)&&r.clientGraphics?r.clientGraphics.map(n=>n.layer):[this.layer];for(const n of u){if(!("popupEnabled"in n))continue;const d=$(n,r);if(!p(d))continue;const c=await this._loadArcadeModules(d),w=c&&c.arcadeUtils.hasGeometryOperations(d);a=!(this.layer.geometryType!=="point"&&!w);const f=await Ce(this.layer,d);for(const y of f)i.add(y)}if(s.returnGeometry=a,s.returnZ=a,s.returnM=a,s.outFields=Array.from(i),s.outSpatialReference=this.view.spatialReference,this.layer.type==="feature"){const n=Z(this);p(n)&&(s.where=s.where?`(${s.where}) AND (${n})`:n)}return s}canResume(){return!!super.canResume()&&(!p(this.timeExtent)||!this.timeExtent.isEmpty)}};return o([l()],t.prototype,"_updatingRequiredFieldsPromise",void 0),o([l({readOnly:!0})],t.prototype,"availableFields",null),o([l()],t.prototype,"effect",null),o([l({type:ue})],t.prototype,"featureEffect",null),o([l({type:ce})],t.prototype,"filter",void 0),o([l(de)],t.prototype,"timeExtent",void 0),o([l()],t.prototype,"layer",void 0),o([l({type:Number})],t.prototype,"maximumNumberOfFeatures",null),o([l({readOnly:!0,type:Boolean})],t.prototype,"maximumNumberOfFeaturesExceeded",null),o([l({readOnly:!0})],t.prototype,"requiredFields",void 0),o([l()],t.prototype,"suspended",void 0),o([l()],t.prototype,"view",void 0),t=o([F("esri.views.layers.FeatureLayerView")],t),t};let h=class extends $e(Oe(Ie(we(ve)))){constructor(e){super(e),this._controllerTotal=0,this._processorTotal=0,this.suspendResumeExtentMode="data"}initialize(){this.updatingHandles.add(()=>this.view.floors,()=>this.processor.filterVisibility.filterChanged()),this.handles.add(k(()=>this._updatingRequiredFieldsPromise,e=>this.updatingHandles.addPromise(e),z))}destroy(){this.updatingHandles.removeAll(),this.handles.removeAll(),this.fetcherContext=M(this.fetcherContext)}get maximumNumberOfFeatures(){var e,t;return(e=(t=this.controller)==null?void 0:t.maximumNumberOfFeatures)!=null?e:this._get("maximumNumberOfFeatures")}set maximumNumberOfFeatures(e){this._set("maximumNumberOfFeatures",e),this.controller&&(this.controller.maximumNumberOfFeatures=e)}get maximumNumberOfFeaturesExceeded(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}get updatingProgressValue(){var e,t;let r=0;if((e=this.controller)!=null&&e.updating){const i=this.controller.updatingRemaining,a=Math.max(this.controller.updatingTotal,this._controllerTotal);a>0&&(r=(a-i)/a,this._controllerTotal=a)}let s=0;if((t=this.processor)!=null&&t.updating){const i=this.processor.updatingRemaining,a=Math.max(i,this._processorTotal);a>0&&(s=(a-i)/a,this._processorTotal=a)}return .5*(r+s)}get updatePolicy(){if(!this.controller)return _.ASYNC;switch(this.controller.mode){case"snapshot":{const e=Te[this.layer.geometryType];return e==null||this.controller.serviceDataCount>e?_.ASYNC:_.SYNC}case"tiles":return _.ASYNC}}get hasZ(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsZ)&&("returnZ"in e&&e.returnZ!=null?e.returnZ:t.supportsZ)}get hasM(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsM)&&"returnM"in e&&e.returnM!=null&&e.returnM}setVisibility(e,t){var r;(r=this.processor)==null||r.setObjectIdVisibility(e,t)}createQuery(){return super.createQuery()}queryFeatures(e,t){const r=()=>super.queryFeatures(e,t);return this.layer.geometryType==="mesh"?this._queryFeaturesMesh(this._ensureQuery(e),r):r()}beforeSetController(e){e.maximumNumberOfFeatures=this.maximumNumberOfFeatures}createController(){this.fetcherContext=new Se({layerView:this,returnZ:this.hasZ,returnM:this.hasM});const e=new qe({layerView:this,context:this.fetcherContext,graphics:new Re,extent:this.clippingExtent});return this.updatingHandles.add(()=>e.serviceDataExtent,t=>{this.processor&&(this.processor.dataExtent=t)},H),this.handles.add(k(()=>this.suspended,t=>{t?e.suspend():e.resume()},z)),this.updatingHandles.add(()=>{var t;return(t=this.processor)==null?void 0:t.displayFeatureLimit},t=>e.displayFeatureLimit=t,H),this.handles.add(be(()=>!this.updating,()=>{this._controllerTotal=0,this._processorTotal=0})),e}async doRefresh(e){e&&!this.suspended&&this.controller&&this.controller.refetch(),this.processor.filterVisibility.dirty=!0}getUsedMemory(){var e,t,r,s;return((e=(t=this.processor)==null?void 0:t.usedMemory)!=null?e:0)+((r=(s=this.controller)==null?void 0:s.memoryForUnusedFeatures)!=null?r:0)}getUnloadedMemory(){var e,t,r,s,i;return((e=(t=this.processor)==null?void 0:t.unprocessedMemoryEstimate)!=null?e:0)+((r=((s=this.controller)==null?void 0:s.expectedFeatureDiff)*((i=this.processor)==null?void 0:i.usedMemoryPerFeature))!=null?r:0)}ignoresMemoryFactor(){var e;return(e=this.controller)==null?void 0:e.hasMaximumNumberOfFeaturesOverride}async _queryFeaturesMesh(e,t){await this._validateQueryFeaturesMesh(e);const r=await t();if(e&&e.outStatistics||P(this.graphics3DProcessor))return r;const s=this.layer.objectIdField,i=this.graphics3DProcessor.graphics3DGraphicsByObjectID,a=[];for(const u of r.features)if(u.geometry){const n=i.get(u.attributes[s]);n&&(u.geometry=xe(n.graphic.geometry),a.push(u))}else a.push(u);return r.features=a,r}async _validateQueryFeaturesMesh(e){if(!e)return;const t=s=>{throw new O("feature-layer-view:unsupported-query",`Queries on Mesh feature collection layers do not support '${s}'`)},r=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const s of r)e[s]!=null&&t(s);"returnM"in e&&e.returnM&&t("returnM"),"returnCentroid"in e&&e.returnCentroid&&t("returnCentroid"),p(e.outSpatialReference)&&!e.outSpatialReference.equals(this.view.spatialReference)&&t("outSpatialReference")}get performanceInfo(){var e,t,r,s,i;const a=(e=this.controller)==null?void 0:e.displayFeatureLimit,u=p(a)&&a.averageSymbolComplexity,n=p(u)?`f:${u.primitivesPerFeature},v:${u.primitivesPerCoordinate}`:"n/a",d=v(m({},this._getResourceInfo()),{storedFeatures:0,totalVertices:0,partial:this.maximumNumberOfFeaturesExceeded,mode:(t=(r=this.controller)==null?void 0:r.mode)!=null?t:"n/a",symbolComplexity:n,nodes:(s=(i=this.controller)==null?void 0:i.tileDescriptors.length)!=null?s:0});if(this.controller&&d.displayedNumberOfFeatures){const c=this.controller.debug;d.storedFeatures=c.storedFeatures,d.totalVertices=c.totalVertices}return d}get test(){return{updatePolicy:this.updatePolicy,controller:this.controller}}};o([l()],h.prototype,"layer",void 0),o([l()],h.prototype,"controller",void 0),o([l()],h.prototype,"_controllerTotal",void 0),o([l()],h.prototype,"_processorTotal",void 0),o([l()],h.prototype,"maximumNumberOfFeatures",null),o([l()],h.prototype,"maximumNumberOfFeaturesExceeded",null),o([l(_e)],h.prototype,"updatingProgress",void 0),o([l({readOnly:!0})],h.prototype,"updatingProgressValue",null),o([l({readOnly:!0})],h.prototype,"updatePolicy",null),o([l({readOnly:!0})],h.prototype,"hasZ",null),o([l({readOnly:!0})],h.prototype,"hasM",null),o([l()],h.prototype,"suspendResumeExtentMode",void 0),h=o([F("esri.views.3d.layers.FeatureLayerViewBase3D")],h);const Te={point:5e3,polygon:500,polyline:1e3},Le=h;export{Le as w};
