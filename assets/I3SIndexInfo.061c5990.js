import{r as f,bx as g,K as u}from"./vendor.2e4165c5.js";async function x(r,n,e,t,a,s){let d=null;if(f(e)){const o=`${r}/nodepages/`,p=o+Math.floor(e.rootIndex/e.nodesPerPage);try{return{type:"page",rootPage:(await g(p,{query:{f:"json",token:t},responseType:"json",signal:s})).data,rootIndex:e.rootIndex,pageSize:e.nodesPerPage,lodMetric:e.lodSelectionMetricType,urlPrefix:o}}catch(c){f(a)&&a.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",p,c),d=c}}if(!n)return null;const i=`${r}/nodes/`,l=i+(n&&n.split("/").pop());try{return{type:"node",rootNode:(await g(l,{query:{f:"json",token:t},responseType:"json",signal:s})).data,urlPrefix:i}}catch(o){throw new u("sceneservice:root-node-missing","Root node missing.",{pageError:d,nodeError:o,url:l})}}export{x as n};
