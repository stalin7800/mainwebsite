import{S as N,i as q,s as F,e as v,t as L,k as x,c as h,a as y,h as T,d as n,m as E,b as $,g,F as m,E as S,G as V,w as Y,l as I,x as B,y as C,q as A,o as H,B as P,H as K,I as z,J as D,K as M,L as Q}from"../chunks/index-67b1ef89.js";import{w as W}from"../chunks/index-ccf1c5e1.js";const j=W("light");function Z(c){let e,r,l,o,u,f,p,i,k,w,a,s,_;return{c(){e=v("nav"),r=v("ul"),l=v("li"),o=v("a"),u=L("Home"),f=x(),p=v("li"),i=v("a"),k=L("About"),w=x(),a=v("li"),s=v("a"),_=L("Contact"),this.h()},l(b){e=h(b,"NAV",{class:!0});var t=y(e);r=h(t,"UL",{class:!0});var d=y(r);l=h(d,"LI",{});var O=y(l);o=h(O,"A",{href:!0,class:!0});var R=y(o);u=T(R,"Home"),R.forEach(n),O.forEach(n),f=E(d),p=h(d,"LI",{});var U=y(p);i=h(U,"A",{href:!0,class:!0});var X=y(i);k=T(X,"About"),X.forEach(n),U.forEach(n),w=E(d),a=h(d,"LI",{});var G=y(a);s=h(G,"A",{href:!0,class:!0});var J=y(s);_=T(J,"Contact"),J.forEach(n),G.forEach(n),d.forEach(n),t.forEach(n),this.h()},h(){$(o,"href","/"),$(o,"class","svelte-1g3us9m"),$(i,"href","/about"),$(i,"class","svelte-1g3us9m"),$(s,"href","/contact"),$(s,"class","svelte-1g3us9m"),$(r,"class","svelte-1g3us9m"),$(e,"class","svelte-1g3us9m")},m(b,t){g(b,e,t),m(e,r),m(r,l),m(l,o),m(o,u),m(r,f),m(r,p),m(p,i),m(i,k),m(r,w),m(r,a),m(a,s),m(s,_)},p:S,i:S,o:S,d(b){b&&n(e)}}}class ee extends N{constructor(e){super(),q(this,e,null,Z,F,{})}}function te(c){let e,r,l,o,u,f;return{c(){e=v("label"),r=v("input"),l=x(),o=v("span"),this.h()},l(p){e=h(p,"LABEL",{class:!0});var i=y(e);r=h(i,"INPUT",{type:!0,class:!0}),l=E(i),o=h(i,"SPAN",{class:!0}),y(o).forEach(n),i.forEach(n),this.h()},h(){$(r,"type","checkbox"),$(r,"class","svelte-noyf3i"),$(o,"class","slider round svelte-noyf3i"),$(e,"class","switch svelte-noyf3i")},m(p,i){g(p,e,i),m(e,r),m(e,l),m(e,o),u||(f=V(e,"change",c[0]),u=!0)},p:S,i:S,o:S,d(p){p&&n(e),u=!1,f()}}}function re(c){return[()=>{j.update(r=>r=="light"?"dark":"light"),console.log("updated")}]}class le extends N{constructor(e){super(),q(this,e,re,te,F,{})}}function oe(c){let e,r;return{c(){e=v("style"),r=L(`footer {\r
            background-color: black !important;\r
            border-color: white !important;\r
            color: white !important;\r
        }`)},l(l){e=h(l,"STYLE",{});var o=y(e);r=T(o,`footer {\r
            background-color: black !important;\r
            border-color: white !important;\r
            color: white !important;\r
        }`),o.forEach(n)},m(l,o){g(l,e,o),m(e,r)},d(l){l&&n(e)}}}function se(c){let e,r;return{c(){e=v("style"),r=L(`footer {\r
            background-color: white !important;\r
            border-color: black !important;\r
            color: black !important;\r
        }`)},l(l){e=h(l,"STYLE",{});var o=y(e);r=T(o,`footer {\r
            background-color: white !important;\r
            border-color: black !important;\r
            color: black !important;\r
        }`),o.forEach(n)},m(l,o){g(l,e,o),m(e,r)},d(l){l&&n(e)}}}function ne(c){let e,r,l,o,u,f,p,i;u=new le({});function k(s,_){return s[0]=="light"?se:oe}let w=k(c),a=w(c);return{c(){e=v("footer"),r=v("p"),l=L("Test Thing"),o=x(),Y(u.$$.fragment),f=x(),a.c(),p=I(),this.h()},l(s){e=h(s,"FOOTER",{class:!0});var _=y(e);r=h(_,"P",{});var b=y(r);l=T(b,"Test Thing"),b.forEach(n),o=E(_),B(u.$$.fragment,_),_.forEach(n),f=E(s),a.l(s),p=I(),this.h()},h(){$(e,"class","svelte-10tgq24")},m(s,_){g(s,e,_),m(e,r),m(r,l),m(e,o),C(u,e,null),g(s,f,_),a.m(s,_),g(s,p,_),i=!0},p(s,[_]){w!==(w=k(s))&&(a.d(1),a=w(s),a&&(a.c(),a.m(p.parentNode,p)))},i(s){i||(A(u.$$.fragment,s),i=!0)},o(s){H(u.$$.fragment,s),i=!1},d(s){s&&n(e),P(u),s&&n(f),a.d(s),s&&n(p)}}}function ae(c,e,r){let l;return K(c,j,o=>r(0,l=o)),[l]}class ie extends N{constructor(e){super(),q(this,e,ae,ne,F,{})}}function ce(c){let e,r;return{c(){e=v("style"),r=L(`:root {\r
            --col: white;\r
            --bgc: black;\r
        }`)},l(l){e=h(l,"STYLE",{});var o=y(e);r=T(o,`:root {\r
            --col: white;\r
            --bgc: black;\r
        }`),o.forEach(n)},m(l,o){g(l,e,o),m(e,r)},d(l){l&&n(e)}}}function fe(c){let e,r;return{c(){e=v("style"),r=L(`:root {\r
            --col: black;\r
            --bgc: white;\r
        }`)},l(l){e=h(l,"STYLE",{});var o=y(e);r=T(o,`:root {\r
            --col: black;\r
            --bgc: white;\r
        }`),o.forEach(n)},m(l,o){g(l,e,o),m(e,r)},d(l){l&&n(e)}}}function ue(c){let e,r,l,o,u,f,p,i,k;e=new ee({});const w=c[2].default,a=z(w,c,c[1],null);f=new ie({});function s(t,d){return t[0]=="light"?fe:ce}let _=s(c),b=_(c);return{c(){Y(e.$$.fragment),r=x(),l=v("br"),o=x(),a&&a.c(),u=x(),Y(f.$$.fragment),p=x(),b.c(),i=I()},l(t){B(e.$$.fragment,t),r=E(t),l=h(t,"BR",{}),o=E(t),a&&a.l(t),u=E(t),B(f.$$.fragment,t),p=E(t),b.l(t),i=I()},m(t,d){C(e,t,d),g(t,r,d),g(t,l,d),g(t,o,d),a&&a.m(t,d),g(t,u,d),C(f,t,d),g(t,p,d),b.m(t,d),g(t,i,d),k=!0},p(t,[d]){a&&a.p&&(!k||d&2)&&D(a,w,t,t[1],k?Q(w,t[1],d,null):M(t[1]),null),_!==(_=s(t))&&(b.d(1),b=_(t),b&&(b.c(),b.m(i.parentNode,i)))},i(t){k||(A(e.$$.fragment,t),A(a,t),A(f.$$.fragment,t),k=!0)},o(t){H(e.$$.fragment,t),H(a,t),H(f.$$.fragment,t),k=!1},d(t){P(e,t),t&&n(r),t&&n(l),t&&n(o),a&&a.d(t),t&&n(u),P(f,t),t&&n(p),b.d(t),t&&n(i)}}}function pe(c,e,r){let l;K(c,j,f=>r(0,l=f));let{$$slots:o={},$$scope:u}=e;return c.$$set=f=>{"$$scope"in f&&r(1,u=f.$$scope)},[l,u,o]}class _e extends N{constructor(e){super(),q(this,e,pe,ue,F,{})}}export{_e as default};
