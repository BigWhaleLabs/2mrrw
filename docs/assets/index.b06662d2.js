(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var O,a,G,C,j,M={},q=[],ie=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(e,t){for(var n in t)e[n]=t[n];return e}function K(e){var t=e.parentNode;t&&t.removeChild(e)}function ce(e,t,n){var r,l,o,i={};for(o in t)o=="key"?r=t[o]:o=="ref"?l=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?O.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return T(e,i,r,l,null)}function T(e,t,n,r,l){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l==null?++G:l};return l==null&&a.vnode!=null&&a.vnode(o),o}function W(e){return e.children}function D(e,t){this.props=e,this.context=t}function N(e,t){if(t==null)return e.__?N(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?N(e):null}function J(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return J(e)}}function R(e){(!e.__d&&(e.__d=!0)&&C.push(e)&&!U.__r++||j!==a.debounceRendering)&&((j=a.debounceRendering)||setTimeout)(U)}function U(){for(var e;U.__r=C.length;)e=C.sort(function(t,n){return t.__v.__b-n.__v.__b}),C=[],e.some(function(t){var n,r,l,o,i,u;t.__d&&(i=(o=(n=t).__v).__e,(u=n.__P)&&(r=[],(l=k({},o)).__v=o.__v+1,F(u,o,l,n.__n,u.ownerSVGElement!==void 0,o.__h!=null?[i]:null,r,i==null?N(o):i,o.__h),Z(r,o),o.__e!=i&&J(o)))})}function Q(e,t,n,r,l,o,i,u,p,d){var _,h,c,s,f,x,y,v=r&&r.__k||q,b=v.length;for(n.__k=[],_=0;_<t.length;_++)if((s=n.__k[_]=(s=t[_])==null||typeof s=="boolean"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?T(null,s,null,null,s):Array.isArray(s)?T(W,{children:s},null,null,null):s.__b>0?T(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s)!=null){if(s.__=n,s.__b=n.__b+1,(c=v[_])===null||c&&s.key==c.key&&s.type===c.type)v[_]=void 0;else for(h=0;h<b;h++){if((c=v[h])&&s.key==c.key&&s.type===c.type){v[h]=void 0;break}c=null}F(e,s,c=c||M,l,o,i,u,p,d),f=s.__e,(h=s.ref)&&c.ref!=h&&(y||(y=[]),c.ref&&y.push(c.ref,null,s),y.push(h,s.__c||f,s)),f!=null?(x==null&&(x=f),typeof s.type=="function"&&s.__k===c.__k?s.__d=p=X(s,p,e):p=Y(e,s,c,v,f,p),typeof n.type=="function"&&(n.__d=p)):p&&c.__e==p&&p.parentNode!=e&&(p=N(c))}for(n.__e=x,_=b;_--;)v[_]!=null&&te(v[_],v[_]);if(y)for(_=0;_<y.length;_++)ee(y[_],y[++_],y[++_])}function X(e,t,n){for(var r,l=e.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=e,t=typeof r.type=="function"?X(r,t,n):Y(n,r,r,l,r.__e,t));return t}function Y(e,t,n,r,l,o){var i,u,p;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(l),i=null;else{for(u=o,p=0;(u=u.nextSibling)&&p<r.length;p+=1)if(u==l)break e;e.insertBefore(l,o),i=o}return i!==void 0?i:l.nextSibling}function fe(e,t,n,r,l){var o;for(o in n)o==="children"||o==="key"||o in t||I(e,o,null,n[o],r);for(o in t)l&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||I(e,o,t[o],n[o],r)}function B(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||ie.test(t)?n:n+"px"}function I(e,t,n,r,l){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||B(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||B(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?V:z,o):e.removeEventListener(t,o?V:z,o);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function z(e){this.l[e.type+!1](a.event?a.event(e):e)}function V(e){this.l[e.type+!0](a.event?a.event(e):e)}function F(e,t,n,r,l,o,i,u,p){var d,_,h,c,s,f,x,y,v,b,P,w,$,A,L,g=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,u=t.__e=n.__e,t.__h=null,o=[u]),(d=a.__b)&&d(t);try{e:if(typeof g=="function"){if(y=t.props,v=(d=g.contextType)&&r[d.__c],b=d?v?v.props.value:d.__:r,n.__c?x=(_=t.__c=n.__c).__=_.__E:("prototype"in g&&g.prototype.render?t.__c=_=new g(y,b):(t.__c=_=new D(y,b),_.constructor=g,_.render=pe),v&&v.sub(_),_.props=y,_.state||(_.state={}),_.context=b,_.__n=r,h=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),g.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=k({},_.__s)),k(_.__s,g.getDerivedStateFromProps(y,_.__s))),c=_.props,s=_.state,h)g.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(g.getDerivedStateFromProps==null&&y!==c&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(y,b),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(y,_.__s,b)===!1||t.__v===n.__v){for(_.props=y,_.state=_.__s,t.__v!==n.__v&&(_.__d=!1),_.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(E){E&&(E.__=t)}),P=0;P<_._sb.length;P++)_.__h.push(_._sb[P]);_._sb=[],_.__h.length&&i.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(y,_.__s,b),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(c,s,f)})}if(_.context=b,_.props=y,_.__v=t,_.__P=e,w=a.__r,$=0,"prototype"in g&&g.prototype.render){for(_.state=_.__s,_.__d=!1,w&&w(t),d=_.render(_.props,_.state,_.context),A=0;A<_._sb.length;A++)_.__h.push(_._sb[A]);_._sb=[]}else do _.__d=!1,w&&w(t),d=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++$<25);_.state=_.__s,_.getChildContext!=null&&(r=k(k({},r),_.getChildContext())),h||_.getSnapshotBeforeUpdate==null||(f=_.getSnapshotBeforeUpdate(c,s)),L=d!=null&&d.type===W&&d.key==null?d.props.children:d,Q(e,Array.isArray(L)?L:[L],t,n,r,l,o,i,u,p),_.base=t.__e,t.__h=null,_.__h.length&&i.push(_),x&&(_.__E=_.__=null),_.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ue(n.__e,t,n,r,l,o,i,p);(d=a.diffed)&&d(t)}catch(E){t.__v=null,(p||o!=null)&&(t.__e=u,t.__h=!!p,o[o.indexOf(u)]=null),a.__e(E,t,n)}}function Z(e,t){a.__c&&a.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){a.__e(r,n.__v)}})}function ue(e,t,n,r,l,o,i,u){var p,d,_,h=n.props,c=t.props,s=t.type,f=0;if(s==="svg"&&(l=!0),o!=null){for(;f<o.length;f++)if((p=o[f])&&"setAttribute"in p==!!s&&(s?p.localName===s:p.nodeType===3)){e=p,o[f]=null;break}}if(e==null){if(s===null)return document.createTextNode(c);e=l?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,c.is&&c),o=null,u=!1}if(s===null)h===c||u&&e.data===c||(e.data=c);else{if(o=o&&O.call(e.childNodes),d=(h=n.props||M).dangerouslySetInnerHTML,_=c.dangerouslySetInnerHTML,!u){if(o!=null)for(h={},f=0;f<e.attributes.length;f++)h[e.attributes[f].name]=e.attributes[f].value;(_||d)&&(_&&(d&&_.__html==d.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(fe(e,c,h,l,u),_)t.__k=[];else if(f=t.props.children,Q(e,Array.isArray(f)?f:[f],t,n,r,l&&s!=="foreignObject",o,i,o?o[0]:n.__k&&N(n,0),u),o!=null)for(f=o.length;f--;)o[f]!=null&&K(o[f]);u||("value"in c&&(f=c.value)!==void 0&&(f!==e.value||s==="progress"&&!f||s==="option"&&f!==h.value)&&I(e,"value",f,h.value,!1),"checked"in c&&(f=c.checked)!==void 0&&f!==e.checked&&I(e,"checked",f,h.checked,!1))}return e}function ee(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){a.__e(r,n)}}function te(e,t,n){var r,l;if(a.unmount&&a.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ee(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){a.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&te(r[l],t,n||typeof e.type!="function");n||e.__e==null||K(e.__e),e.__=e.__e=e.__d=void 0}function pe(e,t,n){return this.constructor(e,n)}function ae(e,t,n){var r,l,o;a.__&&a.__(e,t),l=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],F(t,e=(!r&&n||t).__k=ce(W,null,[e]),l||M,M,t.ownerSVGElement!==void 0,!r&&n?[n]:l?null:t.firstChild?O.call(t.childNodes):null,o,!r&&n?n:l?l.__e:t.firstChild,r),Z(o,e)}O=q.slice,a={__e:function(e,t,n,r){for(var l,o,i;t=t.__;)if((l=t.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(e)),i=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,r||{}),i=l.__d),i)return l.__E=l}catch(u){e=u}throw e}},G=0,D.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},n),this.props)),e&&k(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),R(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),R(this))},D.prototype.render=W,C=[],U.__r=0;function ne(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=ne(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function m(){for(var e=0,t,n,r="";e<arguments.length;)(t=arguments[e++])&&(n=ne(t))&&(r&&(r+=" "),r+=n);return r}const de=m,he=m,ye=m,ve=m,me=m,ge=m,be=m,_e=m,oe=m,re=m,le=m,se=m,H=m;var ke=0;function S(e,t,n,r,l){var o,i,u={};for(i in t)i=="ref"?o=t[i]:u[i]=t[i];var p={type:e,props:u,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ke,__source:l,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(i in o)u[i]===void 0&&(u[i]=o[i]);return a.vnode&&a.vnode(p),p}const xe=H(me("pb-10","py-4"),be("h-screen"),ge("flex"),ye("justify-center"),he("items-center"),de("flex-col"),ve("gap-4","md:gap-8"));function we({children:e}){return S("div",{className:xe,children:e})}const Ce=H(se("text-blue-500"),_e("text-center"),re("text-5xl","md:text-9xl"),oe("font-display"),le("font-black")),Se=H(se("text-blue-300"),_e("text-center"),re("md:text-2xl"),oe("font-sans"),le("font-bold"));function Ne(){return S(we,{children:[S("h1",{className:Ce,children:"Tomorrow"}),S("p",{className:Se,children:"brings us closer together."})]})}ae(S(Ne,{}),document.getElementById("root"));