import{ej as L,r as V,t as j,cN as S,cO as G,e as o,d as l,n as O,a9 as T,hs as R,ht as k,h as z,ae as E,q as B,fW as K,fY as Q,bC as W}from"./vendor.2e4165c5.js";import{n as $}from"./attributeUtils.987422a2.js";const Y={setAttribute(){},rollback(){},commit(){}};var I;function se(e,r){const t=r.attributes[e.objectIdField],n=e.sessions.get(t);if(n)return n;const s=L(r.attributes),i=new Set;if(t==null)return Y;const d=e.attributeOverrides.createInteractiveEditSession(t),c=new Map,w=(u,m)=>{const p=c.get(u);if(p==null){const f=m.indexOf(t);return c.set(u,f),f}return p};let a=I.EDITING;const y={setAttribute(u,m){if(a!==I.EDITING)return;const p=e.fieldsIndex.get(u);if(j(p))return;const f=e.attributeStorageInfo.findIndex(b=>b.name===p.name);if(f<0)return;d.set(f,m);const F=e.attributeStorageInfo[f];let x=!1;i.add(u),e.forEachNode((b,A)=>{const D=w(b,A);if(D===-1)return;const U=e.getAttributeData(b.index);if(U){const _=U[F.name];_&&(_[D]=m,e.setAttributeData(b.index,U,r),x=!0)}}),x&&e.clearMemCache()},rollback(){if(a===I.EDITING){for(const u of i)this.setAttribute(u,s[u]);d.rollback(),a=I.ROLLED_BACK,e.sessions.delete(t)}},commit(){a===I.EDITING&&(d.commit(),a=I.COMMITTED,e.sessions.delete(t))}};return e.sessions.set(t,y),y}function ie(e,r){const t=H(e,r);if(t.size===0)return;const n=new Map;for(let i=0;i<e.attributeStorageInfo.length;i++)n.set(e.attributeStorageInfo[i].name,i);let s=!1;t.forEach((i,d)=>{const c=e.getAttributeData(d);let w=!1;i.forEach((a,y)=>{const u=V(c)?c[y]:null,m=n.get(y);for(const{featureIndex:p,value:f,featureId:F}of a)u&&(u[p]=f,w=!0,s=!0),e.attributeOverrides.updateValue(F,m,f)}),w&&e.setAttributeData(d,c,null)}),s&&e.clearMemCache()}function H(e,r){const t=r.edits.updateFeatures;if(!t||t.length===0)return new M;const n=X(r),s=new M,i=new Map;for(let a=0;a<e.attributeStorageInfo.length;a++)i.set(e.attributeStorageInfo[a].name,a);const d=e.fieldsIndex,c=e.objectIdField,w=t.filter(a=>{const y=$(d,a.attributes,c);return n.has(y)});return e.forEachNode((a,y)=>{const u=new Set(y);for(const m of w){const p=$(d,m.attributes,c);if(!u.has(p))continue;const f=y.indexOf(p);for(const F in m.attributes){const x=e.fieldsIndex.normalizeFieldName(F),b=J(s,a.index,x),A=m.attributes[F];b.push({featureIndex:f,featureId:p,value:A})}}}),s}function J(e,r,t){const n=P(e,r),s=n.get(t);if(s)return s;const i=new Array;return n.set(t,i),i}function P(e,r){const t=e.get(r);if(t)return t;const n=new Z;return e.set(r,n),n}function X(e){const r=new Set;if(!e.updatedFeatures)return r;for(const t of e.updatedFeatures)t.objectId!=null&&t.error==null&&r.add(t.objectId);return r}(function(e){e[e.EDITING=0]="EDITING",e[e.ROLLED_BACK=1]="ROLLED_BACK",e[e.COMMITTED=2]="COMMITTED"})(I||(I={}));const Z=Map,M=Map;function ae(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:r},requiredFields:t}=this;return e.outFields?S(r,[...G(r,e.outFields),...t]):S(r,t)}}}}const C=e=>{let r=class extends e{constructor(){super(...arguments),this._numUpdating=0,this.asyncUpdateState=new Map}get updating(){return this._numUpdating>0}autoUpdateAsync(t,n){return ee(s=>this._updateAsync(t,s),n)}async _updateAsync(t,n){if(!this._startAsyncUpdate(t)){try{const s=await n();this._set(t,s)}catch{T.getLogger(this.declaredClass).warn(`Async update of "${t}" failed. Async update functions should not throw exceptions.`)}this._endAsyncUpdate(t)&&this._updateAsync(t,n)}}_startAsyncUpdate(t){var n;const s=(n=this.asyncUpdateState.get(t))!=null?n:h.None;return s&h.Updating?(this.asyncUpdateState.set(t,s|h.Invalidated),!0):(++this._numUpdating,this.asyncUpdateState.set(t,s|h.Updating),!1)}_endAsyncUpdate(t){var n;--this._numUpdating;const s=((n=this.asyncUpdateState.get(t))!=null?n:h.None)&~h.Updating;return s&h.Invalidated?(this.asyncUpdateState.set(t,s&~h.Invalidated),!0):(this.asyncUpdateState.set(t,s),!1)}};return o([l({readOnly:!0})],r.prototype,"updating",null),o([l()],r.prototype,"_numUpdating",void 0),r=o([O("esri.core.AsyncUpdate")],r),r};var h;function ee(e,r){const t=()=>{i&&!d&&e(n)},n=()=>{if(!i||d)return r();i.clear(),d=!0;const c=R(i,r);return d=!1,c},s=()=>{i&&(i.destroy(),i=null)};let i=new k(t),d=!1;return e(n),{remove:s}}(function(e){e[e.None=0]="None",e[e.Updating=1]="Updating",e[e.Invalidated=2]="Invalidated"})(h||(h={}));let q=class extends C(z){};q=o([O("esri.core.AsyncUpdate")],q);const te=T.getLogger("esri.views.3d.layers.support.SceneLayerViewRequiredFields");let g=class extends C(B){constructor(e){super(e)}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:r},rendererFields:t,labelingFields:n,viewFilterFields:s}=this;return S(e,[...E(r,[]),...E(t,[]),...E(n,[]),...E(s,[])])}initialize(){const e=this.layerView.layer;this.layer=e,this.handles.add([this.autoUpdateAsync("rendererFields",()=>{const{fieldsIndex:r,renderer:t}=this.layer;return t?N(n=>t.collectRequiredFields(n,r)):null}),this.autoUpdateAsync("labelingFields",()=>{const{layer:r}=this;return r.labelsVisible?N(t=>K(t,r)):null}),this.autoUpdateAsync("viewFilterFields",()=>{const{layer:r,filter:t}=this.layerView;return N(n=>Q(n,r,t))})])}};async function N(e){const r=new Set;try{return await e(r),Array.from(r).sort()}catch(t){return te.error(t),null}}o([l()],g.prototype,"layerView",void 0),o([l()],g.prototype,"layer",void 0),o([l()],g.prototype,"requiredFields",null),o([l()],g.prototype,"rendererFields",void 0),o([l()],g.prototype,"labelingFields",void 0),o([l()],g.prototype,"viewFilterFields",void 0),g=o([O("esri.views.3d.layers.support.SceneLayerViewRequiredFields")],g);class v extends W{constructor(){super(...arguments),this.layer=null,this.filter=null}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(r){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(r){throw new Error("Not implemented")}queryFeatures(r,t){throw new Error("Not implemented")}queryObjectIds(r,t){throw new Error("Not implemented")}queryFeatureCount(r,t){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(r,t){throw new Error("Not implemented")}}o([l()],v.prototype,"layer",void 0),o([l()],v.prototype,"availableFields",null),o([l()],v.prototype,"maximumNumberOfFeatures",null),o([l({readOnly:!0})],v.prototype,"maximumNumberOfFeaturesExceeded",null),o([l()],v.prototype,"filter",void 0);export{ie as a,ae as b,g as c,se as i,v as o};
