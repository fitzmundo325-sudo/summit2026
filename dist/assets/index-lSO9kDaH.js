(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Du="169",Ym=0,Uh=1,Zm=2,Td=1,Ed=2,hi=3,Hn=0,Qt=1,Xt=2,Kn=0,ns=1,us=2,Ih=3,Nh=4,$m=5,dr=100,Km=101,Jm=102,jm=103,Qm=104,e_=200,t_=201,n_=202,i_=203,fc=204,dc=205,r_=206,s_=207,o_=208,a_=209,l_=210,c_=211,u_=212,h_=213,f_=214,pc=0,mc=1,_c=2,hs=3,gc=4,vc=5,xc=6,yc=7,bd=0,d_=1,p_=2,ki=0,m_=1,__=2,g_=3,wd=4,v_=5,x_=6,y_=7,Ad=300,fs=301,ds=302,Mc=303,Sc=304,ka=306,Tc=1e3,mr=1001,Ec=1002,an=1003,M_=1004,wo=1005,Jt=1006,ml=1007,_r=1008,vi=1009,Cd=1010,Rd=1011,js=1012,Uu=1013,Sr=1014,mi=1015,wr=1016,Iu=1017,Nu=1018,ps=1020,Pd=35902,Ld=1021,Dd=1022,kn=1023,Ud=1024,Id=1025,is=1026,ms=1027,Nd=1028,Ou=1029,Od=1030,Fu=1031,Bu=1033,sa=33776,oa=33777,aa=33778,la=33779,bc=35840,wc=35841,Ac=35842,Cc=35843,Rc=36196,Pc=37492,Lc=37496,Dc=37808,Uc=37809,Ic=37810,Nc=37811,Oc=37812,Fc=37813,Bc=37814,zc=37815,kc=37816,Vc=37817,Gc=37818,Hc=37819,Wc=37820,Xc=37821,ca=36492,qc=36494,Yc=36495,Fd=36283,Zc=36284,$c=36285,Kc=36286,S_=3200,Bd=3201,zd=0,T_=1,Ni="",rn="srgb",Ki="srgb-linear",zu="display-p3",Va="display-p3-linear",va="linear",ft="srgb",xa="rec709",ya="p3",Lr=7680,Oh=519,E_=512,b_=513,w_=514,kd=515,A_=516,C_=517,R_=518,P_=519,Jc=35044,Fh="300 es",_i=2e3,Ma=2001;class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_l=Math.PI/180,Sa=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function zt(i,e,t){return Math.max(e,Math.min(t,i))}function L_(i,e){return(i%e+e)%e}function gl(i,e,t){return(1-t)*i+t*e}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class te{constructor(e=0,t=0){te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=r[0],p=r[3],m=r[6],M=r[1],x=r[4],y=r[7],A=r[2],C=r[5],b=r[8];return s[0]=o*g+a*M+l*A,s[3]=o*p+a*x+l*C,s[6]=o*m+a*y+l*b,s[1]=c*g+u*M+h*A,s[4]=c*p+u*x+h*C,s[7]=c*m+u*y+h*b,s[2]=f*g+d*M+_*A,s[5]=f*p+d*x+_*C,s[8]=f*m+d*y+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vl.makeScale(e,t)),this}rotate(e){return this.premultiply(vl.makeRotation(-e)),this}translate(e,t){return this.premultiply(vl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vl=new Ge;function Vd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function D_(){const i=Qs("canvas");return i.style.display="block",i}const Bh={};function ua(i){i in Bh||(Bh[i]=!0,console.warn(i))}function U_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function I_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function N_(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zh=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kh=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[Ki]:{transfer:va,primaries:xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[rn]:{transfer:ft,primaries:xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Va]:{transfer:va,primaries:ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(kh),fromReference:i=>i.applyMatrix3(zh)},[zu]:{transfer:ft,primaries:ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(kh),fromReference:i=>i.applyMatrix3(zh).convertLinearToSRGB()}},O_=new Set([Ki,Va]),et={enabled:!0,_workingColorSpace:Ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!O_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Rs[e].toReference,r=Rs[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Rs[i].primaries},getTransfer:function(i){return i===Ni?va:Rs[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Rs[e].luminanceCoefficients)}};function rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Dr;class F_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Dr===void 0&&(Dr=Qs("canvas")),Dr.width=e.width,Dr.height=e.height;const n=Dr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Dr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=rs(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rs(t[n]/255)*255):t[n]=rs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B_=0;class Gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yl(r[o].image)):s.push(yl(r[o]))}else s=yl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function yl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?F_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let z_=0;class kt extends ws{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=mr,r=mr,s=Jt,o=_r,a=kn,l=vi,c=kt.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=gi(),this.name="",this.source=new Gd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tc:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tc:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Ad;kt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,r=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(d+1)/2,A=(m+1)/2,C=(u+f)/4,b=(h+g)/4,P=(_+p)/4;return x>y&&x>A?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=C/n,s=b/n):y>A?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=C/r,s=P/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=b/s,r=P/s),this.set(n,r,s,t),this}let M=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k_ extends ws{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new kt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends k_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hd extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class V_ extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mo{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-a;const m=l*f+c*d+u*_+h*g,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const A=Math.sqrt(x),C=Math.atan2(A,m*M);p=Math.sin(p*C)/A,a=Math.sin(a*C)/A}const y=a*M;if(l=l*p+f*y,c=c*p+d*y,u=u*p+_*y,h=h*p+g*y,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ml.copy(this).projectOnVector(e),this.sub(Ml)}reflect(e){return this.sub(Ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ml=new L,Vh=new mo;class _o{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ao.copy(n.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),Co.subVectors(this.max,Ps),Ur.subVectors(e.a,Ps),Ir.subVectors(e.b,Ps),Nr.subVectors(e.c,Ps),Ai.subVectors(Ir,Ur),Ci.subVectors(Nr,Ir),nr.subVectors(Ur,Nr);let t=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-nr.z,nr.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,nr.z,0,-nr.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-nr.y,nr.x,0];return!Sl(t,Ur,Ir,Nr,Co)||(t=[1,0,0,0,1,0,0,0,1],!Sl(t,Ur,Ir,Nr,Co))?!1:(Ro.crossVectors(Ai,Ci),t=[Ro.x,Ro.y,Ro.z],Sl(t,Ur,Ir,Nr,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new L,new L,new L,new L,new L,new L,new L,new L],Fn=new L,Ao=new _o,Ur=new L,Ir=new L,Nr=new L,Ai=new L,Ci=new L,nr=new L,Ps=new L,Co=new L,Ro=new L,ir=new L;function Sl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ir.fromArray(i,s);const a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),u=n.dot(ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const G_=new _o,Ls=new L,Tl=new L;class go{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):G_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const t=Ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ls,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(Tl)),this.expandByPoint(Ls.copy(e.center).sub(Tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new L,El=new L,Po=new L,Ri=new L,bl=new L,Lo=new L,wl=new L;class ku{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){El.copy(e).add(t).multiplyScalar(.5),Po.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(El);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Po),a=Ri.dot(this.direction),l=-Ri.dot(Po),c=Ri.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(El).addScaledVector(Po,f),d}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),r=ai.dot(ai)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,r,s){bl.subVectors(t,e),Lo.subVectors(n,e),wl.crossVectors(bl,Lo);let o=this.direction.dot(wl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(Lo.crossVectors(Ri,Lo));if(l<0)return null;const c=a*this.direction.dot(bl.cross(Ri));if(c<0||l+c>o)return null;const u=-a*Ri.dot(wl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,r,s,o,a,l,c,u,h,f,d,_,g,p){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,d,_,g,p)}set(e,t,n,r,s,o,a,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),o=1/Or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(H_,e,W_)}lookAt(e,t,n){const r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Pi.crossVectors(n,gn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Pi.crossVectors(n,gn)),Pi.normalize(),Do.crossVectors(gn,Pi),r[0]=Pi.x,r[4]=Do.x,r[8]=gn.x,r[1]=Pi.y,r[5]=Do.y,r[9]=gn.y,r[2]=Pi.z,r[6]=Do.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],M=n[3],x=n[7],y=n[11],A=n[15],C=r[0],b=r[4],P=r[8],U=r[12],v=r[1],T=r[5],F=r[9],O=r[13],k=r[2],W=r[6],B=r[10],q=r[14],H=r[3],ae=r[7],he=r[11],de=r[15];return s[0]=o*C+a*v+l*k+c*H,s[4]=o*b+a*T+l*W+c*ae,s[8]=o*P+a*F+l*B+c*he,s[12]=o*U+a*O+l*q+c*de,s[1]=u*C+h*v+f*k+d*H,s[5]=u*b+h*T+f*W+d*ae,s[9]=u*P+h*F+f*B+d*he,s[13]=u*U+h*O+f*q+d*de,s[2]=_*C+g*v+p*k+m*H,s[6]=_*b+g*T+p*W+m*ae,s[10]=_*P+g*F+p*B+m*he,s[14]=_*U+g*O+p*q+m*de,s[3]=M*C+x*v+y*k+A*H,s[7]=M*b+x*T+y*W+A*ae,s[11]=M*P+x*F+y*B+A*he,s[15]=M*U+x*O+y*q+A*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+g*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],M=h*p*c-g*f*c+g*l*d-a*p*d-h*l*m+a*f*m,x=_*f*c-u*p*c-_*l*d+o*p*d+u*l*m-o*f*m,y=u*g*c-_*h*c+_*a*d-o*g*d-u*a*m+o*h*m,A=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,C=t*M+n*x+r*y+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=M*b,e[1]=(g*f*s-h*p*s-g*r*d+n*p*d+h*r*m-n*f*m)*b,e[2]=(a*p*s-g*l*s+g*r*c-n*p*c-a*r*m+n*l*m)*b,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*b,e[4]=x*b,e[5]=(u*p*s-_*f*s+_*r*d-t*p*d-u*r*m+t*f*m)*b,e[6]=(_*l*s-o*p*s-_*r*c+t*p*c+o*r*m-t*l*m)*b,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*b,e[8]=y*b,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*m-t*h*m)*b,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*m+t*a*m)*b,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*b,e[12]=A*b,e[13]=(u*g*r-_*h*r+_*n*f-t*g*f-u*n*p+t*h*p)*b,e[14]=(_*a*r-o*g*r-_*n*l+t*g*l+o*n*p-t*a*p)*b,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,p=o*h,m=a*h,M=l*c,x=l*u,y=l*h,A=n.x,C=n.y,b=n.z;return r[0]=(1-(g+m))*A,r[1]=(d+y)*A,r[2]=(_-x)*A,r[3]=0,r[4]=(d-y)*C,r[5]=(1-(f+m))*C,r[6]=(p+M)*C,r[7]=0,r[8]=(_+x)*b,r[9]=(p-M)*b,r[10]=(1-(f+g))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Or.set(r[0],r[1],r[2]).length();const o=Or.set(r[4],r[5],r[6]).length(),a=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,u=1/o,h=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,t.setFromRotationMatrix(Bn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=_i){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let d,_;if(a===_i)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ma)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=_i){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),f=(t+e)*c,d=(n+r)*u;let _,g;if(a===_i)_=(o+s)*h,g=-2*h;else if(a===Ma)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Or=new L,Bn=new lt,H_=new L(0,0,0),W_=new L(1,1,1),Pi=new L,Do=new L,gn=new L,Gh=new lt,Hh=new mo;class Qn{constructor(e=0,t=0,n=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Wd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X_=0;const Wh=new L,Fr=new mo,li=new lt,Uo=new L,Ds=new L,q_=new L,Y_=new mo,Xh=new L(1,0,0),qh=new L(0,1,0),Yh=new L(0,0,1),Zh={type:"added"},Z_={type:"removed"},Br={type:"childadded",child:null},Al={type:"childremoved",child:null};class Dt extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new L,t=new Qn,n=new mo,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ge}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Xh,e)}rotateY(e){return this.rotateOnAxis(qh,e)}rotateZ(e){return this.rotateOnAxis(Yh,e)}translateOnAxis(e,t){return Wh.copy(e).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xh,e)}translateY(e){return this.translateOnAxis(qh,e)}translateZ(e){return this.translateOnAxis(Yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Uo.copy(e):Uo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Ds,Uo,this.up):li.lookAt(Uo,Ds,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(li),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zh),Br.child=e,this.dispatchEvent(Br),Br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Z_),Al.child=e,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zh),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new L(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new L,ci=new L,Cl=new L,ui=new L,zr=new L,kr=new L,$h=new L,Rl=new L,Pl=new L,Ll=new L,Dl=new Je,Ul=new Je,Il=new Je;class Dn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zn.subVectors(e,t),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){zn.subVectors(r,t),ci.subVectors(n,t),Cl.subVectors(e,t);const o=zn.dot(zn),a=zn.dot(ci),l=zn.dot(Cl),c=ci.dot(ci),u=ci.dot(Cl),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Dl.setScalar(0),Ul.setScalar(0),Il.setScalar(0),Dl.fromBufferAttribute(e,t),Ul.fromBufferAttribute(e,n),Il.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Dl,s.x),o.addScaledVector(Ul,s.y),o.addScaledVector(Il,s.z),o}static isFrontFacing(e,t,n,r){return zn.subVectors(n,t),ci.subVectors(e,t),zn.cross(ci).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),zn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;zr.subVectors(r,n),kr.subVectors(s,n),Rl.subVectors(e,n);const l=zr.dot(Rl),c=kr.dot(Rl);if(l<=0&&c<=0)return t.copy(n);Pl.subVectors(e,r);const u=zr.dot(Pl),h=kr.dot(Pl);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(zr,o);Ll.subVectors(e,s);const d=zr.dot(Ll),_=kr.dot(Ll);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(kr,a);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return $h.subVectors(s,r),a=(h-u)/(h-u+(d-_)),t.copy(r).addScaledVector($h,a);const m=1/(p+g+f);return o=g*m,a=f*m,t.copy(n).addScaledVector(zr,o).addScaledVector(kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Io={h:0,s:0,l:0};function Nl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=et.workingColorSpace){if(e=L_(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Nl(o,s,e+1/3),this.g=Nl(o,s,e),this.b=Nl(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const n=Xd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=xl(e.r),this.g=xl(e.g),this.b=xl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return et.fromWorkingColorSpace(Wt.copy(this),e),Math.round(zt(Wt.r*255,0,255))*65536+Math.round(zt(Wt.g*255,0,255))*256+Math.round(zt(Wt.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=rn){et.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,r=Wt.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Io);const n=gl(Li.h,Io.h,t),r=gl(Li.s,Io.s,t),s=gl(Li.l,Io.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ne;Ne.NAMES=Xd;let $_=0;class Ji extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=ns,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=dc,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fc&&(n.blendSrc=this.blendSrc),this.blendDst!==dc&&(n.blendDst=this.blendDst),this.blendEquation!==dr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yi extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new L,No=new te;class Tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jc,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}}class qd extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yd extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let K_=0;const Pn=new lt,Ol=new Dt,Vr=new L,vn=new _o,Us=new _o,Nt=new L;class mt extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vd(e)?Yd:qd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return Ol.lookAt(e),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(vn.min,Us.min),vn.expandByPoint(Nt),Nt.addVectors(vn.max,Us.max),vn.expandByPoint(Nt)):(vn.expandByPoint(Us.min),vn.expandByPoint(Us.max))}vn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(Vr.fromBufferAttribute(e,c),Nt.add(Vr)),r=Math.max(r,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new L,l[P]=new L;const c=new L,u=new L,h=new L,f=new te,d=new te,_=new te,g=new L,p=new L;function m(P,U,v){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,U),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,U),_.fromBufferAttribute(s,v),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const T=1/(d.x*_.y-_.x*d.y);isFinite(T)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(T),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(T),a[P].add(g),a[U].add(g),a[v].add(g),l[P].add(p),l[U].add(p),l[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,U=M.length;P<U;++P){const v=M[P],T=v.start,F=v.count;for(let O=T,k=T+F;O<k;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new L,y=new L,A=new L,C=new L;function b(P){A.fromBufferAttribute(r,P),C.copy(A);const U=a[P];x.copy(U),x.sub(A.multiplyScalar(A.dot(U))).normalize(),y.crossVectors(C,U);const T=y.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,T)}for(let P=0,U=M.length;P<U;++P){const v=M[P],T=v.start,F=v.count;for(let O=T,k=T+F;O<k;O+=3)b(e.getX(O+0)),b(e.getX(O+1)),b(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new Tn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kh=new lt,rr=new ku,Oo=new go,Jh=new L,Fo=new L,Bo=new L,zo=new L,Fl=new L,ko=new L,jh=new L,Vo=new L;class Te extends Dt{constructor(e=new mt,t=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ko.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Fl.fromBufferAttribute(h,e),o?ko.addScaledVector(Fl,u):ko.addScaledVector(Fl.sub(t),u))}t.add(ko)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(Oo.containsPoint(rr.origin)===!1&&(rr.intersectSphere(Oo,Jh)===null||rr.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&(Kh.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Kh),!(n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,A=x;y<A;y+=3){const C=a.getX(y),b=a.getX(y+1),P=a.getX(y+2);r=Go(this,m,e,n,c,u,h,C,b,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const M=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);r=Go(this,o,e,n,c,u,h,M,x,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,A=x;y<A;y+=3){const C=y,b=y+1,P=y+2;r=Go(this,m,e,n,c,u,h,C,b,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const M=p,x=p+1,y=p+2;r=Go(this,o,e,n,c,u,h,M,x,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function J_(i,e,t,n,r,s,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Hn,a),l===null)return null;Vo.copy(a),Vo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Vo);return c<t.near||c>t.far?null:{distance:c,point:Vo.clone(),object:i}}function Go(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Fo),i.getVertexPosition(l,Bo),i.getVertexPosition(c,zo);const u=J_(i,e,t,n,Fo,Bo,zo,jh);if(u){const h=new L;Dn.getBarycoord(jh,Fo,Bo,zo,h),r&&(u.uv=Dn.getInterpolatedAttribute(r,a,l,c,h,new te)),s&&(u.uv1=Dn.getInterpolatedAttribute(s,a,l,c,h,new te)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};Dn.getNormal(Fo,Bo,zo,f.normal),u.face=f,u.barycoord=h}return u}class Ar extends mt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2));function _(g,p,m,M,x,y,A,C,b,P,U){const v=y/b,T=A/P,F=y/2,O=A/2,k=C/2,W=b+1,B=P+1;let q=0,H=0;const ae=new L;for(let he=0;he<B;he++){const de=he*T-O;for(let Be=0;Be<W;Be++){const We=Be*v-F;ae[g]=We*M,ae[p]=de*x,ae[m]=k,c.push(ae.x,ae.y,ae.z),ae[g]=0,ae[p]=0,ae[m]=C>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(Be/b),h.push(1-he/P),q+=1}}for(let he=0;he<P;he++)for(let de=0;de<b;de++){const Be=f+de+W*he,We=f+de+W*(he+1),Y=f+(de+1)+W*(he+1),Q=f+(de+1)+W*he;l.push(Be,We,Q),l.push(We,Y,Q),H+=6}a.addGroup(d,H,U),d+=H,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=_s(i[t]);for(const r in n)e[r]=n[r]}return e}function j_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Vu={clone:_s,merge:Kt};var Q_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q_,this.fragmentShader=eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=j_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $d extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=_i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new L,Qh=new te,ef=new te;class sn extends $d{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_l*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(_l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,Qh,ef),t.subVectors(ef,Qh)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_l*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gr=-90,Hr=1;class tg extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(Gr,Hr,e,t);r.layers=this.layers,this.add(r);const s=new sn(Gr,Hr,e,t);s.layers=this.layers,this.add(s);const o=new sn(Gr,Hr,e,t);o.layers=this.layers,this.add(o);const a=new sn(Gr,Hr,e,t);a.layers=this.layers,this.add(a);const l=new sn(Gr,Hr,e,t);l.layers=this.layers,this.add(l);const c=new sn(Gr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Kd extends kt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:fs,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ng extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Kd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ar(5,5,5),s=new dn({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Kn});s.uniforms.tEquirect.value=t;const o=new Te(r,s),a=t.minFilter;return t.minFilter===_r&&(t.minFilter=Jt),new tg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Bl=new L,ig=new L,rg=new Ge;class ur{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Bl.subVectors(n,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rg.getNormalMatrix(e),r=this.coplanarPoint(Bl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new go,Ho=new L;class Gu{constructor(e=new ur,t=new ur,n=new ur,r=new ur,s=new ur,o=new ur){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],_=r[9],g=r[10],p=r[11],m=r[12],M=r[13],x=r[14],y=r[15];if(n[0].setComponents(l-s,f-c,p-d,y-m).normalize(),n[1].setComponents(l+s,f+c,p+d,y+m).normalize(),n[2].setComponents(l+o,f+u,p+_,y+M).normalize(),n[3].setComponents(l-o,f-u,p-_,y-M).normalize(),n[4].setComponents(l-a,f-h,p-g,y-x).normalize(),t===_i)n[5].setComponents(l+a,f+h,p+g,y+x).normalize();else if(t===Ma)n[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ho.x=r.normal.x>0?e.max.x:e.min.x,Ho.y=r.normal.y>0?e.max.y:e.min.y,Ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jd(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function sg(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Wn extends mt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const M=m*f-o;for(let x=0;x<c;x++){const y=x*h-s;_.push(y,-M,0),g.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const x=M+c*m,y=M+c*(m+1),A=M+1+c*(m+1),C=M+1+c*m;d.push(x,y,C),d.push(y,A,C)}this.setIndex(d),this.setAttribute("position",new nt(_,3)),this.setAttribute("normal",new nt(g,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.widthSegments,e.heightSegments)}}var og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ag=`#ifdef USE_ALPHAHASH
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
#endif`,lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ug=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fg=`#ifdef USE_AOMAP
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
#endif`,dg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pg=`#ifdef USE_BATCHING
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
#endif`,mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xg=`#ifdef USE_IRIDESCENCE
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
#endif`,yg=`#ifdef USE_BUMPMAP
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
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rg=`#define PI 3.141592653589793
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
} // validated`,Pg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lg=`vec3 transformedNormal = objectNormal;
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
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`
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
}`,Bg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yg=`#ifdef USE_GRADIENTMAP
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
}`,Zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jg=`uniform bool receiveShadow;
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
#endif`,jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i0=`PhysicalMaterial material;
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
#endif`,r0=`struct PhysicalMaterial {
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
}`,s0=`
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m0=`#if defined( USE_POINTS_UV )
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
#endif`,_0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`#ifdef USE_MORPHTARGETS
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
#endif`,S0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,E0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C0=`#ifdef USE_NORMALMAP
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
#endif`,R0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W0=`float getShadowMask() {
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
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,$0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ov=`uniform sampler2D t2D;
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
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hv=`#include <common>
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
}`,fv=`#if DEPTH_PACKING == 3200
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
}`,dv=`#define DISTANCE
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
}`,pv=`#define DISTANCE
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
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`uniform float scale;
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
}`,vv=`uniform vec3 diffuse;
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
}`,xv=`#include <common>
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
}`,yv=`uniform vec3 diffuse;
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
}`,Mv=`#define LAMBERT
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
}`,Sv=`#define LAMBERT
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
}`,Tv=`#define MATCAP
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
}`,Ev=`#define MATCAP
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
}`,bv=`#define NORMAL
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
}`,wv=`#define NORMAL
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
}`,Av=`#define PHONG
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
}`,Cv=`#define PHONG
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
}`,Rv=`#define STANDARD
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
}`,Pv=`#define STANDARD
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
}`,Lv=`#define TOON
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
}`,Dv=`#define TOON
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
}`,Uv=`uniform float size;
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
}`,Iv=`uniform vec3 diffuse;
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
}`,Nv=`#include <common>
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
}`,Ov=`uniform vec3 color;
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
}`,Fv=`uniform float rotation;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:og,alphahash_pars_fragment:ag,alphamap_fragment:lg,alphamap_pars_fragment:cg,alphatest_fragment:ug,alphatest_pars_fragment:hg,aomap_fragment:fg,aomap_pars_fragment:dg,batching_pars_vertex:pg,batching_vertex:mg,begin_vertex:_g,beginnormal_vertex:gg,bsdfs:vg,iridescence_fragment:xg,bumpmap_pars_fragment:yg,clipping_planes_fragment:Mg,clipping_planes_pars_fragment:Sg,clipping_planes_pars_vertex:Tg,clipping_planes_vertex:Eg,color_fragment:bg,color_pars_fragment:wg,color_pars_vertex:Ag,color_vertex:Cg,common:Rg,cube_uv_reflection_fragment:Pg,defaultnormal_vertex:Lg,displacementmap_pars_vertex:Dg,displacementmap_vertex:Ug,emissivemap_fragment:Ig,emissivemap_pars_fragment:Ng,colorspace_fragment:Og,colorspace_pars_fragment:Fg,envmap_fragment:Bg,envmap_common_pars_fragment:zg,envmap_pars_fragment:kg,envmap_pars_vertex:Vg,envmap_physical_pars_fragment:jg,envmap_vertex:Gg,fog_vertex:Hg,fog_pars_vertex:Wg,fog_fragment:Xg,fog_pars_fragment:qg,gradientmap_pars_fragment:Yg,lightmap_pars_fragment:Zg,lights_lambert_fragment:$g,lights_lambert_pars_fragment:Kg,lights_pars_begin:Jg,lights_toon_fragment:Qg,lights_toon_pars_fragment:e0,lights_phong_fragment:t0,lights_phong_pars_fragment:n0,lights_physical_fragment:i0,lights_physical_pars_fragment:r0,lights_fragment_begin:s0,lights_fragment_maps:o0,lights_fragment_end:a0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:u0,logdepthbuf_vertex:h0,map_fragment:f0,map_pars_fragment:d0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:_0,metalnessmap_pars_fragment:g0,morphinstance_vertex:v0,morphcolor_vertex:x0,morphnormal_vertex:y0,morphtarget_pars_vertex:M0,morphtarget_vertex:S0,normal_fragment_begin:T0,normal_fragment_maps:E0,normal_pars_fragment:b0,normal_pars_vertex:w0,normal_vertex:A0,normalmap_pars_fragment:C0,clearcoat_normal_fragment_begin:R0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:L0,iridescence_pars_fragment:D0,opaque_fragment:U0,packing:I0,premultiplied_alpha_fragment:N0,project_vertex:O0,dithering_fragment:F0,dithering_pars_fragment:B0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:k0,shadowmap_pars_fragment:V0,shadowmap_pars_vertex:G0,shadowmap_vertex:H0,shadowmask_pars_fragment:W0,skinbase_vertex:X0,skinning_pars_vertex:q0,skinning_vertex:Y0,skinnormal_vertex:Z0,specularmap_fragment:$0,specularmap_pars_fragment:K0,tonemapping_fragment:J0,tonemapping_pars_fragment:j0,transmission_fragment:Q0,transmission_pars_fragment:ev,uv_pars_fragment:tv,uv_pars_vertex:nv,uv_vertex:iv,worldpos_vertex:rv,background_vert:sv,background_frag:ov,backgroundCube_vert:av,backgroundCube_frag:lv,cube_vert:cv,cube_frag:uv,depth_vert:hv,depth_frag:fv,distanceRGBA_vert:dv,distanceRGBA_frag:pv,equirect_vert:mv,equirect_frag:_v,linedashed_vert:gv,linedashed_frag:vv,meshbasic_vert:xv,meshbasic_frag:yv,meshlambert_vert:Mv,meshlambert_frag:Sv,meshmatcap_vert:Tv,meshmatcap_frag:Ev,meshnormal_vert:bv,meshnormal_frag:wv,meshphong_vert:Av,meshphong_frag:Cv,meshphysical_vert:Rv,meshphysical_frag:Pv,meshtoon_vert:Lv,meshtoon_frag:Dv,points_vert:Uv,points_frag:Iv,shadow_vert:Nv,shadow_frag:Ov,sprite_vert:Fv,sprite_frag:Bv},ue={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},qn={basic:{uniforms:Kt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Kt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Kt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Kt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Kt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Kt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Kt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Kt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Kt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Kt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Kt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Kt([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Kt([ue.lights,ue.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};qn.physical={uniforms:Kt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Wo={r:0,b:0,g:0},or=new Qn,zv=new lt;function kv(i,e,t,n,r,s,o){const a=new Ne(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function g(M){let x=!1;const y=_(M);y===null?m(a,l):y&&y.isColor&&(m(y,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===ka)?(u===void 0&&(u=new Te(new Ar(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:_s(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),or.copy(x.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zv.makeRotationFromEuler(or)),u.material.toneMapped=et.getTransfer(y.colorSpace)!==ft,(h!==y||f!==y.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Te(new Wn(2,2),new dn({name:"BackgroundMaterial",uniforms:_s(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=et.getTransfer(y.colorSpace)!==ft,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,x){M.getRGB(Wo,Zd(i)),n.buffers.color.setClear(Wo.r,Wo.g,Wo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:g,addToRenderList:p}}function Vv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(v,T,F,O,k){let W=!1;const B=h(O,F,T);s!==B&&(s=B,c(s.object)),W=d(v,O,F,k),W&&_(v,O,F,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(v,T,F,O),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,T,F){const O=F.wireframe===!0;let k=n[v.id];k===void 0&&(k={},n[v.id]=k);let W=k[T.id];W===void 0&&(W={},k[T.id]=W);let B=W[O];return B===void 0&&(B=f(l()),W[O]=B),B}function f(v){const T=[],F=[],O=[];for(let k=0;k<t;k++)T[k]=0,F[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:F,attributeDivisors:O,object:v,attributes:{},index:null}}function d(v,T,F,O){const k=s.attributes,W=T.attributes;let B=0;const q=F.getAttributes();for(const H in q)if(q[H].location>=0){const he=k[H];let de=W[H];if(de===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(de=v.instanceColor)),he===void 0||he.attribute!==de||de&&he.data!==de.data)return!0;B++}return s.attributesNum!==B||s.index!==O}function _(v,T,F,O){const k={},W=T.attributes;let B=0;const q=F.getAttributes();for(const H in q)if(q[H].location>=0){let he=W[H];he===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(he=v.instanceColor));const de={};de.attribute=he,he&&he.data&&(de.data=he.data),k[H]=de,B++}s.attributes=k,s.attributesNum=B,s.index=O}function g(){const v=s.newAttributes;for(let T=0,F=v.length;T<F;T++)v[T]=0}function p(v){m(v,0)}function m(v,T){const F=s.newAttributes,O=s.enabledAttributes,k=s.attributeDivisors;F[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),k[v]!==T&&(i.vertexAttribDivisor(v,T),k[v]=T)}function M(){const v=s.newAttributes,T=s.enabledAttributes;for(let F=0,O=T.length;F<O;F++)T[F]!==v[F]&&(i.disableVertexAttribArray(F),T[F]=0)}function x(v,T,F,O,k,W,B){B===!0?i.vertexAttribIPointer(v,T,F,k,W):i.vertexAttribPointer(v,T,F,O,k,W)}function y(v,T,F,O){g();const k=O.attributes,W=F.getAttributes(),B=T.defaultAttributeValues;for(const q in W){const H=W[q];if(H.location>=0){let ae=k[q];if(ae===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor)),ae!==void 0){const he=ae.normalized,de=ae.itemSize,Be=e.get(ae);if(Be===void 0)continue;const We=Be.buffer,Y=Be.type,Q=Be.bytesPerElement,Me=Y===i.INT||Y===i.UNSIGNED_INT||ae.gpuType===Uu;if(ae.isInterleavedBufferAttribute){const fe=ae.data,De=fe.stride,Le=ae.offset;if(fe.isInstancedInterleavedBuffer){for(let ze=0;ze<H.locationSize;ze++)m(H.location+ze,fe.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ze=0;ze<H.locationSize;ze++)p(H.location+ze);i.bindBuffer(i.ARRAY_BUFFER,We);for(let ze=0;ze<H.locationSize;ze++)x(H.location+ze,de/H.locationSize,Y,he,De*Q,(Le+de/H.locationSize*ze)*Q,Me)}else{if(ae.isInstancedBufferAttribute){for(let fe=0;fe<H.locationSize;fe++)m(H.location+fe,ae.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let fe=0;fe<H.locationSize;fe++)p(H.location+fe);i.bindBuffer(i.ARRAY_BUFFER,We);for(let fe=0;fe<H.locationSize;fe++)x(H.location+fe,de/H.locationSize,Y,he,de*Q,de/H.locationSize*fe*Q,Me)}}else if(B!==void 0){const he=B[q];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(H.location,he);break;case 3:i.vertexAttrib3fv(H.location,he);break;case 4:i.vertexAttrib4fv(H.location,he);break;default:i.vertexAttrib1fv(H.location,he)}}}}M()}function A(){P();for(const v in n){const T=n[v];for(const F in T){const O=T[F];for(const k in O)u(O[k].object),delete O[k];delete T[F]}delete n[v]}}function C(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const F in T){const O=T[F];for(const k in O)u(O[k].object),delete O[k];delete T[F]}delete n[v.id]}function b(v){for(const T in n){const F=n[T];if(F[v.id]===void 0)continue;const O=F[v.id];for(const k in O)u(O[k].object),delete O[k];delete F[v.id]}}function P(){U(),o=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function Gv(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];for(let g=0;g<f.length;g++)t.update(_,n,f[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Hv(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==kn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==vi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==mi&&!P)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:C}}function Wv(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new ur,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,x=M*4;let y=m.clippingState||null;l.value=y,y=u(_,f,x,d);for(let A=0;A!==x;++A)y[A]=t[A];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=d;x!==g;++x,y+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Xv(i){let e=new WeakMap;function t(o,a){return a===Mc?o.mapping=fs:a===Sc&&(o.mapping=ds),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mc||a===Sc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ng(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class jd extends $d{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Jr=4,tf=[.125,.215,.35,.446,.526,.582],pr=20,zl=new jd,nf=new Ne;let kl=null,Vl=0,Gl=0,Hl=!1;const hr=(1+Math.sqrt(5))/2,Wr=1/hr,rf=[new L(-hr,Wr,0),new L(hr,Wr,0),new L(-Wr,0,hr),new L(Wr,0,hr),new L(0,hr,-Wr),new L(0,hr,Wr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){kl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kl,Vl,Gl),this._renderer.xr.enabled=Hl,e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:wr,format:kn,colorSpace:Ki,depthBuffer:!1},r=of(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qv(s)),this._blurMaterial=Yv(s,e,t)}return r}_compileMaterial(e){const t=new Te(this._lodPlanes[0],e);this._renderer.compile(t,zl)}_sceneToCubeUV(e,t,n,r){const a=new sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(nf),u.toneMapping=ki,u.autoClear=!1;const d=new yi({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),_=new Te(new Ar,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(nf),g=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Xo(r,M*x,m>2?x:0,x,x),u.setRenderTarget(r),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===fs||e.mapping===ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Te(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,zl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=rf[(r-s-1)%rf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Te(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*pr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):pr;p>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pr}`);const m=[];let M=0;for(let b=0;b<pr;++b){const P=b/g,U=Math.exp(-P*P/2);m.push(U),b===0?M+=U:b<p&&(M+=2*U)}for(let b=0;b<m.length;b++)m[b]=m[b]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const y=this._sizeLods[r],A=3*y*(r>x-Jr?r-x+Jr:0),C=4*(this._cubeSize-y);Xo(t,A,C,3*y,2*y),l.setRenderTarget(t),l.render(h,zl)}}function qv(i){const e=[],t=[],n=[];let r=i;const s=i-Jr+1+tf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Jr?l=tf[o-i+Jr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,M=new Float32Array(g*_*d),x=new Float32Array(p*_*d),y=new Float32Array(m*_*d);for(let C=0;C<d;C++){const b=C%3*2/3-1,P=C>2?0:-1,U=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];M.set(U,g*_*C),x.set(f,p*_*C);const v=[C,C,C,C,C,C];y.set(v,m*_*C)}const A=new mt;A.setAttribute("position",new Tn(M,g)),A.setAttribute("uv",new Tn(x,p)),A.setAttribute("faceIndex",new Tn(y,m)),e.push(A),r>Jr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function of(i,e,t){const n=new xi(i,e,t);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Yv(i,e,t){const n=new Float32Array(pr),r=new L(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function af(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function lf(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Hu(){return`

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
	`}function Zv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Mc||l===Sc,u=l===fs||l===ds;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new sf(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new sf(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $v(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ua("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Kv(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let x=0,y=M.length;x<y;x+=3){const A=M[x+0],C=M[x+1],b=M[x+2];f.push(A,C,C,b,b,A)}}else if(_!==void 0){const M=_.array;g=_.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const A=x+0,C=x+1,b=x+2;f.push(A,C,C,b,b,A)}}else return;const p=new(Vd(f)?Yd:qd)(f,1);p.version=g;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Jv(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,_){_!==0&&(i.drawElementsInstanced(n,d,s,f*o,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,n,1)}function h(f,d,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let m=0;for(let M=0;M<_;M++)m+=d[M];for(let M=0;M<g.length;M++)t.update(m,n,g[M])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function jv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Qv(i,e,t){const n=new WeakMap,r=new Je;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),g===!0&&(y=2),p===!0&&(y=3);let A=a.attributes.position.count*y,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*C*4*h),P=new Hd(b,A,C,h);P.type=mi,P.needsUpdate=!0;const U=y*4;for(let T=0;T<h;T++){const F=m[T],O=M[T],k=x[T],W=A*C*4*T;for(let B=0;B<F.count;B++){const q=B*U;_===!0&&(r.fromBufferAttribute(F,B),b[W+q+0]=r.x,b[W+q+1]=r.y,b[W+q+2]=r.z,b[W+q+3]=0),g===!0&&(r.fromBufferAttribute(O,B),b[W+q+4]=r.x,b[W+q+5]=r.y,b[W+q+6]=r.z,b[W+q+7]=0),p===!0&&(r.fromBufferAttribute(k,B),b[W+q+8]=r.x,b[W+q+9]=r.y,b[W+q+10]=r.z,b[W+q+11]=k.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new te(A,C)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function ex(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Qd extends kt{constructor(e,t,n,r,s,o,a,l,c,u=is){if(u!==is&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===is&&(n=Sr),n===void 0&&u===ms&&(n=ps),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ep=new kt,cf=new Qd(1,1),tp=new Hd,np=new V_,ip=new Kd,uf=[],hf=[],ff=new Float32Array(16),df=new Float32Array(9),pf=new Float32Array(4);function As(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=uf[r];if(s===void 0&&(s=new Float32Array(r),uf[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ga(i,e){let t=hf[e];t===void 0&&(t=new Int32Array(e),hf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function tx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function sx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;pf.set(n),i.uniformMatrix2fv(this.addr,!1,pf),It(t,n)}}function ox(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;df.set(n),i.uniformMatrix3fv(this.addr,!1,df),It(t,n)}}function ax(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;ff.set(n),i.uniformMatrix4fv(this.addr,!1,ff),It(t,n)}}function lx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function fx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function mx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function _x(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(cf.compareFunction=kd,s=cf):s=ep,t.setTexture2D(e||s,r)}function gx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||np,r)}function vx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ip,r)}function xx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||tp,r)}function yx(i){switch(i){case 5126:return tx;case 35664:return nx;case 35665:return ix;case 35666:return rx;case 35674:return sx;case 35675:return ox;case 35676:return ax;case 5124:case 35670:return lx;case 35667:case 35671:return cx;case 35668:case 35672:return ux;case 35669:case 35673:return hx;case 5125:return fx;case 36294:return dx;case 36295:return px;case 36296:return mx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return vx;case 36289:case 36303:case 36311:case 36292:return xx}}function Mx(i,e){i.uniform1fv(this.addr,e)}function Sx(i,e){const t=As(e,this.size,2);i.uniform2fv(this.addr,t)}function Tx(i,e){const t=As(e,this.size,3);i.uniform3fv(this.addr,t)}function Ex(i,e){const t=As(e,this.size,4);i.uniform4fv(this.addr,t)}function bx(i,e){const t=As(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wx(i,e){const t=As(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ax(i,e){const t=As(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cx(i,e){i.uniform1iv(this.addr,e)}function Rx(i,e){i.uniform2iv(this.addr,e)}function Px(i,e){i.uniform3iv(this.addr,e)}function Lx(i,e){i.uniform4iv(this.addr,e)}function Dx(i,e){i.uniform1uiv(this.addr,e)}function Ux(i,e){i.uniform2uiv(this.addr,e)}function Ix(i,e){i.uniform3uiv(this.addr,e)}function Nx(i,e){i.uniform4uiv(this.addr,e)}function Ox(i,e,t){const n=this.cache,r=e.length,s=Ga(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ep,s[o])}function Fx(i,e,t){const n=this.cache,r=e.length,s=Ga(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||np,s[o])}function Bx(i,e,t){const n=this.cache,r=e.length,s=Ga(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ip,s[o])}function zx(i,e,t){const n=this.cache,r=e.length,s=Ga(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||tp,s[o])}function kx(i){switch(i){case 5126:return Mx;case 35664:return Sx;case 35665:return Tx;case 35666:return Ex;case 35674:return bx;case 35675:return wx;case 35676:return Ax;case 5124:case 35670:return Cx;case 35667:case 35671:return Rx;case 35668:case 35672:return Px;case 35669:case 35673:return Lx;case 5125:return Dx;case 36294:return Ux;case 36295:return Ix;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return zx}}class Vx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yx(t.type)}}class Gx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kx(t.type)}}class Hx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Wl=/(\w+)(\])?(\[|\.)?/g;function mf(i,e){i.seq.push(e),i.map[e.id]=e}function Wx(i,e,t){const n=i.name,r=n.length;for(Wl.lastIndex=0;;){const s=Wl.exec(n),o=Wl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){mf(t,c===void 0?new Vx(a,i,e):new Gx(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Hx(a),mf(t,h)),t=h}}}class ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Wx(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function _f(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Xx=37297;let qx=0;function Yx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Zx(i){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(i);let n;switch(e===t?n="":e===ya&&t===xa?n="LinearDisplayP3ToLinearSRGB":e===xa&&t===ya&&(n="LinearSRGBToLinearDisplayP3"),i){case Ki:case Va:return[n,"LinearTransferOETF"];case rn:case zu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function gf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Yx(i.getShaderSource(e),o)}else return r}function $x(i,e){const t=Zx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Kx(i,e){let t;switch(e){case m_:t="Linear";break;case __:t="Reinhard";break;case g_:t="Cineon";break;case wd:t="ACESFilmic";break;case x_:t="AgX";break;case y_:t="Neutral";break;case v_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qo=new L;function Jx(){et.getLuminanceCoefficients(qo);const i=qo.x.toFixed(4),e=qo.y.toFixed(4),t=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function Qx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ey(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Vs(i){return i!==""}function vf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(i){return i.replace(ty,iy)}const ny=new Map;function iy(i,e){let t=Ve[e];if(t===void 0){const n=ny.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return jc(t)}const ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(i){return i.replace(ry,sy)}function sy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mf(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Td?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ed?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function ay(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fs:case ds:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ly(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function cy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bd:e="ENVMAP_BLENDING_MULTIPLY";break;case d_:e="ENVMAP_BLENDING_MIX";break;case p_:e="ENVMAP_BLENDING_ADD";break}return e}function uy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function hy(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=oy(t),c=ay(t),u=ly(t),h=cy(t),f=uy(t),d=jx(t),_=Qx(s),g=r.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vs).join(`
`),m.length>0&&(m+=`
`)):(p=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),m=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ki?Kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,$x("linearToOutputTexel",t.outputColorSpace),Jx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),o=jc(o),o=vf(o,t),o=xf(o,t),a=jc(a),a=vf(a,t),a=xf(a,t),o=yf(o),a=yf(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+p+o,y=M+m+a,A=_f(r,r.VERTEX_SHADER,x),C=_f(r,r.FRAGMENT_SHADER,y);r.attachShader(g,A),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function b(T){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(g).trim(),O=r.getShaderInfoLog(A).trim(),k=r.getShaderInfoLog(C).trim();let W=!0,B=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,A,C);else{const q=gf(r,A,"vertex"),H=gf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+q+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||k==="")&&(B=!1);B&&(T.diagnostics={runnable:W,programLog:F,vertexShader:{log:O,prefix:p},fragmentShader:{log:k,prefix:m}})}r.deleteShader(A),r.deleteShader(C),P=new ha(r,g),U=ey(r,g)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let U;this.getAttributes=function(){return U===void 0&&b(this),U};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(g,Xx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=C,this}let fy=0;class dy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new py(e),t.set(e,n)),n}}class py{constructor(e){this.id=fy++,this.code=e,this.usedTimes=0}}function my(i,e,t,n,r,s,o){const a=new Wd,l=new dy,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,d=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,T,F,O,k){const W=O.fog,B=k.geometry,q=v.isMeshStandardMaterial?O.environment:null,H=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),ae=H&&H.mapping===ka?H.image.height:null,he=g[v.type];v.precision!==null&&(_=r.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const de=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Be=de!==void 0?de.length:0;let We=0;B.morphAttributes.position!==void 0&&(We=1),B.morphAttributes.normal!==void 0&&(We=2),B.morphAttributes.color!==void 0&&(We=3);let Y,Q,Me,fe;if(he){const nn=qn[he];Y=nn.vertexShader,Q=nn.fragmentShader}else Y=v.vertexShader,Q=v.fragmentShader,l.update(v),Me=l.getVertexShaderID(v),fe=l.getFragmentShaderID(v);const De=i.getRenderTarget(),Le=k.isInstancedMesh===!0,ze=k.isBatchedMesh===!0,He=!!v.map,K=!!v.matcap,R=!!H,oe=!!v.aoMap,se=!!v.lightMap,ee=!!v.bumpMap,le=!!v.normalMap,Ce=!!v.displacementMap,_e=!!v.emissiveMap,w=!!v.metalnessMap,S=!!v.roughnessMap,z=v.anisotropy>0,Z=v.clearcoat>0,J=v.dispersion>0,$=v.iridescence>0,be=v.sheen>0,ce=v.transmission>0,xe=z&&!!v.anisotropyMap,qe=Z&&!!v.clearcoatMap,ne=Z&&!!v.clearcoatNormalMap,ye=Z&&!!v.clearcoatRoughnessMap,Oe=$&&!!v.iridescenceMap,Fe=$&&!!v.iridescenceThicknessMap,Se=be&&!!v.sheenColorMap,Ye=be&&!!v.sheenRoughnessMap,ke=!!v.specularMap,ct=!!v.specularColorMap,D=!!v.specularIntensityMap,ge=ce&&!!v.transmissionMap,X=ce&&!!v.thicknessMap,j=!!v.gradientMap,pe=!!v.alphaMap,ve=v.alphaTest>0,Ze=!!v.alphaHash,At=!!v.extensions;let tn=ki;v.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(tn=i.toneMapping);const $e={shaderID:he,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:Q,defines:v.defines,customVertexShaderID:Me,customFragmentShaderID:fe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:ze,batchingColor:ze&&k._colorsTexture!==null,instancing:Le,instancingColor:Le&&k.instanceColor!==null,instancingMorph:Le&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:De===null?i.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Ki,alphaToCoverage:!!v.alphaToCoverage,map:He,matcap:K,envMap:R,envMapMode:R&&H.mapping,envMapCubeUVHeight:ae,aoMap:oe,lightMap:se,bumpMap:ee,normalMap:le,displacementMap:d&&Ce,emissiveMap:_e,normalMapObjectSpace:le&&v.normalMapType===T_,normalMapTangentSpace:le&&v.normalMapType===zd,metalnessMap:w,roughnessMap:S,anisotropy:z,anisotropyMap:xe,clearcoat:Z,clearcoatMap:qe,clearcoatNormalMap:ne,clearcoatRoughnessMap:ye,dispersion:J,iridescence:$,iridescenceMap:Oe,iridescenceThicknessMap:Fe,sheen:be,sheenColorMap:Se,sheenRoughnessMap:Ye,specularMap:ke,specularColorMap:ct,specularIntensityMap:D,transmission:ce,transmissionMap:ge,thicknessMap:X,gradientMap:j,opaque:v.transparent===!1&&v.blending===ns&&v.alphaToCoverage===!1,alphaMap:pe,alphaTest:ve,alphaHash:Ze,combine:v.combine,mapUv:He&&p(v.map.channel),aoMapUv:oe&&p(v.aoMap.channel),lightMapUv:se&&p(v.lightMap.channel),bumpMapUv:ee&&p(v.bumpMap.channel),normalMapUv:le&&p(v.normalMap.channel),displacementMapUv:Ce&&p(v.displacementMap.channel),emissiveMapUv:_e&&p(v.emissiveMap.channel),metalnessMapUv:w&&p(v.metalnessMap.channel),roughnessMapUv:S&&p(v.roughnessMap.channel),anisotropyMapUv:xe&&p(v.anisotropyMap.channel),clearcoatMapUv:qe&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&p(v.sheenRoughnessMap.channel),specularMapUv:ke&&p(v.specularMap.channel),specularColorMapUv:ct&&p(v.specularColorMap.channel),specularIntensityMapUv:D&&p(v.specularIntensityMap.channel),transmissionMapUv:ge&&p(v.transmissionMap.channel),thicknessMapUv:X&&p(v.thicknessMap.channel),alphaMapUv:pe&&p(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(le||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(He||pe),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:We,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:tn,decodeVideoTexture:He&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Xt,flipSided:v.side===Qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:At&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&v.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function M(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)T.push(F),T.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(x(T,v),y(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),v.push(a.mask)}function A(v){const T=g[v.type];let F;if(T){const O=qn[T];F=Vu.clone(O.uniforms)}else F=v.uniforms;return F}function C(v,T){let F;for(let O=0,k=u.length;O<k;O++){const W=u[O];if(W.cacheKey===T){F=W,++F.usedTimes;break}}return F===void 0&&(F=new hy(i,T,v,s),u.push(F)),F}function b(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function P(v){l.remove(v)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:A,acquireProgram:C,releaseProgram:b,releaseShaderCache:P,programs:u,dispose:U}}function _y(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function gy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tf(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,d,_,g,p){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},i[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function a(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):t.push(m)}function l(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||gy),n.length>1&&n.sort(f||Sf),r.length>1&&r.sort(f||Sf)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function vy(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Tf,i.set(n,[o])):r>=s.length?(o=new Tf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function xy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ne};break;case"SpotLight":t={position:new L,direction:new L,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function yy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let My=0;function Sy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ty(i){const e=new xy,t=yy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const r=new L,s=new lt,o=new lt;function a(c){let u=0,h=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,M=0,x=0,y=0,A=0,C=0,b=0;c.sort(Sy);for(let U=0,v=c.length;U<v;U++){const T=c[U],F=T.color,O=T.intensity,k=T.distance,W=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=F.r*O,h+=F.g*O,f+=F.b*O;else if(T.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(T.sh.coefficients[B],O);b++}else if(T.isDirectionalLight){const B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const q=T.shadow,H=t.get(T);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=T.shadow.matrix,M++}n.directional[d]=B,d++}else if(T.isSpotLight){const B=e.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(F).multiplyScalar(O),B.distance=k,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,n.spot[g]=B;const q=T.shadow;if(T.map&&(n.spotLightMap[A]=T.map,A++,q.updateMatrices(T),T.castShadow&&C++),n.spotLightMatrix[g]=q.matrix,T.castShadow){const H=t.get(T);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=W,y++}g++}else if(T.isRectAreaLight){const B=e.get(T);B.color.copy(F).multiplyScalar(O),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=B,p++}else if(T.isPointLight){const B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){const q=T.shadow,H=t.get(T);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=T.shadow.matrix,x++}n.point[_]=B,_++}else if(T.isHemisphereLight){const B=e.get(T);B.skyColor.copy(T.color).multiplyScalar(O),B.groundColor.copy(T.groundColor).multiplyScalar(O),n.hemi[m]=B,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==M||P.numPointShadows!==x||P.numSpotShadows!==y||P.numSpotMaps!==A||P.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=b,P.directionalLength=d,P.pointLength=_,P.spotLength=g,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=M,P.numPointShadows=x,P.numSpotShadows=y,P.numSpotMaps=A,P.numLightProbes=b,n.version=My++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const x=c[m];if(x.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),h++}else if(x.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Ef(i){const e=new Ty(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ey(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ef(i),e.set(r,[a])):s>=o.length?(a=new Ef(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class rp extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=S_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class by extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ay=`uniform sampler2D shadow_pass;
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
}`;function Cy(i,e,t){let n=new Gu;const r=new te,s=new te,o=new Je,a=new rp({depthPacking:Bd}),l=new by,c={},u=t.maxTextureSize,h={[Hn]:Qt,[Qt]:Hn,[Xt]:Xt},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:wy,fragmentShader:Ay}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new mt;_.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Te(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Td;let m=this.type;this.render=function(C,b,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const U=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Kn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=m!==hi&&this.type===hi,k=m===hi&&this.type!==hi;for(let W=0,B=C.length;W<B;W++){const q=C[W],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ae=H.getFrameExtents();if(r.multiply(ae),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ae.x),r.x=s.x*ae.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ae.y),r.y=s.y*ae.y,H.mapSize.y=s.y)),H.map===null||O===!0||k===!0){const de=this.type!==hi?{minFilter:an,magFilter:an}:{};H.map!==null&&H.map.dispose(),H.map=new xi(r.x,r.y,de),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const he=H.getViewportCount();for(let de=0;de<he;de++){const Be=H.getViewport(de);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),F.viewport(o),H.updateMatrices(q,de),n=H.getFrustum(),y(b,P,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===hi&&M(H,P),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(U,v,T)};function M(C,b){const P=e.update(g);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new xi(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(b,null,P,f,g,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(b,null,P,d,g,null)}function x(C,b,P,U){let v=null;const T=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)v=T;else if(v=P.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=v.uuid,O=b.uuid;let k=c[F];k===void 0&&(k={},c[F]=k);let W=k[O];W===void 0&&(W=v.clone(),k[O]=W,b.addEventListener("dispose",A)),v=W}if(v.visible=b.visible,v.wireframe=b.wireframe,U===hi?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=i.properties.get(v);F.light=P}return v}function y(C,b,P,U,v){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===hi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const O=e.update(C),k=C.material;if(Array.isArray(k)){const W=O.groups;for(let B=0,q=W.length;B<q;B++){const H=W[B],ae=k[H.materialIndex];if(ae&&ae.visible){const he=x(C,ae,U,v);C.onBeforeShadow(i,C,b,P,O,he,H),i.renderBufferDirect(P,null,O,he,C,H),C.onAfterShadow(i,C,b,P,O,he,H)}}}else if(k.visible){const W=x(C,k,U,v);C.onBeforeShadow(i,C,b,P,O,W,null),i.renderBufferDirect(P,null,O,W,C,null),C.onAfterShadow(i,C,b,P,O,W,null)}}const F=C.children;for(let O=0,k=F.length;O<k;O++)y(F[O],b,P,U,v)}function A(C){C.target.removeEventListener("dispose",A);for(const P in c){const U=c[P],v=C.target.uuid;v in U&&(U[v].dispose(),delete U[v])}}}const Ry={[pc]:mc,[_c]:xc,[gc]:yc,[hs]:vc,[mc]:pc,[xc]:_c,[yc]:gc,[vc]:hs};function Py(i){function e(){let D=!1;const ge=new Je;let X=null;const j=new Je(0,0,0,0);return{setMask:function(pe){X!==pe&&!D&&(i.colorMask(pe,pe,pe,pe),X=pe)},setLocked:function(pe){D=pe},setClear:function(pe,ve,Ze,At,tn){tn===!0&&(pe*=At,ve*=At,Ze*=At),ge.set(pe,ve,Ze,At),j.equals(ge)===!1&&(i.clearColor(pe,ve,Ze,At),j.copy(ge))},reset:function(){D=!1,X=null,j.set(-1,0,0,0)}}}function t(){let D=!1,ge=!1,X=null,j=null,pe=null;return{setReversed:function(ve){ge=ve},setTest:function(ve){ve?Me(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(ve){X!==ve&&!D&&(i.depthMask(ve),X=ve)},setFunc:function(ve){if(ge&&(ve=Ry[ve]),j!==ve){switch(ve){case pc:i.depthFunc(i.NEVER);break;case mc:i.depthFunc(i.ALWAYS);break;case _c:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case gc:i.depthFunc(i.EQUAL);break;case vc:i.depthFunc(i.GEQUAL);break;case xc:i.depthFunc(i.GREATER);break;case yc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=ve}},setLocked:function(ve){D=ve},setClear:function(ve){pe!==ve&&(i.clearDepth(ve),pe=ve)},reset:function(){D=!1,X=null,j=null,pe=null}}}function n(){let D=!1,ge=null,X=null,j=null,pe=null,ve=null,Ze=null,At=null,tn=null;return{setTest:function($e){D||($e?Me(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function($e){ge!==$e&&!D&&(i.stencilMask($e),ge=$e)},setFunc:function($e,nn,si){(X!==$e||j!==nn||pe!==si)&&(i.stencilFunc($e,nn,si),X=$e,j=nn,pe=si)},setOp:function($e,nn,si){(ve!==$e||Ze!==nn||At!==si)&&(i.stencilOp($e,nn,si),ve=$e,Ze=nn,At=si)},setLocked:function($e){D=$e},setClear:function($e){tn!==$e&&(i.clearStencil($e),tn=$e)},reset:function(){D=!1,ge=null,X=null,j=null,pe=null,ve=null,Ze=null,At=null,tn=null}}}const r=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,M=null,x=null,y=null,A=null,C=new Ne(0,0,0),b=0,P=!1,U=null,v=null,T=null,F=null,O=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,B=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=B>=2);let H=null,ae={};const he=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Be=new Je().fromArray(he),We=new Je().fromArray(de);function Y(D,ge,X,j){const pe=new Uint8Array(4),ve=i.createTexture();i.bindTexture(D,ve),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<X;Ze++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ge+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return ve}const Q={};Q[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Me(i.DEPTH_TEST),s.setFunc(hs),se(!1),ee(Uh),Me(i.CULL_FACE),R(Kn);function Me(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function fe(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function De(D,ge){return u[D]!==ge?(i.bindFramebuffer(D,ge),u[D]=ge,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ge),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Le(D,ge){let X=f,j=!1;if(D){X=h.get(ge),X===void 0&&(X=[],h.set(ge,X));const pe=D.textures;if(X.length!==pe.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,Ze=pe.length;ve<Ze;ve++)X[ve]=i.COLOR_ATTACHMENT0+ve;X.length=pe.length,j=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,j=!0);j&&i.drawBuffers(X)}function ze(D){return d!==D?(i.useProgram(D),d=D,!0):!1}const He={[dr]:i.FUNC_ADD,[Km]:i.FUNC_SUBTRACT,[Jm]:i.FUNC_REVERSE_SUBTRACT};He[jm]=i.MIN,He[Qm]=i.MAX;const K={[e_]:i.ZERO,[t_]:i.ONE,[n_]:i.SRC_COLOR,[fc]:i.SRC_ALPHA,[l_]:i.SRC_ALPHA_SATURATE,[o_]:i.DST_COLOR,[r_]:i.DST_ALPHA,[i_]:i.ONE_MINUS_SRC_COLOR,[dc]:i.ONE_MINUS_SRC_ALPHA,[a_]:i.ONE_MINUS_DST_COLOR,[s_]:i.ONE_MINUS_DST_ALPHA,[c_]:i.CONSTANT_COLOR,[u_]:i.ONE_MINUS_CONSTANT_COLOR,[h_]:i.CONSTANT_ALPHA,[f_]:i.ONE_MINUS_CONSTANT_ALPHA};function R(D,ge,X,j,pe,ve,Ze,At,tn,$e){if(D===Kn){_===!0&&(fe(i.BLEND),_=!1);return}if(_===!1&&(Me(i.BLEND),_=!0),D!==$m){if(D!==g||$e!==P){if((p!==dr||x!==dr)&&(i.blendEquation(i.FUNC_ADD),p=dr,x=dr),$e)switch(D){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case us:i.blendFunc(i.ONE,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case us:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,M=null,y=null,A=null,C.set(0,0,0),b=0,g=D,P=$e}return}pe=pe||ge,ve=ve||X,Ze=Ze||j,(ge!==p||pe!==x)&&(i.blendEquationSeparate(He[ge],He[pe]),p=ge,x=pe),(X!==m||j!==M||ve!==y||Ze!==A)&&(i.blendFuncSeparate(K[X],K[j],K[ve],K[Ze]),m=X,M=j,y=ve,A=Ze),(At.equals(C)===!1||tn!==b)&&(i.blendColor(At.r,At.g,At.b,tn),C.copy(At),b=tn),g=D,P=!1}function oe(D,ge){D.side===Xt?fe(i.CULL_FACE):Me(i.CULL_FACE);let X=D.side===Qt;ge&&(X=!X),se(X),D.blending===ns&&D.transparent===!1?R(Kn):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ce(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(D){U!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),U=D)}function ee(D){D!==Ym?(Me(i.CULL_FACE),D!==v&&(D===Uh?i.cullFace(i.BACK):D===Zm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),v=D}function le(D){D!==T&&(W&&i.lineWidth(D),T=D)}function Ce(D,ge,X){D?(Me(i.POLYGON_OFFSET_FILL),(F!==ge||O!==X)&&(i.polygonOffset(ge,X),F=ge,O=X)):fe(i.POLYGON_OFFSET_FILL)}function _e(D){D?Me(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function w(D){D===void 0&&(D=i.TEXTURE0+k-1),H!==D&&(i.activeTexture(D),H=D)}function S(D,ge,X){X===void 0&&(H===null?X=i.TEXTURE0+k-1:X=H);let j=ae[X];j===void 0&&(j={type:void 0,texture:void 0},ae[X]=j),(j.type!==D||j.texture!==ge)&&(H!==X&&(i.activeTexture(X),H=X),i.bindTexture(D,ge||Q[D]),j.type=D,j.texture=ge)}function z(){const D=ae[H];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(D){Be.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Be.copy(D))}function Se(D){We.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),We.copy(D))}function Ye(D,ge){let X=l.get(ge);X===void 0&&(X=new WeakMap,l.set(ge,X));let j=X.get(D);j===void 0&&(j=i.getUniformBlockIndex(ge,D.name),X.set(D,j))}function ke(D,ge){const j=l.get(ge).get(D);a.get(ge)!==j&&(i.uniformBlockBinding(ge,j,D.__bindingPointIndex),a.set(ge,j))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,ae={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,M=null,x=null,y=null,A=null,C=new Ne(0,0,0),b=0,P=!1,U=null,v=null,T=null,F=null,O=null,Be.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Me,disable:fe,bindFramebuffer:De,drawBuffers:Le,useProgram:ze,setBlending:R,setMaterial:oe,setFlipSided:se,setCullFace:ee,setLineWidth:le,setPolygonOffset:Ce,setScissorTest:_e,activeTexture:w,bindTexture:S,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:ye,texImage3D:Oe,updateUBOMapping:Ye,uniformBlockBinding:ke,texStorage2D:qe,texStorage3D:ne,texSubImage2D:$,texSubImage3D:be,compressedTexSubImage2D:ce,compressedTexSubImage3D:xe,scissor:Fe,viewport:Se,reset:ct}}function bf(i,e,t,n){const r=Ly(n);switch(t){case Ld:return i*e;case Ud:return i*e;case Id:return i*e*2;case Nd:return i*e/r.components*r.byteLength;case Ou:return i*e/r.components*r.byteLength;case Od:return i*e*2/r.components*r.byteLength;case Fu:return i*e*2/r.components*r.byteLength;case Dd:return i*e*3/r.components*r.byteLength;case kn:return i*e*4/r.components*r.byteLength;case Bu:return i*e*4/r.components*r.byteLength;case sa:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case aa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wc:case Cc:return Math.max(i,16)*Math.max(e,8)/4;case bc:case Ac:return Math.max(i,8)*Math.max(e,8)/2;case Rc:case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case kc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ca:case qc:case Yc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fd:case Zc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $c:case Kc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ly(i){switch(i){case vi:case Cd:return{byteLength:1,components:1};case js:case Rd:case wr:return{byteLength:2,components:1};case Iu:case Nu:return{byteLength:2,components:4};case Sr:case Uu:case mi:return{byteLength:4,components:1};case Pd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Dy(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,S){return d?new OffscreenCanvas(w,S):Qs("canvas")}function g(w,S,z){let Z=1;const J=_e(w);if((J.width>z||J.height>z)&&(Z=z/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(Z*J.width),be=Math.floor(Z*J.height);h===void 0&&(h=_($,be));const ce=S?_($,be):h;return ce.width=$,ce.height=be,ce.getContext("2d").drawImage(w,0,0,$,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+be+")."),ce}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==an&&w.minFilter!==Jt}function m(w){i.generateMipmap(w)}function M(w,S,z,Z,J=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=S;if(S===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),S===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),S===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),S===i.RGBA){const be=J?va:et.getTransfer(Z);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=be===ft?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(w,S){let z;return w?S===null||S===Sr||S===ps?z=i.DEPTH24_STENCIL8:S===mi?z=i.DEPTH32F_STENCIL8:S===js&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Sr||S===ps?z=i.DEPTH_COMPONENT24:S===mi?z=i.DEPTH_COMPONENT32F:S===js&&(z=i.DEPTH_COMPONENT16),z}function y(w,S){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==an&&w.minFilter!==Jt?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function A(w){const S=w.target;S.removeEventListener("dispose",A),b(S),S.isVideoTexture&&u.delete(S)}function C(w){const S=w.target;S.removeEventListener("dispose",C),U(S)}function b(w){const S=n.get(w);if(S.__webglInit===void 0)return;const z=w.source,Z=f.get(z);if(Z){const J=Z[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(w),Object.keys(Z).length===0&&f.delete(z)}n.remove(w)}function P(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const z=w.source,Z=f.get(z);delete Z[S.__cacheKey],o.memory.textures--}function U(w){const S=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let J=0;J<S.__webglFramebuffer[Z].length;J++)i.deleteFramebuffer(S.__webglFramebuffer[Z][J]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=w.textures;for(let Z=0,J=z.length;Z<J;Z++){const $=n.get(z[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(w)}let v=0;function T(){v=0}function F(){const w=v;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),v+=1,w}function O(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function k(w,S){const z=n.get(w);if(w.isVideoTexture&&le(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(z,w,S);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function W(w,S){const z=n.get(w);if(w.version>0&&z.__version!==w.version){We(z,w,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function B(w,S){const z=n.get(w);if(w.version>0&&z.__version!==w.version){We(z,w,S);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function q(w,S){const z=n.get(w);if(w.version>0&&z.__version!==w.version){Y(z,w,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}const H={[Tc]:i.REPEAT,[mr]:i.CLAMP_TO_EDGE,[Ec]:i.MIRRORED_REPEAT},ae={[an]:i.NEAREST,[M_]:i.NEAREST_MIPMAP_NEAREST,[wo]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[ml]:i.LINEAR_MIPMAP_NEAREST,[_r]:i.LINEAR_MIPMAP_LINEAR},he={[E_]:i.NEVER,[P_]:i.ALWAYS,[b_]:i.LESS,[kd]:i.LEQUAL,[w_]:i.EQUAL,[R_]:i.GEQUAL,[A_]:i.GREATER,[C_]:i.NOTEQUAL};function de(w,S){if(S.type===mi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Jt||S.magFilter===ml||S.magFilter===wo||S.magFilter===_r||S.minFilter===Jt||S.minFilter===ml||S.minFilter===wo||S.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,H[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,H[S.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,H[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ae[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,he[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===an||S.minFilter!==wo&&S.minFilter!==_r||S.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Be(w,S){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));const Z=S.source;let J=f.get(Z);J===void 0&&(J={},f.set(Z,J));const $=O(S);if($!==w.__cacheKey){J[$]===void 0&&(J[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[$].usedTimes++;const be=J[w.__cacheKey];be!==void 0&&(J[w.__cacheKey].usedTimes--,be.usedTimes===0&&P(S)),w.__cacheKey=$,w.__webglTexture=J[$].texture}return z}function We(w,S,z){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);const J=Be(w,S),$=S.source;t.bindTexture(Z,w.__webglTexture,i.TEXTURE0+z);const be=n.get($);if($.version!==be.__version||J===!0){t.activeTexture(i.TEXTURE0+z);const ce=et.getPrimaries(et.workingColorSpace),xe=S.colorSpace===Ni?null:et.getPrimaries(S.colorSpace),qe=S.colorSpace===Ni||ce===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ne=g(S.image,!1,r.maxTextureSize);ne=Ce(S,ne);const ye=s.convert(S.format,S.colorSpace),Oe=s.convert(S.type);let Fe=M(S.internalFormat,ye,Oe,S.colorSpace,S.isVideoTexture);de(Z,S);let Se;const Ye=S.mipmaps,ke=S.isVideoTexture!==!0,ct=be.__version===void 0||J===!0,D=$.dataReady,ge=y(S,ne);if(S.isDepthTexture)Fe=x(S.format===ms,S.type),ct&&(ke?t.texStorage2D(i.TEXTURE_2D,1,Fe,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Fe,ne.width,ne.height,0,ye,Oe,null));else if(S.isDataTexture)if(Ye.length>0){ke&&ct&&t.texStorage2D(i.TEXTURE_2D,ge,Fe,Ye[0].width,Ye[0].height);for(let X=0,j=Ye.length;X<j;X++)Se=Ye[X],ke?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Se.width,Se.height,ye,Oe,Se.data):t.texImage2D(i.TEXTURE_2D,X,Fe,Se.width,Se.height,0,ye,Oe,Se.data);S.generateMipmaps=!1}else ke?(ct&&t.texStorage2D(i.TEXTURE_2D,ge,Fe,ne.width,ne.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,ye,Oe,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,ne.width,ne.height,0,ye,Oe,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ke&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Fe,Ye[0].width,Ye[0].height,ne.depth);for(let X=0,j=Ye.length;X<j;X++)if(Se=Ye[X],S.format!==kn)if(ye!==null)if(ke){if(D)if(S.layerUpdates.size>0){const pe=bf(Se.width,Se.height,S.format,S.type);for(const ve of S.layerUpdates){const Ze=Se.data.subarray(ve*pe/Se.data.BYTES_PER_ELEMENT,(ve+1)*pe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ve,Se.width,Se.height,1,ye,Ze,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,ne.depth,ye,Se.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Fe,Se.width,Se.height,ne.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,ne.depth,ye,Oe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,Fe,Se.width,Se.height,ne.depth,0,ye,Oe,Se.data)}else{ke&&ct&&t.texStorage2D(i.TEXTURE_2D,ge,Fe,Ye[0].width,Ye[0].height);for(let X=0,j=Ye.length;X<j;X++)Se=Ye[X],S.format!==kn?ye!==null?ke?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Se.width,Se.height,ye,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,X,Fe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Se.width,Se.height,ye,Oe,Se.data):t.texImage2D(i.TEXTURE_2D,X,Fe,Se.width,Se.height,0,ye,Oe,Se.data)}else if(S.isDataArrayTexture)if(ke){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Fe,ne.width,ne.height,ne.depth),D)if(S.layerUpdates.size>0){const X=bf(ne.width,ne.height,S.format,S.type);for(const j of S.layerUpdates){const pe=ne.data.subarray(j*X/ne.data.BYTES_PER_ELEMENT,(j+1)*X/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,ne.width,ne.height,1,ye,Oe,pe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ye,Oe,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,ne.width,ne.height,ne.depth,0,ye,Oe,ne.data);else if(S.isData3DTexture)ke?(ct&&t.texStorage3D(i.TEXTURE_3D,ge,Fe,ne.width,ne.height,ne.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ye,Oe,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,ne.width,ne.height,ne.depth,0,ye,Oe,ne.data);else if(S.isFramebufferTexture){if(ct)if(ke)t.texStorage2D(i.TEXTURE_2D,ge,Fe,ne.width,ne.height);else{let X=ne.width,j=ne.height;for(let pe=0;pe<ge;pe++)t.texImage2D(i.TEXTURE_2D,pe,Fe,X,j,0,ye,Oe,null),X>>=1,j>>=1}}else if(Ye.length>0){if(ke&&ct){const X=_e(Ye[0]);t.texStorage2D(i.TEXTURE_2D,ge,Fe,X.width,X.height)}for(let X=0,j=Ye.length;X<j;X++)Se=Ye[X],ke?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ye,Oe,Se):t.texImage2D(i.TEXTURE_2D,X,Fe,ye,Oe,Se);S.generateMipmaps=!1}else if(ke){if(ct){const X=_e(ne);t.texStorage2D(i.TEXTURE_2D,ge,Fe,X.width,X.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Oe,ne)}else t.texImage2D(i.TEXTURE_2D,0,Fe,ye,Oe,ne);p(S)&&m(Z),be.__version=$.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Y(w,S,z){if(S.image.length!==6)return;const Z=Be(w,S),J=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);const $=n.get(J);if(J.version!==$.__version||Z===!0){t.activeTexture(i.TEXTURE0+z);const be=et.getPrimaries(et.workingColorSpace),ce=S.colorSpace===Ni?null:et.getPrimaries(S.colorSpace),xe=S.colorSpace===Ni||be===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const qe=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let j=0;j<6;j++)!qe&&!ne?ye[j]=g(S.image[j],!0,r.maxCubemapSize):ye[j]=ne?S.image[j].image:S.image[j],ye[j]=Ce(S,ye[j]);const Oe=ye[0],Fe=s.convert(S.format,S.colorSpace),Se=s.convert(S.type),Ye=M(S.internalFormat,Fe,Se,S.colorSpace),ke=S.isVideoTexture!==!0,ct=$.__version===void 0||Z===!0,D=J.dataReady;let ge=y(S,Oe);de(i.TEXTURE_CUBE_MAP,S);let X;if(qe){ke&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ye,Oe.width,Oe.height);for(let j=0;j<6;j++){X=ye[j].mipmaps;for(let pe=0;pe<X.length;pe++){const ve=X[pe];S.format!==kn?Fe!==null?ke?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe,0,0,ve.width,ve.height,Fe,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe,Ye,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe,0,0,ve.width,ve.height,Fe,Se,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe,Ye,ve.width,ve.height,0,Fe,Se,ve.data)}}}else{if(X=S.mipmaps,ke&&ct){X.length>0&&ge++;const j=_e(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ye,j.width,j.height)}for(let j=0;j<6;j++)if(ne){ke?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ye[j].width,ye[j].height,Fe,Se,ye[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ye,ye[j].width,ye[j].height,0,Fe,Se,ye[j].data);for(let pe=0;pe<X.length;pe++){const Ze=X[pe].image[j].image;ke?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe+1,0,0,Ze.width,Ze.height,Fe,Se,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe+1,Ye,Ze.width,Ze.height,0,Fe,Se,Ze.data)}}else{ke?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Fe,Se,ye[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ye,Fe,Se,ye[j]);for(let pe=0;pe<X.length;pe++){const ve=X[pe];ke?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe+1,0,0,Fe,Se,ve.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe+1,Ye,Fe,Se,ve.image[j])}}}p(S)&&m(i.TEXTURE_CUBE_MAP),$.__version=J.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Q(w,S,z,Z,J,$){const be=s.convert(z.format,z.colorSpace),ce=s.convert(z.type),xe=M(z.internalFormat,be,ce,z.colorSpace);if(!n.get(S).__hasExternalTextures){const ne=Math.max(1,S.width>>$),ye=Math.max(1,S.height>>$);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,$,xe,ne,ye,S.depth,0,be,ce,null):t.texImage2D(J,$,xe,ne,ye,0,be,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ee(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,J,n.get(z).__webglTexture,0,se(S)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,J,n.get(z).__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(w,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){const Z=S.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,$=x(S.stencilBuffer,J),be=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=se(S);ee(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,$,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,$,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,w)}else{const Z=S.textures;for(let J=0;J<Z.length;J++){const $=Z[J],be=s.convert($.format,$.colorSpace),ce=s.convert($.type),xe=M($.internalFormat,be,ce,$.colorSpace),qe=se(S);z&&ee(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,xe,S.width,S.height):ee(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,xe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const Z=n.get(S.depthTexture).__webglTexture,J=se(S);if(S.depthTexture.format===is)ee(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(S.depthTexture.format===ms)ee(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function De(w){const S=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Z}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");fe(S.__webglFramebuffer,w)}else if(z){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),Me(S.__webglDepthbuffer[Z],w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Me(S.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,J)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(w,S,z){const Z=n.get(w);S!==void 0&&Q(Z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&De(w)}function ze(w){const S=w.texture,z=n.get(w),Z=n.get(S);w.addEventListener("dispose",C);const J=w.textures,$=w.isWebGLCubeRenderTarget===!0,be=J.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let xe=0;xe<S.mipmaps.length;xe++)z.__webglFramebuffer[ce][xe]=i.createFramebuffer()}else z.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)z.__webglFramebuffer[ce]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(be)for(let ce=0,xe=J.length;ce<xe;ce++){const qe=n.get(J[ce]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&ee(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){const xe=J[ce];z.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ce]);const qe=s.convert(xe.format,xe.colorSpace),ne=s.convert(xe.type),ye=M(xe.internalFormat,qe,ne,xe.colorSpace,w.isXRRenderTarget===!0),Oe=se(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,ye,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,z.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),de(i.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)Q(z.__webglFramebuffer[ce][xe],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,xe);else Q(z.__webglFramebuffer[ce],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(S)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ce=0,xe=J.length;ce<xe;ce++){const qe=J[ce],ne=n.get(qe);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),de(i.TEXTURE_2D,qe),Q(z.__webglFramebuffer,w,qe,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),p(qe)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Z.__webglTexture),de(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)Q(z.__webglFramebuffer[xe],w,S,i.COLOR_ATTACHMENT0,ce,xe);else Q(z.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,ce,0);p(S)&&m(ce),t.unbindTexture()}w.depthBuffer&&De(w)}function He(w){const S=w.textures;for(let z=0,Z=S.length;z<Z;z++){const J=S[z];if(p(J)){const $=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,be=n.get(J).__webglTexture;t.bindTexture($,be),m($),t.unbindTexture()}}}const K=[],R=[];function oe(w){if(w.samples>0){if(ee(w)===!1){const S=w.textures,z=w.width,Z=w.height;let J=i.COLOR_BUFFER_BIT;const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(w),ce=S.length>1;if(ce)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);const qe=n.get(S[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,J,i.NEAREST),l===!0&&(K.length=0,R.length=0,K.push(i.COLOR_ATTACHMENT0+xe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(K.push($),R.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);const qe=n.get(S[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function se(w){return Math.min(r.maxSamples,w.samples)}function ee(w){const S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function le(w){const S=o.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function Ce(w,S){const z=w.colorSpace,Z=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Ki&&z!==Ni&&(et.getTransfer(z)===ft?(Z!==kn||J!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function _e(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=T,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=Le,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ee}function Uy(i,e){function t(n,r=Ni){let s;const o=et.getTransfer(r);if(n===vi)return i.UNSIGNED_BYTE;if(n===Iu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cd)return i.BYTE;if(n===Rd)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===Uu)return i.INT;if(n===Sr)return i.UNSIGNED_INT;if(n===mi)return i.FLOAT;if(n===wr)return i.HALF_FLOAT;if(n===Ld)return i.ALPHA;if(n===Dd)return i.RGB;if(n===kn)return i.RGBA;if(n===Ud)return i.LUMINANCE;if(n===Id)return i.LUMINANCE_ALPHA;if(n===is)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===Nd)return i.RED;if(n===Ou)return i.RED_INTEGER;if(n===Od)return i.RG;if(n===Fu)return i.RG_INTEGER;if(n===Bu)return i.RGBA_INTEGER;if(n===sa||n===oa||n===aa||n===la)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===wc||n===Ac||n===Cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Pc||n===Lc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rc||n===Pc)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Lc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dc||n===Uc||n===Ic||n===Nc||n===Oc||n===Fc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ic)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===qc||n===Yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ca)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fd||n===Zc||n===$c||n===Kc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ca)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$c)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Iy extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ln extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ny={type:"move"};class Xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ny)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Oy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fy=`
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

}`;class By{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new kt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new dn({vertexShader:Oy,fragmentShader:Fy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zy extends ws{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new By,p=t.getContextAttributes();let m=null,M=null;const x=[],y=[],A=new te;let C=null;const b=new sn;b.layers.enable(1),b.viewport=new Je;const P=new sn;P.layers.enable(2),P.viewport=new Je;const U=[b,P],v=new Iy;v.layers.enable(1),v.layers.enable(2);let T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=x[Y];return Q===void 0&&(Q=new Xl,x[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=x[Y];return Q===void 0&&(Q=new Xl,x[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=x[Y];return Q===void 0&&(Q=new Xl,x[Y]=Q),Q.getHandSpace()};function O(Y){const Q=y.indexOf(Y.inputSource);if(Q===-1)return;const Me=x[Q];Me!==void 0&&(Me.update(Y.inputSource,Y.frame,c||o),Me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",W);for(let Y=0;Y<x.length;Y++){const Q=y[Y];Q!==null&&(y[Y]=null,x[Y].disconnect(Q))}T=null,F=null,g.reset(),e.setRenderTarget(m),d=null,f=null,h=null,r=null,M=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",k),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new xi(d.framebufferWidth,d.framebufferHeight,{format:kn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,Me=null,fe=null;p.depth&&(fe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?ms:is,Me=p.stencil?ps:Sr);const De={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new xi(f.textureWidth,f.textureHeight,{format:kn,type:vi,depthTexture:new Qd(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(Y){for(let Q=0;Q<Y.removed.length;Q++){const Me=Y.removed[Q],fe=y.indexOf(Me);fe>=0&&(y[fe]=null,x[fe].disconnect(Me))}for(let Q=0;Q<Y.added.length;Q++){const Me=Y.added[Q];let fe=y.indexOf(Me);if(fe===-1){for(let Le=0;Le<x.length;Le++)if(Le>=y.length){y.push(Me),fe=Le;break}else if(y[Le]===null){y[Le]=Me,fe=Le;break}if(fe===-1)break}const De=x[fe];De&&De.connect(Me)}}const B=new L,q=new L;function H(Y,Q,Me){B.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(Me.matrixWorld);const fe=B.distanceTo(q),De=Q.projectionMatrix.elements,Le=Me.projectionMatrix.elements,ze=De[14]/(De[10]-1),He=De[14]/(De[10]+1),K=(De[9]+1)/De[5],R=(De[9]-1)/De[5],oe=(De[8]-1)/De[0],se=(Le[8]+1)/Le[0],ee=ze*oe,le=ze*se,Ce=fe/(-oe+se),_e=Ce*-oe;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(_e),Y.translateZ(Ce),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),De[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const w=ze+Ce,S=He+Ce,z=ee-_e,Z=le+(fe-_e),J=K*He/S*w,$=R*He/S*w;Y.projectionMatrix.makePerspective(z,Z,J,$,w,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ae(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Q=Y.near,Me=Y.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),v.near=P.near=b.near=Q,v.far=P.far=b.far=Me,(T!==v.near||F!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,F=v.far);const fe=Y.parent,De=v.cameras;ae(v,fe);for(let Le=0;Le<De.length;Le++)ae(De[Le],fe);De.length===2?H(v,b,P):v.projectionMatrix.copy(b.projectionMatrix),he(Y,v,fe)};function he(Y,Q,Me){Me===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(Me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Sa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let de=null;function Be(Y,Q){if(u=Q.getViewerPose(c||o),_=Q,u!==null){const Me=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let fe=!1;Me.length!==v.cameras.length&&(v.cameras.length=0,fe=!0);for(let Le=0;Le<Me.length;Le++){const ze=Me[Le];let He=null;if(d!==null)He=d.getViewport(ze);else{const R=h.getViewSubImage(f,ze);He=R.viewport,Le===0&&(e.setRenderTargetTextures(M,R.colorTexture,f.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(M))}let K=U[Le];K===void 0&&(K=new sn,K.layers.enable(Le),K.viewport=new Je,U[Le]=K),K.matrix.fromArray(ze.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(ze.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(He.x,He.y,He.width,He.height),Le===0&&(v.matrix.copy(K.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),fe===!0&&v.cameras.push(K)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Le=h.getDepthInformation(Me[0]);Le&&Le.isValid&&Le.texture&&g.init(e,Le,r.renderState)}}for(let Me=0;Me<x.length;Me++){const fe=y[Me],De=x[Me];fe!==null&&De!==void 0&&De.update(fe,Q,c||o)}de&&de(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const We=new Jd;We.setAnimationLoop(Be),this.setAnimationLoop=function(Y){de=Y},this.dispose=function(){}}}const ar=new Qn,ky=new lt;function Vy(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Zd(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,M,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Qt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Qt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),x=M.envMap,y=M.envMapRotation;x&&(p.envMap.value=x,ar.copy(y),ar.x*=-1,ar.y*=-1,ar.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),p.envMapRotation.value.setFromMatrix4(ky.makeRotationFromEuler(ar)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Gy(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=r[M.id];y===void 0&&(_(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",p));const A=x.program;n.updateUBOMapping(M,A);const C=e.render.frame;s[M.id]!==C&&(f(M),s[M.id]=C)}function u(M){const x=h();M.__bindingPointIndex=x;const y=i.createBuffer(),A=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=r[M.id],y=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,b=y.length;C<b;C++){const P=Array.isArray(y[C])?y[C]:[y[C]];for(let U=0,v=P.length;U<v;U++){const T=P[U];if(d(T,C,U,A)===!0){const F=T.__offset,O=Array.isArray(T.value)?T.value:[T.value];let k=0;for(let W=0;W<O.length;W++){const B=O[W],q=g(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,F+k,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,k),k+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,x,y,A){const C=M.value,b=x+"_"+y;if(A[b]===void 0)return typeof C=="number"||typeof C=="boolean"?A[b]=C:A[b]=C.clone(),!0;{const P=A[b];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return A[b]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function _(M){const x=M.uniforms;let y=0;const A=16;for(let b=0,P=x.length;b<P;b++){const U=Array.isArray(x[b])?x[b]:[x[b]];for(let v=0,T=U.length;v<T;v++){const F=U[v],O=Array.isArray(F.value)?F.value:[F.value];for(let k=0,W=O.length;k<W;k++){const B=O[k],q=g(B),H=y%A,ae=H%q.boundary,he=H+ae;y+=ae,he!==0&&A-he<q.storage&&(y+=A-he),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=q.storage}}}const C=y%A;return C>0&&(y+=A-C),M.__size=y,M.__cache={},this}function g(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function m(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class Hy{constructor(e={}){const{canvas:t=D_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=ki,this.toneMappingExposure=1;const x=this;let y=!1,A=0,C=0,b=null,P=-1,U=null;const v=new Je,T=new Je;let F=null;const O=new Ne(0);let k=0,W=t.width,B=t.height,q=1,H=null,ae=null;const he=new Je(0,0,W,B),de=new Je(0,0,W,B);let Be=!1;const We=new Gu;let Y=!1,Q=!1;const Me=new lt,fe=new lt,De=new L,Le=new Je,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function K(){return b===null?q:1}let R=n;function oe(E,I){return t.getContext(E,I)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Du}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",ve,!1),R===null){const I="webgl2";if(R=oe(I,E),R===null)throw oe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let se,ee,le,Ce,_e,w,S,z,Z,J,$,be,ce,xe,qe,ne,ye,Oe,Fe,Se,Ye,ke,ct,D;function ge(){se=new $v(R),se.init(),ke=new Uy(R,se),ee=new Hv(R,se,e,ke),le=new Py(R),ee.reverseDepthBuffer&&le.buffers.depth.setReversed(!0),Ce=new jv(R),_e=new _y,w=new Dy(R,se,le,_e,ee,ke,Ce),S=new Xv(x),z=new Zv(x),Z=new sg(R),ct=new Vv(R,Z),J=new Kv(R,Z,Ce,ct),$=new ex(R,J,Z,Ce),Fe=new Qv(R,ee,w),ne=new Wv(_e),be=new my(x,S,z,se,ee,ct,ne),ce=new Vy(x,_e),xe=new vy,qe=new Ey(se),Oe=new kv(x,S,z,le,$,f,l),ye=new Cy(x,$,ee),D=new Gy(R,Ce,ee,le),Se=new Gv(R,se,Ce),Ye=new Jv(R,se,Ce),Ce.programs=be.programs,x.capabilities=ee,x.extensions=se,x.properties=_e,x.renderLists=xe,x.shadowMap=ye,x.state=le,x.info=Ce}ge();const X=new zy(x,R);this.xr=X,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(W,B,!1))},this.getSize=function(E){return E.set(W,B)},this.setSize=function(E,I,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,B=I,t.width=Math.floor(E*q),t.height=Math.floor(I*q),V===!0&&(t.style.width=E+"px",t.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(W*q,B*q).floor()},this.setDrawingBufferSize=function(E,I,V){W=E,B=I,q=V,t.width=Math.floor(E*V),t.height=Math.floor(I*V),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(he)},this.setViewport=function(E,I,V,G){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,I,V,G),le.viewport(v.copy(he).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(de)},this.setScissor=function(E,I,V,G){E.isVector4?de.set(E.x,E.y,E.z,E.w):de.set(E,I,V,G),le.scissor(T.copy(de).multiplyScalar(q).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(E){le.setScissorTest(Be=E)},this.setOpaqueSort=function(E){H=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(E=!0,I=!0,V=!0){let G=0;if(E){let N=!1;if(b!==null){const re=b.texture.format;N=re===Bu||re===Fu||re===Ou}if(N){const re=b.texture.type,me=re===vi||re===Sr||re===js||re===ps||re===Iu||re===Nu,Ee=Oe.getClearColor(),we=Oe.getClearAlpha(),Ue=Ee.r,Ie=Ee.g,Ae=Ee.b;me?(d[0]=Ue,d[1]=Ie,d[2]=Ae,d[3]=we,R.clearBufferuiv(R.COLOR,0,d)):(_[0]=Ue,_[1]=Ie,_[2]=Ae,_[3]=we,R.clearBufferiv(R.COLOR,0,_))}else G|=R.COLOR_BUFFER_BIT}I&&(G|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),xe.dispose(),qe.dispose(),_e.dispose(),S.dispose(),z.dispose(),$.dispose(),ct.dispose(),D.dispose(),be.dispose(),X.dispose(),X.removeEventListener("sessionstart",bh),X.removeEventListener("sessionend",wh),tr.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=Ce.autoReset,I=ye.enabled,V=ye.autoUpdate,G=ye.needsUpdate,N=ye.type;ge(),Ce.autoReset=E,ye.enabled=I,ye.autoUpdate=V,ye.needsUpdate=G,ye.type=N}function ve(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ze(E){const I=E.target;I.removeEventListener("dispose",Ze),At(I)}function At(E){tn(E),_e.remove(E)}function tn(E){const I=_e.get(E).programs;I!==void 0&&(I.forEach(function(V){be.releaseProgram(V)}),E.isShaderMaterial&&be.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,V,G,N,re){I===null&&(I=ze);const me=N.isMesh&&N.matrixWorld.determinant()<0,Ee=Hm(E,I,V,G,N);le.setMaterial(G,me);let we=V.index,Ue=1;if(G.wireframe===!0){if(we=J.getWireframeAttribute(V),we===void 0)return;Ue=2}const Ie=V.drawRange,Ae=V.attributes.position;let it=Ie.start*Ue,ht=(Ie.start+Ie.count)*Ue;re!==null&&(it=Math.max(it,re.start*Ue),ht=Math.min(ht,(re.start+re.count)*Ue)),we!==null?(it=Math.max(it,0),ht=Math.min(ht,we.count)):Ae!=null&&(it=Math.max(it,0),ht=Math.min(ht,Ae.count));const St=ht-it;if(St<0||St===1/0)return;ct.setup(N,G,Ee,V,we);let mn,je=Se;if(we!==null&&(mn=Z.get(we),je=Ye,je.setIndex(mn)),N.isMesh)G.wireframe===!0?(le.setLineWidth(G.wireframeLinewidth*K()),je.setMode(R.LINES)):je.setMode(R.TRIANGLES);else if(N.isLine){let Re=G.linewidth;Re===void 0&&(Re=1),le.setLineWidth(Re*K()),N.isLineSegments?je.setMode(R.LINES):N.isLineLoop?je.setMode(R.LINE_LOOP):je.setMode(R.LINE_STRIP)}else N.isPoints?je.setMode(R.POINTS):N.isSprite&&je.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)je.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Re=N._multiDrawStarts,Bt=N._multiDrawCounts,Qe=N._multiDrawCount,On=we?Z.get(we).bytesPerElement:1,Pr=_e.get(G).currentProgram.getUniforms();for(let _n=0;_n<Qe;_n++)Pr.setValue(R,"_gl_DrawID",_n),je.render(Re[_n]/On,Bt[_n])}else if(N.isInstancedMesh)je.renderInstances(it,St,N.count);else if(V.isInstancedBufferGeometry){const Re=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Bt=Math.min(V.instanceCount,Re);je.renderInstances(it,St,Bt)}else je.render(it,St)};function $e(E,I,V){E.transparent===!0&&E.side===Xt&&E.forceSinglePass===!1?(E.side=Qt,E.needsUpdate=!0,bo(E,I,V),E.side=Hn,E.needsUpdate=!0,bo(E,I,V),E.side=Xt):bo(E,I,V)}this.compile=function(E,I,V=null){V===null&&(V=E),p=qe.get(V),p.init(I),M.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==V&&E.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const re=N.material;if(re)if(Array.isArray(re))for(let me=0;me<re.length;me++){const Ee=re[me];$e(Ee,V,N),G.add(Ee)}else $e(re,V,N),G.add(re)}),M.pop(),p=null,G},this.compileAsync=function(E,I,V=null){const G=this.compile(E,I,V);return new Promise(N=>{function re(){if(G.forEach(function(me){_e.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){N(E);return}setTimeout(re,10)}se.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let nn=null;function si(E){nn&&nn(E)}function bh(){tr.stop()}function wh(){tr.start()}const tr=new Jd;tr.setAnimationLoop(si),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(E){nn=E,X.setAnimationLoop(E),E===null?tr.stop():tr.start()},X.addEventListener("sessionstart",bh),X.addEventListener("sessionend",wh),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,I,b),p=qe.get(E,M.length),p.init(I),M.push(p),fe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),We.setFromProjectionMatrix(fe),Q=this.localClippingEnabled,Y=ne.init(this.clippingPlanes,Q),g=xe.get(E,m.length),g.init(),m.push(g),X.enabled===!0&&X.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&hl(re,I,-1/0,x.sortObjects)}hl(E,I,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(H,ae),He=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,He&&Oe.addToRenderList(g,E),this.info.render.frame++,Y===!0&&ne.beginShadows();const V=p.state.shadowsArray;ye.render(V,E,I),Y===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,N=g.transmissive;if(p.setupLights(),I.isArrayCamera){const re=I.cameras;if(N.length>0)for(let me=0,Ee=re.length;me<Ee;me++){const we=re[me];Ch(G,N,E,we)}He&&Oe.render(E);for(let me=0,Ee=re.length;me<Ee;me++){const we=re[me];Ah(g,E,we,we.viewport)}}else N.length>0&&Ch(G,N,E,I),He&&Oe.render(E),Ah(g,E,I);b!==null&&(w.updateMultisampleRenderTarget(b),w.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(x,E,I),ct.resetDefaultState(),P=-1,U=null,M.pop(),M.length>0?(p=M[M.length-1],Y===!0&&ne.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function hl(E,I,V,G){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||We.intersectsSprite(E)){G&&Le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);const me=$.update(E),Ee=E.material;Ee.visible&&g.push(E,me,Ee,V,Le.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||We.intersectsObject(E))){const me=$.update(E),Ee=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Le.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Le.copy(me.boundingSphere.center)),Le.applyMatrix4(E.matrixWorld).applyMatrix4(fe)),Array.isArray(Ee)){const we=me.groups;for(let Ue=0,Ie=we.length;Ue<Ie;Ue++){const Ae=we[Ue],it=Ee[Ae.materialIndex];it&&it.visible&&g.push(E,me,it,V,Le.z,Ae)}}else Ee.visible&&g.push(E,me,Ee,V,Le.z,null)}}const re=E.children;for(let me=0,Ee=re.length;me<Ee;me++)hl(re[me],I,V,G)}function Ah(E,I,V,G){const N=E.opaque,re=E.transmissive,me=E.transparent;p.setupLightsView(V),Y===!0&&ne.setGlobalState(x.clippingPlanes,V),G&&le.viewport(v.copy(G)),N.length>0&&Eo(N,I,V),re.length>0&&Eo(re,I,V),me.length>0&&Eo(me,I,V),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Ch(E,I,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new xi(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?wr:vi,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const re=p.state.transmissionRenderTarget[G.id],me=G.viewport||v;re.setSize(me.z,me.w);const Ee=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(O),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),He&&Oe.render(V);const we=x.toneMapping;x.toneMapping=ki;const Ue=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),Y===!0&&ne.setGlobalState(x.clippingPlanes,G),Eo(E,V,G),w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Ae=0,it=I.length;Ae<it;Ae++){const ht=I[Ae],St=ht.object,mn=ht.geometry,je=ht.material,Re=ht.group;if(je.side===Xt&&St.layers.test(G.layers)){const Bt=je.side;je.side=Qt,je.needsUpdate=!0,Rh(St,V,G,mn,je,Re),je.side=Bt,je.needsUpdate=!0,Ie=!0}}Ie===!0&&(w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re))}x.setRenderTarget(Ee),x.setClearColor(O,k),Ue!==void 0&&(G.viewport=Ue),x.toneMapping=we}function Eo(E,I,V){const G=I.isScene===!0?I.overrideMaterial:null;for(let N=0,re=E.length;N<re;N++){const me=E[N],Ee=me.object,we=me.geometry,Ue=G===null?me.material:G,Ie=me.group;Ee.layers.test(V.layers)&&Rh(Ee,I,V,we,Ue,Ie)}}function Rh(E,I,V,G,N,re){E.onBeforeRender(x,I,V,G,N,re),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,I,V,G,E,re),N.transparent===!0&&N.side===Xt&&N.forceSinglePass===!1?(N.side=Qt,N.needsUpdate=!0,x.renderBufferDirect(V,I,G,N,E,re),N.side=Hn,N.needsUpdate=!0,x.renderBufferDirect(V,I,G,N,E,re),N.side=Xt):x.renderBufferDirect(V,I,G,N,E,re),E.onAfterRender(x,I,V,G,N,re)}function bo(E,I,V){I.isScene!==!0&&(I=ze);const G=_e.get(E),N=p.state.lights,re=p.state.shadowsArray,me=N.state.version,Ee=be.getParameters(E,N.state,re,I,V),we=be.getProgramCacheKey(Ee);let Ue=G.programs;G.environment=E.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(E.isMeshStandardMaterial?z:S).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Ue===void 0&&(E.addEventListener("dispose",Ze),Ue=new Map,G.programs=Ue);let Ie=Ue.get(we);if(Ie!==void 0){if(G.currentProgram===Ie&&G.lightsStateVersion===me)return Lh(E,Ee),Ie}else Ee.uniforms=be.getUniforms(E),E.onBeforeCompile(Ee,x),Ie=be.acquireProgram(Ee,we),Ue.set(we,Ie),G.uniforms=Ee.uniforms;const Ae=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=ne.uniform),Lh(E,Ee),G.needsLights=Xm(E),G.lightsStateVersion=me,G.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Ie,G.uniformsList=null,Ie}function Ph(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=ha.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Lh(E,I){const V=_e.get(E);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function Hm(E,I,V,G,N){I.isScene!==!0&&(I=ze),w.resetTextureUnits();const re=I.fog,me=G.isMeshStandardMaterial?I.environment:null,Ee=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ki,we=(G.isMeshStandardMaterial?z:S).get(G.envMap||me),Ue=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ie=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!V.morphAttributes.position,it=!!V.morphAttributes.normal,ht=!!V.morphAttributes.color;let St=ki;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(St=x.toneMapping);const mn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,je=mn!==void 0?mn.length:0,Re=_e.get(G),Bt=p.state.lights;if(Y===!0&&(Q===!0||E!==U)){const Rn=E===U&&G.id===P;ne.setState(G,E,Rn)}let Qe=!1;G.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Bt.state.version||Re.outputColorSpace!==Ee||N.isBatchedMesh&&Re.batching===!1||!N.isBatchedMesh&&Re.batching===!0||N.isBatchedMesh&&Re.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Re.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Re.instancing===!1||!N.isInstancedMesh&&Re.instancing===!0||N.isSkinnedMesh&&Re.skinning===!1||!N.isSkinnedMesh&&Re.skinning===!0||N.isInstancedMesh&&Re.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Re.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Re.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Re.instancingMorph===!1&&N.morphTexture!==null||Re.envMap!==we||G.fog===!0&&Re.fog!==re||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ne.numPlanes||Re.numIntersection!==ne.numIntersection)||Re.vertexAlphas!==Ue||Re.vertexTangents!==Ie||Re.morphTargets!==Ae||Re.morphNormals!==it||Re.morphColors!==ht||Re.toneMapping!==St||Re.morphTargetsCount!==je)&&(Qe=!0):(Qe=!0,Re.__version=G.version);let On=Re.currentProgram;Qe===!0&&(On=bo(G,I,N));let Pr=!1,_n=!1,fl=!1;const Et=On.getUniforms(),wi=Re.uniforms;if(le.useProgram(On.program)&&(Pr=!0,_n=!0,fl=!0),G.id!==P&&(P=G.id,_n=!0),Pr||U!==E){ee.reverseDepthBuffer?(Me.copy(E.projectionMatrix),I_(Me),N_(Me),Et.setValue(R,"projectionMatrix",Me)):Et.setValue(R,"projectionMatrix",E.projectionMatrix),Et.setValue(R,"viewMatrix",E.matrixWorldInverse);const Rn=Et.map.cameraPosition;Rn!==void 0&&Rn.setValue(R,De.setFromMatrixPosition(E.matrixWorld)),ee.logarithmicDepthBuffer&&Et.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Et.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),U!==E&&(U=E,_n=!0,fl=!0)}if(N.isSkinnedMesh){Et.setOptional(R,N,"bindMatrix"),Et.setOptional(R,N,"bindMatrixInverse");const Rn=N.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Et.setValue(R,"boneTexture",Rn.boneTexture,w))}N.isBatchedMesh&&(Et.setOptional(R,N,"batchingTexture"),Et.setValue(R,"batchingTexture",N._matricesTexture,w),Et.setOptional(R,N,"batchingIdTexture"),Et.setValue(R,"batchingIdTexture",N._indirectTexture,w),Et.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&Et.setValue(R,"batchingColorTexture",N._colorsTexture,w));const dl=V.morphAttributes;if((dl.position!==void 0||dl.normal!==void 0||dl.color!==void 0)&&Fe.update(N,V,On),(_n||Re.receiveShadow!==N.receiveShadow)&&(Re.receiveShadow=N.receiveShadow,Et.setValue(R,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(wi.envMap.value=we,wi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(wi.envMapIntensity.value=I.environmentIntensity),_n&&(Et.setValue(R,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&Wm(wi,fl),re&&G.fog===!0&&ce.refreshFogUniforms(wi,re),ce.refreshMaterialUniforms(wi,G,q,B,p.state.transmissionRenderTarget[E.id]),ha.upload(R,Ph(Re),wi,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ha.upload(R,Ph(Re),wi,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Et.setValue(R,"center",N.center),Et.setValue(R,"modelViewMatrix",N.modelViewMatrix),Et.setValue(R,"normalMatrix",N.normalMatrix),Et.setValue(R,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Rn=G.uniformsGroups;for(let pl=0,qm=Rn.length;pl<qm;pl++){const Dh=Rn[pl];D.update(Dh,On),D.bind(Dh,On)}}return On}function Wm(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Xm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,I,V){_e.get(E.texture).__webglTexture=I,_e.get(E.depthTexture).__webglTexture=V;const G=_e.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const V=_e.get(E);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,V=0){b=E,A=I,C=V;let G=!0,N=null,re=!1,me=!1;if(E){const we=_e.get(E);if(we.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(R.FRAMEBUFFER,null),G=!1;else if(we.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(we.__hasExternalTextures)w.rebindTextures(E,_e.get(E.texture).__webglTexture,_e.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ae=E.depthTexture;if(we.__boundDepthTexture!==Ae){if(Ae!==null&&_e.has(Ae)&&(E.width!==Ae.image.width||E.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(me=!0);const Ie=_e.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?N=Ie[I][V]:N=Ie[I],re=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?N=_e.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?N=Ie[V]:N=Ie,v.copy(E.viewport),T.copy(E.scissor),F=E.scissorTest}else v.copy(he).multiplyScalar(q).floor(),T.copy(de).multiplyScalar(q).floor(),F=Be;if(le.bindFramebuffer(R.FRAMEBUFFER,N)&&G&&le.drawBuffers(E,N),le.viewport(v),le.scissor(T),le.setScissorTest(F),re){const we=_e.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,we.__webglTexture,V)}else if(me){const we=_e.get(E.texture),Ue=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,we.__webglTexture,V||0,Ue)}P=-1},this.readRenderTargetPixels=function(E,I,V,G,N,re,me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=_e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){le.bindFramebuffer(R.FRAMEBUFFER,Ee);try{const we=E.texture,Ue=we.format,Ie=we.type;if(!ee.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-G&&V>=0&&V<=E.height-N&&R.readPixels(I,V,G,N,ke.convert(Ue),ke.convert(Ie),re)}finally{const we=b!==null?_e.get(b).__webglFramebuffer:null;le.bindFramebuffer(R.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,I,V,G,N,re,me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=_e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){const we=E.texture,Ue=we.format,Ie=we.type;if(!ee.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-G&&V>=0&&V<=E.height-N){le.bindFramebuffer(R.FRAMEBUFFER,Ee);const Ae=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ae),R.bufferData(R.PIXEL_PACK_BUFFER,re.byteLength,R.STREAM_READ),R.readPixels(I,V,G,N,ke.convert(Ue),ke.convert(Ie),0);const it=b!==null?_e.get(b).__webglFramebuffer:null;le.bindFramebuffer(R.FRAMEBUFFER,it);const ht=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await U_(R,ht,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ae),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,re),R.deleteBuffer(Ae),R.deleteSync(ht),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,I=null,V=0){E.isTexture!==!0&&(ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-V),N=Math.floor(E.image.width*G),re=Math.floor(E.image.height*G),me=I!==null?I.x:0,Ee=I!==null?I.y:0;w.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,me,Ee,N,re),le.unbindTexture()},this.copyTextureToTexture=function(E,I,V=null,G=null,N=0){E.isTexture!==!0&&(ua("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],I=arguments[2],N=arguments[3]||0,V=null);let re,me,Ee,we,Ue,Ie;V!==null?(re=V.max.x-V.min.x,me=V.max.y-V.min.y,Ee=V.min.x,we=V.min.y):(re=E.image.width,me=E.image.height,Ee=0,we=0),G!==null?(Ue=G.x,Ie=G.y):(Ue=0,Ie=0);const Ae=ke.convert(I.format),it=ke.convert(I.type);w.setTexture2D(I,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const ht=R.getParameter(R.UNPACK_ROW_LENGTH),St=R.getParameter(R.UNPACK_IMAGE_HEIGHT),mn=R.getParameter(R.UNPACK_SKIP_PIXELS),je=R.getParameter(R.UNPACK_SKIP_ROWS),Re=R.getParameter(R.UNPACK_SKIP_IMAGES),Bt=E.isCompressedTexture?E.mipmaps[N]:E.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Bt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Bt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ee),R.pixelStorei(R.UNPACK_SKIP_ROWS,we),E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,Ue,Ie,re,me,Ae,it,Bt.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,Ue,Ie,Bt.width,Bt.height,Ae,Bt.data):R.texSubImage2D(R.TEXTURE_2D,N,Ue,Ie,re,me,Ae,it,Bt),R.pixelStorei(R.UNPACK_ROW_LENGTH,ht),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,St),R.pixelStorei(R.UNPACK_SKIP_PIXELS,mn),R.pixelStorei(R.UNPACK_SKIP_ROWS,je),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Re),N===0&&I.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(E,I,V=null,G=null,N=0){E.isTexture!==!0&&(ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,E=arguments[2],I=arguments[3],N=arguments[4]||0);let re,me,Ee,we,Ue,Ie,Ae,it,ht;const St=E.isCompressedTexture?E.mipmaps[N]:E.image;V!==null?(re=V.max.x-V.min.x,me=V.max.y-V.min.y,Ee=V.max.z-V.min.z,we=V.min.x,Ue=V.min.y,Ie=V.min.z):(re=St.width,me=St.height,Ee=St.depth,we=0,Ue=0,Ie=0),G!==null?(Ae=G.x,it=G.y,ht=G.z):(Ae=0,it=0,ht=0);const mn=ke.convert(I.format),je=ke.convert(I.type);let Re;if(I.isData3DTexture)w.setTexture3D(I,0),Re=R.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)w.setTexture2DArray(I,0),Re=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const Bt=R.getParameter(R.UNPACK_ROW_LENGTH),Qe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),On=R.getParameter(R.UNPACK_SKIP_PIXELS),Pr=R.getParameter(R.UNPACK_SKIP_ROWS),_n=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,St.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,St.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,we),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ue),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ie),E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Re,N,Ae,it,ht,re,me,Ee,mn,je,St.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(Re,N,Ae,it,ht,re,me,Ee,mn,St.data):R.texSubImage3D(Re,N,Ae,it,ht,re,me,Ee,mn,je,St),R.pixelStorei(R.UNPACK_ROW_LENGTH,Bt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,On),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pr),R.pixelStorei(R.UNPACK_SKIP_IMAGES,_n),N===0&&I.generateMipmaps&&R.generateMipmap(Re),le.unbindTexture()},this.initRenderTarget=function(E){_e.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),le.unbindTexture()},this.resetState=function(){A=0,C=0,b=null,le.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===zu?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===Va?"display-p3":"srgb"}}class Wu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new Wu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wy extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jc,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new L;class Ta{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ta(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sp extends Ji{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Xr;const Is=new L,qr=new L,Yr=new L,Zr=new te,Ns=new te,op=new lt,Yo=new L,Os=new L,Zo=new L,wf=new te,ql=new te,Af=new te;class qy extends Dt{constructor(e=new sp){if(super(),this.isSprite=!0,this.type="Sprite",Xr===void 0){Xr=new mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xy(t,5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute("position",new Ta(n,3,0,!1)),Xr.setAttribute("uv",new Ta(n,2,3,!1))}this.geometry=Xr,this.material=e,this.center=new te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),op.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Yr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;$o(Yo.set(-.5,-.5,0),Yr,o,qr,r,s),$o(Os.set(.5,-.5,0),Yr,o,qr,r,s),$o(Zo.set(.5,.5,0),Yr,o,qr,r,s),wf.set(0,0),ql.set(1,0),Af.set(1,1);let a=e.ray.intersectTriangle(Yo,Os,Zo,!1,Is);if(a===null&&($o(Os.set(-.5,.5,0),Yr,o,qr,r,s),ql.set(0,1),a=e.ray.intersectTriangle(Yo,Zo,Os,!1,Is),a===null))return;const l=e.ray.origin.distanceTo(Is);l<e.near||l>e.far||t.push({distance:l,point:Is.clone(),uv:Dn.getInterpolation(Is,Yo,Os,Zo,wf,ql,Af,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function $o(i,e,t,n,r,s){Zr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ns.x=s*Zr.x-r*Zr.y,Ns.y=r*Zr.x+s*Zr.y):Ns.copy(Zr),i.copy(e),i.x+=Ns.x,i.y+=Ns.y,i.applyMatrix4(op)}class ss extends Ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ea=new L,ba=new L,Cf=new lt,Fs=new ku,Ko=new go,Yl=new L,Rf=new L;class Xs extends Dt{constructor(e=new mt,t=new ss){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ea.fromBufferAttribute(t,r-1),ba.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ea.distanceTo(ba);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(r),Ko.radius+=s,e.ray.intersectsSphere(Ko)===!1)return;Cf.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(Cf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=c){const m=u.getX(g),M=u.getX(g+1),x=Jo(this,e,Fs,l,m,M);x&&t.push(x)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(d),m=Jo(this,e,Fs,l,g,p);m&&t.push(m)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=c){const m=Jo(this,e,Fs,l,g,g+1);m&&t.push(m)}if(this.isLineLoop){const g=Jo(this,e,Fs,l,_-1,d);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jo(i,e,t,n,r,s){const o=i.geometry.attributes.position;if(Ea.fromBufferAttribute(o,r),ba.fromBufferAttribute(o,s),t.distanceSqToSegment(Ea,ba,Yl,Rf)>n)return;Yl.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Yl);if(!(l<e.near||l>e.far))return{distance:l,point:Rf.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}class Yy extends Ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pf=new lt,Qc=new ku,jo=new go,Qo=new L;class Zy extends Dt{constructor(e=new mt,t=new Yy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(r),jo.radius+=s,e.ray.intersectsSphere(jo)===!1)return;Pf.copy(r).invert(),Qc.copy(e.ray).applyMatrix4(Pf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);Qo.fromBufferAttribute(h,p),Lf(Qo,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)Qo.fromBufferAttribute(h,_),Lf(Qo,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Lf(i,e,t,n,r,s,o){const a=Qc.distanceSqToPoint(i);if(a<t){const l=new L;Qc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class $y extends kt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Jt,this.magFilter=s!==void 0?s:Jt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Ky extends kt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ii{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new te:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,r=[],s=[],o=[],a=new L,l=new lt;for(let d=0;d<=e;d++){const _=d/e;r[d]=this.getTangentAt(_,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(zt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(zt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xu extends ii{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new te){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Jy extends Xu{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function qu(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const ea=new L,Zl=new qu,$l=new qu,Kl=new qu;class Ha extends ii{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(ea.subVectors(r[0],r[1]).add(r[0]),c=ea);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ea.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ea),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Zl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,p),$l.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,p),Kl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(Zl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),$l.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Kl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Zl.calc(l),$l.calc(l),Kl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Df(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function jy(i,e){const t=1-i;return t*t*e}function Qy(i,e){return 2*(1-i)*i*e}function eM(i,e){return i*i*e}function qs(i,e,t,n){return jy(i,e)+Qy(i,t)+eM(i,n)}function tM(i,e){const t=1-i;return t*t*t*e}function nM(i,e){const t=1-i;return 3*t*t*i*e}function iM(i,e){return 3*(1-i)*i*i*e}function rM(i,e){return i*i*i*e}function Ys(i,e,t,n,r){return tM(i,e)+nM(i,t)+iM(i,n)+rM(i,r)}class ap extends ii{constructor(e=new te,t=new te,n=new te,r=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new te){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ys(e,r.x,s.x,o.x,a.x),Ys(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sM extends ii{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ys(e,r.x,s.x,o.x,a.x),Ys(e,r.y,s.y,o.y,a.y),Ys(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lp extends ii{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oM extends ii{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cp extends ii{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(qs(e,r.x,s.x,o.x),qs(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class up extends ii{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(qs(e,r.x,s.x,o.x),qs(e,r.y,s.y,o.y),qs(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hp extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Df(a,l.x,c.x,u.x,h.x),Df(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new te().fromArray(r))}return this}}var wa=Object.freeze({__proto__:null,ArcCurve:Jy,CatmullRomCurve3:Ha,CubicBezierCurve:ap,CubicBezierCurve3:sM,EllipseCurve:Xu,LineCurve:lp,LineCurve3:oM,QuadraticBezierCurve:cp,QuadraticBezierCurve3:up,SplineCurve:hp});class aM extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wa[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new wa[r.type]().fromJSON(r))}return this}}class Uf extends aM{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new lp(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new cp(this.currentPoint.clone(),new te(e,t),new te(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new ap(this.currentPoint.clone(),new te(e,t),new te(n,r),new te(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new hp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new Xu(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ei extends mt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new L,u=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ot extends mt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let _=0;const g=[],p=n/2;let m=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(d,2));function M(){const y=new L,A=new L;let C=0;const b=(t-e)/n;for(let P=0;P<=s;P++){const U=[],v=P/s,T=v*(t-e)+e;for(let F=0;F<=r;F++){const O=F/r,k=O*l+a,W=Math.sin(k),B=Math.cos(k);A.x=T*W,A.y=-v*n+p,A.z=T*B,h.push(A.x,A.y,A.z),y.set(W,b,B).normalize(),f.push(y.x,y.y,y.z),d.push(O,1-v),U.push(_++)}g.push(U)}for(let P=0;P<r;P++)for(let U=0;U<s;U++){const v=g[U][P],T=g[U+1][P],F=g[U+1][P+1],O=g[U][P+1];e>0&&(u.push(v,T,O),C+=3),t>0&&(u.push(T,F,O),C+=3)}c.addGroup(m,C,0),m+=C}function x(y){const A=_,C=new te,b=new L;let P=0;const U=y===!0?e:t,v=y===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,p*v,0),f.push(0,v,0),d.push(.5,.5),_++;const T=_;for(let F=0;F<=r;F++){const k=F/r*l+a,W=Math.cos(k),B=Math.sin(k);b.x=U*B,b.y=p*v,b.z=U*W,h.push(b.x,b.y,b.z),f.push(0,v,0),C.x=W*.5+.5,C.y=B*.5*v+.5,d.push(C.x,C.y),_++}for(let F=0;F<r;F++){const O=A+F,k=T+F;y===!0?u.push(k,k+1,O):u.push(k+1,k,O),P+=3}c.addGroup(m,P,y===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ot(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gn extends Uf{constructor(e){super(e),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Uf().fromJSON(r))}return this}}const lM={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=fp(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(n&&(s=dM(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let _=t;_<r;_+=t)h=i[_],f=i[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return eo(s,o,t,a,l,d,0),o}};function fp(i,e,t,n,r){let s,o;if(r===EM(i,e,t,n)>0)for(s=e;s<t;s+=n)o=If(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=If(s,i[s],i[s+1],o);return o&&Wa(o,o.next)&&(no(o),o=o.next),o}function Tr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Wa(t,t.next)||vt(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function eo(i,e,t,n,r,s,o){if(!i)return;!o&&s&&vM(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?uM(i,n,r,s):cM(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),no(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=hM(Tr(i),e,t),eo(i,e,t,n,r,s,2)):o===2&&fM(i,e,t,n,r,s):eo(Tr(i),e,t,n,r,s,1);break}}}function cM(i){const e=i.prev,t=i,n=i.next;if(vt(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&jr(r,a,s,l,o,c,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function uM(i,e,t,n){const r=i.prev,s=i,o=i.next;if(vt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=eu(d,_,e,t,n),M=eu(g,p,e,t,n);let x=i.prevZ,y=i.nextZ;for(;x&&x.z>=m&&y&&y.z<=M;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=p&&x!==r&&x!==o&&jr(a,u,l,h,c,f,x.x,x.y)&&vt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=g&&y.y>=_&&y.y<=p&&y!==r&&y!==o&&jr(a,u,l,h,c,f,y.x,y.y)&&vt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=p&&x!==r&&x!==o&&jr(a,u,l,h,c,f,x.x,x.y)&&vt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=g&&y.y>=_&&y.y<=p&&y!==r&&y!==o&&jr(a,u,l,h,c,f,y.x,y.y)&&vt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function hM(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Wa(r,s)&&dp(r,n,n.next,s)&&to(r,s)&&to(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),no(n),no(n.next),n=i=s),n=n.next}while(n!==i);return Tr(n)}function fM(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&MM(o,a)){let l=pp(o,a);o=Tr(o,o.next),l=Tr(l,l.next),eo(o,e,t,n,r,s,0),eo(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function dM(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=fp(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(yM(c));for(r.sort(pM),s=0;s<r.length;s++)t=mM(r[s],t);return t}function pM(i,e){return i.x-e.x}function mM(i,e){const t=_M(i,e);if(!t)return e;const n=pp(t,i);return Tr(n,n.next),Tr(t,t.next)}function _M(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&jr(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),to(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&gM(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function gM(i,e){return vt(i.prev,i,e.prev)<0&&vt(e.next,i,i.next)<0}function vM(i,e,t,n){let r=i;do r.z===0&&(r.z=eu(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,xM(r)}function xM(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function eu(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function yM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function jr(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function MM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!SM(i,e)&&(to(i,e)&&to(e,i)&&TM(i,e)&&(vt(i.prev,i,e.prev)||vt(i,e.prev,e))||Wa(i,e)&&vt(i.prev,i,i.next)>0&&vt(e.prev,e,e.next)>0)}function vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Wa(i,e){return i.x===e.x&&i.y===e.y}function dp(i,e,t,n){const r=na(vt(i,e,t)),s=na(vt(i,e,n)),o=na(vt(t,n,i)),a=na(vt(t,n,e));return!!(r!==s&&o!==a||r===0&&ta(i,t,e)||s===0&&ta(i,n,e)||o===0&&ta(t,i,n)||a===0&&ta(t,e,n))}function ta(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function na(i){return i>0?1:i<0?-1:0}function SM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&dp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function to(i,e){return vt(i.prev,i,i.next)<0?vt(i,e,i.next)>=0&&vt(i,i.prev,e)>=0:vt(i,e,i.prev)<0||vt(i,i.next,e)<0}function TM(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function pp(i,e){const t=new tu(i.i,i.x,i.y),n=new tu(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function If(i,e,t,n){const r=new tu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function no(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function EM(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Vi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Vi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Nf(e),Of(n,e);let o=e.length;t.forEach(Nf);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Of(n,t[l]);const a=lM.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Nf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Of(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Yu extends mt{constructor(e=new Gn([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new nt(r,3)),this.setAttribute("uv",new nt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:bM;let x,y=!1,A,C,b,P;m&&(x=m.getSpacedPoints(u),y=!0,f=!1,A=m.computeFrenetFrames(u,!1),C=new L,b=new L,P=new L),f||(p=0,d=0,_=0,g=0);const U=a.extractPoints(c);let v=U.shape;const T=U.holes;if(!Vi.isClockWise(v)){v=v.reverse();for(let K=0,R=T.length;K<R;K++){const oe=T[K];Vi.isClockWise(oe)&&(T[K]=oe.reverse())}}const O=Vi.triangulateShape(v,T),k=v;for(let K=0,R=T.length;K<R;K++){const oe=T[K];v=v.concat(oe)}function W(K,R,oe){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(R,oe)}const B=v.length,q=O.length;function H(K,R,oe){let se,ee,le;const Ce=K.x-R.x,_e=K.y-R.y,w=oe.x-K.x,S=oe.y-K.y,z=Ce*Ce+_e*_e,Z=Ce*S-_e*w;if(Math.abs(Z)>Number.EPSILON){const J=Math.sqrt(z),$=Math.sqrt(w*w+S*S),be=R.x-_e/J,ce=R.y+Ce/J,xe=oe.x-S/$,qe=oe.y+w/$,ne=((xe-be)*S-(qe-ce)*w)/(Ce*S-_e*w);se=be+Ce*ne-K.x,ee=ce+_e*ne-K.y;const ye=se*se+ee*ee;if(ye<=2)return new te(se,ee);le=Math.sqrt(ye/2)}else{let J=!1;Ce>Number.EPSILON?w>Number.EPSILON&&(J=!0):Ce<-Number.EPSILON?w<-Number.EPSILON&&(J=!0):Math.sign(_e)===Math.sign(S)&&(J=!0),J?(se=-_e,ee=Ce,le=Math.sqrt(z)):(se=Ce,ee=_e,le=Math.sqrt(z/2))}return new te(se/le,ee/le)}const ae=[];for(let K=0,R=k.length,oe=R-1,se=K+1;K<R;K++,oe++,se++)oe===R&&(oe=0),se===R&&(se=0),ae[K]=H(k[K],k[oe],k[se]);const he=[];let de,Be=ae.concat();for(let K=0,R=T.length;K<R;K++){const oe=T[K];de=[];for(let se=0,ee=oe.length,le=ee-1,Ce=se+1;se<ee;se++,le++,Ce++)le===ee&&(le=0),Ce===ee&&(Ce=0),de[se]=H(oe[se],oe[le],oe[Ce]);he.push(de),Be=Be.concat(de)}for(let K=0;K<p;K++){const R=K/p,oe=d*Math.cos(R*Math.PI/2),se=_*Math.sin(R*Math.PI/2)+g;for(let ee=0,le=k.length;ee<le;ee++){const Ce=W(k[ee],ae[ee],se);fe(Ce.x,Ce.y,-oe)}for(let ee=0,le=T.length;ee<le;ee++){const Ce=T[ee];de=he[ee];for(let _e=0,w=Ce.length;_e<w;_e++){const S=W(Ce[_e],de[_e],se);fe(S.x,S.y,-oe)}}}const We=_+g;for(let K=0;K<B;K++){const R=f?W(v[K],Be[K],We):v[K];y?(b.copy(A.normals[0]).multiplyScalar(R.x),C.copy(A.binormals[0]).multiplyScalar(R.y),P.copy(x[0]).add(b).add(C),fe(P.x,P.y,P.z)):fe(R.x,R.y,0)}for(let K=1;K<=u;K++)for(let R=0;R<B;R++){const oe=f?W(v[R],Be[R],We):v[R];y?(b.copy(A.normals[K]).multiplyScalar(oe.x),C.copy(A.binormals[K]).multiplyScalar(oe.y),P.copy(x[K]).add(b).add(C),fe(P.x,P.y,P.z)):fe(oe.x,oe.y,h/u*K)}for(let K=p-1;K>=0;K--){const R=K/p,oe=d*Math.cos(R*Math.PI/2),se=_*Math.sin(R*Math.PI/2)+g;for(let ee=0,le=k.length;ee<le;ee++){const Ce=W(k[ee],ae[ee],se);fe(Ce.x,Ce.y,h+oe)}for(let ee=0,le=T.length;ee<le;ee++){const Ce=T[ee];de=he[ee];for(let _e=0,w=Ce.length;_e<w;_e++){const S=W(Ce[_e],de[_e],se);y?fe(S.x,S.y+x[u-1].y,x[u-1].x+oe):fe(S.x,S.y,h+oe)}}}Y(),Q();function Y(){const K=r.length/3;if(f){let R=0,oe=B*R;for(let se=0;se<q;se++){const ee=O[se];De(ee[2]+oe,ee[1]+oe,ee[0]+oe)}R=u+p*2,oe=B*R;for(let se=0;se<q;se++){const ee=O[se];De(ee[0]+oe,ee[1]+oe,ee[2]+oe)}}else{for(let R=0;R<q;R++){const oe=O[R];De(oe[2],oe[1],oe[0])}for(let R=0;R<q;R++){const oe=O[R];De(oe[0]+B*u,oe[1]+B*u,oe[2]+B*u)}}n.addGroup(K,r.length/3-K,0)}function Q(){const K=r.length/3;let R=0;Me(k,R),R+=k.length;for(let oe=0,se=T.length;oe<se;oe++){const ee=T[oe];Me(ee,R),R+=ee.length}n.addGroup(K,r.length/3-K,1)}function Me(K,R){let oe=K.length;for(;--oe>=0;){const se=oe;let ee=oe-1;ee<0&&(ee=K.length-1);for(let le=0,Ce=u+p*2;le<Ce;le++){const _e=B*le,w=B*(le+1),S=R+se+_e,z=R+ee+_e,Z=R+ee+w,J=R+se+w;Le(S,z,Z,J)}}}function fe(K,R,oe){l.push(K),l.push(R),l.push(oe)}function De(K,R,oe){ze(K),ze(R),ze(oe);const se=r.length/3,ee=M.generateTopUV(n,r,se-3,se-2,se-1);He(ee[0]),He(ee[1]),He(ee[2])}function Le(K,R,oe,se){ze(K),ze(R),ze(se),ze(R),ze(oe),ze(se);const ee=r.length/3,le=M.generateSideWallUV(n,r,ee-6,ee-3,ee-2,ee-1);He(le[0]),He(le[1]),He(le[3]),He(le[1]),He(le[2]),He(le[3])}function ze(K){r.push(l[K*3+0]),r.push(l[K*3+1]),r.push(l[K*3+2])}function He(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return wM(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new wa[r.type]().fromJSON(r)),new Yu(n,e.options)}}const bM={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new te(s,o),new te(a,l),new te(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],d=e[r*3+1],_=e[r*3+2],g=e[s*3],p=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new te(o,1-l),new te(c,1-h),new te(f,1-_),new te(g,1-m)]:[new te(a,1-l),new te(u,1-h),new te(d,1-_),new te(p,1-m)]}};function wM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Jn extends mt{constructor(e=new Gn([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(s,3)),this.setAttribute("uv",new nt(o,2));function c(u){const h=r.length/3,f=u.extractPoints(t);let d=f.shape;const _=f.holes;Vi.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=_.length;p<m;p++){const M=_[p];Vi.isClockWise(M)===!0&&(_[p]=M.reverse())}const g=Vi.triangulateShape(d,_);for(let p=0,m=_.length;p<m;p++){const M=_[p];d=d.concat(M)}for(let p=0,m=d.length;p<m;p++){const M=d[p];r.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let p=0,m=g.length;p<m;p++){const M=g[p],x=M[0]+h,y=M[1]+h,A=M[2]+h;n.push(x,y,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return AM(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}return new Jn(n,e.curveSegments)}}function AM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class io extends mt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,f=new L,d=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const M=[],x=m/n;let y=0;m===0&&o===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){const C=A/t;h.x=-e*Math.cos(r+C*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+x*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),p.push(C+y,1-x),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const x=u[m][M+1],y=u[m][M],A=u[m+1][M],C=u[m+1][M+1];(m!==0||o>0)&&d.push(x,y,C),(m!==n-1||l<Math.PI)&&d.push(y,A,C)}this.setIndex(d),this.setAttribute("position",new nt(_,3)),this.setAttribute("normal",new nt(g,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cs extends mt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new L,h=new L,f=new L;for(let d=0;d<=n;d++)for(let _=0;_<=r;_++){const g=_/r*s,p=d/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(g),h.y=(e+t*Math.cos(p))*Math.sin(g),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=r;_++){const g=(r+1)*d+_-1,p=(r+1)*(d-1)+_-1,m=(r+1)*(d-1)+_,M=(r+1)*d+_;o.push(g,p,M),o.push(p,m,M)}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vo extends mt{constructor(e=new up(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new te;let u=new L;const h=[],f=[],d=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(d,2));function g(){for(let x=0;x<t;x++)p(x);p(s===!1?t:0),M(),m()}function p(x){u=e.getPointAt(x/t,u);const y=o.normals[x],A=o.binormals[x];for(let C=0;C<=r;C++){const b=C/r*Math.PI*2,P=Math.sin(b),U=-Math.cos(b);l.x=U*y.x+P*A.x,l.y=U*y.y+P*A.y,l.z=U*y.z+P*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=t;x++)for(let y=1;y<=r;y++){const A=(r+1)*(x-1)+(y-1),C=(r+1)*x+(y-1),b=(r+1)*x+y,P=(r+1)*(x-1)+y;_.push(A,C,P),_.push(C,b,P)}}function M(){for(let x=0;x<=t;x++)for(let y=0;y<=r;y++)c.x=x/t,c.y=y/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new vo(new wa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class at extends Ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zd,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xa extends at{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Ff={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class CM{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const RM=new CM;class Zu{constructor(e){this.manager=e!==void 0?e:RM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zu.DEFAULT_MATERIAL_NAME="__DEFAULT";class PM extends Zu{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ff.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Qs("img");function l(){u(),Ff.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class LM extends Zu{constructor(e){super(e)}load(e,t,n,r){const s=new kt,o=new PM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class qa extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class DM extends qa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Jl=new lt,Bf=new L,zf=new L;class mp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gu,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bf),zf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zf),t.updateMatrixWorld(),Jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class UM extends mp{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Sa*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class IM extends qa{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new UM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const kf=new lt,Bs=new L,jl=new L;class NM extends mp{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bs),jl.copy(n.position),jl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jl),n.updateMatrixWorld(),r.makeTranslation(-Bs.x,-Bs.y,-Bs.z),kf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kf)}}class $u extends qa{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new NM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class OM extends qa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _p{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vf(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Du}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Du);const FM={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class xo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const BM=new jd(-1,1,1,-1,0,1);class zM extends mt{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}}const kM=new zM;class gp{constructor(e){this._mesh=new Te(kM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,BM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class VM extends xo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof dn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Vu.clone(e.uniforms),this.material=new dn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new gp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Gf extends xo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class GM extends xo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class HM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new te);this._width=n.width,this._height=n.height,t=new xi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new VM(FM),this.copyPass.material.blending=Kn,this.clock=new _p}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Gf!==void 0&&(o instanceof Gf?n=!0:o instanceof GM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class WM extends xo{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const XM={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class qM extends xo{constructor(e,t,n){super(),this.scene=e,this.camera=t;const r=n.focus!==void 0?n.focus:1,s=n.aperture!==void 0?n.aperture:.025,o=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new xi(1,1,{minFilter:an,magFilter:an,type:wr}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new rp,this.materialDepth.depthPacking=Bd,this.materialDepth.blending=Kn;const a=XM,l=Vu.clone(a.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=r,l.aspect.value=t.aspect,l.aperture.value=s,l.maxblur.value=o,l.nearClip.value=t.near,l.farClip.value=t.far,this.materialBokeh=new dn({defines:Object.assign({},a.defines),uniforms:l,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=l,this.fsQuad=new gp(this.materialBokeh),this._oldClearColor=new Ne}render(e,t,n){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=s}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}function di(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function vp(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var En={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ro={duration:.5,overwrite:!1,delay:0},Ku,Vt,pt,In=1e8,ot=1/In,nu=Math.PI*2,YM=nu/4,ZM=0,xp=Math.sqrt,$M=Math.cos,KM=Math.sin,Ft=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},Mi=function(e){return typeof e=="number"},Ju=function(e){return typeof e>"u"},ti=function(e){return typeof e=="object"},cn=function(e){return e!==!1},ju=function(){return typeof window<"u"},ia=function(e){return Tt(e)||Ft(e)},yp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Zt=Array.isArray,JM=/random\([^)]+\)/g,jM=/,\s*/g,Hf=/(?:-?\.?\d|\.)+/gi,Mp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ql=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sp=/[+-]=-?[.\d]+/,QM=/[^,'"\[\]\s]+/gi,eS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,Xn,iu,Qu,bn={},Aa={},Tp,Ep=function(e){return(Aa=gs(e,bn))&&pn},eh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},so=function(e,t){return!t&&console.warn(e)},bp=function(e,t){return e&&(bn[e]=t)&&Aa&&(Aa[e]=t)||bn},oo=function(){return 0},tS={suppressEvents:!0,isStart:!0,kill:!1},fa={suppressEvents:!0,kill:!1},nS={suppressEvents:!0},th={},Gi=[],ru={},wp,xn={},ec={},Wf=30,da=[],nh="",ih=function(e){var t=e[0],n,r;if(ti(t)||Tt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=da.length;r--&&!da[r].targetTest(t););n=da[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Zp(e[r],n)))||e.splice(r,1);return e},vr=function(e){return e._gsap||ih(Nn(e))[0]._gsap},Ap=function(e,t,n){return(n=e[t])&&Tt(n)?e[t]():Ju(n)&&e.getAttribute&&e.getAttribute(t)||n},un=function(e,t){return(e=e.split(",")).forEach(t)||e},bt=function(e){return Math.round(e*1e5)/1e5||0},_t=function(e){return Math.round(e*1e7)/1e7||0},os=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},iS=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ca=function(){var e=Gi.length,t=Gi.slice(0),n,r;for(ru={},Gi.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},rh=function(e){return!!(e._initted||e._startAt||e.add)},Cp=function(e,t,n,r){Gi.length&&!Vt&&Ca(),e.render(t,n,!!(Vt&&t<0&&rh(e))),Gi.length&&!Vt&&Ca()},Rp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(QM).length<2?t:Ft(e)?e.trim():e},Pp=function(e){return e},wn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},rS=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},gs=function(e,t){for(var n in t)e[n]=t[n];return e},Xf=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ti(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Ra=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Zs=function(e){var t=e.parent||gt,n=e.keyframes?rS(Zt(e.keyframes)):wn;if(cn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},sS=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Lp=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Ya=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Xi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},oS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},su=function(e,t,n,r){return e._startAt&&(Vt?e._startAt.revert(fa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},aS=function i(e){return!e||e._ts&&i(e.parent)},qf=function(e){return e._repeat?vs(e._tTime,e=e.duration()+e._rDelay)*e:0},vs=function(e,t){var n=Math.floor(e=_t(e/t));return e&&n===e?n-1:n},Pa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Za=function(e){return e._end=_t(e._start+(e._tDur/Math.abs(e._ts||e._rts||ot)||0))},$a=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=_t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Za(e),n._dirty||xr(n,e)),e},Dp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Pa(e.rawTime(),t),(!t._dur||yo(0,t.totalDuration(),n)-t._tTime>ot)&&t.render(n,!0)),xr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ot}},Zn=function(e,t,n,r){return t.parent&&Xi(t),t._start=_t((Mi(n)?n:n||e!==gt?Ln(e,n,t):e._time)+t._delay),t._end=_t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Lp(e,t,"_first","_last",e._sort?"_start":0),ou(t)||(e._recent=t),r||Dp(e,t),e._ts<0&&$a(e,e._tTime),e},Up=function(e,t){return(bn.ScrollTrigger||eh("scrollTrigger",t))&&bn.ScrollTrigger.create(t,e)},Ip=function(e,t,n,r,s){if(oh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&wp!==yn.frame)return Gi.push(e),e._lazy=[s,r],1},lS=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},ou=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},cS=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&lS(e)&&!(!e._initted&&ou(e))||(e._ts<0||e._dp._ts<0)&&!ou(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=yo(0,e._tDur,t),u=vs(l,a),e._yoyo&&u&1&&(o=1-o),u!==vs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Vt||r||e._zTime===ot||!t&&e._zTime){if(!e._initted&&Ip(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?ot:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&su(e,t,n,!0),e._onUpdate&&!n&&Mn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Xi(e,1),!n&&!Vt&&(Mn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},uS=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},xs=function(e,t,n,r){var s=e._repeat,o=_t(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:_t(o*(s+1)+e._rDelay*s):o,a>0&&!r&&$a(e,e._tTime=e._tDur*a),e.parent&&Za(e),n||xr(e.parent,e),e},Yf=function(e){return e instanceof on?xr(e):xs(e,e._dur)},hS={_start:0,endTime:oo,totalDuration:oo},Ln=function i(e,t,n){var r=e.labels,s=e._recent||hS,o=e.duration()>=In?s.endTime(!1):e._dur,a,l,c;return Ft(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Zt(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},$s=function(e,t,n){var r=Mi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=cn(l.vars.inherit)&&l.parent;o.immediateRender=cn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Rt(t[0],o,t[s+1])},ji=function(e,t){return e||e===0?t(e):t},yo=function(e,t,n){return n<e?e:n>t?t:n},qt=function(e,t){return!Ft(e)||!(t=eS.exec(e))?"":t[1]},fS=function(e,t,n){return ji(n,function(r){return yo(e,t,r)})},au=[].slice,Np=function(e,t){return e&&ti(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ti(e[0]))&&!e.nodeType&&e!==Xn},dS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Ft(r)&&!t||Np(r,1)?(s=n).push.apply(s,Nn(r)):n.push(r)})||n},Nn=function(e,t,n){return pt&&!t&&pt.selector?pt.selector(e):Ft(e)&&!n&&(iu||!ys())?au.call((t||Qu).querySelectorAll(e),0):Zt(e)?dS(e,n):Np(e)?au.call(e,0):e?[e]:[]},lu=function(e){return e=Nn(e)[0]||so("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Nn(t,n.querySelectorAll?n:n===e?so("Invalid scope")||Qu.createElement("div"):e)}},Op=function(e){return e.sort(function(){return .5-Math.random()})},Fp=function(e){if(Tt(e))return e;var t=ti(e)?e:{each:e},n=yr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return Ft(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,_){var g=(_||t).length,p=o[g],m,M,x,y,A,C,b,P,U;if(!p){if(U=t.grid==="auto"?0:(t.grid||[1,In])[1],!U){for(b=-In;b<(b=_[U++].getBoundingClientRect().left)&&U<g;);U<g&&U--}for(p=o[g]=[],m=l?Math.min(U,g)*u-.5:r%U,M=U===In?0:l?g*h/U-.5:r/U|0,b=0,P=In,C=0;C<g;C++)x=C%U-m,y=M-(C/U|0),p[C]=A=c?Math.abs(c==="y"?y:x):xp(x*x+y*y),A>b&&(b=A),A<P&&(P=A);r==="random"&&Op(p),p.max=b-P,p.min=P,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(U>g?g-1:c?c==="y"?g/U:U:Math.max(U,g/U))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=qt(t.amount||t.each)||0,n=n&&g<0?wS(n):n}return g=(p[f]-p.min)/p.max||0,_t(p.b+(n?n(g):g)*p.v)+p.u}},cu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=_t(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Mi(n)?0:qt(n))}},Bp=function(e,t){var n=Zt(e),r,s;return!n&&ti(e)&&(r=n=e.radius||In,e.values?(e=Nn(e.values),(s=!Mi(e[0]))&&(r*=r)):e=cu(e.increment)),ji(t,n?Tt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=In,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||Mi(o)?u:u+qt(o)}:cu(e))},zp=function(e,t,n,r){return ji(Zt(e)?!t:n===!0?!!(n=0):!r,function(){return Zt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},pS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},mS=function(e,t){return function(n){return e(parseFloat(n))+(t||qt(n))}},_S=function(e,t,n){return Vp(e,t,0,1,n)},kp=function(e,t,n){return ji(n,function(r){return e[~~t(r)]})},gS=function i(e,t,n){var r=t-e;return Zt(e)?kp(e,i(0,e.length),t):ji(n,function(s){return(r+(s-e)%r)%r+e})},vS=function i(e,t,n){var r=t-e,s=r*2;return Zt(e)?kp(e,i(0,e.length-1),t):ji(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ao=function(e){return e.replace(JM,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(jM);return zp(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Vp=function(e,t,n,r,s){var o=t-e,a=r-n;return ji(s,function(l){return n+((l-e)/o*a||0)})},xS=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Ft(e),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Zt(e)&&!Zt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else r||(e=gs(Zt(e)?[]:{},e));if(!u){for(l in t)sh.call(a,e,l,"get",t[l]);s=function(_){return ch(_,a)||(o?e.p:e)}}}return ji(n,s)},Zf=function(e,t,n){var r=e.labels,s=In,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Mn=function(e,t,n){var r=e.vars,s=r[t],o=pt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Gi.length&&Ca(),a&&(pt=a),u=l?s.apply(c,l):s.call(c),pt=o,u},Gs=function(e){return Xi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Vt),e.progress()<1&&Mn(e,"onInterrupt"),e},es,Gp=[],Hp=function(e){if(e)if(e=!e.name&&e.default||e,ju()||e.headless){var t=e.name,n=Tt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:oo,render:ch,add:sh,kill:OS,modifier:NS,rawVars:0},o={targetTest:0,get:0,getSetter:lh,aliases:{},register:0};if(ys(),e!==r){if(xn[t])return;wn(r,wn(Ra(e,s),o)),gs(r.prototype,gs(s,Ra(e,o))),xn[r.prop=t]=r,e.targetTest&&(da.push(r),th[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}bp(t,r),e.register&&e.register(pn,r,hn)}else Gp.push(e)},st=255,Hs={aqua:[0,st,st],lime:[0,st,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,st],navy:[0,0,128],white:[st,st,st],olive:[128,128,0],yellow:[st,st,0],orange:[st,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[st,0,0],pink:[st,192,203],cyan:[0,st,st],transparent:[st,st,st,0]},tc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*st+.5|0},Wp=function(e,t,n){var r=e?Mi(e)?[e>>16,e>>8&st,e&st]:0:Hs.black,s,o,a,l,c,u,h,f,d,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hs[e])r=Hs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&st,r&st,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&st,e&st]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Hf),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=tc(l+1/3,s,o),r[1]=tc(l,s,o),r[2]=tc(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Mp),n&&r.length<4&&(r[3]=1),r}else r=e.match(Hf)||Hs.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/st,o=r[1]/st,a=r[2]/st,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Xp=function(e){var t=[],n=[],r=-1;return e.split(Hi).forEach(function(s){var o=s.match(Qr)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},$f=function(e,t,n){var r="",s=(e+r).match(Hi),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Wp(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Xp(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Hi,"1").split(Qr),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Hi),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Hi=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hs)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),yS=/hsl[a]?\(/,qp=function(e){var t=e.join(" "),n;if(Hi.lastIndex=0,Hi.test(t))return n=yS.test(t),e[1]=$f(e[1],n),e[0]=$f(e[0],n,Xp(e[1])),!0},lo,yn=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(p){var m=i()-r,M=p===!0,x,y,A,C;if((m>e||m<0)&&(n+=m-t),r+=m,A=r-n,x=A-o,(x>0||M)&&(C=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=x+(x>=s?4:s-x),y=1),M||(l=c(g)),y)for(d=0;d<a.length;d++)a[d](A,f,C,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Tp&&(!iu&&ju()&&(Xn=iu=window,Qu=Xn.document||{},bn.gsap=pn,(Xn.gsapVersions||(Xn.gsapVersions=[])).push(pn.version),Ep(Aa||Xn.GreenSockGlobals||!Xn.gsap&&Xn||{}),Gp.forEach(Hp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},lo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),lo=0,c=oo},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,M){var x=m?function(y,A,C,b){p(y,A,C,b),h.remove(x)}:p;return h.remove(p),a[M?"unshift":"push"](x),ys(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h})(),ys=function(){return!lo&&yn.wake()},Xe={},MS=/^[\d.\-M][\d.\-,\s]/,SS=/["']/g,TS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(SS,"").trim():+c,r=l.substr(a+1).trim();return t},ES=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},bS=function(e){var t=(e+"").split("("),n=Xe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[TS(t[1])]:ES(e).split(",").map(Rp)):Xe._CE&&MS.test(e)?Xe._CE("",e):n},wS=function(e){return function(t){return 1-e(1-t)}},yr=function(e,t){return e&&(Tt(e)?e:Xe[e]||bS(e))||t},Cr=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return un(e,function(a){Xe[a]=bn[a]=s,Xe[o=a.toLowerCase()]=n;for(var l in s)Xe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xe[a+"."+l]=s[l]}),s},Yp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},nc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/nu*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*KM((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Yp(a);return s=nu/s,l.config=function(c,u){return i(e,c,u)},l},ic=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Yp(n);return r.config=function(s){return i(e,s)},r};un("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Cr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;Cr("Elastic",nc("in"),nc("out"),nc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Cr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Cr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Cr("Circ",function(i){return-(xp(1-i*i)-1)});Cr("Sine",function(i){return i===1?1:-$M(i*YM)+1});Cr("Back",ic("in"),ic("out"),ic());Xe.SteppedEase=Xe.steps=bn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-ot;return function(a){return((r*yo(0,o,a)|0)+s)*n}}};ro.ease=Xe["quad.out"];un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return nh+=i+","+i+"Params,"});var Zp=function(e,t){this.id=ZM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ap,this.set=t?t.getSetter:lh},co=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,xs(this,+t.duration,1,1),this.data=t.data,pt&&(this._ctx=pt,pt.data.push(this)),lo||yn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,xs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ys(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for($a(this,n),!s._dp||s.parent||Dp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Zn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ot||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Cp(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+qf(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+qf(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?vs(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-ot?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Pa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ot?0:this._rts,this.totalTime(yo(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Za(this),oS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ot&&(this._tTime-=ot)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=_t(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Zn(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pa(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=nS);var r=Vt;return Vt=n,rh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Vt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Yf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Yf(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Ln(this,n),cn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,cn(r)),this._dur||(this._zTime=-ot),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ot,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-ot)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=Tt(n)?n:Pp,l=function(){var u=r.then;r.then=null,s&&s(),Tt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Gs(this)},i})();wn(co.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ot,_prom:0,_ps:!1,_rts:1});var on=(function(i){vp(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=cn(n.sortChildren),gt&&Zn(n.parent||gt,di(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Up(di(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return $s(0,arguments,this),this},t.from=function(r,s,o){return $s(1,arguments,this),this},t.fromTo=function(r,s,o,a){return $s(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Zs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Rt(r,s,Ln(this,o),1),this},t.call=function(r,s,o){return Zn(this,Rt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Rt(r,o,Ln(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Zs(o).immediateRender=cn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,Zs(a).immediateRender=cn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:_t(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,_,g,p,m,M,x,y,A,C,b;if(this!==gt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,y=this._start,x=this._ts,m=!x,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=_t(u%p),u===l?(g=this._repeat,f=c):(A=_t(u/p),g=~~A,g&&g===A&&(f=c,g--),f>c&&(f=c)),A=vs(this._tTime,p),!a&&this._tTime&&A!==g&&this._tTime-A*p-this._dur<=0&&(A=g),C&&g&1&&(f=c-f,b=1),g!==A&&!this._lock){var P=C&&A&1,U=P===(C&&g&1);if(g<A&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(b?0:_t(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Mn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,A=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,U&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=uS(this,_t(a),_t(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!A&&(Mn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=-ot);break}}d=_}else{d=this._last;for(var v=r<0?r:f;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||Vt&&rh(d)),f!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=v?-ot:ot);break}}d=_}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-ot)._zTime=f>=a?1:-1,this._ts))return this._start=y,Za(this),this.render(r,s,o);this._onUpdate&&!s&&Mn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Xi(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Mn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Mi(s)||(s=Ln(this,s,r)),!(r instanceof co)){if(Zt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ft(r))return this.addLabel(r,s);if(Tt(r))r=Rt.delayedCall(0,r);else return this}return this!==r?Zn(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-In);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Rt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Ft(r)?this.removeLabel(r):Tt(r)?this.killTweensOf(r):(r.parent===this&&Ya(this,r),r===this._recent&&(this._recent=this._last),xr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_t(yn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ln(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Rt.delayedCall(0,s||oo,o);return a.data="isPause",this._hasPause=1,Zn(this,a,Ln(this,r))},t.removePause=function(r){var s=this._first;for(r=Ln(this,r);s;)s._start===r&&s.data==="isPause"&&Xi(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Oi!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Nn(r),l=this._first,c=Mi(s),u;l;)l instanceof Rt?iS(l._targets,a)&&(c?(!Oi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ln(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Rt.to(o,wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ot,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&xs(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,wn({startAt:{time:Ln(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Zf(this,Ln(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Zf(this,Ln(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ot)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=_t(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return xr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),xr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=In,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Zn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=_t(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;xs(o,o===gt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(gt._ts&&(Cp(gt,Pa(r,gt)),wp=yn.frame),yn.frame>=Wf){Wf+=En.autoSleep||120;var s=gt._first;if((!s||!s._ts)&&En.autoSleep&&yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||yn.sleep()}}},e})(co);wn(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var AS=function(e,t,n,r,s,o,a){var l=new hn(this._pt,e,t,0,1,em,null,s),c=0,u=0,h,f,d,_,g,p,m,M;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=ao(r)),o&&(M=[n,r],o(M,e,t),n=M[0],r=M[1]),f=n.match(Ql)||[];h=Ql.exec(r);)_=h[0],g=r.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?os(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Ql.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Sp.test(r)||m)&&(l.e=0),this._pt=l,l},sh=function(e,t,n,r,s,o,a,l,c,u){Tt(r)&&(r=r(s||0,e,o));var h=e[t],f=n!=="get"?n:Tt(h)?c?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Tt(h)?c?DS:jp:ah,_;if(Ft(r)&&(~r.indexOf("random(")&&(r=ao(r)),r.charAt(1)==="="&&(_=os(f,r)+(qt(f)||0),(_||_===0)&&(r=_))),!u||f!==r||uu)return!isNaN(f*r)&&r!==""?(_=new hn(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?IS:Qp,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&eh(t,r),AS.call(this,e,t,f,r,d,l||En.stringFilter,c))},CS=function(e,t,n,r,s){if(Tt(e)&&(e=Ks(e,s,t,n,r)),!ti(e)||e.style&&e.nodeType||Zt(e)||yp(e))return Ft(e)?Ks(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Ks(e[a],s,t,n,r);return o},$p=function(e,t,n,r,s,o){var a,l,c,u;if(xn[e]&&(a=new xn[e]).init(s,a.rawVars?t[e]:CS(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new hn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==es))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Oi,uu,oh=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!Ku,y=e.timeline,A=r.easeReverse||h,C,b,P,U,v,T,F,O,k,W,B,q,H;if(y&&(!f||!s)&&(s="none"),e._ease=yr(s,ro.ease),e._rEase=A&&(yr(A)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||f&&!r.stagger){if(O=p[0]?vr(p[0]).harness:0,q=O&&r[O.prop],C=Ra(r,th),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?fa:tS),g._lazy=0),o){if(Xi(e._startAt=Rt.set(p,wn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&cn(l),startAt:null,delay:0,onUpdate:c&&function(){return Mn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt||!a&&!d)&&e._startAt.revert(fa),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),P=wn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&cn(l),immediateRender:a,stagger:0,parent:m},C),q&&(P[O.prop]=q),Xi(e._startAt=Rt.set(p,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt?e._startAt.revert(fa):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,ot,ot);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&cn(l)||l&&!_,b=0;b<p.length;b++){if(v=p[b],F=v._gsap||ih(p)[b]._gsap,e._ptLookup[b]=W={},ru[F.id]&&Gi.length&&Ca(),B=M===p?b:M.indexOf(v),O&&(k=new O).init(v,q||C,e,B,M)!==!1&&(e._pt=U=new hn(e._pt,v,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(ae){W[ae]=U}),k.priority&&(T=1)),!O||q)for(P in C)xn[P]&&(k=$p(P,C,e,B,v,M))?k.priority&&(T=1):W[P]=U=sh.call(e,v,P,"get",C[P],B,M,0,r.stringFilter);e._op&&e._op[b]&&e.kill(v,e._op[b]),x&&e._pt&&(Oi=e,gt.killTweensOf(v,W,e.globalTime(t)),H=!e.parent,Oi=0),e._pt&&l&&(ru[F.id]=1)}T&&tm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,f&&t<=0&&y.render(In,!0,!0)},RS=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return uu=1,e.vars[t]="+=0",oh(e,a),uu=0,l?so(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=bt(n)+qt(h.e)),h.b&&(h.b=u.s+qt(h.b))},PS=function(e,t){var n=e[0]?vr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=gs({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},LS=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Zt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ks=function(e,t,n,r,s){return Tt(e)?e.call(t,n,r,s):Ft(e)&&~e.indexOf("random(")?ao(e):e},Kp=nh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Jp={};un(Kp+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Jp[i]=1});var Rt=(function(i){vp(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Zs(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=r.parent||gt,M=(Zt(n)||yp(n)?Mi(n[0]):"length"in r)?[n]:Nn(n),x,y,A,C,b,P,U,v;if(a._targets=M.length?ih(M):so("GSAP target "+n+" not found. https://gsap.com",!En.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||ia(c)||ia(u)){r=a.vars;var T=r.easeReverse||r.yoyoEase;if(x=a.timeline=new on({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:M}),x.kill(),x.parent=x._dp=di(a),x._start=0,f||ia(c)||ia(u)){if(C=M.length,U=f&&Fp(f),ti(f))for(b in f)~Kp.indexOf(b)&&(v||(v={}),v[b]=f[b]);for(y=0;y<C;y++)A=Ra(r,Jp),A.stagger=0,T&&(A.easeReverse=T),v&&gs(A,v),P=M[y],A.duration=+Ks(c,di(a),y,P,M),A.delay=(+Ks(u,di(a),y,P,M)||0)-a._delay,!f&&C===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(P,A,U?U(y,P,M):0),x._ease=Xe.none;x.duration()?c=u=0:a.timeline=0}else if(_){Zs(wn(x.vars.defaults,{ease:"none"})),x._ease=yr(_.ease||r.ease||"none");var F=0,O,k,W;if(Zt(_))_.forEach(function(B){return x.to(M,B,">")}),x.duration();else{A={};for(b in _)b==="ease"||b==="easeEach"||LS(b,_[b],A,_.easeEach);for(b in A)for(O=A[b].sort(function(B,q){return B.t-q.t}),F=0,y=0;y<O.length;y++)k=O[y],W={ease:k.e,duration:(k.t-(y?O[y-1].t:0))/100*c},W[b]=k.v,x.to(M,W,F),F+=W.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!Ku&&(Oi=di(a),gt.killTweensOf(M),Oi=0),Zn(m,di(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!_&&a._start===_t(m._time)&&cn(h)&&aS(di(a))&&m.data!=="nested")&&(a._tTime=-ot,a.render(Math.max(0,-u)||0)),p&&Up(di(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-ot&&!u?l:r<ot?0:r,f,d,_,g,p,m,M,x;if(!c)cS(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(f=_t(h%g),h===l?(_=this._repeat,f=c):(p=_t(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(f=c-f),p=vs(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(_t(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Ip(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var A=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(y?-1:1)/A:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(f/c);if(this._from&&(this.ratio=M=1-M),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!p&&(Mn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&su(this,r,s,o),Mn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Mn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&su(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Xi(this,1),!s&&!(u&&!a)&&(h||a||m)&&(Mn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){lo||yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||oh(this,c),u=this._ease(c/this._dur),RS(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):($a(this,0),this.parent||Lp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Gs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Vt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Oi&&Oi.vars.overwrite!==!0)._first||Gs(this),this.parent&&o!==this.timeline.totalDuration()&&xs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Nn(r):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&sS(a,l))return s==="all"&&(this._pt=0),Gs(this);for(h=this._op=this._op||[],s!=="all"&&(Ft(s)&&(g={},un(s,function(M){return g[M]=1}),s=g),s=PS(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Ya(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Gs(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return $s(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return $s(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return gt.killTweensOf(r,s,o)},e})(co);wn(Rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});un("staggerTo,staggerFrom,staggerFromTo",function(i){Rt[i]=function(){var e=new on,t=au.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var ah=function(e,t,n){return e[t]=n},jp=function(e,t,n){return e[t](n)},DS=function(e,t,n,r){return e[t](r.fp,n)},US=function(e,t,n){return e.setAttribute(t,n)},lh=function(e,t){return Tt(e[t])?jp:Ju(e[t])&&e.setAttribute?US:ah},Qp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},IS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},em=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},ch=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},NS=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},OS=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ya(this,t,"_pt"):t.dep||(n=1),t=r;return!n},FS=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},tm=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},hn=(function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Qp,this.d=l||this,this.set=c||ah,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=FS,this.m=n,this.mt=s,this.tween=r},i})();un(nh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return th[i]=1});bn.TweenMax=bn.TweenLite=Rt;bn.TimelineLite=bn.TimelineMax=on;gt=new on({sortChildren:!1,defaults:ro,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});En.stringFilter=qp;var Mr=[],pa={},BS=[],Kf=0,zS=0,rc=function(e){return(pa[e]||BS).map(function(t){return t()})},hu=function(){var e=Date.now(),t=[];e-Kf>2&&(rc("matchMediaInit"),Mr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Xn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),rc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Kf=e,rc("matchMedia"))},nm=(function(){function i(t,n){this.selector=n&&lu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=zS++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Tt(n)&&(s=r,r=n,n=Tt);var o=this,a=function(){var c=pt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=lu(s)),pt=o,h=r.apply(o,arguments),Tt(h)&&o._r.push(h),pt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Tt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=pt;pt=null,n(this),pt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Rt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof on?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Rt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Mr.length;o--;)Mr[o].id===this.id&&Mr.splice(o,1)},e.revert=function(n){this.kill(n||{})},i})(),kS=(function(){function i(t){this.contexts=[],this.scope=t,pt&&pt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){ti(n)||(n={matches:n});var o=new nm(0,s||this.scope),a=o.conditions={},l,c,u;pt&&!o.selector&&(o.selector=pt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Xn.matchMedia(n[c]),l&&(Mr.indexOf(o)<0&&Mr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(hu):l.addEventListener("change",hu)));return u&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),La={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Hp(r)})},timeline:function(e){return new on(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Ft(e)&&(e=Nn(e)[0]);var s=vr(e||{}).get,o=n?Pp:Rp;return n==="native"&&(n=""),e&&(t?o((xn[t]&&xn[t].get||s)(e,t,n,r)):function(a,l,c){return o((xn[a]&&xn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Nn(e),e.length>1){var r=e.map(function(u){return pn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=xn[t],a=vr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;es._pt=0,h.init(e,n?u+n:u,es,0,[e]),h.render(1,h),es._pt&&ch(1,es)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=pn.to(e,wn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=yr(e.ease,ro.ease)),Xf(ro,e||{})},config:function(e){return Xf(En,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!xn[a]&&!bn[a]&&so(t+" effect requires "+a+" plugin.")}),ec[t]=function(a,l,c){return n(Nn(a),wn(l||{},s),c)},o&&(on.prototype[t]=function(a,l,c){return this.add(ec[t](a,ti(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Xe[e]=yr(t)},parseEase:function(e,t){return arguments.length?yr(e,t):Xe},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new on(e),r,s;for(n.smoothChildTiming=cn(e.smoothChildTiming),gt.remove(n),n._dp=0,n._time=n._tTime=gt._time,r=gt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Rt&&r.vars.onComplete===r._targets[0]))&&Zn(n,r,r._start-r._delay),r=s;return Zn(gt,n,0),n},context:function(e,t){return e?new nm(e,t):pt},matchMedia:function(e){return new kS(e)},matchMediaRefresh:function(){return Mr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||hu()},addEventListener:function(e,t){var n=pa[e]||(pa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=pa[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:gS,wrapYoyo:vS,distribute:Fp,random:zp,snap:Bp,normalize:_S,getUnit:qt,clamp:fS,splitColor:Wp,toArray:Nn,selector:lu,mapRange:Vp,pipe:pS,unitize:mS,interpolate:xS,shuffle:Op},install:Ep,effects:ec,ticker:yn,updateRoot:on.updateRoot,plugins:xn,globalTimeline:gt,core:{PropTween:hn,globals:bp,Tween:Rt,Timeline:on,Animation:co,getCache:vr,_removeLinkedListItem:Ya,reverting:function(){return Vt},context:function(e){return e&&pt&&(pt.data.push(e),e._ctx=pt),pt},suppressOverwrites:function(e){return Ku=e}}};un("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return La[i]=Rt[i]});yn.add(on.updateRoot);es=La.to({},{duration:0});var VS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},GS=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=VS(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},sc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Ft(s)&&(l={},un(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}GS(a,s)}}}},pn=La.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Vt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},sc("roundProps",cu),sc("modifiers"),sc("snap",Bp))||La;Rt.version=on.version=pn.version="3.15.0";Tp=1;ju()&&ys();Xe.Power0;Xe.Power1;Xe.Power2;Xe.Power3;Xe.Power4;Xe.Linear;Xe.Quad;Xe.Cubic;Xe.Quart;Xe.Quint;Xe.Strong;Xe.Elastic;Xe.Back;Xe.SteppedEase;Xe.Bounce;Xe.Sine;Xe.Expo;Xe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jf,Fi,as,uh,gr,jf,hh,HS=function(){return typeof window<"u"},Si={},fr=180/Math.PI,ls=Math.PI/180,$r=Math.atan2,Qf=1e8,fh=/([A-Z])/g,WS=/(left|right|width|margin|padding|x)/i,XS=/[\s,\(]\S/,$n={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},YS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ZS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$S=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},im=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},rm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},KS=function(e,t,n){return e.style[t]=n},JS=function(e,t,n){return e.style.setProperty(t,n)},jS=function(e,t,n){return e._gsap[t]=n},QS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},e1=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},t1=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},xt="transform",fn=xt+"Origin",n1=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Si&&s){if(this.tfm=this.tfm||{},e!=="transform")e=$n[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=pi(r,a)}):this.tfm[e]=o.x?o[e]:pi(r,e),e===fn&&(this.tfm.zOrigin=o.zOrigin);else return $n.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(xt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(fn,t,"")),e=xt}(s||t)&&this.props.push(e,t,s[e])},sm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},i1=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(fh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=hh(),(!s||!s.isStart)&&!n[xt]&&(sm(n),r.zOrigin&&n[fn]&&(n[fn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},om=function(e,t){var n={target:e,props:[],revert:i1,save:n1};return e._gsap||pn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},am,du=function(e,t){var n=Fi.createElementNS?Fi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Fi.createElement(e);return n&&n.style?n:Fi.createElement(e)},Sn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(fh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Ms(t)||t,1)||""},ed="O,Moz,ms,Ms,Webkit".split(","),Ms=function(e,t,n){var r=t||gr,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ed[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ed[o]:"")+e},pu=function(){HS()&&window.document&&(Jf=window,Fi=Jf.document,as=Fi.documentElement,gr=du("div")||{style:{}},du("div"),xt=Ms(xt),fn=xt+"Origin",gr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",am=!!Ms("perspective"),hh=pn.core.reverting,uh=1)},td=function(e){var t=e.ownerSVGElement,n=du("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),as.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),as.removeChild(n),s},nd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},lm=function(e){var t,n;try{t=e.getBBox()}catch{t=td(e),n=1}return t&&(t.width||t.height)||n||(t=td(e)),t&&!t.width&&!t.x&&!t.y?{x:+nd(e,["x","cx","x1"])||0,y:+nd(e,["y","cy","y1"])||0,width:0,height:0}:t},cm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&lm(e))},qi=function(e,t){if(t){var n=e.style,r;t in Si&&t!==fn&&(t=xt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(fh,"-$1").toLowerCase())):n.removeAttribute(t)}},Bi=function(e,t,n,r,s,o){var a=new hn(e._pt,t,n,0,1,o?rm:im);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},id={deg:1,rad:1,turn:1},r1={grid:1,flex:1},Yi=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=gr.style,l=WS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",_,g,p,m;if(r===o||!s||id[r]||id[o])return s;if(o!=="px"&&!f&&(s=i(e,t,n,"px")),m=e.getCTM&&cm(e),(d||o==="%")&&(Si[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],bt(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Fi||!g.appendChild)&&(g=Fi.body),p=g._gsap,p&&d&&p.width&&l&&p.time===yn.time&&!p.uncache)return bt(s/p.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+r,_=e[u],M?e.style[t]=M:qi(e,t)}else(d||o==="%")&&!r1[Sn(g,"display")]&&(a.position=Sn(e,"position")),g===e&&(a.position="static"),g.appendChild(gr),_=gr[u],g.removeChild(gr),a.position="absolute";return l&&d&&(p=vr(g),p.time=yn.time,p.width=g[u]),bt(f?_*s/h:_&&s?h/_*s:0)},pi=function(e,t,n,r){var s;return uh||pu(),t in $n&&t!=="transform"&&(t=$n[t],~t.indexOf(",")&&(t=t.split(",")[0])),Si[t]&&t!=="transform"?(s=ho(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ua(Sn(e,fn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Da[t]&&Da[t](e,t,n)||Sn(e,t)||Ap(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Yi(e,t,s,n)+n:s},s1=function(e,t,n,r){if(!n||n==="none"){var s=Ms(t,e,1),o=s&&Sn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Sn(e,"borderTopColor"))}var a=new hn(this._pt,e.style,t,0,1,em),l=0,c=0,u,h,f,d,_,g,p,m,M,x,y,A;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Sn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Sn(e,t)||r,g?e.style[t]=g:qi(e,t)),u=[n,r],qp(u),n=u[0],r=u[1],f=n.match(Qr)||[],A=r.match(Qr)||[],A.length){for(;h=Qr.exec(r);)p=h[0],M=r.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,y=g.substr((d+"").length),p.charAt(1)==="="&&(p=os(d,p)+y),m=parseFloat(p),x=p.substr((m+"").length),l=Qr.lastIndex-x.length,x||(x=x||En.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(d=Yi(e,t,g,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?rm:im;return Sp.test(r)&&(a.e=0),this._pt=a,a},rd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},o1=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=rd[n]||n,t[1]=rd[r]||r,t.join(" ")},a1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Si[a]&&(l=1,a=a==="transformOrigin"?fn:xt),qi(n,a);l&&(qi(n,xt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ho(n,1),o.uncache=1,sm(r)))}},Da={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new hn(e._pt,t,n,0,0,a1);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},uo=[1,0,0,1,0,0],um={},hm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},sd=function(e){var t=Sn(e,xt);return hm(t)?uo:t.substr(7).match(Mp).map(bt)},dh=function(e,t){var n=e._gsap||vr(e),r=e.style,s=sd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?uo:s):(s===uo&&!e.offsetParent&&e!==as&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,as.appendChild(e)),s=sd(e),l?r.display=l:qi(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):as.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},mu=function(e,t,n,r,s,o){var a=e._gsap,l=s||dh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],M=l[5],x=t.split(" "),y=parseFloat(x[0])||0,A=parseFloat(x[1])||0,C,b,P,U;n?l!==uo&&(b=d*p-_*g)&&(P=y*(p/b)+A*(-g/b)+(g*M-p*m)/b,U=y*(-_/b)+A*(d/b)-(d*M-_*m)/b,y=P,A=U):(C=lm(e),y=C.x+(~x[0].indexOf("%")?y/100*C.width:y),A=C.y+(~(x[1]||x[0]).indexOf("%")?A/100*C.height:A)),r||r!==!1&&a.smooth?(m=y-c,M=A-u,a.xOffset=h+(m*d+M*g)-m,a.yOffset=f+(m*_+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=A,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[fn]="0px 0px",o&&(Bi(o,a,"xOrigin",c,y),Bi(o,a,"yOrigin",u,A),Bi(o,a,"xOffset",h,a.xOffset),Bi(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+A)},ho=function(e,t){var n=e._gsap||new Zp(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Sn(e,fn)||"0",u,h,f,d,_,g,p,m,M,x,y,A,C,b,P,U,v,T,F,O,k,W,B,q,H,ae,he,de,Be,We,Y,Q;return u=h=f=g=p=m=M=x=y=0,d=_=1,n.svg=!!(e.getCTM&&cm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[xt]!=="none"?l[xt]:"")),r.scale=r.rotate=r.translate="none"),b=dh(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),mu(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,C=n.yOrigin||0,b!==uo&&(T=b[0],F=b[1],O=b[2],k=b[3],u=W=b[4],h=B=b[5],b.length===6?(d=Math.sqrt(T*T+F*F),_=Math.sqrt(k*k+O*O),g=T||F?$r(F,T)*fr:0,M=O||k?$r(O,k)*fr+g:0,M&&(_*=Math.abs(Math.cos(M*ls))),n.svg&&(u-=A-(A*T+C*O),h-=C-(A*F+C*k))):(Q=b[6],We=b[7],he=b[8],de=b[9],Be=b[10],Y=b[11],u=b[12],h=b[13],f=b[14],P=$r(Q,Be),p=P*fr,P&&(U=Math.cos(-P),v=Math.sin(-P),q=W*U+he*v,H=B*U+de*v,ae=Q*U+Be*v,he=W*-v+he*U,de=B*-v+de*U,Be=Q*-v+Be*U,Y=We*-v+Y*U,W=q,B=H,Q=ae),P=$r(-O,Be),m=P*fr,P&&(U=Math.cos(-P),v=Math.sin(-P),q=T*U-he*v,H=F*U-de*v,ae=O*U-Be*v,Y=k*v+Y*U,T=q,F=H,O=ae),P=$r(F,T),g=P*fr,P&&(U=Math.cos(P),v=Math.sin(P),q=T*U+F*v,H=W*U+B*v,F=F*U-T*v,B=B*U-W*v,T=q,W=H),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=bt(Math.sqrt(T*T+F*F+O*O)),_=bt(Math.sqrt(B*B+Q*Q)),P=$r(W,B),M=Math.abs(P)>2e-4?P*fr:0,y=Y?1/(Y<0?-Y:Y):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!hm(Sn(e,xt)),q&&e.setAttribute("transform",q))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=bt(d),n.scaleY=bt(_),n.rotation=bt(g)+a,n.rotationX=bt(p)+a,n.rotationY=bt(m)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[fn]=Ua(c)),n.xOffset=n.yOffset=0,n.force3D=En.force3D,n.renderTransform=n.svg?c1:am?fm:l1,n.uncache=0,n},Ua=function(e){return(e=e.split(" "))[0]+" "+e[1]},oc=function(e,t,n){var r=qt(t);return bt(parseFloat(t)+parseFloat(Yi(e,"x",n+"px",r)))+r},l1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,fm(e,t)},lr="0deg",zs="0px",cr=") ",fm=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,x=n.zOrigin,y="",A=m==="auto"&&e&&e!==1||m===!0;if(x&&(h!==lr||u!==lr)){var C=parseFloat(u)*ls,b=Math.sin(C),P=Math.cos(C),U;C=parseFloat(h)*ls,U=Math.cos(C),o=oc(M,o,b*U*-x),a=oc(M,a,-Math.sin(C)*-x),l=oc(M,l,P*U*-x+x)}p!==zs&&(y+="perspective("+p+cr),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(A||o!==zs||a!==zs||l!==zs)&&(y+=l!==zs||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+cr),c!==lr&&(y+="rotate("+c+cr),u!==lr&&(y+="rotateY("+u+cr),h!==lr&&(y+="rotateX("+h+cr),(f!==lr||d!==lr)&&(y+="skew("+f+", "+d+cr),(_!==1||g!==1)&&(y+="scale("+_+", "+g+cr),M.style[xt]=y||"translate(0, 0)"},c1=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,x=parseFloat(o),y=parseFloat(a),A,C,b,P,U;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ls,c*=ls,A=Math.cos(l)*h,C=Math.sin(l)*h,b=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=ls,U=Math.tan(c-u),U=Math.sqrt(1+U*U),b*=U,P*=U,u&&(U=Math.tan(u),U=Math.sqrt(1+U*U),A*=U,C*=U)),A=bt(A),C=bt(C),b=bt(b),P=bt(P)):(A=h,P=f,C=b=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Yi(d,"x",o,"px"),y=Yi(d,"y",a,"px")),(_||g||p||m)&&(x=bt(x+_-(_*A+g*b)+p),y=bt(y+g-(_*C+g*P)+m)),(r||s)&&(U=d.getBBox(),x=bt(x+r/100*U.width),y=bt(y+s/100*U.height)),U="matrix("+A+","+C+","+b+","+P+","+x+","+y+")",d.setAttribute("transform",U),M&&(d.style[xt]=U)},u1=function(e,t,n,r,s){var o=360,a=Ft(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?fr:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Qf)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Qf)%o-~~(c/o)*o)),e._pt=f=new hn(e._pt,t,n,r,c,qS),f.e=u,f.u="deg",e._props.push(n),f},od=function(e,t){for(var n in t)e[n]=t[n];return e},h1=function(e,t,n){var r=od({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[xt]=t,a=ho(n,1),qi(n,xt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[xt],o[xt]=t,a=ho(n,1),o[xt]=c);for(l in Si)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=qt(c),_=qt(u),h=d!==_?Yi(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new hn(e._pt,a,l,h,f-h,fu),e._pt.u=_||0,e._props.push(l));od(a,r)};un("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Da[e>1?"border"+i:i]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return pi(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var dm={name:"css",register:pu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,M,x,y,A,C,b,P,U;uh||pu(),this.styles=this.styles||om(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(xn[g]&&$p(g,t,n,r,e,s)))){if(d=typeof u,_=Da[g],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ao(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Hi.lastIndex=0,Hi.test(c)||(p=qt(c),m=qt(u),m?p!==m&&(c=Yi(e,g,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],Ft(c)&&~c.indexOf("random(")&&(c=ao(c)),qt(c+"")||c==="auto"||(c+=En.units[g]||qt(pi(e,g))||""),(c+"").charAt(1)==="="&&(c=pi(e,g))):c=pi(e,g),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in $n&&(g==="autoAlpha"&&(f===1&&pi(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),Bi(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=$n[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Si,x){if(this.styles.save(g),U=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Sn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=u,u=Sn(e,"perspective"),v?e.style.perspective=v:qi(e,"perspective")}h=parseFloat(u)}if(y||(A=e._gsap,A.renderTransform&&!t.parseTransform||ho(e,t.parseTransform),C=t.smoothOrigin!==!1&&A.smooth,y=this._pt=new hn(this._pt,a,xt,0,1,A.renderTransform,A,0,-1),y.dep=1),g==="scale")this._pt=new hn(this._pt,A,"scaleY",A.scaleY,(M?os(A.scaleY,M+h):h)-A.scaleY||0,fu),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(fn,0,a[fn]),u=o1(u),A.svg?mu(e,u,0,C,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&Bi(this,A,"zOrigin",A.zOrigin,m),Bi(this,a,g,Ua(c),Ua(u)));continue}else if(g==="svgOrigin"){mu(e,u,1,C,0,this);continue}else if(g in um){u1(this,A,g,f,M?os(f,M+u):u);continue}else if(g==="smoothOrigin"){Bi(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){h1(this,u,e);continue}}else g in a||(g=Ms(g)||g);if(x||(h||h===0)&&(f||f===0)&&!XS.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),m=qt(u)||(g in En.units?En.units[g]:p),p!==m&&(f=Yi(e,g,c,m)),this._pt=new hn(this._pt,x?A:a,g,f,(M?os(f,M+h):h)-f,!x&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?$S:fu),this._pt.u=m||0,x&&U!==u?(this._pt.b=c,this._pt.e=U,this._pt.r=ZS):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=YS);else if(g in a)s1.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,r,s);else if(g!=="parseTransform"){eh(g,u);continue}x||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),o.push(g)}}b&&tm(this)},render:function(e,t){if(t.tween._time||!hh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:pi,aliases:$n,getSetter:function(e,t,n){var r=$n[t];return r&&r.indexOf(",")<0&&(t=r),t in Si&&t!==fn&&(e._gsap.x||pi(e,"x"))?n&&jf===n?t==="scale"?QS:jS:(jf=n||{})&&(t==="scale"?e1:t1):e.style&&!Ju(e.style[t])?KS:~t.indexOf("-")?JS:lh(e,t)},core:{_removeProperty:qi,_getMatrix:dh}};pn.utils.checkPrefix=Ms;pn.core.getStyleSaver=om;(function(i,e,t,n){var r=un(i+","+e+","+t,function(s){Si[s]=1});un(e,function(s){En.units[s]="deg",um[s]=1}),$n[r[13]]=i+","+e,un(n,function(s){var o=s.split(":");$n[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){En.units[i]="px"});pn.registerPlugin(dm);var Pt=pn.registerPlugin(dm)||pn;Pt.core.Tween;const f1="/assets/hyg-logo-CaMRvg6g.png",d1="/assets/pirates-theme-D6VRph5b.mp4",Ss=document.querySelector("#scene"),ie={loader:document.querySelector(".loader"),intro:document.querySelector(".intro"),enter:document.querySelector(".enter"),story:document.querySelector(".story-ui"),prev:document.querySelector(".control--prev"),next:document.querySelector(".control--next"),current:document.querySelector(".page-current"),total:document.querySelector(".page-total"),title:document.querySelector(".chapter__title"),chapter:document.querySelector(".chapter__index"),chapterDots:[...document.querySelectorAll(".chapter-rail li")],addPhoto:document.querySelector(".add-photo"),photoInput:document.querySelector(".photo-input"),photoStrip:document.querySelector(".photo-strip"),editPage:document.querySelector(".edit-page"),pageEditor:document.querySelector(".page-editor"),editorClose:document.querySelector(".page-editor__close"),editorTarget:document.querySelector(".editor-target"),editorTitle:document.querySelector(".editor-title"),editorCaption:document.querySelector(".editor-caption"),editorQuote:document.querySelector(".editor-quote"),editorMedia:document.querySelector(".editor-media"),editorMediaInput:document.querySelector(".editor-media-input"),sequence:document.querySelector(".sequence-button"),pov:document.querySelector(".pov-button"),downloadVideo:document.querySelector(".download-video"),settings:document.querySelector(".settings-button"),music:document.querySelector(".music-button"),closeBook:document.querySelector(".close-book"),toast:document.querySelector(".toast")},wt=document.createElement("audio");wt.src=d1;wt.loop=!0;wt.volume=.55;wt.preload="auto";wt.muted=!1;wt.autoplay=!0;wt.setAttribute("playsinline","");document.body.append(wt);let _u=!1;function gu(){var e,t;const i=(e=ie.music)==null?void 0:e.querySelector("span");i&&(i.textContent=wt.paused||wt.muted?"Music":"Music On"),(t=ie.music)==null||t.classList.toggle("active",!wt.paused&&!wt.muted)}function Ka({withSound:i=!1}={}){i&&(wt.muted=!1);const e=wt.play();e&&e.then(gu).catch(()=>{gu(),i&&dt("Tap Music to start audio")})}function Ia(){_u||(_u=!0,Ka({withSound:!0}),removeEventListener("pointerdown",Ia),removeEventListener("keydown",Ia))}addEventListener("pointerdown",Ia);addEventListener("keydown",Ia);const Pe=matchMedia("(prefers-reduced-motion: reduce)").matches,ut=matchMedia("(max-width: 760px)").matches,fo=!ut&&devicePixelRatio<=2,Gt=new Wy;Gt.background=new Ne(9400904);Gt.fog=new Wu(9400904,ut?.005:.003);const An=new Hy({canvas:Ss,antialias:fo,alpha:!1,powerPreference:"high-performance"});An.setPixelRatio(Math.min(devicePixelRatio,ut?1.35:1.8));An.setSize(innerWidth,innerHeight);An.shadowMap.enabled=!0;An.shadowMap.type=Ed;An.outputColorSpace=rn;An.toneMapping=wd;An.toneMappingExposure=1.12;const tt=new sn(ut?40:32,innerWidth/innerHeight,.1,80);tt.position.set(ut?-.7:-1.05,ut?.85:.9,ut?18.4:16.8);Gt.add(tt);const Ts={normal:ut?40:32,close:ut?46:40},Ja=new HM(An);Ja.addPass(new WM(Gt,tt));let ad;fo&&(ad=new qM(Gt,tt,{focus:14.2,aperture:12e-5,maxblur:.005}),Ja.addPass(ad));const Mt=new ln;Mt.rotation.x=0;Mt.rotation.z=-.018;const Na={closed:ut?{x:-2.45,y:1.3}:{x:-2.6,y:.25},open:ut?{x:0,y:.65}:{x:0,y:0}};Mt.position.set(Na.closed.x,Na.closed.y,0);Gt.add(Mt);const Vn={closed:ut?{x:-.35,y:.1,z:16.1}:{x:-.55,y:.18,z:15.45},establish:ut?{x:-.7,y:.85,z:18.4}:{x:-1.05,y:.9,z:16.8},coverOpen:ut?{x:.85,y:.05,z:14.45}:{x:1.55,y:.35,z:12.95},imageZoom:ut?{x:0,y:0,z:7.35}:{x:0,y:0,z:4.95},flipWide:ut?{x:.12,y:.16,z:17.35}:{x:.12,y:.56,z:16.35},leftImageZoom:ut?{x:0,y:0,z:7.25}:{x:0,y:0,z:4.9},spreadZoom:ut?{x:0,y:0,z:7.45}:{x:0,y:0,z:5.15},pageTurn(i=!0){return ut?{x:i?-.74:.74,y:-.04,z:15.15}:{x:i?-1.65:2,y:.24,z:13.65}}};function p1(i,e,t,n=0,r="power2.inOut"){return i.to(tt.position,{...e,duration:t,ease:r},n)}const pm=An.capabilities.getMaxAnisotropy();function Ei(i,e=1024){const t=document.createElement("canvas");t.width=t.height=e;const n=t.getContext("2d");i(n,e);const r=new Ky(t);return r.colorSpace=rn,r.anisotropy=Math.min(8,pm),r.userData.redraw=()=>{n.clearRect(0,0,e,e),i(n,e),r.needsUpdate=!0},r}function Rr(i,e,t=.08){const n=i.getImageData(0,0,e,e);for(let r=0;r<n.data.length;r+=4){const s=Math.random()*45-22;n.data[r]+=s,n.data[r+1]+=s*.82,n.data[r+2]+=s*.55,n.data[r+3]=Math.max(n.data[r+3],t*255)}i.putImageData(n,0,0)}function m1(i){let e=i>>>0;return function(){return e=e*1664525+1013904223>>>0,e/4294967296}}function _1(i,e){const t=Math.random;Math.random=m1(i);try{return e()}finally{Math.random=t}}const g1=50,ld=ut?512:640,cd=[{chapter:"The Journey Begins",date:"14 May · 1718",title:"Beyond the Known Sea",quote:"A brave heart is the truest compass when every chart has failed.",photo:"THE BLACK GULL",tone:["#435654","#c29a5c"]},{chapter:"Dead Man’s Passage",date:"2 June · 1718",title:"Through Devil’s Teeth",quote:"We sailed where the rocks rose like fangs and the sea spoke in thunder.",photo:"THE NARROW PASS",tone:["#3f4d4a","#a98250"]},{chapter:"The Sunken Isle",date:"19 June · 1718",title:"Land Beneath the Mist",quote:"At dawn the island appeared, as if the ocean had dreamed it overnight.",photo:"CROW ISLAND",tone:["#53604b","#c4a165"]},{chapter:"The Captain’s Mark",date:"21 June · 1718",title:"Ink, Blood & Promise",quote:"Three crosses beneath the crooked palm. One grave. One fortune.",photo:"THE SECRET COVE",tone:["#5d4637","#b58b55"]},{chapter:"Buried Fortune",date:"24 June · 1718",title:"Where the Compass Sleeps",quote:"Gold has a voice of its own. Wise sailors know when not to answer.",photo:"FORTUNE FOUND",tone:["#4b5142","#c7a858"]},{chapter:"Homeward Bound",date:"7 July · 1718",title:"The Long Tide Home",quote:"We returned with lighter pockets, heavier hearts, and a story worth keeping.",photo:"LAST LIGHT",tone:["#3d4c50","#b9905c"]}],Zi=Array.from({length:g1},(i,e)=>{const t=cd[e%cd.length],n=String(e+1).padStart(3,"0");return{...t,chapter:`${t.chapter} ${n}`,title:`${t.title} ${n}`,photo:`${t.photo} ${n}`}}),ac=document.querySelector(".chapter-rail ol");ac&&(ac.innerHTML=Zi.map((i,e)=>`<li>${String(e+1).padStart(2,"0")}</li>`).join(""),ie.chapterDots=[...ac.querySelectorAll("li")]);function Js(i,e,t,n){i.save(),i.translate(e,t),i.strokeStyle="rgba(63,37,18,.7)",i.fillStyle="rgba(63,37,18,.58)",i.lineWidth=2,i.beginPath(),i.arc(0,0,n,0,Math.PI*2),i.stroke(),i.beginPath(),i.arc(0,0,n*.78,0,Math.PI*2),i.stroke();for(let r=0;r<16;r++)i.rotate(Math.PI/8),i.beginPath(),i.moveTo(0,-n*(r%2?.55:.94)),i.lineTo(-n*.07,0),i.lineTo(n*.07,0),i.closePath(),r%2===0?i.fill():i.stroke();i.font=`600 ${n*.22}px Georgia`,i.textAlign="center",i.fillText("N",0,-n-12),i.restore()}function mm(i,e,t,n,r=.65){i.save(),i.translate(e,t),i.globalAlpha=r,i.strokeStyle="#3b2616",i.fillStyle="#3b2616",i.lineCap="round",i.lineWidth=n*.075,i.beginPath(),i.moveTo(-n*.38,-n*.32),i.lineTo(n*.38,n*.32),i.moveTo(n*.38,-n*.32),i.lineTo(-n*.38,n*.32),i.stroke(),[-1,1].forEach(s=>{i.beginPath(),i.arc(s*n*.38,s*n*.32,n*.09,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(-s*n*.38,s*n*.32,n*.09,0,Math.PI*2),i.fill()}),i.beginPath(),i.arc(0,-n*.12,n*.29,0,Math.PI*2),i.fill(),i.fillRect(-n*.2,n*.05,n*.4,n*.27),i.fillStyle="#b99b66",i.beginPath(),i.ellipse(-n*.1,-n*.15,n*.065,n*.085,0,0,Math.PI*2),i.ellipse(n*.1,-n*.15,n*.065,n*.085,0,0,Math.PI*2),i.fill(),i.beginPath(),i.moveTo(0,-n*.03),i.lineTo(-n*.045,n*.07),i.lineTo(n*.045,n*.07),i.closePath(),i.fill(),i.strokeStyle="#b99b66",i.lineWidth=n*.025;for(let s=-2;s<=2;s++)i.beginPath(),i.moveTo(s*n*.055,n*.1),i.lineTo(s*n*.055,n*.28),i.stroke();i.restore()}function v1(i,e,t,n){i.save(),i.translate(e,t),i.strokeStyle="#4a2e18",i.lineWidth=n*.06,i.lineCap="round",i.lineJoin="round",i.beginPath(),i.arc(0,-n*.43,n*.1,0,Math.PI*2),i.moveTo(0,-n*.33),i.lineTo(0,n*.36),i.moveTo(-n*.28,-n*.18),i.lineTo(n*.28,-n*.18),i.moveTo(-n*.4,n*.12),i.bezierCurveTo(-n*.34,n*.45,-n*.1,n*.52,0,n*.58),i.bezierCurveTo(n*.1,n*.52,n*.34,n*.45,n*.4,n*.12),i.moveTo(-n*.4,n*.12),i.lineTo(-n*.48,n*.27),i.moveTo(n*.4,n*.12),i.lineTo(n*.48,n*.27),i.stroke(),i.restore()}function vu(i,e,t){i.save(),i.strokeStyle="rgba(72,40,20,.55)",i.lineWidth=5,i.setLineDash([14,13]),i.beginPath(),i.moveTo(90,e*.7),i.bezierCurveTo(e*.3,e*.52,e*.45,e*.84,e*.7,e*.62),i.bezierCurveTo(e*.8,e*.54,e*.82,e*.4,e*.9,e*.37),i.stroke(),i.setLineDash([]),i.strokeStyle="rgba(93,28,16,.72)",i.lineWidth=8;const n=e*.9,r=e*.36;i.beginPath(),i.moveTo(n-20,r-20),i.lineTo(n+20,r+20),i.moveTo(n+20,r-20),i.lineTo(n-20,r+20),i.stroke(),i.fillStyle="rgba(48,32,18,.28)";for(let s=0;s<5;s++){const o=110+s*145,a=500+Math.sin(s*2+t)*45;i.beginPath(),i.ellipse(o,a,55,22,-.2,0,Math.PI*2),i.fill()}i.restore()}function lc(i,e,t,n,r,s,o,a=null){i.save(),i.translate(e+n/2,t+r/2),i.rotate((o%2?-1:1)*.025),i.translate(-n/2,-r/2),i.shadowColor="rgba(50,30,15,.32)",i.shadowBlur=18,i.shadowOffsetY=10,i.fillStyle="#e5d7b9",i.fillRect(-14,-14,n+28,r+54),i.shadowColor="transparent";const l=i.createLinearGradient(0,0,n,r);if(l.addColorStop(0,s.tone[0]),l.addColorStop(1,s.tone[1]),i.fillStyle=l,i.fillRect(0,0,n,r),a){const c=a.videoWidth||a.naturalWidth||a.width,u=a.videoHeight||a.naturalHeight||a.height,h=c/u,f=n/r;if(i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",h<f*.82){const d=r,_=d*h,g=(n-_)/2;i.fillStyle="rgba(32,22,15,.34)",i.fillRect(0,0,n,r),i.filter="brightness(.78) blur(10px) saturate(1.08)",i.drawImage(a,0,0,c,u,0,0,n,r),i.filter="brightness(1.28) contrast(1.04) saturate(1.08)",i.drawImage(a,0,0,c,u,g,0,_,d)}else{let d=0,_=0,g=c,p=u;h>f?(g=u*f,d=(c-g)/2):(p=c/f,_=(u-p)/2),i.filter="brightness(1.28) contrast(1.04) saturate(1.08)",i.drawImage(a,d,_,g,p,0,0,n,r)}i.filter="none"}else{i.globalAlpha=.55,i.fillStyle="#e0c691",i.beginPath(),i.arc(n*.76,r*.22,n*.1,0,Math.PI*2),i.fill(),i.globalAlpha=.82,i.strokeStyle="#29251f",i.fillStyle="#29251f",i.lineWidth=7,i.beginPath(),i.moveTo(n*.22,r*.68),i.lineTo(n*.8,r*.68),i.lineTo(n*.69,r*.84),i.lineTo(n*.34,r*.84),i.closePath(),i.fill(),i.beginPath(),i.moveTo(n*.48,r*.68),i.lineTo(n*.48,r*.2),i.stroke(),i.beginPath(),i.moveTo(n*.5,r*.25),i.lineTo(n*.72,r*.48),i.lineTo(n*.5,r*.5),i.closePath(),i.fill(),i.globalAlpha=.5,i.beginPath(),i.moveTo(n*.46,r*.3),i.lineTo(n*.28,r*.52),i.lineTo(n*.46,r*.56),i.closePath(),i.fill(),i.globalAlpha=.42,i.strokeStyle="#eee0bd",i.lineWidth=4;for(let c=0;c<4;c++)i.beginPath(),i.moveTo(0,r*(.82+c*.045)),i.bezierCurveTo(n*.25,r*(.77+c*.045),n*.55,r*(.88+c*.03),n,r*(.8+c*.04)),i.stroke();i.globalAlpha=.17;for(let c=0;c<120;c++)i.fillStyle=Math.random()>.5?"#fff":"#000",i.fillRect(Math.random()*n,Math.random()*r,Math.random()*3+1,1)}i.globalAlpha=1,i.fillStyle="#403326",i.textAlign="center",i.font="600 15px Montserrat",i.fillText(s.photo,n/2,r+31),i.restore()}function x1(i,e,t,n,r){i.save(),i.translate(e,t),i.rotate(-.025),i.shadowColor="rgba(42,24,11,.35)",i.shadowBlur=15,i.shadowOffsetY=9,i.fillStyle="#c7a773",i.beginPath(),i.moveTo(8,8);for(let s=35;s<n;s+=35)i.lineTo(s,Math.random()*13);i.lineTo(n-5,7),i.lineTo(n,r-9);for(let s=n-30;s>0;s-=38)i.lineTo(s,r-Math.random()*14);i.lineTo(5,r-4),i.closePath(),i.fill(),i.shadowColor="transparent",i.fillStyle="rgba(55,31,16,.78)",i.font="italic 27px Georgia",i.textAlign="left",Es(i,"“Keep the north star at your shoulder. The hidden cove opens only at low tide.”",45,78,n-90,42),i.fillStyle="rgba(223,199,142,.42)",i.fillRect(n*.37,-20,n*.25,68),i.strokeStyle="rgba(45,38,31,.72)",i.lineWidth=7,i.beginPath(),i.ellipse(n-48,42,18,35,.35,0,Math.PI*1.75),i.stroke(),i.restore()}function _m(i,e,t=1){for(let n=0;n<75*t;n++){const r=Math.floor(Math.random()*4),s=Math.random()*105,o=r<2?Math.random()*e:r===2?s:e-s,a=r>1?Math.random()*e:r===0?s:e-s,l=1.5+Math.random()*7;i.fillStyle=`rgba(91,48,20,${.035+Math.random()*.1})`,i.beginPath(),i.arc(o,a,l,0,Math.PI*2),i.fill()}i.save(),i.strokeStyle=`rgba(91,56,29,${.09*t})`,i.lineWidth=2,[[e*.18,0,e*.24,e],[e*.83,0,e*.76,e],[0,e*.71,e,e*.67]].forEach(n=>{i.beginPath(),i.moveTo(n[0],n[1]),i.lineTo(n[2],n[3]),i.stroke()});for(let n=0;n<3;n++){const r=e*(.18+Math.random()*.64),s=e*(.16+Math.random()*.68),o=e*(.035+Math.random()*.06);i.strokeStyle=`rgba(82,45,20,${.08+Math.random()*.07})`,i.lineWidth=4+Math.random()*5,i.beginPath(),i.ellipse(r,s,o,o*(.65+Math.random()*.3),Math.random(),0,Math.PI*2),i.stroke()}i.restore()}function xu(i,e,t,n=null){return Ei((r,s)=>{r.save(),r.scale(s/1024,s/1024),_1(1718+t*97,()=>{const a=r.createRadialGradient(460.8,430.08,20,512,512,768);a.addColorStop(0,"#F0E2C8"),a.addColorStop(.72,"#d5bd93"),a.addColorStop(1,"#a88351"),r.fillStyle=a,r.fillRect(0,0,1024,1024),Rr(r,1024);const l=r.createRadialGradient(1024/2,1024/2,1024*.38,1024/2,1024/2,1024*.72);l.addColorStop(.62,"rgba(65,31,11,0)"),l.addColorStop(.9,"rgba(55,24,8,.24)"),l.addColorStop(1,"rgba(24,9,3,.58)"),r.fillStyle=l,r.fillRect(0,0,1024,1024),r.strokeStyle="rgba(67,37,17,.25)",r.lineWidth=5,r.setLineDash([22,8,5,11]),r.strokeRect(38,36,948,952),r.setLineDash([]);for(let c=0;c<9;c++){const u=Math.random()*1024,h=Math.random()>.5?Math.random()*70:1024-Math.random()*70,f=r.createRadialGradient(u,h,0,u,h,22+Math.random()*45);f.addColorStop(0,"rgba(57,23,7,.25)"),f.addColorStop(1,"rgba(57,23,7,0)"),r.fillStyle=f,r.beginPath(),r.arc(u,h,70,0,Math.PI*2),r.fill()}_m(r,1024,1.5);for(let c=0;c<5;c++){const u=Math.random()>.5?Math.random()*120:1024-Math.random()*120,h=Math.random()*1024,f=28+Math.random()*85,d=r.createRadialGradient(u,h,0,u,h,f);d.addColorStop(0,"rgba(55,20,5,.24)"),d.addColorStop(.55,"rgba(92,45,15,.12)"),d.addColorStop(1,"rgba(92,45,15,0)"),r.fillStyle=d,r.fillRect(u-f,h-f,f*2,f*2)}if(r.fillStyle="rgba(61,42,25,.72)",r.textAlign="left",r.font="500 17px Montserrat",r.letterSpacing="4px",r.fillText(i.date.toUpperCase(),76,100),r.fillStyle="rgba(75,49,27,.27)",r.fillRect(76,126,90,2),e==="front")t===0?(r.font="italic 25px Georgia",r.fillStyle="rgba(66,39,20,.7)",r.fillText("Voyage memory no. 01",76,178),lc(r,132,225,750,390,i,t,n),x1(r,190,680,650,210),Js(r,112,820,52)):(r.font="600 16px Montserrat",r.fillStyle="rgba(76,46,23,.62)",r.textAlign="center",r.fillText(`VOYAGE RECORD  ·  0${t+1}`,1024/2,150),lc(r,122,190,780,445,i,t,n),Js(r,115,805,54),n||vu(r,1024,t),r.font="italic 58px Georgia",r.fillStyle="#4e3825",r.textAlign="center",Es(r,i.title,1024/2,720,764,62),r.font="italic 26px Georgia",r.fillStyle="rgba(58,39,22,.78)",r.textAlign="center",Es(r,i.quote,155,815,714,37));else{lc(r,120,165,780,430,i,t+1,n),r.font="italic 43px Georgia",r.fillStyle="#49331f",r.textAlign="left",r.fillText("Captain’s log",170,675),r.font="italic 22px Georgia",r.fillStyle="rgba(55,38,22,.7)";const c=["Wind east by southeast.","Two bells after midnight.","The crew heard singing below.","Trust no chart without a scar."];c.forEach((u,h)=>r.fillText(u,175,740+h*45)),r.strokeStyle="rgba(70,43,22,.24)",r.lineWidth=2,c.forEach((u,h)=>{r.beginPath(),r.moveTo(175,755+h*45),r.lineTo(600,755+h*45),r.stroke()}),r.fillStyle="rgba(68,43,22,.2)",r.font="italic 96px Georgia",r.fillText(`${t+1}`,760,805),Js(r,815,755,78),n||(vu(r,1024,t+2),mm(r,865,270,110,.18))}r.fillStyle="rgba(63,40,22,.46)",r.textAlign="center",r.font="500 14px Montserrat",r.fillText(String(t*2+(e==="front"?1:2)).padStart(2,"0"),1024/2,965)}),r.restore()},n?n.tagName==="VIDEO"?ld:1024:ld)}function Es(i,e,t,n,r,s){const o=e.split(" ");let a="",l=n;for(const c of o){const u=a+c+" ";i.measureText(u).width>r&&a?(i.fillText(a.trim(),t,l),a=c+" ",l+=s):a=u}i.fillText(a.trim(),t,l)}function y1(){return Ei((i,e)=>{const t=i.createRadialGradient(e*.45,e*.4,30,e*.5,e*.5,e*.72);t.addColorStop(0,"#F0E2C8"),t.addColorStop(.72,"#c8aa78"),t.addColorStop(1,"#815b31"),i.fillStyle=t,i.fillRect(0,0,e,e),Rr(i,e,.12);const n=i.createRadialGradient(e/2,e/2,e*.38,e/2,e/2,e*.72);n.addColorStop(.65,"rgba(43,19,6,0)"),n.addColorStop(1,"rgba(35,13,4,.58)"),i.fillStyle=n,i.fillRect(0,0,e,e),_m(i,e,1.6),i.strokeStyle="rgba(69,39,18,.28)",i.lineWidth=5,i.setLineDash([18,9,4,12]),i.strokeRect(38,36,e-76,e-72),i.setLineDash([]),v1(i,e*.5,215,125),i.fillStyle="rgba(62,36,18,.62)",i.textAlign="center",i.font="500 18px Montserrat",i.fillText("CHAPTER 1",e*.5,390),i.fillStyle="#49301c",i.font="italic 75px Georgia",Es(i,"The Journey Begins",145,485,e-290,82),i.strokeStyle="rgba(77,43,20,.32)",i.lineWidth=2,i.beginPath(),i.moveTo(220,670),i.lineTo(e-220,670),i.stroke(),i.fillStyle="rgba(59,36,20,.74)",i.font="italic 31px Georgia",Es(i,"“Not all those who wander are lost.”",180,760,e-360,44),i.font="italic 21px Georgia",i.fillStyle="rgba(75,45,23,.55)",i.fillText("— written before the first tide",e*.5,875),i.fillStyle="rgba(42,28,20,.35)",[[130,650,12],[165,620,5],[835,720,9]].forEach(r=>{i.beginPath(),i.arc(...r,0,Math.PI*2),i.fill()})})}const yu=Ei((i,e)=>{const t=i.createLinearGradient(0,0,e,e);t.addColorStop(0,"#3b251b"),t.addColorStop(.46,"#21140f"),t.addColorStop(1,"#4a2d20"),i.fillStyle=t,i.fillRect(0,0,e,e),Rr(i,e,.17);for(let r=0;r<3200;r++){const s=Math.random()*e,o=Math.random()*e,a=.5+Math.random()*2.8,l=.35+Math.random()*1.7;i.strokeStyle=Math.random()>.5?"rgba(18,9,6,.2)":"rgba(172,146,121,.045)",i.lineWidth=.45+Math.random()*.75,i.beginPath(),i.ellipse(s,o,a,l,Math.random()*Math.PI,0,Math.PI*2),i.stroke()}for(let r=0;r<145;r++){const s=Math.random()*e,o=Math.random()*e,a=12+Math.random()*54;i.strokeStyle="rgba(31,12,6,.18)",i.lineWidth=.8+Math.random()*1.4,i.beginPath(),i.moveTo(s,o),i.quadraticCurveTo(s+a*.5,o+Math.random()*10-5,s+a,o+Math.random()*5-2.5),i.stroke()}i.strokeStyle="rgba(28,15,10,.56)",i.lineWidth=10,i.strokeRect(43,43,e-86,e-86),i.strokeStyle="rgba(156,126,98,.16)",i.lineWidth=2,i.strokeRect(49,49,e-98,e-98),i.lineCap="round";for(let r=72,s=0;r<e-72;r+=18,s++){if(s%8!==3){const o=(s%3-1)*1.2;i.strokeStyle="rgba(24,13,9,.35)",i.lineWidth=4,i.beginPath(),i.moveTo(r+2,67),i.lineTo(r+9+o,67),i.moveTo(r+2,e-65),i.lineTo(r+9-o,e-65),i.stroke(),i.strokeStyle="rgba(157,132,105,.52)",i.lineWidth=2.3,i.beginPath(),i.moveTo(r,65),i.lineTo(r+8+o,65),i.moveTo(r,e-67),i.lineTo(r+8-o,e-67),i.stroke()}if(s%7!==4){const o=(s%3-1)*1.1;i.strokeStyle="rgba(24,13,9,.35)",i.lineWidth=4,i.beginPath(),i.moveTo(67,r+2),i.lineTo(67,r+9+o),i.moveTo(e-65,r+2),i.lineTo(e-65,r+9-o),i.stroke(),i.strokeStyle="rgba(157,132,105,.52)",i.lineWidth=2.3,i.beginPath(),i.moveTo(65,r),i.lineTo(65,r+8+o),i.moveTo(e-67,r),i.lineTo(e-67,r+8-o),i.stroke()}}const n=i.createRadialGradient(e*.5,e*.5,e*.22,e*.5,e*.5,e*.72);n.addColorStop(.34,"rgba(66,39,25,.28)"),n.addColorStop(.72,"rgba(95,64,44,.15)"),n.addColorStop(1,"rgba(185,151,116,.2)"),i.fillStyle=n,i.fillRect(0,0,e,e),i.lineCap="round";for(let r=0;r<92;r++){const s=Math.random()*e,o=Math.random()*e,a=18+Math.random()*135;i.strokeStyle=`rgba(${Math.random()>.52?"183,153,123":"18,7,4"},${.08+Math.random()*.17})`,i.lineWidth=.7+Math.random()*2.8,i.beginPath(),i.moveTo(s,o),i.bezierCurveTo(s+a*.25,o+Math.random()*12-6,s+a*.7,o+Math.random()*16-8,s+a,o+Math.random()*9-4),i.stroke()}for(let r=0;r<34;r++)i.fillStyle=`rgba(12,5,3,${.1+Math.random()*.2})`,i.beginPath(),i.ellipse(Math.random()*e,Math.random()*e,6+Math.random()*28,2+Math.random()*10,Math.random()*Math.PI,0,Math.PI*2),i.fill();for(let r=0;r<15;r++){const s=Math.random()*e,o=Math.random()*e,a=45+Math.random()*125,l=i.createRadialGradient(s,o,0,s,o,a);l.addColorStop(0,"rgba(176,135,99,.18)"),l.addColorStop(.55,"rgba(74,45,31,.12)"),l.addColorStop(1,"rgba(34,14,7,0)"),i.fillStyle=l,i.fillRect(s-a,o-a,a*2,a*2)}i.strokeStyle="rgba(12,5,3,.48)",i.lineWidth=2.4;for(let r=0;r<28;r++){let s=Math.random()*e,o=Math.random()*e;i.beginPath(),i.moveTo(s,o);for(let a=0;a<5;a++)s+=Math.random()*34-17,o+=18+Math.random()*28,i.lineTo(s,o);i.stroke()}i.fillStyle="rgba(218,188,143,.06)";for(let r=0;r<120;r++)i.beginPath(),i.ellipse(Math.random()*e,Math.random()*e,10+Math.random()*36,2+Math.random()*8,Math.random()*Math.PI,0,Math.PI*2),i.fill()}),ph=new at({map:yu,bumpMap:yu,bumpScale:.13,color:9918251,roughness:1,metalness:0}),gm=new at({color:9400395,roughness:.96}),Un=new at({color:8544303,roughness:.48,metalness:.68}),en=5.15,ja=6.7,Cn=Zi.length,Er=en-.78,br=ja-.92,Qi=en/2+.02,Oa={x:132,y:225,w:750,h:390},Mu=Qi+(Oa.x+Oa.w/2)/1024*Er-Er/2,Su=br/2-(Oa.y+Oa.h/2)/1024*br,M1={...Vn.imageZoom,x:Mu,y:Su},vm=-Qi*.9,xm=Qi*.9,ym=ut?.62:.72,Mm=ut?.42:.5,ri=new ln;ri.rotation.z=-.02;Mt.add(ri);function er(i,e,t,n,r){const s=new Gn,o=-i/2,a=-e/2;s.moveTo(o+n,a),s.lineTo(o+i-n,a),s.quadraticCurveTo(o+i,a,o+i,a+n),s.lineTo(o+i,a+e-n),s.quadraticCurveTo(o+i,a+e,o+i-n,a+e),s.lineTo(o+n,a+e),s.quadraticCurveTo(o,a+e,o,a+e-n),s.lineTo(o,a+n),s.quadraticCurveTo(o,a,o+n,a);const l=new Yu(s,{depth:t,bevelEnabled:!0,bevelSize:.07,bevelThickness:.05,bevelSegments:3});l.center();const c=new Te(l,r);return c.castShadow=c.receiveShadow=!0,c}const Sm=er(en+.45,ja+.75,.34,.2,ph);Sm.position.set(en/2+.05,0,-.55);ri.add(Sm);const Tm=er(Er,br,.42,.08,gm),Em=er(Er,br,.48,.08,gm);Em.position.set(Qi,-.01,-.19);ri.add(Em);const bm=er(.62,ja+.52,.6,.16,ph);bm.position.z=-.28;ri.add(bm);[-2.6,2.6].forEach(i=>{const e=er(.78,.12,.67,.03,Un);e.position.set(0,i,-.22),ri.add(e)});const S1=`
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
  }`;function Tu(i,e,t=!1){return new dn({uniforms:{map:{value:i},uVideoMap:{value:i},uVideoRect:{value:new Je(0,0,0,0)},uVideoFit:{value:new Je(0,0,1,1)},uUseVideo:{value:0},uTurn:{value:0},uCurl:{value:.85},uReveal:{value:1},uWarmth:{value:new Ne(16769712)},uPhotoRect:{value:new Je(0,0,0,0)},uPhotoProtect:{value:0},uPhotoBrightness:{value:1},uMirrorX:{value:t?1:0}},vertexShader:S1,fragmentShader:"uniform sampler2D map; uniform sampler2D uVideoMap; uniform vec4 uVideoRect; uniform vec4 uVideoFit; uniform float uUseVideo; uniform vec3 uWarmth; uniform vec4 uPhotoRect; uniform float uPhotoProtect; uniform float uPhotoBrightness; uniform float uReveal; uniform float uMirrorX; varying vec2 vUv2; void main(){vec2 pageUv=mix(vUv2,vec2(1.0-vUv2.x,vUv2.y),uMirrorX);float photoMask=step(uPhotoRect.x,pageUv.x)*step(pageUv.x,uPhotoRect.z)*step(uPhotoRect.y,pageUv.y)*step(pageUv.y,uPhotoRect.w)*uPhotoProtect;float videoMask=step(uVideoRect.x,pageUv.x)*step(pageUv.x,uVideoRect.z)*step(uVideoRect.y,pageUv.y)*step(pageUv.y,uVideoRect.w)*uUseVideo;vec4 c=texture2D(map,pageUv);if(videoMask>.5){vec2 frameUv=(pageUv-uVideoRect.xy)/(uVideoRect.zw-uVideoRect.xy);vec2 fitMin=uVideoFit.xy;vec2 fitMax=uVideoFit.zw;float inside=step(fitMin.x,frameUv.x)*step(frameUv.x,fitMax.x)*step(fitMin.y,frameUv.y)*step(frameUv.y,fitMax.y);vec2 videoUv=(frameUv-fitMin)/(fitMax-fitMin);vec4 fill=texture2D(uVideoMap,frameUv);vec4 fitted=texture2D(uVideoMap,videoUv);c=mix(vec4(fill.rgb*.58,1.0),fitted,inside);}float wobble=sin(pageUv.y*91.0)*.012+sin(pageUv.x*67.0)*.009+sin((pageUv.x+pageUv.y)*143.0)*.004;float edge=smoothstep(0.0,.038+wobble,pageUv.x)*smoothstep(0.0,.041-wobble,1.0-pageUv.x)*smoothstep(0.0,.03-wobble,pageUv.y)*smoothstep(0.0,.032+wobble,1.0-pageUv.y);if(edge<.18&&photoMask<.5)discard;float grain=fract(sin(dot(floor(pageUv*vec2(31.0,23.0)),vec2(12.9898,78.233)))*43758.5453);float threshold=pageUv.y*.35+grain*.65;float painted=smoothstep(threshold-.14,threshold+.08,uReveal*1.12);vec3 bare=vec3(.72,.57,.34)*(1.0-pageUv.x*.06);c.rgb=mix(bare,c.rgb,mix(painted,1.0,photoMask));vec3 warmth=mix(uWarmth,vec3(1.0),photoMask);c.rgb*=mix(mix(.31,1.0,edge),1.0,photoMask)*warmth;c.rgb=mix(c.rgb,min(pow(c.rgb,vec3(.72))*uPhotoBrightness,vec3(1.0)),photoMask);gl_FragColor=vec4(c.rgb,1.0);}",side:e,transparent:!1,depthWrite:!0,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:t?1:-1,polygonOffsetUnits:t?1:-1})}const T1=new Wn(Er,br,24,10);for(let i=0;i<12;i++){const e=new at({color:new Ne().setHSL(.105,.28,.5+i*.006),roughness:1,side:Xt}),t=new Te(new Wn(Er-.08-i%3*.018,br-.08-i%4*.014),e);t.position.set(Qi+(i%3-1)*.008,(i%4-1.5)*.008,.018+i*.0045),t.rotation.z=(i%2?1:-1)*(8e-4+i*12e-5),t.receiveShadow=!0,ri.add(t)}const ni=[];for(let i=0;i<Cn;i++){const e=new ln;e.position.set(0,0,.13+(Cn-i)*.0038),ri.add(e),e.position.y=(i%3-1)*.009,e.rotation.z=(i%2?1:-1)*(.0018+i*25e-5);const t=new Wn(Er,br,36,12);t.translate(Qi,0,0);const n=xu(Zi[i],"front",i),r=Tu(n,Hn);r.uniforms.uReveal.value=0;const s=xu(Zi[i],"back",i),o=Tu(s,Qt,!0);o.uniforms.uReveal.value=0;const a=new Te(t,r);a.castShadow=a.receiveShadow=!0,e.add(a);const l=new Te(t,o);l.position.z=-.018,l.castShadow=!0,e.add(l),e.userData={frontMat:r,backMat:o,frontTexture:n,backTexture:s,progress:0,index:i},ni.push(e)}ni.forEach((i,e)=>{i.visible=e===0});const yt=new ln;yt.position.z=.43;ri.add(yt);const wm=er(en+.45,ja+.75,.34,.18,ph);wm.position.x=en/2+.05;yt.add(wm);const E1=new at({color:5519147,roughness:1,metalness:0}),b1=new at({color:3873550,roughness:1,metalness:0});function Qa(i,e,t=1,n=1){const r=new Gn;r.moveTo(0,0),r.lineTo(.72*t,.04*n),r.lineTo(.56*t,.19*n),r.lineTo(.68*t,.34*n),r.lineTo(.31*t,.58*n),r.lineTo(.08*t,.72*n),r.closePath();const s=new Te(new Jn(r),E1);s.position.set(i,e,.183),s.castShadow=!0,yt.add(s)}Qa(-.12,-3.65,1,1);Qa(5.42,-3.65,-1,1);Qa(-.12,3.65,1,-1);Qa(5.42,3.65,-1,-1);const w1=new ss({color:2363398,transparent:!0,opacity:.82});[[[.05,-3.1,.205],[.42,-2.76,.207],[.29,-2.4,.205],[.61,-2.08,.207]],[[5.3,3.28,.205],[4.92,2.98,.207],[5.02,2.63,.205],[4.72,2.35,.207]],[[4.95,-3.52,.205],[4.66,-3.18,.207],[4.78,-2.89,.205]],[[.14,3.42,.205],[.48,3.1,.207],[.38,2.78,.205]]].forEach(i=>yt.add(new Xs(new mt().setFromPoints(i.map(e=>new L(...e))),w1)));const Mo=new Gn;Mo.moveTo(0,0);Mo.lineTo(-.58,.05);Mo.lineTo(-.35,.42);Mo.closePath();const el=new Te(new Jn(Mo),b1);el.position.set(5.34,-3.52,.22);el.rotation.x=-.24;el.castShadow=!0;yt.add(el);const A1=new at({color:10252352,roughness:1});for(let i=0;i<15;i++){if(i===3||i===9||i===13)continue;const e=new Te(new Ar(.18,.025,.018),A1);e.position.set(.09,-3.15+i*.45,.215),e.rotation.z=(i%2?1:-1)*.13,yt.add(e)}Tm.position.set(Qi,-.01,-.35);yt.add(Tm);const po=new Te(T1,Tu(y1(),Hn));po.position.set(Qi,0,-.47);po.rotation.y=Math.PI;po.castShadow=po.receiveShadow=!0;yt.add(po);const Am=er(2.9,1.35,.05,.04,Un);Am.position.set(en/2+.05,.15,.2);yt.add(Am);const Cm=er(2.62,1.08,.06,.03,new at({color:2364173,roughness:.65}));Cm.position.set(en/2+.05,.15,.245);yt.add(Cm);Ei((i,e)=>{i.clearRect(0,0,e,e),i.fillStyle="#d8a64c",i.textAlign="center",i.font="700 65px Georgia",i.fillText("THE",e/2,e*.38),i.fillText("ARCHIVE",e/2,e*.54),i.fillStyle="#e7c982",i.font="500 24px Montserrat",i.fillText("CAPTAIN’S LOG  ·  1718",e/2,e*.68),i.strokeStyle="rgba(220,174,82,.7)",i.lineWidth=3,i.strokeRect(75,220,e-150,e-440)},1024);const C1=new LM().load(f1,i=>{i.colorSpace=rn,i.anisotropy=Math.min(8,pm)}),mh=new Te(new Wn(2.34,.98),new yi({map:C1,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,side:Hn}));mh.position.set(en/2+.05,.15,.36);mh.renderOrder=50;yt.add(mh);const R1=new yi({color:3425583,transparent:!0,opacity:.46,depthWrite:!1});for(let i=0;i<14;i++){const e=i/14*Math.PI*2,t=en/2+.05+Math.cos(e)*(1.25+(i%3-1)*.05),n=.15+Math.sin(e)*.55,r=new Te(new ei(.025+i%4*.009,10),R1);r.position.set(t,n,.292),yt.add(r)}const _h=new Te(new Ot(.28,.28,.07,32),Un);_h.rotation.x=Math.PI/2;_h.position.set(en/2+.05,-1.25,.31);yt.add(_h);const bi=new Gn;bi.moveTo(-.22,-.05);bi.bezierCurveTo(-.29,-.3,-.2,-.48,0,-.5);bi.bezierCurveTo(.2,-.48,.29,-.3,.22,-.05);bi.lineTo(.15,.18);bi.lineTo(.08,.33);bi.lineTo(-.08,.33);bi.lineTo(-.15,.18);bi.closePath();const tl=new Te(new Jn(bi),Un);tl.position.set(en/2+.05,-1.14,.4);tl.rotation.z=Math.PI;tl.scale.setScalar(.72);yt.add(tl);[-.09,.09].forEach(i=>{const e=new Te(new ei(.045,16),new yi({color:2495243}));e.position.set(en/2+.05+i,-1.22,.415),yt.add(e)});const P1=new at({color:12045011,roughness:.84,metalness:0}),nl=new Te(new Ot(15,15,1.1,64),P1);nl.rotation.x=Math.PI/2;nl.position.z=-1.4;nl.receiveShadow=!0;Mt.add(nl);const L1=Ei((i,e)=>{const t=i.createRadialGradient(e*.42,e*.4,20,e*.5,e*.5,e*.76);t.addColorStop(0,"#FAEBD7"),t.addColorStop(.58,"#ead2ad"),t.addColorStop(1,"#c49d67"),i.fillStyle=t,i.fillRect(0,0,e,e),Rr(i,e,.08),i.globalCompositeOperation="multiply",[[.34,.42,.28],[.68,.64,.24],[.72,.27,.18]].forEach((r,s)=>{const o=i.createRadialGradient(e*r[0],e*r[1],10,e*r[0],e*r[1],e*r[2]);o.addColorStop(0,`rgba(${s===1?"145,105,54":"154,116,67"},.18)`),o.addColorStop(1,"rgba(154,116,67,0)"),i.fillStyle=o,i.fillRect(0,0,e,e)}),i.globalCompositeOperation="source-over",i.strokeStyle="rgba(41,30,20,.24)",i.lineWidth=1;for(let r=70;r<e;r+=70)i.beginPath(),i.moveTo(r,0),i.lineTo(r,e),i.stroke(),i.beginPath(),i.moveTo(0,r),i.lineTo(e,r),i.stroke();i.strokeStyle="rgba(39,25,15,.82)",i.fillStyle="rgba(54,39,23,.34)",i.lineWidth=9,i.beginPath(),i.moveTo(0,e*.24),i.bezierCurveTo(e*.14,e*.18,e*.17,e*.35,e*.29,e*.3),i.bezierCurveTo(e*.4,e*.25,e*.37,e*.08,e*.53,0),i.lineTo(0,0),i.closePath(),i.fill(),i.stroke(),i.beginPath(),i.moveTo(e,e*.62),i.bezierCurveTo(e*.83,e*.55,e*.83,e*.76,e*.68,e*.72),i.bezierCurveTo(e*.6,e*.69,e*.58,e*.9,e*.48,e),i.lineTo(e,e),i.closePath(),i.fill(),i.stroke(),Js(i,e*.17,e*.76,e*.11),vu(i,e,3),mm(i,e*.82,e*.22,e*.12,.38),i.strokeStyle="rgba(112,24,17,.72)",i.lineWidth=6,i.setLineDash([16,12]),i.beginPath(),i.moveTo(e*.14,e*.58),i.bezierCurveTo(e*.31,e*.38,e*.5,e*.76,e*.74,e*.47),i.bezierCurveTo(e*.82,e*.37,e*.86,e*.31,e*.9,e*.27),i.stroke(),i.setLineDash([]),i.strokeStyle="rgba(36,28,21,.5)",i.lineWidth=4;for(let r=18;r<66;r+=12)i.beginPath(),i.arc(e*.62,e*.5,r,.35,Math.PI*1.85),i.stroke();i.fillStyle="rgba(38,25,16,.76)",i.font="italic 55px Georgia",i.textAlign="center",i.fillText("Mare Incognitum",e*.55,e*.18),i.font="italic 24px Georgia",i.fillText("Dead Man’s Passage",e*.72,e*.48),i.fillText("Isla del Cuervo",e*.37,e*.63),i.strokeStyle="rgba(32,25,19,.58)",i.lineWidth=8,i.beginPath(),i.moveTo(e*.42,e*.33),i.bezierCurveTo(e*.47,e*.25,e*.5,e*.42,e*.55,e*.32),i.bezierCurveTo(e*.6,e*.23,e*.62,e*.36,e*.65,e*.3),i.stroke(),i.beginPath(),i.arc(e*.655,e*.285,16,0,Math.PI*2),i.stroke();const n=i.createRadialGradient(e/2,e/2,e*.4,e/2,e/2,e*.72);n.addColorStop(.62,"rgba(87,52,22,0)"),n.addColorStop(1,"rgba(87,52,22,.24)"),i.fillStyle=n,i.fillRect(0,0,e,e)}),D1=new at({map:L1,color:16178881,roughness:.98,side:Xt}),il=new Te(new Wn(22,14,20,12),D1);il.position.set(0,0,-.81);il.rotation.z=.055;il.receiveShadow=!0;Mt.add(il);function rl(i,e,t,n,r,s,o){const a=Ei((c,u)=>{c.fillStyle=o,c.fillRect(0,0,u,u),Rr(c,u,.1),c.strokeStyle="rgba(77,43,19,.26)",c.lineWidth=8,c.strokeRect(24,24,u-48,u-48),c.fillStyle="rgba(65,39,20,.6)",c.font="italic 47px Georgia",c.textAlign="center",c.fillText(i,u/2,125),c.font="italic 25px Georgia";for(let h=0;h<7;h++)c.fillText("—  ———  ——  —————  —",u/2,230+h*70);Js(c,u*.77,u*.75,u*.1)},512),l=new Te(new Wn(n,r,4,3),new at({map:a,roughness:1,side:Xt}));l.position.set(e,t,-.63),l.rotation.z=s,l.castShadow=l.receiveShadow=!0,Mt.add(l)}rl("Port Royal",-4.6,2.5,4.2,2.5,-.17,"#F0E2C8");rl("Cape of Storms",4.8,2.7,4.5,2.7,.13,"#ead7b7");rl("Admiralty Chart",-4.8,-2.2,4.1,2.35,.1,"#dcc49b");rl("Letter of Marque",4.7,-2.3,4,2.4,-.12,"#F0E2C8");const cs=new at({color:2825492,roughness:.35,metalness:.72});new at({color:4990740,roughness:.72});const U1=new at({color:7543569,roughness:.58}),I1=Ei((i,e)=>{const t=i.createRadialGradient(e*.44,e*.38,10,e*.5,e*.5,e*.52);t.addColorStop(0,"#d8c18a"),t.addColorStop(.72,"#9b7a48"),t.addColorStop(1,"#3b2919"),i.fillStyle=t,i.fillRect(0,0,e,e),Rr(i,e,.12),i.translate(e/2,e/2),i.strokeStyle="rgba(36,25,16,.72)",i.fillStyle="rgba(36,25,16,.76)";for(let n=0;n<72;n++){const r=n%6===0,s=e*(r?.36:.385),o=e*.42,a=n/72*Math.PI*2;i.lineWidth=r?5:2,i.beginPath(),i.moveTo(Math.cos(a)*s,Math.sin(a)*s),i.lineTo(Math.cos(a)*o,Math.sin(a)*o),i.stroke()}i.textAlign="center",i.textBaseline="middle",i.font=`700 ${e*.085}px Georgia`,[["N",0,-.31],["E",.31,0],["S",0,.31],["W",-.31,0]].forEach(n=>i.fillText(n[0],n[1]*e,n[2]*e)),i.strokeStyle="rgba(103,25,18,.7)",i.lineWidth=5,i.beginPath(),i.arc(0,0,e*.25,0,Math.PI*2),i.stroke()},1024);function N1(){const i=new ln,e=new Te(new Ot(1.35,1.42,.18,64),Un);e.rotation.x=Math.PI/2,e.castShadow=!0,i.add(e);const t=new Te(new ei(1.18,64),new at({map:I1,color:14073745,roughness:.88}));t.position.z=.11,i.add(t),[1.18,.93].forEach((c,u)=>{const h=new Te(new Cs(c,.035,12,64),u?cs:Un);h.position.z=.16,i.add(h)});const n=new ln;n.position.z=.18;for(let c=0;c<8;c++){const u=new Gn;u.moveTo(0,c%2?-.35:-.82),u.lineTo(-.09,0),u.lineTo(.09,0),u.closePath();const h=new Te(new Jn(u),c%2?cs:Un);h.rotation.z=c*Math.PI/4,n.add(h)}i.add(n);const r=new ln;r.position.z=.225,r.rotation.z=.28;const s=new Gn;s.moveTo(0,.82),s.lineTo(-.085,0),s.lineTo(.085,0),s.closePath();const o=new Gn;o.moveTo(0,-.72),o.lineTo(-.075,0),o.lineTo(.075,0),o.closePath(),r.add(new Te(new Jn(s),new at({color:8526870,metalness:.32,roughness:.46})),new Te(new Jn(o),cs)),i.add(r);const a=new Te(new Ot(.095,.095,.05,20),Un);a.rotation.x=Math.PI/2,a.position.z=.25,i.add(a);const l=new Te(new ei(1.12,64),new Xa({color:13362399,transparent:!0,opacity:.11,roughness:.08,metalness:0,clearcoat:.6,clearcoatRoughness:.12,depthWrite:!1}));l.position.z=.29,i.add(l);for(let c=0;c<4;c++){const u=c*Math.PI/2,h=new Te(new Ar(.22,.34,.09),Un);h.position.set(Math.cos(u)*1.38,Math.sin(u)*1.38,.04),h.rotation.z=u,i.add(h)}return i.userData.needle=r,i.userData.rose=n,i.userData.face=t,i.userData.glass=l,i.position.set(-7.65,-4.15,-.72),i.rotation.z=-.28,i.scale.setScalar(.78),i}const fi=N1();Mt.add(fi);function O1(i,e,t,n=1){const r=new Te(new Ot(.3*n,.3*n,.075,28),Un);r.rotation.x=Math.PI/2,r.position.set(i,e,t),r.rotation.y=Math.random()*.15,r.rotation.z=Math.random()*Math.PI,r.castShadow=!0,Mt.add(r)}[[-4.7,2.8,-.52,1],[-4.2,3.15,-.48,.8],[-4.55,3.35,-.42,.75],[5.8,-2.9,-.51,.9],[6.3,-2.6,-.52,.7]].forEach(i=>O1(...i));function F1(){const i=new ln,e=new at({color:10121524,roughness:.54,metalness:.72}),t=new at({color:2636588,roughness:.9,metalness:.08}),n=new at({color:2758416,roughness:.94,metalness:0,bumpMap:yu,bumpScale:.04}),r=new Xa({color:12050911,transparent:!0,opacity:.34,roughness:.05,metalness:0,clearcoat:1,clearcoatRoughness:.04,depthWrite:!1}),s=new Te(new Ot(.25,.34,2.15,36),n);s.castShadow=!0,s.receiveShadow=!0,s.position.y=-.42,i.add(s);const o=new Te(new Ot(.2,.27,1.55,36),e);o.castShadow=!0,o.position.y=.92,i.add(o);const a=new Te(new Ot(.16,.2,1.12,36),e);a.castShadow=!0,a.position.y=1.85,i.add(a);const l=new Te(new Ot(.22,.18,.38,36),cs);l.position.y=-1.72,l.castShadow=!0,i.add(l);const c=new Te(new Ot(.43,.34,.38,36),e);c.position.y=2.55,c.castShadow=!0,i.add(c),[-1.46,-.05,.74,1.48,2.35].forEach((_,g)=>{const p=new Te(new Cs(g===4?.42:g===0?.24:.29,.035,12,42),g===2?t:e);p.rotation.x=Math.PI/2,p.position.y=_,p.castShadow=!0,i.add(p)});const u=new Te(new ei(.35,42),r);u.position.y=2.76,u.rotation.x=Math.PI/2,i.add(u);const h=new Te(new ei(.14,28),r);h.position.y=-1.93,h.rotation.x=-Math.PI/2,i.add(h);for(let _=0;_<10;_++){const g=new Xs(new mt().setFromPoints([new L(-.18+Math.random()*.36,-1.25+Math.random()*.85,.255),new L(-.15+Math.random()*.3,-1.18+Math.random()*.85,.265)]),new ss({color:11569758,transparent:!0,opacity:.35}));i.add(g)}const f=new Ha([new L(-.34,-1.35,.05),new L(-.62,-.42,.1),new L(-.45,.55,.08),new L(-.2,1.12,.04)]),d=new Te(new vo(f,42,.025,8,!1),new at({color:2101259,roughness:.94}));return d.castShadow=!0,i.add(d),i.position.set(6.2,2.35,-.2),i.rotation.set(.18,.03,-.9),i.scale.setScalar(1.08),i}const Eu=F1();Mt.add(Eu);function B1(){const i=new ln,e=new at({color:3877922,roughness:.72,metalness:.02}),t=new Xa({color:1120536,roughness:.9,metalness:0,side:Xt,transparent:!0,opacity:.97,sheen:.28,sheenColor:new Ne(3234648)}),n=new Ha([new L(0,-1.62,.08),new L(.025,-.65,.09),new L(.09,.4,.11),new L(.16,1.35,.13),new L(.08,2.22,.14)]),r=new Te(new vo(n,56,.031,12,!1),e);r.castShadow=!0,i.add(r);function s(p){const m=new Gn;m.moveTo(p*.015,-.05);const M=[];for(let y=0;y<=15;y++){const A=y/15,C=-.02+A*2.22,b=Math.sin(Math.pow(A,.82)*Math.PI)*(.5+(p>0?.07:0)),P=1-A*.2,U=y===4||y===9||y===12?.08:0;M.push([p*(.09+b*P-U),C])}M.forEach((y,A)=>{m.lineTo(y[0],y[1]),(A===4||A===9||A===12)&&m.lineTo(y[0]*.76,y[1]+.045)}),m.lineTo(p*.04,2.25),m.lineTo(p*.015,-.05),m.closePath();const x=new Te(new Jn(m),t);return x.position.z=.045,x.castShadow=!0,x}i.add(s(-1),s(1));const o=new ss({color:7637890,transparent:!0,opacity:.34});for(const p of[-1,1])for(let m=1;m<15;m++){const M=m/15,x=M*2.15,y=(.09+Math.sin(Math.pow(M,.82)*Math.PI)*(.46+(p>0?.06:0)))*(1-M*.16),A=[new L(.025*p,x,.07),new L(y*p,x+(p>0?.1:.075),.07)];i.add(new Xs(new mt().setFromPoints(A),o))}const a=new Xs(new mt().setFromPoints(n.getPoints(42).map(p=>new L(p.x-.012,p.y,p.z+.025))),new ss({color:9402713,transparent:!0,opacity:.46}));i.add(a);const l=new Te(new Ot(.075,.09,.24,16),Un);l.rotation.x=Math.PI/2,l.position.set(0,-1.51,.09),i.add(l);const c=new at({color:8068888,roughness:.92});for(let p=0;p<4;p++){const m=new Te(new Cs(.073,.012,7,22),c);m.rotation.x=Math.PI/2,m.position.set(0,-1.35+p*.035,.09),i.add(m)}const u=new Te(new io(.055,14,10),new at({color:2382679,roughness:.55,metalness:.08}));u.position.set(.105,-1.29,.09),i.add(u);const h=new Gn;h.moveTo(-.105,-1.55),h.quadraticCurveTo(-.12,-1.76,-.055,-1.9),h.lineTo(0,-2.1),h.lineTo(.055,-1.9),h.quadraticCurveTo(.12,-1.76,.105,-1.55),h.closePath();const f=new Te(new Jn(h),Un);f.position.z=.1,f.castShadow=!0,i.add(f);const d=new Xs(new mt().setFromPoints([new L(0,-1.69,.115),new L(0,-2.055,.115)]),new ss({color:2824720}));i.add(d);const _=new Te(new ei(.026,16),new yi({color:2824720}));_.position.set(0,-1.72,.118),i.add(_);const g=new Te(new io(.035,12,8),new yi({color:1511951}));return g.position.set(0,-2.095,.11),i.add(g),i.position.set(6.65,-.65,-.32),i.rotation.set(.035,0,-.43),i.scale.setScalar(.9),i}Mt.add(B1());function z1(){const i=new ln,e=new Te(new Ot(.65,.78,.25,24),cs);e.rotation.x=Math.PI/2,i.add(e);const t=e.clone();t.scale.set(.72,.72,.72),t.position.z=2.15,i.add(t);for(let h=0;h<4;h++){const f=h*Math.PI/2,d=new Te(new Ot(.035,.035,2.1,8),cs);d.position.set(Math.cos(f)*.55,Math.sin(f)*.55,1.05),d.rotation.x=Math.PI/2,i.add(d)}const n=new Xa({color:16164678,transparent:!0,opacity:.18,roughness:.15,side:Xt}),r=new Te(new Ot(.54,.6,1.85,24,1,!0),n);r.rotation.x=Math.PI/2,r.position.z=1.04,i.add(r);const s=new yi({color:16753199}),o=new Te(new io(.16,16,12),s);o.scale.y=1.7,o.position.z=.85,i.add(o);const a=Ei((h,f)=>{const d=h.createRadialGradient(f/2,f/2,0,f/2,f/2,f*.48);d.addColorStop(0,"rgba(255,228,150,.95)"),d.addColorStop(.28,"rgba(255,154,58,.42)"),d.addColorStop(1,"rgba(255,128,32,0)"),h.fillStyle=d,h.fillRect(0,0,f,f)},256),l=new qy(new sp({map:a,transparent:!0,opacity:.22,depthWrite:!1,blending:us,toneMapped:!1}));l.position.z=.9,l.scale.set(1.25,1.25,1),i.add(l);const c=new Te(new ei(2.4,48),new yi({color:16757850,transparent:!0,opacity:.08,depthWrite:!1,blending:us,toneMapped:!1}));c.position.z=.02,c.scale.set(1.2,.78,1),i.add(c);const u=new $u(16758894,1.15,6.2,2.4);return u.position.z=1,i.add(u),i.userData={flame:o,flameAura:l,lightPool:c,glass:r},i.position.set(-6.15,3.65,-.45),i.scale.setScalar(1.16),i}const Ii=z1();Mt.add(Ii);function k1(){const i=[];for(let n=0;n<26;n++){const r=n/25*Math.PI*2.2;i.push(new L(-5.8+Math.cos(r)*(1.7+n*.018),-.4+Math.sin(r)*1.2,-.45+n*.002))}const e=new Ha(i),t=new Te(new vo(e,90,.09,8,!1),new at({color:8413755,roughness:1}));t.castShadow=!0,Mt.add(t)}k1();const sl=new Te(new Ot(.48,.52,.12,32),U1);sl.rotation.x=Math.PI/2;sl.position.set(5.45,-3.82,-.35);sl.castShadow=!0;Mt.add(sl);const Rm=new Te(new Cs(.23,.045,8,24),new at({color:4722696,roughness:.7}));Rm.position.set(5.45,-3.82,-.26);Mt.add(Rm);function V1(i){return Ei((e,t)=>{e.fillStyle="#F0E2C8",e.fillRect(0,0,t,t),Rr(e,t,.07),e.fillStyle="rgba(58,39,22,.72)",e.font="italic 64px Georgia",e.textAlign="center",Es(e,i,70,180,t-140,78),e.strokeStyle="rgba(92,56,30,.55)",e.lineWidth=13,e.beginPath(),e.moveTo(t*.7,t*.72),e.lineTo(t*.82,t*.84),e.moveTo(t*.82,t*.72),e.lineTo(t*.7,t*.84),e.stroke()},512)}[["Trust the northern star",-4.7,-2.15,-.45,-.22],["To be continued…",5,-3.75,-.44,.16]].forEach(i=>{const e=new Te(new Wn(2.3,1.45,5,4),new at({map:V1(i[0]),roughness:1,side:Xt}));e.position.set(i[1],i[2],i[3]),e.rotation.z=i[4],e.castShadow=e.receiveShadow=!0,Mt.add(e)});const bu=new OM(16120831,1.12);Gt.add(bu);const ma=new DM(15398911,14215146,1.48);Gt.add(ma);const Ti=new IM(16775400,72,48,.76,.9,1);Ti.position.set(-9,6,16);Ti.target.position.set(1.6,-.2,0);Ti.castShadow=!0;Ti.shadow.mapSize.set(fo?2048:1024,fo?2048:1024);Ti.shadow.bias=-2e-4;Gt.add(Ti,Ti.target);const Fa=new $u(15398911,22,28,2);Fa.position.set(8,4,7);Gt.add(Fa);const Ba=new $u(13627135,14,26,2);Ba.position.set(-8,3,6);Gt.add(Ba);let wu=72,Pm=1.05,Lm=.22,Dm=.08;const cc=[{name:"Morning",background:9400904,fog:9400904,fogDensity:ut?.005:.003,exposure:1.12,ambient:16120831,ambientIntensity:1.12,hemiSky:15398911,hemiGround:14215146,hemiIntensity:1.48,key:16775400,keyIntensity:72,fill:15398911,fillIntensity:22,rim:13627135,rimIntensity:14,lantern:1.05,lanternAura:.22,lanternPool:.08,flame:16753199},{name:"Noon",background:11913161,fog:11913161,fogDensity:ut?.0038:.0022,exposure:1.24,ambient:16777215,ambientIntensity:1.55,hemiSky:16186367,hemiGround:14865853,hemiIntensity:1.82,key:16777215,keyIntensity:90,fill:16777215,fillIntensity:30,rim:15398911,rimIntensity:12,lantern:.72,lanternAura:.08,lanternPool:.03,flame:16761707},{name:"Night",background:1515571,fog:1515571,fogDensity:ut?.007:.0048,exposure:.78,ambient:5464184,ambientIntensity:.48,hemiSky:2504796,hemiGround:1314058,hemiIntensity:.68,key:9353215,keyIntensity:28,fill:3229035,fillIntensity:5,rim:11457023,rimIntensity:20,lantern:3.2,lanternAura:.72,lanternPool:.34,flame:16748324}];let Au=0;function Um(i,{notify:e=!1}={}){var r,s;Au=(i+cc.length)%cc.length;const t=cc[Au];Gt.background.setHex(t.background),Gt.fog.color.setHex(t.fog),Gt.fog.density=t.fogDensity,An.toneMappingExposure=t.exposure,bu.color.setHex(t.ambient),bu.intensity=t.ambientIntensity,ma.color.setHex(t.hemiSky),ma.groundColor.setHex(t.hemiGround),ma.intensity=t.hemiIntensity,Ti.color.setHex(t.key),wu=t.keyIntensity,Fa.color.setHex(t.fill),Fa.intensity=t.fillIntensity,Ba.color.setHex(t.rim),Ba.intensity=t.rimIntensity,Pm=t.lantern,Lm=t.lanternAura,Dm=t.lanternPool,Ii.userData.flame.material.color.setHex(t.flame);const n=(r=ie.settings)==null?void 0:r.querySelector("span");n&&(n.textContent=t.name),(s=ie.settings)==null||s.classList.toggle("active",t.name==="Night"),e&&dt(`${t.name} view`)}Um(0);function Im(i,e,t,n){const r=new Ot(.15,2.5,14,32,1,!0),s=new dn({transparent:!0,depthWrite:!1,blending:us,side:Xt,uniforms:{color:{value:new Ne(16055295)}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 color;varying vec2 vUv;void main(){float a=sin(vUv.y*3.14159)*smoothstep(0.,.18,vUv.x)*smoothstep(0.,.18,1.-vUv.x);gl_FragColor=vec4(color,a*.024);}"}),o=new Te(r,s);o.position.set(i,e,8),o.rotation.set(.55,t,.15),o.scale.setScalar(n),Gt.add(o)}Im(-6,-2,-.5,.62);Im(-3,1,-.2,.42);const gh=ut?500:1300,vh=new mt,_a=new Float32Array(gh*3),Nm=new Float32Array(gh);for(let i=0;i<gh;i++)_a[i*3]=(Math.random()-.5)*24,_a[i*3+1]=(Math.random()-.5)*16,_a[i*3+2]=Math.random()*15-2,Nm[i]=Math.random();vh.setAttribute("position",new Tn(_a,3));vh.setAttribute("aSeed",new Tn(Nm,1));const Om=new dn({transparent:!0,depthWrite:!1,blending:us,uniforms:{uTime:{value:0}},vertexShader:"uniform float uTime;attribute float aSeed;varying float vAlpha;void main(){vec3 p=position;p.y+=sin(uTime*.18+aSeed*20.)*.5;p.x+=cos(uTime*.12+aSeed*30.)*.35;vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=(2.0+aSeed*3.)*(10./-mv.z);gl_Position=projectionMatrix*mv;vAlpha=.07+aSeed*.16;}",fragmentShader:"varying float vAlpha;void main(){float d=distance(gl_PointCoord,vec2(.5));float a=smoothstep(.5,0.,d)*vAlpha;gl_FragColor=vec4(.9,.97,1.,a);}"});Gt.add(new Zy(vh,Om));let Ke=0,jt=!1,jn=!1,Ws=null,ga=null,Wi=!1,Yt=null,zi="right";const Lt={focusX:en/2,focusY:0,active:!0},G1=Zi.map(i=>i.chapter);function So(){return zi==="left"&&Ke>0?{pageIndex:Ke-1,side:"back",label:"Left page"}:{pageIndex:Ke,side:"front",label:"Right page"}}function ol(){ie.current.textContent=String(Ke+1).padStart(2,"0"),ie.chapter.textContent=String(Ke+1).padStart(2,"0"),ie.title.textContent=G1[Ke],ie.total.textContent=String(Cn).padStart(2,"0"),ie.prev.disabled=Ke===0,ie.next.disabled=Ke===Cn-1,ie.chapterDots.forEach((i,e)=>i.classList.toggle("active",e===Ke)),Bm(),Eh()}function al(){ga&&(clearTimeout(ga),ga=null)}function xh(){var e,t,n;const i=(e=ie.sequence)==null?void 0:e.querySelector("span");i&&(i.textContent=Wi?"Play":"Pause"),(t=ie.sequence)==null||t.setAttribute("aria-pressed",String(Wi)),(n=ie.sequence)==null||n.classList.toggle("active",Wi)}function ll({notify:i=!1}={}){Wi=!0,al(),Yt==null||Yt.pause(),xh(),i&&dt("Sequence paused")}function Fm({notify:i=!1}={}){Wi=!1,xh(),Yt!=null&&Yt.paused()?Yt.resume():jt&&!jn&&yh(),i&&dt("Sequence playing")}function yh(){al(),!Wi&&Ke<Cn-1&&(ga=setTimeout(()=>$i(Ke+1,!0),2400))}function H1(){Yt!=null&&Yt.paused()&&(Yt.kill(),Yt=null,jn=!1,Lt.active=!1,document.documentElement.classList.remove("is-opening"),Cu(Ke),ol())}function Bm(){var e,t;zi==="left"&&Ke===0&&(zi="right");const i=(e=ie.pov)==null?void 0:e.querySelector("span");i&&(i.textContent=zi==="left"?"Left POV":"Right POV"),(t=ie.pov)==null||t.classList.toggle("active",zi==="left")}function W1(i,{notify:e=!1}={}){if(i==="left"&&Ke===0){dt("No left page yet");return}zi=i,ll();const t=zi==="left";Pt.to(tt.position,{...t?Vn.leftImageZoom:Vn.spreadZoom,duration:.65,ease:"sine.inOut"}),Pt.to(tt,{fov:Ts.close,duration:.65,ease:"sine.inOut",onUpdate:()=>tt.updateProjectionMatrix()}),Pt.to(Lt,{focusX:t?vm:xm,focusY:t?ym:Mm,duration:.65,ease:"sine.inOut"}),Bm(),Eh(),e&&dt(`${So().label} view`)}function cl(i,e){i.userData.progress=e,i.rotation.y=-e*Math.PI,i.userData.frontMat.uniforms.uTurn.value=e,i.userData.backMat.uniforms.uTurn.value=e}function ul(i){return .13+(Cn-i)*.0038}function zm(i){return .24+i*.0038}function Cu(i,e=null,t=[]){const n=new Set(t.filter(r=>r>=0&&r<Cn));ni.forEach((r,s)=>{if(r===e){r.visible=!0;return}const o=s<i;cl(r,o?1:0),r.position.z=o?zm(s):ul(s),r.renderOrder=o?20+s:0,o&&(r.userData.backMat.uniforms.uReveal.value=1),s===i&&(r.userData.frontMat.uniforms.uReveal.value=1),r.visible=s===i||s===i-1||n.has(s)}),Sh()}function X1(){ni.forEach((i,e)=>{Pt.killTweensOf(i.position),cl(i,0),i.position.z=ul(e),i.renderOrder=0,i.userData.frontMat.uniforms.uReveal.value=e===0?1:0,i.userData.backMat.uniforms.uReveal.value=0,i.visible=e===0}),Sh(),Ke=0,ol()}function $i(i,e=!1){if(e||al(),!jt||(e||H1(),i=Math.max(0,Math.min(Cn-1,i)),i===Ke||jn))return;jn=!0;const t=i>Ke,n=ni[t?Ke:i],r=t?1:0;Cu(t?i:Ke,n,[Ke-1,Ke,i-1,i]),n.visible=!0,n.renderOrder=100;const s=t?zm(n.userData.index):ul(n.userData.index),o={p:n.userData.progress},a=Pe?.42:1.05,l=Pe?.28:.72,c=Pe?.06:.22;if(t){const m=n.userData.backMat.uniforms.uReveal,M=ni[i].userData.frontMat.uniforms.uReveal;Pt.killTweensOf(m),Pt.killTweensOf(M),Pt.fromTo(m,{value:0},{value:1,duration:a,delay:Pe?.12:.48,ease:"power2.out"}),Pt.fromTo(M,{value:0},{value:1,duration:l,delay:c,ease:"power2.out"})}else{const m=n.userData.frontMat.uniforms.uReveal;Pt.killTweensOf(m),Pt.fromTo(m,{value:0},{value:1,duration:l,delay:c,ease:"power2.out"})}Pt.fromTo(".light-leak",{opacity:.055},{opacity:.14,duration:.5,yoyo:!0,repeat:1,ease:"sine.inOut"});const u=Pe?.2:1.65,h=Pe?.08:1.55,f=Pe?.45:1.85,d=h+f+(Pe?0:.18),_=Pe?.2:1.85,g=Pe?0:2.4,p=Pe?.3:2.75;Yt=Pt.timeline({onComplete(){Yt=null,n.userData.progress=r,Ke=i,Cu(Ke),jn=!1,ol(),e&&yh()}}).to(tt.position,{...Vn.flipWide,duration:u,ease:"sine.inOut"},0).to(tt,{fov:Ts.normal,duration:u,ease:"sine.inOut",onUpdate:()=>tt.updateProjectionMatrix()},0).to(Lt,{focusY:0,duration:u,ease:"sine.inOut"},0).to(o,{p:r,duration:f,ease:"power2.inOut",onUpdate(){cl(n,o.p)}},h).to(n.position,{z:s,duration:f,ease:"power2.inOut"},h).to(tt.position,{...Vn.pageTurn(t),duration:f*.78,ease:"sine.inOut"},h).to(tt.position,{...Vn.leftImageZoom,duration:_,ease:"sine.inOut"},d).to(tt,{fov:Ts.close,duration:_,ease:"sine.inOut",onUpdate:()=>tt.updateProjectionMatrix()},d).to(Lt,{focusX:vm,duration:_,ease:"sine.inOut"},d).to(Lt,{focusY:ym,duration:_,ease:"sine.inOut"},d).to(tt.position,{...Vn.spreadZoom,duration:p,ease:"sine.inOut"},d+_+g).to(Lt,{focusX:xm,duration:p,ease:"sine.inOut"},d+_+g).to(Lt,{focusY:Mm,duration:p,ease:"sine.inOut"},d+_+g).to(Mt.rotation,{z:t?-.055:-.005,duration:f*.65,yoyo:!0,repeat:1,ease:"sine.inOut"},h)}function Mh(){if(jt)return;jt=!0,document.documentElement.classList.remove("book-closed"),ie.enter&&(ie.enter.tabIndex=-1,ie.enter.setAttribute("aria-hidden","true"));const i=Pe?.7:2.35;document.documentElement.classList.add("is-opening");const e=Pt.timeline({delay:.8,defaults:{ease:"power3.inOut"},onComplete(){Yt=null,Lt.active=!1,document.documentElement.classList.remove("is-opening"),yh()}});Yt=e,p1(e,Vn.establish,Pe?.25:.72,0,"power2.out").to(tt.position,{...Vn.closed,duration:Pe?.35:1.05,ease:"power2.inOut"},Pe?.18:.42).to(tt,{fov:Ts.normal,duration:Pe?.35:1.05,ease:"power2.inOut",onUpdate:()=>tt.updateProjectionMatrix()},Pe?.18:.42).to(ri.rotation,{z:-.008,duration:1.05,ease:"sine.inOut"},0).to(yt.position,{z:.68,duration:Pe?.18:.48,ease:"power2.out"},Pe?.25:1.02).to(yt.rotation,{y:-.24,duration:Pe?.18:.48,ease:"power2.out"},Pe?.25:1.02).to(yt.rotation,{y:-Math.PI,duration:i,ease:"power3.inOut"},Pe?.42:1.42).to(Mt.position,{...Na.open,duration:i,ease:"power2.inOut"},Pe?.42:1.42).to(Lt,{focusX:Mu,duration:i*.85,ease:"power2.inOut"},Pe?.42:1.42).to(Lt,{focusY:Su,duration:i*.85,ease:"power2.inOut"},Pe?.42:1.42).to(tt.position,{...Vn.coverOpen,duration:i*.58,ease:"power2.inOut"},Pe?.42:1.42).to(tt.position,{...M1,duration:i*.82,ease:"sine.inOut"},Pe?.72:2.45).to(tt,{fov:Ts.close,duration:i*.82,ease:"sine.inOut",onUpdate:()=>tt.updateProjectionMatrix()},Pe?.72:2.45).to(Lt,{focusX:Mu,duration:Pe?.3:3.35,ease:"sine.inOut"},Pe?.82:2.72).to(Lt,{focusY:Su,duration:Pe?.3:3.35,ease:"sine.inOut"},Pe?.82:2.72).to(ni[Ke].userData.frontMat.uniforms.uReveal,{value:1,duration:1.25,ease:"power2.out"},Pe?.68:3.42).fromTo(".light-leak",{opacity:.05},{opacity:.16,duration:.55,yoyo:!0,repeat:1,ease:"sine.inOut"},Pe?.55:3.32).to(yt.position,{z:-.5,duration:Pe?.18:.6,ease:"back.out(1.2)"},Pe?1.12:3.8).set(ie.story,{visibility:"visible"},Pe?1.08:4.02).to(ie.story,{opacity:1,duration:.8},Pe?1.12:4.1)}function km(){if(!jt||jn)return;al(),jn=!0,Lt.active=!0,document.documentElement.classList.add("is-opening");const i=Pe?.65:2.05,e=ni.filter(n=>n.visible&&n.userData.progress>.001).map(n=>({page:n,state:{p:n.userData.progress}})),t=Pt.timeline({defaults:{ease:"power3.inOut"},onComplete(){X1(),jt=!1,jn=!1,document.documentElement.classList.remove("is-opening"),document.documentElement.classList.add("book-closed"),ie.enter&&(ie.enter.textContent="Reopen Book",ie.enter.tabIndex=0,ie.enter.setAttribute("aria-hidden","false")),ie.intro&&Pt.set(ie.intro,{opacity:1})}});e.forEach(({page:n,state:r})=>{n.visible=!0,n.renderOrder=90,t.to(r,{p:0,duration:Pe?.2:.78,ease:"power2.inOut",onUpdate(){cl(n,r.p)}},0),t.to(n.position,{z:ul(n.userData.index),duration:Pe?.2:.78,ease:"power2.inOut"},0)}),t.to(ie.story,{opacity:0,duration:.35},0).set(ie.story,{visibility:"hidden"},.36).to(yt.position,{z:.68,duration:Pe?.16:.45,ease:"power2.out"},.12).to(yt.rotation,{y:0,duration:i},Pe?.22:.42).to(Mt.position,{...Na.closed,duration:i,ease:"power2.inOut"},Pe?.22:.42).to(Lt,{focusX:en/2,duration:i*.82,ease:"power2.inOut"},Pe?.22:.42).to(Lt,{focusY:0,duration:i*.82,ease:"power2.inOut"},Pe?.22:.42).to(tt.position,{...Vn.closed,duration:i+.12,ease:"power2.inOut"},Pe?.22:.42).to(tt,{fov:Ts.normal,duration:i+.12,ease:"power2.inOut",onUpdate:()=>tt.updateProjectionMatrix()},Pe?.22:.42).to(yt.position,{z:.43,duration:Pe?.16:.5,ease:"back.out(1.15)"},Pe?.7:2.48)}var pd;(pd=ie.enter)==null||pd.addEventListener("click",Mh);ie.closeBook.addEventListener("click",km);ie.next.addEventListener("click",()=>$i(Ke+1));ie.prev.addEventListener("click",()=>$i(Ke-1));ie.chapterDots.slice(0,Cn).forEach((i,e)=>i.addEventListener("click",()=>$i(e)));const za=[],bs=Array.from({length:Cn},()=>({front:null,back:null}));function dt(i){ie.toast.textContent=i,Pt.killTweensOf(ie.toast),Pt.timeline().to(ie.toast,{opacity:1,y:0,duration:.25}).to(ie.toast,{opacity:0,y:-8,duration:.4,delay:1.5})}function Vm(i,e){return e==="back"?{x:120,y:165,w:780,h:430}:i===0?{x:132,y:225,w:750,h:390}:{x:122,y:190,w:780,h:445}}function q1(i,e){var r;const t=e==="front"?"frontVideoOverlay":"backVideoOverlay",n=i.userData[t];n&&(i.remove(n),n.geometry.dispose(),(r=n.material.map)==null||r.dispose(),n.material.dispose(),delete i.userData[t])}function To(i){i.muted=!0,i.defaultMuted=!0,i.volume=0,i.playsInline=!0,i.setAttribute("muted",""),i.setAttribute("playsinline","")}function Sh(){ni.forEach((i,e)=>{[["front",i.userData.progress<.995],["back",i.userData.progress>.005]].forEach(([t,n])=>{var o,a,l;const r=((a=(o=bs[e])==null?void 0:o[t])==null?void 0:a.type)==="video"?bs[e][t].image:null;if(!r)return;To(r);const s=jt&&i.visible&&n;s&&r.paused?(l=r.play)==null||l.call(r).catch(()=>{}):!s&&!r.paused&&r.pause()})})}function ud(i,e,t){const n=Vm(e,t);i.uniforms.uPhotoRect.value.set(n.x/1024,1-(n.y+n.h)/1024,(n.x+n.w)/1024,1-n.y/1024),i.uniforms.uPhotoProtect.value=1,i.uniforms.uPhotoBrightness.value=1.18}function Ru(i){var e;(e=i.userData.videoTexture)==null||e.dispose(),delete i.userData.videoTexture,i.uniforms.uUseVideo.value=0}function hd(i,e,t,n){Ru(i),To(e);const r=new $y(e);r.colorSpace=rn,r.minFilter=Jt,r.magFilter=Jt,r.generateMipmaps=!1;const s=Vm(t,n),o=e.videoWidth||e.width||s.w,a=e.videoHeight||e.height||s.h,l=o/a,c=s.w/s.h;let u=0,h=0,f=1,d=1;l<c?(f=l/c,u=(1-f)/2):l>c&&(d=c/l,h=(1-d)/2),i.uniforms.uVideoMap.value=r,i.uniforms.uVideoRect.value.set(s.x/1024,1-(s.y+s.h)/1024,(s.x+s.w)/1024,1-s.y/1024),i.uniforms.uVideoFit.value.set(u,h,u+f,h+d),i.uniforms.uUseVideo.value=1,i.userData.videoTexture=r}function Pu(i,e){if(i<0||i>=Cn)return!1;const t=ni[i],n=bs[i][e],r=(n==null?void 0:n.type)==="video",s=xu(Zi[i],e,i,r?null:(n==null?void 0:n.image)||null);return q1(t,e),e==="front"?(Ru(t.userData.frontMat),t.userData.frontMat.uniforms.map.value=s,t.userData.frontTexture.dispose(),t.userData.frontTexture=s,n?ud(t.userData.frontMat,i,e):t.userData.frontMat.uniforms.uPhotoProtect.value=0,r&&hd(t.userData.frontMat,n.image,i,e)):(Ru(t.userData.backMat),t.userData.backMat.uniforms.map.value=s,t.userData.backTexture.dispose(),t.userData.backTexture=s,n?ud(t.userData.backMat,i,e):t.userData.backMat.uniforms.uPhotoProtect.value=0,r&&hd(t.userData.backMat,n.image,i,e)),!0}function Y1(i){Pu(i,"front"),Pu(i,"back")}function Th(i,e,t,{notify:n=!0}={}){return jn?(n&&dt("Wait for the page to settle"),!1):e<0||e>=Cn?!1:(bs[e][t]=i,Pu(e,t),e===Ke&&document.querySelectorAll(".photo-thumb").forEach(r=>r.classList.toggle("active",r.dataset.url===i.url)),n&&dt(`${i.type==="video"?"Video":"Photo"} placed on ${t} of page ${e+1}`),!0)}function Z1(i){const{pageIndex:e,side:t}=So();Th(i,e,t)}function $1(i){if(jn){dt("Wait for the page to settle");return}const e=[];for(let s=0;s<Cn;s++)e.push({pageIndex:s,side:"front"},{pageIndex:s,side:"back"});const t=e.reduce((s,o,a)=>bs[o.pageIndex][o.side]?a:s,-1),n=e.slice(t+1).filter(s=>!bs[s.pageIndex][s.side]),r=i.slice(0,n.length).filter((s,o)=>{const{pageIndex:a,side:l}=n[o];return Th(s,a,l,{notify:!1})}).length;if(r>0){document.querySelectorAll(".photo-thumb").forEach(l=>l.classList.toggle("active",l.dataset.url===i[0].url));const s=n[0].pageIndex+1,o=n[r-1].pageIndex+1,a=r===1?`Photo placed in empty frame on page ${s}`:`${r} photos placed in empty frames on pages ${s}-${o}`;dt(i.length>n.length?`${a}; ${i.length-n.length} kept in strip`:a)}else dt("Files added to strip; choose a POV to place them")}function Lu(i){var n;(n=ie.photoStrip.querySelector(".photo-strip__empty"))==null||n.remove();const e=document.createElement("button");e.type="button",e.className="photo-thumb",e.dataset.url=i.url,e.setAttribute("aria-label",`Use ${i.name} on the current page`);const t=i.type==="video"?document.createElement("video"):document.createElement("img");t.src=i.url,i.type==="video"&&To(t),t.preload="metadata",t.alt="",e.append(t),e.addEventListener("click",()=>{var r,s;i.type==="video"&&((s=(r=i.image).play)==null||s.call(r).catch(()=>{})),Z1(i)}),ie.photoStrip.append(e)}function Eh(){if(!ie.pageEditor)return;const i=So(),e=Zi[i.pageIndex];ie.editorTarget&&(ie.editorTarget.textContent=`Editing ${i.label} · page ${i.pageIndex+1}`),ie.editorTitle&&(ie.editorTitle.value=e.title),ie.editorCaption&&(ie.editorCaption.value=e.photo),ie.editorQuote&&(ie.editorQuote.value=e.quote)}let fd=null;function K1(){const{pageIndex:i}=So(),e=Zi[i];e.title=ie.editorTitle.value.trim()||`Page ${i+1}`,e.photo=ie.editorCaption.value.trim()||"Voyage Memory",e.quote=ie.editorQuote.value.trim()||" ",clearTimeout(fd),fd=setTimeout(()=>{Y1(i),dt(`Page ${i+1} text updated`)},180)}function J1(i,e){const t=URL.createObjectURL(i);if(i.type.startsWith("video/")){const n=document.createElement("video");n.src=t,To(n),n.loop=!0,n.autoplay=!0,n.preload="auto",n.crossOrigin="anonymous";let r=!1;const s=()=>{var o;r||(r=!0,(o=n.play)==null||o.call(n).catch(()=>{}),e({url:t,image:n,name:i.name,type:"video"}))};n.readyState>=1?s():n.addEventListener("loadedmetadata",s,{once:!0}),n.addEventListener("error",()=>{r||(r=!0,URL.revokeObjectURL(t),dt(`Could not read ${i.name}`))},{once:!0}),n.load()}else{const n=new Image;n.onload=()=>e({url:t,image:n,name:i.name,type:"image"}),n.onerror=()=>{URL.revokeObjectURL(t),dt(`Could not read ${i.name}`)},n.src=t}}var md;(md=ie.editPage)==null||md.addEventListener("click",()=>{const i=document.querySelector(".experience").classList.toggle("editing");ie.editPage.setAttribute("aria-expanded",String(i)),ie.editPage.classList.toggle("active",i),i&&ll({notify:!0}),Eh()});var _d;(_d=ie.editorClose)==null||_d.addEventListener("click",()=>{var i,e;document.querySelector(".experience").classList.remove("editing"),(i=ie.editPage)==null||i.setAttribute("aria-expanded","false"),(e=ie.editPage)==null||e.classList.remove("active")});var gd;(gd=ie.sequence)==null||gd.addEventListener("click",()=>Wi?Fm({notify:!0}):ll({notify:!0}));var vd;(vd=ie.pov)==null||vd.addEventListener("click",()=>W1(zi==="left"?"right":"left",{notify:!0}));let uc=!1,Kr=null;function j1(){return[{mimeType:'video/mp4;codecs="avc1.42E01E,mp4a.40.2"',extension:"mp4"},{mimeType:'video/mp4;codecs="avc1.42E01E"',extension:"mp4"},{mimeType:"video/mp4",extension:"mp4"},{mimeType:"video/webm;codecs=vp9",extension:"webm"},{mimeType:"video/webm;codecs=vp8",extension:"webm"},{mimeType:"video/webm",extension:"webm"}].find(e=>MediaRecorder.isTypeSupported(e.mimeType))}function Q1(i,e){const t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}let Ui=null,ra=null,ks=null;function eT(){var e;const i=window.AudioContext||window.webkitAudioContext;return i?(Ui||(Ui=new i),ra||(ra=Ui.createMediaElementSource(wt),ks=Ui.createMediaStreamDestination(),ra.connect(ks),ra.connect(Ui.destination)),(e=Ui.resume)==null||e.call(Ui).catch(()=>{}),(ks==null?void 0:ks.stream.getAudioTracks())||[]):[]}function tT(){var a,l;if(uc){(Kr==null?void 0:Kr.state)==="recording"&&Kr.stop();return}if(!Ss.captureStream||!window.MediaRecorder){dt("Video export not supported");return}const i=j1();if(!i){dt("No video encoder available");return}wt.currentTime=0,wt.muted=!1,Ka({withSound:!0});const e=Ss.captureStream(30),t=new MediaStream([...e.getVideoTracks(),...eT()]),n=[];let r;try{r=new MediaRecorder(t,{mimeType:i.mimeType,videoBitsPerSecond:1e7})}catch{dt("Could not start video export"),e.getTracks().forEach(c=>c.stop());return}t.getTracks().forEach(c=>c.addEventListener("ended",()=>dt("Recording stream ended"))),uc=!0,Kr=r,(a=ie.downloadVideo)==null||a.classList.add("active");const s=(l=ie.downloadVideo)==null?void 0:l.querySelector("span");s&&(s.textContent="Stop");const o=Wi;o&&Fm(),r.ondataavailable=c=>{var u;(u=c.data)!=null&&u.size&&n.push(c.data)},r.onerror=()=>dt("Recording stopped by browser"),r.onstop=()=>{var u;Kr=null,e.getTracks().forEach(h=>h.stop()),uc=!1,(u=ie.downloadVideo)==null||u.classList.remove("active"),s&&(s.textContent="Record Video"),o&&ll();const c=new Blob(n,{type:i.mimeType});Q1(c,`captains-journal.${i.extension}`),dt(i.extension==="mp4"?"MP4 downloaded":"MP4 unsupported; WebM downloaded")},r.start(1e3),dt(i.extension==="mp4"?"Recording MP4; tap Stop to download":"Recording WebM fallback; tap Stop to download")}var xd;(xd=ie.downloadVideo)==null||xd.addEventListener("click",()=>tT());[ie.editorTitle,ie.editorCaption,ie.editorQuote].forEach(i=>i==null?void 0:i.addEventListener("input",K1));var yd;(yd=ie.editorMedia)==null||yd.addEventListener("click",()=>ie.editorMediaInput.click());var Md;(Md=ie.editorMediaInput)==null||Md.addEventListener("change",()=>{var n;const i=(n=ie.editorMediaInput.files)==null?void 0:n[0];if(!i||!(i.type.startsWith("image/")||i.type.startsWith("video/"))){ie.editorMediaInput.value="";return}const{pageIndex:e,side:t}=So();J1(i,r=>{za.push(r),Lu(r),Th(r,e,t)}),ie.editorMediaInput.value=""});ie.addPhoto.addEventListener("click",()=>ie.photoInput.click());ie.photoInput.addEventListener("change",()=>{const i=[...ie.photoInput.files].filter(r=>r.type.startsWith("image/")||r.type.startsWith("video/"));if(!i.length){ie.photoInput.value="";return}const e=new Array(i.length);let t=0;const n=()=>{t++,t===i.length&&$1(e.filter(Boolean))};i.forEach((r,s)=>{const o=URL.createObjectURL(r);if(r.type.startsWith("video/")){const a=document.createElement("video");a.src=o,To(a),a.loop=!0,a.autoplay=!0,a.preload="auto",a.crossOrigin="anonymous";let l=!1;const c=()=>{var h;if(l)return;l=!0,(h=a.play)==null||h.call(a).catch(()=>{});const u={url:o,image:a,name:r.name,type:"video"};e[s]=u,za.push(u),Lu(u),n()};a.readyState>=1?c():a.addEventListener("loadedmetadata",c,{once:!0}),a.addEventListener("error",()=>{l||(l=!0,URL.revokeObjectURL(o),dt(`Could not read ${r.name}`),n())},{once:!0}),a.load()}else{const a=new Image;a.onload=()=>{const l={url:o,image:a,name:r.name,type:"image"};e[s]=l,za.push(l),Lu(l),n()},a.onerror=()=>{URL.revokeObjectURL(o),dt(`Could not read ${r.name}`),n()},a.src=o}}),ie.photoInput.value=""});addEventListener("beforeunload",()=>za.forEach(i=>URL.revokeObjectURL(i.url)));ie.settings.addEventListener("click",()=>Um(Au+1,{notify:!0}));var Sd;(Sd=ie.music)==null||Sd.addEventListener("click",()=>{wt.paused||wt.muted?(_u=!0,wt.muted=!1,Ka({withSound:!0}),dt("Music on")):(wt.pause(),dt("Music paused")),gu()});addEventListener("keydown",i=>{!jt&&["Enter"," "].includes(i.key)?Mh():jt&&i.key==="Escape"?km():jt&&i.key==="ArrowRight"?$i(Ke+1):jt&&i.key==="ArrowLeft"&&$i(Ke-1)});let hc=!1;addEventListener("wheel",i=>{!jt||hc||Math.abs(i.deltaY)<8||(hc=!0,$i(Ke+(i.deltaY>0?1:-1)),setTimeout(()=>hc=!1,1400))},{passive:!0});Ss.addEventListener("pointerdown",i=>{Ws=i.clientX,Ss.setPointerCapture(i.pointerId)});Ss.addEventListener("pointerup",i=>{jt&&Ws!==null&&Math.abs(i.clientX-Ws)>45&&$i(Ke+(i.clientX<Ws?1:-1)),Ws=null});const ts=new te,dd=new L;addEventListener("pointermove",i=>{ts.x=i.clientX/innerWidth*2-1,ts.y=i.clientY/innerHeight*2-1});addEventListener("resize",()=>{tt.aspect=innerWidth/innerHeight,tt.updateProjectionMatrix(),An.setPixelRatio(Math.min(devicePixelRatio,innerWidth<760?1.35:1.8)),An.setSize(innerWidth,innerHeight),Ja.setSize(innerWidth,innerHeight)});Pt.timeline({delay:.65}).to(ie.loader.querySelector("p"),{opacity:0,duration:.35}).to(ie.loader,{opacity:0,duration:.9,ease:"power2.inOut",onComplete:()=>{ie.loader.remove(),Ka({withSound:!0}),Mh()}},.25);const nT=new _p;Pe||Pt.to(Mt.rotation,{y:.012,x:-.018,duration:8,ease:"sine.inOut",repeat:-1,yoyo:!0});function Gm(){const i=nT.getElapsedTime();Om.uniforms.uTime.value=i,Sh();const e=Lt.active?0:jt?ts.x*.09:ts.x*.18,t=Lt.active?0:jt?ts.y*.07:ts.y*.13;dd.set(Mt.position.x+Lt.focusX+e,Mt.position.y+Lt.focusY-t,0),tt.lookAt(dd),Ti.intensity=(Lt.active?wu+6:wu)+Math.sin(i*.7)*.65;const n=1+Math.sin(i*8.3)*.075+Math.sin(i*13.7)*.045+Math.sin(i*23.1)*.025,r=Ii.children.find(s=>s.isPointLight);if(r&&(r.intensity=Pm*n),Ii.userData.flame&&(Ii.userData.flame.scale.set(.86+Math.sin(i*12.4)*.06,1.7+Math.sin(i*10.6)*.18,.86+Math.cos(i*9.2)*.05),Ii.userData.flameAura.material.opacity=Lm*n,Ii.userData.flameAura.scale.setScalar(1.12+.18*n),Ii.userData.lightPool.material.opacity=Dm*(.88+.2*n)),fi!=null&&fi.userData.needle){const s=i*(5.8+Math.sin(i*1.7)*2.4)+Math.sin(i*11.5)*.42+Math.sin(i*23.3)*.12;fi.userData.needle.rotation.z=s,fi.userData.rose.rotation.z=-s*.12+Math.sin(i*7.1)*.035,fi.userData.face.rotation.z=Math.sin(i*5.6)*.018,fi.userData.glass.material.opacity=.1+Math.abs(Math.sin(i*10.2))*.08,fi.position.z=-.72+Math.sin(i*18.5)*.012}Eu.rotation.x=.18+Math.sin(i*1.15)*.018,Eu.rotation.z=-.9+Math.sin(i*.85)*.012,fo?Ja.render():An.render(Gt,tt),requestAnimationFrame(Gm)}xh();ol();Gm();
