(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{102:function(e,t,n){"use strict";var r=n(37);t.a=(e,t)=>{const n=Object(r.a)(t);n&&!t.some((e,t)=>e!==n[t])||e(n||[])}},106:function(e,t,n){"use strict";var r=n(0),a=n(7),o=n(9),c=n(8),i=n(43),l=n(125);let u,s;async function d(){return u||(u=n.e(7).then(n.bind(null,180)),s=(await u).default),u}setTimeout(d,5e3);t.a=Object(r.h)(({className:e,id:t,animationData:n,play:u,playSegment:f,speed:m,noLoop:h,size:b,quality:p,isLowPriority:v,onLoad:g})=>{const[E,j]=Object(r.r)(),O=Object(r.q)(null),y=Object(r.q)(!1),w=Object(r.q)(!1),k=Object(r.q)();k.current=u;const N=Object(r.q)();N.current=f,Object(r.n)(()=>{if(E||!n)return;const e=()=>{if(!O.current)return;const e=new s(t,O.current,n,{noLoop:h,size:b,quality:p,isLowPriority:v},g);m&&e.setSpeed(m),j(e)};s?e():d().then(()=>{Object(o.b)(()=>{O.current&&e()})})},[E,n,t,v,h,g,p,b,m]),Object(r.n)(()=>()=>{E&&E.destroy()},[E]);const C=Object(r.m)((e=!1)=>{E&&(k.current||N.current)&&(N.current?E.playSegment(N.current):e?E.goToAndPlay(0):E.play())},[E]),L=Object(r.m)(()=>{E&&E.pause()},[E]),A=Object(r.m)(()=>{w.current=!0,E&&(y.current||(y.current=E.isPlaying()),L())},[E,L]),M=Object(r.m)(()=>{y.current&&C(),y.current=!1,w.current=!1},[C]),P=Object(r.m)(()=>{Object(o.b)(M)},[M]);Object(r.n)(()=>{E&&(u||f?w.current?y.current=!0:C(h):w.current?y.current=!1:L())},[E,u,f,h,C,L]),Object(i.a)(A,M),Object(l.a)(A,P);const T=Object(c.a)("AnimatedSticker",e,a.d&&u&&"is-playing"),S=b?`width: ${b}px; height: ${b}px;`:void 0;return r.a.createElement("div",{ref:O,className:T,style:S})})},114:function(e,t,n){"use strict";var r=n(0),a=n(57);t.a=({containerId:e,className:t,children:n})=>{const o=Object(r.q)(document.createElement("div"));return Object(r.o)(()=>{const n=document.querySelector(e||"#portals");if(!n)return;const r=o.current;return t&&r.classList.add(t),n.appendChild(r),()=>{a.a.render(void 0,r),n.removeChild(r)}},[t,e]),a.a.render(n,o.current)}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(5),a=n(48);const o={MonkeyIdle:n.p+"TwoFactorSetupMonkeyIdle.dea4a492c144df84ddab778dc8a3f0cd.tgs",MonkeyTracking:n.p+"TwoFactorSetupMonkeyTracking.eb5a7a6f166fb7589c12e6248561fb58.tgs",MonkeyClose:n.p+"TwoFactorSetupMonkeyClose.604c4c833d322b7e6c3ea19bef058241.tgs",MonkeyPeek:n.p+"TwoFactorSetupMonkeyPeek.1905436b042520363d7e59f5d7f903ab.tgs",FoldersAll:n.p+"FoldersAll.3f9f9e243d19f0fbf9aaaff11cbd4572.tgs",FoldersNew:n.p+"FoldersNew.9a40d71c0c8be70f5bd14ff2d7bc1593.tgs",DiscussionGroups:n.p+"DiscussionGroupsDucks.9ea453d1be9d1b0ee77a992f8e587485.tgs"};function c(e){const t=o[e].replace(window.location.origin,"");return a.b("file"+t,r.ApiMediaFormat.Lottie)}},120:function(e,t,n){"use strict";var r=n(0),a=n(8),o=n(1),c=n(14),i=n(93),l=n(31),u=n(98),s=n(16);n(141);const d={type:"blob",quality:.8,format:"jpeg",circle:!1};let f,m,h;var b=Object(r.h)(({file:e,onChange:t,onClose:a})=>{const[b,p]=Object(r.r)(!1);Object(r.n)(()=>{e&&(b?async function(e){try{const t=document.getElementById("avatar-crop");if(!t)return;const{offsetWidth:n,offsetHeight:r}=t;h=new f(t,{enableZoom:!0,boundary:{width:n,height:r},viewport:{width:n-16,height:r-16,type:"circle"}});const a=await Object(c.a)(e);await h.bind({url:a})}catch(e){o.o&&console.error(e)}}(e):async function(){return m||(m=Promise.all([n.e(5),n.e(8)]).then(n.bind(null,303)),f=(await m).default),m}().then(()=>p(!0)))},[e,b]);const v=Object(i.a)();return r.a.createElement(u.a,{isOpen:Boolean(e),onClose:a,title:"Drag to reposition",className:"CropModal",hasCloseButton:!0},b?r.a.createElement("div",{id:"avatar-crop"}):r.a.createElement(s.a,null),r.a.createElement(l.a,{className:"confirm-button",round:!0,color:"primary",onClick:async function(){if(!h)return;const e=await h.result(d),n="string"==typeof e?e:Object(c.b)(e,"avatar.jpg");t(n)},ariaLabel:v("CropImage")},r.a.createElement("i",{className:"icon-check"})))});n(142);t.a=Object(r.h)(({title:e="Change your profile picture",disabled:t,currentAvatarBlobUrl:n,onChange:o})=>{const[c,i]=Object(r.r)(),[l,u]=Object(r.r)(n);Object(r.n)(()=>{u(n)},[n]);const s=Object(a.a)(l&&"filled",t&&"disabled");return r.a.createElement("div",{className:"AvatarEditable"},r.a.createElement("label",{className:s,role:"button",tabIndex:0,title:e},r.a.createElement("input",{type:"file",onChange:function(e){const t=e.target;t&&t.files&&t.files[0]&&(i(t.files[0]),t.value="")},accept:"image/png, image/jpeg"}),r.a.createElement("i",{className:"icon-camera-add"}),l&&r.a.createElement("img",{src:l,alt:"Avatar"})),r.a.createElement(b,{file:c,onClose:function(){i(void 0)},onChange:function(e){i(void 0),o(e),l&&URL.revokeObjectURL(l),u(URL.createObjectURL(e))}}))})},125:function(e,t,n){"use strict";var r=n(0);t.a=(e,t)=>{Object(r.n)(()=>(document.hasFocus()||e(),window.addEventListener("blur",e),window.addEventListener("focus",t),()=>{window.removeEventListener("focus",t),window.removeEventListener("blur",e)}),[e,t])}},126:function(e,t,n){},138:function(e,t,n){"use strict";var r=n(0),a=n(1),o=n(7),c=n(116),i=n(106);n(126);const l=[0,50],u=[0,20],s=[20,0],d=o.f?a.kb:a.jb;t.a=Object(r.h)(({isPasswordVisible:e,isBig:t})=>{const[n,o]=Object(r.r)(),[f,m]=Object(r.r)(),[h,b]=Object(r.r)(!1),[p,v]=Object(r.r)(!1);Object(r.n)(()=>{n?setTimeout(()=>v(!0),2e3):Object(c.a)("MonkeyClose").then(o)},[n]),Object(r.n)(()=>{f||Object(c.a)("MonkeyPeek").then(m)},[f]);const g=Object(r.m)(()=>b(!0),[]);return r.a.createElement("div",{id:"monkey",className:t?"big":""},!h&&r.a.createElement("div",{className:"monkey-preview"}),n&&r.a.createElement(i.a,{id:"closeMonkey",size:t?a.ub:d,className:p?"hidden":"shown",animationData:n,playSegment:l,noLoop:!0,onLoad:g}),f&&r.a.createElement(i.a,{id:"peekMonkey",size:t?a.ub:d,className:p?"shown":"hidden",animationData:f,playSegment:e?u:s,noLoop:!0}))})},139:function(e,t,n){"use strict";var r=n(0),a=n(1),o=n(7),c=n(8),i=n(31);const l=o.f?550:400;t.a=Object(r.h)(({isLoading:e=!1,isPasswordVisible:t,error:n,hint:u,placeholder:s="Password",submitLabel:d="Next",clearError:f,onChangePasswordVisibility:m,onInputChange:h,onSubmit:b})=>{const p=Object(r.q)(null),[v,g]=Object(r.r)(""),[E,j]=Object(r.r)(!1);return Object(r.n)(()=>{o.k||setTimeout(()=>{p.current.focus()},l)},[]),Object(r.n)(()=>{n&&requestAnimationFrame(()=>{p.current.focus(),p.current.select()})},[n]),r.a.createElement("form",{action:"",onSubmit:function(t){t.preventDefault(),e||E&&b(v)},autoComplete:"off"},r.a.createElement("div",{className:Object(c.a)("input-group password-input",v&&"touched",n&&"error")},r.a.createElement("input",{ref:p,className:"form-control",type:t?"text":"password",id:"sign-in-password",value:v||"",autoComplete:"current-password",onChange:function(e){n&&f();const{target:t}=e;g(t.value),j(t.value.length>=a.U),h&&h(t.value)}}),r.a.createElement("label",null,n||u||s),r.a.createElement("div",{className:"toggle-password",onClick:function(){m(!t)},role:"button",tabIndex:0,title:"Toggle password visibility"},r.a.createElement("i",{className:t?"icon-eye":"icon-eye-closed"}))),E&&r.a.createElement(i.a,{type:"submit",ripple:!0,isLoading:e},d))})},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t),n.d(t,"AuthCode",(function(){return b})),n.d(t,"AuthPassword",(function(){return g})),n.d(t,"AuthRegister",(function(){return O})),n.d(t,"AuthQrCode",(function(){return C}));var r=n(0),a=n(2),o=n(7),c=n(3),i=n(39),l=n(16),u=n(1),s=n(116),d=n(106);n(126);const f=o.f?u.kb:u.jb;var m=Object(r.h)(({code:e,codeLength:t,trackingDirection:n,isTracking:a,isBig:o})=>{const[c,i]=Object(r.r)(),[l,m]=Object(r.r)(),[h,b]=Object(r.r)(!1),p=165/t;Object(r.n)(()=>{c||Object(s.a)("MonkeyIdle").then(i)},[c]),Object(r.n)(()=>{l||Object(s.a)("MonkeyTracking").then(m)},[l]);const v=Object(r.m)(()=>b(!0),[]);return r.a.createElement("div",{id:"monkey",className:o?"big":""},!h&&r.a.createElement("div",{className:"monkey-preview"}),c&&r.a.createElement(d.a,{id:"idleMonkey",size:o?u.ub:f,className:a?"hidden":void 0,animationData:c,play:!a,onLoad:v}),l&&r.a.createElement(d.a,{id:"trackingMonkey",size:o?u.ub:f,className:a?"shown":"hidden",animationData:l,playSegment:a?function(){const r=e&&e.length>1||n<0?15+p*(e.length-1):0,a=e.length===t?180:15+p*e.length;return n<1?[a,r]:[r,a]}():void 0,speed:2,noLoop:!0}))});function h(e){function t(){e()}return window.addEventListener("popstate",t),window.history.pushState({},""),()=>{window.removeEventListener("popstate",t),window.history.back()}}var b=Object(r.h)(Object(a.h)(e=>Object(c.l)(e,["authPhoneNumber","authIsCodeViaApp","authIsLoading","authError"]),(e,t)=>Object(c.l)(t,["setAuthCode","returnToAuthPhoneNumber","clearAuthError"]))(({authPhoneNumber:e,authIsCodeViaApp:t,authIsLoading:n,authError:a,setAuthCode:c,returnToAuthPhoneNumber:u,clearAuthError:s})=>{const d=Object(r.q)(null),[f,b]=Object(r.r)(""),[p,v]=Object(r.r)(!1),[g,E]=Object(r.r)(1);Object(r.n)(()=>{o.k||d.current.focus()},[]),h(u);const j=Object(r.m)(e=>{a&&s();const{currentTarget:t}=e;t.value=t.value.replace(/[^\d]+/,"").substr(0,5),t.value!==f&&(b(t.value),p?t.value.length||v(!1):v(!0),f&&f.length>t.value.length?E(-1):E(1),5===t.value.length&&c({code:t.value}))},[a,s,f,p,c]);return r.a.createElement("div",{id:"auth-code-form",className:"custom-scroll"},r.a.createElement("div",{className:"auth-form"},r.a.createElement(m,{code:f,codeLength:5,isTracking:p,trackingDirection:g}),r.a.createElement("h2",null,e,r.a.createElement("div",{className:"auth-number-edit",onClick:u,role:"button",tabIndex:0,title:"Sign In with another phone number"},r.a.createElement("i",{className:"icon-edit"}))),r.a.createElement("p",{className:"note"},t?r.a.createElement(r.a.Fragment,null,"We have sent the code to the Telegram app",r.a.createElement("br",null),"on your other device."):r.a.createElement(r.a.Fragment,null,"We have sent you an SMS",r.a.createElement("br",null),"with the code.")),r.a.createElement(i.a,{ref:d,id:"sign-in-code",label:"Code",onInput:j,value:f,error:a,autoComplete:"one-time-code",inputMode:"decimal"}),n&&r.a.createElement(l.a,null)))})),p=n(138),v=n(139);var g=Object(r.h)(Object(a.h)(e=>Object(c.l)(e,["authIsLoading","authError","authHint"]),(e,t)=>Object(c.l)(t,["setAuthPassword","clearAuthError"]))(({authIsLoading:e,authError:t,authHint:n,setAuthPassword:a,clearAuthError:o})=>{const[c,i]=Object(r.r)(!1),l=Object(r.m)(e=>{i(e)},[]),u=Object(r.m)(e=>{a({password:e})},[a]);return r.a.createElement("div",{id:"auth-password-form",className:"custom-scroll"},r.a.createElement("div",{className:"auth-form"},r.a.createElement(p.a,{isPasswordVisible:c}),r.a.createElement("h2",null,"Enter Your Password"),r.a.createElement("p",{className:"note"},"Your account is protected with",r.a.createElement("br",null),"an additional password."),r.a.createElement(v.a,{clearError:o,error:t,hint:n,isLoading:e,isPasswordVisible:c,onChangePasswordVisibility:l,onSubmit:u})))})),E=n(31),j=n(120);var O=Object(r.h)(Object(a.h)(e=>Object(c.l)(e,["authIsLoading","authError"]),(e,t)=>Object(c.l)(t,["signUp","clearAuthError","uploadProfilePhoto"]))(({authIsLoading:e,authError:t,signUp:n,clearAuthError:a,uploadProfilePhoto:o})=>{const[c,l]=Object(r.r)(!1),[u,s]=Object(r.r)(),[d,f]=Object(r.r)(""),[m,h]=Object(r.r)("");return r.a.createElement("div",{id:"auth-registration-form",className:"custom-scroll"},r.a.createElement("div",{className:"auth-form"},r.a.createElement("form",{action:"",method:"post",onSubmit:function(e){e.preventDefault(),n({firstName:d,lastName:m}),u&&o({file:u})}},r.a.createElement(j.a,{onChange:s}),r.a.createElement("h2",null,"Your Name"),r.a.createElement("p",{className:"note"},"Enter your name and add",r.a.createElement("br",null),"a profile picture."),r.a.createElement(i.a,{id:"registration-first-name",label:"Name",onChange:function(e){t&&a();const{target:n}=e;f(n.value),l(n.value.length>0)},value:d,error:t,autoComplete:"given-name"}),r.a.createElement(i.a,{id:"registration-last-name",label:"Last Name (optional)",onChange:function(e){const{target:t}=e;h(t.value)},value:m,autoComplete:"family-name"}),c&&r.a.createElement(E.a,{type:"submit",ripple:!0,isLoading:e},"Start Messaging"))))}));let y=null;class w{}w.render=function(e,t){y(e,t)},self.QrCreator=w,function(e){function t(t,n,r,a){var o={},c=e(r,n);c.u(t),c.J(),a=a||0;var i=c.h(),l=c.h()+2*a;return o.text=t,o.level=n,o.version=r,o.O=l,o.a=function(e,t){return t-=a,!(0>(e-=a)||e>=i||0>t||t>=i)&&c.a(e,t)},o}function n(e,t,n,r,a,o,c,i,l,u){function s(t,n,r,a,c,i,l){t?(e.lineTo(n+i,r+l),e.arcTo(n,r,a,c,o)):e.lineTo(n,r)}c?e.moveTo(t+o,n):e.moveTo(t,n),s(i,r,n,r,a,-o,0),s(l,r,a,t,a,0,-o),s(u,t,a,t,n,o,0),s(c,t,n,r,n,0,o)}function r(e,t,n,r,a,o,c,i,l,u){function s(t,n,r,a){e.moveTo(t+r,n),e.lineTo(t,n),e.lineTo(t,n+a),e.arcTo(t,n,t+r,n,o)}c&&s(t,n,o,o),i&&s(r,n,-o,o),l&&s(r,a,-o,-o),u&&s(t,a,o,-o)}function a(e,a){e:{var o=a.text,c=a.v,i=a.N,l=a.K,u=a.P;for(i=Math.max(1,i||1),l=Math.min(40,l||40);i<=l;i+=1)try{var s=t(o,c,i,u);break e}catch(e){}s=void 0}if(!s)return null;for(o=e.getContext("2d"),a.background&&(o.fillStyle=a.background,o.fillRect(a.left,a.top,a.size,a.size)),c=s.O,l=a.size/c,o.beginPath(),u=0;u<c;u+=1)for(i=0;i<c;i+=1){var d=o,f=a.left+i*l,m=a.top+u*l,h=u,b=i,p=s.a,v=f+l,g=m+l,E=h-1,j=h+1,O=b-1,y=b+1,w=Math.floor(Math.min(.5,Math.max(0,a.R))*l),k=p(h,b),N=p(E,O),C=p(E,b);E=p(E,y);var L=p(h,y);y=p(j,y),b=p(j,b),j=p(j,O),h=p(h,O),f=Math.round(f),m=Math.round(m),v=Math.round(v),g=Math.round(g),k?n(d,f,m,v,g,w,!C&&!h,!C&&!L,!b&&!L,!b&&!h):r(d,f,m,v,g,w,C&&h&&N,C&&L&&E,b&&L&&y,b&&h&&j)}return function(e,t){var n=t.fill;if("string"==typeof n)e.fillStyle=n;else{var r=n.type,a=n.colorStops;if(n=n.position.map(e=>Math.round(e*t.size)),"linear-gradient"===r)var o=e.createLinearGradient.apply(e,n);else{if("radial-gradient"!==r)throw Error("Unsupported fill");o=e.createRadialGradient.apply(e,n)}a.forEach(([e,t])=>{o.addColorStop(e,t)}),e.fillStyle=o}}(o,a),o.fill(),e}var o={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};y=function(e,t){var n={};Object.assign(n,o,e),n.N=n.minVersion,n.K=n.maxVersion,n.v=n.ecLevel,n.left=n.left,n.top=n.top,n.size=n.size,n.fill=n.fill,n.background=n.background,n.text=n.text,n.R=n.radius,n.P=n.quiet,t instanceof HTMLCanvasElement?(t.width===n.size&&t.height===n.size||(t.width=n.size,t.height=n.size),t.getContext("2d").clearRect(0,0,t.width,t.height),a(t,n)):((e=document.createElement("canvas")).width=n.size,e.height=n.size,n=a(e,n),t.appendChild(n))}}(function(){function e(a,c){function i(e,t){for(var n=-1;7>=n;n+=1)if(!(-1>=e+n||d<=e+n))for(var r=-1;7>=r;r+=1)-1>=t+r||d<=t+r||(s[e+n][t+r]=0<=n&&6>=n&&(0==r||6==r)||0<=r&&6>=r&&(0==n||6==n)||2<=n&&4>=n&&2<=r&&4>=r)}function l(e,n){for(var c=d=4*a+17,l=Array(c),h=0;h<c;h+=1){l[h]=Array(c);for(var b=0;b<c;b+=1)l[h][b]=null}for(s=l,i(0,0),i(d-7,0),i(0,d-7),c=r.G(a),l=0;l<c.length;l+=1)for(h=0;h<c.length;h+=1){b=c[l];var p=c[h];if(null==s[b][p])for(var v=-2;2>=v;v+=1)for(var g=-2;2>=g;g+=1)s[b+v][p+g]=-2==v||2==v||-2==g||2==g||0==v&&0==g}for(c=8;c<d-8;c+=1)null==s[c][6]&&(s[c][6]=0==c%2);for(c=8;c<d-8;c+=1)null==s[6][c]&&(s[6][c]=0==c%2);for(c=r.w(u<<3|n),l=0;15>l;l+=1)h=!e&&1==(c>>l&1),s[6>l?l:8>l?l+1:d-15+l][8]=h,s[8][8>l?d-l-1:9>l?15-l:14-l]=h;if(s[d-8][8]=!e,7<=a){for(c=r.A(a),l=0;18>l;l+=1)h=!e&&1==(c>>l&1),s[Math.floor(l/3)][l%3+d-8-3]=h;for(l=0;18>l;l+=1)h=!e&&1==(c>>l&1),s[l%3+d-8-3][Math.floor(l/3)]=h}if(null==f){for(e=o.I(a,u),c=function(){var e=[],t=0,n={B:function(){return e},c:function(t){return 1==(e[Math.floor(t/8)]>>>7-t%8&1)},put:function(e,t){for(var r=0;r<t;r+=1)n.m(1==(e>>>t-r-1&1))},f:function(){return t},m:function(n){var r=Math.floor(t/8);e.length<=r&&e.push(0),n&&(e[r]|=128>>>t%8),t+=1}};return n}(),l=0;l<m.length;l+=1)h=m[l],c.put(4,4),c.put(h.b(),r.f(4,a)),h.write(c);for(l=h=0;l<e.length;l+=1)h+=e[l].j;if(c.f()>8*h)throw Error("code length overflow. ("+c.f()+">"+8*h+")");for(c.f()+4<=8*h&&c.put(0,4);0!=c.f()%8;)c.m(!1);for(;!(c.f()>=8*h)&&(c.put(236,8),!(c.f()>=8*h));)c.put(17,8);var E=0;for(h=l=0,b=Array(e.length),p=Array(e.length),v=0;v<e.length;v+=1){var j=e[v].j,O=e[v].o-j;for(l=Math.max(l,j),h=Math.max(h,O),b[v]=Array(j),g=0;g<b[v].length;g+=1)b[v][g]=255&c.B()[g+E];for(E+=j,g=r.C(O),j=t(b[v],g.b()-1).l(g),p[v]=Array(g.b()-1),g=0;g<p[v].length;g+=1)O=g+j.b()-p[v].length,p[v][g]=0<=O?j.c(O):0}for(g=c=0;g<e.length;g+=1)c+=e[g].o;for(c=Array(c),g=E=0;g<l;g+=1)for(v=0;v<e.length;v+=1)g<b[v].length&&(c[E]=b[v][g],E+=1);for(g=0;g<h;g+=1)for(v=0;v<e.length;v+=1)g<p[v].length&&(c[E]=p[v][g],E+=1);f=c}for(e=f,c=-1,l=d-1,h=7,b=0,n=r.F(n),p=d-1;0<p;p-=2)for(6==p&&--p;;){for(v=0;2>v;v+=1)null==s[l][p-v]&&(g=!1,b<e.length&&(g=1==(e[b]>>>h&1)),n(l,p-v)&&(g=!g),s[l][p-v]=g,-1==--h&&(b+=1,h=7));if(0>(l+=c)||d<=l){l-=c,c=-c;break}}}var u=n[c],s=null,d=0,f=null,m=[],h={u:function(t){t=function(t){var n=e.s(t);return{S:function(){return 4},b:function(){return n.length},write:function(e){for(var t=0;t<n.length;t+=1)e.put(n[t],8)}}}(t),m.push(t),f=null},a:function(e,t){if(0>e||d<=e||0>t||d<=t)throw Error(e+","+t);return s[e][t]},h:function(){return d},J:function(){for(var e=0,t=0,n=0;8>n;n+=1){l(!0,n);var a=r.D(h);(0==n||e>a)&&(e=a,t=n)}l(!1,t)}};return h}function t(e,n){if(void 0===e.length)throw Error(e.length+"/"+n);var r=function(){for(var t=0;t<e.length&&0==e[t];)t+=1;for(var r=Array(e.length-t+n),a=0;a<e.length-t;a+=1)r[a]=e[a+t];return r}(),o={c:function(e){return r[e]},b:function(){return r.length},multiply:function(e){for(var n=Array(o.b()+e.b()-1),r=0;r<o.b();r+=1)for(var c=0;c<e.b();c+=1)n[r+c]^=a.i(a.g(o.c(r))+a.g(e.c(c)));return t(n,0)},l:function(e){if(0>o.b()-e.b())return o;for(var n=a.g(o.c(0))-a.g(e.c(0)),r=Array(o.b()),c=0;c<o.b();c+=1)r[c]=o.c(c);for(c=0;c<e.b();c+=1)r[c]^=a.i(a.g(e.c(c))+n);return t(r,0).l(e)}};return o}e.s=function(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);128>r?t.push(r):2048>r?t.push(192|r>>6,128|63&r):55296>r||57344<=r?t.push(224|r>>12,128|r>>6&63,128|63&r):(n++,r=65536+((1023&r)<<10|1023&e.charCodeAt(n)),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}return t};var n={L:1,M:0,Q:3,H:2},r=function(){function e(e){for(var t=0;0!=e;)t+=1,e>>>=1;return t}var n=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]];return{w:function(t){for(var n=t<<10;0<=e(n)-e(1335);)n^=1335<<e(n)-e(1335);return 21522^(t<<10|n)},A:function(t){for(var n=t<<12;0<=e(n)-e(7973);)n^=7973<<e(n)-e(7973);return t<<12|n},G:function(e){return n[e-1]},F:function(e){switch(e){case 0:return function(e,t){return 0==(e+t)%2};case 1:return function(e){return 0==e%2};case 2:return function(e,t){return 0==t%3};case 3:return function(e,t){return 0==(e+t)%3};case 4:return function(e,t){return 0==(Math.floor(e/2)+Math.floor(t/3))%2};case 5:return function(e,t){return 0==e*t%2+e*t%3};case 6:return function(e,t){return 0==(e*t%2+e*t%3)%2};case 7:return function(e,t){return 0==(e*t%3+(e+t)%2)%2};default:throw Error("bad maskPattern:"+e)}},C:function(e){for(var n=t([1],0),r=0;r<e;r+=1)n=n.multiply(t([1,a.i(r)],0));return n},f:function(e,t){if(4!=e||1>t||40<t)throw Error("mode: "+e+"; type: "+t);return 10>t?8:16},D:function(e){for(var t=e.h(),n=0,r=0;r<t;r+=1)for(var a=0;a<t;a+=1){for(var o=0,c=e.a(r,a),i=-1;1>=i;i+=1)if(!(0>r+i||t<=r+i))for(var l=-1;1>=l;l+=1)0>a+l||t<=a+l||(0!=i||0!=l)&&c==e.a(r+i,a+l)&&(o+=1);5<o&&(n+=3+o-5)}for(r=0;r<t-1;r+=1)for(a=0;a<t-1;a+=1)o=0,e.a(r,a)&&(o+=1),e.a(r+1,a)&&(o+=1),e.a(r,a+1)&&(o+=1),e.a(r+1,a+1)&&(o+=1),(0==o||4==o)&&(n+=3);for(r=0;r<t;r+=1)for(a=0;a<t-6;a+=1)e.a(r,a)&&!e.a(r,a+1)&&e.a(r,a+2)&&e.a(r,a+3)&&e.a(r,a+4)&&!e.a(r,a+5)&&e.a(r,a+6)&&(n+=40);for(a=0;a<t;a+=1)for(r=0;r<t-6;r+=1)e.a(r,a)&&!e.a(r+1,a)&&e.a(r+2,a)&&e.a(r+3,a)&&e.a(r+4,a)&&!e.a(r+5,a)&&e.a(r+6,a)&&(n+=40);for(a=o=0;a<t;a+=1)for(r=0;r<t;r+=1)e.a(r,a)&&(o+=1);return n+Math.abs(100*o/t/t-50)/5*10}}}(),a=function(){for(var e=Array(256),t=Array(256),n=0;8>n;n+=1)e[n]=1<<n;for(n=8;256>n;n+=1)e[n]=e[n-4]^e[n-5]^e[n-6]^e[n-8];for(n=0;255>n;n+=1)t[e[n]]=n;return{g:function(e){if(1>e)throw Error("glog("+e+")");return t[e]},i:function(t){for(;0>t;)t+=255;for(;256<=t;)t-=255;return e[t]}}}(),o=function(){function e(e,r){switch(r){case n.L:return t[4*(e-1)];case n.M:return t[4*(e-1)+1];case n.Q:return t[4*(e-1)+2];case n.H:return t[4*(e-1)+3]}}var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];return{I:function(t,n){var r=e(t,n);if(void 0===r)throw Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+n);t=r.length/3,n=[];for(var a=0;a<t;a+=1)for(var o=r[3*a],c=r[3*a+1],i=r[3*a+2],l=0;l<o;l+=1){var u=i,s={};s.o=c,s.j=u,n.push(s)}return n}}}();return e}());var k=QrCreator,N=n(8);var C=Object(r.h)(Object(a.h)(e=>Object(c.l)(e,["connectionState","authQrCode"]),(e,t)=>Object(c.l)(t,["returnToAuthPhoneNumber"]))(({connectionState:e,authQrCode:t,returnToAuthPhoneNumber:n})=>{const a=Object(r.q)(null);return Object(r.n)(()=>{if(!t||"connectionStateReady"!==e)return;const n=a.current;n.innerHTML="",n.classList.remove("pre-animate"),k.render({text:"tg://login?token="+t.token,radius:.5,ecLevel:"M",fill:"#4E96D4",size:280},n)},[e,t]),h(n),r.a.createElement("div",{id:"auth-qr-form",className:"custom-scroll"},r.a.createElement("div",{className:"auth-form"},r.a.createElement("div",{className:Object(N.a)("qr-container",t&&"pre-animate"),ref:a},!t&&r.a.createElement(l.a,null)),r.a.createElement("h3",null," Log in to Telegram by QR Code"),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("span",null,"Open Telegram on your phone")),r.a.createElement("li",null,r.a.createElement("span",null,"Go to ",r.a.createElement("b",null,"Settings")," > ",r.a.createElement("b",null,"Devices")," > ",r.a.createElement("b",null,"Scan QR"))),r.a.createElement("li",null,r.a.createElement("span",null,"Point your phone at this screen to confirm login"))),r.a.createElement(E.a,{isText:!0,onClick:n},"Log in by phone number")))}))},93:function(e,t,n){"use strict";var r=n(11),a=n(29),o=n(102);t.a=()=>{const e=Object(a.a)();return Object(o.a)(()=>r.a(e),[e]),r.b}},98:function(e,t,n){"use strict";var r=n(0),a=n(50);var o=n(8),c=n(43),i=n(27),l=n(52),u=n(93),s=n(31),d=n(114);n(140);t.a=e=>{const{title:t,className:n,isOpen:f,header:m,hasCloseButton:h,noBackdrop:b,children:p,onClose:v,onCloseAnimationEnd:g,onEnter:E}=e,{shouldRender:j,transitionClassNames:O}=Object(i.a)(f,g),y=Object(r.q)(null);Object(r.n)(()=>f?Object(a.a)({onEsc:v,onEnter:E}):void 0,[f,v,E]),Object(r.n)(()=>f&&y.current?function(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const n=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!n.length)return;const r=n.findIndex(e=>e.isSameNode(document.activeElement));let a=0;r>=0&&(a=t.shiftKey?r>0?r-1:n.length-1:r<n.length-1?r+1:0),n[a].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}(y.current):void 0,[f]),Object(l.a)(([e])=>(document.body.classList.toggle("has-open-dialog",f),(f||!f&&void 0!==e)&&Object(c.b)(200),()=>{document.body.classList.remove("has-open-dialog")}),[f]);const w=Object(u.a)();if(!j)return;const k=Object(o.a)("Modal",n,O,b&&"transparent-backdrop");return r.a.createElement(d.a,null,r.a.createElement("div",{ref:y,className:k,tabIndex:-1,role:"dialog"},r.a.createElement("div",{className:"modal-container"},r.a.createElement("div",{className:"modal-backdrop",onClick:v}),r.a.createElement("div",{className:"modal-dialog"},m||(t?r.a.createElement("div",{className:"modal-header"},h&&r.a.createElement(s.a,{round:!0,color:"translucent",size:"smaller",ariaLabel:w("Close"),onClick:v},r.a.createElement("i",{className:"icon-close"})),r.a.createElement("div",{className:"modal-title"},t)):void 0),r.a.createElement("div",{className:"modal-content custom-scroll"},p)))))}}}]);
//# sourceMappingURL=4.413c0f1376b6d9916861.js.map