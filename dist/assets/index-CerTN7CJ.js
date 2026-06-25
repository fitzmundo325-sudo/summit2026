(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fc="169",Up=0,Nu=1,Ip=2,_f=1,gf=2,ii=3,Fn=0,Xe=1,ze=2,Wn=0,zr=1,qo=2,Ou=3,Fu=4,Np=5,nr=100,Op=101,Fp=102,Bp=103,zp=104,kp=200,Gp=201,Vp=202,Hp=203,Rl=204,Pl=205,Wp=206,Xp=207,qp=208,Yp=209,Kp=210,Zp=211,$p=212,Jp=213,jp=214,Ll=0,Dl=1,Ul=2,Yr=3,Il=4,Nl=5,Ol=6,Fl=7,vf=0,Qp=1,tm=2,Ci=0,em=1,nm=2,im=3,xf=4,rm=5,sm=6,om=7,Mf=300,Kr=301,Zr=302,Bl=303,zl=304,ua=306,kl=1e3,rr=1001,Gl=1002,je=1003,am=1004,ro=1005,Un=1006,Na=1007,sr=1008,ui=1009,Sf=1010,yf=1011,Ps=1012,Bc=1013,hr=1014,ai=1015,dr=1016,zc=1017,kc=1018,$r=1020,Tf=35902,Ef=1021,bf=1022,Nn=1023,wf=1024,Af=1025,kr=1026,Jr=1027,Cf=1028,Gc=1029,Rf=1030,Vc=1031,Hc=1033,Io=33776,No=33777,Oo=33778,Fo=33779,Vl=35840,Hl=35841,Wl=35842,Xl=35843,ql=36196,Yl=37492,Kl=37496,Zl=37808,$l=37809,Jl=37810,jl=37811,Ql=37812,tc=37813,ec=37814,nc=37815,ic=37816,rc=37817,sc=37818,oc=37819,ac=37820,lc=37821,Bo=36492,cc=36494,uc=36495,Pf=36283,hc=36284,fc=36285,dc=36286,lm=3200,Lf=3201,Df=0,cm=1,Ei="",fn="srgb",ki="srgb-linear",Wc="display-p3",ha="display-p3-linear",Yo="linear",ue="srgb",Ko="rec709",Zo="p3",xr=7680,Bu=519,um=512,hm=513,fm=514,Uf=515,dm=516,pm=517,mm=518,_m=519,zu=35044,ku="300 es",li=2e3,$o=2001;class os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oa=Math.PI/180,Jo=180/Math.PI;function as(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function gm(i,t){return(i%t+t)%t}function Fa(i,t,e){return(1-e)*i+e*t}function us(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,r,s,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],_=n[8],g=r[0],d=r[3],m=r[6],y=r[1],x=r[4],M=r[7],A=r[2],C=r[5],b=r[8];return s[0]=o*g+a*y+l*A,s[3]=o*d+a*x+l*C,s[6]=o*m+a*M+l*b,s[1]=c*g+u*y+h*A,s[4]=c*d+u*x+h*C,s[7]=c*m+u*M+h*b,s[2]=f*g+p*y+_*A,s[5]=f*d+p*x+_*C,s[8]=f*m+p*M+_*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,_=e*h+n*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(r*c-u*n)*g,t[2]=(a*n-r*o)*g,t[3]=f*g,t[4]=(u*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ba.makeScale(t,e)),this}rotate(t){return this.premultiply(Ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Vt;function If(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vm(){const i=Ls("canvas");return i.style.display="block",i}const Gu={};function zo(i){i in Gu||(Gu[i]=!0,console.warn(i))}function xm(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Mm(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Sm(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Vu=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hu=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hs={[ki]:{transfer:Yo,primaries:Ko,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[fn]:{transfer:ue,primaries:Ko,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ha]:{transfer:Yo,primaries:Zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Hu),fromReference:i=>i.applyMatrix3(Vu)},[Wc]:{transfer:ue,primaries:Zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Hu),fromReference:i=>i.applyMatrix3(Vu).convertLinearToSRGB()}},ym=new Set([ki,ha]),Qt={enabled:!0,_workingColorSpace:ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ym.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=hs[t].toReference,r=hs[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return hs[i].primaries},getTransfer:function(i){return i===Ei?Yo:hs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(hs[t].luminanceCoefficients)}};function Gr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function za(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mr;class Tm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Mr===void 0&&(Mr=Ls("canvas")),Mr.width=t.width,Mr.height=t.height;const n=Mr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Mr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ls("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gr(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gr(e[n]/255)*255):e[n]=Gr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Em=0;class Nf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ka(r[o].image)):s.push(ka(r[o]))}else s=ka(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bm=0;class Ve extends os{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=rr,r=rr,s=Un,o=sr,a=Nn,l=ui,c=Ve.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=as(),this.name="",this.source=new Nf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kl:t.x=t.x-Math.floor(t.x);break;case rr:t.x=t.x<0?0:1;break;case Gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kl:t.y=t.y-Math.floor(t.y);break;case rr:t.y=t.y<0?0:1;break;case Gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Mf;Ve.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,r=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],g=l[2],d=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+d)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(p+1)/2,A=(m+1)/2,C=(u+f)/4,b=(h+g)/4,P=(_+d)/4;return x>M&&x>A?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=C/n,s=b/n):M>A?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=C/r,s=P/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=b/s,r=P/s),this.set(n,r,s,e),this}let y=Math.sqrt((d-_)*(d-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(d-_)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wm extends os{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ve(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends wm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Of extends Ve{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Am extends Ve{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ys{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==f||c!==p||u!==_){let d=1-a;const m=l*f+c*p+u*_+h*g,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const A=Math.sqrt(x),C=Math.atan2(A,m*y);d=Math.sin(d*C)/A,a=Math.sin(a*C)/A}const M=a*y;if(l=l*d+f*M,c=c*d+p*M,u=u*d+_*M,h=h*d+g*M,d===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return t[e]=a*_+u*h+l*p-c*f,t[e+1]=l*_+u*f+c*h-a*p,t[e+2]=c*_+u*p+a*f-l*h,t[e+3]=u*_-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ga.copy(this).projectOnVector(t),this.sub(Ga)}reflect(t){return this.sub(Ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new L,Wu=new Ys;class Ks{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),so.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(t.matrixWorld),this.union(so)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),oo.subVectors(this.max,fs),Sr.subVectors(t.a,fs),yr.subVectors(t.b,fs),Tr.subVectors(t.c,fs),vi.subVectors(yr,Sr),xi.subVectors(Tr,yr),Xi.subVectors(Sr,Tr);let e=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Xi.z,Xi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Xi.z,0,-Xi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Xi.y,Xi.x,0];return!Va(e,Sr,yr,Tr,oo)||(e=[1,0,0,0,1,0,0,0,1],!Va(e,Sr,yr,Tr,oo))?!1:(ao.crossVectors(vi,xi),e=[ao.x,ao.y,ao.z],Va(e,Sr,yr,Tr,oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const jn=[new L,new L,new L,new L,new L,new L,new L,new L],Pn=new L,so=new Ks,Sr=new L,yr=new L,Tr=new L,vi=new L,xi=new L,Xi=new L,fs=new L,oo=new L,ao=new L,qi=new L;function Va(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){qi.fromArray(i,s);const a=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),u=n.dot(qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Cm=new Ks,ds=new L,Ha=new L;class Zs{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Cm.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);const e=ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ds,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(Ha)),this.expandByPoint(ds.copy(t.center).sub(Ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new L,Wa=new L,lo=new L,Mi=new L,Xa=new L,co=new L,qa=new L;class Xc{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Wa.copy(t).add(e).multiplyScalar(.5),lo.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(Wa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(lo),a=Mi.dot(this.direction),l=-Mi.dot(lo),c=Mi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Wa).addScaledVector(lo,f),p}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),r=Qn.dot(Qn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,r,s){Xa.subVectors(e,t),co.subVectors(n,t),qa.crossVectors(Xa,co);let o=this.direction.dot(qa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,t);const l=a*this.direction.dot(co.crossVectors(Mi,co));if(l<0)return null;const c=a*this.direction.dot(Xa.cross(Mi));if(c<0||l+c>o)return null;const u=-a*Mi.dot(qa);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,r,s,o,a,l,c,u,h,f,p,_,g,d){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,f,p,_,g,d)}set(t,e,n,r,s,o,a,l,c,u,h,f,p,_,g,d){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=p,m[7]=_,m[11]=g,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Er.setFromMatrixColumn(t,0).length(),s=1/Er.setFromMatrixColumn(t,1).length(),o=1/Er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,p=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,_=c*u,g=c*h;e[0]=f+g*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,_=c*u,g=c*h;e[0]=f-g*a,e[4]=-o*h,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=_*c-p,e[8]=f*c+g,e[1]=l*h,e[5]=g*c+f,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-f*h,e[8]=_*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+_,e[10]=f-g*h}else if(t.order==="XZY"){const f=o*l,p=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+g,e[5]=o*u,e[9]=p*h-_,e[2]=_*h-p,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rm,t,Pm)}lookAt(t,e,n){const r=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),Si.crossVectors(n,un),Si.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Si.crossVectors(n,un)),Si.normalize(),uo.crossVectors(un,Si),r[0]=Si.x,r[4]=uo.x,r[8]=un.x,r[1]=Si.y,r[5]=uo.y,r[9]=un.y,r[2]=Si.z,r[6]=uo.z,r[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],_=n[2],g=n[6],d=n[10],m=n[14],y=n[3],x=n[7],M=n[11],A=n[15],C=r[0],b=r[4],P=r[8],U=r[12],v=r[1],T=r[5],F=r[9],O=r[13],k=r[2],W=r[6],B=r[10],q=r[14],H=r[3],ot=r[7],ut=r[11],ft=r[15];return s[0]=o*C+a*v+l*k+c*H,s[4]=o*b+a*T+l*W+c*ot,s[8]=o*P+a*F+l*B+c*ut,s[12]=o*U+a*O+l*q+c*ft,s[1]=u*C+h*v+f*k+p*H,s[5]=u*b+h*T+f*W+p*ot,s[9]=u*P+h*F+f*B+p*ut,s[13]=u*U+h*O+f*q+p*ft,s[2]=_*C+g*v+d*k+m*H,s[6]=_*b+g*T+d*W+m*ot,s[10]=_*P+g*F+d*B+m*ut,s[14]=_*U+g*O+d*q+m*ft,s[3]=y*C+x*v+M*k+A*H,s[7]=y*b+x*T+M*W+A*ot,s[11]=y*P+x*F+M*B+A*ut,s[15]=y*U+x*O+M*q+A*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],_=t[3],g=t[7],d=t[11],m=t[15];return _*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*p-n*l*p)+g*(+e*l*p-e*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+d*(+e*c*h-e*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+m*(-r*a*u-e*l*h+e*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],_=t[12],g=t[13],d=t[14],m=t[15],y=h*d*c-g*f*c+g*l*p-a*d*p-h*l*m+a*f*m,x=_*f*c-u*d*c-_*l*p+o*d*p+u*l*m-o*f*m,M=u*g*c-_*h*c+_*a*p-o*g*p-u*a*m+o*h*m,A=_*h*l-u*g*l-_*a*f+o*g*f+u*a*d-o*h*d,C=e*y+n*x+r*M+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return t[0]=y*b,t[1]=(g*f*s-h*d*s-g*r*p+n*d*p+h*r*m-n*f*m)*b,t[2]=(a*d*s-g*l*s+g*r*c-n*d*c-a*r*m+n*l*m)*b,t[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*p-n*l*p)*b,t[4]=x*b,t[5]=(u*d*s-_*f*s+_*r*p-e*d*p-u*r*m+e*f*m)*b,t[6]=(_*l*s-o*d*s-_*r*c+e*d*c+o*r*m-e*l*m)*b,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*p+e*l*p)*b,t[8]=M*b,t[9]=(_*h*s-u*g*s-_*n*p+e*g*p+u*n*m-e*h*m)*b,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*m+e*a*m)*b,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*p-e*a*p)*b,t[12]=A*b,t[13]=(u*g*r-_*h*r+_*n*f-e*g*f-u*n*d+e*h*d)*b,t[14]=(_*a*r-o*g*r-_*n*l+e*g*l+o*n*d-e*a*d)*b,t[15]=(o*h*r-u*a*r+u*n*l-e*h*l-o*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,_=s*h,g=o*u,d=o*h,m=a*h,y=l*c,x=l*u,M=l*h,A=n.x,C=n.y,b=n.z;return r[0]=(1-(g+m))*A,r[1]=(p+M)*A,r[2]=(_-x)*A,r[3]=0,r[4]=(p-M)*C,r[5]=(1-(f+m))*C,r[6]=(d+y)*C,r[7]=0,r[8]=(_+x)*b,r[9]=(d-y)*b,r[10]=(1-(f+g))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Er.set(r[0],r[1],r[2]).length();const o=Er.set(r[4],r[5],r[6]).length(),a=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ln.copy(this);const c=1/s,u=1/o,h=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,e.setFromRotationMatrix(Ln),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=li){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),f=(n+r)/(n-r);let p,_;if(a===li)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===$o)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=li){const l=this.elements,c=1/(e-t),u=1/(n-r),h=1/(o-s),f=(e+t)*c,p=(n+r)*u;let _,g;if(a===li)_=(o+s)*h,g=-2*h;else if(a===$o)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Er=new L,Ln=new le,Rm=new L(0,0,0),Pm=new L(1,1,1),Si=new L,uo=new L,un=new L,Xu=new le,qu=new Ys;class qn{constructor(t=0,e=0,n=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qu.setFromEuler(this),this.setFromQuaternion(qu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Ff{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lm=0;const Yu=new L,br=new Ys,ti=new le,ho=new L,ps=new L,Dm=new L,Um=new Ys,Ku=new L(1,0,0),Zu=new L(0,1,0),$u=new L(0,0,1),Ju={type:"added"},Im={type:"removed"},wr={type:"childadded",child:null},Ya={type:"childremoved",child:null};class Ae extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new L,e=new qn,n=new Ys,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new Vt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(Ku,t)}rotateY(t){return this.rotateOnAxis(Zu,t)}rotateZ(t){return this.rotateOnAxis($u,t)}translateOnAxis(t,e){return Yu.copy(t).applyQuaternion(this.quaternion),this.position.add(Yu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ku,t)}translateY(t){return this.translateOnAxis(Zu,t)}translateZ(t){return this.translateOnAxis($u,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ho.copy(t):ho.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(ps,ho,this.up):ti.lookAt(ho,ps,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),br.setFromRotationMatrix(ti),this.quaternion.premultiply(br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ju),wr.child=t,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Im),Ya.child=t,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ju),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,Dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Um,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ae.DEFAULT_UP=new L(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new L,ei=new L,Ka=new L,ni=new L,Ar=new L,Cr=new L,ju=new L,Za=new L,$a=new L,Ja=new L,ja=new ne,Qa=new ne,tl=new ne;class In{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Dn.subVectors(t,e),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Dn.subVectors(r,e),ei.subVectors(n,e),Ka.subVectors(t,e);const o=Dn.dot(Dn),a=Dn.dot(ei),l=Dn.dot(Ka),c=ei.dot(ei),u=ei.dot(Ka),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return ja.setScalar(0),Qa.setScalar(0),tl.setScalar(0),ja.fromBufferAttribute(t,e),Qa.fromBufferAttribute(t,n),tl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ja,s.x),o.addScaledVector(Qa,s.y),o.addScaledVector(tl,s.z),o}static isFrontFacing(t,e,n,r){return Dn.subVectors(n,e),ei.subVectors(t,e),Dn.cross(ei).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Dn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return In.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return In.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return In.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return In.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return In.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Ar.subVectors(r,n),Cr.subVectors(s,n),Za.subVectors(t,n);const l=Ar.dot(Za),c=Cr.dot(Za);if(l<=0&&c<=0)return e.copy(n);$a.subVectors(t,r);const u=Ar.dot($a),h=Cr.dot($a);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ar,o);Ja.subVectors(t,s);const p=Ar.dot(Ja),_=Cr.dot(Ja);if(_>=0&&p<=_)return e.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Cr,a);const d=u*_-p*h;if(d<=0&&h-u>=0&&p-_>=0)return ju.subVectors(s,r),a=(h-u)/(h-u+(p-_)),e.copy(r).addScaledVector(ju,a);const m=1/(d+g+f);return o=g*m,a=f*m,e.copy(n).addScaledVector(Ar,o).addScaledVector(Cr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},fo={h:0,s:0,l:0};function el(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=gm(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=el(o,s,t+1/3),this.g=el(o,s,t),this.b=el(o,s,t-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(t,e=fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=Bf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}copyLinearToSRGB(t){return this.r=za(t.r),this.g=za(t.g),this.b=za(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return Qt.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ne(Be.r*255,0,255))*65536+Math.round(Ne(Be.g*255,0,255))*256+Math.round(Ne(Be.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,r=Be.g,s=Be.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=fn){Qt.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,r=Be.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(fo);const n=Fa(yi.h,fo.h,e),r=Fa(yi.s,fo.s,e),s=Fa(yi.l,fo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Ot;Ot.NAMES=Bf;let Nm=0;class pr extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=as(),this.name="",this.type="Material",this.blending=zr,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Pl,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rl&&(n.blendSrc=this.blendSrc),this.blendDst!==Pl&&(n.blendDst=this.blendDst),this.blendEquation!==nr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ii extends pr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new L,po=new it;class An{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zu,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zu&&(t.usage=this.usage),t}}class zf extends An{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class kf extends An{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends An{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Om=0;const yn=new le,nl=new Ae,Rr=new L,hn=new Ks,ms=new Ks,Pe=new L;class ve extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(If(t)?kf:zf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return nl.lookAt(t),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(hn.min,ms.min),hn.expandByPoint(Pe),Pe.addVectors(hn.max,ms.max),hn.expandByPoint(Pe)):(hn.expandByPoint(ms.min),hn.expandByPoint(ms.max))}hn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Pe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Pe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pe.fromBufferAttribute(a,c),l&&(Rr.fromBufferAttribute(t,c),Pe.add(Rr)),r=Math.max(r,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new L,l[P]=new L;const c=new L,u=new L,h=new L,f=new it,p=new it,_=new it,g=new L,d=new L;function m(P,U,v){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,U),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,U),_.fromBufferAttribute(s,v),u.sub(c),h.sub(c),p.sub(f),_.sub(f);const T=1/(p.x*_.y-_.x*p.y);isFinite(T)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(T),d.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(T),a[P].add(g),a[U].add(g),a[v].add(g),l[P].add(d),l[U].add(d),l[v].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,U=y.length;P<U;++P){const v=y[P],T=v.start,F=v.count;for(let O=T,k=T+F;O<k;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new L,M=new L,A=new L,C=new L;function b(P){A.fromBufferAttribute(r,P),C.copy(A);const U=a[P];x.copy(U),x.sub(A.multiplyScalar(A.dot(U))).normalize(),M.crossVectors(C,U);const T=M.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,T)}for(let P=0,U=y.length;P<U;++P){const v=y[P],T=v.start,F=v.count;for(let O=T,k=T+F;O<k;O+=3)b(t.getX(O+0)),b(t.getX(O+1)),b(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){const _=t.getX(f+0),g=t.getX(f+1),d=t.getX(f+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,d),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,d=l.length;g<d;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[p++]}return new An(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qu=new le,Yi=new Xc,mo=new Zs,th=new L,_o=new L,go=new L,vo=new L,il=new L,xo=new L,eh=new L,Mo=new L;class yt extends Ae{constructor(t=new ve,e=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){xo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(il.fromBufferAttribute(h,t),o?xo.addScaledVector(il,u):xo.addScaledVector(il.sub(e),u))}e.add(xo)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),Yi.copy(t.ray).recast(t.near),!(mo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(mo,th)===null||Yi.origin.distanceToSquared(th)>(t.far-t.near)**2))&&(Qu.copy(s).invert(),Yi.copy(t.ray).applyMatrix4(Qu),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const d=f[_],m=o[d.materialIndex],y=Math.max(d.start,p.start),x=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let M=y,A=x;M<A;M+=3){const C=a.getX(M),b=a.getX(M+1),P=a.getX(M+2);r=So(this,m,t,n,c,u,h,C,b,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let d=_,m=g;d<m;d+=3){const y=a.getX(d),x=a.getX(d+1),M=a.getX(d+2);r=So(this,o,t,n,c,u,h,y,x,M),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const d=f[_],m=o[d.materialIndex],y=Math.max(d.start,p.start),x=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let M=y,A=x;M<A;M+=3){const C=M,b=M+1,P=M+2;r=So(this,m,t,n,c,u,h,C,b,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let d=_,m=g;d<m;d+=3){const y=d,x=d+1,M=d+2;r=So(this,o,t,n,c,u,h,y,x,M),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function Fm(i,t,e,n,r,s,o,a){let l;if(t.side===Xe?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Fn,a),l===null)return null;Mo.copy(a),Mo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Mo);return c<e.near||c>e.far?null:{distance:c,point:Mo.clone(),object:i}}function So(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,_o),i.getVertexPosition(l,go),i.getVertexPosition(c,vo);const u=Fm(i,t,e,n,_o,go,vo,eh);if(u){const h=new L;In.getBarycoord(eh,_o,go,vo,h),r&&(u.uv=In.getInterpolatedAttribute(r,a,l,c,h,new it)),s&&(u.uv1=In.getInterpolatedAttribute(s,a,l,c,h,new it)),o&&(u.normal=In.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};In.getNormal(_o,go,vo,f.normal),u.face=f,u.barycoord=h}return u}class mr extends ve{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,r,o,2),_("x","z","y",1,-1,t,n,-e,r,o,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(h,2));function _(g,d,m,y,x,M,A,C,b,P,U){const v=M/b,T=A/P,F=M/2,O=A/2,k=C/2,W=b+1,B=P+1;let q=0,H=0;const ot=new L;for(let ut=0;ut<B;ut++){const ft=ut*T-O;for(let Ft=0;Ft<W;Ft++){const Wt=Ft*v-F;ot[g]=Wt*y,ot[d]=ft*x,ot[m]=k,c.push(ot.x,ot.y,ot.z),ot[g]=0,ot[d]=0,ot[m]=C>0?1:-1,u.push(ot.x,ot.y,ot.z),h.push(Ft/b),h.push(1-ut/P),q+=1}}for(let ut=0;ut<P;ut++)for(let ft=0;ft<b;ft++){const Ft=f+ft+W*ut,Wt=f+ft+W*(ut+1),Y=f+(ft+1)+W*(ut+1),Q=f+(ft+1)+W*ut;l.push(Ft,Wt,Q),l.push(Wt,Y,Q),H+=6}a.addGroup(p,H,U),p+=H,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function jr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=jr(i[e]);for(const r in n)t[r]=n[r]}return t}function Bm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const qc={clone:jr,merge:We};var zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends pr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zm,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jr(t.uniforms),this.uniformsGroups=Bm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vf extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new L,nh=new it,ih=new it;class $e extends Vf{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,nh,ih),e.subVectors(ih,nh)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Oa*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pr=-90,Lr=1;class Gm extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $e(Pr,Lr,t,e);r.layers=this.layers,this.add(r);const s=new $e(Pr,Lr,t,e);s.layers=this.layers,this.add(s);const o=new $e(Pr,Lr,t,e);o.layers=this.layers,this.add(o);const a=new $e(Pr,Lr,t,e);a.layers=this.layers,this.add(a);const l=new $e(Pr,Lr,t,e);l.layers=this.layers,this.add(l);const c=new $e(Pr,Lr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$o)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Hf extends Ve{constructor(t,e,n,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Kr,super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vm extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Hf(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new mr(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Wn});s.uniforms.tEquirect.value=e;const o=new yt(r,s),a=e.minFilter;return e.minFilter===sr&&(e.minFilter=Un),new Gm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const rl=new L,Hm=new L,Wm=new Vt;class Qi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=rl.subVectors(n,e).cross(Hm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(rl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wm.getNormalMatrix(t),r=this.coplanarPoint(rl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new Zs,yo=new L;class Yc{constructor(t=new Qi,e=new Qi,n=new Qi,r=new Qi,s=new Qi,o=new Qi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],_=r[9],g=r[10],d=r[11],m=r[12],y=r[13],x=r[14],M=r[15];if(n[0].setComponents(l-s,f-c,d-p,M-m).normalize(),n[1].setComponents(l+s,f+c,d+p,M+m).normalize(),n[2].setComponents(l+o,f+u,d+_,M+y).normalize(),n[3].setComponents(l-o,f-u,d-_,M-y).normalize(),n[4].setComponents(l-a,f-h,d-g,M-x).normalize(),e===li)n[5].setComponents(l+a,f+h,d+g,M+x).normalize();else if(e===$o)n[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(yo.x=r.normal.x>0?t.max.x:t.min.x,yo.y=r.normal.y>0?t.max.y:t.min.y,yo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(yo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wf(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Xm(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],g=h[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const g=h[p];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class zn extends ve{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,p=[],_=[],g=[],d=[];for(let m=0;m<u;m++){const y=m*f-o;for(let x=0;x<c;x++){const M=x*h-s;_.push(M,-y,0),g.push(0,0,1),d.push(x/a),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const x=y+c*m,M=y+c*(m+1),A=y+1+c*(m+1),C=y+1+c*m;p.push(x,M,C),p.push(M,A,C)}this.setIndex(p),this.setAttribute("position",new te(_,3)),this.setAttribute("normal",new te(g,3)),this.setAttribute("uv",new te(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.width,t.height,t.widthSegments,t.heightSegments)}}var qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ym=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,e_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,s_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,o_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,m_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,__=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,g_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",T_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,A_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,R_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,I_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,B_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,W_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,X_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,q_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Y_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ig=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,t0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,u0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,T0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:qm,alphahash_pars_fragment:Ym,alphamap_fragment:Km,alphamap_pars_fragment:Zm,alphatest_fragment:$m,alphatest_pars_fragment:Jm,aomap_fragment:jm,aomap_pars_fragment:Qm,batching_pars_vertex:t_,batching_vertex:e_,begin_vertex:n_,beginnormal_vertex:i_,bsdfs:r_,iridescence_fragment:s_,bumpmap_pars_fragment:o_,clipping_planes_fragment:a_,clipping_planes_pars_fragment:l_,clipping_planes_pars_vertex:c_,clipping_planes_vertex:u_,color_fragment:h_,color_pars_fragment:f_,color_pars_vertex:d_,color_vertex:p_,common:m_,cube_uv_reflection_fragment:__,defaultnormal_vertex:g_,displacementmap_pars_vertex:v_,displacementmap_vertex:x_,emissivemap_fragment:M_,emissivemap_pars_fragment:S_,colorspace_fragment:y_,colorspace_pars_fragment:T_,envmap_fragment:E_,envmap_common_pars_fragment:b_,envmap_pars_fragment:w_,envmap_pars_vertex:A_,envmap_physical_pars_fragment:B_,envmap_vertex:C_,fog_vertex:R_,fog_pars_vertex:P_,fog_fragment:L_,fog_pars_fragment:D_,gradientmap_pars_fragment:U_,lightmap_pars_fragment:I_,lights_lambert_fragment:N_,lights_lambert_pars_fragment:O_,lights_pars_begin:F_,lights_toon_fragment:z_,lights_toon_pars_fragment:k_,lights_phong_fragment:G_,lights_phong_pars_fragment:V_,lights_physical_fragment:H_,lights_physical_pars_fragment:W_,lights_fragment_begin:X_,lights_fragment_maps:q_,lights_fragment_end:Y_,logdepthbuf_fragment:K_,logdepthbuf_pars_fragment:Z_,logdepthbuf_pars_vertex:$_,logdepthbuf_vertex:J_,map_fragment:j_,map_pars_fragment:Q_,map_particle_fragment:tg,map_particle_pars_fragment:eg,metalnessmap_fragment:ng,metalnessmap_pars_fragment:ig,morphinstance_vertex:rg,morphcolor_vertex:sg,morphnormal_vertex:og,morphtarget_pars_vertex:ag,morphtarget_vertex:lg,normal_fragment_begin:cg,normal_fragment_maps:ug,normal_pars_fragment:hg,normal_pars_vertex:fg,normal_vertex:dg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:gg,iridescence_pars_fragment:vg,opaque_fragment:xg,packing:Mg,premultiplied_alpha_fragment:Sg,project_vertex:yg,dithering_fragment:Tg,dithering_pars_fragment:Eg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:Cg,shadowmap_vertex:Rg,shadowmask_pars_fragment:Pg,skinbase_vertex:Lg,skinning_pars_vertex:Dg,skinning_vertex:Ug,skinnormal_vertex:Ig,specularmap_fragment:Ng,specularmap_pars_fragment:Og,tonemapping_fragment:Fg,tonemapping_pars_fragment:Bg,transmission_fragment:zg,transmission_pars_fragment:kg,uv_pars_fragment:Gg,uv_pars_vertex:Vg,uv_vertex:Hg,worldpos_vertex:Wg,background_vert:Xg,background_frag:qg,backgroundCube_vert:Yg,backgroundCube_frag:Kg,cube_vert:Zg,cube_frag:$g,depth_vert:Jg,depth_frag:jg,distanceRGBA_vert:Qg,distanceRGBA_frag:t0,equirect_vert:e0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:r0,meshbasic_vert:s0,meshbasic_frag:o0,meshlambert_vert:a0,meshlambert_frag:l0,meshmatcap_vert:c0,meshmatcap_frag:u0,meshnormal_vert:h0,meshnormal_frag:f0,meshphong_vert:d0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:_0,meshtoon_vert:g0,meshtoon_frag:v0,points_vert:x0,points_frag:M0,shadow_vert:S0,shadow_frag:y0,sprite_vert:T0,sprite_frag:E0},ct={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Gn={basic:{uniforms:We([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:We([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:We([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:We([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:We([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:We([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:We([ct.points,ct.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:We([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:We([ct.common,ct.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:We([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:We([ct.sprite,ct.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:We([ct.common,ct.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:We([ct.lights,ct.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Gn.physical={uniforms:We([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const To={r:0,b:0,g:0},Zi=new qn,b0=new le;function w0(i,t,e,n,r,s,o){const a=new Ot(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function g(y){let x=!1;const M=_(y);M===null?m(a,l):M&&M.isColor&&(m(M,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(y,x){const M=_(x);M&&(M.isCubeTexture||M.mapping===ua)?(u===void 0&&(u=new yt(new mr(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:jr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Zi.copy(x.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(b0.makeRotationFromEuler(Zi)),u.material.toneMapped=Qt.getTransfer(M.colorSpace)!==ue,(h!==M||f!==M.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new yt(new zn(2,2),new sn({name:"BackgroundMaterial",uniforms:jr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(M.colorSpace)!==ue,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(To,Gf(i)),n.buffers.color.setClear(To.r,To.g,To.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:g,addToRenderList:d}}function A0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(v,T,F,O,k){let W=!1;const B=h(O,F,T);s!==B&&(s=B,c(s.object)),W=p(v,O,F,k),W&&_(v,O,F,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(v,T,F,O),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,T,F){const O=F.wireframe===!0;let k=n[v.id];k===void 0&&(k={},n[v.id]=k);let W=k[T.id];W===void 0&&(W={},k[T.id]=W);let B=W[O];return B===void 0&&(B=f(l()),W[O]=B),B}function f(v){const T=[],F=[],O=[];for(let k=0;k<e;k++)T[k]=0,F[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:F,attributeDivisors:O,object:v,attributes:{},index:null}}function p(v,T,F,O){const k=s.attributes,W=T.attributes;let B=0;const q=F.getAttributes();for(const H in q)if(q[H].location>=0){const ut=k[H];let ft=W[H];if(ft===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ft=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ft=v.instanceColor)),ut===void 0||ut.attribute!==ft||ft&&ut.data!==ft.data)return!0;B++}return s.attributesNum!==B||s.index!==O}function _(v,T,F,O){const k={},W=T.attributes;let B=0;const q=F.getAttributes();for(const H in q)if(q[H].location>=0){let ut=W[H];ut===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor));const ft={};ft.attribute=ut,ut&&ut.data&&(ft.data=ut.data),k[H]=ft,B++}s.attributes=k,s.attributesNum=B,s.index=O}function g(){const v=s.newAttributes;for(let T=0,F=v.length;T<F;T++)v[T]=0}function d(v){m(v,0)}function m(v,T){const F=s.newAttributes,O=s.enabledAttributes,k=s.attributeDivisors;F[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),k[v]!==T&&(i.vertexAttribDivisor(v,T),k[v]=T)}function y(){const v=s.newAttributes,T=s.enabledAttributes;for(let F=0,O=T.length;F<O;F++)T[F]!==v[F]&&(i.disableVertexAttribArray(F),T[F]=0)}function x(v,T,F,O,k,W,B){B===!0?i.vertexAttribIPointer(v,T,F,k,W):i.vertexAttribPointer(v,T,F,O,k,W)}function M(v,T,F,O){g();const k=O.attributes,W=F.getAttributes(),B=T.defaultAttributeValues;for(const q in W){const H=W[q];if(H.location>=0){let ot=k[q];if(ot===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),ot!==void 0){const ut=ot.normalized,ft=ot.itemSize,Ft=t.get(ot);if(Ft===void 0)continue;const Wt=Ft.buffer,Y=Ft.type,Q=Ft.bytesPerElement,Mt=Y===i.INT||Y===i.UNSIGNED_INT||ot.gpuType===Bc;if(ot.isInterleavedBufferAttribute){const ht=ot.data,Lt=ht.stride,Pt=ot.offset;if(ht.isInstancedInterleavedBuffer){for(let zt=0;zt<H.locationSize;zt++)m(H.location+zt,ht.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let zt=0;zt<H.locationSize;zt++)d(H.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let zt=0;zt<H.locationSize;zt++)x(H.location+zt,ft/H.locationSize,Y,ut,Lt*Q,(Pt+ft/H.locationSize*zt)*Q,Mt)}else{if(ot.isInstancedBufferAttribute){for(let ht=0;ht<H.locationSize;ht++)m(H.location+ht,ot.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ht=0;ht<H.locationSize;ht++)d(H.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let ht=0;ht<H.locationSize;ht++)x(H.location+ht,ft/H.locationSize,Y,ut,ft*Q,ft/H.locationSize*ht*Q,Mt)}}else if(B!==void 0){const ut=B[q];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(H.location,ut);break;case 3:i.vertexAttrib3fv(H.location,ut);break;case 4:i.vertexAttrib4fv(H.location,ut);break;default:i.vertexAttrib1fv(H.location,ut)}}}}y()}function A(){P();for(const v in n){const T=n[v];for(const F in T){const O=T[F];for(const k in O)u(O[k].object),delete O[k];delete T[F]}delete n[v]}}function C(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const F in T){const O=T[F];for(const k in O)u(O[k].object),delete O[k];delete T[F]}delete n[v.id]}function b(v){for(const T in n){const F=n[T];if(F[v.id]===void 0)continue;const O=F[v.id];for(const k in O)u(O[k].object),delete O[k];delete F[v.id]}}function P(){U(),o=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:d,disableUnusedAttributes:y}}function C0(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];e.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];for(let g=0;g<f.length;g++)e.update(_,n,f[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function R0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Nn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ui&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ai&&!P)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const b=t.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:A,maxSamples:C}}function P0(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Qi,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,g=h.clipIntersection,d=h.clipShadows,m=i.get(h);if(!r||_===null||_.length===0||s&&!d)s?u(null):c();else{const y=s?0:n,x=y*4;let M=m.clippingState||null;l.value=M,M=u(_,f,x,p);for(let A=0;A!==x;++A)M[A]=e[A];m.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,_){const g=h!==null?h.length:0;let d=null;if(g!==0){if(d=l.value,_!==!0||d===null){const m=p+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<m)&&(d=new Float32Array(m));for(let x=0,M=p;x!==g;++x,M+=4)o.copy(h[x]).applyMatrix4(y,a),o.normal.toArray(d,M),d[M+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,d}}function L0(i){let t=new WeakMap;function e(o,a){return a===Bl?o.mapping=Kr:a===zl&&(o.mapping=Zr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bl||a===zl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vm(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Xf extends Vf{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ir=4,rh=[.125,.215,.35,.446,.526,.582],ir=20,sl=new Xf,sh=new Ot;let ol=null,al=0,ll=0,cl=!1;const tr=(1+Math.sqrt(5))/2,Dr=1/tr,oh=[new L(-tr,Dr,0),new L(tr,Dr,0),new L(-Dr,0,tr),new L(Dr,0,tr),new L(0,tr,-Dr),new L(0,tr,Dr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class ah{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ol=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ol,al,ll),this._renderer.xr.enabled=cl,t.scissorTest=!1,Eo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Kr||t.mapping===Zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ol=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:dr,format:Nn,colorSpace:ki,depthBuffer:!1},r=lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D0(s)),this._blurMaterial=U0(s,t,e)}return r}_compileMaterial(t){const e=new yt(this._lodPlanes[0],t);this._renderer.compile(e,sl)}_sceneToCubeUV(t,e,n,r){const a=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(sh),u.toneMapping=Ci,u.autoClear=!1;const p=new Ii({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),_=new yt(new mr,p);let g=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,g=!0):(p.color.copy(sh),g=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Eo(r,y*x,m>2?x:0,x,x),u.setRenderTarget(r),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Kr||t.mapping===Zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Eo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,sl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=oh[(r-s-1)%oh.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new yt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ir-1),g=s/_,d=isFinite(s)?1+Math.floor(u*g):ir;d>ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ir}`);const m=[];let y=0;for(let b=0;b<ir;++b){const P=b/g,U=Math.exp(-P*P/2);m.push(U),b===0?y+=U:b<d&&(y+=2*U)}for(let b=0;b<m.length;b++)m[b]=m[b]/y;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const M=this._sizeLods[r],A=3*M*(r>x-Ir?r-x+Ir:0),C=4*(this._cubeSize-M);Eo(e,A,C,3*M,2*M),l.setRenderTarget(e),l.render(h,sl)}}function D0(i){const t=[],e=[],n=[];let r=i;const s=i-Ir+1+rh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Ir?l=rh[o-i+Ir-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,g=3,d=2,m=1,y=new Float32Array(g*_*p),x=new Float32Array(d*_*p),M=new Float32Array(m*_*p);for(let C=0;C<p;C++){const b=C%3*2/3-1,P=C>2?0:-1,U=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];y.set(U,g*_*C),x.set(f,d*_*C);const v=[C,C,C,C,C,C];M.set(v,m*_*C)}const A=new ve;A.setAttribute("position",new An(y,g)),A.setAttribute("uv",new An(x,d)),A.setAttribute("faceIndex",new An(M,m)),t.push(A),r>Ir&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lh(i,t,e){const n=new hi(i,t,e);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function U0(i,t,e){const n=new Float32Array(ir),r=new L(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ch(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function uh(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bl||l===zl,u=l===Kr||l===Zr;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ah(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new ah(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function N0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&zo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function O0(i,t,e,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let d=0,m=g.length;d<m;d++)t.remove(g[d])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)t.update(f[_],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const g=p[_];for(let d=0,m=g.length;d<m;d++)t.update(g[d],i.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const y=p.array;g=p.version;for(let x=0,M=y.length;x<M;x+=3){const A=y[x+0],C=y[x+1],b=y[x+2];f.push(A,C,C,b,b,A)}}else if(_!==void 0){const y=_.array;g=_.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const A=x+0,C=x+1,b=x+2;f.push(A,C,C,b,b,A)}}else return;const d=new(If(f)?kf:zf)(f,1);d.version=g;const m=s.get(h);m&&t.remove(m),s.set(h,d)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function F0(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),e.update(p,n,1)}function c(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,s,f*o,_),e.update(p,n,_))}function u(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,_);let d=0;for(let m=0;m<_;m++)d+=p[m];e.update(d,n,1)}function h(f,p,_,g){if(_===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],g[m]);else{d.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,g,0,_);let m=0;for(let y=0;y<_;y++)m+=p[y];for(let y=0;y<g.length;y++)e.update(m,n,g[y])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function B0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function z0(i,t,e){const n=new WeakMap,r=new ne;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var p=v;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),d===!0&&(M=3);let A=a.attributes.position.count*M,C=1;A>t.maxTextureSize&&(C=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*C*4*h),P=new Of(b,A,C,h);P.type=ai,P.needsUpdate=!0;const U=M*4;for(let T=0;T<h;T++){const F=m[T],O=y[T],k=x[T],W=A*C*4*T;for(let B=0;B<F.count;B++){const q=B*U;_===!0&&(r.fromBufferAttribute(F,B),b[W+q+0]=r.x,b[W+q+1]=r.y,b[W+q+2]=r.z,b[W+q+3]=0),g===!0&&(r.fromBufferAttribute(O,B),b[W+q+4]=r.x,b[W+q+5]=r.y,b[W+q+6]=r.z,b[W+q+7]=0),d===!0&&(r.fromBufferAttribute(k,B),b[W+q+8]=r.x,b[W+q+9]=r.y,b[W+q+10]=r.z,b[W+q+11]=k.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new it(A,C)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let d=0;d<c.length;d++)_+=c[d];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function k0(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class qf extends Ve{constructor(t,e,n,r,s,o,a,l,c,u=kr){if(u!==kr&&u!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===kr&&(n=hr),n===void 0&&u===Jr&&(n=$r),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:je,this.minFilter=l!==void 0?l:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Yf=new Ve,hh=new qf(1,1),Kf=new Of,Zf=new Am,$f=new Hf,fh=[],dh=[],ph=new Float32Array(16),mh=new Float32Array(9),_h=new Float32Array(4);function ls(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=fh[r];if(s===void 0&&(s=new Float32Array(r),fh[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fa(i,t){let e=dh[t];e===void 0&&(e=new Int32Array(t),dh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function G0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function V0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function W0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function X0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;_h.set(n),i.uniformMatrix2fv(this.addr,!1,_h),Re(e,n)}}function q0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;mh.set(n),i.uniformMatrix3fv(this.addr,!1,mh),Re(e,n)}}function Y0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;ph.set(n),i.uniformMatrix4fv(this.addr,!1,ph),Re(e,n)}}function K0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function $0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function J0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function j0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function tv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function ev(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function nv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(hh.compareFunction=Uf,s=hh):s=Yf,e.setTexture2D(t||s,r)}function iv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Zf,r)}function rv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||$f,r)}function sv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Kf,r)}function ov(i){switch(i){case 5126:return G0;case 35664:return V0;case 35665:return H0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return K0;case 35667:case 35671:return Z0;case 35668:case 35672:return $0;case 35669:case 35673:return J0;case 5125:return j0;case 36294:return Q0;case 36295:return tv;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return sv}}function av(i,t){i.uniform1fv(this.addr,t)}function lv(i,t){const e=ls(t,this.size,2);i.uniform2fv(this.addr,e)}function cv(i,t){const e=ls(t,this.size,3);i.uniform3fv(this.addr,e)}function uv(i,t){const e=ls(t,this.size,4);i.uniform4fv(this.addr,e)}function hv(i,t){const e=ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fv(i,t){const e=ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dv(i,t){const e=ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pv(i,t){i.uniform1iv(this.addr,t)}function mv(i,t){i.uniform2iv(this.addr,t)}function _v(i,t){i.uniform3iv(this.addr,t)}function gv(i,t){i.uniform4iv(this.addr,t)}function vv(i,t){i.uniform1uiv(this.addr,t)}function xv(i,t){i.uniform2uiv(this.addr,t)}function Mv(i,t){i.uniform3uiv(this.addr,t)}function Sv(i,t){i.uniform4uiv(this.addr,t)}function yv(i,t,e){const n=this.cache,r=t.length,s=fa(e,r);Ce(n,s)||(i.uniform1iv(this.addr,s),Re(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Yf,s[o])}function Tv(i,t,e){const n=this.cache,r=t.length,s=fa(e,r);Ce(n,s)||(i.uniform1iv(this.addr,s),Re(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Zf,s[o])}function Ev(i,t,e){const n=this.cache,r=t.length,s=fa(e,r);Ce(n,s)||(i.uniform1iv(this.addr,s),Re(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||$f,s[o])}function bv(i,t,e){const n=this.cache,r=t.length,s=fa(e,r);Ce(n,s)||(i.uniform1iv(this.addr,s),Re(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Kf,s[o])}function wv(i){switch(i){case 5126:return av;case 35664:return lv;case 35665:return cv;case 35666:return uv;case 35674:return hv;case 35675:return fv;case 35676:return dv;case 5124:case 35670:return pv;case 35667:case 35671:return mv;case 35668:case 35672:return _v;case 35669:case 35673:return gv;case 5125:return vv;case 36294:return xv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return bv}}class Av{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ov(e.type)}}class Cv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wv(e.type)}}class Rv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const ul=/(\w+)(\])?(\[|\.)?/g;function gh(i,t){i.seq.push(t),i.map[t.id]=t}function Pv(i,t,e){const n=i.name,r=n.length;for(ul.lastIndex=0;;){const s=ul.exec(n),o=ul.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){gh(e,c===void 0?new Av(a,i,t):new Cv(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Rv(a),gh(e,h)),e=h}}}class ko{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Pv(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function vh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Lv=37297;let Dv=0;function Uv(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Iv(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===Zo&&e===Ko?n="LinearDisplayP3ToLinearSRGB":t===Ko&&e===Zo&&(n="LinearSRGBToLinearDisplayP3"),i){case ki:case ha:return[n,"LinearTransferOETF"];case fn:case Wc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Uv(i.getShaderSource(t),o)}else return r}function Nv(i,t){const e=Iv(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ov(i,t){let e;switch(t){case em:e="Linear";break;case nm:e="Reinhard";break;case im:e="Cineon";break;case xf:e="ACESFilmic";break;case sm:e="AgX";break;case om:e="Neutral";break;case rm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const bo=new L;function Fv(){Qt.getLuminanceCoefficients(bo);const i=bo.x.toFixed(4),t=bo.y.toFixed(4),e=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function zv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function xs(i){return i!==""}function Mh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(i){return i.replace(Gv,Hv)}const Vv=new Map;function Hv(i,t){let e=Gt[t];if(e===void 0){const n=Vv.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pc(e)}const Wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(i){return i.replace(Wv,Xv)}function Xv(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Th(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_f?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function Yv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Kr:case Zr:t="ENVMAP_TYPE_CUBE";break;case ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zr:t="ENVMAP_MODE_REFRACTION";break}return t}function Zv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vf:t="ENVMAP_BLENDING_MULTIPLY";break;case Qp:t="ENVMAP_BLENDING_MIX";break;case tm:t="ENVMAP_BLENDING_ADD";break}return t}function $v(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Jv(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=qv(e),c=Yv(e),u=Kv(e),h=Zv(e),f=$v(e),p=Bv(e),_=zv(s),g=r.createProgram();let d,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xs).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xs).join(`
`),m.length>0&&(m+=`
`)):(d=[Th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),m=[Th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Ci?Ov("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Nv("linearToOutputTexel",e.outputColorSpace),Fv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xs).join(`
`)),o=pc(o),o=Mh(o,e),o=Sh(o,e),a=pc(a),a=Mh(a,e),a=Sh(a,e),o=yh(o),a=yh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",e.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+d+o,M=y+m+a,A=vh(r,r.VERTEX_SHADER,x),C=vh(r,r.FRAGMENT_SHADER,M);r.attachShader(g,A),r.attachShader(g,C),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function b(T){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(g).trim(),O=r.getShaderInfoLog(A).trim(),k=r.getShaderInfoLog(C).trim();let W=!0,B=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,A,C);else{const q=xh(r,A,"vertex"),H=xh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+q+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||k==="")&&(B=!1);B&&(T.diagnostics={runnable:W,programLog:F,vertexShader:{log:O,prefix:d},fragmentShader:{log:k,prefix:m}})}r.deleteShader(A),r.deleteShader(C),P=new ko(r,g),U=kv(r,g)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let U;this.getAttributes=function(){return U===void 0&&b(this),U};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(g,Lv)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=C,this}let jv=0;class Qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tx(t),e.set(t,n)),n}}class tx{constructor(t){this.id=jv++,this.code=t,this.usedTimes=0}}function ex(i,t,e,n,r,s,o){const a=new Ff,l=new Qv,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,T,F,O,k){const W=O.fog,B=k.geometry,q=v.isMeshStandardMaterial?O.environment:null,H=(v.isMeshStandardMaterial?e:t).get(v.envMap||q),ot=H&&H.mapping===ua?H.image.height:null,ut=g[v.type];v.precision!==null&&(_=r.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const ft=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ft=ft!==void 0?ft.length:0;let Wt=0;B.morphAttributes.position!==void 0&&(Wt=1),B.morphAttributes.normal!==void 0&&(Wt=2),B.morphAttributes.color!==void 0&&(Wt=3);let Y,Q,Mt,ht;if(ut){const Ke=Gn[ut];Y=Ke.vertexShader,Q=Ke.fragmentShader}else Y=v.vertexShader,Q=v.fragmentShader,l.update(v),Mt=l.getVertexShaderID(v),ht=l.getFragmentShaderID(v);const Lt=i.getRenderTarget(),Pt=k.isInstancedMesh===!0,zt=k.isBatchedMesh===!0,Ht=!!v.map,$=!!v.matcap,R=!!H,st=!!v.aoMap,rt=!!v.lightMap,tt=!!v.bumpMap,at=!!v.normalMap,At=!!v.displacementMap,mt=!!v.emissiveMap,w=!!v.metalnessMap,S=!!v.roughnessMap,z=v.anisotropy>0,K=v.clearcoat>0,J=v.dispersion>0,Z=v.iridescence>0,Et=v.sheen>0,lt=v.transmission>0,vt=z&&!!v.anisotropyMap,qt=K&&!!v.clearcoatMap,et=K&&!!v.clearcoatNormalMap,xt=K&&!!v.clearcoatRoughnessMap,It=Z&&!!v.iridescenceMap,Nt=Z&&!!v.iridescenceThicknessMap,St=Et&&!!v.sheenColorMap,Yt=Et&&!!v.sheenRoughnessMap,kt=!!v.specularMap,ae=!!v.specularColorMap,D=!!v.specularIntensityMap,_t=lt&&!!v.transmissionMap,X=lt&&!!v.thicknessMap,j=!!v.gradientMap,dt=!!v.alphaMap,gt=v.alphaTest>0,Kt=!!v.alphaHash,Ee=!!v.extensions;let Ye=Ci;v.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(Ye=i.toneMapping);const Zt={shaderID:ut,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:Q,defines:v.defines,customVertexShaderID:Mt,customFragmentShaderID:ht,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:zt,batchingColor:zt&&k._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&k.instanceColor!==null,instancingMorph:Pt&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Lt===null?i.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:ki,alphaToCoverage:!!v.alphaToCoverage,map:Ht,matcap:$,envMap:R,envMapMode:R&&H.mapping,envMapCubeUVHeight:ot,aoMap:st,lightMap:rt,bumpMap:tt,normalMap:at,displacementMap:p&&At,emissiveMap:mt,normalMapObjectSpace:at&&v.normalMapType===cm,normalMapTangentSpace:at&&v.normalMapType===Df,metalnessMap:w,roughnessMap:S,anisotropy:z,anisotropyMap:vt,clearcoat:K,clearcoatMap:qt,clearcoatNormalMap:et,clearcoatRoughnessMap:xt,dispersion:J,iridescence:Z,iridescenceMap:It,iridescenceThicknessMap:Nt,sheen:Et,sheenColorMap:St,sheenRoughnessMap:Yt,specularMap:kt,specularColorMap:ae,specularIntensityMap:D,transmission:lt,transmissionMap:_t,thicknessMap:X,gradientMap:j,opaque:v.transparent===!1&&v.blending===zr&&v.alphaToCoverage===!1,alphaMap:dt,alphaTest:gt,alphaHash:Kt,combine:v.combine,mapUv:Ht&&d(v.map.channel),aoMapUv:st&&d(v.aoMap.channel),lightMapUv:rt&&d(v.lightMap.channel),bumpMapUv:tt&&d(v.bumpMap.channel),normalMapUv:at&&d(v.normalMap.channel),displacementMapUv:At&&d(v.displacementMap.channel),emissiveMapUv:mt&&d(v.emissiveMap.channel),metalnessMapUv:w&&d(v.metalnessMap.channel),roughnessMapUv:S&&d(v.roughnessMap.channel),anisotropyMapUv:vt&&d(v.anisotropyMap.channel),clearcoatMapUv:qt&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&d(v.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:St&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&d(v.sheenRoughnessMap.channel),specularMapUv:kt&&d(v.specularMap.channel),specularColorMapUv:ae&&d(v.specularColorMap.channel),specularIntensityMapUv:D&&d(v.specularIntensityMap.channel),transmissionMapUv:_t&&d(v.transmissionMap.channel),thicknessMapUv:X&&d(v.thicknessMap.channel),alphaMapUv:dt&&d(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(at||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(Ht||dt),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Wt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ht&&v.map.isVideoTexture===!0&&Qt.getTransfer(v.map.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ze,flipSided:v.side===Xe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ee&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&v.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function y(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)T.push(F),T.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(x(T,v),M(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),v.push(a.mask)}function A(v){const T=g[v.type];let F;if(T){const O=Gn[T];F=qc.clone(O.uniforms)}else F=v.uniforms;return F}function C(v,T){let F;for(let O=0,k=u.length;O<k;O++){const W=u[O];if(W.cacheKey===T){F=W,++F.usedTimes;break}}return F===void 0&&(F=new Jv(i,T,v,s),u.push(F)),F}function b(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function P(v){l.remove(v)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:A,acquireProgram:C,releaseProgram:b,releaseShaderCache:P,programs:u,dispose:U}}function nx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function ix(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Eh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,f,p,_,g,d){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:d},i[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=d),t++,m}function a(h,f,p,_,g,d){const m=o(h,f,p,_,g,d);p.transmission>0?n.push(m):p.transparent===!0?r.push(m):e.push(m)}function l(h,f,p,_,g,d){const m=o(h,f,p,_,g,d);p.transmission>0?n.unshift(m):p.transparent===!0?r.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||ix),n.length>1&&n.sort(f||Eh),r.length>1&&r.sort(f||Eh)}function u(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function rx(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new bh,i.set(n,[o])):r>=s.length?(o=new bh,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function sx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ot};break;case"SpotLight":e={position:new L,direction:new L,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function ox(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ax=0;function lx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cx(i){const t=new sx,e=ox(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const r=new L,s=new le,o=new le;function a(c){let u=0,h=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let p=0,_=0,g=0,d=0,m=0,y=0,x=0,M=0,A=0,C=0,b=0;c.sort(lx);for(let U=0,v=c.length;U<v;U++){const T=c[U],F=T.color,O=T.intensity,k=T.distance,W=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=F.r*O,h+=F.g*O,f+=F.b*O;else if(T.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(T.sh.coefficients[B],O);b++}else if(T.isDirectionalLight){const B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const q=T.shadow,H=e.get(T);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=T.shadow.matrix,y++}n.directional[p]=B,p++}else if(T.isSpotLight){const B=t.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(F).multiplyScalar(O),B.distance=k,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,n.spot[g]=B;const q=T.shadow;if(T.map&&(n.spotLightMap[A]=T.map,A++,q.updateMatrices(T),T.castShadow&&C++),n.spotLightMatrix[g]=q.matrix,T.castShadow){const H=e.get(T);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=W,M++}g++}else if(T.isRectAreaLight){const B=t.get(T);B.color.copy(F).multiplyScalar(O),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),n.rectArea[d]=B,d++}else if(T.isPointLight){const B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){const q=T.shadow,H=e.get(T);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=T.shadow.matrix,x++}n.point[_]=B,_++}else if(T.isHemisphereLight){const B=t.get(T);B.skyColor.copy(T.color).multiplyScalar(O),B.groundColor.copy(T.groundColor).multiplyScalar(O),n.hemi[m]=B,m++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==d||P.hemiLength!==m||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==M||P.numSpotMaps!==A||P.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=d,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=b,P.directionalLength=p,P.pointLength=_,P.spotLength=g,P.rectAreaLength=d,P.hemiLength=m,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=M,P.numSpotMaps=A,P.numLightProbes=b,n.version=ax++)}function l(c,u){let h=0,f=0,p=0,_=0,g=0;const d=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(d),h++}else if(x.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(d),p++}else if(x.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),o.identity(),s.copy(x.matrixWorld),s.premultiply(d),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),f++}else if(x.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(d),g++}}}return{setup:a,setupView:l,state:n}}function wh(i){const t=new cx(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ux(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new wh(i),t.set(r,[a])):s>=o.length?(a=new wh(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Jf extends pr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hx extends pr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function px(i,t,e){let n=new Yc;const r=new it,s=new it,o=new ne,a=new Jf({depthPacking:Lf}),l=new hx,c={},u=e.maxTextureSize,h={[Fn]:Xe,[Xe]:Fn,[ze]:ze},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:fx,fragmentShader:dx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new ve;_.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new yt(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_f;let m=this.type;this.render=function(C,b,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;const U=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Wn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=m!==ii&&this.type===ii,k=m===ii&&this.type!==ii;for(let W=0,B=C.length;W<B;W++){const q=C[W],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ot=H.getFrameExtents();if(r.multiply(ot),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ot.x),r.x=s.x*ot.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ot.y),r.y=s.y*ot.y,H.mapSize.y=s.y)),H.map===null||O===!0||k===!0){const ft=this.type!==ii?{minFilter:je,magFilter:je}:{};H.map!==null&&H.map.dispose(),H.map=new hi(r.x,r.y,ft),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ut=H.getViewportCount();for(let ft=0;ft<ut;ft++){const Ft=H.getViewport(ft);o.set(s.x*Ft.x,s.y*Ft.y,s.x*Ft.z,s.y*Ft.w),F.viewport(o),H.updateMatrices(q,ft),n=H.getFrustum(),M(b,P,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===ii&&y(H,P),H.needsUpdate=!1}m=this.type,d.needsUpdate=!1,i.setRenderTarget(U,v,T)};function y(C,b){const P=t.update(g);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new hi(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(b,null,P,f,g,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(b,null,P,p,g,null)}function x(C,b,P,U){let v=null;const T=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)v=T;else if(v=P.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=v.uuid,O=b.uuid;let k=c[F];k===void 0&&(k={},c[F]=k);let W=k[O];W===void 0&&(W=v.clone(),k[O]=W,b.addEventListener("dispose",A)),v=W}if(v.visible=b.visible,v.wireframe=b.wireframe,U===ii?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=i.properties.get(v);F.light=P}return v}function M(C,b,P,U,v){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===ii)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const O=t.update(C),k=C.material;if(Array.isArray(k)){const W=O.groups;for(let B=0,q=W.length;B<q;B++){const H=W[B],ot=k[H.materialIndex];if(ot&&ot.visible){const ut=x(C,ot,U,v);C.onBeforeShadow(i,C,b,P,O,ut,H),i.renderBufferDirect(P,null,O,ut,C,H),C.onAfterShadow(i,C,b,P,O,ut,H)}}}else if(k.visible){const W=x(C,k,U,v);C.onBeforeShadow(i,C,b,P,O,W,null),i.renderBufferDirect(P,null,O,W,C,null),C.onAfterShadow(i,C,b,P,O,W,null)}}const F=C.children;for(let O=0,k=F.length;O<k;O++)M(F[O],b,P,U,v)}function A(C){C.target.removeEventListener("dispose",A);for(const P in c){const U=c[P],v=C.target.uuid;v in U&&(U[v].dispose(),delete U[v])}}}const mx={[Ll]:Dl,[Ul]:Ol,[Il]:Fl,[Yr]:Nl,[Dl]:Ll,[Ol]:Ul,[Fl]:Il,[Nl]:Yr};function _x(i){function t(){let D=!1;const _t=new ne;let X=null;const j=new ne(0,0,0,0);return{setMask:function(dt){X!==dt&&!D&&(i.colorMask(dt,dt,dt,dt),X=dt)},setLocked:function(dt){D=dt},setClear:function(dt,gt,Kt,Ee,Ye){Ye===!0&&(dt*=Ee,gt*=Ee,Kt*=Ee),_t.set(dt,gt,Kt,Ee),j.equals(_t)===!1&&(i.clearColor(dt,gt,Kt,Ee),j.copy(_t))},reset:function(){D=!1,X=null,j.set(-1,0,0,0)}}}function e(){let D=!1,_t=!1,X=null,j=null,dt=null;return{setReversed:function(gt){_t=gt},setTest:function(gt){gt?Mt(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(gt){X!==gt&&!D&&(i.depthMask(gt),X=gt)},setFunc:function(gt){if(_t&&(gt=mx[gt]),j!==gt){switch(gt){case Ll:i.depthFunc(i.NEVER);break;case Dl:i.depthFunc(i.ALWAYS);break;case Ul:i.depthFunc(i.LESS);break;case Yr:i.depthFunc(i.LEQUAL);break;case Il:i.depthFunc(i.EQUAL);break;case Nl:i.depthFunc(i.GEQUAL);break;case Ol:i.depthFunc(i.GREATER);break;case Fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=gt}},setLocked:function(gt){D=gt},setClear:function(gt){dt!==gt&&(i.clearDepth(gt),dt=gt)},reset:function(){D=!1,X=null,j=null,dt=null}}}function n(){let D=!1,_t=null,X=null,j=null,dt=null,gt=null,Kt=null,Ee=null,Ye=null;return{setTest:function(Zt){D||(Zt?Mt(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(Zt){_t!==Zt&&!D&&(i.stencilMask(Zt),_t=Zt)},setFunc:function(Zt,Ke,Jn){(X!==Zt||j!==Ke||dt!==Jn)&&(i.stencilFunc(Zt,Ke,Jn),X=Zt,j=Ke,dt=Jn)},setOp:function(Zt,Ke,Jn){(gt!==Zt||Kt!==Ke||Ee!==Jn)&&(i.stencilOp(Zt,Ke,Jn),gt=Zt,Kt=Ke,Ee=Jn)},setLocked:function(Zt){D=Zt},setClear:function(Zt){Ye!==Zt&&(i.clearStencil(Zt),Ye=Zt)},reset:function(){D=!1,_t=null,X=null,j=null,dt=null,gt=null,Kt=null,Ee=null,Ye=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],p=null,_=!1,g=null,d=null,m=null,y=null,x=null,M=null,A=null,C=new Ot(0,0,0),b=0,P=!1,U=null,v=null,T=null,F=null,O=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,B=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=B>=2);let H=null,ot={};const ut=i.getParameter(i.SCISSOR_BOX),ft=i.getParameter(i.VIEWPORT),Ft=new ne().fromArray(ut),Wt=new ne().fromArray(ft);function Y(D,_t,X,j){const dt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(D,gt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<X;Kt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(_t+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return gt}const Q={};Q[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Mt(i.DEPTH_TEST),s.setFunc(Yr),rt(!1),tt(Nu),Mt(i.CULL_FACE),R(Wn);function Mt(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function ht(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function Lt(D,_t){return u[D]!==_t?(i.bindFramebuffer(D,_t),u[D]=_t,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function Pt(D,_t){let X=f,j=!1;if(D){X=h.get(_t),X===void 0&&(X=[],h.set(_t,X));const dt=D.textures;if(X.length!==dt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Kt=dt.length;gt<Kt;gt++)X[gt]=i.COLOR_ATTACHMENT0+gt;X.length=dt.length,j=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,j=!0);j&&i.drawBuffers(X)}function zt(D){return p!==D?(i.useProgram(D),p=D,!0):!1}const Ht={[nr]:i.FUNC_ADD,[Op]:i.FUNC_SUBTRACT,[Fp]:i.FUNC_REVERSE_SUBTRACT};Ht[Bp]=i.MIN,Ht[zp]=i.MAX;const $={[kp]:i.ZERO,[Gp]:i.ONE,[Vp]:i.SRC_COLOR,[Rl]:i.SRC_ALPHA,[Kp]:i.SRC_ALPHA_SATURATE,[qp]:i.DST_COLOR,[Wp]:i.DST_ALPHA,[Hp]:i.ONE_MINUS_SRC_COLOR,[Pl]:i.ONE_MINUS_SRC_ALPHA,[Yp]:i.ONE_MINUS_DST_COLOR,[Xp]:i.ONE_MINUS_DST_ALPHA,[Zp]:i.CONSTANT_COLOR,[$p]:i.ONE_MINUS_CONSTANT_COLOR,[Jp]:i.CONSTANT_ALPHA,[jp]:i.ONE_MINUS_CONSTANT_ALPHA};function R(D,_t,X,j,dt,gt,Kt,Ee,Ye,Zt){if(D===Wn){_===!0&&(ht(i.BLEND),_=!1);return}if(_===!1&&(Mt(i.BLEND),_=!0),D!==Np){if(D!==g||Zt!==P){if((d!==nr||x!==nr)&&(i.blendEquation(i.FUNC_ADD),d=nr,x=nr),Zt)switch(D){case zr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qo:i.blendFunc(i.ONE,i.ONE);break;case Ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,y=null,M=null,A=null,C.set(0,0,0),b=0,g=D,P=Zt}return}dt=dt||_t,gt=gt||X,Kt=Kt||j,(_t!==d||dt!==x)&&(i.blendEquationSeparate(Ht[_t],Ht[dt]),d=_t,x=dt),(X!==m||j!==y||gt!==M||Kt!==A)&&(i.blendFuncSeparate($[X],$[j],$[gt],$[Kt]),m=X,y=j,M=gt,A=Kt),(Ee.equals(C)===!1||Ye!==b)&&(i.blendColor(Ee.r,Ee.g,Ee.b,Ye),C.copy(Ee),b=Ye),g=D,P=!1}function st(D,_t){D.side===ze?ht(i.CULL_FACE):Mt(i.CULL_FACE);let X=D.side===Xe;_t&&(X=!X),rt(X),D.blending===zr&&D.transparent===!1?R(Wn):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),At(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(D){U!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),U=D)}function tt(D){D!==Up?(Mt(i.CULL_FACE),D!==v&&(D===Nu?i.cullFace(i.BACK):D===Ip?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),v=D}function at(D){D!==T&&(W&&i.lineWidth(D),T=D)}function At(D,_t,X){D?(Mt(i.POLYGON_OFFSET_FILL),(F!==_t||O!==X)&&(i.polygonOffset(_t,X),F=_t,O=X)):ht(i.POLYGON_OFFSET_FILL)}function mt(D){D?Mt(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function w(D){D===void 0&&(D=i.TEXTURE0+k-1),H!==D&&(i.activeTexture(D),H=D)}function S(D,_t,X){X===void 0&&(H===null?X=i.TEXTURE0+k-1:X=H);let j=ot[X];j===void 0&&(j={type:void 0,texture:void 0},ot[X]=j),(j.type!==D||j.texture!==_t)&&(H!==X&&(i.activeTexture(X),H=X),i.bindTexture(D,_t||Q[D]),j.type=D,j.texture=_t)}function z(){const D=ot[H];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(D){Ft.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ft.copy(D))}function St(D){Wt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Wt.copy(D))}function Yt(D,_t){let X=l.get(_t);X===void 0&&(X=new WeakMap,l.set(_t,X));let j=X.get(D);j===void 0&&(j=i.getUniformBlockIndex(_t,D.name),X.set(D,j))}function kt(D,_t){const j=l.get(_t).get(D);a.get(_t)!==j&&(i.uniformBlockBinding(_t,j,D.__bindingPointIndex),a.set(_t,j))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,ot={},u={},h=new WeakMap,f=[],p=null,_=!1,g=null,d=null,m=null,y=null,x=null,M=null,A=null,C=new Ot(0,0,0),b=0,P=!1,U=null,v=null,T=null,F=null,O=null,Ft.set(0,0,i.canvas.width,i.canvas.height),Wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Mt,disable:ht,bindFramebuffer:Lt,drawBuffers:Pt,useProgram:zt,setBlending:R,setMaterial:st,setFlipSided:rt,setCullFace:tt,setLineWidth:at,setPolygonOffset:At,setScissorTest:mt,activeTexture:w,bindTexture:S,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:xt,texImage3D:It,updateUBOMapping:Yt,uniformBlockBinding:kt,texStorage2D:qt,texStorage3D:et,texSubImage2D:Z,texSubImage3D:Et,compressedTexSubImage2D:lt,compressedTexSubImage3D:vt,scissor:Nt,viewport:St,reset:ae}}function Ah(i,t,e,n){const r=gx(n);switch(e){case Ef:return i*t;case wf:return i*t;case Af:return i*t*2;case Cf:return i*t/r.components*r.byteLength;case Gc:return i*t/r.components*r.byteLength;case Rf:return i*t*2/r.components*r.byteLength;case Vc:return i*t*2/r.components*r.byteLength;case bf:return i*t*3/r.components*r.byteLength;case Nn:return i*t*4/r.components*r.byteLength;case Hc:return i*t*4/r.components*r.byteLength;case Io:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oo:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hl:case Xl:return Math.max(i,16)*Math.max(t,8)/4;case Vl:case Wl:return Math.max(i,8)*Math.max(t,8)/2;case ql:case Yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case lc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Bo:case cc:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pf:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fc:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gx(i){switch(i){case ui:case Sf:return{byteLength:1,components:1};case Ps:case yf:case dr:return{byteLength:2,components:1};case zc:case kc:return{byteLength:2,components:4};case hr:case Bc:case ai:return{byteLength:4,components:1};case Tf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function vx(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,S){return p?new OffscreenCanvas(w,S):Ls("canvas")}function g(w,S,z){let K=1;const J=mt(w);if((J.width>z||J.height>z)&&(K=z/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Z=Math.floor(K*J.width),Et=Math.floor(K*J.height);h===void 0&&(h=_(Z,Et));const lt=S?_(Z,Et):h;return lt.width=Z,lt.height=Et,lt.getContext("2d").drawImage(w,0,0,Z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+Et+")."),lt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function d(w){return w.generateMipmaps&&w.minFilter!==je&&w.minFilter!==Un}function m(w){i.generateMipmap(w)}function y(w,S,z,K,J=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=S;if(S===i.RED&&(z===i.FLOAT&&(Z=i.R32F),z===i.HALF_FLOAT&&(Z=i.R16F),z===i.UNSIGNED_BYTE&&(Z=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.R8UI),z===i.UNSIGNED_SHORT&&(Z=i.R16UI),z===i.UNSIGNED_INT&&(Z=i.R32UI),z===i.BYTE&&(Z=i.R8I),z===i.SHORT&&(Z=i.R16I),z===i.INT&&(Z=i.R32I)),S===i.RG&&(z===i.FLOAT&&(Z=i.RG32F),z===i.HALF_FLOAT&&(Z=i.RG16F),z===i.UNSIGNED_BYTE&&(Z=i.RG8)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RG8UI),z===i.UNSIGNED_SHORT&&(Z=i.RG16UI),z===i.UNSIGNED_INT&&(Z=i.RG32UI),z===i.BYTE&&(Z=i.RG8I),z===i.SHORT&&(Z=i.RG16I),z===i.INT&&(Z=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),z===i.UNSIGNED_INT&&(Z=i.RGB32UI),z===i.BYTE&&(Z=i.RGB8I),z===i.SHORT&&(Z=i.RGB16I),z===i.INT&&(Z=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),z===i.UNSIGNED_INT&&(Z=i.RGBA32UI),z===i.BYTE&&(Z=i.RGBA8I),z===i.SHORT&&(Z=i.RGBA16I),z===i.INT&&(Z=i.RGBA32I)),S===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),S===i.RGBA){const Et=J?Yo:Qt.getTransfer(K);z===i.FLOAT&&(Z=i.RGBA32F),z===i.HALF_FLOAT&&(Z=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Z=Et===ue?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(w,S){let z;return w?S===null||S===hr||S===$r?z=i.DEPTH24_STENCIL8:S===ai?z=i.DEPTH32F_STENCIL8:S===Ps&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===hr||S===$r?z=i.DEPTH_COMPONENT24:S===ai?z=i.DEPTH_COMPONENT32F:S===Ps&&(z=i.DEPTH_COMPONENT16),z}function M(w,S){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==je&&w.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function A(w){const S=w.target;S.removeEventListener("dispose",A),b(S),S.isVideoTexture&&u.delete(S)}function C(w){const S=w.target;S.removeEventListener("dispose",C),U(S)}function b(w){const S=n.get(w);if(S.__webglInit===void 0)return;const z=w.source,K=f.get(z);if(K){const J=K[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(w),Object.keys(K).length===0&&f.delete(z)}n.remove(w)}function P(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const z=w.source,K=f.get(z);delete K[S.__cacheKey],o.memory.textures--}function U(w){const S=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let J=0;J<S.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(S.__webglFramebuffer[K][J]);else i.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)i.deleteFramebuffer(S.__webglFramebuffer[K]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=w.textures;for(let K=0,J=z.length;K<J;K++){const Z=n.get(z[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(w)}let v=0;function T(){v=0}function F(){const w=v;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),v+=1,w}function O(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function k(w,S){const z=n.get(w);if(w.isVideoTexture&&at(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(z,w,S);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function W(w,S){const z=n.get(w);if(w.version>0&&z.__version!==w.version){Wt(z,w,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function B(w,S){const z=n.get(w);if(w.version>0&&z.__version!==w.version){Wt(z,w,S);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function q(w,S){const z=n.get(w);if(w.version>0&&z.__version!==w.version){Y(z,w,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}const H={[kl]:i.REPEAT,[rr]:i.CLAMP_TO_EDGE,[Gl]:i.MIRRORED_REPEAT},ot={[je]:i.NEAREST,[am]:i.NEAREST_MIPMAP_NEAREST,[ro]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[Na]:i.LINEAR_MIPMAP_NEAREST,[sr]:i.LINEAR_MIPMAP_LINEAR},ut={[um]:i.NEVER,[_m]:i.ALWAYS,[hm]:i.LESS,[Uf]:i.LEQUAL,[fm]:i.EQUAL,[mm]:i.GEQUAL,[dm]:i.GREATER,[pm]:i.NOTEQUAL};function ft(w,S){if(S.type===ai&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Un||S.magFilter===Na||S.magFilter===ro||S.magFilter===sr||S.minFilter===Un||S.minFilter===Na||S.minFilter===ro||S.minFilter===sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,H[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,H[S.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,H[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ot[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ot[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===je||S.minFilter!==ro&&S.minFilter!==sr||S.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ft(w,S){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));const K=S.source;let J=f.get(K);J===void 0&&(J={},f.set(K,J));const Z=O(S);if(Z!==w.__cacheKey){J[Z]===void 0&&(J[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[Z].usedTimes++;const Et=J[w.__cacheKey];Et!==void 0&&(J[w.__cacheKey].usedTimes--,Et.usedTimes===0&&P(S)),w.__cacheKey=Z,w.__webglTexture=J[Z].texture}return z}function Wt(w,S,z){let K=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=i.TEXTURE_3D);const J=Ft(w,S),Z=S.source;e.bindTexture(K,w.__webglTexture,i.TEXTURE0+z);const Et=n.get(Z);if(Z.version!==Et.__version||J===!0){e.activeTexture(i.TEXTURE0+z);const lt=Qt.getPrimaries(Qt.workingColorSpace),vt=S.colorSpace===Ei?null:Qt.getPrimaries(S.colorSpace),qt=S.colorSpace===Ei||lt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let et=g(S.image,!1,r.maxTextureSize);et=At(S,et);const xt=s.convert(S.format,S.colorSpace),It=s.convert(S.type);let Nt=y(S.internalFormat,xt,It,S.colorSpace,S.isVideoTexture);ft(K,S);let St;const Yt=S.mipmaps,kt=S.isVideoTexture!==!0,ae=Et.__version===void 0||J===!0,D=Z.dataReady,_t=M(S,et);if(S.isDepthTexture)Nt=x(S.format===Jr,S.type),ae&&(kt?e.texStorage2D(i.TEXTURE_2D,1,Nt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Nt,et.width,et.height,0,xt,It,null));else if(S.isDataTexture)if(Yt.length>0){kt&&ae&&e.texStorage2D(i.TEXTURE_2D,_t,Nt,Yt[0].width,Yt[0].height);for(let X=0,j=Yt.length;X<j;X++)St=Yt[X],kt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,St.width,St.height,xt,It,St.data):e.texImage2D(i.TEXTURE_2D,X,Nt,St.width,St.height,0,xt,It,St.data);S.generateMipmaps=!1}else kt?(ae&&e.texStorage2D(i.TEXTURE_2D,_t,Nt,et.width,et.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,xt,It,et.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,et.width,et.height,0,xt,It,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){kt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Nt,Yt[0].width,Yt[0].height,et.depth);for(let X=0,j=Yt.length;X<j;X++)if(St=Yt[X],S.format!==Nn)if(xt!==null)if(kt){if(D)if(S.layerUpdates.size>0){const dt=Ah(St.width,St.height,S.format,S.type);for(const gt of S.layerUpdates){const Kt=St.data.subarray(gt*dt/St.data.BYTES_PER_ELEMENT,(gt+1)*dt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,gt,St.width,St.height,1,xt,Kt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,et.depth,xt,St.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Nt,St.width,St.height,et.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,et.depth,xt,It,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Nt,St.width,St.height,et.depth,0,xt,It,St.data)}else{kt&&ae&&e.texStorage2D(i.TEXTURE_2D,_t,Nt,Yt[0].width,Yt[0].height);for(let X=0,j=Yt.length;X<j;X++)St=Yt[X],S.format!==Nn?xt!==null?kt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,St.width,St.height,xt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Nt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,St.width,St.height,xt,It,St.data):e.texImage2D(i.TEXTURE_2D,X,Nt,St.width,St.height,0,xt,It,St.data)}else if(S.isDataArrayTexture)if(kt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Nt,et.width,et.height,et.depth),D)if(S.layerUpdates.size>0){const X=Ah(et.width,et.height,S.format,S.type);for(const j of S.layerUpdates){const dt=et.data.subarray(j*X/et.data.BYTES_PER_ELEMENT,(j+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,et.width,et.height,1,xt,It,dt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,xt,It,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,et.width,et.height,et.depth,0,xt,It,et.data);else if(S.isData3DTexture)kt?(ae&&e.texStorage3D(i.TEXTURE_3D,_t,Nt,et.width,et.height,et.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,xt,It,et.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,et.width,et.height,et.depth,0,xt,It,et.data);else if(S.isFramebufferTexture){if(ae)if(kt)e.texStorage2D(i.TEXTURE_2D,_t,Nt,et.width,et.height);else{let X=et.width,j=et.height;for(let dt=0;dt<_t;dt++)e.texImage2D(i.TEXTURE_2D,dt,Nt,X,j,0,xt,It,null),X>>=1,j>>=1}}else if(Yt.length>0){if(kt&&ae){const X=mt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,_t,Nt,X.width,X.height)}for(let X=0,j=Yt.length;X<j;X++)St=Yt[X],kt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,xt,It,St):e.texImage2D(i.TEXTURE_2D,X,Nt,xt,It,St);S.generateMipmaps=!1}else if(kt){if(ae){const X=mt(et);e.texStorage2D(i.TEXTURE_2D,_t,Nt,X.width,X.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,It,et)}else e.texImage2D(i.TEXTURE_2D,0,Nt,xt,It,et);d(S)&&m(K),Et.__version=Z.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Y(w,S,z){if(S.image.length!==6)return;const K=Ft(w,S),J=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);const Z=n.get(J);if(J.version!==Z.__version||K===!0){e.activeTexture(i.TEXTURE0+z);const Et=Qt.getPrimaries(Qt.workingColorSpace),lt=S.colorSpace===Ei?null:Qt.getPrimaries(S.colorSpace),vt=S.colorSpace===Ei||Et===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const qt=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,xt=[];for(let j=0;j<6;j++)!qt&&!et?xt[j]=g(S.image[j],!0,r.maxCubemapSize):xt[j]=et?S.image[j].image:S.image[j],xt[j]=At(S,xt[j]);const It=xt[0],Nt=s.convert(S.format,S.colorSpace),St=s.convert(S.type),Yt=y(S.internalFormat,Nt,St,S.colorSpace),kt=S.isVideoTexture!==!0,ae=Z.__version===void 0||K===!0,D=J.dataReady;let _t=M(S,It);ft(i.TEXTURE_CUBE_MAP,S);let X;if(qt){kt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Yt,It.width,It.height);for(let j=0;j<6;j++){X=xt[j].mipmaps;for(let dt=0;dt<X.length;dt++){const gt=X[dt];S.format!==Nn?Nt!==null?kt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,0,0,gt.width,gt.height,Nt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,Yt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,0,0,gt.width,gt.height,Nt,St,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,Yt,gt.width,gt.height,0,Nt,St,gt.data)}}}else{if(X=S.mipmaps,kt&&ae){X.length>0&&_t++;const j=mt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Yt,j.width,j.height)}for(let j=0;j<6;j++)if(et){kt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xt[j].width,xt[j].height,Nt,St,xt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Yt,xt[j].width,xt[j].height,0,Nt,St,xt[j].data);for(let dt=0;dt<X.length;dt++){const Kt=X[dt].image[j].image;kt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,0,0,Kt.width,Kt.height,Nt,St,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,Yt,Kt.width,Kt.height,0,Nt,St,Kt.data)}}else{kt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Nt,St,xt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Yt,Nt,St,xt[j]);for(let dt=0;dt<X.length;dt++){const gt=X[dt];kt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,0,0,Nt,St,gt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,Yt,Nt,St,gt.image[j])}}}d(S)&&m(i.TEXTURE_CUBE_MAP),Z.__version=J.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Q(w,S,z,K,J,Z){const Et=s.convert(z.format,z.colorSpace),lt=s.convert(z.type),vt=y(z.internalFormat,Et,lt,z.colorSpace);if(!n.get(S).__hasExternalTextures){const et=Math.max(1,S.width>>Z),xt=Math.max(1,S.height>>Z);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Z,vt,et,xt,S.depth,0,Et,lt,null):e.texImage2D(J,Z,vt,et,xt,0,Et,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),tt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,n.get(z).__webglTexture,0,rt(S)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,n.get(z).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(w,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){const K=S.depthTexture,J=K&&K.isDepthTexture?K.type:null,Z=x(S.stencilBuffer,J),Et=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=rt(S);tt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,Z,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,w)}else{const K=S.textures;for(let J=0;J<K.length;J++){const Z=K[J],Et=s.convert(Z.format,Z.colorSpace),lt=s.convert(Z.type),vt=y(Z.internalFormat,Et,lt,Z.colorSpace),qt=rt(S);z&&tt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,vt,S.width,S.height):tt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,vt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,vt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const K=n.get(S.depthTexture).__webglTexture,J=rt(S);if(S.depthTexture.format===kr)tt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(S.depthTexture.format===Jr)tt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Lt(w){const S=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=K}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ht(S.__webglFramebuffer,w)}else if(z){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=i.createRenderbuffer(),Mt(S.__webglDepthbuffer[K],w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Mt(S.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(w,S,z){const K=n.get(w);S!==void 0&&Q(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Lt(w)}function zt(w){const S=w.texture,z=n.get(w),K=n.get(S);w.addEventListener("dispose",C);const J=w.textures,Z=w.isWebGLCubeRenderTarget===!0,Et=J.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=S.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[lt]=[];for(let vt=0;vt<S.mipmaps.length;vt++)z.__webglFramebuffer[lt][vt]=i.createFramebuffer()}else z.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)z.__webglFramebuffer[lt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Et)for(let lt=0,vt=J.length;lt<vt;lt++){const qt=n.get(J[lt]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&tt(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let lt=0;lt<J.length;lt++){const vt=J[lt];z.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[lt]);const qt=s.convert(vt.format,vt.colorSpace),et=s.convert(vt.type),xt=y(vt.internalFormat,qt,et,vt.colorSpace,w.isXRRenderTarget===!0),It=rt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,xt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,z.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Mt(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ft(i.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)Q(z.__webglFramebuffer[lt][vt],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,vt);else Q(z.__webglFramebuffer[lt],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);d(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let lt=0,vt=J.length;lt<vt;lt++){const qt=J[lt],et=n.get(qt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),ft(i.TEXTURE_2D,qt),Q(z.__webglFramebuffer,w,qt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),d(qt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(lt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,K.__webglTexture),ft(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)Q(z.__webglFramebuffer[vt],w,S,i.COLOR_ATTACHMENT0,lt,vt);else Q(z.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,lt,0);d(S)&&m(lt),e.unbindTexture()}w.depthBuffer&&Lt(w)}function Ht(w){const S=w.textures;for(let z=0,K=S.length;z<K;z++){const J=S[z];if(d(J)){const Z=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(J).__webglTexture;e.bindTexture(Z,Et),m(Z),e.unbindTexture()}}}const $=[],R=[];function st(w){if(w.samples>0){if(tt(w)===!1){const S=w.textures,z=w.width,K=w.height;let J=i.COLOR_BUFFER_BIT;const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(w),lt=S.length>1;if(lt)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);const qt=n.get(S[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,J,i.NEAREST),l===!0&&($.length=0,R.length=0,$.push(i.COLOR_ATTACHMENT0+vt),w.depthBuffer&&w.resolveDepthBuffer===!1&&($.push(Z),R.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);const qt=n.get(S[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function rt(w){return Math.min(r.maxSamples,w.samples)}function tt(w){const S=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function at(w){const S=o.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function At(w,S){const z=w.colorSpace,K=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==ki&&z!==Ei&&(Qt.getTransfer(z)===ue?(K!==Nn||J!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=T,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=Pt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=tt}function xx(i,t){function e(n,r=Ei){let s;const o=Qt.getTransfer(r);if(n===ui)return i.UNSIGNED_BYTE;if(n===zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sf)return i.BYTE;if(n===yf)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===Bc)return i.INT;if(n===hr)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===dr)return i.HALF_FLOAT;if(n===Ef)return i.ALPHA;if(n===bf)return i.RGB;if(n===Nn)return i.RGBA;if(n===wf)return i.LUMINANCE;if(n===Af)return i.LUMINANCE_ALPHA;if(n===kr)return i.DEPTH_COMPONENT;if(n===Jr)return i.DEPTH_STENCIL;if(n===Cf)return i.RED;if(n===Gc)return i.RED_INTEGER;if(n===Rf)return i.RG;if(n===Vc)return i.RG_INTEGER;if(n===Hc)return i.RGBA_INTEGER;if(n===Io||n===No||n===Oo||n===Fo)if(o===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Io)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Io)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===No)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vl||n===Hl||n===Wl||n===Xl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ql||n===Yl||n===Kl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ql||n===Yl)return o===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Kl)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zl||n===$l||n===Jl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===rc||n===sc||n===oc||n===ac||n===lc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Zl)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jl)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jl)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ql)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ec)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ic)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ac)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bo||n===cc||n===uc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Bo)return o===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pf||n===hc||n===fc||n===dc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Bo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$r?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Mx extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qe extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sx={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const d=e.getJointPose(g,n),m=this._getHandJoint(c,g);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const yx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ex{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ve,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new sn({vertexShader:yx,fragmentShader:Tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yt(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bx extends os{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const g=new Ex,d=e.getContextAttributes();let m=null,y=null;const x=[],M=[],A=new it;let C=null;const b=new $e;b.layers.enable(1),b.viewport=new ne;const P=new $e;P.layers.enable(2),P.viewport=new ne;const U=[b,P],v=new Mx;v.layers.enable(1),v.layers.enable(2);let T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=x[Y];return Q===void 0&&(Q=new hl,x[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=x[Y];return Q===void 0&&(Q=new hl,x[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=x[Y];return Q===void 0&&(Q=new hl,x[Y]=Q),Q.getHandSpace()};function O(Y){const Q=M.indexOf(Y.inputSource);if(Q===-1)return;const Mt=x[Q];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,c||o),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",W);for(let Y=0;Y<x.length;Y++){const Q=M[Y];Q!==null&&(M[Y]=null,x[Y].disconnect(Q))}T=null,F=null,g.reset(),t.setRenderTarget(m),p=null,f=null,h=null,r=null,y=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",k),r.addEventListener("inputsourceschange",W),d.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),r.renderState.layers===void 0){const Q={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new hi(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let Q=null,Mt=null,ht=null;d.depth&&(ht=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=d.stencil?Jr:kr,Mt=d.stencil?$r:hr);const Lt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(Lt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new hi(f.textureWidth,f.textureHeight,{format:Nn,type:ui,depthTexture:new qf(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Wt.setContext(r),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(Y){for(let Q=0;Q<Y.removed.length;Q++){const Mt=Y.removed[Q],ht=M.indexOf(Mt);ht>=0&&(M[ht]=null,x[ht].disconnect(Mt))}for(let Q=0;Q<Y.added.length;Q++){const Mt=Y.added[Q];let ht=M.indexOf(Mt);if(ht===-1){for(let Pt=0;Pt<x.length;Pt++)if(Pt>=M.length){M.push(Mt),ht=Pt;break}else if(M[Pt]===null){M[Pt]=Mt,ht=Pt;break}if(ht===-1)break}const Lt=x[ht];Lt&&Lt.connect(Mt)}}const B=new L,q=new L;function H(Y,Q,Mt){B.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(Mt.matrixWorld);const ht=B.distanceTo(q),Lt=Q.projectionMatrix.elements,Pt=Mt.projectionMatrix.elements,zt=Lt[14]/(Lt[10]-1),Ht=Lt[14]/(Lt[10]+1),$=(Lt[9]+1)/Lt[5],R=(Lt[9]-1)/Lt[5],st=(Lt[8]-1)/Lt[0],rt=(Pt[8]+1)/Pt[0],tt=zt*st,at=zt*rt,At=ht/(-st+rt),mt=At*-st;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(mt),Y.translateZ(At),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Lt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const w=zt+At,S=Ht+At,z=tt-mt,K=at+(ht-mt),J=$*Ht/S*w,Z=R*Ht/S*w;Y.projectionMatrix.makePerspective(z,K,J,Z,w,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ot(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Q=Y.near,Mt=Y.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(Mt=g.depthFar)),v.near=P.near=b.near=Q,v.far=P.far=b.far=Mt,(T!==v.near||F!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,F=v.far);const ht=Y.parent,Lt=v.cameras;ot(v,ht);for(let Pt=0;Pt<Lt.length;Pt++)ot(Lt[Pt],ht);Lt.length===2?H(v,b,P):v.projectionMatrix.copy(b.projectionMatrix),ut(Y,v,ht)};function ut(Y,Q,Mt){Mt===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Jo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ft=null;function Ft(Y,Q){if(u=Q.getViewerPose(c||o),_=Q,u!==null){const Mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let ht=!1;Mt.length!==v.cameras.length&&(v.cameras.length=0,ht=!0);for(let Pt=0;Pt<Mt.length;Pt++){const zt=Mt[Pt];let Ht=null;if(p!==null)Ht=p.getViewport(zt);else{const R=h.getViewSubImage(f,zt);Ht=R.viewport,Pt===0&&(t.setRenderTargetTextures(y,R.colorTexture,f.ignoreDepthValues?void 0:R.depthStencilTexture),t.setRenderTarget(y))}let $=U[Pt];$===void 0&&($=new $e,$.layers.enable(Pt),$.viewport=new ne,U[Pt]=$),$.matrix.fromArray(zt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(zt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Pt===0&&(v.matrix.copy($.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ht===!0&&v.cameras.push($)}const Lt=r.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Pt=h.getDepthInformation(Mt[0]);Pt&&Pt.isValid&&Pt.texture&&g.init(t,Pt,r.renderState)}}for(let Mt=0;Mt<x.length;Mt++){const ht=M[Mt],Lt=x[Mt];ht!==null&&Lt!==void 0&&Lt.update(ht,Q,c||o)}ft&&ft(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Wt=new Wf;Wt.setAnimationLoop(Ft),this.setAnimationLoop=function(Y){ft=Y},this.dispose=function(){}}}const $i=new qn,wx=new le;function Ax(i,t){function e(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,Gf(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function r(d,m,y,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(d,m):m.isMeshToonMaterial?(s(d,m),h(d,m)):m.isMeshPhongMaterial?(s(d,m),u(d,m)):m.isMeshStandardMaterial?(s(d,m),f(d,m),m.isMeshPhysicalMaterial&&p(d,m,M)):m.isMeshMatcapMaterial?(s(d,m),_(d,m)):m.isMeshDepthMaterial?s(d,m):m.isMeshDistanceMaterial?(s(d,m),g(d,m)):m.isMeshNormalMaterial?s(d,m):m.isLineBasicMaterial?(o(d,m),m.isLineDashedMaterial&&a(d,m)):m.isPointsMaterial?l(d,m,y,x):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,e(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Xe&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,e(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Xe&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,e(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,e(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,M=y.envMapRotation;x&&(d.envMap.value=x,$i.copy(M),$i.x*=-1,$i.y*=-1,$i.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),d.envMapRotation.value.setFromMatrix4(wx.makeRotationFromEuler($i)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,d.aoMapTransform))}function o(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform))}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,y,x){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*y,d.scale.value=x*.5,m.map&&(d.map.value=m.map,e(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function u(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function h(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,y){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xe&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){const y=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Cx(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=r[y.id];M===void 0&&(_(y),M=u(y),r[y.id]=M,y.addEventListener("dispose",d));const A=x.program;n.updateUBOMapping(y,A);const C=t.render.frame;s[y.id]!==C&&(f(y),s[y.id]=C)}function u(y){const x=h();y.__bindingPointIndex=x;const M=i.createBuffer(),A=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=r[y.id],M=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,b=M.length;C<b;C++){const P=Array.isArray(M[C])?M[C]:[M[C]];for(let U=0,v=P.length;U<v;U++){const T=P[U];if(p(T,C,U,A)===!0){const F=T.__offset,O=Array.isArray(T.value)?T.value:[T.value];let k=0;for(let W=0;W<O.length;W++){const B=O[W],q=g(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,F+k,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,k),k+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,M,A){const C=y.value,b=x+"_"+M;if(A[b]===void 0)return typeof C=="number"||typeof C=="boolean"?A[b]=C:A[b]=C.clone(),!0;{const P=A[b];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return A[b]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function _(y){const x=y.uniforms;let M=0;const A=16;for(let b=0,P=x.length;b<P;b++){const U=Array.isArray(x[b])?x[b]:[x[b]];for(let v=0,T=U.length;v<T;v++){const F=U[v],O=Array.isArray(F.value)?F.value:[F.value];for(let k=0,W=O.length;k<W;k++){const B=O[k],q=g(B),H=M%A,ot=H%q.boundary,ut=H+ot;M+=ot,ut!==0&&A-ut<q.storage&&(M+=A-ut),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=q.storage}}}const C=M%A;return C>0&&(M+=A-C),y.__size=M,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function d(y){const x=y.target;x.removeEventListener("dispose",d);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function m(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class Rx{constructor(t={}){const{canvas:e=vm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,d=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=Ci,this.toneMappingExposure=1;const x=this;let M=!1,A=0,C=0,b=null,P=-1,U=null;const v=new ne,T=new ne;let F=null;const O=new Ot(0);let k=0,W=e.width,B=e.height,q=1,H=null,ot=null;const ut=new ne(0,0,W,B),ft=new ne(0,0,W,B);let Ft=!1;const Wt=new Yc;let Y=!1,Q=!1;const Mt=new le,ht=new le,Lt=new L,Pt=new ne,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function $(){return b===null?q:1}let R=n;function st(E,I){return e.getContext(E,I)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fc}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),R===null){const I="webgl2";if(R=st(I,E),R===null)throw st(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let rt,tt,at,At,mt,w,S,z,K,J,Z,Et,lt,vt,qt,et,xt,It,Nt,St,Yt,kt,ae,D;function _t(){rt=new N0(R),rt.init(),kt=new xx(R,rt),tt=new R0(R,rt,t,kt),at=new _x(R),tt.reverseDepthBuffer&&at.buffers.depth.setReversed(!0),At=new B0(R),mt=new nx,w=new vx(R,rt,at,mt,tt,kt,At),S=new L0(x),z=new I0(x),K=new Xm(R),ae=new A0(R,K),J=new O0(R,K,At,ae),Z=new k0(R,J,K,At),Nt=new z0(R,tt,w),et=new P0(mt),Et=new ex(x,S,z,rt,tt,ae,et),lt=new Ax(x,mt),vt=new rx,qt=new ux(rt),It=new w0(x,S,z,at,Z,f,l),xt=new px(x,Z,tt),D=new Cx(R,At,tt,at),St=new C0(R,rt,At),Yt=new F0(R,rt,At),At.programs=Et.programs,x.capabilities=tt,x.extensions=rt,x.properties=mt,x.renderLists=vt,x.shadowMap=xt,x.state=at,x.info=At}_t();const X=new bx(x,R);this.xr=X,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(W,B,!1))},this.getSize=function(E){return E.set(W,B)},this.setSize=function(E,I,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,B=I,e.width=Math.floor(E*q),e.height=Math.floor(I*q),G===!0&&(e.style.width=E+"px",e.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(W*q,B*q).floor()},this.setDrawingBufferSize=function(E,I,G){W=E,B=I,q=G,e.width=Math.floor(E*G),e.height=Math.floor(I*G),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(ut)},this.setViewport=function(E,I,G,V){E.isVector4?ut.set(E.x,E.y,E.z,E.w):ut.set(E,I,G,V),at.viewport(v.copy(ut).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(ft)},this.setScissor=function(E,I,G,V){E.isVector4?ft.set(E.x,E.y,E.z,E.w):ft.set(E,I,G,V),at.scissor(T.copy(ft).multiplyScalar(q).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(E){at.setScissorTest(Ft=E)},this.setOpaqueSort=function(E){H=E},this.setTransparentSort=function(E){ot=E},this.getClearColor=function(E){return E.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(E=!0,I=!0,G=!0){let V=0;if(E){let N=!1;if(b!==null){const nt=b.texture.format;N=nt===Hc||nt===Vc||nt===Gc}if(N){const nt=b.texture.type,pt=nt===ui||nt===hr||nt===Ps||nt===$r||nt===zc||nt===kc,Tt=It.getClearColor(),bt=It.getClearAlpha(),Dt=Tt.r,Ut=Tt.g,wt=Tt.b;pt?(p[0]=Dt,p[1]=Ut,p[2]=wt,p[3]=bt,R.clearBufferuiv(R.COLOR,0,p)):(_[0]=Dt,_[1]=Ut,_[2]=wt,_[3]=bt,R.clearBufferiv(R.COLOR,0,_))}else V|=R.COLOR_BUFFER_BIT}I&&(V|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),vt.dispose(),qt.dispose(),mt.dispose(),S.dispose(),z.dispose(),Z.dispose(),ae.dispose(),D.dispose(),Et.dispose(),X.dispose(),X.removeEventListener("sessionstart",Au),X.removeEventListener("sessionend",Cu),Wi.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=At.autoReset,I=xt.enabled,G=xt.autoUpdate,V=xt.needsUpdate,N=xt.type;_t(),At.autoReset=E,xt.enabled=I,xt.autoUpdate=G,xt.needsUpdate=V,xt.type=N}function gt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Kt(E){const I=E.target;I.removeEventListener("dispose",Kt),Ee(I)}function Ee(E){Ye(E),mt.remove(E)}function Ye(E){const I=mt.get(E).programs;I!==void 0&&(I.forEach(function(G){Et.releaseProgram(G)}),E.isShaderMaterial&&Et.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,G,V,N,nt){I===null&&(I=zt);const pt=N.isMesh&&N.matrixWorld.determinant()<0,Tt=Rp(E,I,G,V,N);at.setMaterial(V,pt);let bt=G.index,Dt=1;if(V.wireframe===!0){if(bt=J.getWireframeAttribute(G),bt===void 0)return;Dt=2}const Ut=G.drawRange,wt=G.attributes.position;let ee=Ut.start*Dt,ce=(Ut.start+Ut.count)*Dt;nt!==null&&(ee=Math.max(ee,nt.start*Dt),ce=Math.min(ce,(nt.start+nt.count)*Dt)),bt!==null?(ee=Math.max(ee,0),ce=Math.min(ce,bt.count)):wt!=null&&(ee=Math.max(ee,0),ce=Math.min(ce,wt.count));const Me=ce-ee;if(Me<0||Me===1/0)return;ae.setup(N,V,Tt,G,bt);let ln,Jt=St;if(bt!==null&&(ln=K.get(bt),Jt=Yt,Jt.setIndex(ln)),N.isMesh)V.wireframe===!0?(at.setLineWidth(V.wireframeLinewidth*$()),Jt.setMode(R.LINES)):Jt.setMode(R.TRIANGLES);else if(N.isLine){let Ct=V.linewidth;Ct===void 0&&(Ct=1),at.setLineWidth(Ct*$()),N.isLineSegments?Jt.setMode(R.LINES):N.isLineLoop?Jt.setMode(R.LINE_LOOP):Jt.setMode(R.LINE_STRIP)}else N.isPoints?Jt.setMode(R.POINTS):N.isSprite&&Jt.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Jt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ct=N._multiDrawStarts,Ue=N._multiDrawCounts,jt=N._multiDrawCount,Rn=bt?K.get(bt).bytesPerElement:1,vr=mt.get(V).currentProgram.getUniforms();for(let cn=0;cn<jt;cn++)vr.setValue(R,"_gl_DrawID",cn),Jt.render(Ct[cn]/Rn,Ue[cn])}else if(N.isInstancedMesh)Jt.renderInstances(ee,Me,N.count);else if(G.isInstancedBufferGeometry){const Ct=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ue=Math.min(G.instanceCount,Ct);Jt.renderInstances(ee,Me,Ue)}else Jt.render(ee,Me)};function Zt(E,I,G){E.transparent===!0&&E.side===ze&&E.forceSinglePass===!1?(E.side=Xe,E.needsUpdate=!0,io(E,I,G),E.side=Fn,E.needsUpdate=!0,io(E,I,G),E.side=ze):io(E,I,G)}this.compile=function(E,I,G=null){G===null&&(G=E),d=qt.get(G),d.init(I),y.push(d),G.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),E!==G&&E.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const V=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const nt=N.material;if(nt)if(Array.isArray(nt))for(let pt=0;pt<nt.length;pt++){const Tt=nt[pt];Zt(Tt,G,N),V.add(Tt)}else Zt(nt,G,N),V.add(nt)}),y.pop(),d=null,V},this.compileAsync=function(E,I,G=null){const V=this.compile(E,I,G);return new Promise(N=>{function nt(){if(V.forEach(function(pt){mt.get(pt).currentProgram.isReady()&&V.delete(pt)}),V.size===0){N(E);return}setTimeout(nt,10)}rt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ke=null;function Jn(E){Ke&&Ke(E)}function Au(){Wi.stop()}function Cu(){Wi.start()}const Wi=new Wf;Wi.setAnimationLoop(Jn),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(E){Ke=E,X.setAnimationLoop(E),E===null?Wi.stop():Wi.start()},X.addEventListener("sessionstart",Au),X.addEventListener("sessionend",Cu),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,I,b),d=qt.get(E,y.length),d.init(I),y.push(d),ht.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Wt.setFromProjectionMatrix(ht),Q=this.localClippingEnabled,Y=et.init(this.clippingPlanes,Q),g=vt.get(E,m.length),g.init(),m.push(g),X.enabled===!0&&X.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&La(nt,I,-1/0,x.sortObjects)}La(E,I,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(H,ot),Ht=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ht&&It.addToRenderList(g,E),this.info.render.frame++,Y===!0&&et.beginShadows();const G=d.state.shadowsArray;xt.render(G,E,I),Y===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,N=g.transmissive;if(d.setupLights(),I.isArrayCamera){const nt=I.cameras;if(N.length>0)for(let pt=0,Tt=nt.length;pt<Tt;pt++){const bt=nt[pt];Pu(V,N,E,bt)}Ht&&It.render(E);for(let pt=0,Tt=nt.length;pt<Tt;pt++){const bt=nt[pt];Ru(g,E,bt,bt.viewport)}}else N.length>0&&Pu(V,N,E,I),Ht&&It.render(E),Ru(g,E,I);b!==null&&(w.updateMultisampleRenderTarget(b),w.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(x,E,I),ae.resetDefaultState(),P=-1,U=null,y.pop(),y.length>0?(d=y[y.length-1],Y===!0&&et.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function La(E,I,G,V){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Wt.intersectsSprite(E)){V&&Pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ht);const pt=Z.update(E),Tt=E.material;Tt.visible&&g.push(E,pt,Tt,G,Pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Wt.intersectsObject(E))){const pt=Z.update(E),Tt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pt.copy(E.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Pt.copy(pt.boundingSphere.center)),Pt.applyMatrix4(E.matrixWorld).applyMatrix4(ht)),Array.isArray(Tt)){const bt=pt.groups;for(let Dt=0,Ut=bt.length;Dt<Ut;Dt++){const wt=bt[Dt],ee=Tt[wt.materialIndex];ee&&ee.visible&&g.push(E,pt,ee,G,Pt.z,wt)}}else Tt.visible&&g.push(E,pt,Tt,G,Pt.z,null)}}const nt=E.children;for(let pt=0,Tt=nt.length;pt<Tt;pt++)La(nt[pt],I,G,V)}function Ru(E,I,G,V){const N=E.opaque,nt=E.transmissive,pt=E.transparent;d.setupLightsView(G),Y===!0&&et.setGlobalState(x.clippingPlanes,G),V&&at.viewport(v.copy(V)),N.length>0&&no(N,I,G),nt.length>0&&no(nt,I,G),pt.length>0&&no(pt,I,G),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Pu(E,I,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new hi(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?dr:ui,minFilter:sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const nt=d.state.transmissionRenderTarget[V.id],pt=V.viewport||v;nt.setSize(pt.z,pt.w);const Tt=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(O),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),Ht&&It.render(G);const bt=x.toneMapping;x.toneMapping=Ci;const Dt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),Y===!0&&et.setGlobalState(x.clippingPlanes,V),no(E,G,V),w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let wt=0,ee=I.length;wt<ee;wt++){const ce=I[wt],Me=ce.object,ln=ce.geometry,Jt=ce.material,Ct=ce.group;if(Jt.side===ze&&Me.layers.test(V.layers)){const Ue=Jt.side;Jt.side=Xe,Jt.needsUpdate=!0,Lu(Me,G,V,ln,Jt,Ct),Jt.side=Ue,Jt.needsUpdate=!0,Ut=!0}}Ut===!0&&(w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt))}x.setRenderTarget(Tt),x.setClearColor(O,k),Dt!==void 0&&(V.viewport=Dt),x.toneMapping=bt}function no(E,I,G){const V=I.isScene===!0?I.overrideMaterial:null;for(let N=0,nt=E.length;N<nt;N++){const pt=E[N],Tt=pt.object,bt=pt.geometry,Dt=V===null?pt.material:V,Ut=pt.group;Tt.layers.test(G.layers)&&Lu(Tt,I,G,bt,Dt,Ut)}}function Lu(E,I,G,V,N,nt){E.onBeforeRender(x,I,G,V,N,nt),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,I,G,V,E,nt),N.transparent===!0&&N.side===ze&&N.forceSinglePass===!1?(N.side=Xe,N.needsUpdate=!0,x.renderBufferDirect(G,I,V,N,E,nt),N.side=Fn,N.needsUpdate=!0,x.renderBufferDirect(G,I,V,N,E,nt),N.side=ze):x.renderBufferDirect(G,I,V,N,E,nt),E.onAfterRender(x,I,G,V,N,nt)}function io(E,I,G){I.isScene!==!0&&(I=zt);const V=mt.get(E),N=d.state.lights,nt=d.state.shadowsArray,pt=N.state.version,Tt=Et.getParameters(E,N.state,nt,I,G),bt=Et.getProgramCacheKey(Tt);let Dt=V.programs;V.environment=E.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(E.isMeshStandardMaterial?z:S).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",Kt),Dt=new Map,V.programs=Dt);let Ut=Dt.get(bt);if(Ut!==void 0){if(V.currentProgram===Ut&&V.lightsStateVersion===pt)return Uu(E,Tt),Ut}else Tt.uniforms=Et.getUniforms(E),E.onBeforeCompile(Tt,x),Ut=Et.acquireProgram(Tt,bt),Dt.set(bt,Ut),V.uniforms=Tt.uniforms;const wt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(wt.clippingPlanes=et.uniform),Uu(E,Tt),V.needsLights=Lp(E),V.lightsStateVersion=pt,V.needsLights&&(wt.ambientLightColor.value=N.state.ambient,wt.lightProbe.value=N.state.probe,wt.directionalLights.value=N.state.directional,wt.directionalLightShadows.value=N.state.directionalShadow,wt.spotLights.value=N.state.spot,wt.spotLightShadows.value=N.state.spotShadow,wt.rectAreaLights.value=N.state.rectArea,wt.ltc_1.value=N.state.rectAreaLTC1,wt.ltc_2.value=N.state.rectAreaLTC2,wt.pointLights.value=N.state.point,wt.pointLightShadows.value=N.state.pointShadow,wt.hemisphereLights.value=N.state.hemi,wt.directionalShadowMap.value=N.state.directionalShadowMap,wt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,wt.spotShadowMap.value=N.state.spotShadowMap,wt.spotLightMatrix.value=N.state.spotLightMatrix,wt.spotLightMap.value=N.state.spotLightMap,wt.pointShadowMap.value=N.state.pointShadowMap,wt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ut,V.uniformsList=null,Ut}function Du(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=ko.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Uu(E,I){const G=mt.get(E);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function Rp(E,I,G,V,N){I.isScene!==!0&&(I=zt),w.resetTextureUnits();const nt=I.fog,pt=V.isMeshStandardMaterial?I.environment:null,Tt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ki,bt=(V.isMeshStandardMaterial?z:S).get(V.envMap||pt),Dt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ut=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),wt=!!G.morphAttributes.position,ee=!!G.morphAttributes.normal,ce=!!G.morphAttributes.color;let Me=Ci;V.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Me=x.toneMapping);const ln=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Jt=ln!==void 0?ln.length:0,Ct=mt.get(V),Ue=d.state.lights;if(Y===!0&&(Q===!0||E!==U)){const Sn=E===U&&V.id===P;et.setState(V,E,Sn)}let jt=!1;V.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Ue.state.version||Ct.outputColorSpace!==Tt||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isBatchedMesh&&Ct.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ct.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==bt||V.fog===!0&&Ct.fog!==nt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==et.numPlanes||Ct.numIntersection!==et.numIntersection)||Ct.vertexAlphas!==Dt||Ct.vertexTangents!==Ut||Ct.morphTargets!==wt||Ct.morphNormals!==ee||Ct.morphColors!==ce||Ct.toneMapping!==Me||Ct.morphTargetsCount!==Jt)&&(jt=!0):(jt=!0,Ct.__version=V.version);let Rn=Ct.currentProgram;jt===!0&&(Rn=io(V,I,N));let vr=!1,cn=!1,Da=!1;const ye=Rn.getUniforms(),gi=Ct.uniforms;if(at.useProgram(Rn.program)&&(vr=!0,cn=!0,Da=!0),V.id!==P&&(P=V.id,cn=!0),vr||U!==E){tt.reverseDepthBuffer?(Mt.copy(E.projectionMatrix),Mm(Mt),Sm(Mt),ye.setValue(R,"projectionMatrix",Mt)):ye.setValue(R,"projectionMatrix",E.projectionMatrix),ye.setValue(R,"viewMatrix",E.matrixWorldInverse);const Sn=ye.map.cameraPosition;Sn!==void 0&&Sn.setValue(R,Lt.setFromMatrixPosition(E.matrixWorld)),tt.logarithmicDepthBuffer&&ye.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ye.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),U!==E&&(U=E,cn=!0,Da=!0)}if(N.isSkinnedMesh){ye.setOptional(R,N,"bindMatrix"),ye.setOptional(R,N,"bindMatrixInverse");const Sn=N.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),ye.setValue(R,"boneTexture",Sn.boneTexture,w))}N.isBatchedMesh&&(ye.setOptional(R,N,"batchingTexture"),ye.setValue(R,"batchingTexture",N._matricesTexture,w),ye.setOptional(R,N,"batchingIdTexture"),ye.setValue(R,"batchingIdTexture",N._indirectTexture,w),ye.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&ye.setValue(R,"batchingColorTexture",N._colorsTexture,w));const Ua=G.morphAttributes;if((Ua.position!==void 0||Ua.normal!==void 0||Ua.color!==void 0)&&Nt.update(N,G,Rn),(cn||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,ye.setValue(R,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(gi.envMap.value=bt,gi.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(gi.envMapIntensity.value=I.environmentIntensity),cn&&(ye.setValue(R,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights&&Pp(gi,Da),nt&&V.fog===!0&&lt.refreshFogUniforms(gi,nt),lt.refreshMaterialUniforms(gi,V,q,B,d.state.transmissionRenderTarget[E.id]),ko.upload(R,Du(Ct),gi,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ko.upload(R,Du(Ct),gi,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ye.setValue(R,"center",N.center),ye.setValue(R,"modelViewMatrix",N.modelViewMatrix),ye.setValue(R,"normalMatrix",N.normalMatrix),ye.setValue(R,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Sn=V.uniformsGroups;for(let Ia=0,Dp=Sn.length;Ia<Dp;Ia++){const Iu=Sn[Ia];D.update(Iu,Rn),D.bind(Iu,Rn)}}return Rn}function Pp(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Lp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,I,G){mt.get(E.texture).__webglTexture=I,mt.get(E.depthTexture).__webglTexture=G;const V=mt.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const G=mt.get(E);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,G=0){b=E,A=I,C=G;let V=!0,N=null,nt=!1,pt=!1;if(E){const bt=mt.get(E);if(bt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(bt.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(bt.__hasExternalTextures)w.rebindTextures(E,mt.get(E.texture).__webglTexture,mt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const wt=E.depthTexture;if(bt.__boundDepthTexture!==wt){if(wt!==null&&mt.has(wt)&&(E.width!==wt.image.width||E.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(pt=!0);const Ut=mt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ut[I])?N=Ut[I][G]:N=Ut[I],nt=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?N=mt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ut)?N=Ut[G]:N=Ut,v.copy(E.viewport),T.copy(E.scissor),F=E.scissorTest}else v.copy(ut).multiplyScalar(q).floor(),T.copy(ft).multiplyScalar(q).floor(),F=Ft;if(at.bindFramebuffer(R.FRAMEBUFFER,N)&&V&&at.drawBuffers(E,N),at.viewport(v),at.scissor(T),at.setScissorTest(F),nt){const bt=mt.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,bt.__webglTexture,G)}else if(pt){const bt=mt.get(E.texture),Dt=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,bt.__webglTexture,G||0,Dt)}P=-1},this.readRenderTargetPixels=function(E,I,G,V,N,nt,pt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(Tt=Tt[pt]),Tt){at.bindFramebuffer(R.FRAMEBUFFER,Tt);try{const bt=E.texture,Dt=bt.format,Ut=bt.type;if(!tt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-V&&G>=0&&G<=E.height-N&&R.readPixels(I,G,V,N,kt.convert(Dt),kt.convert(Ut),nt)}finally{const bt=b!==null?mt.get(b).__webglFramebuffer:null;at.bindFramebuffer(R.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(E,I,G,V,N,nt,pt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(Tt=Tt[pt]),Tt){const bt=E.texture,Dt=bt.format,Ut=bt.type;if(!tt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-V&&G>=0&&G<=E.height-N){at.bindFramebuffer(R.FRAMEBUFFER,Tt);const wt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,wt),R.bufferData(R.PIXEL_PACK_BUFFER,nt.byteLength,R.STREAM_READ),R.readPixels(I,G,V,N,kt.convert(Dt),kt.convert(Ut),0);const ee=b!==null?mt.get(b).__webglFramebuffer:null;at.bindFramebuffer(R.FRAMEBUFFER,ee);const ce=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await xm(R,ce,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,wt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,nt),R.deleteBuffer(wt),R.deleteSync(ce),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,I=null,G=0){E.isTexture!==!0&&(zo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-G),N=Math.floor(E.image.width*V),nt=Math.floor(E.image.height*V),pt=I!==null?I.x:0,Tt=I!==null?I.y:0;w.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,pt,Tt,N,nt),at.unbindTexture()},this.copyTextureToTexture=function(E,I,G=null,V=null,N=0){E.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],I=arguments[2],N=arguments[3]||0,G=null);let nt,pt,Tt,bt,Dt,Ut;G!==null?(nt=G.max.x-G.min.x,pt=G.max.y-G.min.y,Tt=G.min.x,bt=G.min.y):(nt=E.image.width,pt=E.image.height,Tt=0,bt=0),V!==null?(Dt=V.x,Ut=V.y):(Dt=0,Ut=0);const wt=kt.convert(I.format),ee=kt.convert(I.type);w.setTexture2D(I,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const ce=R.getParameter(R.UNPACK_ROW_LENGTH),Me=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ln=R.getParameter(R.UNPACK_SKIP_PIXELS),Jt=R.getParameter(R.UNPACK_SKIP_ROWS),Ct=R.getParameter(R.UNPACK_SKIP_IMAGES),Ue=E.isCompressedTexture?E.mipmaps[N]:E.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Ue.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ue.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Tt),R.pixelStorei(R.UNPACK_SKIP_ROWS,bt),E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,Dt,Ut,nt,pt,wt,ee,Ue.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,Dt,Ut,Ue.width,Ue.height,wt,Ue.data):R.texSubImage2D(R.TEXTURE_2D,N,Dt,Ut,nt,pt,wt,ee,Ue),R.pixelStorei(R.UNPACK_ROW_LENGTH,ce),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Me),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ln),R.pixelStorei(R.UNPACK_SKIP_ROWS,Jt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ct),N===0&&I.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),at.unbindTexture()},this.copyTextureToTexture3D=function(E,I,G=null,V=null,N=0){E.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,E=arguments[2],I=arguments[3],N=arguments[4]||0);let nt,pt,Tt,bt,Dt,Ut,wt,ee,ce;const Me=E.isCompressedTexture?E.mipmaps[N]:E.image;G!==null?(nt=G.max.x-G.min.x,pt=G.max.y-G.min.y,Tt=G.max.z-G.min.z,bt=G.min.x,Dt=G.min.y,Ut=G.min.z):(nt=Me.width,pt=Me.height,Tt=Me.depth,bt=0,Dt=0,Ut=0),V!==null?(wt=V.x,ee=V.y,ce=V.z):(wt=0,ee=0,ce=0);const ln=kt.convert(I.format),Jt=kt.convert(I.type);let Ct;if(I.isData3DTexture)w.setTexture3D(I,0),Ct=R.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)w.setTexture2DArray(I,0),Ct=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const Ue=R.getParameter(R.UNPACK_ROW_LENGTH),jt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Rn=R.getParameter(R.UNPACK_SKIP_PIXELS),vr=R.getParameter(R.UNPACK_SKIP_ROWS),cn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Me.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Me.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,bt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Dt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ut),E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Ct,N,wt,ee,ce,nt,pt,Tt,ln,Jt,Me.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(Ct,N,wt,ee,ce,nt,pt,Tt,ln,Me.data):R.texSubImage3D(Ct,N,wt,ee,ce,nt,pt,Tt,ln,Jt,Me),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ue),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,jt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Rn),R.pixelStorei(R.UNPACK_SKIP_ROWS,vr),R.pixelStorei(R.UNPACK_SKIP_IMAGES,cn),N===0&&I.generateMipmaps&&R.generateMipmap(Ct),at.unbindTexture()},this.initRenderTarget=function(E){mt.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),at.unbindTexture()},this.resetState=function(){A=0,C=0,b=null,at.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Wc?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===ha?"display-p3":"srgb"}}class Zc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=e}clone(){return new Zc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Px extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Vr extends pr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const jo=new L,Qo=new L,Ch=new le,_s=new Xc,wo=new Zs,fl=new L,Rh=new L;class Ts extends Ae{constructor(t=new ve,e=new Vr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)jo.fromBufferAttribute(e,r-1),Qo.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=jo.distanceTo(Qo);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),wo.radius+=s,t.ray.intersectsSphere(wo)===!1)return;Ch.copy(r).invert(),_s.copy(t.ray).applyMatrix4(Ch);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=p,d=_-1;g<d;g+=c){const m=u.getX(g),y=u.getX(g+1),x=Ao(this,t,_s,l,m,y);x&&e.push(x)}if(this.isLineLoop){const g=u.getX(_-1),d=u.getX(p),m=Ao(this,t,_s,l,g,d);m&&e.push(m)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=p,d=_-1;g<d;g+=c){const m=Ao(this,t,_s,l,g,g+1);m&&e.push(m)}if(this.isLineLoop){const g=Ao(this,t,_s,l,_-1,p);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ao(i,t,e,n,r,s){const o=i.geometry.attributes.position;if(jo.fromBufferAttribute(o,r),Qo.fromBufferAttribute(o,s),e.distanceSqToSegment(jo,Qo,fl,Rh)>n)return;fl.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(fl);if(!(l<t.near||l>t.far))return{distance:l,point:Rh.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}class Lx extends pr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ph=new le,mc=new Xc,Co=new Zs,Ro=new L;class Dx extends Ae{constructor(t=new ve,e=new Lx){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),Co.radius+=s,t.ray.intersectsSphere(Co)===!1)return;Ph.copy(r).invert(),mc.copy(t.ray).applyMatrix4(Ph);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,g=p;_<g;_++){const d=c.getX(_);Ro.fromBufferAttribute(h,d),Lh(Ro,d,l,r,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,g=p;_<g;_++)Ro.fromBufferAttribute(h,_),Lh(Ro,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Lh(i,t,e,n,r,s,o){const a=mc.distanceSqToPoint(i);if(a<e){const l=new L;mc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ux extends Ve{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new it:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,r=[],s=[],o=[],a=new L,l=new le;for(let p=0;p<=t;p++){const _=p/t;r[p]=this.getTangentAt(_,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ne(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(Ne(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $c extends Kn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new it){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ix extends $c{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Jc(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Po=new L,dl=new Jc,pl=new Jc,ml=new Jc;class da extends Kn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new L){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Po.subVectors(r[0],r[1]).add(r[0]),c=Po);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Po.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Po),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(u),p);g<1e-4&&(g=1),_<1e-4&&(_=g),d<1e-4&&(d=g),dl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,d),pl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,d),ml.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,d)}else this.curveType==="catmullrom"&&(dl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),pl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ml.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(dl.calc(l),pl.calc(l),ml.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new L().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Dh(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function Nx(i,t){const e=1-i;return e*e*t}function Ox(i,t){return 2*(1-i)*i*t}function Fx(i,t){return i*i*t}function Es(i,t,e,n){return Nx(i,t)+Ox(i,e)+Fx(i,n)}function Bx(i,t){const e=1-i;return e*e*e*t}function zx(i,t){const e=1-i;return 3*e*e*i*t}function kx(i,t){return 3*(1-i)*i*i*t}function Gx(i,t){return i*i*i*t}function bs(i,t,e,n,r){return Bx(i,t)+zx(i,e)+kx(i,n)+Gx(i,r)}class jf extends Kn{constructor(t=new it,e=new it,n=new it,r=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new it){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(bs(t,r.x,s.x,o.x,a.x),bs(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vx extends Kn{constructor(t=new L,e=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new L){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(bs(t,r.x,s.x,o.x,a.x),bs(t,r.y,s.y,o.y,a.y),bs(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qf extends Kn{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hx extends Kn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class td extends Kn{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Es(t,r.x,s.x,o.x),Es(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ed extends Kn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Es(t,r.x,s.x,o.x),Es(t,r.y,s.y,o.y),Es(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nd extends Kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Dh(a,l.x,c.x,u.x,h.x),Dh(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new it().fromArray(r))}return this}}var ta=Object.freeze({__proto__:null,ArcCurve:Ix,CatmullRomCurve3:da,CubicBezierCurve:jf,CubicBezierCurve3:Vx,EllipseCurve:$c,LineCurve:Qf,LineCurve3:Hx,QuadraticBezierCurve:td,QuadraticBezierCurve3:ed,SplineCurve:nd});class Wx extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ta[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new ta[r.type]().fromJSON(r))}return this}}class Uh extends Wx{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Qf(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new td(this.currentPoint.clone(),new it(t,e),new it(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new jf(this.currentPoint.clone(),new it(t,e),new it(n,r),new it(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new nd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const c=new $c(t,e,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class fi extends ve{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new L,u=new it;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=n+h/e*r;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Le extends ve{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let _=0;const g=[],d=n/2;let m=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new te(h,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(p,2));function y(){const M=new L,A=new L;let C=0;const b=(e-t)/n;for(let P=0;P<=s;P++){const U=[],v=P/s,T=v*(e-t)+t;for(let F=0;F<=r;F++){const O=F/r,k=O*l+a,W=Math.sin(k),B=Math.cos(k);A.x=T*W,A.y=-v*n+d,A.z=T*B,h.push(A.x,A.y,A.z),M.set(W,b,B).normalize(),f.push(M.x,M.y,M.z),p.push(O,1-v),U.push(_++)}g.push(U)}for(let P=0;P<r;P++)for(let U=0;U<s;U++){const v=g[U][P],T=g[U+1][P],F=g[U+1][P+1],O=g[U][P+1];t>0&&(u.push(v,T,O),C+=3),e>0&&(u.push(T,F,O),C+=3)}c.addGroup(m,C,0),m+=C}function x(M){const A=_,C=new it,b=new L;let P=0;const U=M===!0?t:e,v=M===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,d*v,0),f.push(0,v,0),p.push(.5,.5),_++;const T=_;for(let F=0;F<=r;F++){const k=F/r*l+a,W=Math.cos(k),B=Math.sin(k);b.x=U*B,b.y=d*v,b.z=U*W,h.push(b.x,b.y,b.z),f.push(0,v,0),C.x=W*.5+.5,C.y=B*.5*v+.5,p.push(C.x,C.y),_++}for(let F=0;F<r;F++){const O=A+F,k=T+F;M===!0?u.push(k,k+1,O):u.push(k+1,k,O),P+=3}c.addGroup(m,P,M===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class On extends Uh{constructor(t){super(t),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Uh().fromJSON(r))}return this}}const Xx={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=id(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,p;if(n&&(s=$x(i,t,s,e)),i.length>80*e){a=c=i[0],l=u=i[1];for(let _=e;_<r;_+=e)h=i[_],f=i[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Ds(s,o,e,a,l,p,0),o}};function id(i,t,e,n,r){let s,o;if(r===aM(i,t,e,n)>0)for(s=t;s<e;s+=n)o=Ih(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=Ih(s,i[s],i[s+1],o);return o&&pa(o,o.next)&&(Is(o),o=o.next),o}function fr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(pa(e,e.next)||me(e.prev,e,e.next)===0)){if(Is(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ds(i,t,e,n,r,s,o){if(!i)return;!o&&s&&eM(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?Yx(i,n,r,s):qx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Is(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Kx(fr(i),t,e),Ds(i,t,e,n,r,s,2)):o===2&&Zx(i,t,e,n,r,s):Ds(fr(i),t,e,n,r,s,1);break}}}function qx(i){const t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=p&&Nr(r,a,s,l,o,c,_.x,_.y)&&me(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Yx(i,t,e,n){const r=i.prev,s=i,o=i.next;if(me(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,d=u>h?u>f?u:f:h>f?h:f,m=_c(p,_,t,e,n),y=_c(g,d,t,e,n);let x=i.prevZ,M=i.nextZ;for(;x&&x.z>=m&&M&&M.z<=y;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=d&&x!==r&&x!==o&&Nr(a,u,l,h,c,f,x.x,x.y)&&me(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=p&&M.x<=g&&M.y>=_&&M.y<=d&&M!==r&&M!==o&&Nr(a,u,l,h,c,f,M.x,M.y)&&me(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=m;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=d&&x!==r&&x!==o&&Nr(a,u,l,h,c,f,x.x,x.y)&&me(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=p&&M.x<=g&&M.y>=_&&M.y<=d&&M!==r&&M!==o&&Nr(a,u,l,h,c,f,M.x,M.y)&&me(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Kx(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!pa(r,s)&&rd(r,n,n.next,s)&&Us(r,s)&&Us(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Is(n),Is(n.next),n=i=s),n=n.next}while(n!==i);return fr(n)}function Zx(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rM(o,a)){let l=sd(o,a);o=fr(o,o.next),l=fr(l,l.next),Ds(o,t,e,n,r,s,0),Ds(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function $x(i,t,e,n){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=id(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(iM(c));for(r.sort(Jx),s=0;s<r.length;s++)e=jx(r[s],e);return e}function Jx(i,t){return i.x-t.x}function jx(i,t){const e=Qx(i,t);if(!e)return t;const n=sd(e,i);return fr(n,n.next),fr(e,e.next)}function Qx(i,t){let e=t,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&Nr(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),Us(e,i)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&tM(r,e)))&&(r=e,u=h)),e=e.next;while(e!==a);return r}function tM(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function eM(i,t,e,n){let r=i;do r.z===0&&(r.z=_c(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,nM(r)}function nM(i){let t,e,n,r,s,o,a,l,c=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,c*=2}while(o>1);return i}function _c(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function iM(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Nr(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function rM(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!sM(i,t)&&(Us(i,t)&&Us(t,i)&&oM(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||pa(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function pa(i,t){return i.x===t.x&&i.y===t.y}function rd(i,t,e,n){const r=Do(me(i,t,e)),s=Do(me(i,t,n)),o=Do(me(e,n,i)),a=Do(me(e,n,t));return!!(r!==s&&o!==a||r===0&&Lo(i,e,t)||s===0&&Lo(i,n,t)||o===0&&Lo(e,i,n)||a===0&&Lo(e,t,n))}function Lo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Do(i){return i>0?1:i<0?-1:0}function sM(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Us(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function oM(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function sd(i,t){const e=new gc(i.i,i.x,i.y),n=new gc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Ih(i,t,e,n){const r=new gc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Is(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function aM(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Ri{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Ri.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Nh(t),Oh(n,t);let o=t.length;e.forEach(Nh);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Oh(n,e[l]);const a=Xx.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Nh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Oh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class jc extends ve{constructor(t=new On([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new te(r,3)),this.setAttribute("uv",new te(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:p-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:lM;let x,M=!1,A,C,b,P;m&&(x=m.getSpacedPoints(u),M=!0,f=!1,A=m.computeFrenetFrames(u,!1),C=new L,b=new L,P=new L),f||(d=0,p=0,_=0,g=0);const U=a.extractPoints(c);let v=U.shape;const T=U.holes;if(!Ri.isClockWise(v)){v=v.reverse();for(let $=0,R=T.length;$<R;$++){const st=T[$];Ri.isClockWise(st)&&(T[$]=st.reverse())}}const O=Ri.triangulateShape(v,T),k=v;for(let $=0,R=T.length;$<R;$++){const st=T[$];v=v.concat(st)}function W($,R,st){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(R,st)}const B=v.length,q=O.length;function H($,R,st){let rt,tt,at;const At=$.x-R.x,mt=$.y-R.y,w=st.x-$.x,S=st.y-$.y,z=At*At+mt*mt,K=At*S-mt*w;if(Math.abs(K)>Number.EPSILON){const J=Math.sqrt(z),Z=Math.sqrt(w*w+S*S),Et=R.x-mt/J,lt=R.y+At/J,vt=st.x-S/Z,qt=st.y+w/Z,et=((vt-Et)*S-(qt-lt)*w)/(At*S-mt*w);rt=Et+At*et-$.x,tt=lt+mt*et-$.y;const xt=rt*rt+tt*tt;if(xt<=2)return new it(rt,tt);at=Math.sqrt(xt/2)}else{let J=!1;At>Number.EPSILON?w>Number.EPSILON&&(J=!0):At<-Number.EPSILON?w<-Number.EPSILON&&(J=!0):Math.sign(mt)===Math.sign(S)&&(J=!0),J?(rt=-mt,tt=At,at=Math.sqrt(z)):(rt=At,tt=mt,at=Math.sqrt(z/2))}return new it(rt/at,tt/at)}const ot=[];for(let $=0,R=k.length,st=R-1,rt=$+1;$<R;$++,st++,rt++)st===R&&(st=0),rt===R&&(rt=0),ot[$]=H(k[$],k[st],k[rt]);const ut=[];let ft,Ft=ot.concat();for(let $=0,R=T.length;$<R;$++){const st=T[$];ft=[];for(let rt=0,tt=st.length,at=tt-1,At=rt+1;rt<tt;rt++,at++,At++)at===tt&&(at=0),At===tt&&(At=0),ft[rt]=H(st[rt],st[at],st[At]);ut.push(ft),Ft=Ft.concat(ft)}for(let $=0;$<d;$++){const R=$/d,st=p*Math.cos(R*Math.PI/2),rt=_*Math.sin(R*Math.PI/2)+g;for(let tt=0,at=k.length;tt<at;tt++){const At=W(k[tt],ot[tt],rt);ht(At.x,At.y,-st)}for(let tt=0,at=T.length;tt<at;tt++){const At=T[tt];ft=ut[tt];for(let mt=0,w=At.length;mt<w;mt++){const S=W(At[mt],ft[mt],rt);ht(S.x,S.y,-st)}}}const Wt=_+g;for(let $=0;$<B;$++){const R=f?W(v[$],Ft[$],Wt):v[$];M?(b.copy(A.normals[0]).multiplyScalar(R.x),C.copy(A.binormals[0]).multiplyScalar(R.y),P.copy(x[0]).add(b).add(C),ht(P.x,P.y,P.z)):ht(R.x,R.y,0)}for(let $=1;$<=u;$++)for(let R=0;R<B;R++){const st=f?W(v[R],Ft[R],Wt):v[R];M?(b.copy(A.normals[$]).multiplyScalar(st.x),C.copy(A.binormals[$]).multiplyScalar(st.y),P.copy(x[$]).add(b).add(C),ht(P.x,P.y,P.z)):ht(st.x,st.y,h/u*$)}for(let $=d-1;$>=0;$--){const R=$/d,st=p*Math.cos(R*Math.PI/2),rt=_*Math.sin(R*Math.PI/2)+g;for(let tt=0,at=k.length;tt<at;tt++){const At=W(k[tt],ot[tt],rt);ht(At.x,At.y,h+st)}for(let tt=0,at=T.length;tt<at;tt++){const At=T[tt];ft=ut[tt];for(let mt=0,w=At.length;mt<w;mt++){const S=W(At[mt],ft[mt],rt);M?ht(S.x,S.y+x[u-1].y,x[u-1].x+st):ht(S.x,S.y,h+st)}}}Y(),Q();function Y(){const $=r.length/3;if(f){let R=0,st=B*R;for(let rt=0;rt<q;rt++){const tt=O[rt];Lt(tt[2]+st,tt[1]+st,tt[0]+st)}R=u+d*2,st=B*R;for(let rt=0;rt<q;rt++){const tt=O[rt];Lt(tt[0]+st,tt[1]+st,tt[2]+st)}}else{for(let R=0;R<q;R++){const st=O[R];Lt(st[2],st[1],st[0])}for(let R=0;R<q;R++){const st=O[R];Lt(st[0]+B*u,st[1]+B*u,st[2]+B*u)}}n.addGroup($,r.length/3-$,0)}function Q(){const $=r.length/3;let R=0;Mt(k,R),R+=k.length;for(let st=0,rt=T.length;st<rt;st++){const tt=T[st];Mt(tt,R),R+=tt.length}n.addGroup($,r.length/3-$,1)}function Mt($,R){let st=$.length;for(;--st>=0;){const rt=st;let tt=st-1;tt<0&&(tt=$.length-1);for(let at=0,At=u+d*2;at<At;at++){const mt=B*at,w=B*(at+1),S=R+rt+mt,z=R+tt+mt,K=R+tt+w,J=R+rt+w;Pt(S,z,K,J)}}}function ht($,R,st){l.push($),l.push(R),l.push(st)}function Lt($,R,st){zt($),zt(R),zt(st);const rt=r.length/3,tt=y.generateTopUV(n,r,rt-3,rt-2,rt-1);Ht(tt[0]),Ht(tt[1]),Ht(tt[2])}function Pt($,R,st,rt){zt($),zt(R),zt(rt),zt(R),zt(st),zt(rt);const tt=r.length/3,at=y.generateSideWallUV(n,r,tt-6,tt-3,tt-2,tt-1);Ht(at[0]),Ht(at[1]),Ht(at[3]),Ht(at[1]),Ht(at[2]),Ht(at[3])}function zt($){r.push(l[$*3+0]),r.push(l[$*3+1]),r.push(l[$*3+2])}function Ht($){s.push($.x),s.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return cM(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new ta[r.type]().fromJSON(r)),new jc(n,t.options)}}const lM={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],u=t[r*3+1];return[new it(s,o),new it(a,l),new it(c,u)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[r*3],p=t[r*3+1],_=t[r*3+2],g=t[s*3],d=t[s*3+1],m=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new it(o,1-l),new it(c,1-h),new it(f,1-_),new it(g,1-m)]:[new it(a,1-l),new it(u,1-h),new it(p,1-_),new it(d,1-m)]}};function cM(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Xn extends ve{constructor(t=new On([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(s,3)),this.setAttribute("uv",new te(o,2));function c(u){const h=r.length/3,f=u.extractPoints(e);let p=f.shape;const _=f.holes;Ri.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,m=_.length;d<m;d++){const y=_[d];Ri.isClockWise(y)===!0&&(_[d]=y.reverse())}const g=Ri.triangulateShape(p,_);for(let d=0,m=_.length;d<m;d++){const y=_[d];p=p.concat(y)}for(let d=0,m=p.length;d<m;d++){const y=p[d];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let d=0,m=g.length;d<m;d++){const y=g[d],x=y[0]+h,M=y[1]+h,A=y[2]+h;n.push(x,M,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return uM(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const o=e[t.shapes[r]];n.push(o)}return new Xn(n,t.curveSegments)}}function uM(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class Ns extends ve{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,f=new L,p=[],_=[],g=[],d=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let M=0;m===0&&o===0?M=.5/e:m===n&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const C=A/e;h.x=-t*Math.cos(r+C*s)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(r+C*s)*Math.sin(o+x*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),d.push(C+M,1-x),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const x=u[m][y+1],M=u[m][y],A=u[m+1][y],C=u[m+1][y+1];(m!==0||o>0)&&p.push(x,M,C),(m!==n-1||l<Math.PI)&&p.push(M,A,C)}this.setIndex(p),this.setAttribute("position",new te(_,3)),this.setAttribute("normal",new te(g,3)),this.setAttribute("uv",new te(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cs extends ve{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new L,h=new L,f=new L;for(let p=0;p<=n;p++)for(let _=0;_<=r;_++){const g=_/r*s,d=p/n*Math.PI*2;h.x=(t+e*Math.cos(d))*Math.cos(g),h.y=(t+e*Math.cos(d))*Math.sin(g),h.z=e*Math.sin(d),a.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=r;_++){const g=(r+1)*p+_-1,d=(r+1)*(p-1)+_-1,m=(r+1)*(p-1)+_,y=(r+1)*p+_;o.push(g,d,y),o.push(d,m,y)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $s extends ve{constructor(t=new ed(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new it;let u=new L;const h=[],f=[],p=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new te(h,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(p,2));function g(){for(let x=0;x<e;x++)d(x);d(s===!1?e:0),y(),m()}function d(x){u=t.getPointAt(x/e,u);const M=o.normals[x],A=o.binormals[x];for(let C=0;C<=r;C++){const b=C/r*Math.PI*2,P=Math.sin(b),U=-Math.cos(b);l.x=U*M.x+P*A.x,l.y=U*M.y+P*A.y,l.z=U*M.z+P*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let M=1;M<=r;M++){const A=(r+1)*(x-1)+(M-1),C=(r+1)*x+(M-1),b=(r+1)*x+M,P=(r+1)*(x-1)+M;_.push(A,C,P),_.push(C,b,P)}}function y(){for(let x=0;x<=e;x++)for(let M=0;M<=r;M++)c.x=x/e,c.y=M/r,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new $s(new ta[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class oe extends pr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Df,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ma extends oe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Fh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class hM{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const fM=new hM;class Qc{constructor(t){this.manager=t!==void 0?t:fM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Qc.DEFAULT_MATERIAL_NAME="__DEFAULT";class dM extends Qc{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Fh.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Ls("img");function l(){u(),Fh.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class pM extends Qc{constructor(t){super(t)}load(t,e,n,r){const s=new Ve,o=new dM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class _a extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class mM extends _a{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const _l=new le,Bh=new L,zh=new L;class od{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bh),zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zh),e.updateMatrixWorld(),_l.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_l)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _M extends od{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Jo*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class gM extends _a{constructor(t,e,n=0,r=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new _M}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const kh=new le,gs=new L,gl=new L;class vM extends od{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),gs.setFromMatrixPosition(t.matrixWorld),n.position.copy(gs),gl.copy(n.position),gl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(gl),n.updateMatrixWorld(),r.makeTranslation(-gs.x,-gs.y,-gs.z),kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh)}}class tu extends _a{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new vM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class xM extends _a{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ad{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Gh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Gh(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fc);const MM={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Js{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const SM=new Xf(-1,1,1,-1,0,1);class yM extends ve{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}}const TM=new yM;class ld{constructor(t){this._mesh=new yt(TM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,SM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class EM extends Js{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof sn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=qc.clone(t.uniforms),this.material=new sn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ld(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Vh extends Js{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class bM extends Js{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class wM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new it);this._width=n.width,this._height=n.height,e=new hi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dr}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new EM(MM),this.copyPass.material.blending=Wn,this.clock=new ad}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vh!==void 0&&(o instanceof Vh?n=!0:o instanceof bM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class AM extends Js{constructor(t,e,n=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ot}render(t,e,n){const r=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}}const CM={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class RM extends Js{constructor(t,e,n){super(),this.scene=t,this.camera=e;const r=n.focus!==void 0?n.focus:1,s=n.aperture!==void 0?n.aperture:.025,o=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new hi(1,1,{minFilter:je,magFilter:je,type:dr}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Jf,this.materialDepth.depthPacking=Lf,this.materialDepth.blending=Wn;const a=CM,l=qc.clone(a.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=r,l.aspect.value=e.aspect,l.aperture.value=s,l.maxblur.value=o,l.nearClip.value=e.near,l.farClip.value=e.far,this.materialBokeh=new sn({defines:Object.assign({},a.defines),uniforms:l,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=l,this.fsQuad=new ld(this.materialBokeh),this._oldClearColor=new Ot}render(t,e,n){this.scene.overrideMaterial=this.materialDepth,t.getClearColor(this._oldClearColor);const r=t.getClearAlpha(),s=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this.renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this.fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(r),t.autoClear=s}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this.renderTargetDepth.setSize(t,e)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}function si(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function cd(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Os={duration:.5,overwrite:!1,delay:0},eu,Oe,fe,bn=1e8,re=1/bn,vc=Math.PI*2,PM=vc/4,LM=0,ud=Math.sqrt,DM=Math.cos,UM=Math.sin,De=function(t){return typeof t=="string"},Se=function(t){return typeof t=="function"},di=function(t){return typeof t=="number"},nu=function(t){return typeof t>"u"},Yn=function(t){return typeof t=="object"},tn=function(t){return t!==!1},iu=function(){return typeof window<"u"},Uo=function(t){return Se(t)||De(t)},hd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},He=Array.isArray,IM=/random\([^)]+\)/g,NM=/,\s*/g,Hh=/(?:-?\.?\d|\.)+/gi,fd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Or=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,vl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dd=/[+-]=-?[.\d]+/,OM=/[^,'"\[\]\s]+/gi,FM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pe,kn,xc,ru,xn={},ea={},pd,md=function(t){return(ea=Qr(t,xn))&&on},su=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Fs=function(t,e){return!e&&console.warn(t)},_d=function(t,e){return t&&(xn[t]=e)&&ea&&(ea[t]=e)||xn},Bs=function(){return 0},BM={suppressEvents:!0,isStart:!0,kill:!1},Go={suppressEvents:!0,kill:!1},zM={suppressEvents:!0},ou={},Pi=[],Mc={},gd,dn={},xl={},Wh=30,Vo=[],au="",lu=function(t){var e=t[0],n,r;if(Yn(e)||Se(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=Vo.length;r--&&!Vo[r].targetTest(e););n=Vo[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new zd(t[r],n)))||t.splice(r,1);return t},ar=function(t){return t._gsap||lu(wn(t))[0]._gsap},vd=function(t,e,n){return(n=t[e])&&Se(n)?t[e]():nu(n)&&t.getAttribute&&t.getAttribute(e)||n},en=function(t,e){return(t=t.split(",")).forEach(e)||t},Te=function(t){return Math.round(t*1e5)/1e5||0},de=function(t){return Math.round(t*1e7)/1e7||0},Hr=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},kM=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},na=function(){var t=Pi.length,e=Pi.slice(0),n,r;for(Mc={},Pi.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},cu=function(t){return!!(t._initted||t._startAt||t.add)},xd=function(t,e,n,r){Pi.length&&!Oe&&na(),t.render(e,n,!!(Oe&&e<0&&cu(t))),Pi.length&&!Oe&&na()},Md=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(OM).length<2?e:De(t)?t.trim():t},Sd=function(t){return t},Mn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},GM=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},Qr=function(t,e){for(var n in e)t[n]=e[n];return t},Xh=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Yn(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},ia=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},ws=function(t){var e=t.parent||pe,n=t.keyframes?GM(He(t.keyframes)):Mn;if(tn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},VM=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},yd=function(t,e,n,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},ga=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Ni=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},lr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},HM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Sc=function(t,e,n,r){return t._startAt&&(Oe?t._startAt.revert(Go):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},WM=function i(t){return!t||t._ts&&i(t.parent)},qh=function(t){return t._repeat?ts(t._tTime,t=t.duration()+t._rDelay)*t:0},ts=function(t,e){var n=Math.floor(t=de(t/e));return t&&n===t?n-1:n},ra=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},va=function(t){return t._end=de(t._start+(t._tDur/Math.abs(t._ts||t._rts||re)||0))},xa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=de(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),va(t),n._dirty||lr(n,t)),t},Td=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ra(t.rawTime(),e),(!e._dur||js(0,e.totalDuration(),n)-e._tTime>re)&&e.render(n,!0)),lr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-re}},Vn=function(t,e,n,r){return e.parent&&Ni(e),e._start=de((di(n)?n:n||t!==pe?Tn(t,n,e):t._time)+e._delay),e._end=de(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),yd(t,e,"_first","_last",t._sort?"_start":0),yc(e)||(t._recent=e),r||Td(t,e),t._ts<0&&xa(t,t._tTime),t},Ed=function(t,e){return(xn.ScrollTrigger||su("scrollTrigger",e))&&xn.ScrollTrigger.create(e,t)},bd=function(t,e,n,r,s){if(hu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Oe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&gd!==pn.frame)return Pi.push(t),t._lazy=[s,r],1},XM=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},yc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},qM=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&XM(t)&&!(!t._initted&&yc(t))||(t._ts<0||t._dp._ts<0)&&!yc(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=js(0,t._tDur,e),u=ts(l,a),t._yoyo&&u&1&&(o=1-o),u!==ts(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Oe||r||t._zTime===re||!e&&t._zTime){if(!t._initted&&bd(t,e,r,n,l))return;for(h=t._zTime,t._zTime=e||(n?re:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Sc(t,e,n,!0),t._onUpdate&&!n&&mn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&mn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ni(t,1),!n&&!Oe&&(mn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},YM=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},es=function(t,e,n,r){var s=t._repeat,o=de(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:de(o*(s+1)+t._rDelay*s):o,a>0&&!r&&xa(t,t._tTime=t._tDur*a),t.parent&&va(t),n||lr(t.parent,t),t},Yh=function(t){return t instanceof Je?lr(t):es(t,t._dur)},KM={_start:0,endTime:Bs,totalDuration:Bs},Tn=function i(t,e,n){var r=t.labels,s=t._recent||KM,o=t.duration()>=bn?s.endTime(!1):t._dur,a,l,c;return De(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(He(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},As=function(t,e,n){var r=di(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=tn(l.vars.inherit)&&l.parent;o.immediateRender=tn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new we(e[0],o,e[s+1])},Gi=function(t,e){return t||t===0?e(t):e},js=function(t,e,n){return n<t?t:n>e?e:n},ke=function(t,e){return!De(t)||!(e=FM.exec(t))?"":e[1]},ZM=function(t,e,n){return Gi(n,function(r){return js(t,e,r)})},Tc=[].slice,wd=function(t,e){return t&&Yn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Yn(t[0]))&&!t.nodeType&&t!==kn},$M=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return De(r)&&!e||wd(r,1)?(s=n).push.apply(s,wn(r)):n.push(r)})||n},wn=function(t,e,n){return fe&&!e&&fe.selector?fe.selector(t):De(t)&&!n&&(xc||!ns())?Tc.call((e||ru).querySelectorAll(t),0):He(t)?$M(t,n):wd(t)?Tc.call(t,0):t?[t]:[]},Ec=function(t){return t=wn(t)[0]||Fs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return wn(e,n.querySelectorAll?n:n===t?Fs("Invalid scope")||ru.createElement("div"):t)}},Ad=function(t){return t.sort(function(){return .5-Math.random()})},Cd=function(t){if(Se(t))return t;var e=Yn(t)?t:{each:t},n=cr(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,h=r;return De(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,p,_){var g=(_||e).length,d=o[g],m,y,x,M,A,C,b,P,U;if(!d){if(U=e.grid==="auto"?0:(e.grid||[1,bn])[1],!U){for(b=-bn;b<(b=_[U++].getBoundingClientRect().left)&&U<g;);U<g&&U--}for(d=o[g]=[],m=l?Math.min(U,g)*u-.5:r%U,y=U===bn?0:l?g*h/U-.5:r/U|0,b=0,P=bn,C=0;C<g;C++)x=C%U-m,M=y-(C/U|0),d[C]=A=c?Math.abs(c==="y"?M:x):ud(x*x+M*M),A>b&&(b=A),A<P&&(P=A);r==="random"&&Ad(d),d.max=b-P,d.min=P,d.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(U>g?g-1:c?c==="y"?g/U:U:Math.max(U,g/U))||0)*(r==="edges"?-1:1),d.b=g<0?s-g:s,d.u=ke(e.amount||e.each)||0,n=n&&g<0?cS(n):n}return g=(d[f]-d.min)/d.max||0,de(d.b+(n?n(g):g)*d.v)+d.u}},bc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=de(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(di(n)?0:ke(n))}},Rd=function(t,e){var n=He(t),r,s;return!n&&Yn(t)&&(r=n=t.radius||bn,t.values?(t=wn(t.values),(s=!di(t[0]))&&(r*=r)):t=bc(t.increment)),Gi(e,n?Se(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=bn,u=0,h=t.length,f,p;h--;)s?(f=t[h].x-a,p=t[h].y-l,f=f*f+p*p):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?t[u]:o,s||u===o||di(o)?u:u+ke(o)}:bc(t))},Pd=function(t,e,n,r){return Gi(He(t)?!e:n===!0?!!(n=0):!r,function(){return He(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},JM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},jM=function(t,e){return function(n){return t(parseFloat(n))+(e||ke(n))}},QM=function(t,e,n){return Dd(t,e,0,1,n)},Ld=function(t,e,n){return Gi(n,function(r){return t[~~e(r)]})},tS=function i(t,e,n){var r=e-t;return He(t)?Ld(t,i(0,t.length),e):Gi(n,function(s){return(r+(s-t)%r)%r+t})},eS=function i(t,e,n){var r=e-t,s=r*2;return He(t)?Ld(t,i(0,t.length-1),e):Gi(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},zs=function(t){return t.replace(IM,function(e){var n=e.indexOf("[")+1,r=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(NM);return Pd(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Dd=function(t,e,n,r,s){var o=e-t,a=r-n;return Gi(s,function(l){return n+((l-t)/o*a||0)})},nS=function i(t,e,n,r){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var o=De(t),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(He(t)&&!He(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(i(t[c-1],t[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=e}else r||(t=Qr(He(t)?[]:{},t));if(!u){for(l in e)uu.call(a,t,l,"get",e[l]);s=function(_){return pu(_,a)||(o?t.p:t)}}}return Gi(n,s)},Kh=function(t,e,n){var r=t.labels,s=bn,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},mn=function(t,e,n){var r=t.vars,s=r[e],o=fe,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&Pi.length&&na(),a&&(fe=a),u=l?s.apply(c,l):s.call(c),fe=o,u},Ms=function(t){return Ni(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Oe),t.progress()<1&&mn(t,"onInterrupt"),t},Fr,Ud=[],Id=function(t){if(t)if(t=!t.name&&t.default||t,iu()||t.headless){var e=t.name,n=Se(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Bs,render:pu,add:uu,kill:xS,modifier:vS,rawVars:0},o={targetTest:0,get:0,getSetter:du,aliases:{},register:0};if(ns(),t!==r){if(dn[e])return;Mn(r,Mn(ia(t,s),o)),Qr(r.prototype,Qr(s,ia(t,o))),dn[r.prop=e]=r,t.targetTest&&(Vo.push(r),ou[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}_d(e,r),t.register&&t.register(on,r,nn)}else Ud.push(t)},ie=255,Ss={aqua:[0,ie,ie],lime:[0,ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ie],navy:[0,0,128],white:[ie,ie,ie],olive:[128,128,0],yellow:[ie,ie,0],orange:[ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ie,0,0],pink:[ie,192,203],cyan:[0,ie,ie],transparent:[ie,ie,ie,0]},Ml=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ie+.5|0},Nd=function(t,e,n){var r=t?di(t)?[t>>16,t>>8&ie,t&ie]:0:Ss.black,s,o,a,l,c,u,h,f,p,_;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ss[t])r=Ss[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&ie,r&ie,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&ie,t&ie]}else if(t.substr(0,3)==="hsl"){if(r=_=t.match(Hh),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Ml(l+1/3,s,o),r[1]=Ml(l,s,o),r[2]=Ml(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(fd),n&&r.length<4&&(r[3]=1),r}else r=t.match(Hh)||Ss.transparent;r=r.map(Number)}return e&&!_&&(s=r[0]/ie,o=r[1]/ie,a=r[2]/ie,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Od=function(t){var e=[],n=[],r=-1;return t.split(Li).forEach(function(s){var o=s.match(Or)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},Zh=function(t,e,n){var r="",s=(t+r).match(Li),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=Nd(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Od(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(Li,"1").split(Or),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Li),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Li=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ss)i+="|"+t+"\\b";return new RegExp(i+")","gi")})(),iS=/hsl[a]?\(/,Fd=function(t){var e=t.join(" "),n;if(Li.lastIndex=0,Li.test(e))return n=iS.test(e),t[1]=Zh(t[1],n),t[0]=Zh(t[0],n,Od(t[1])),!0},ks,pn=(function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,p,_=function g(d){var m=i()-r,y=d===!0,x,M,A,C;if((m>t||m<0)&&(n+=m-e),r+=m,A=r-n,x=A-o,(x>0||y)&&(C=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=x+(x>=s?4:s-x),M=1),y||(l=c(g)),M)for(p=0;p<a.length;p++)a[p](A,f,C,d)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(d){return f/(1e3/(d||60))},wake:function(){pd&&(!xc&&iu()&&(kn=xc=window,ru=kn.document||{},xn.gsap=on,(kn.gsapVersions||(kn.gsapVersions=[])).push(on.version),md(ea||kn.GreenSockGlobals||!kn.gsap&&kn||{}),Ud.forEach(Id)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(d){return setTimeout(d,o-h.time*1e3+1|0)},ks=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ks=0,c=Bs},lagSmoothing:function(d,m){t=d||1/0,e=Math.min(m||33,t)},fps:function(d){s=1e3/(d||240),o=h.time*1e3+s},add:function(d,m,y){var x=m?function(M,A,C,b){d(M,A,C,b),h.remove(x)}:d;return h.remove(d),a[y?"unshift":"push"](x),ns(),x},remove:function(d,m){~(m=a.indexOf(d))&&a.splice(m,1)&&p>=m&&p--},_listeners:a},h})(),ns=function(){return!ks&&pn.wake()},Xt={},rS=/^[\d.\-M][\d.\-,\s]/,sS=/["']/g,oS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(sS,"").trim():+c,r=l.substr(a+1).trim();return e},aS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},lS=function(t){var e=(t+"").split("("),n=Xt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[oS(e[1])]:aS(t).split(",").map(Md)):Xt._CE&&rS.test(t)?Xt._CE("",t):n},cS=function(t){return function(e){return 1-t(1-e)}},cr=function(t,e){return t&&(Se(t)?t:Xt[t]||lS(t))||e},_r=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return en(t,function(a){Xt[a]=xn[a]=s,Xt[o=a.toLowerCase()]=n;for(var l in s)Xt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xt[a+"."+l]=s[l]}),s},Bd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Sl=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/vc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*UM((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Bd(a);return s=vc/s,l.config=function(c,u){return i(t,c,u)},l},yl=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Bd(n);return r.config=function(s){return i(t,s)},r};en("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;_r(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Xt.Linear.easeNone=Xt.none=Xt.Linear.easeIn;_r("Elastic",Sl("in"),Sl("out"),Sl());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};_r("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);_r("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});_r("Circ",function(i){return-(ud(1-i*i)-1)});_r("Sine",function(i){return i===1?1:-DM(i*PM)+1});_r("Back",yl("in"),yl("out"),yl());Xt.SteppedEase=Xt.steps=xn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-re;return function(a){return((r*js(0,o,a)|0)+s)*n}}};Os.ease=Xt["quad.out"];en("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return au+=i+","+i+"Params,"});var zd=function(t,e){this.id=LM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:vd,this.set=e?e.getSetter:du},Gs=(function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,es(this,+e.duration,1,1),this.data=e.data,fe&&(this._ctx=fe,fe.data.push(this)),ks||pn.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,es(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(ns(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(xa(this,n),!s._dp||s.parent||Td(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===re||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xd(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+qh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+qh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ts(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-re?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ra(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-re?0:this._rts,this.totalTime(js(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),va(this),HM(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ns(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==re&&(this._tTime-=re)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=de(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Vn(r,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ra(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=zM);var r=Oe;return Oe=n,cu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Oe=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Yh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Yh(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(Tn(this,n),tn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,tn(r)),this._dur||(this._zTime=-re),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-re:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-re,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-re)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=Se(n)?n:Sd,l=function(){var u=r.then;r.then=null,s&&s(),Se(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){Ms(this)},i})();Mn(Gs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-re,_prom:0,_ps:!1,_rts:1});var Je=(function(i){cd(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=tn(n.sortChildren),pe&&Vn(n.parent||pe,si(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ed(si(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return As(0,arguments,this),this},e.from=function(r,s,o){return As(1,arguments,this),this},e.fromTo=function(r,s,o,a){return As(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,ws(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new we(r,s,Tn(this,o),1),this},e.call=function(r,s,o){return Vn(this,we.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new we(r,o,Tn(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,ws(o).immediateRender=tn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,ws(a).immediateRender=tn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:de(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,p,_,g,d,m,y,x,M,A,C,b;if(this!==pe&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,M=this._start,x=this._ts,m=!x,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,d=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(d*100+r,s,o);if(f=de(u%d),u===l?(g=this._repeat,f=c):(A=de(u/d),g=~~A,g&&g===A&&(f=c,g--),f>c&&(f=c)),A=ts(this._tTime,d),!a&&this._tTime&&A!==g&&this._tTime-A*d-this._dur<=0&&(A=g),C&&g&1&&(f=c-f,b=1),g!==A&&!this._lock){var P=C&&A&1,U=P===(C&&g&1);if(g<A&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(b?0:de(g*d)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&mn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,A=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,U&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=YM(this,de(a),de(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!A&&(mn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=-re);break}}p=_}else{p=this._last;for(var v=r<0?r:f;p;){if(_=p._prev,(p._act||v<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(v-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(v-p._start)*p._ts,s,o||Oe&&cu(p)),f!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=v?-re:re);break}}p=_}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-re)._zTime=f>=a?1:-1,this._ts))return this._start=M,va(this),this.render(r,s,o);this._onUpdate&&!s&&mn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ni(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(mn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(di(s)||(s=Tn(this,s,r)),!(r instanceof Gs)){if(He(r))return r.forEach(function(a){return o.add(a,s)}),this;if(De(r))return this.addLabel(r,s);if(Se(r))r=we.delayedCall(0,r);else return this}return this!==r?Vn(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-bn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof we?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return De(r)?this.removeLabel(r):Se(r)?this.killTweensOf(r):(r.parent===this&&ga(this,r),r===this._recent&&(this._recent=this._last),lr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=de(pn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Tn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=we.delayedCall(0,s||Bs,o);return a.data="isPause",this._hasPause=1,Vn(this,a,Tn(this,r))},e.removePause=function(r){var s=this._first;for(r=Tn(this,r);s;)s._start===r&&s.data==="isPause"&&Ni(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)bi!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=wn(r),l=this._first,c=di(s),u;l;)l instanceof we?kM(l._targets,a)&&(c?(!bi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=Tn(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,_=we.to(o,Mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||re,onStart:function(){if(o.pause(),!p){var d=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==d&&es(_,d,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,Mn({startAt:{time:Tn(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Kh(this,Tn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Kh(this,Tn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+re)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=de(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return lr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),lr(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=bn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Vn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=de(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;es(o,o===pe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(pe._ts&&(xd(pe,ra(r,pe)),gd=pn.frame),pn.frame>=Wh){Wh+=vn.autoSleep||120;var s=pe._first;if((!s||!s._ts)&&vn.autoSleep&&pn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||pn.sleep()}}},t})(Gs);Mn(Je.prototype,{_lock:0,_hasPause:0,_forcing:0});var uS=function(t,e,n,r,s,o,a){var l=new nn(this._pt,t,e,0,1,Xd,null,s),c=0,u=0,h,f,p,_,g,d,m,y;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=zs(r)),o&&(y=[n,r],o(y,t,e),n=y[0],r=y[1]),f=n.match(vl)||[];h=vl.exec(r);)_=h[0],g=r.substring(c,h.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[u++]&&(d=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:d,c:_.charAt(1)==="="?Hr(d,_)-d:parseFloat(_)-d,m:p&&p<4?Math.round:0},c=vl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(dd.test(r)||m)&&(l.e=0),this._pt=l,l},uu=function(t,e,n,r,s,o,a,l,c,u){Se(r)&&(r=r(s||0,t,o));var h=t[e],f=n!=="get"?n:Se(h)?c?t[e.indexOf("set")||!Se(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,p=Se(h)?c?mS:Hd:fu,_;if(De(r)&&(~r.indexOf("random(")&&(r=zs(r)),r.charAt(1)==="="&&(_=Hr(f,r)+(ke(f)||0),(_||_===0)&&(r=_))),!u||f!==r||wc)return!isNaN(f*r)&&r!==""?(_=new nn(this._pt,t,e,+f||0,r-(f||0),typeof h=="boolean"?gS:Wd,0,p),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!h&&!(e in t)&&su(e,r),uS.call(this,t,e,f,r,p,l||vn.stringFilter,c))},hS=function(t,e,n,r,s){if(Se(t)&&(t=Cs(t,s,e,n,r)),!Yn(t)||t.style&&t.nodeType||He(t)||hd(t))return De(t)?Cs(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=Cs(t[a],s,e,n,r);return o},kd=function(t,e,n,r,s,o){var a,l,c,u;if(dn[t]&&(a=new dn[t]).init(s,a.rawVars?e[t]:hS(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new nn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Fr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},bi,wc,hu=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,p=r.autoRevert,_=t._dur,g=t._startAt,d=t._targets,m=t.parent,y=m&&m.data==="nested"?m.vars.targets:d,x=t._overwrite==="auto"&&!eu,M=t.timeline,A=r.easeReverse||h,C,b,P,U,v,T,F,O,k,W,B,q,H;if(M&&(!f||!s)&&(s="none"),t._ease=cr(s,Os.ease),t._rEase=A&&(cr(A)||t._ease),t._from=!M&&!!r.runBackwards,t._from&&(t.ratio=1),!M||f&&!r.stagger){if(O=d[0]?ar(d[0]).harness:0,q=O&&r[O.prop],C=ia(r,ou),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!p?g.render(-1,!0):g.revert(u&&_?Go:BM),g._lazy=0),o){if(Ni(t._startAt=we.set(d,Mn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&tn(l),startAt:null,delay:0,onUpdate:c&&function(){return mn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Oe||!a&&!p)&&t._startAt.revert(Go),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(a=!1),P=Mn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&tn(l),immediateRender:a,stagger:0,parent:m},C),q&&(P[O.prop]=q),Ni(t._startAt=we.set(d,P)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Oe?t._startAt.revert(Go):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,re,re);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&tn(l)||l&&!_,b=0;b<d.length;b++){if(v=d[b],F=v._gsap||lu(d)[b]._gsap,t._ptLookup[b]=W={},Mc[F.id]&&Pi.length&&na(),B=y===d?b:y.indexOf(v),O&&(k=new O).init(v,q||C,t,B,y)!==!1&&(t._pt=U=new nn(t._pt,v,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(ot){W[ot]=U}),k.priority&&(T=1)),!O||q)for(P in C)dn[P]&&(k=kd(P,C,t,B,v,y))?k.priority&&(T=1):W[P]=U=uu.call(t,v,P,"get",C[P],B,y,0,r.stringFilter);t._op&&t._op[b]&&t.kill(v,t._op[b]),x&&t._pt&&(bi=t,pe.killTweensOf(v,W,t.globalTime(e)),H=!t.parent,bi=0),t._pt&&l&&(Mc[F.id]=1)}T&&qd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,f&&e<=0&&M.render(bn,!0,!0)},fS=function(t,e,n,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,p;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,p=t._targets.length;p--;){if(u=f[p][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return wc=1,t.vars[e]="+=0",hu(t,a),wc=0,l?Fs(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Te(n)+ke(h.e)),h.b&&(h.b=u.s+ke(h.b))},dS=function(t,e){var n=t[0]?ar(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=Qr({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},pS=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(He(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Cs=function(t,e,n,r,s){return Se(t)?t.call(e,n,r,s):De(t)&&~t.indexOf("random(")?zs(t):t},Gd=au+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Vd={};en(Gd+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Vd[i]=1});var we=(function(i){cd(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:ws(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,d=l.scrollTrigger,m=r.parent||pe,y=(He(n)||hd(n)?di(n[0]):"length"in r)?[n]:wn(n),x,M,A,C,b,P,U,v;if(a._targets=y.length?lu(y):Fs("GSAP target "+n+" not found. https://gsap.com",!vn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||Uo(c)||Uo(u)){r=a.vars;var T=r.easeReverse||r.yoyoEase;if(x=a.timeline=new Je({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:y}),x.kill(),x.parent=x._dp=si(a),x._start=0,f||Uo(c)||Uo(u)){if(C=y.length,U=f&&Cd(f),Yn(f))for(b in f)~Gd.indexOf(b)&&(v||(v={}),v[b]=f[b]);for(M=0;M<C;M++)A=ia(r,Vd),A.stagger=0,T&&(A.easeReverse=T),v&&Qr(A,v),P=y[M],A.duration=+Cs(c,si(a),M,P,y),A.delay=(+Cs(u,si(a),M,P,y)||0)-a._delay,!f&&C===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(P,A,U?U(M,P,y):0),x._ease=Xt.none;x.duration()?c=u=0:a.timeline=0}else if(_){ws(Mn(x.vars.defaults,{ease:"none"})),x._ease=cr(_.ease||r.ease||"none");var F=0,O,k,W;if(He(_))_.forEach(function(B){return x.to(y,B,">")}),x.duration();else{A={};for(b in _)b==="ease"||b==="easeEach"||pS(b,_[b],A,_.easeEach);for(b in A)for(O=A[b].sort(function(B,q){return B.t-q.t}),F=0,M=0;M<O.length;M++)k=O[M],W={ease:k.e,duration:(k.t-(M?O[M-1].t:0))/100*c},W[b]=k.v,x.to(y,W,F),F+=W.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return p===!0&&!eu&&(bi=si(a),pe.killTweensOf(y),bi=0),Vn(m,si(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!_&&a._start===de(m._time)&&tn(h)&&WM(si(a))&&m.data!=="nested")&&(a._tTime=-re,a.render(Math.max(0,-u)||0)),d&&Ed(si(a),d),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-re&&!u?l:r<re?0:r,f,p,_,g,d,m,y,x;if(!c)qM(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(f=de(h%g),h===l?(_=this._repeat,f=c):(d=de(h/g),_=~~d,_&&_===d?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(f=c-f),d=ts(this._tTime,g),f===a&&!o&&this._initted&&_===d)return this._tTime=h,this;_!==d&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(de(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(bd(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==d))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var M=f<a;if(M!==this._inv){var A=M?a:c-a;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(M?-1:1)/A:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/c);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!d&&(mn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(y,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Sc(this,r,s,o),mn(this,"onUpdate")),this._repeat&&_!==d&&this.vars.onRepeat&&!s&&this.parent&&mn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Sc(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ni(this,1),!s&&!(u&&!a)&&(h||a||m)&&(mn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){ks||pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||hu(this,c),u=this._ease(c/this._dur),fS(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(xa(this,0),this.parent||yd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ms(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Oe),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,bi&&bi.vars.overwrite!==!0)._first||Ms(this),this.parent&&o!==this.timeline.totalDuration()&&es(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?wn(r):a,c=this._ptLookup,u=this._pt,h,f,p,_,g,d,m;if((!s||s==="all")&&VM(a,l))return s==="all"&&(this._pt=0),Ms(this);for(h=this._op=this._op||[],s!=="all"&&(De(s)&&(g={},en(s,function(y){return g[y]=1}),s=g),s=dS(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,_=f,p={}):(p=h[m]=h[m]||{},_=s);for(g in _)d=f&&f[g],d&&((!("kill"in d.d)||d.d.kill(g)===!0)&&ga(this,d,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&Ms(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return As(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return As(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return pe.killTweensOf(r,s,o)},t})(Gs);Mn(we.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});en("staggerTo,staggerFrom,staggerFromTo",function(i){we[i]=function(){var t=new Je,e=Tc.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var fu=function(t,e,n){return t[e]=n},Hd=function(t,e,n){return t[e](n)},mS=function(t,e,n,r){return t[e](r.fp,n)},_S=function(t,e,n){return t.setAttribute(e,n)},du=function(t,e){return Se(t[e])?Hd:nu(t[e])&&t.setAttribute?_S:fu},Wd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},gS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Xd=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},pu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},vS=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},xS=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?ga(this,e,"_pt"):e.dep||(n=1),e=r;return!n},MS=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},qd=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},nn=(function(){function i(e,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Wd,this.d=l||this,this.set=c||fu,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=MS,this.m=n,this.mt=s,this.tween=r},i})();en(au+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return ou[i]=1});xn.TweenMax=xn.TweenLite=we;xn.TimelineLite=xn.TimelineMax=Je;pe=new Je({sortChildren:!1,defaults:Os,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vn.stringFilter=Fd;var ur=[],Ho={},SS=[],$h=0,yS=0,Tl=function(t){return(Ho[t]||SS).map(function(e){return e()})},Ac=function(){var t=Date.now(),e=[];t-$h>2&&(Tl("matchMediaInit"),ur.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=kn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Tl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),$h=t,Tl("matchMedia"))},Yd=(function(){function i(e,n){this.selector=n&&Ec(n),this.data=[],this._r=[],this.isReverted=!1,this.id=yS++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){Se(n)&&(s=r,r=n,n=Se);var o=this,a=function(){var c=fe,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Ec(s)),fe=o,h=r.apply(o,arguments),Se(h)&&o._r.push(h),fe=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Se?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var r=fe;fe=null,n(this),fe=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof we&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Je?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof we)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ur.length;o--;)ur[o].id===this.id&&ur.splice(o,1)},t.revert=function(n){this.kill(n||{})},i})(),TS=(function(){function i(e){this.contexts=[],this.scope=e,fe&&fe.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){Yn(n)||(n={matches:n});var o=new Yd(0,s||this.scope),a=o.conditions={},l,c,u;fe&&!o.selector&&(o.selector=fe.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=kn.matchMedia(n[c]),l&&(ur.indexOf(o)<0&&ur.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ac):l.addEventListener("change",Ac)));return u&&r(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),sa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return Id(r)})},timeline:function(t){return new Je(t)},getTweensOf:function(t,e){return pe.getTweensOf(t,e)},getProperty:function(t,e,n,r){De(t)&&(t=wn(t)[0]);var s=ar(t||{}).get,o=n?Sd:Md;return n==="native"&&(n=""),t&&(e?o((dn[e]&&dn[e].get||s)(t,e,n,r)):function(a,l,c){return o((dn[a]&&dn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=wn(t),t.length>1){var r=t.map(function(u){return on.quickSetter(u,e,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}t=t[0]||{};var o=dn[e],a=ar(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Fr._pt=0,h.init(t,n?u+n:u,Fr,0,[t]),h.render(1,h),Fr._pt&&pu(1,Fr)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var r,s=on.to(t,Mn((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return pe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=cr(t.ease,Os.ease)),Xh(Os,t||{})},config:function(t){return Xh(vn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!dn[a]&&!xn[a]&&Fs(e+" effect requires "+a+" plugin.")}),xl[e]=function(a,l,c){return n(wn(a),Mn(l||{},s),c)},o&&(Je.prototype[e]=function(a,l,c){return this.add(xl[e](a,Yn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Xt[t]=cr(e)},parseEase:function(t,e){return arguments.length?cr(t,e):Xt},getById:function(t){return pe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Je(t),r,s;for(n.smoothChildTiming=tn(t.smoothChildTiming),pe.remove(n),n._dp=0,n._time=n._tTime=pe._time,r=pe._first;r;)s=r._next,(e||!(!r._dur&&r instanceof we&&r.vars.onComplete===r._targets[0]))&&Vn(n,r,r._start-r._delay),r=s;return Vn(pe,n,0),n},context:function(t,e){return t?new Yd(t,e):fe},matchMedia:function(t){return new TS(t)},matchMediaRefresh:function(){return ur.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||Ac()},addEventListener:function(t,e){var n=Ho[t]||(Ho[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ho[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:tS,wrapYoyo:eS,distribute:Cd,random:Pd,snap:Rd,normalize:QM,getUnit:ke,clamp:ZM,splitColor:Nd,toArray:wn,selector:Ec,mapRange:Dd,pipe:JM,unitize:jM,interpolate:nS,shuffle:Ad},install:md,effects:xl,ticker:pn,updateRoot:Je.updateRoot,plugins:dn,globalTimeline:pe,core:{PropTween:nn,globals:_d,Tween:we,Timeline:Je,Animation:Gs,getCache:ar,_removeLinkedListItem:ga,reverting:function(){return Oe},context:function(t){return t&&fe&&(fe.data.push(t),t._ctx=fe),fe},suppressOverwrites:function(t){return eu=t}}};en("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return sa[i]=we[i]});pn.add(Je.updateRoot);Fr=sa.to({},{duration:0});var ES=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},bS=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=ES(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},El=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(De(s)&&(l={},en(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}bS(a,s)}}}},on=sa.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Oe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},El("roundProps",bc),El("modifiers"),El("snap",Rd))||sa;we.version=Je.version=on.version="3.15.0";pd=1;iu()&&ns();Xt.Power0;Xt.Power1;Xt.Power2;Xt.Power3;Xt.Power4;Xt.Linear;Xt.Quad;Xt.Cubic;Xt.Quart;Xt.Quint;Xt.Strong;Xt.Elastic;Xt.Back;Xt.SteppedEase;Xt.Bounce;Xt.Sine;Xt.Expo;Xt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jh,wi,Wr,mu,or,jh,_u,wS=function(){return typeof window<"u"},pi={},er=180/Math.PI,Xr=Math.PI/180,Ur=Math.atan2,Qh=1e8,gu=/([A-Z])/g,AS=/(left|right|width|margin|padding|x)/i,CS=/[\s,\(]\S/,Hn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Cc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},RS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},PS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},LS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},DS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Kd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Zd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},US=function(t,e,n){return t.style[e]=n},IS=function(t,e,n){return t.style.setProperty(e,n)},NS=function(t,e,n){return t._gsap[e]=n},OS=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},FS=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},BS=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},_e="transform",rn=_e+"Origin",zS=function i(t,e){var n=this,r=this.target,s=r.style,o=r._gsap;if(t in pi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Hn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=oi(r,a)}):this.tfm[t]=o.x?o[t]:oi(r,t),t===rn&&(this.tfm.zOrigin=o.zOrigin);else return Hn.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(_e)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(rn,e,"")),t=_e}(s||e)&&this.props.push(t,e,s[t])},$d=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},kS=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(gu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=_u(),(!s||!s.isStart)&&!n[_e]&&($d(n),r.zOrigin&&n[rn]&&(n[rn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Jd=function(t,e){var n={target:t,props:[],revert:kS,save:zS};return t._gsap||on.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return n.save(r)}),n},jd,Rc=function(t,e){var n=wi.createElementNS?wi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):wi.createElement(t);return n&&n.style?n:wi.createElement(t)},_n=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(gu,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,is(e)||e,1)||""},tf="O,Moz,ms,Ms,Webkit".split(","),is=function(t,e,n){var r=e||or,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(tf[o]+t in s););return o<0?null:(o===3?"ms":o>=0?tf[o]:"")+t},Pc=function(){wS()&&window.document&&(Jh=window,wi=Jh.document,Wr=wi.documentElement,or=Rc("div")||{style:{}},Rc("div"),_e=is(_e),rn=_e+"Origin",or.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jd=!!is("perspective"),_u=on.core.reverting,mu=1)},ef=function(t){var e=t.ownerSVGElement,n=Rc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Wr.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Wr.removeChild(n),s},nf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Qd=function(t){var e,n;try{e=t.getBBox()}catch{e=ef(t),n=1}return e&&(e.width||e.height)||n||(e=ef(t)),e&&!e.width&&!e.x&&!e.y?{x:+nf(t,["x","cx","x1"])||0,y:+nf(t,["y","cy","y1"])||0,width:0,height:0}:e},tp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Qd(t))},Oi=function(t,e){if(e){var n=t.style,r;e in pi&&e!==rn&&(e=_e),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(gu,"-$1").toLowerCase())):n.removeAttribute(e)}},Ai=function(t,e,n,r,s,o){var a=new nn(t._pt,e,n,0,1,o?Zd:Kd);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},rf={deg:1,rad:1,turn:1},GS={grid:1,flex:1},Fi=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=or.style,l=AS.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",_,g,d,m;if(r===o||!s||rf[r]||rf[o])return s;if(o!=="px"&&!f&&(s=i(t,e,n,"px")),m=t.getCTM&&tp(t),(p||o==="%")&&(pi[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[u],Te(p?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:r),g=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===wi||!g.appendChild)&&(g=wi.body),d=g._gsap,d&&p&&d.width&&l&&d.time===pn.time&&!d.uncache)return Te(s/d.width*h);if(p&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+r,_=t[u],y?t.style[e]=y:Oi(t,e)}else(p||o==="%")&&!GS[_n(g,"display")]&&(a.position=_n(t,"position")),g===t&&(a.position="static"),g.appendChild(or),_=or[u],g.removeChild(or),a.position="absolute";return l&&p&&(d=ar(g),d.time=pn.time,d.width=g[u]),Te(f?_*s/h:_&&s?h/_*s:0)},oi=function(t,e,n,r){var s;return mu||Pc(),e in Hn&&e!=="transform"&&(e=Hn[e],~e.indexOf(",")&&(e=e.split(",")[0])),pi[e]&&e!=="transform"?(s=Hs(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:aa(_n(t,rn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=oa[e]&&oa[e](t,e,n)||_n(t,e)||vd(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Fi(t,e,s,n)+n:s},VS=function(t,e,n,r){if(!n||n==="none"){var s=is(e,t,1),o=s&&_n(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=_n(t,"borderTopColor"))}var a=new nn(this._pt,t.style,e,0,1,Xd),l=0,c=0,u,h,f,p,_,g,d,m,y,x,M,A;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=_n(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=t.style[e],t.style[e]=r,r=_n(t,e)||r,g?t.style[e]=g:Oi(t,e)),u=[n,r],Fd(u),n=u[0],r=u[1],f=n.match(Or)||[],A=r.match(Or)||[],A.length){for(;h=Or.exec(r);)d=h[0],y=r.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),d!==(g=f[c++]||"")&&(p=parseFloat(g)||0,M=g.substr((p+"").length),d.charAt(1)==="="&&(d=Hr(p,d)+M),m=parseFloat(d),x=d.substr((m+"").length),l=Or.lastIndex-x.length,x||(x=x||vn.units[e]||M,l===r.length&&(r+=x,a.e+=x)),M!==x&&(p=Fi(t,e,g,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:p,c:m-p,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?Zd:Kd;return dd.test(r)&&(a.e=0),this._pt=a,a},sf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},HS=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=sf[n]||n,e[1]=sf[r]||r,e.join(" ")},WS=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],pi[a]&&(l=1,a=a==="transformOrigin"?rn:_e),Oi(n,a);l&&(Oi(n,_e),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Hs(n,1),o.uncache=1,$d(r)))}},oa={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new nn(t._pt,e,n,0,0,WS);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},Vs=[1,0,0,1,0,0],ep={},np=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},of=function(t){var e=_n(t,_e);return np(e)?Vs:e.substr(7).match(fd).map(Te)},vu=function(t,e){var n=t._gsap||ar(t),r=t.style,s=of(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Vs:s):(s===Vs&&!t.offsetParent&&t!==Wr&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Wr.appendChild(t)),s=of(t),l?r.display=l:Oi(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Wr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Lc=function(t,e,n,r,s,o){var a=t._gsap,l=s||vu(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],_=l[1],g=l[2],d=l[3],m=l[4],y=l[5],x=e.split(" "),M=parseFloat(x[0])||0,A=parseFloat(x[1])||0,C,b,P,U;n?l!==Vs&&(b=p*d-_*g)&&(P=M*(d/b)+A*(-g/b)+(g*y-d*m)/b,U=M*(-_/b)+A*(p/b)-(p*y-_*m)/b,M=P,A=U):(C=Qd(t),M=C.x+(~x[0].indexOf("%")?M/100*C.width:M),A=C.y+(~(x[1]||x[0]).indexOf("%")?A/100*C.height:A)),r||r!==!1&&a.smooth?(m=M-c,y=A-u,a.xOffset=h+(m*p+y*g)-m,a.yOffset=f+(m*_+y*d)-y):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=A,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[rn]="0px 0px",o&&(Ai(o,a,"xOrigin",c,M),Ai(o,a,"yOrigin",u,A),Ai(o,a,"xOffset",h,a.xOffset),Ai(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+A)},Hs=function(t,e){var n=t._gsap||new zd(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=_n(t,rn)||"0",u,h,f,p,_,g,d,m,y,x,M,A,C,b,P,U,v,T,F,O,k,W,B,q,H,ot,ut,ft,Ft,Wt,Y,Q;return u=h=f=g=d=m=y=x=M=0,p=_=1,n.svg=!!(t.getCTM&&tp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[_e]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_e]!=="none"?l[_e]:"")),r.scale=r.rotate=r.translate="none"),b=vu(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",q=""):q=!e&&t.getAttribute("data-svg-origin"),Lc(t,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,C=n.yOrigin||0,b!==Vs&&(T=b[0],F=b[1],O=b[2],k=b[3],u=W=b[4],h=B=b[5],b.length===6?(p=Math.sqrt(T*T+F*F),_=Math.sqrt(k*k+O*O),g=T||F?Ur(F,T)*er:0,y=O||k?Ur(O,k)*er+g:0,y&&(_*=Math.abs(Math.cos(y*Xr))),n.svg&&(u-=A-(A*T+C*O),h-=C-(A*F+C*k))):(Q=b[6],Wt=b[7],ut=b[8],ft=b[9],Ft=b[10],Y=b[11],u=b[12],h=b[13],f=b[14],P=Ur(Q,Ft),d=P*er,P&&(U=Math.cos(-P),v=Math.sin(-P),q=W*U+ut*v,H=B*U+ft*v,ot=Q*U+Ft*v,ut=W*-v+ut*U,ft=B*-v+ft*U,Ft=Q*-v+Ft*U,Y=Wt*-v+Y*U,W=q,B=H,Q=ot),P=Ur(-O,Ft),m=P*er,P&&(U=Math.cos(-P),v=Math.sin(-P),q=T*U-ut*v,H=F*U-ft*v,ot=O*U-Ft*v,Y=k*v+Y*U,T=q,F=H,O=ot),P=Ur(F,T),g=P*er,P&&(U=Math.cos(P),v=Math.sin(P),q=T*U+F*v,H=W*U+B*v,F=F*U-T*v,B=B*U-W*v,T=q,W=H),d&&Math.abs(d)+Math.abs(g)>359.9&&(d=g=0,m=180-m),p=Te(Math.sqrt(T*T+F*F+O*O)),_=Te(Math.sqrt(B*B+Q*Q)),P=Ur(W,B),y=Math.abs(P)>2e-4?P*er:0,M=Y?1/(Y<0?-Y:Y):0),n.svg&&(q=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!np(_n(t,_e)),q&&t.setAttribute("transform",q))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(p*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Te(p),n.scaleY=Te(_),n.rotation=Te(g)+a,n.rotationX=Te(d)+a,n.rotationY=Te(m)+a,n.skewX=y+a,n.skewY=x+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[rn]=aa(c)),n.xOffset=n.yOffset=0,n.force3D=vn.force3D,n.renderTransform=n.svg?qS:jd?ip:XS,n.uncache=0,n},aa=function(t){return(t=t.split(" "))[0]+" "+t[1]},bl=function(t,e,n){var r=ke(e);return Te(parseFloat(e)+parseFloat(Fi(t,"x",n+"px",r)))+r},XS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,ip(t,e)},Ji="0deg",vs="0px",ji=") ",ip=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,d=n.transformPerspective,m=n.force3D,y=n.target,x=n.zOrigin,M="",A=m==="auto"&&t&&t!==1||m===!0;if(x&&(h!==Ji||u!==Ji)){var C=parseFloat(u)*Xr,b=Math.sin(C),P=Math.cos(C),U;C=parseFloat(h)*Xr,U=Math.cos(C),o=bl(y,o,b*U*-x),a=bl(y,a,-Math.sin(C)*-x),l=bl(y,l,P*U*-x+x)}d!==vs&&(M+="perspective("+d+ji),(r||s)&&(M+="translate("+r+"%, "+s+"%) "),(A||o!==vs||a!==vs||l!==vs)&&(M+=l!==vs||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ji),c!==Ji&&(M+="rotate("+c+ji),u!==Ji&&(M+="rotateY("+u+ji),h!==Ji&&(M+="rotateX("+h+ji),(f!==Ji||p!==Ji)&&(M+="skew("+f+", "+p+ji),(_!==1||g!==1)&&(M+="scale("+_+", "+g+ji),y.style[_e]=M||"translate(0, 0)"},qS=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,d=n.xOffset,m=n.yOffset,y=n.forceCSS,x=parseFloat(o),M=parseFloat(a),A,C,b,P,U;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Xr,c*=Xr,A=Math.cos(l)*h,C=Math.sin(l)*h,b=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Xr,U=Math.tan(c-u),U=Math.sqrt(1+U*U),b*=U,P*=U,u&&(U=Math.tan(u),U=Math.sqrt(1+U*U),A*=U,C*=U)),A=Te(A),C=Te(C),b=Te(b),P=Te(P)):(A=h,P=f,C=b=0),(x&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(x=Fi(p,"x",o,"px"),M=Fi(p,"y",a,"px")),(_||g||d||m)&&(x=Te(x+_-(_*A+g*b)+d),M=Te(M+g-(_*C+g*P)+m)),(r||s)&&(U=p.getBBox(),x=Te(x+r/100*U.width),M=Te(M+s/100*U.height)),U="matrix("+A+","+C+","+b+","+P+","+x+","+M+")",p.setAttribute("transform",U),y&&(p.style[_e]=U)},YS=function(t,e,n,r,s){var o=360,a=De(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?er:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Qh)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Qh)%o-~~(c/o)*o)),t._pt=f=new nn(t._pt,e,n,r,c,RS),f.e=u,f.u="deg",t._props.push(n),f},af=function(t,e){for(var n in e)t[n]=e[n];return t},KS=function(t,e,n){var r=af({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,p,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[_e]=e,a=Hs(n,1),Oi(n,_e),n.setAttribute("transform",c)):(c=getComputedStyle(n)[_e],o[_e]=e,a=Hs(n,1),o[_e]=c);for(l in pi)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=ke(c),_=ke(u),h=p!==_?Fi(n,l,c,_):parseFloat(c),f=parseFloat(u),t._pt=new nn(t._pt,a,l,h,f-h,Cc),t._pt.u=_||0,t._props.push(l));af(a,r)};en("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});oa[t>1?"border"+i:i]=function(a,l,c,u,h){var f,p;if(arguments.length<4)return f=o.map(function(_){return oi(a,_,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},o.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,p,h)}});var rp={name:"css",register:Pc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,p,_,g,d,m,y,x,M,A,C,b,P,U;mu||Pc(),this.styles=this.styles||Jd(t),P=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(dn[g]&&kd(g,e,n,r,t,s)))){if(p=typeof u,_=oa[g],p==="function"&&(u=u.call(n,r,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=zs(u)),_)_(this,t,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",Li.lastIndex=0,Li.test(c)||(d=ke(c),m=ke(u),m?d!==m&&(c=Fi(t,g,c,m)+m):d&&(u+=d)),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,t,s):l[g],De(c)&&~c.indexOf("random(")&&(c=zs(c)),ke(c+"")||c==="auto"||(c+=vn.units[g]||ke(oi(t,g))||""),(c+"").charAt(1)==="="&&(c=oi(t,g))):c=oi(t,g),f=parseFloat(c),y=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in Hn&&(g==="autoAlpha"&&(f===1&&oi(t,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),Ai(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Hn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in pi,x){if(this.styles.save(g),U=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=_n(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=u,u=_n(t,"perspective"),v?t.style.perspective=v:Oi(t,"perspective")}h=parseFloat(u)}if(M||(A=t._gsap,A.renderTransform&&!e.parseTransform||Hs(t,e.parseTransform),C=e.smoothOrigin!==!1&&A.smooth,M=this._pt=new nn(this._pt,a,_e,0,1,A.renderTransform,A,0,-1),M.dep=1),g==="scale")this._pt=new nn(this._pt,A,"scaleY",A.scaleY,(y?Hr(A.scaleY,y+h):h)-A.scaleY||0,Cc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(rn,0,a[rn]),u=HS(u),A.svg?Lc(t,u,0,C,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&Ai(this,A,"zOrigin",A.zOrigin,m),Ai(this,a,g,aa(c),aa(u)));continue}else if(g==="svgOrigin"){Lc(t,u,1,C,0,this);continue}else if(g in ep){YS(this,A,g,f,y?Hr(f,y+u):u);continue}else if(g==="smoothOrigin"){Ai(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){KS(this,u,t);continue}}else g in a||(g=is(g)||g);if(x||(h||h===0)&&(f||f===0)&&!CS.test(u)&&g in a)d=(c+"").substr((f+"").length),h||(h=0),m=ke(u)||(g in vn.units?vn.units[g]:d),d!==m&&(f=Fi(t,g,c,m)),this._pt=new nn(this._pt,x?A:a,g,f,(y?Hr(f,y+h):h)-f,!x&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?DS:Cc),this._pt.u=m||0,x&&U!==u?(this._pt.b=c,this._pt.e=U,this._pt.r=LS):d!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=PS);else if(g in a)VS.call(this,t,g,c,y?y+u:u);else if(g in t)this.add(t,g,c||t[g],y?y+u:u,r,s);else if(g!=="parseTransform"){su(g,u);continue}x||(g in a?P.push(g,0,a[g]):typeof t[g]=="function"?P.push(g,2,t[g]()):P.push(g,1,c||t[g])),o.push(g)}}b&&qd(this)},render:function(t,e){if(e.tween._time||!_u())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:oi,aliases:Hn,getSetter:function(t,e,n){var r=Hn[e];return r&&r.indexOf(",")<0&&(e=r),e in pi&&e!==rn&&(t._gsap.x||oi(t,"x"))?n&&jh===n?e==="scale"?OS:NS:(jh=n||{})&&(e==="scale"?FS:BS):t.style&&!nu(t.style[e])?US:~e.indexOf("-")?IS:du(t,e)},core:{_removeProperty:Oi,_getMatrix:vu}};on.utils.checkPrefix=is;on.core.getStyleSaver=Jd;(function(i,t,e,n){var r=en(i+","+t+","+e,function(s){pi[s]=1});en(t,function(s){vn.units[s]="deg",ep[s]=1}),Hn[r[13]]=i+","+t,en(n,function(s){var o=s.split(":");Hn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");en("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){vn.units[i]="px"});on.registerPlugin(rp);var Ie=on.registerPlugin(rp)||on;Ie.core.Tween;const ZS="/assets/hyg-logo-CaMRvg6g.png",la=document.querySelector("#scene"),Bt={loader:document.querySelector(".loader"),intro:document.querySelector(".intro"),enter:document.querySelector(".enter"),story:document.querySelector(".story-ui"),prev:document.querySelector(".control--prev"),next:document.querySelector(".control--next"),current:document.querySelector(".page-current"),total:document.querySelector(".page-total"),title:document.querySelector(".chapter__title"),chapter:document.querySelector(".chapter__index"),chapterDots:[...document.querySelectorAll(".chapter-rail li")],addPhoto:document.querySelector(".add-photo"),photoInput:document.querySelector(".photo-input"),photoStrip:document.querySelector(".photo-strip"),editPage:document.querySelector(".edit-page"),settings:document.querySelector(".settings-button"),closeBook:document.querySelector(".close-book"),toast:document.querySelector(".toast")},Rt=matchMedia("(prefers-reduced-motion: reduce)").matches,he=matchMedia("(max-width: 760px)").matches,Ws=!he&&devicePixelRatio<=2,an=new Px;an.background=new Ot(14675702);an.fog=new Zc(15332600,he?.005:.003);const Cn=new Rx({canvas:la,antialias:Ws,alpha:!1,powerPreference:"high-performance"});Cn.setPixelRatio(Math.min(devicePixelRatio,he?1.35:1.8));Cn.setSize(innerWidth,innerHeight);Cn.shadowMap.enabled=!0;Cn.shadowMap.type=gf;Cn.outputColorSpace=fn;Cn.toneMapping=xf;Cn.toneMappingExposure=1.42;const se=new $e(he?40:32,innerWidth/innerHeight,.1,80);se.position.set(he?-.7:-1.05,he?.85:.9,he?18.4:16.8);an.add(se);const Xs={normal:he?40:32,close:he?46:40},Ma=new wM(Cn);Ma.addPass(new AM(an,se));let lf;Ws&&(lf=new RM(an,se,{focus:14.2,aperture:12e-5,maxblur:.005}),Ma.addPass(lf));const xe=new Qe;xe.rotation.x=0;xe.rotation.z=-.018;const ca={closed:he?{x:-2.45,y:1.3}:{x:-2.6,y:.25},open:he?{x:0,y:.65}:{x:0,y:0}};xe.position.set(ca.closed.x,ca.closed.y,0);an.add(xe);const ci={closed:he?{x:-.35,y:.1,z:16.1}:{x:-.55,y:.18,z:15.45},establish:he?{x:-.7,y:.85,z:18.4}:{x:-1.05,y:.9,z:16.8},coverOpen:he?{x:.85,y:.05,z:14.45}:{x:1.55,y:.35,z:12.95},imageZoom:he?{x:0,y:0,z:7.35}:{x:0,y:0,z:4.95},flipWide:he?{x:.12,y:.16,z:17.35}:{x:.12,y:.56,z:16.35},leftImageZoom:he?{x:0,y:0,z:7.25}:{x:0,y:0,z:4.9},spreadZoom:he?{x:0,y:0,z:7.45}:{x:0,y:0,z:5.15},pageTurn(i=!0){return he?{x:i?-.74:.74,y:-.04,z:15.15}:{x:i?-1.65:2,y:.24,z:13.65}}};function $S(i,t,e,n=0,r="power2.inOut"){return i.to(se.position,{...t,duration:e,ease:r},n)}const sp=Cn.capabilities.getMaxAnisotropy();function Vi(i,t=1024){const e=document.createElement("canvas");e.width=e.height=t;const n=e.getContext("2d");i(n,t);const r=new Ux(e);return r.colorSpace=fn,r.anisotropy=Math.min(8,sp),r}function gr(i,t,e=.08){const n=i.getImageData(0,0,t,t);for(let r=0;r<n.data.length;r+=4){const s=Math.random()*45-22;n.data[r]+=s,n.data[r+1]+=s*.82,n.data[r+2]+=s*.55,n.data[r+3]=Math.max(n.data[r+3],e*255)}i.putImageData(n,0,0)}function JS(i){let t=i>>>0;return function(){return t=t*1664525+1013904223>>>0,t/4294967296}}function jS(i,t){const e=Math.random;Math.random=JS(i);try{return t()}finally{Math.random=e}}const QS=50,ty=he?512:640,cf=[{chapter:"The Journey Begins",date:"14 May · 1718",title:"Beyond the Known Sea",quote:"A brave heart is the truest compass when every chart has failed.",photo:"THE BLACK GULL",tone:["#435654","#c29a5c"]},{chapter:"Dead Man’s Passage",date:"2 June · 1718",title:"Through Devil’s Teeth",quote:"We sailed where the rocks rose like fangs and the sea spoke in thunder.",photo:"THE NARROW PASS",tone:["#3f4d4a","#a98250"]},{chapter:"The Sunken Isle",date:"19 June · 1718",title:"Land Beneath the Mist",quote:"At dawn the island appeared, as if the ocean had dreamed it overnight.",photo:"CROW ISLAND",tone:["#53604b","#c4a165"]},{chapter:"The Captain’s Mark",date:"21 June · 1718",title:"Ink, Blood & Promise",quote:"Three crosses beneath the crooked palm. One grave. One fortune.",photo:"THE SECRET COVE",tone:["#5d4637","#b58b55"]},{chapter:"Buried Fortune",date:"24 June · 1718",title:"Where the Compass Sleeps",quote:"Gold has a voice of its own. Wise sailors know when not to answer.",photo:"FORTUNE FOUND",tone:["#4b5142","#c7a858"]},{chapter:"Homeward Bound",date:"7 July · 1718",title:"The Long Tide Home",quote:"We returned with lighter pockets, heavier hearts, and a story worth keeping.",photo:"LAST LIGHT",tone:["#3d4c50","#b9905c"]}],rs=Array.from({length:QS},(i,t)=>{const e=cf[t%cf.length],n=String(t+1).padStart(3,"0");return{...e,chapter:`${e.chapter} ${n}`,title:`${e.title} ${n}`,photo:`${e.photo} ${n}`}}),wl=document.querySelector(".chapter-rail ol");wl&&(wl.innerHTML=rs.map((i,t)=>`<li>${String(t+1).padStart(2,"0")}</li>`).join(""),Bt.chapterDots=[...wl.querySelectorAll("li")]);function Rs(i,t,e,n){i.save(),i.translate(t,e),i.strokeStyle="rgba(63,37,18,.7)",i.fillStyle="rgba(63,37,18,.58)",i.lineWidth=2,i.beginPath(),i.arc(0,0,n,0,Math.PI*2),i.stroke(),i.beginPath(),i.arc(0,0,n*.78,0,Math.PI*2),i.stroke();for(let r=0;r<16;r++)i.rotate(Math.PI/8),i.beginPath(),i.moveTo(0,-n*(r%2?.55:.94)),i.lineTo(-n*.07,0),i.lineTo(n*.07,0),i.closePath(),r%2===0?i.fill():i.stroke();i.font=`600 ${n*.22}px Georgia`,i.textAlign="center",i.fillText("N",0,-n-12),i.restore()}function op(i,t,e,n,r=.65){i.save(),i.translate(t,e),i.globalAlpha=r,i.strokeStyle="#3b2616",i.fillStyle="#3b2616",i.lineCap="round",i.lineWidth=n*.075,i.beginPath(),i.moveTo(-n*.38,-n*.32),i.lineTo(n*.38,n*.32),i.moveTo(n*.38,-n*.32),i.lineTo(-n*.38,n*.32),i.stroke(),[-1,1].forEach(s=>{i.beginPath(),i.arc(s*n*.38,s*n*.32,n*.09,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(-s*n*.38,s*n*.32,n*.09,0,Math.PI*2),i.fill()}),i.beginPath(),i.arc(0,-n*.12,n*.29,0,Math.PI*2),i.fill(),i.fillRect(-n*.2,n*.05,n*.4,n*.27),i.fillStyle="#b99b66",i.beginPath(),i.ellipse(-n*.1,-n*.15,n*.065,n*.085,0,0,Math.PI*2),i.ellipse(n*.1,-n*.15,n*.065,n*.085,0,0,Math.PI*2),i.fill(),i.beginPath(),i.moveTo(0,-n*.03),i.lineTo(-n*.045,n*.07),i.lineTo(n*.045,n*.07),i.closePath(),i.fill(),i.strokeStyle="#b99b66",i.lineWidth=n*.025;for(let s=-2;s<=2;s++)i.beginPath(),i.moveTo(s*n*.055,n*.1),i.lineTo(s*n*.055,n*.28),i.stroke();i.restore()}function ey(i,t,e,n){i.save(),i.translate(t,e),i.strokeStyle="#4a2e18",i.lineWidth=n*.06,i.lineCap="round",i.lineJoin="round",i.beginPath(),i.arc(0,-n*.43,n*.1,0,Math.PI*2),i.moveTo(0,-n*.33),i.lineTo(0,n*.36),i.moveTo(-n*.28,-n*.18),i.lineTo(n*.28,-n*.18),i.moveTo(-n*.4,n*.12),i.bezierCurveTo(-n*.34,n*.45,-n*.1,n*.52,0,n*.58),i.bezierCurveTo(n*.1,n*.52,n*.34,n*.45,n*.4,n*.12),i.moveTo(-n*.4,n*.12),i.lineTo(-n*.48,n*.27),i.moveTo(n*.4,n*.12),i.lineTo(n*.48,n*.27),i.stroke(),i.restore()}function Dc(i,t,e){i.save(),i.strokeStyle="rgba(72,40,20,.55)",i.lineWidth=5,i.setLineDash([14,13]),i.beginPath(),i.moveTo(90,t*.7),i.bezierCurveTo(t*.3,t*.52,t*.45,t*.84,t*.7,t*.62),i.bezierCurveTo(t*.8,t*.54,t*.82,t*.4,t*.9,t*.37),i.stroke(),i.setLineDash([]),i.strokeStyle="rgba(93,28,16,.72)",i.lineWidth=8;const n=t*.9,r=t*.36;i.beginPath(),i.moveTo(n-20,r-20),i.lineTo(n+20,r+20),i.moveTo(n+20,r-20),i.lineTo(n-20,r+20),i.stroke(),i.fillStyle="rgba(48,32,18,.28)";for(let s=0;s<5;s++){const o=110+s*145,a=500+Math.sin(s*2+e)*45;i.beginPath(),i.ellipse(o,a,55,22,-.2,0,Math.PI*2),i.fill()}i.restore()}function Al(i,t,e,n,r,s,o,a=null){i.save(),i.translate(t+n/2,e+r/2),i.rotate((o%2?-1:1)*.025),i.translate(-n/2,-r/2),i.shadowColor="rgba(50,30,15,.32)",i.shadowBlur=18,i.shadowOffsetY=10,i.fillStyle="#e5d7b9",i.fillRect(-14,-14,n+28,r+54),i.shadowColor="transparent";const l=i.createLinearGradient(0,0,n,r);if(l.addColorStop(0,s.tone[0]),l.addColorStop(1,s.tone[1]),i.fillStyle=l,i.fillRect(0,0,n,r),a){const c=a.width/a.height,u=n/r;let h=0,f=0,p=a.width,_=a.height;c>u?(p=a.height*u,h=(a.width-p)/2):(_=a.width/u,f=(a.height-_)/2),i.filter="brightness(1.2) contrast(1.06) saturate(1.04)",i.drawImage(a,h,f,p,_,0,0,n,r),i.filter="none"}else{i.globalAlpha=.55,i.fillStyle="#e0c691",i.beginPath(),i.arc(n*.76,r*.22,n*.1,0,Math.PI*2),i.fill(),i.globalAlpha=.82,i.strokeStyle="#29251f",i.fillStyle="#29251f",i.lineWidth=7,i.beginPath(),i.moveTo(n*.22,r*.68),i.lineTo(n*.8,r*.68),i.lineTo(n*.69,r*.84),i.lineTo(n*.34,r*.84),i.closePath(),i.fill(),i.beginPath(),i.moveTo(n*.48,r*.68),i.lineTo(n*.48,r*.2),i.stroke(),i.beginPath(),i.moveTo(n*.5,r*.25),i.lineTo(n*.72,r*.48),i.lineTo(n*.5,r*.5),i.closePath(),i.fill(),i.globalAlpha=.5,i.beginPath(),i.moveTo(n*.46,r*.3),i.lineTo(n*.28,r*.52),i.lineTo(n*.46,r*.56),i.closePath(),i.fill(),i.globalAlpha=.42,i.strokeStyle="#eee0bd",i.lineWidth=4;for(let c=0;c<4;c++)i.beginPath(),i.moveTo(0,r*(.82+c*.045)),i.bezierCurveTo(n*.25,r*(.77+c*.045),n*.55,r*(.88+c*.03),n,r*(.8+c*.04)),i.stroke();i.globalAlpha=.17;for(let c=0;c<120;c++)i.fillStyle=Math.random()>.5?"#fff":"#000",i.fillRect(Math.random()*n,Math.random()*r,Math.random()*3+1,1)}i.globalAlpha=1,i.fillStyle="#403326",i.textAlign="center",i.font="600 15px Montserrat",i.fillText(s.photo,n/2,r+31),i.restore()}function ny(i,t,e,n,r){i.save(),i.translate(t,e),i.rotate(-.025),i.shadowColor="rgba(42,24,11,.35)",i.shadowBlur=15,i.shadowOffsetY=9,i.fillStyle="#c7a773",i.beginPath(),i.moveTo(8,8);for(let s=35;s<n;s+=35)i.lineTo(s,Math.random()*13);i.lineTo(n-5,7),i.lineTo(n,r-9);for(let s=n-30;s>0;s-=38)i.lineTo(s,r-Math.random()*14);i.lineTo(5,r-4),i.closePath(),i.fill(),i.shadowColor="transparent",i.fillStyle="rgba(55,31,16,.78)",i.font="italic 27px Georgia",i.textAlign="left",ss(i,"“Keep the north star at your shoulder. The hidden cove opens only at low tide.”",45,78,n-90,42),i.fillStyle="rgba(223,199,142,.42)",i.fillRect(n*.37,-20,n*.25,68),i.strokeStyle="rgba(45,38,31,.72)",i.lineWidth=7,i.beginPath(),i.ellipse(n-48,42,18,35,.35,0,Math.PI*1.75),i.stroke(),i.restore()}function ap(i,t,e=1){for(let n=0;n<75*e;n++){const r=Math.floor(Math.random()*4),s=Math.random()*105,o=r<2?Math.random()*t:r===2?s:t-s,a=r>1?Math.random()*t:r===0?s:t-s,l=1.5+Math.random()*7;i.fillStyle=`rgba(91,48,20,${.035+Math.random()*.1})`,i.beginPath(),i.arc(o,a,l,0,Math.PI*2),i.fill()}i.save(),i.strokeStyle=`rgba(91,56,29,${.09*e})`,i.lineWidth=2,[[t*.18,0,t*.24,t],[t*.83,0,t*.76,t],[0,t*.71,t,t*.67]].forEach(n=>{i.beginPath(),i.moveTo(n[0],n[1]),i.lineTo(n[2],n[3]),i.stroke()});for(let n=0;n<3;n++){const r=t*(.18+Math.random()*.64),s=t*(.16+Math.random()*.68),o=t*(.035+Math.random()*.06);i.strokeStyle=`rgba(82,45,20,${.08+Math.random()*.07})`,i.lineWidth=4+Math.random()*5,i.beginPath(),i.ellipse(r,s,o,o*(.65+Math.random()*.3),Math.random(),0,Math.PI*2),i.stroke()}i.restore()}function Uc(i,t,e,n=null){return Vi((r,s)=>{r.save(),r.scale(s/1024,s/1024),jS(1718+e*97,()=>{const a=r.createRadialGradient(460.8,430.08,20,512,512,768);a.addColorStop(0,"#e5d5ae"),a.addColorStop(.72,"#cbb88e"),a.addColorStop(1,"#9c7f58"),r.fillStyle=a,r.fillRect(0,0,1024,1024),gr(r,1024);const l=r.createRadialGradient(1024/2,1024/2,1024*.38,1024/2,1024/2,1024*.72);l.addColorStop(.62,"rgba(65,31,11,0)"),l.addColorStop(.9,"rgba(55,24,8,.28)"),l.addColorStop(1,"rgba(24,9,3,.72)"),r.fillStyle=l,r.fillRect(0,0,1024,1024),r.strokeStyle="rgba(67,37,17,.25)",r.lineWidth=5,r.setLineDash([22,8,5,11]),r.strokeRect(38,36,948,952),r.setLineDash([]);for(let c=0;c<9;c++){const u=Math.random()*1024,h=Math.random()>.5?Math.random()*70:1024-Math.random()*70,f=r.createRadialGradient(u,h,0,u,h,22+Math.random()*45);f.addColorStop(0,"rgba(57,23,7,.25)"),f.addColorStop(1,"rgba(57,23,7,0)"),r.fillStyle=f,r.beginPath(),r.arc(u,h,70,0,Math.PI*2),r.fill()}ap(r,1024,1.5);for(let c=0;c<5;c++){const u=Math.random()>.5?Math.random()*120:1024-Math.random()*120,h=Math.random()*1024,f=28+Math.random()*85,p=r.createRadialGradient(u,h,0,u,h,f);p.addColorStop(0,"rgba(55,20,5,.24)"),p.addColorStop(.55,"rgba(92,45,15,.12)"),p.addColorStop(1,"rgba(92,45,15,0)"),r.fillStyle=p,r.fillRect(u-f,h-f,f*2,f*2)}if(r.fillStyle="rgba(61,42,25,.72)",r.textAlign="left",r.font="500 17px Montserrat",r.letterSpacing="4px",r.fillText(i.date.toUpperCase(),76,100),r.fillStyle="rgba(75,49,27,.27)",r.fillRect(76,126,90,2),t==="front")e===0?(r.font="italic 25px Georgia",r.fillStyle="rgba(66,39,20,.7)",r.fillText("Voyage memory no. 01",76,178),Al(r,132,225,750,390,i,e,n),ny(r,190,680,650,210),Rs(r,112,820,52)):(r.font="600 16px Montserrat",r.fillStyle="rgba(76,46,23,.62)",r.textAlign="center",r.fillText(`VOYAGE RECORD  ·  0${e+1}`,1024/2,150),Al(r,122,190,780,445,i,e,n),Rs(r,115,805,54),Dc(r,1024,e),r.font="italic 58px Georgia",r.fillStyle="#4e3825",r.textAlign="center",ss(r,i.title,1024/2,720,764,62),r.font="italic 26px Georgia",r.fillStyle="rgba(58,39,22,.78)",r.textAlign="center",ss(r,i.quote,155,815,714,37));else{Al(r,120,165,780,430,i,e+1,n),r.font="italic 43px Georgia",r.fillStyle="#49331f",r.textAlign="left",r.fillText("Captain’s log",170,675),r.font="italic 22px Georgia",r.fillStyle="rgba(55,38,22,.7)";const c=["Wind east by southeast.","Two bells after midnight.","The crew heard singing below.","Trust no chart without a scar."];c.forEach((u,h)=>r.fillText(u,175,740+h*45)),r.strokeStyle="rgba(70,43,22,.24)",r.lineWidth=2,c.forEach((u,h)=>{r.beginPath(),r.moveTo(175,755+h*45),r.lineTo(600,755+h*45),r.stroke()}),r.fillStyle="rgba(68,43,22,.2)",r.font="italic 96px Georgia",r.fillText(`${e+1}`,760,805),Rs(r,815,755,78),Dc(r,1024,e+2),op(r,865,270,110,.18)}r.fillStyle="rgba(63,40,22,.46)",r.textAlign="center",r.font="500 14px Montserrat",r.fillText(String(e*2+(t==="front"?1:2)).padStart(2,"0"),1024/2,965)}),r.restore()},ty)}function ss(i,t,e,n,r,s){const o=t.split(" ");let a="",l=n;for(const c of o){const u=a+c+" ";i.measureText(u).width>r&&a?(i.fillText(a.trim(),e,l),a=c+" ",l+=s):a=u}i.fillText(a.trim(),e,l)}function iy(){return Vi((i,t)=>{const e=i.createRadialGradient(t*.45,t*.4,30,t*.5,t*.5,t*.72);e.addColorStop(0,"#dec99b"),e.addColorStop(.72,"#b99a67"),e.addColorStop(1,"#6f4b29"),i.fillStyle=e,i.fillRect(0,0,t,t),gr(i,t,.12);const n=i.createRadialGradient(t/2,t/2,t*.38,t/2,t/2,t*.72);n.addColorStop(.65,"rgba(43,19,6,0)"),n.addColorStop(1,"rgba(35,13,4,.72)"),i.fillStyle=n,i.fillRect(0,0,t,t),ap(i,t,1.6),i.strokeStyle="rgba(69,39,18,.28)",i.lineWidth=5,i.setLineDash([18,9,4,12]),i.strokeRect(38,36,t-76,t-72),i.setLineDash([]),ey(i,t*.5,215,125),i.fillStyle="rgba(62,36,18,.62)",i.textAlign="center",i.font="500 18px Montserrat",i.fillText("CHAPTER 1",t*.5,390),i.fillStyle="#49301c",i.font="italic 75px Georgia",ss(i,"The Journey Begins",145,485,t-290,82),i.strokeStyle="rgba(77,43,20,.32)",i.lineWidth=2,i.beginPath(),i.moveTo(220,670),i.lineTo(t-220,670),i.stroke(),i.fillStyle="rgba(59,36,20,.74)",i.font="italic 31px Georgia",ss(i,"“Not all those who wander are lost.”",180,760,t-360,44),i.font="italic 21px Georgia",i.fillStyle="rgba(75,45,23,.55)",i.fillText("— written before the first tide",t*.5,875),i.fillStyle="rgba(42,28,20,.35)",[[130,650,12],[165,620,5],[835,720,9]].forEach(r=>{i.beginPath(),i.arc(...r,0,Math.PI*2),i.fill()})})}const Ic=Vi((i,t)=>{const e=i.createLinearGradient(0,0,t,t);e.addColorStop(0,"#3b251b"),e.addColorStop(.46,"#21140f"),e.addColorStop(1,"#4a2d20"),i.fillStyle=e,i.fillRect(0,0,t,t),gr(i,t,.17);for(let r=0;r<3200;r++){const s=Math.random()*t,o=Math.random()*t,a=.5+Math.random()*2.8,l=.35+Math.random()*1.7;i.strokeStyle=Math.random()>.5?"rgba(18,9,6,.2)":"rgba(172,146,121,.045)",i.lineWidth=.45+Math.random()*.75,i.beginPath(),i.ellipse(s,o,a,l,Math.random()*Math.PI,0,Math.PI*2),i.stroke()}for(let r=0;r<145;r++){const s=Math.random()*t,o=Math.random()*t,a=12+Math.random()*54;i.strokeStyle="rgba(31,12,6,.18)",i.lineWidth=.8+Math.random()*1.4,i.beginPath(),i.moveTo(s,o),i.quadraticCurveTo(s+a*.5,o+Math.random()*10-5,s+a,o+Math.random()*5-2.5),i.stroke()}i.strokeStyle="rgba(28,15,10,.56)",i.lineWidth=10,i.strokeRect(43,43,t-86,t-86),i.strokeStyle="rgba(156,126,98,.16)",i.lineWidth=2,i.strokeRect(49,49,t-98,t-98),i.lineCap="round";for(let r=72,s=0;r<t-72;r+=18,s++){if(s%8!==3){const o=(s%3-1)*1.2;i.strokeStyle="rgba(24,13,9,.35)",i.lineWidth=4,i.beginPath(),i.moveTo(r+2,67),i.lineTo(r+9+o,67),i.moveTo(r+2,t-65),i.lineTo(r+9-o,t-65),i.stroke(),i.strokeStyle="rgba(157,132,105,.52)",i.lineWidth=2.3,i.beginPath(),i.moveTo(r,65),i.lineTo(r+8+o,65),i.moveTo(r,t-67),i.lineTo(r+8-o,t-67),i.stroke()}if(s%7!==4){const o=(s%3-1)*1.1;i.strokeStyle="rgba(24,13,9,.35)",i.lineWidth=4,i.beginPath(),i.moveTo(67,r+2),i.lineTo(67,r+9+o),i.moveTo(t-65,r+2),i.lineTo(t-65,r+9-o),i.stroke(),i.strokeStyle="rgba(157,132,105,.52)",i.lineWidth=2.3,i.beginPath(),i.moveTo(65,r),i.lineTo(65,r+8+o),i.moveTo(t-67,r),i.lineTo(t-67,r+8-o),i.stroke()}}const n=i.createRadialGradient(t*.5,t*.5,t*.22,t*.5,t*.5,t*.72);n.addColorStop(.34,"rgba(66,39,25,.28)"),n.addColorStop(.72,"rgba(95,64,44,.15)"),n.addColorStop(1,"rgba(185,151,116,.2)"),i.fillStyle=n,i.fillRect(0,0,t,t),i.lineCap="round";for(let r=0;r<92;r++){const s=Math.random()*t,o=Math.random()*t,a=18+Math.random()*135;i.strokeStyle=`rgba(${Math.random()>.52?"183,153,123":"18,7,4"},${.08+Math.random()*.17})`,i.lineWidth=.7+Math.random()*2.8,i.beginPath(),i.moveTo(s,o),i.bezierCurveTo(s+a*.25,o+Math.random()*12-6,s+a*.7,o+Math.random()*16-8,s+a,o+Math.random()*9-4),i.stroke()}for(let r=0;r<34;r++)i.fillStyle=`rgba(12,5,3,${.1+Math.random()*.2})`,i.beginPath(),i.ellipse(Math.random()*t,Math.random()*t,6+Math.random()*28,2+Math.random()*10,Math.random()*Math.PI,0,Math.PI*2),i.fill();for(let r=0;r<15;r++){const s=Math.random()*t,o=Math.random()*t,a=45+Math.random()*125,l=i.createRadialGradient(s,o,0,s,o,a);l.addColorStop(0,"rgba(176,135,99,.18)"),l.addColorStop(.55,"rgba(74,45,31,.12)"),l.addColorStop(1,"rgba(34,14,7,0)"),i.fillStyle=l,i.fillRect(s-a,o-a,a*2,a*2)}i.strokeStyle="rgba(12,5,3,.48)",i.lineWidth=2.4;for(let r=0;r<28;r++){let s=Math.random()*t,o=Math.random()*t;i.beginPath(),i.moveTo(s,o);for(let a=0;a<5;a++)s+=Math.random()*34-17,o+=18+Math.random()*28,i.lineTo(s,o);i.stroke()}i.fillStyle="rgba(218,188,143,.06)";for(let r=0;r<120;r++)i.beginPath(),i.ellipse(Math.random()*t,Math.random()*t,10+Math.random()*36,2+Math.random()*8,Math.random()*Math.PI,0,Math.PI*2),i.fill()}),xu=new oe({map:Ic,bumpMap:Ic,bumpScale:.13,color:8017731,roughness:1,metalness:0}),lp=new oe({color:9400395,roughness:.96}),En=new oe({color:8544303,roughness:.48,metalness:.68}),qe=5.15,Sa=6.7,Bn=rs.length,Qs=qe-.78,to=Sa-.92,Zn=qe/2+.02,ry=Zn*.96,sy=Zn*.84,oy=Zn*1.05,ay=-Zn*.9,ly=Zn*.9,uf=he?.54:.62,cy=he?.62:.72,uy=he?.42:.5,$n=new Qe;$n.rotation.z=-.02;xe.add($n);function Hi(i,t,e,n,r){const s=new On,o=-i/2,a=-t/2;s.moveTo(o+n,a),s.lineTo(o+i-n,a),s.quadraticCurveTo(o+i,a,o+i,a+n),s.lineTo(o+i,a+t-n),s.quadraticCurveTo(o+i,a+t,o+i-n,a+t),s.lineTo(o+n,a+t),s.quadraticCurveTo(o,a+t,o,a+t-n),s.lineTo(o,a+n),s.quadraticCurveTo(o,a,o+n,a);const l=new jc(s,{depth:e,bevelEnabled:!0,bevelSize:.07,bevelThickness:.05,bevelSegments:3});l.center();const c=new yt(l,r);return c.castShadow=c.receiveShadow=!0,c}const cp=Hi(qe+.45,Sa+.75,.34,.2,xu);cp.position.set(qe/2+.05,0,-.55);$n.add(cp);const up=Hi(Qs,to,.42,.08,lp),hp=Hi(Qs,to,.48,.08,lp);hp.position.set(Zn,-.01,-.19);$n.add(hp);const fp=Hi(.62,Sa+.52,.6,.16,xu);fp.position.z=-.28;$n.add(fp);[-2.6,2.6].forEach(i=>{const t=Hi(.78,.12,.67,.03,En);t.position.set(0,i,-.22),$n.add(t)});const hy=`
  uniform float uTurn; uniform float uCurl; varying vec2 vUv2;
  void main(){
    vUv2=uv; vec3 p=position;
    float arch=sin(uv.x*3.14159265)*sin(uTurn*3.14159265);
    p.z += arch*uCurl + sin(uv.x*9.0+uTurn*4.0)*arch*.055;
    float dogEar=smoothstep(.72,1.0,uv.x)*pow(abs(uv.y-.5)*2.0,5.0);
    float brittleEdge=smoothstep(.76,1.0,uv.x)*sin(uv.y*35.0+uv.x*8.0);
    p.z += dogEar*.085 + brittleEdge*.018;
    p.y += brittleEdge*.012;
    p.y += arch*.08*sin(uv.y*3.14159265);
    gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);
  }`;function Nc(i,t,e=!1){return new sn({uniforms:{map:{value:i},uTurn:{value:0},uCurl:{value:.85},uReveal:{value:1},uWarmth:{value:new Ot(16769712)},uPhotoRect:{value:new ne(0,0,0,0)},uPhotoProtect:{value:0}},vertexShader:hy,fragmentShader:"uniform sampler2D map; uniform vec3 uWarmth; uniform vec4 uPhotoRect; uniform float uPhotoProtect; uniform float uReveal; varying vec2 vUv2; void main(){vec4 c=texture2D(map,vUv2);float wobble=sin(vUv2.y*91.0)*.012+sin(vUv2.x*67.0)*.009+sin((vUv2.x+vUv2.y)*143.0)*.004;float edge=smoothstep(0.0,.038+wobble,vUv2.x)*smoothstep(0.0,.041-wobble,1.0-vUv2.x)*smoothstep(0.0,.03-wobble,vUv2.y)*smoothstep(0.0,.032+wobble,1.0-vUv2.y);if(edge<.18)discard;float grain=fract(sin(dot(floor(vUv2*vec2(31.0,23.0)),vec2(12.9898,78.233)))*43758.5453);float threshold=vUv2.y*.35+grain*.65;float painted=smoothstep(threshold-.14,threshold+.08,uReveal*1.12);vec3 bare=vec3(.72,.57,.34)*(1.0-vUv2.x*.06);c.rgb=mix(bare,c.rgb,painted);float photoMask=step(uPhotoRect.x,vUv2.x)*step(vUv2.x,uPhotoRect.z)*step(uPhotoRect.y,vUv2.y)*step(vUv2.y,uPhotoRect.w)*uPhotoProtect;vec3 warmth=mix(uWarmth,vec3(1.0),photoMask);c.rgb*=mix(.31,1.0,edge)*warmth;gl_FragColor=vec4(c.rgb,1.0);}",side:t,transparent:!1,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:e?1:-1,polygonOffsetUnits:e?1:-1})}const fy=new zn(Qs,to,24,10);for(let i=0;i<12;i++){const t=new oe({color:new Ot().setHSL(.105,.28,.5+i*.006),roughness:1,side:ze}),e=new yt(new zn(Qs-.08-i%3*.018,to-.08-i%4*.014),t);e.position.set(Zn+(i%3-1)*.008,(i%4-1.5)*.008,.018+i*.0045),e.rotation.z=(i%2?1:-1)*(8e-4+i*12e-5),e.receiveShadow=!0,$n.add(e)}const mi=[];for(let i=0;i<Bn;i++){const t=new Qe;t.position.set(0,0,.13+(Bn-i)*.0038),$n.add(t),t.position.y=(i%3-1)*.009,t.rotation.z=(i%2?1:-1)*(.0018+i*25e-5);const e=new zn(Qs,to,36,12);e.translate(Zn,0,0);const n=Uc(rs[i],"front",i),r=Nc(n,Fn);r.uniforms.uReveal.value=0;const s=Uc(rs[i],"back",i),o=Nc(s,Xe,!0);o.uniforms.uReveal.value=0;const a=new yt(e,r);a.castShadow=a.receiveShadow=!0,t.add(a);const l=new yt(e,o);l.position.z=-.018,l.castShadow=!0,t.add(l),t.userData={frontMat:r,backMat:o,frontTexture:n,backTexture:s,progress:0,index:i},mi.push(t)}mi.forEach((i,t)=>{i.visible=t===0});const ge=new Qe;ge.position.z=.43;$n.add(ge);const dp=Hi(qe+.45,Sa+.75,.34,.18,xu);dp.position.x=qe/2+.05;ge.add(dp);const dy=new oe({color:5519147,roughness:1,metalness:0}),py=new oe({color:3873550,roughness:1,metalness:0});function ya(i,t,e=1,n=1){const r=new On;r.moveTo(0,0),r.lineTo(.72*e,.04*n),r.lineTo(.56*e,.19*n),r.lineTo(.68*e,.34*n),r.lineTo(.31*e,.58*n),r.lineTo(.08*e,.72*n),r.closePath();const s=new yt(new Xn(r),dy);s.position.set(i,t,.183),s.castShadow=!0,ge.add(s)}ya(-.12,-3.65,1,1);ya(5.42,-3.65,-1,1);ya(-.12,3.65,1,-1);ya(5.42,3.65,-1,-1);const my=new Vr({color:2363398,transparent:!0,opacity:.82});[[[.05,-3.1,.205],[.42,-2.76,.207],[.29,-2.4,.205],[.61,-2.08,.207]],[[5.3,3.28,.205],[4.92,2.98,.207],[5.02,2.63,.205],[4.72,2.35,.207]],[[4.95,-3.52,.205],[4.66,-3.18,.207],[4.78,-2.89,.205]],[[.14,3.42,.205],[.48,3.1,.207],[.38,2.78,.205]]].forEach(i=>ge.add(new Ts(new ve().setFromPoints(i.map(t=>new L(...t))),my)));const eo=new On;eo.moveTo(0,0);eo.lineTo(-.58,.05);eo.lineTo(-.35,.42);eo.closePath();const Ta=new yt(new Xn(eo),py);Ta.position.set(5.34,-3.52,.22);Ta.rotation.x=-.24;Ta.castShadow=!0;ge.add(Ta);const _y=new oe({color:10252352,roughness:1});for(let i=0;i<15;i++){if(i===3||i===9||i===13)continue;const t=new yt(new mr(.18,.025,.018),_y);t.position.set(.09,-3.15+i*.45,.215),t.rotation.z=(i%2?1:-1)*.13,ge.add(t)}up.position.set(Zn,-.01,-.35);ge.add(up);const qs=new yt(fy,Nc(iy(),Fn));qs.position.set(Zn,0,-.47);qs.rotation.y=Math.PI;qs.castShadow=qs.receiveShadow=!0;ge.add(qs);const pp=Hi(2.9,1.35,.05,.04,En);pp.position.set(qe/2+.05,.15,.2);ge.add(pp);const mp=Hi(2.62,1.08,.06,.03,new oe({color:2364173,roughness:.65}));mp.position.set(qe/2+.05,.15,.245);ge.add(mp);Vi((i,t)=>{i.clearRect(0,0,t,t),i.fillStyle="#d8a64c",i.textAlign="center",i.font="700 65px Georgia",i.fillText("THE",t/2,t*.38),i.fillText("ARCHIVE",t/2,t*.54),i.fillStyle="#e7c982",i.font="500 24px Montserrat",i.fillText("CAPTAIN’S LOG  ·  1718",t/2,t*.68),i.strokeStyle="rgba(220,174,82,.7)",i.lineWidth=3,i.strokeRect(75,220,t-150,t-440)},1024);const gy=new pM().load(ZS,i=>{i.colorSpace=fn,i.anisotropy=Math.min(8,sp)}),Mu=new yt(new zn(2.34,.98),new Ii({map:gy,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,side:Fn}));Mu.position.set(qe/2+.05,.15,.36);Mu.renderOrder=50;ge.add(Mu);const vy=new Ii({color:3425583,transparent:!0,opacity:.46,depthWrite:!1});for(let i=0;i<14;i++){const t=i/14*Math.PI*2,e=qe/2+.05+Math.cos(t)*(1.25+(i%3-1)*.05),n=.15+Math.sin(t)*.55,r=new yt(new fi(.025+i%4*.009,10),vy);r.position.set(e,n,.292),ge.add(r)}const Su=new yt(new Le(.28,.28,.07,32),En);Su.rotation.x=Math.PI/2;Su.position.set(qe/2+.05,-1.25,.31);ge.add(Su);const _i=new On;_i.moveTo(-.22,-.05);_i.bezierCurveTo(-.29,-.3,-.2,-.48,0,-.5);_i.bezierCurveTo(.2,-.48,.29,-.3,.22,-.05);_i.lineTo(.15,.18);_i.lineTo(.08,.33);_i.lineTo(-.08,.33);_i.lineTo(-.15,.18);_i.closePath();const Ea=new yt(new Xn(_i),En);Ea.position.set(qe/2+.05,-1.14,.4);Ea.rotation.z=Math.PI;Ea.scale.setScalar(.72);ge.add(Ea);[-.09,.09].forEach(i=>{const t=new yt(new fi(.045,16),new Ii({color:2495243}));t.position.set(qe/2+.05+i,-1.22,.415),ge.add(t)});const xy=new oe({color:12045011,roughness:.84,metalness:0}),ba=new yt(new Le(15,15,1.1,64),xy);ba.rotation.x=Math.PI/2;ba.position.z=-1.4;ba.receiveShadow=!0;xe.add(ba);const My=Vi((i,t)=>{const e=i.createRadialGradient(t*.42,t*.4,20,t*.5,t*.5,t*.76);e.addColorStop(0,"#edf5f7"),e.addColorStop(.66,"#cddde3"),e.addColorStop(1,"#8fa9b4"),i.fillStyle=e,i.fillRect(0,0,t,t),gr(i,t,.08),i.globalCompositeOperation="multiply",[[.34,.42,.28],[.68,.64,.24],[.72,.27,.18]].forEach((r,s)=>{const o=i.createRadialGradient(t*r[0],t*r[1],10,t*r[0],t*r[1],t*r[2]);o.addColorStop(0,`rgba(${s===1?"31,93,89":"39,79,82"},.3)`),o.addColorStop(1,"rgba(28,73,76,0)"),i.fillStyle=o,i.fillRect(0,0,t,t)}),i.globalCompositeOperation="source-over",i.strokeStyle="rgba(41,30,20,.24)",i.lineWidth=1;for(let r=70;r<t;r+=70)i.beginPath(),i.moveTo(r,0),i.lineTo(r,t),i.stroke(),i.beginPath(),i.moveTo(0,r),i.lineTo(t,r),i.stroke();i.strokeStyle="rgba(39,25,15,.82)",i.fillStyle="rgba(54,39,23,.34)",i.lineWidth=9,i.beginPath(),i.moveTo(0,t*.24),i.bezierCurveTo(t*.14,t*.18,t*.17,t*.35,t*.29,t*.3),i.bezierCurveTo(t*.4,t*.25,t*.37,t*.08,t*.53,0),i.lineTo(0,0),i.closePath(),i.fill(),i.stroke(),i.beginPath(),i.moveTo(t,t*.62),i.bezierCurveTo(t*.83,t*.55,t*.83,t*.76,t*.68,t*.72),i.bezierCurveTo(t*.6,t*.69,t*.58,t*.9,t*.48,t),i.lineTo(t,t),i.closePath(),i.fill(),i.stroke(),Rs(i,t*.17,t*.76,t*.11),Dc(i,t,3),op(i,t*.82,t*.22,t*.12,.38),i.strokeStyle="rgba(112,24,17,.72)",i.lineWidth=6,i.setLineDash([16,12]),i.beginPath(),i.moveTo(t*.14,t*.58),i.bezierCurveTo(t*.31,t*.38,t*.5,t*.76,t*.74,t*.47),i.bezierCurveTo(t*.82,t*.37,t*.86,t*.31,t*.9,t*.27),i.stroke(),i.setLineDash([]),i.strokeStyle="rgba(36,28,21,.5)",i.lineWidth=4;for(let r=18;r<66;r+=12)i.beginPath(),i.arc(t*.62,t*.5,r,.35,Math.PI*1.85),i.stroke();i.fillStyle="rgba(38,25,16,.76)",i.font="italic 55px Georgia",i.textAlign="center",i.fillText("Mare Incognitum",t*.55,t*.18),i.font="italic 24px Georgia",i.fillText("Dead Man’s Passage",t*.72,t*.48),i.fillText("Isla del Cuervo",t*.37,t*.63),i.strokeStyle="rgba(32,25,19,.58)",i.lineWidth=8,i.beginPath(),i.moveTo(t*.42,t*.33),i.bezierCurveTo(t*.47,t*.25,t*.5,t*.42,t*.55,t*.32),i.bezierCurveTo(t*.6,t*.23,t*.62,t*.36,t*.65,t*.3),i.stroke(),i.beginPath(),i.arc(t*.655,t*.285,16,0,Math.PI*2),i.stroke();const n=i.createRadialGradient(t/2,t/2,t*.4,t/2,t/2,t*.72);n.addColorStop(.62,"rgba(21,41,52,0)"),n.addColorStop(1,"rgba(21,41,52,.34)"),i.fillStyle=n,i.fillRect(0,0,t,t)}),Sy=new oe({map:My,color:15069685,roughness:.98,side:ze}),wa=new yt(new zn(22,14,20,12),Sy);wa.position.set(0,0,-.81);wa.rotation.z=.055;wa.receiveShadow=!0;xe.add(wa);function Aa(i,t,e,n,r,s,o){const a=Vi((c,u)=>{c.fillStyle=o,c.fillRect(0,0,u,u),gr(c,u,.1),c.strokeStyle="rgba(77,43,19,.26)",c.lineWidth=8,c.strokeRect(24,24,u-48,u-48),c.fillStyle="rgba(65,39,20,.6)",c.font="italic 47px Georgia",c.textAlign="center",c.fillText(i,u/2,125),c.font="italic 25px Georgia";for(let h=0;h<7;h++)c.fillText("—  ———  ——  —————  —",u/2,230+h*70);Rs(c,u*.77,u*.75,u*.1)},512),l=new yt(new zn(n,r,4,3),new oe({map:a,roughness:1,side:ze}));l.position.set(t,e,-.63),l.rotation.z=s,l.castShadow=l.receiveShadow=!0,xe.add(l)}Aa("Port Royal",-4.6,2.5,4.2,2.5,-.17,"#d8e7ec");Aa("Cape of Storms",4.8,2.7,4.5,2.7,.13,"#e7f0f3");Aa("Admiralty Chart",-4.8,-2.2,4.1,2.35,.1,"#c9dce3");Aa("Letter of Marque",4.7,-2.3,4,2.4,-.12,"#eef4f6");const qr=new oe({color:2825492,roughness:.35,metalness:.72});new oe({color:4990740,roughness:.72});const yy=new oe({color:7543569,roughness:.58}),Ty=Vi((i,t)=>{const e=i.createRadialGradient(t*.44,t*.38,10,t*.5,t*.5,t*.52);e.addColorStop(0,"#d8c18a"),e.addColorStop(.72,"#9b7a48"),e.addColorStop(1,"#3b2919"),i.fillStyle=e,i.fillRect(0,0,t,t),gr(i,t,.12),i.translate(t/2,t/2),i.strokeStyle="rgba(36,25,16,.72)",i.fillStyle="rgba(36,25,16,.76)";for(let n=0;n<72;n++){const r=n%6===0,s=t*(r?.36:.385),o=t*.42,a=n/72*Math.PI*2;i.lineWidth=r?5:2,i.beginPath(),i.moveTo(Math.cos(a)*s,Math.sin(a)*s),i.lineTo(Math.cos(a)*o,Math.sin(a)*o),i.stroke()}i.textAlign="center",i.textBaseline="middle",i.font=`700 ${t*.085}px Georgia`,[["N",0,-.31],["E",.31,0],["S",0,.31],["W",-.31,0]].forEach(n=>i.fillText(n[0],n[1]*t,n[2]*t)),i.strokeStyle="rgba(103,25,18,.7)",i.lineWidth=5,i.beginPath(),i.arc(0,0,t*.25,0,Math.PI*2),i.stroke()},1024);function Ey(){const i=new Qe,t=new yt(new Le(1.35,1.42,.18,64),En);t.rotation.x=Math.PI/2,t.castShadow=!0,i.add(t);const e=new yt(new fi(1.18,64),new oe({map:Ty,color:14073745,roughness:.88}));e.position.z=.11,i.add(e),[1.18,.93].forEach((c,u)=>{const h=new yt(new cs(c,.035,12,64),u?qr:En);h.position.z=.16,i.add(h)});const n=new Qe;n.position.z=.18;for(let c=0;c<8;c++){const u=new On;u.moveTo(0,c%2?-.35:-.82),u.lineTo(-.09,0),u.lineTo(.09,0),u.closePath();const h=new yt(new Xn(u),c%2?qr:En);h.rotation.z=c*Math.PI/4,n.add(h)}i.add(n);const r=new Qe;r.position.z=.225,r.rotation.z=.28;const s=new On;s.moveTo(0,.82),s.lineTo(-.085,0),s.lineTo(.085,0),s.closePath();const o=new On;o.moveTo(0,-.72),o.lineTo(-.075,0),o.lineTo(.075,0),o.closePath(),r.add(new yt(new Xn(s),new oe({color:8526870,metalness:.32,roughness:.46})),new yt(new Xn(o),qr)),i.add(r);const a=new yt(new Le(.095,.095,.05,20),En);a.rotation.x=Math.PI/2,a.position.z=.25,i.add(a);const l=new yt(new fi(1.12,64),new ma({color:13362399,transparent:!0,opacity:.11,roughness:.08,metalness:0,clearcoat:.6,clearcoatRoughness:.12,depthWrite:!1}));l.position.z=.29,i.add(l);for(let c=0;c<4;c++){const u=c*Math.PI/2,h=new yt(new mr(.22,.34,.09),En);h.position.set(Math.cos(u)*1.38,Math.sin(u)*1.38,.04),h.rotation.z=u,i.add(h)}return i.userData.needle=r,i.userData.rose=n,i.userData.face=e,i.userData.glass=l,i.position.set(-7.65,-4.75,-.72),i.rotation.z=-.28,i.scale.setScalar(.78),i}const ri=Ey();xe.add(ri);function by(i,t,e,n=1){const r=new yt(new Le(.3*n,.3*n,.075,28),En);r.rotation.x=Math.PI/2,r.position.set(i,t,e),r.rotation.y=Math.random()*.15,r.rotation.z=Math.random()*Math.PI,r.castShadow=!0,xe.add(r)}[[-4.7,2.8,-.52,1],[-4.2,3.15,-.48,.8],[-4.55,3.35,-.42,.75],[5.8,-2.9,-.51,.9],[6.3,-2.6,-.52,.7]].forEach(i=>by(...i));function wy(){const i=new Qe,t=new oe({color:10121524,roughness:.54,metalness:.72}),e=new oe({color:2636588,roughness:.9,metalness:.08}),n=new oe({color:2758416,roughness:.94,metalness:0,bumpMap:Ic,bumpScale:.04}),r=new ma({color:12050911,transparent:!0,opacity:.34,roughness:.05,metalness:0,clearcoat:1,clearcoatRoughness:.04,depthWrite:!1}),s=new yt(new Le(.25,.34,2.15,36),n);s.castShadow=!0,s.receiveShadow=!0,s.position.y=-.42,i.add(s);const o=new yt(new Le(.2,.27,1.55,36),t);o.castShadow=!0,o.position.y=.92,i.add(o);const a=new yt(new Le(.16,.2,1.12,36),t);a.castShadow=!0,a.position.y=1.85,i.add(a);const l=new yt(new Le(.22,.18,.38,36),qr);l.position.y=-1.72,l.castShadow=!0,i.add(l);const c=new yt(new Le(.43,.34,.38,36),t);c.position.y=2.55,c.castShadow=!0,i.add(c),[-1.46,-.05,.74,1.48,2.35].forEach((_,g)=>{const d=new yt(new cs(g===4?.42:g===0?.24:.29,.035,12,42),g===2?e:t);d.rotation.x=Math.PI/2,d.position.y=_,d.castShadow=!0,i.add(d)});const u=new yt(new fi(.35,42),r);u.position.y=2.76,u.rotation.x=Math.PI/2,i.add(u);const h=new yt(new fi(.14,28),r);h.position.y=-1.93,h.rotation.x=-Math.PI/2,i.add(h);for(let _=0;_<10;_++){const g=new Ts(new ve().setFromPoints([new L(-.18+Math.random()*.36,-1.25+Math.random()*.85,.255),new L(-.15+Math.random()*.3,-1.18+Math.random()*.85,.265)]),new Vr({color:11569758,transparent:!0,opacity:.35}));i.add(g)}const f=new da([new L(-.34,-1.35,.05),new L(-.62,-.42,.1),new L(-.45,.55,.08),new L(-.2,1.12,.04)]),p=new yt(new $s(f,42,.025,8,!1),new oe({color:2101259,roughness:.94}));return p.castShadow=!0,i.add(p),i.position.set(6.2,2.35,-.2),i.rotation.set(.18,.03,-.9),i.scale.setScalar(1.08),i}const Oc=wy();xe.add(Oc);function Ay(){const i=new Qe,t=new oe({color:3877922,roughness:.72,metalness:.02}),e=new ma({color:1120536,roughness:.9,metalness:0,side:ze,transparent:!0,opacity:.97,sheen:.28,sheenColor:new Ot(3234648)}),n=new da([new L(0,-1.62,.08),new L(.025,-.65,.09),new L(.09,.4,.11),new L(.16,1.35,.13),new L(.08,2.22,.14)]),r=new yt(new $s(n,56,.031,12,!1),t);r.castShadow=!0,i.add(r);function s(d){const m=new On;m.moveTo(d*.015,-.05);const y=[];for(let M=0;M<=15;M++){const A=M/15,C=-.02+A*2.22,b=Math.sin(Math.pow(A,.82)*Math.PI)*(.5+(d>0?.07:0)),P=1-A*.2,U=M===4||M===9||M===12?.08:0;y.push([d*(.09+b*P-U),C])}y.forEach((M,A)=>{m.lineTo(M[0],M[1]),(A===4||A===9||A===12)&&m.lineTo(M[0]*.76,M[1]+.045)}),m.lineTo(d*.04,2.25),m.lineTo(d*.015,-.05),m.closePath();const x=new yt(new Xn(m),e);return x.position.z=.045,x.castShadow=!0,x}i.add(s(-1),s(1));const o=new Vr({color:7637890,transparent:!0,opacity:.34});for(const d of[-1,1])for(let m=1;m<15;m++){const y=m/15,x=y*2.15,M=(.09+Math.sin(Math.pow(y,.82)*Math.PI)*(.46+(d>0?.06:0)))*(1-y*.16),A=[new L(.025*d,x,.07),new L(M*d,x+(d>0?.1:.075),.07)];i.add(new Ts(new ve().setFromPoints(A),o))}const a=new Ts(new ve().setFromPoints(n.getPoints(42).map(d=>new L(d.x-.012,d.y,d.z+.025))),new Vr({color:9402713,transparent:!0,opacity:.46}));i.add(a);const l=new yt(new Le(.075,.09,.24,16),En);l.rotation.x=Math.PI/2,l.position.set(0,-1.51,.09),i.add(l);const c=new oe({color:8068888,roughness:.92});for(let d=0;d<4;d++){const m=new yt(new cs(.073,.012,7,22),c);m.rotation.x=Math.PI/2,m.position.set(0,-1.35+d*.035,.09),i.add(m)}const u=new yt(new Ns(.055,14,10),new oe({color:2382679,roughness:.55,metalness:.08}));u.position.set(.105,-1.29,.09),i.add(u);const h=new On;h.moveTo(-.105,-1.55),h.quadraticCurveTo(-.12,-1.76,-.055,-1.9),h.lineTo(0,-2.1),h.lineTo(.055,-1.9),h.quadraticCurveTo(.12,-1.76,.105,-1.55),h.closePath();const f=new yt(new Xn(h),En);f.position.z=.1,f.castShadow=!0,i.add(f);const p=new Ts(new ve().setFromPoints([new L(0,-1.69,.115),new L(0,-2.055,.115)]),new Vr({color:2824720}));i.add(p);const _=new yt(new fi(.026,16),new Ii({color:2824720}));_.position.set(0,-1.72,.118),i.add(_);const g=new yt(new Ns(.035,12,8),new Ii({color:1511951}));return g.position.set(0,-2.095,.11),i.add(g),i.position.set(6.65,-.65,-.32),i.rotation.set(.035,0,-.43),i.scale.setScalar(.9),i}xe.add(Ay());function Cy(){const i=new Qe,t=new yt(new Le(.65,.78,.25,24),qr);t.rotation.x=Math.PI/2,i.add(t);const e=t.clone();e.scale.set(.72,.72,.72),e.position.z=2.15,i.add(e);for(let o=0;o<4;o++){const a=o*Math.PI/2,l=new yt(new Le(.035,.035,2.1,8),qr);l.position.set(Math.cos(a)*.55,Math.sin(a)*.55,1.05),l.rotation.x=Math.PI/2,i.add(l)}const n=new yt(new Le(.54,.6,1.85,24,1,!0),new ma({color:16164678,transparent:!0,opacity:.18,roughness:.15,side:ze}));n.rotation.x=Math.PI/2,n.position.z=1.04,i.add(n);const r=new yt(new Ns(.16,16,12),new Ii({color:16753199}));r.scale.y=1.7,r.position.z=.85,i.add(r);const s=new tu(16758894,4,8,2);return s.position.z=1,i.add(s),i.position.set(-6.15,3.65,-.45),i.scale.setScalar(1.16),i}const _p=Cy();xe.add(_p);function Ry(){const i=[];for(let n=0;n<26;n++){const r=n/25*Math.PI*2.2;i.push(new L(-5.8+Math.cos(r)*(1.7+n*.018),-.4+Math.sin(r)*1.2,-.45+n*.002))}const t=new da(i),e=new yt(new $s(t,90,.09,8,!1),new oe({color:8413755,roughness:1}));e.castShadow=!0,xe.add(e)}Ry();const Ca=new yt(new Le(.48,.52,.12,32),yy);Ca.rotation.x=Math.PI/2;Ca.position.set(5.45,-3.82,-.35);Ca.castShadow=!0;xe.add(Ca);const gp=new yt(new cs(.23,.045,8,24),new oe({color:4722696,roughness:.7}));gp.position.set(5.45,-3.82,-.26);xe.add(gp);function Py(i){return Vi((t,e)=>{t.fillStyle="#d8e7ec",t.fillRect(0,0,e,e),gr(t,e,.07),t.fillStyle="rgba(35,48,58,.72)",t.font="italic 64px Georgia",t.textAlign="center",ss(t,i,70,180,e-140,78),t.strokeStyle="rgba(64,84,96,.55)",t.lineWidth=13,t.beginPath(),t.moveTo(e*.7,e*.72),t.lineTo(e*.82,e*.84),t.moveTo(e*.82,e*.72),t.lineTo(e*.7,e*.84),t.stroke()},512)}[["Trust the northern star",-4.7,-2.15,-.45,-.22],["To be continued…",5,-3.75,-.44,.16]].forEach(i=>{const t=new yt(new zn(2.3,1.45,5,4),new oe({map:Py(i[0]),roughness:1,side:ze}));t.position.set(i[1],i[2],i[3]),t.rotation.z=i[4],t.castShadow=t.receiveShadow=!0,xe.add(t)});an.add(new xM(16120831,1.12));an.add(new mM(15398911,14215146,2.18));const Bi=new gM(16775400,134,48,.76,.9,1);Bi.position.set(-9,6,16);Bi.target.position.set(1,0,0);Bi.castShadow=!0;Bi.shadow.mapSize.set(Ws?2048:1024,Ws?2048:1024);Bi.shadow.bias=-2e-4;an.add(Bi,Bi.target);const vp=new tu(15398911,36,28,2);vp.position.set(8,4,7);an.add(vp);const xp=new tu(13627135,24,26,2);xp.position.set(-8,3,6);an.add(xp);function Mp(i,t,e,n){const r=new Le(.15,2.5,14,32,1,!0),s=new sn({transparent:!0,depthWrite:!1,blending:qo,side:ze,uniforms:{color:{value:new Ot(16055295)}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 color;varying vec2 vUv;void main(){float a=sin(vUv.y*3.14159)*smoothstep(0.,.18,vUv.x)*smoothstep(0.,.18,1.-vUv.x);gl_FragColor=vec4(color,a*.024);}"}),o=new yt(r,s);o.position.set(i,t,8),o.rotation.set(.55,e,.15),o.scale.setScalar(n),an.add(o)}Mp(-6,-2,-.5,1.1);Mp(-3,1,-.2,.72);const yu=he?500:1300,Tu=new ve,Wo=new Float32Array(yu*3),Sp=new Float32Array(yu);for(let i=0;i<yu;i++)Wo[i*3]=(Math.random()-.5)*24,Wo[i*3+1]=(Math.random()-.5)*16,Wo[i*3+2]=Math.random()*15-2,Sp[i]=Math.random();Tu.setAttribute("position",new An(Wo,3));Tu.setAttribute("aSeed",new An(Sp,1));const yp=new sn({transparent:!0,depthWrite:!1,blending:qo,uniforms:{uTime:{value:0}},vertexShader:"uniform float uTime;attribute float aSeed;varying float vAlpha;void main(){vec3 p=position;p.y+=sin(uTime*.18+aSeed*20.)*.5;p.x+=cos(uTime*.12+aSeed*30.)*.35;vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=(2.0+aSeed*3.)*(10./-mv.z);gl_Position=projectionMatrix*mv;vAlpha=.07+aSeed*.16;}",fragmentShader:"varying float vAlpha;void main(){float d=distance(gl_PointCoord,vec2(.5));float a=smoothstep(.5,0.,d)*vAlpha;gl_FragColor=vec4(.9,.97,1.,a);}"});an.add(new Dx(Tu,yp));let $t=0,gn=!1,Di=!1,ys=null,Xo=null;const Ge={focusX:qe/2,focusY:0,active:!0},Ly=rs.map(i=>i.chapter);function Eu(){Bt.current.textContent=String($t+1).padStart(2,"0"),Bt.chapter.textContent=String($t+1).padStart(2,"0"),Bt.title.textContent=Ly[$t],Bt.total.textContent=String(Bn).padStart(2,"0"),Bt.prev.disabled=$t===0,Bt.next.disabled=$t===Bn-1,Bt.chapterDots.forEach((i,t)=>i.classList.toggle("active",t===$t))}function bu(){Xo&&(clearTimeout(Xo),Xo=null)}function Tp(){bu(),$t<Bn-1&&(Xo=setTimeout(()=>zi($t+1,!0),5200))}function Ra(i,t){i.userData.progress=t,i.rotation.y=-t*Math.PI,i.userData.frontMat.uniforms.uTurn.value=t,i.userData.backMat.uniforms.uTurn.value=t}function Pa(i){return .13+(Bn-i)*.0038}function Ep(i){return .24+i*.0038}function hf(i,t=null,e=[]){const n=new Set(e.filter(r=>r>=0&&r<Bn));mi.forEach((r,s)=>{if(r===t){r.visible=!0;return}const o=s<i;Ra(r,o?1:0),r.position.z=o?Ep(s):Pa(s),r.renderOrder=o?20+s:0,o&&(r.userData.backMat.uniforms.uReveal.value=1),s===i&&(r.userData.frontMat.uniforms.uReveal.value=1),r.visible=s===i||s===i-1||n.has(s)})}function Dy(){mi.forEach((i,t)=>{Ie.killTweensOf(i.position),Ra(i,0),i.position.z=Pa(t),i.renderOrder=0,i.userData.frontMat.uniforms.uReveal.value=t===0?1:0,i.userData.backMat.uniforms.uReveal.value=0,i.visible=t===0}),$t=0,Eu()}function zi(i,t=!1){if(t||bu(),!gn||(i=Math.max(0,Math.min(Bn-1,i)),i===$t||Di))return;Di=!0;const e=i>$t,n=mi[e?$t:i],r=e?1:0;hf(e?i:$t,n,[$t-1,$t,i-1,i]),n.visible=!0,n.renderOrder=100;const s=e?Ep(n.userData.index):Pa(n.userData.index),o={p:n.userData.progress},a=Rt?.42:1.05;if(e){const g=n.userData.backMat.uniforms.uReveal,d=mi[i].userData.frontMat.uniforms.uReveal;Ie.killTweensOf(g),Ie.killTweensOf(d),Ie.fromTo(g,{value:0},{value:1,duration:a,delay:Rt?.12:.48,ease:"power2.out"}),Ie.fromTo(d,{value:0},{value:1,duration:a,delay:Rt?.18:.72,ease:"power2.out"})}else{const g=n.userData.frontMat.uniforms.uReveal;Ie.killTweensOf(g),Ie.fromTo(g,{value:0},{value:1,duration:a,delay:Rt?.12:.48,ease:"power2.out"})}Ie.fromTo(".light-leak",{opacity:.32},{opacity:.72,duration:.5,yoyo:!0,repeat:1,ease:"sine.inOut"});const l=Rt?.2:1.65,c=Rt?.08:1.55,u=Rt?.45:1.85,h=c+u+(Rt?0:.18),f=Rt?.2:1.85,p=Rt?0:2.4,_=Rt?.3:2.75;Ie.timeline({onComplete(){n.userData.progress=r,$t=i,hf($t),Di=!1,Eu(),t&&Tp()}}).to(se.position,{...ci.flipWide,duration:l,ease:"sine.inOut"},0).to(se,{fov:Xs.normal,duration:l,ease:"sine.inOut",onUpdate:()=>se.updateProjectionMatrix()},0).to(Ge,{focusY:0,duration:l,ease:"sine.inOut"},0).to(o,{p:r,duration:u,ease:"power2.inOut",onUpdate(){Ra(n,o.p)}},c).to(n.position,{z:s,duration:u,ease:"power2.inOut"},c).to(se.position,{...ci.pageTurn(e),duration:u*.78,ease:"sine.inOut"},c).to(se.position,{...ci.leftImageZoom,duration:f,ease:"sine.inOut"},h).to(se,{fov:Xs.close,duration:f,ease:"sine.inOut",onUpdate:()=>se.updateProjectionMatrix()},h).to(Ge,{focusX:ay,duration:f,ease:"sine.inOut"},h).to(Ge,{focusY:cy,duration:f,ease:"sine.inOut"},h).to(se.position,{...ci.spreadZoom,duration:_,ease:"sine.inOut"},h+f+p).to(Ge,{focusX:ly,duration:_,ease:"sine.inOut"},h+f+p).to(Ge,{focusY:uy,duration:_,ease:"sine.inOut"},h+f+p).to(xe.rotation,{z:e?-.055:-.005,duration:u*.65,yoyo:!0,repeat:1,ease:"sine.inOut"},c)}function wu(){if(gn)return;gn=!0,document.documentElement.classList.remove("book-closed"),Bt.enter&&(Bt.enter.tabIndex=-1,Bt.enter.setAttribute("aria-hidden","true"));const i=Rt?.7:2.35;document.documentElement.classList.add("is-opening");const t=Ie.timeline({delay:.8,defaults:{ease:"power3.inOut"},onComplete(){Ge.active=!1,document.documentElement.classList.remove("is-opening"),Tp()}});$S(t,ci.establish,Rt?.25:.72,0,"power2.out").to(se.position,{...ci.closed,duration:Rt?.35:1.05,ease:"power2.inOut"},Rt?.18:.42).to(se,{fov:Xs.normal,duration:Rt?.35:1.05,ease:"power2.inOut",onUpdate:()=>se.updateProjectionMatrix()},Rt?.18:.42).to($n.rotation,{z:-.008,duration:1.05,ease:"sine.inOut"},0).to(ge.position,{z:.68,duration:Rt?.18:.48,ease:"power2.out"},Rt?.25:1.02).to(ge.rotation,{y:-.24,duration:Rt?.18:.48,ease:"power2.out"},Rt?.25:1.02).to(ge.rotation,{y:-Math.PI,duration:i,ease:"power3.inOut"},Rt?.42:1.42).to(xe.position,{...ca.open,duration:i,ease:"power2.inOut"},Rt?.42:1.42).to(Ge,{focusX:ry,duration:i*.85,ease:"power2.inOut"},Rt?.42:1.42).to(Ge,{focusY:uf,duration:i*.85,ease:"power2.inOut"},Rt?.42:1.42).to(se.position,{...ci.coverOpen,duration:i*.58,ease:"power2.inOut"},Rt?.42:1.42).to(se.position,{...ci.imageZoom,duration:i*.82,ease:"sine.inOut"},Rt?.72:2.45).to(se,{fov:Xs.close,duration:i*.82,ease:"sine.inOut",onUpdate:()=>se.updateProjectionMatrix()},Rt?.72:2.45).fromTo(Ge,{focusX:sy},{focusX:oy,duration:Rt?.3:3.35,ease:"sine.inOut",immediateRender:!1},Rt?.82:2.72).to(Ge,{focusY:uf*.84,duration:Rt?.3:3.35,ease:"sine.inOut"},Rt?.82:2.72).to(mi[$t].userData.frontMat.uniforms.uReveal,{value:1,duration:1.25,ease:"power2.out"},Rt?.68:3.42).fromTo(".light-leak",{opacity:.25},{opacity:.8,duration:.55,yoyo:!0,repeat:1,ease:"sine.inOut"},Rt?.55:3.32).to(ge.position,{z:-.5,duration:Rt?.18:.6,ease:"back.out(1.2)"},Rt?1.12:3.8).set(Bt.story,{visibility:"visible"},Rt?1.08:4.02).to(Bt.story,{opacity:1,duration:.8},Rt?1.12:4.1)}function bp(){if(!gn||Di)return;bu(),Di=!0,Ge.active=!0,document.documentElement.classList.add("is-opening");const i=Rt?.65:2.05,t=mi.filter(n=>n.visible&&n.userData.progress>.001).map(n=>({page:n,state:{p:n.userData.progress}})),e=Ie.timeline({defaults:{ease:"power3.inOut"},onComplete(){Dy(),gn=!1,Di=!1,document.documentElement.classList.remove("is-opening"),document.documentElement.classList.add("book-closed"),Bt.enter&&(Bt.enter.textContent="Reopen Book",Bt.enter.tabIndex=0,Bt.enter.setAttribute("aria-hidden","false")),Bt.intro&&Ie.set(Bt.intro,{opacity:1})}});t.forEach(({page:n,state:r})=>{n.visible=!0,n.renderOrder=90,e.to(r,{p:0,duration:Rt?.2:.78,ease:"power2.inOut",onUpdate(){Ra(n,r.p)}},0),e.to(n.position,{z:Pa(n.userData.index),duration:Rt?.2:.78,ease:"power2.inOut"},0)}),e.to(Bt.story,{opacity:0,duration:.35},0).set(Bt.story,{visibility:"hidden"},.36).to(ge.position,{z:.68,duration:Rt?.16:.45,ease:"power2.out"},.12).to(ge.rotation,{y:0,duration:i},Rt?.22:.42).to(xe.position,{...ca.closed,duration:i,ease:"power2.inOut"},Rt?.22:.42).to(Ge,{focusX:qe/2,duration:i*.82,ease:"power2.inOut"},Rt?.22:.42).to(Ge,{focusY:0,duration:i*.82,ease:"power2.inOut"},Rt?.22:.42).to(se.position,{...ci.closed,duration:i+.12,ease:"power2.inOut"},Rt?.22:.42).to(se,{fov:Xs.normal,duration:i+.12,ease:"power2.inOut",onUpdate:()=>se.updateProjectionMatrix()},Rt?.22:.42).to(ge.position,{z:.43,duration:Rt?.16:.5,ease:"back.out(1.15)"},Rt?.7:2.48)}var mf;(mf=Bt.enter)==null||mf.addEventListener("click",wu);Bt.closeBook.addEventListener("click",bp);Bt.next.addEventListener("click",()=>zi($t+1));Bt.prev.addEventListener("click",()=>zi($t-1));Bt.chapterDots.slice(0,Bn).forEach((i,t)=>i.addEventListener("click",()=>zi(t)));const wp=[];function Ui(i){Bt.toast.textContent=i,Ie.killTweensOf(Bt.toast),Ie.timeline().to(Bt.toast,{opacity:1,y:0,duration:.25}).to(Bt.toast,{opacity:0,y:-8,duration:.4,delay:1.5})}function Uy(i,t){return t==="back"?{x:120,y:165,w:780,h:430}:i===0?{x:132,y:225,w:750,h:390}:{x:122,y:190,w:780,h:445}}function ff(i,t,e){const n=Uy(t,e);i.uniforms.uPhotoRect.value.set(n.x/1024,1-(n.y+n.h)/1024,(n.x+n.w)/1024,1-n.y/1024),i.uniforms.uPhotoProtect.value=1}function Ap(i,t,e,{notify:n=!0}={}){if(Di)return n&&Ui("Wait for the page to settle"),!1;if(t<0||t>=Bn)return!1;const r=mi[t],s=Uc(rs[t],e,t,i.image);return e==="front"?(r.userData.frontMat.uniforms.map.value=s,r.userData.frontTexture.dispose(),r.userData.frontTexture=s,ff(r.userData.frontMat,t,e)):(r.userData.backMat.uniforms.map.value=s,r.userData.backTexture.dispose(),r.userData.backTexture=s,ff(r.userData.backMat,t,e)),t===$t&&document.querySelectorAll(".photo-thumb").forEach(o=>o.classList.toggle("active",o.dataset.url===i.url)),n&&Ui(`Photo placed on ${e} of page ${t+1}`),!0}function Iy(i,t,e){return Ap(i,t,"front",e)}function Ny(i){Iy(i,$t)}function df(i){if(Di){Ui("Wait for the page to settle");return}const t=(Bn-$t)*2,e=i.slice(0,t).filter((n,r)=>{const s=$t+Math.floor(r/2),o=r%2===0?"front":"back";return Ap(n,s,o,{notify:!1})}).length;if(e>0){document.querySelectorAll(".photo-thumb").forEach(s=>s.classList.toggle("active",s.dataset.url===i[0].url));const n=$t+Math.ceil(e/2),r=e===1?`Photo placed on page ${$t+1}`:`${e} photos placed front/back across pages ${$t+1}-${n}`;Ui(i.length>t?`${r}; ${i.length-t} not placed`:r)}else Ui("No pages available from here")}function Oy(i){var n;(n=Bt.photoStrip.querySelector(".photo-strip__empty"))==null||n.remove();const t=document.createElement("button");t.type="button",t.className="photo-thumb",t.dataset.url=i.url,t.setAttribute("aria-label",`Use ${i.name} on the current page`);const e=document.createElement("img");e.src=i.url,e.alt="",t.append(e),t.addEventListener("click",()=>Ny(i)),Bt.photoStrip.append(t)}Bt.addPhoto.addEventListener("click",()=>Bt.photoInput.click());Bt.photoInput.addEventListener("change",()=>{const i=[...Bt.photoInput.files].filter(n=>n.type.startsWith("image/"));if(!i.length){Bt.photoInput.value="";return}const t=new Array(i.length);let e=0;i.forEach((n,r)=>{const s=URL.createObjectURL(n),o=new Image;o.onload=()=>{const a={url:s,image:o,name:n.name};t[r]=a,wp.push(a),Oy(a),e++,e===i.length&&df(t.filter(Boolean))},o.onerror=()=>{URL.revokeObjectURL(s),Ui(`Could not read ${n.name}`),e++,e===i.length&&df(t.filter(Boolean))},o.src=s}),Bt.photoInput.value=""});addEventListener("beforeunload",()=>wp.forEach(i=>URL.revokeObjectURL(i.url)));Bt.editPage.addEventListener("click",()=>{const i=document.querySelector(".experience").classList.toggle("editing");Bt.editPage.querySelector("span").textContent=i?"Save Page":"Edit Page",Ui(i?"Page editing enabled":"Page changes kept for this session")});Bt.settings.addEventListener("click",()=>{document.body.classList.toggle("calm-mode"),Ui(document.body.classList.contains("calm-mode")?"Reduced visual effects":"Full atmosphere restored")});addEventListener("keydown",i=>{!gn&&["Enter"," "].includes(i.key)?wu():gn&&i.key==="Escape"?bp():gn&&i.key==="ArrowRight"?zi($t+1):gn&&i.key==="ArrowLeft"&&zi($t-1)});let Cl=!1;addEventListener("wheel",i=>{!gn||Cl||Math.abs(i.deltaY)<8||(Cl=!0,zi($t+(i.deltaY>0?1:-1)),setTimeout(()=>Cl=!1,1400))},{passive:!0});la.addEventListener("pointerdown",i=>{ys=i.clientX,la.setPointerCapture(i.pointerId)});la.addEventListener("pointerup",i=>{gn&&ys!==null&&Math.abs(i.clientX-ys)>45&&zi($t+(i.clientX<ys?1:-1)),ys=null});const Br=new it,pf=new L;addEventListener("pointermove",i=>{Br.x=i.clientX/innerWidth*2-1,Br.y=i.clientY/innerHeight*2-1});addEventListener("resize",()=>{se.aspect=innerWidth/innerHeight,se.updateProjectionMatrix(),Cn.setPixelRatio(Math.min(devicePixelRatio,innerWidth<760?1.35:1.8)),Cn.setSize(innerWidth,innerHeight),Ma.setSize(innerWidth,innerHeight)});Ie.timeline({delay:.65}).to(Bt.loader.querySelector("p"),{opacity:0,duration:.35}).to(Bt.loader,{opacity:0,duration:.9,ease:"power2.inOut",onComplete:()=>{Bt.loader.remove(),wu()}},.25);const Fy=new ad;Rt||Ie.to(xe.rotation,{y:.012,x:-.018,duration:8,ease:"sine.inOut",repeat:-1,yoyo:!0});function Cp(){const i=Fy.getElapsedTime();yp.uniforms.uTime.value=i;const t=gn?Br.x*.09:Br.x*.18,e=gn?Br.y*.07:Br.y*.13;pf.set(xe.position.x+Ge.focusX+t,xe.position.y+Ge.focusY-e,0),se.lookAt(pf),Bi.intensity=(Ge.active?146:138)+Math.sin(i*.7)*1.2;const n=_p.children.find(r=>r.isPointLight);if(n&&(n.intensity=3+Math.sin(i*8.3)*.35+Math.sin(i*13.7)*.2),ri!=null&&ri.userData.needle){const r=i*(5.8+Math.sin(i*1.7)*2.4)+Math.sin(i*11.5)*.42+Math.sin(i*23.3)*.12;ri.userData.needle.rotation.z=r,ri.userData.rose.rotation.z=-r*.12+Math.sin(i*7.1)*.035,ri.userData.face.rotation.z=Math.sin(i*5.6)*.018,ri.userData.glass.material.opacity=.1+Math.abs(Math.sin(i*10.2))*.08,ri.position.z=-.72+Math.sin(i*18.5)*.012}Oc.rotation.x=.18+Math.sin(i*1.15)*.018,Oc.rotation.z=-.9+Math.sin(i*.85)*.012,Ws?Ma.render():Cn.render(an,se),requestAnimationFrame(Cp)}Eu();Cp();
