import{t as p,a as f}from"../chunks/CBfE49i6.js";import"../chunks/CTlXUlo-.js";import{g as n,h as d,b as g,s as h,f as c,n as v}from"../chunks/Q_yrUxcH.js";import{b as _}from"../chunks/PvzFc60A.js";function u(r,t,s,o){var a=r.__attributes??(r.__attributes={});d&&(a[t]=r.getAttribute(t),r.nodeName==="LINK")||a[t]!==(a[t]=s)&&(s==null?r.removeAttribute(t):typeof s!="string"&&b(r).includes(t)?r[t]=s:r.setAttribute(t,s))}var e=new Map;function b(r){var t=e.get(r.nodeName);if(t)return t;e.set(r.nodeName,t=[]);for(var s,o=r,a=Element.prototype;a!==o;){s=g(o);for(var i in s)s[i].set&&t.push(i);o=n(o)}return t}var m=p('<h1>sveltekit-gh-pages</h1> <p>Deployed to GitHub Pages.</p> <a>About</a> <h1>Welcome to SvelteKit!!</h1> <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>',1);function w(r){var t=m(),s=h(c(t),4);u(s,"href",`${_??""}/about`),v(4),f(r,t)}export{w as component};
