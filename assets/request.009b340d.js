var h=Object.defineProperty,q=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var g=(s,t,e)=>t in s?h(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,u=(s,t)=>{for(var e in t||(t={}))y.call(t,e)&&g(s,e,t[e]);if(p)for(var e of p(t))j.call(t,e)&&g(s,e,t[e]);return s},c=(s,t)=>q(s,v(t));import{a_ as k,K as w}from"./vendor.2e4165c5.js";let b;function T(s,t){let e=t.responseType;e?e!=="array-buffer"&&e!=="blob"&&e!=="json"&&e!=="native"&&e!=="native-request-init"&&e!=="text"&&(e="text"):e="json",t.responseType=e;const f=k(t.signal);return delete t.signal,globalThis.invokeStaticMessage("request",{url:s,options:t},{signal:f}).then(async r=>{let i,n,d,l,a;if(r.data)if(r.data instanceof ArrayBuffer){if(!(e!=="json"&&e!=="text"&&e!=="blob"||(i=new Blob([r.data]),e!=="json"&&e!=="text"||(b||(b=new FileReaderSync),l=b.readAsText(i),e!=="json")))){try{n=JSON.parse(l||null)}catch(o){const x=c(u({},o),{url:s,requestOptions:t});throw new w("request:server",o.message,x)}if(n.error){const o=c(u({},n.error),{url:s,requestOptions:t});throw new w("request:server",n.error.message,o)}}}else e==="native"&&(r.data.signal=f,d=await fetch(r.data.url,r.data));switch(e){case"blob":a=i;break;case"json":a=n;break;case"native":a=d;break;case"text":a=l;break;default:a=r.data}return{data:a,requestOptions:t,ssl:r.ssl,url:s}})}export{T as execute};
