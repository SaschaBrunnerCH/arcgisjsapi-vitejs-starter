var S=Object.defineProperty,h=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var d=(r,e,t)=>e in r?S(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,u=(r,e)=>{for(var t in e||(e={}))x.call(e,t)&&d(r,t,e[t]);if(f)for(var t of f(e))y.call(e,t)&&d(r,t,e[t]);return r},p=(r,e)=>h(r,O(e));import{r as l,an as c,a_ as N,ls as v}from"./vendor.2e4165c5.js";import{u as a}from"./PixelBlock.f12bd166.js";import{d as J,S as b,T as g,s as z,v as B,y as P,O as w,b as D,m as k,h as T}from"./dataUtils.7cc034de.js";import{y as G,G as E,D as j}from"./rasterProjectionHelper.0f844a1d.js";import{f as M}from"./utils.aca63099.js";import"./colorUtils.4a110f06.js";class W{convertVectorFieldData(e){const t=a.fromJSON(e.pixelBlock),s=J(t,e.type);return Promise.resolve(l(s)&&s.toJSON())}async decode(e){const t=await b(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=a.fromJSON(e.pixelBlock),e.extent=e.extent?c.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(l(t)&&t.toJSON())}async updateSymbolizer(e){var t;this.symbolizer=g.fromJSON(e.symbolizerJSON),e.histograms&&((t=this.symbolizer)==null?void 0:t.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const t=this.symbolizer.simpleStretch(a.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(l(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=z(a.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=B(a.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach((s,o)=>{t.set(o,s==null?void 0:s.toJSON())}),Promise.resolve(t)}async mosaicAndTransform(e){var t;const s=e.srcPixelBlocks.map(m=>m?new a(m):null),o=P(s,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let i,n=o;return e.coefs&&(n=w(o,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(i=D(e.destDimension,e.gcsGrid),n=N(k(n,e.isUV?"vector-uv":"vector-magdir",i))),{pixelBlock:(t=n)==null?void 0:t.toJSON(),localNorthDirections:i}}async createStreamlinesMesh(e,t){const s={data:new Float32Array(e.flowData.buffer),width:e.flowData.width,height:e.flowData.height},{vertexData:o,indexData:i}=await T(e.rendererSettings,s,t.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:i.buffer},transferList:[o.buffer,i.buffer]}}async getProjectionOffsetGrid(e){const t=c.fromJSON(e.projectedExtent),s=c.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new v({steps:e.datumTransformationSteps})),(e.includeGCSGrid||G(t.spatialReference,s.spatialReference,o))&&await E();const i=e.rasterTransform?M(e.rasterTransform):null;return j(p(u({},e),{projectedExtent:t,srcBufferExtent:s,datumTransformation:o,rasterTransform:i}))}}export{W as default};