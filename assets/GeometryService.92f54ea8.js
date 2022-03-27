var q=Object.defineProperty,x=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var L=(t,e,r)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,l=(t,e)=>{for(var r in e||(e={}))H.call(e,r)&&L(t,r,e[r]);if(C)for(var r of C(e))b.call(e,r)&&L(t,r,e[r]);return t},f=(t,e)=>x(t,G(e));import{lC as m,lE as I,bx as y,lS as h,v as $,f5 as T,fs as O,dz as E,e as c,d as p,n as A,lT as J,ek as w,bu as j,bz as Y,lU as F,lD as K,lV as k}from"./vendor.2e4165c5.js";async function B(t,e,r){const i=m(t),s=l(f(l({},i.query),{f:"json"}),e.toJSON()),o=I(s,r);return y(i.path+"/areasAndLengths",o).then(a=>a.data)}async function P(t,e,r,i){const s=e[0].spatialReference,o=m(t),a=f(l({},o.query),{f:"json",sr:JSON.stringify(s.toJSON()),polygons:JSON.stringify(h(e).geometries),polylines:JSON.stringify(h(r).geometries)}),u=I(a,i);return y(o.path+"/autoComplete",u).then(({data:N})=>(N.geometries||[]).map(({rings:g})=>new $({spatialReference:s,rings:g})))}async function Q(t,e,r){const i=m(t),s=l(f(l({},i.query),{f:"json"}),e.toJSON()),o=e.outSpatialReference||e.geometries[0].spatialReference,a=I(s,r);return y(i.path+"/buffer",a).then(u=>(u.data.geometries||[]).map(({rings:N})=>new $({spatialReference:o,rings:N})))}async function V(t,e,r){const i=e[0].spatialReference,s=m(t),o=f(l({},s.query),{f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify(h(e))}),a=I(o,r);return y(s.path+"/convexHull",a).then(({data:u})=>T(u.geometry).set({spatialReference:i}))}async function z(t,e,r,i){const s=m(t),o=e[0].spatialReference,a=f(l({},i),{query:f(l({},s.query),{f:"json",sr:JSON.stringify(o),target:JSON.stringify({geometryType:O(e[0]),geometries:e}),cutter:JSON.stringify(r)})}),u=await y(s.path+"/cut",a),{cutIndexes:N,geometries:g=[]}=u.data;return{cutIndexes:N,geometries:g.map(v=>{const D=T(v);return D.spatialReference=o,D})}}async function W(t,e,r){const i=e.geometries[0].spatialReference,s=m(t),o=l(f(l({},s.query),{f:"json"}),e.toJSON()),a=I(o,r);return y(s.path+"/densify",a).then(({data:u})=>(u.geometries||[]).map(N=>T(N).set({spatialReference:i})))}async function X(t,e,r,i){const s=e[0].spatialReference,o=m(t);let a={query:f(l({},o.query),{f:"json",sr:JSON.stringify(s.toJSON()),geometries:JSON.stringify(h(e)),geometry:JSON.stringify({geometryType:O(r),geometry:r.toJSON()})})};return i&&(a=l(l({},i),a)),y(o.path+"/difference",a).then(({data:u})=>(u.geometries||[]).map(N=>T(N).set({spatialReference:s})))}async function Z(t,e,r){const i=m(t),s=l(f(l({},i.query),{f:"json"}),e.toJSON()),o=I(s,r);return y(i.path+"/distance",o).then(({data:a})=>a&&a.distance)}const M=new E({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"});async function ee(t,e,r){const i={};e.sr!=null&&typeof e.sr=="object"?i.sr=e.sr.wkid||JSON.stringify(e.sr):i.sr=e.sr,i.strings=JSON.stringify(e.strings);const s=e.conversionType||"mgrs";i.conversionType=M.toJSON(s),i.conversionMode=e.conversionMode;const o=m(t),a=l(f(l({},o.query),{f:"json"}),i),u=I(a,r);return y(o.path+"/fromGeoCoordinateString",u).then(({data:N})=>N.coordinates)}const te=new E({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});function re(t){const{geometries:e,deviationUnit:r,maxDeviation:i}=t.toJSON(),s={maxDeviation:i};return e&&e.length&&(s.geometries=JSON.stringify({geometryType:O(e[0]),geometries:e}),s.sr=JSON.stringify(e[0].spatialReference)),te.write(r,s,"deviationUnit"),s}let R=class extends w{constructor(t){super(t),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null}};c([p({type:String,json:{write:!0}})],R.prototype,"deviationUnit",void 0),c([p({json:{read:{reader:t=>t?t.map(e=>T(e)):null},write:{writer:(t,e)=>{e.geometries=t.map(r=>r.toJSON())}}}})],R.prototype,"geometries",void 0),c([p({type:Number,json:{write:!0}})],R.prototype,"maxDeviation",void 0),R=c([A("esri.rest.support.GeneralizeParameters")],R),R.from=J(R);const ne=R;async function se(t,e,r){const i=(e=ne.from(e)).toJSON(),s=re(e),o=m(t),a=l(f(l({},o.query),{f:"json"}),s),u=i.geometries[0].spatialReference,N=I(a,r);return y(o.path+"/generalize",N).then(({data:g})=>(g.geometries||[]).map(v=>T(v).set({spatialReference:u})))}async function ie(t,e,r,i){const s=e[0].spatialReference,o=m(t),a=f(l({},o.query),{f:"json",sr:JSON.stringify(s.toJSON()),geometries:JSON.stringify(h(e)),geometry:JSON.stringify({geometryType:O(r),geometry:r.toJSON()})}),u=I(a,i);return y(o.path+"/intersect",u).then(({data:N})=>(N.geometries||[]).map(g=>T(g).set({spatialReference:s})))}function oe(t,e,r){const i=e.map(N=>N.toJSON()),s=e[0].spatialReference,o=m(t),a=f(l({},o.query),{f:"json",sr:s.wkid?s.wkid:JSON.stringify(s.toJSON()),polygons:JSON.stringify(i)}),u=I(a,r);return y(o.path+"/labelPoints",u).then(({data:N})=>(N.labelPoints||[]).map(g=>T(g).set({spatialReference:s})))}const ae=new E({preserveShape:"preserve-shape"});function le(t){const{polylines:e,lengthUnit:r,geodesic:i,calculationType:s}=t.toJSON(),o={};o.polylines=JSON.stringify(e);const a=t.polylines[0].spatialReference;return o.sr=a.wkid?a.wkid:JSON.stringify(a.toJSON()),r&&(o.lengthUnit=r),i&&(o.geodesic=i),s&&(o.calculationType=ae.toJSON(s)),o}let _=class extends w{constructor(t){super(t),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null}};c([p({type:String,json:{write:!0}})],_.prototype,"calculationType",void 0),c([p({type:Boolean,json:{write:!0}})],_.prototype,"geodesic",void 0),c([p({json:{write:!0}})],_.prototype,"lengthUnit",void 0),c([p({type:[j],json:{read:{reader:t=>t?t.map(e=>T(e)):null},write:{writer:(t,e)=>{e.polylines=t.map(r=>r.toJSON())}}}})],_.prototype,"polylines",void 0),_=c([A("esri.rest.support.LengthsParameters")],_),_.from=J(_);const ue=_;async function Ne(t,e,r){e=ue.from(e);const i=le(e),s=m(t),o=l(f(l({},s.query),{f:"json"}),i),a=I(o,r);return y(s.path+"/lengths",a).then(({data:u})=>u)}const ce=new E({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),fe=new E({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});function pe(t){const{geometries:e,bevelRatio:r,offsetDistance:i,offsetHow:s,offsetUnit:o}=t.toJSON(),a={bevelRatio:r,offsetDistance:i};return e&&e.length&&(a.geometries=JSON.stringify({geometryType:O(e[0]),geometries:e}),a.sr=JSON.stringify(e[0].spatialReference)),s&&(a.offsetHow=ce.toJSON(s)),o&&(a.offsetUnit=fe.toJSON(o)),a}let d=class extends w{constructor(t){super(t),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null}};c([p({type:Number,json:{write:!0}})],d.prototype,"bevelRatio",void 0),c([p({json:{read:{reader:t=>t?t.map(e=>T(e)):null},write:{writer:(t,e)=>{e.geometries=t.map(r=>r.toJSON())}}}})],d.prototype,"geometries",void 0),c([p({type:Number,json:{write:!0}})],d.prototype,"offsetDistance",void 0),c([p({type:String,json:{write:!0}})],d.prototype,"offsetHow",void 0),c([p({type:String,json:{write:!0}})],d.prototype,"offsetUnit",void 0),d=c([A("esri.rest.support.OffsetParameters")],d),d.from=J(d);const ye=d;async function me(t,e,r){e=ye.from(e);const i=pe(e),s=m(t),o=l(f(l({},s.query),{f:"json"}),i),a=e.geometries[0].spatialReference,u=I(o,r);return y(s.path+"/offset",u).then(({data:N})=>(N.geometries||[]).map(g=>T(g).set({spatialReference:a})))}const Te=new E({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});function Ie(t){const{geometries1:e,geometries2:r,relation:i,relationParameter:s}=t.toJSON(),o={};if(e&&e.length){o.geometries1=JSON.stringify({geometryType:O(e[0]),geometries:e});const a=e[0].spatialReference;o.sr=a.wkid?a.wkid:JSON.stringify(a)}return r&&r.length>0&&(o.geometries2=JSON.stringify({geometryType:O(r[0]),geometries:r})),i&&(o.relation=Te.toJSON(i)),s&&(o.relationParam=s),o}let S=class extends w{constructor(t){super(t),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}};c([p({json:{read:{reader:t=>t?t.map(e=>T(e)):null},write:{writer:(t,e)=>{e.geometries1=t.map(r=>r.toJSON())}}}})],S.prototype,"geometries1",void 0),c([p({json:{read:{reader:t=>t?t.map(e=>T(e)):null},write:{writer:(t,e)=>{e.geometries2=t.map(r=>r.toJSON())}}}})],S.prototype,"geometries2",void 0),c([p({type:String,json:{write:!0}})],S.prototype,"relation",void 0),c([p({type:String,json:{write:!0}})],S.prototype,"relationParameter",void 0),S=c([A("esri.rest.support.RelationParameters")],S),S.from=J(S);const ge=S;async function de(t,e,r){e=ge.from(e);const i=Ie(e),s=m(t),o=l(f(l({},s.query),{f:"json"}),i),a=I(o,r);return y(s.path+"/relation",a).then(({data:u})=>u.relations)}async function _e(t,e,r,i){const s=e.spatialReference,o=m(t),a=f(l({},o.query),{f:"json",sr:JSON.stringify(s.toJSON()),target:JSON.stringify({geometryType:O(e),geometry:e.toJSON()}),reshaper:JSON.stringify(r.toJSON())}),u=I(a,i);return y(o.path+"/reshape",u).then(({data:N})=>T(N.geometry).set({spatialReference:s}))}async function Se(t,e,r){const i=typeof t=="string"?Y(t):t,s=e[0].spatialReference,o=O(e[0]),a=f(l({},r),{query:f(l({},i.query),{f:"json",sr:s.wkid?s.wkid:JSON.stringify(s),geometries:JSON.stringify(h(e))})}),{data:u}=await y(i.path+"/simplify",a);return F(u.geometries,o,s)}async function Oe(t,e,r){const i={};e.sr!=null&&typeof e.sr=="object"?i.sr=e.sr.wkid||JSON.stringify(e.sr):i.sr=e.sr,i.coordinates=JSON.stringify(e.coordinates);const s=e.conversionType||"mgrs";i.conversionType=M.toJSON(s),i.conversionMode=e.conversionMode,i.numOfDigits=e.numOfDigits,i.rounding=e.rounding,i.addSpaces=e.addSpaces;const o=m(t),a=l(f(l({},o.query),{f:"json"}),i),u=I(a,r);return y(o.path+"/toGeoCoordinateString",u).then(({data:N})=>N.strings)}const Re=new E({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});function Ue(t){const{extendHow:e,polylines:r,trimExtendTo:i}=t.toJSON(),s={};return s.extendHow=Re.toJSON(e),r&&r.length&&(s.polylines=JSON.stringify(r),s.sr=JSON.stringify(r[0].spatialReference)),i&&(s.trimExtendTo=JSON.stringify(i)),s}let U=class extends w{constructor(t){super(t),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null}};c([p({type:String,json:{write:!0}})],U.prototype,"extendHow",void 0),c([p({type:[j],json:{read:{reader:t=>t?t.map(e=>T(e)):null},write:{writer:(t,e)=>{e.polylines=t.map(r=>r.toJSON())}}}})],U.prototype,"polylines",void 0),c([p({json:{read:{reader:t=>t?T(t):null},write:{writer:(t,e)=>{e.trimExtendTo=t.toJSON()}}}})],U.prototype,"trimExtendTo",void 0),U=c([A("esri.rest.support.TrimExtendParameters")],U),U.from=J(U);const he=U;async function Ee(t,e,r){e=he.from(e);const i=Ue(e),s=m(t),o=l(f(l({},s.query),{f:"json"}),i),a=e.sr,u=I(o,r);return y(s.path+"/trimExtend",u).then(({data:N})=>(N.geometries||[]).map(({paths:g})=>new j({spatialReference:a,paths:g})))}async function Ae(t,e,r){const i=e[0].spatialReference,s=m(t),o=f(l({},s.query),{f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify(h(e))}),a=I(o,r);return y(s.path+"/union",a).then(({data:u})=>T(u.geometry).set({spatialReference:i}))}let n=class extends K{constructor(t){super(t),this.url=null}areasAndLengths(t,e){return B(this.url,t,e)}autoComplete(t,e,r){return P(this.url,t,e,r)}buffer(t,e){return Q(this.url,t,e)}convexHull(t,e){return V(this.url,t,e)}cut(t,e,r){return z(this.url,t,e,r)}densify(t,e){return W(this.url,t,e)}difference(t,e,r){return X(this.url,t,e,r)}distance(t,e){return Z(this.url,t,e)}fromGeoCoordinateString(t,e){return ee(this.url,t,e)}generalize(t,e){return se(this.url,t,e)}intersect(t,e,r){return ie(this.url,t,e,r)}labelPoints(t,e){return oe(this.url,t,e)}lengths(t,e){return Ne(this.url,t,e)}offset(t,e){return me(this.url,t,e)}project(t,e){return k(this.url,t,e)}relation(t,e){return de(this.url,t,e)}reshape(t,e,r){return _e(this.url,t,e,r)}simplify(t,e){return Se(this.url,t,e)}toGeoCoordinateString(t,e){return Oe(this.url,t,e)}trimExtend(t,e){return Ee(this.url,t,e)}union(t,e){return Ae(this.url,t,e)}};n.UNIT_METER=9001,n.UNIT_GERMAN_METER=9031,n.UNIT_FOOT=9002,n.UNIT_SURVEY_FOOT=9003,n.UNIT_CLARKE_FOOT=9005,n.UNIT_FATHOM=9014,n.UNIT_NAUTICAL_MILE=9030,n.UNIT_SURVEY_CHAIN=9033,n.UNIT_SURVEY_LINK=9034,n.UNIT_SURVEY_MILE=9035,n.UNIT_KILOMETER=9036,n.UNIT_CLARKE_YARD=9037,n.UNIT_CLARKE_CHAIN=9038,n.UNIT_CLARKE_LINK=9039,n.UNIT_SEARS_YARD=9040,n.UNIT_SEARS_FOOT=9041,n.UNIT_SEARS_CHAIN=9042,n.UNIT_SEARS_LINK=9043,n.UNIT_BENOIT_1895A_YARD=9050,n.UNIT_BENOIT_1895A_FOOT=9051,n.UNIT_BENOIT_1895A_CHAIN=9052,n.UNIT_BENOIT_1895A_LINK=9053,n.UNIT_BENOIT_1895B_YARD=9060,n.UNIT_BENOIT_1895B_FOOT=9061,n.UNIT_BENOIT_1895B_CHAIN=9062,n.UNIT_BENOIT_1895B_LINK=9063,n.UNIT_INDIAN_FOOT=9080,n.UNIT_INDIAN_1937_FOOT=9081,n.UNIT_INDIAN_1962_FOOT=9082,n.UNIT_INDIAN_1975_FOOT=9083,n.UNIT_INDIAN_YARD=9084,n.UNIT_INDIAN_1937_YARD=9085,n.UNIT_INDIAN_1962_YARD=9086,n.UNIT_INDIAN_1975_YARD=9087,n.UNIT_FOOT_1865=9070,n.UNIT_RADIAN=9101,n.UNIT_DEGREE=9102,n.UNIT_ARCMINUTE=9103,n.UNIT_ARCSECOND=9104,n.UNIT_GRAD=9105,n.UNIT_GON=9106,n.UNIT_MICRORADIAN=9109,n.UNIT_ARCMINUTE_CENTESIMAL=9112,n.UNIT_ARCSECOND_CENTESIMAL=9113,n.UNIT_MIL6400=9114,n.UNIT_BRITISH_1936_FOOT=9095,n.UNIT_GOLDCOAST_FOOT=9094,n.UNIT_INTERNATIONAL_CHAIN=109003,n.UNIT_INTERNATIONAL_LINK=109004,n.UNIT_INTERNATIONAL_YARD=109001,n.UNIT_STATUTE_MILE=9093,n.UNIT_SURVEY_YARD=109002,n.UNIT_50KILOMETER_LENGTH=109030,n.UNIT_150KILOMETER_LENGTH=109031,n.UNIT_DECIMETER=109005,n.UNIT_CENTIMETER=109006,n.UNIT_MILLIMETER=109007,n.UNIT_INTERNATIONAL_INCH=109008,n.UNIT_US_SURVEY_INCH=109009,n.UNIT_INTERNATIONAL_ROD=109010,n.UNIT_US_SURVEY_ROD=109011,n.UNIT_US_NAUTICAL_MILE=109012,n.UNIT_UK_NAUTICAL_MILE=109013,n.UNIT_SQUARE_INCHES="esriSquareInches",n.UNIT_SQUARE_FEET="esriSquareFeet",n.UNIT_SQUARE_YARDS="esriSquareYards",n.UNIT_ACRES="esriAcres",n.UNIT_SQUARE_MILES="esriSquareMiles",n.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",n.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",n.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",n.UNIT_SQUARE_METERS="esriSquareMeters",n.UNIT_ARES="esriAres",n.UNIT_HECTARES="esriHectares",n.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",c([p()],n.prototype,"url",void 0),n=c([A("esri.tasks.GeometryService")],n);const ve=n;export{ve as default};
