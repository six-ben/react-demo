import{s as l,r as p,j as r,a as d,F as f,T as h,I as i,R as m,b as v}from"./vendor.610db970.js";const y=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function u(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=u(e);fetch(e.href,s)}};y();const g=["blue","cyan","orange","gold","geekblue","lime","green","purple","magenta","red","volcano"];var w="/assets/liuben.9279a7df.png",x="/assets/wangshu.f794b1d3.png",b="/assets/songjianxin.95973f56.png",E="/assets/wangxianqiao.07c432f9.jpg",j="/assets/shenliyang.8d8fe5c3.jpg",A="/assets/suming.72d00b29.jpg";const t=["\u5954","\u8212","\u946B","\u785A","\u9633","\u94ED"],B=l.div`
  font-size: 1rem;
  padding-top: 20px;
  height: 100vh;
`,F=l.div`
  width: 320px;
`,D=l.div`
  margin: 5px;
`;function I({name:a}){const o=p.exports.useMemo(()=>{switch(a){case t[0]:return r(i,{src:w,preview:!1});case t[1]:return r(i,{src:x,preview:!1});case t[2]:return r(i,{src:b,preview:!1});case t[3]:return r(i,{src:E,preview:!1});case t[4]:return r(i,{src:j,preview:!1});case t[5]:return r(i,{src:A,preview:!1});default:return r(i,{preview:!1})}},[a]);return r(F,{children:o})}function M(){const[a,o]=p.exports.useState(),u=n=>{const e=t.filter(c=>c!==n),s=Math.floor(Math.random()*e.length);o(e[s])};return r("div",{className:"App",children:r("header",{className:"App-header",children:r(B,{children:a?d(f,{children:[d("div",{children:["\u6B64\u7801\u5C5E\u4E8E \u201C",a,"\u201D "]}),r(I,{name:a})]}):d(f,{children:["\u662F\u54EA\u4E2A\u5927\u5B9D\u8D1D\u6765\u626B\u7EA2\u5305\u4E86\uFF1F",r(D,{children:t.map((n,e)=>r(h,{color:g[e%g.length],onClick:()=>u(n),children:n},n))})]})})})})}m.render(r(v.StrictMode,{children:r(M,{})}),document.getElementById("root"));
