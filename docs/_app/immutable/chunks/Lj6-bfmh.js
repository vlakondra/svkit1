import{L as i,x as f,v as u,X as v,Y as p,h as s,m as o,C as h,B as E}from"./B4zBh1YP.js";function T(n){var t=document.createElement("template");return t.innerHTML=n,t.content}function r(n,t){var e=u;e.nodes_start===null&&(e.nodes_start=n,e.nodes_end=t)}function w(n,t){var e=(t&v)!==0,_=(t&p)!==0,a,c=!n.startsWith("<!>");return()=>{if(s)return r(o,null),o;a===void 0&&(a=T(c?n:"<!>"+n),e||(a=f(a)));var d=_?document.importNode(a,!0):a.cloneNode(!0);if(e){var m=f(d),l=d.lastChild;r(m,l)}else r(d,d);return d}}function x(n=""){if(!s){var t=i(n+"");return r(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=i()),E(e)),r(e,e),e}function L(){if(s)return r(o,null),o;var n=document.createDocumentFragment(),t=document.createComment(""),e=i();return n.append(t,e),r(t,e),n}function M(n,t){if(s){u.nodes_end=o,h();return}n!==null&&n.before(t)}const g="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(g);export{M as a,r as b,L as c,x as d,w as t};
