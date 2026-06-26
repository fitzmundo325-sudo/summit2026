import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import gsap from 'gsap';
import hygLogoUrl from '../assets/hyg-logo.png';

/**
 * THE ARCHIVE — cinematic, interactive WebGL scrapbook.
 * All visual textures are generated at runtime, keeping the project self-contained.
 */

const canvas = document.querySelector('#scene');
const ui = {
  loader: document.querySelector('.loader'), intro: document.querySelector('.intro'),
  enter: document.querySelector('.enter'), story: document.querySelector('.story-ui'),
  prev: document.querySelector('.control--prev'), next: document.querySelector('.control--next'),
  current: document.querySelector('.page-current'), total: document.querySelector('.page-total'), title: document.querySelector('.chapter__title'),
  chapter: document.querySelector('.chapter__index'), chapterDots: [...document.querySelectorAll('.chapter-rail li')],
  addPhoto: document.querySelector('.add-photo'), photoInput: document.querySelector('.photo-input'),
  photoStrip: document.querySelector('.photo-strip'), editPage: document.querySelector('.edit-page'),
  settings: document.querySelector('.settings-button'), closeBook: document.querySelector('.close-book'),
  toast: document.querySelector('.toast')
};

const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const compact = matchMedia('(max-width: 760px)').matches;
const highQuality = !compact && devicePixelRatio <= 2;
const scene = new THREE.Scene();
// Low antique morning light, kept dim enough to frame the book.
scene.background = new THREE.Color(0x8f7248);
scene.fog = new THREE.FogExp2(0x8f7248, compact ? 0.005 : 0.003);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: highQuality, alpha: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, compact ? 1.35 : 1.8));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;

const camera = new THREE.PerspectiveCamera(compact ? 40 : 32, innerWidth / innerHeight, 0.1, 80);
// Begin almost directly above the chart, then descend into the journal.
camera.position.set(compact ? -.7 : -1.05, compact ? .85 : .9, compact ? 18.4 : 16.8);
scene.add(camera);
const cameraFov = {
  normal: compact ? 40 : 32,
  close: compact ? 46 : 40
};

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
let bokeh;
if (highQuality) {
  bokeh = new BokehPass(scene, camera, { focus: 14.2, aperture: 0.00012, maxblur: 0.005 });
  composer.addPass(bokeh);
}

const world = new THREE.Group();
world.rotation.x = 0;
world.rotation.z = -0.018;
const worldPositions = {
  closed: compact ? { x: -2.45, y: 1.3 } : { x: -2.6, y: .25 },
  open: compact ? { x: 0, y: .65 } : { x: 0, y: 0 }
};
// Closed-book framing: offset the world so the single-width cover begins centered.
world.position.set(worldPositions.closed.x, worldPositions.closed.y, 0);
scene.add(world);

const cameraAngles = {
  closed: compact ? { x: -.35, y: .1, z: 16.1 } : { x: -.55, y: .18, z: 15.45 },
  establish: compact ? { x: -.7, y: .85, z: 18.4 } : { x: -1.05, y: .9, z: 16.8 },
  coverOpen: compact ? { x: .85, y: .05, z: 14.45 } : { x: 1.55, y: .35, z: 12.95 },
  imageZoom: compact ? { x: 0, y: 0, z: 7.35 } : { x: 0, y: 0, z: 4.95 },
  flipWide: compact ? { x: .12, y: .16, z: 17.35 } : { x: .12, y: .56, z: 16.35 },
  leftImageZoom: compact ? { x: 0, y: 0, z: 7.25 } : { x: 0, y: 0, z: 4.9 },
  spreadZoom: compact ? { x: 0, y: 0, z: 7.45 } : { x: 0, y: 0, z: 5.15 },
  pageTurn(forward = true) {
    if (compact) return { x: forward ? -.74 : .74, y: -.04, z: 15.15 };
    return { x: forward ? -1.65 : 2.0, y: .24, z: 13.65 };
  }
};

function moveCamera(timeline, angle, duration, at = 0, ease = 'power2.inOut') {
  return timeline.to(camera.position, { ...angle, duration, ease }, at);
}

// --- Materials and procedural texture helpers --------------------------------
const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
function canvasTexture(draw, size = 1024) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const ctx = c.getContext('2d'); draw(ctx, size);
  const texture = new THREE.CanvasTexture(c);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(8, maxAnisotropy);
  return texture;
}

function noise(ctx, size, alpha = 0.08) {
  const data = ctx.getImageData(0, 0, size, size);
  for (let i = 0; i < data.data.length; i += 4) {
    const n = Math.random() * 45 - 22;
    data.data[i] += n; data.data[i + 1] += n * .82; data.data[i + 2] += n * .55;
    data.data[i + 3] = Math.max(data.data[i + 3], alpha * 255);
  }
  ctx.putImageData(data, 0, 0);
}

function seededRandom(seed){
  let s=seed>>>0;
  return function(){s=(s*1664525+1013904223)>>>0;return s/4294967296}
}
function withSeededRandom(seed,draw){
  const nativeRandom=Math.random;
  Math.random=seededRandom(seed);
  try{return draw()}finally{Math.random=nativeRandom}
}

const BOOK_PAGE_COUNT = 50;
const PAGE_TEXTURE_SIZE = compact ? 512 : 640;

const basePageStories = [
  { chapter: 'The Journey Begins', date: '14 May · 1718', title: 'Beyond the Known Sea', quote: 'A brave heart is the truest compass when every chart has failed.', photo: 'THE BLACK GULL', tone: ['#435654','#c29a5c'] },
  { chapter: 'Dead Man’s Passage', date: '2 June · 1718', title: 'Through Devil’s Teeth', quote: 'We sailed where the rocks rose like fangs and the sea spoke in thunder.', photo: 'THE NARROW PASS', tone: ['#3f4d4a','#a98250'] },
  { chapter: 'The Sunken Isle', date: '19 June · 1718', title: 'Land Beneath the Mist', quote: 'At dawn the island appeared, as if the ocean had dreamed it overnight.', photo: 'CROW ISLAND', tone: ['#53604b','#c4a165'] },
  { chapter: 'The Captain’s Mark', date: '21 June · 1718', title: 'Ink, Blood & Promise', quote: 'Three crosses beneath the crooked palm. One grave. One fortune.', photo: 'THE SECRET COVE', tone: ['#5d4637','#b58b55'] },
  { chapter: 'Buried Fortune', date: '24 June · 1718', title: 'Where the Compass Sleeps', quote: 'Gold has a voice of its own. Wise sailors know when not to answer.', photo: 'FORTUNE FOUND', tone: ['#4b5142','#c7a858'] },
  { chapter: 'Homeward Bound', date: '7 July · 1718', title: 'The Long Tide Home', quote: 'We returned with lighter pockets, heavier hearts, and a story worth keeping.', photo: 'LAST LIGHT', tone: ['#3d4c50','#b9905c'] }
];

const pageStories = Array.from({length:BOOK_PAGE_COUNT},(_,index)=>{
  const base=basePageStories[index%basePageStories.length];
  const pageNumber=String(index+1).padStart(3,'0');
  return {
    ...base,
    chapter: `${base.chapter} ${pageNumber}`,
    title: `${base.title} ${pageNumber}`,
    photo: `${base.photo} ${pageNumber}`
  };
});

const chapterRailList=document.querySelector('.chapter-rail ol');
if(chapterRailList){
  chapterRailList.innerHTML=pageStories.map((_,index)=>`<li>${String(index+1).padStart(2,'0')}</li>`).join('');
  ui.chapterDots=[...chapterRailList.querySelectorAll('li')];
}

function drawCompassRose(ctx, x, y, radius) {
  ctx.save(); ctx.translate(x,y); ctx.strokeStyle='rgba(63,37,18,.7)'; ctx.fillStyle='rgba(63,37,18,.58)'; ctx.lineWidth=2;
  ctx.beginPath();ctx.arc(0,0,radius,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.arc(0,0,radius*.78,0,Math.PI*2);ctx.stroke();
  for(let i=0;i<16;i++){ctx.rotate(Math.PI/8);ctx.beginPath();ctx.moveTo(0,-radius*(i%2?.55:.94));ctx.lineTo(-radius*.07,0);ctx.lineTo(radius*.07,0);ctx.closePath();if(i%2===0)ctx.fill();else ctx.stroke()}
  ctx.font=`600 ${radius*.22}px Georgia`;ctx.textAlign='center';ctx.fillText('N',0,-radius-12);ctx.restore();
}

function drawJollyRoger(ctx,x,y,size,alpha=.65){
  ctx.save();ctx.translate(x,y);ctx.globalAlpha=alpha;ctx.strokeStyle='#3b2616';ctx.fillStyle='#3b2616';ctx.lineCap='round';
  ctx.lineWidth=size*.075;ctx.beginPath();ctx.moveTo(-size*.38,-size*.32);ctx.lineTo(size*.38,size*.32);ctx.moveTo(size*.38,-size*.32);ctx.lineTo(-size*.38,size*.32);ctx.stroke();
  [-1,1].forEach(side=>{ctx.beginPath();ctx.arc(side*size*.38,side*size*.32,size*.09,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(-side*size*.38,side*size*.32,size*.09,0,Math.PI*2);ctx.fill()});
  ctx.beginPath();ctx.arc(0,-size*.12,size*.29,0,Math.PI*2);ctx.fill();ctx.fillRect(-size*.2,size*.05,size*.4,size*.27);
  ctx.fillStyle='#b99b66';ctx.beginPath();ctx.ellipse(-size*.1,-size*.15,size*.065,size*.085,0,0,Math.PI*2);ctx.ellipse(size*.1,-size*.15,size*.065,size*.085,0,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.moveTo(0,-size*.03);ctx.lineTo(-size*.045,size*.07);ctx.lineTo(size*.045,size*.07);ctx.closePath();ctx.fill();
  ctx.strokeStyle='#b99b66';ctx.lineWidth=size*.025;for(let i=-2;i<=2;i++){ctx.beginPath();ctx.moveTo(i*size*.055,size*.1);ctx.lineTo(i*size*.055,size*.28);ctx.stroke()}ctx.restore();
}

function drawAnchor(ctx,x,y,size){
  ctx.save();ctx.translate(x,y);ctx.strokeStyle='#4a2e18';ctx.lineWidth=size*.06;ctx.lineCap='round';ctx.lineJoin='round';
  ctx.beginPath();ctx.arc(0,-size*.43,size*.1,0,Math.PI*2);ctx.moveTo(0,-size*.33);ctx.lineTo(0,size*.36);ctx.moveTo(-size*.28,-size*.18);ctx.lineTo(size*.28,-size*.18);ctx.moveTo(-size*.4,size*.12);ctx.bezierCurveTo(-size*.34,size*.45,-size*.1,size*.52,0,size*.58);ctx.bezierCurveTo(size*.1,size*.52,size*.34,size*.45,size*.4,size*.12);ctx.moveTo(-size*.4,size*.12);ctx.lineTo(-size*.48,size*.27);ctx.moveTo(size*.4,size*.12);ctx.lineTo(size*.48,size*.27);ctx.stroke();ctx.restore();
}

function drawTreasureRoute(ctx, s, index) {
  ctx.save();ctx.strokeStyle='rgba(72,40,20,.55)';ctx.lineWidth=5;ctx.setLineDash([14,13]);ctx.beginPath();ctx.moveTo(90,s*.7);ctx.bezierCurveTo(s*.3,s*.52,s*.45,s*.84,s*.7,s*.62);ctx.bezierCurveTo(s*.8,s*.54,s*.82,s*.4,s*.9,s*.37);ctx.stroke();ctx.setLineDash([]);
  ctx.strokeStyle='rgba(93,28,16,.72)';ctx.lineWidth=8;const x=s*.9,y=s*.36;ctx.beginPath();ctx.moveTo(x-20,y-20);ctx.lineTo(x+20,y+20);ctx.moveTo(x+20,y-20);ctx.lineTo(x-20,y+20);ctx.stroke();
  ctx.fillStyle='rgba(48,32,18,.28)';for(let i=0;i<5;i++){const ix=110+i*145,iy=500+Math.sin(i*2+index)*45;ctx.beginPath();ctx.ellipse(ix,iy,55,22,-.2,0,Math.PI*2);ctx.fill()}
  ctx.restore();
}

function drawPhoto(ctx, x, y, w, h, story, variant, photoImage = null) {
  ctx.save(); ctx.translate(x + w / 2, y + h / 2); ctx.rotate((variant % 2 ? -1 : 1) * .025); ctx.translate(-w / 2, -h / 2);
  ctx.shadowColor = 'rgba(50,30,15,.32)'; ctx.shadowBlur = 18; ctx.shadowOffsetY = 10;
  ctx.fillStyle = '#e5d7b9'; ctx.fillRect(-14, -14, w + 28, h + 54);
  ctx.shadowColor = 'transparent';
  const g = ctx.createLinearGradient(0, 0, w, h); g.addColorStop(0, story.tone[0]); g.addColorStop(1, story.tone[1]);ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  if(photoImage){
    // Crop uploaded images to the voyage-photo frame, then display-correct
    // them brighter so the dim scene does not make faces read brown.
    const imageRatio=photoImage.width/photoImage.height,frameRatio=w/h;let sx=0,sy=0,sw=photoImage.width,sh=photoImage.height;
    if(imageRatio>frameRatio){sw=photoImage.height*frameRatio;sx=(photoImage.width-sw)/2}else{sh=photoImage.width/frameRatio;sy=(photoImage.height-sh)/2}
    ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
    ctx.filter='brightness(1.28) contrast(1.04) saturate(1.08)';
    ctx.drawImage(photoImage,sx,sy,sw,sh,0,0,w,h);
    ctx.filter='none';
  }else{
    // Default voyage memory: a sepia ship silhouette with sails and surf.
    ctx.globalAlpha = .55; ctx.fillStyle = '#e0c691'; ctx.beginPath(); ctx.arc(w*.76,h*.22,w*.1,0,Math.PI*2); ctx.fill();
    ctx.globalAlpha = .82;ctx.strokeStyle='#29251f';ctx.fillStyle='#29251f';ctx.lineWidth=7;
    ctx.beginPath();ctx.moveTo(w*.22,h*.68);ctx.lineTo(w*.8,h*.68);ctx.lineTo(w*.69,h*.84);ctx.lineTo(w*.34,h*.84);ctx.closePath();ctx.fill();
    ctx.beginPath();ctx.moveTo(w*.48,h*.68);ctx.lineTo(w*.48,h*.2);ctx.stroke();ctx.beginPath();ctx.moveTo(w*.5,h*.25);ctx.lineTo(w*.72,h*.48);ctx.lineTo(w*.5,h*.5);ctx.closePath();ctx.fill();ctx.globalAlpha=.5;ctx.beginPath();ctx.moveTo(w*.46,h*.3);ctx.lineTo(w*.28,h*.52);ctx.lineTo(w*.46,h*.56);ctx.closePath();ctx.fill();
    ctx.globalAlpha=.42;ctx.strokeStyle='#eee0bd';ctx.lineWidth=4;for(let i=0;i<4;i++){ctx.beginPath();ctx.moveTo(0,h*(.82+i*.045));ctx.bezierCurveTo(w*.25,h*(.77+i*.045),w*.55,h*(.88+i*.03),w,h*(.8+i*.04));ctx.stroke()}
    ctx.globalAlpha = .17; for(let i=0;i<120;i++){ctx.fillStyle=Math.random()>.5?'#fff':'#000';ctx.fillRect(Math.random()*w,Math.random()*h,Math.random()*3+1,1)}
  }
  ctx.globalAlpha = 1; ctx.fillStyle = '#403326'; ctx.textAlign = 'center'; ctx.font = '600 15px Montserrat'; ctx.fillText(story.photo, w/2, h+31);
  ctx.restore();
}

function drawTornCard(ctx,x,y,w,h){
  ctx.save();ctx.translate(x,y);ctx.rotate(-.025);ctx.shadowColor='rgba(42,24,11,.35)';ctx.shadowBlur=15;ctx.shadowOffsetY=9;ctx.fillStyle='#c7a773';ctx.beginPath();ctx.moveTo(8,8);for(let px=35;px<w;px+=35)ctx.lineTo(px,Math.random()*13);ctx.lineTo(w-5,7);ctx.lineTo(w,h-9);for(let px=w-30;px>0;px-=38)ctx.lineTo(px,h-Math.random()*14);ctx.lineTo(5,h-4);ctx.closePath();ctx.fill();ctx.shadowColor='transparent';
  ctx.fillStyle='rgba(55,31,16,.78)';ctx.font='italic 27px Georgia';ctx.textAlign='left';wrapText(ctx,'“Keep the north star at your shoulder. The hidden cove opens only at low tide.”',45,78,w-90,42);
  // Translucent tape and a dark paperclip loop.
  ctx.fillStyle='rgba(223,199,142,.42)';ctx.fillRect(w*.37,-20,w*.25,68);ctx.strokeStyle='rgba(45,38,31,.72)';ctx.lineWidth=7;ctx.beginPath();ctx.ellipse(w-48,42,18,35,.35,0,Math.PI*1.75);ctx.stroke();ctx.restore();
}

function agePaper(ctx,s,intensity=1){
  // Foxing collects around exposed edges while the centre stays readable.
  for(let i=0;i<75*intensity;i++){
    const edge=Math.floor(Math.random()*4),inset=Math.random()*105;
    const x=edge<2?Math.random()*s:(edge===2?inset:s-inset);
    const y=edge>1?Math.random()*s:(edge===0?inset:s-inset);
    const r=1.5+Math.random()*7;
    ctx.fillStyle=`rgba(91,48,20,${.035+Math.random()*.1})`;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
  }
  // Faint folds and old water rings give each leaf a handled, uneven history.
  ctx.save();ctx.strokeStyle=`rgba(91,56,29,${.09*intensity})`;ctx.lineWidth=2;
  [[s*.18,0,s*.24,s],[s*.83,0,s*.76,s],[0,s*.71,s,s*.67]].forEach(line=>{ctx.beginPath();ctx.moveTo(line[0],line[1]);ctx.lineTo(line[2],line[3]);ctx.stroke()});
  for(let i=0;i<3;i++){const x=s*(.18+Math.random()*.64),y=s*(.16+Math.random()*.68),r=s*(.035+Math.random()*.06);ctx.strokeStyle=`rgba(82,45,20,${.08+Math.random()*.07})`;ctx.lineWidth=4+Math.random()*5;ctx.beginPath();ctx.ellipse(x,y,r,r*(.65+Math.random()*.3),Math.random(),0,Math.PI*2);ctx.stroke()}
  ctx.restore();
}

function createPageTexture(story, side, index, photoImage = null) {
  return canvasTexture((ctx, textureSize) => {
    const s=1024;
    ctx.save();
    ctx.scale(textureSize/s,textureSize/s);
    withSeededRandom(1718+index*97,()=>{
    const parchment = ctx.createRadialGradient(s*.45,s*.42,20,s*.5,s*.5,s*.75);
    parchment.addColorStop(0,'#F0E2C8'); parchment.addColorStop(.72,'#d5bd93'); parchment.addColorStop(1,'#a88351');
    ctx.fillStyle = parchment; ctx.fillRect(0,0,s,s); noise(ctx,s);
    // Scorched perimeter, water stains and irregular torn-looking inner border.
    const edge=ctx.createRadialGradient(s/2,s/2,s*.38,s/2,s/2,s*.72);edge.addColorStop(.62,'rgba(65,31,11,0)');edge.addColorStop(.9,'rgba(55,24,8,.24)');edge.addColorStop(1,'rgba(24,9,3,.58)');ctx.fillStyle=edge;ctx.fillRect(0,0,s,s);
    ctx.strokeStyle='rgba(67,37,17,.25)';ctx.lineWidth=5;ctx.setLineDash([22,8,5,11]);ctx.strokeRect(38,36,s-76,s-72);ctx.setLineDash([]);
    for(let i=0;i<9;i++){const x=Math.random()*s,y=Math.random()>0.5?Math.random()*70:s-Math.random()*70;const stain=ctx.createRadialGradient(x,y,0,x,y,22+Math.random()*45);stain.addColorStop(0,'rgba(57,23,7,.25)');stain.addColorStop(1,'rgba(57,23,7,0)');ctx.fillStyle=stain;ctx.beginPath();ctx.arc(x,y,70,0,Math.PI*2);ctx.fill()}
    agePaper(ctx,s,1.5);
    // Deep, irregular scorch blooms left by damp storage and candle heat.
    for(let i=0;i<5;i++){const x=Math.random()>.5?Math.random()*120:s-Math.random()*120,y=Math.random()*s,r=28+Math.random()*85;const burn=ctx.createRadialGradient(x,y,0,x,y,r);burn.addColorStop(0,'rgba(55,20,5,.24)');burn.addColorStop(.55,'rgba(92,45,15,.12)');burn.addColorStop(1,'rgba(92,45,15,0)');ctx.fillStyle=burn;ctx.fillRect(x-r,y-r,r*2,r*2)}
    ctx.fillStyle='rgba(61,42,25,.72)'; ctx.textAlign='left';
    ctx.font='500 17px Montserrat'; ctx.letterSpacing='4px'; ctx.fillText(story.date.toUpperCase(),76,100);
    ctx.fillStyle='rgba(75,49,27,.27)'; ctx.fillRect(76,126,90,2);
    if (side === 'front') {
      if(index===0){
        ctx.font='italic 25px Georgia';ctx.fillStyle='rgba(66,39,20,.7)';ctx.fillText('Voyage memory no. 01',76,178);drawPhoto(ctx,132,225,750,390,story,index,photoImage);drawTornCard(ctx,190,680,650,210);drawCompassRose(ctx,112,820,52);
      }else{
        ctx.font='600 16px Montserrat';ctx.fillStyle='rgba(76,46,23,.62)';ctx.textAlign='center';ctx.fillText(`VOYAGE RECORD  ·  0${index+1}`,s/2,150);
        drawPhoto(ctx,122,190,780,445,story,index,photoImage);drawCompassRose(ctx,115,805,54);if(!photoImage)drawTreasureRoute(ctx,s,index);
        ctx.font='italic 58px Georgia';ctx.fillStyle='#4e3825';ctx.textAlign='center';wrapText(ctx,story.title,s/2,720,s-260,62);
        ctx.font='italic 26px Georgia';ctx.fillStyle='rgba(58,39,22,.78)';ctx.textAlign='center';wrapText(ctx,story.quote,155,815,714,37);
      }
    } else {
      drawPhoto(ctx,120,165,780,430,story,index+1,photoImage);
      ctx.font='italic 43px Georgia'; ctx.fillStyle='#49331f'; ctx.textAlign='left'; ctx.fillText('Captain’s log',170,675);
      ctx.font='italic 22px Georgia'; ctx.fillStyle='rgba(55,38,22,.7)';
      const lines=['Wind east by southeast.','Two bells after midnight.','The crew heard singing below.','Trust no chart without a scar.'];
      lines.forEach((line,i)=>ctx.fillText(line,175,740+i*45));
      ctx.strokeStyle='rgba(70,43,22,.24)'; ctx.lineWidth=2;
      lines.forEach((_,i)=>{ctx.beginPath();ctx.moveTo(175,755+i*45);ctx.lineTo(600,755+i*45);ctx.stroke()});
      ctx.fillStyle='rgba(68,43,22,.2)'; ctx.font='italic 96px Georgia'; ctx.fillText(`${index+1}`,760,805);
      drawCompassRose(ctx,815,755,78);if(!photoImage){drawTreasureRoute(ctx,s,index+2);drawJollyRoger(ctx,865,270,110,.18)}
    }
    ctx.fillStyle='rgba(63,40,22,.46)'; ctx.textAlign='center'; ctx.font='500 14px Montserrat'; ctx.fillText(String(index*2+(side==='front'?1:2)).padStart(2,'0'),s/2,965);
    });
    ctx.restore();
  }, photoImage ? 1024 : PAGE_TEXTURE_SIZE);
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words=text.split(' '); let line=''; let yy=y;
  for (const word of words) { const test=line+word+' '; if(ctx.measureText(test).width>maxWidth&&line){ctx.fillText(line.trim(),x,yy);line=word+' ';yy+=lineHeight}else line=test; }
  ctx.fillText(line.trim(),x,yy);
}

function createIntroLeftTexture(){
  return canvasTexture((ctx,s)=>{
    const p=ctx.createRadialGradient(s*.45,s*.4,30,s*.5,s*.5,s*.72);p.addColorStop(0,'#F0E2C8');p.addColorStop(.72,'#c8aa78');p.addColorStop(1,'#815b31');ctx.fillStyle=p;ctx.fillRect(0,0,s,s);noise(ctx,s,.12);
    const edge=ctx.createRadialGradient(s/2,s/2,s*.38,s/2,s/2,s*.72);edge.addColorStop(.65,'rgba(43,19,6,0)');edge.addColorStop(1,'rgba(35,13,4,.58)');ctx.fillStyle=edge;ctx.fillRect(0,0,s,s);
    agePaper(ctx,s,1.6);
    ctx.strokeStyle='rgba(69,39,18,.28)';ctx.lineWidth=5;ctx.setLineDash([18,9,4,12]);ctx.strokeRect(38,36,s-76,s-72);ctx.setLineDash([]);
    drawAnchor(ctx,s*.5,215,125);
    ctx.fillStyle='rgba(62,36,18,.62)';ctx.textAlign='center';ctx.font='500 18px Montserrat';ctx.fillText('CHAPTER 1',s*.5,390);
    ctx.fillStyle='#49301c';ctx.font='italic 75px Georgia';wrapText(ctx,'The Journey Begins',145,485,s-290,82);
    ctx.strokeStyle='rgba(77,43,20,.32)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(220,670);ctx.lineTo(s-220,670);ctx.stroke();
    ctx.fillStyle='rgba(59,36,20,.74)';ctx.font='italic 31px Georgia';wrapText(ctx,'“Not all those who wander are lost.”',180,760,s-360,44);
    ctx.font='italic 21px Georgia';ctx.fillStyle='rgba(75,45,23,.55)';ctx.fillText('— written before the first tide',s*.5,875);
    // Ink droplets and a faint coastline study.
    ctx.fillStyle='rgba(42,28,20,.35)';[[130,650,12],[165,620,5],[835,720,9]].forEach(d=>{ctx.beginPath();ctx.arc(...d,0,Math.PI*2);ctx.fill()});
  });
}

const leatherTexture = canvasTexture((ctx,s)=>{
  const g=ctx.createLinearGradient(0,0,s,s);g.addColorStop(0,'#3b251b');g.addColorStop(.46,'#21140f');g.addColorStop(1,'#4a2d20');ctx.fillStyle=g;ctx.fillRect(0,0,s,s);noise(ctx,s,.17);
  // Dense pores and short curved creases give the hide a pebbled grain.
  for(let i=0;i<3200;i++){const x=Math.random()*s,y=Math.random()*s,rx=.5+Math.random()*2.8,ry=.35+Math.random()*1.7;ctx.strokeStyle=Math.random()>.5?'rgba(18,9,6,.2)':'rgba(172,146,121,.045)';ctx.lineWidth=.45+Math.random()*.75;ctx.beginPath();ctx.ellipse(x,y,rx,ry,Math.random()*Math.PI,0,Math.PI*2);ctx.stroke()}
  for(let i=0;i<145;i++){const x=Math.random()*s,y=Math.random()*s,len=12+Math.random()*54;ctx.strokeStyle='rgba(31,12,6,.18)';ctx.lineWidth=.8+Math.random()*1.4;ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x+len*.5,y+Math.random()*10-5,x+len,y+Math.random()*5-2.5);ctx.stroke()}
  // Embossed tooling and a hand-stitched perimeter.
  ctx.strokeStyle='rgba(28,15,10,.56)';ctx.lineWidth=10;ctx.strokeRect(43,43,s-86,s-86);ctx.strokeStyle='rgba(156,126,98,.16)';ctx.lineWidth=2;ctx.strokeRect(49,49,s-98,s-98);
  // Individual muted thread marks include missing and crooked stitches.
  ctx.lineCap='round';for(let p=72,i=0;p<s-72;p+=18,i++){
    if(i%8!==3){const lean=(i%3-1)*1.2;ctx.strokeStyle='rgba(24,13,9,.35)';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(p+2,67);ctx.lineTo(p+9+lean,67);ctx.moveTo(p+2,s-65);ctx.lineTo(p+9-lean,s-65);ctx.stroke();ctx.strokeStyle='rgba(157,132,105,.52)';ctx.lineWidth=2.3;ctx.beginPath();ctx.moveTo(p,65);ctx.lineTo(p+8+lean,65);ctx.moveTo(p,s-67);ctx.lineTo(p+8-lean,s-67);ctx.stroke()}
    if(i%7!==4){const lean=(i%3-1)*1.1;ctx.strokeStyle='rgba(24,13,9,.35)';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(67,p+2);ctx.lineTo(67,p+9+lean);ctx.moveTo(s-65,p+2);ctx.lineTo(s-65,p+9-lean);ctx.stroke();ctx.strokeStyle='rgba(157,132,105,.52)';ctx.lineWidth=2.3;ctx.beginPath();ctx.moveTo(65,p);ctx.lineTo(65,p+8+lean);ctx.moveTo(s-67,p);ctx.lineTo(s-67,p+8-lean);ctx.stroke()}
  }
  // Rubbed corners, cracked grain and random scrapes from years at sea.
  const wear=ctx.createRadialGradient(s*.5,s*.5,s*.22,s*.5,s*.5,s*.72);wear.addColorStop(.34,'rgba(66,39,25,.28)');wear.addColorStop(.72,'rgba(95,64,44,.15)');wear.addColorStop(1,'rgba(185,151,116,.2)');ctx.fillStyle=wear;ctx.fillRect(0,0,s,s);
  ctx.lineCap='round';for(let i=0;i<92;i++){const x=Math.random()*s,y=Math.random()*s,len=18+Math.random()*135;ctx.strokeStyle=`rgba(${Math.random()>.52?'183,153,123':'18,7,4'},${.08+Math.random()*.17})`;ctx.lineWidth=.7+Math.random()*2.8;ctx.beginPath();ctx.moveTo(x,y);ctx.bezierCurveTo(x+len*.25,y+Math.random()*12-6,x+len*.7,y+Math.random()*16-8,x+len,y+Math.random()*9-4);ctx.stroke()}
  for(let i=0;i<34;i++){ctx.fillStyle=`rgba(12,5,3,${.1+Math.random()*.2})`;ctx.beginPath();ctx.ellipse(Math.random()*s,Math.random()*s,6+Math.random()*28,2+Math.random()*10,Math.random()*Math.PI,0,Math.PI*2);ctx.fill()}
  // Larger faded patches and branching cracks expose the dry hide beneath.
  for(let i=0;i<15;i++){const x=Math.random()*s,y=Math.random()*s,r=45+Math.random()*125;const patch=ctx.createRadialGradient(x,y,0,x,y,r);patch.addColorStop(0,'rgba(176,135,99,.18)');patch.addColorStop(.55,'rgba(74,45,31,.12)');patch.addColorStop(1,'rgba(34,14,7,0)');ctx.fillStyle=patch;ctx.fillRect(x-r,y-r,r*2,r*2)}
  ctx.strokeStyle='rgba(12,5,3,.48)';ctx.lineWidth=2.4;for(let i=0;i<28;i++){let x=Math.random()*s,y=Math.random()*s;ctx.beginPath();ctx.moveTo(x,y);for(let j=0;j<5;j++){x+=Math.random()*34-17;y+=18+Math.random()*28;ctx.lineTo(x,y)}ctx.stroke()}
  ctx.fillStyle='rgba(218,188,143,.06)';for(let i=0;i<120;i++){ctx.beginPath();ctx.ellipse(Math.random()*s,Math.random()*s,10+Math.random()*36,2+Math.random()*8,Math.random()*Math.PI,0,Math.PI*2);ctx.fill()}
});
const leather = new THREE.MeshStandardMaterial({map:leatherTexture,bumpMap:leatherTexture,bumpScale:.13,color:0x7a5743,roughness:1,metalness:0});
const pageEdge = new THREE.MeshStandardMaterial({ color:0x8f704b, roughness:.96 });
const brass = new THREE.MeshStandardMaterial({ color:0x82602f, roughness:.48, metalness:.68 });

// --- Book construction --------------------------------------------------------
const PAGE_W=5.15, PAGE_H=6.7, PAGE_COUNT=pageStories.length;
const SHEET_W=PAGE_W-.78, SHEET_H=PAGE_H-.92, SHEET_X=PAGE_W/2+.02;
const FIRST_PHOTO_RECT={x:132,y:225,w:750,h:390};
const FIRST_PHOTO_CENTER_X=SHEET_X+(FIRST_PHOTO_RECT.x+FIRST_PHOTO_RECT.w/2)/1024*SHEET_W-SHEET_W/2;
const FIRST_PHOTO_CENTER_Y=SHEET_H/2-(FIRST_PHOTO_RECT.y+FIRST_PHOTO_RECT.h/2)/1024*SHEET_H;
const firstPhotoCamera={...cameraAngles.imageZoom,x:FIRST_PHOTO_CENTER_X,y:FIRST_PHOTO_CENTER_Y};
const VIDEO_IMAGE_FOCUS_X=SHEET_X*.96;
const VIDEO_SPREAD_FOCUS_X=SHEET_X*.12;
const VIDEO_IMAGE_SCAN_START_X=SHEET_X*.84;
const VIDEO_IMAGE_SCAN_END_X=SHEET_X*1.05;
const VIDEO_SPREAD_SCAN_START_X=-SHEET_X*.9;
const VIDEO_SPREAD_SCAN_END_X=SHEET_X*.9;
const VIDEO_FIRST_IMAGE_FOCUS_Y=compact?.54:.62;
const VIDEO_LEFT_IMAGE_FOCUS_Y=compact?.62:.72;
const VIDEO_RIGHT_IMAGE_FOCUS_Y=compact?.42:.5;
const book = new THREE.Group(); book.rotation.z=-.02; world.add(book);

function roundedBox(w,h,d,r,material){
  const shape=new THREE.Shape();const x=-w/2,y=-h/2;
  shape.moveTo(x+r,y);shape.lineTo(x+w-r,y);shape.quadraticCurveTo(x+w,y,x+w,y+r);shape.lineTo(x+w,y+h-r);shape.quadraticCurveTo(x+w,y+h,x+w-r,y+h);shape.lineTo(x+r,y+h);shape.quadraticCurveTo(x,y+h,x,y+h-r);shape.lineTo(x,y+r);shape.quadraticCurveTo(x,y,x+r,y);
  const geo=new THREE.ExtrudeGeometry(shape,{depth:d,bevelEnabled:true,bevelSize:.07,bevelThickness:.05,bevelSegments:3});geo.center();
  const mesh=new THREE.Mesh(geo,material);mesh.castShadow=mesh.receiveShadow=true;return mesh;
}

// The back cover remains fixed below the right page block. The hinged front
// cover becomes the left cover when opened, so nothing needs to stretch.
const backCover=roundedBox(PAGE_W+.45,PAGE_H+.75,.34,.2,leather);backCover.position.set(PAGE_W/2+.05,0,-.55);book.add(backCover);
const leftStack=roundedBox(SHEET_W,SHEET_H,.42,.08,pageEdge);
const rightStack=roundedBox(SHEET_W,SHEET_H,.48,.08,pageEdge);rightStack.position.set(SHEET_X,-.01,-.19);book.add(rightStack);
// Dark spine and raised brass bands.
const spine=roundedBox(.62,PAGE_H+.52,.6,.16,leather);spine.position.z=-.28;book.add(spine);
[-2.6,2.6].forEach(y=>{const band=roundedBox(.78,.12,.67,.03,brass);band.position.set(0,y,-.22);book.add(band)});

const pageVertex = `
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
  }`;
function pageMaterial(texture, side, backFace=false) {
  return new THREE.ShaderMaterial({
    uniforms:{map:{value:texture},uTurn:{value:0},uCurl:{value:.85},uReveal:{value:1},uWarmth:{value:new THREE.Color(0xffe2b0)},uPhotoRect:{value:new THREE.Vector4(0,0,0,0)},uPhotoProtect:{value:0},uPhotoBrightness:{value:1},uMirrorX:{value:backFace?1:0}},
    vertexShader:pageVertex,
    fragmentShader:`uniform sampler2D map; uniform vec3 uWarmth; uniform vec4 uPhotoRect; uniform float uPhotoProtect; uniform float uPhotoBrightness; uniform float uReveal; uniform float uMirrorX; varying vec2 vUv2; void main(){vec2 pageUv=mix(vUv2,vec2(1.0-vUv2.x,vUv2.y),uMirrorX);float photoMask=step(uPhotoRect.x,pageUv.x)*step(pageUv.x,uPhotoRect.z)*step(uPhotoRect.y,pageUv.y)*step(pageUv.y,uPhotoRect.w)*uPhotoProtect;vec4 c=texture2D(map,pageUv);float wobble=sin(pageUv.y*91.0)*.012+sin(pageUv.x*67.0)*.009+sin((pageUv.x+pageUv.y)*143.0)*.004;float edge=smoothstep(0.0,.038+wobble,pageUv.x)*smoothstep(0.0,.041-wobble,1.0-pageUv.x)*smoothstep(0.0,.03-wobble,pageUv.y)*smoothstep(0.0,.032+wobble,1.0-pageUv.y);if(edge<.18&&photoMask<.5)discard;float grain=fract(sin(dot(floor(pageUv*vec2(31.0,23.0)),vec2(12.9898,78.233)))*43758.5453);float threshold=pageUv.y*.35+grain*.65;float painted=smoothstep(threshold-.14,threshold+.08,uReveal*1.12);vec3 bare=vec3(.72,.57,.34)*(1.0-pageUv.x*.06);c.rgb=mix(bare,c.rgb,mix(painted,1.0,photoMask));vec3 warmth=mix(uWarmth,vec3(1.0),photoMask);c.rgb*=mix(mix(.31,1.0,edge),1.0,photoMask)*warmth;c.rgb=mix(c.rgb,min(pow(c.rgb,vec3(.72))*uPhotoBrightness,vec3(1.0)),photoMask);gl_FragColor=vec4(c.rgb,1.0);}`,
    side, transparent:false, depthWrite:true, toneMapped:false, polygonOffset:true, polygonOffsetFactor:backFace?1:-1, polygonOffsetUnits:backFace?1:-1
  });
}

const introLeftGeo=new THREE.PlaneGeometry(SHEET_W,SHEET_H,24,10);

// Thin, mismatched leaves beneath the active sheets make the page block read
// as a stack of brittle paper instead of a single solid slab.
for(let i=0;i<12;i++){
  const leafMat=new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(.105,.28,.5+i*.006),roughness:1,side:THREE.DoubleSide});
  const leaf=new THREE.Mesh(new THREE.PlaneGeometry(SHEET_W-.08-(i%3)*.018,SHEET_H-.08-(i%4)*.014),leafMat);
  leaf.position.set(SHEET_X+((i%3)-1)*.008,((i%4)-1.5)*.008,.018+i*.0045);leaf.rotation.z=(i%2?1:-1)*(.0008+i*.00012);leaf.receiveShadow=true;book.add(leaf);
}

const pages=[];
for(let i=0;i<PAGE_COUNT;i++){
  // Keep the current right-hand page above the sheets that follow it.
  const pivot=new THREE.Group();pivot.position.set(0,0,.13+(PAGE_COUNT-i)*.0038);book.add(pivot);
  pivot.position.y=((i%3)-1)*.009;pivot.rotation.z=(i%2?1:-1)*(.0018+i*.00025);
  const geo=new THREE.PlaneGeometry(SHEET_W,SHEET_H,36,12);geo.translate(SHEET_X,0,0);
  const frontTexture=createPageTexture(pageStories[i],'front',i);
  const frontMat=pageMaterial(frontTexture,THREE.FrontSide);
  frontMat.uniforms.uReveal.value=0;
  // Both faces share the same sheet. BackSide makes the reverse appear only
  // after the physical page has crossed the spine onto the left.
  const backTexture=createPageTexture(pageStories[i],'back',i);
  const backMat=pageMaterial(backTexture,THREE.BackSide,true);
  backMat.uniforms.uReveal.value=0;
  const front=new THREE.Mesh(geo,frontMat);front.castShadow=front.receiveShadow=true;pivot.add(front);
  const back=new THREE.Mesh(geo,backMat);back.position.z=-.018;back.castShadow=true;pivot.add(back);
  pivot.userData={frontMat,backMat,frontTexture,backTexture,progress:0,index:i};pages.push(pivot);
}
pages.forEach((page,index)=>{page.visible=index===0});

// Front cover starts closed and becomes the left-side cover during the intro.
// Rest above the tallest warped leaf so the closed cover never intersects it.
const coverPivot=new THREE.Group();coverPivot.position.z=.43;book.add(coverPivot);
const frontCover=roundedBox(PAGE_W+.45,PAGE_H+.75,.34,.18,leather);frontCover.position.x=PAGE_W/2+.05;coverPivot.add(frontCover);

// Physical cover damage: rubbed-through corners, lifted hide, split seams and
// broken binding stitches remain visible even when the light moves.
const wornHide=new THREE.MeshStandardMaterial({color:0x54372b,roughness:1,metalness:0});
const exposedHide=new THREE.MeshStandardMaterial({color:0x3b1b0e,roughness:1,metalness:0});
function addWornCorner(x,y,mirrorX=1,mirrorY=1){
  const shape=new THREE.Shape();shape.moveTo(0,0);shape.lineTo(.72*mirrorX,.04*mirrorY);shape.lineTo(.56*mirrorX,.19*mirrorY);shape.lineTo(.68*mirrorX,.34*mirrorY);shape.lineTo(.31*mirrorX,.58*mirrorY);shape.lineTo(.08*mirrorX,.72*mirrorY);shape.closePath();
  const patch=new THREE.Mesh(new THREE.ShapeGeometry(shape),wornHide);patch.position.set(x,y,.183);patch.castShadow=true;coverPivot.add(patch);
}
addWornCorner(-.12,-3.65,1,1);addWornCorner(5.42,-3.65,-1,1);addWornCorner(-.12,3.65,1,-1);addWornCorner(5.42,3.65,-1,-1);

const crackMaterial=new THREE.LineBasicMaterial({color:0x241006,transparent:true,opacity:.82});
[
  [[.05,-3.1,.205],[.42,-2.76,.207],[.29,-2.4,.205],[.61,-2.08,.207]],
  [[5.3,3.28,.205],[4.92,2.98,.207],[5.02,2.63,.205],[4.72,2.35,.207]],
  [[4.95,-3.52,.205],[4.66,-3.18,.207],[4.78,-2.89,.205]],
  [[.14,3.42,.205],[.48,3.1,.207],[.38,2.78,.205]]
].forEach(points=>coverPivot.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points.map(p=>new THREE.Vector3(...p))),crackMaterial)));

// One lifted flap catches a small shadow at the most damaged outer corner.
const flapShape=new THREE.Shape();flapShape.moveTo(0,0);flapShape.lineTo(-.58,.05);flapShape.lineTo(-.35,.42);flapShape.closePath();
const leatherFlap=new THREE.Mesh(new THREE.ShapeGeometry(flapShape),exposedHide);leatherFlap.position.set(5.34,-3.52,.22);leatherFlap.rotation.x=-.24;leatherFlap.castShadow=true;coverPivot.add(leatherFlap);

const stitchMaterial=new THREE.MeshStandardMaterial({color:0x9c7040,roughness:1});
for(let i=0;i<15;i++){if(i===3||i===9||i===13)continue;const stitch=new THREE.Mesh(new THREE.BoxGeometry(.18,.025,.018),stitchMaterial);stitch.position.set(.09,-3.15+i*.45,.215);stitch.rotation.z=(i%2?1:-1)*.13;coverPivot.add(stitch)}
// The paper block and first inside page travel with the cover hinge. Back-face
// culling hides the inside page while closed and reveals it continuously.
leftStack.position.set(SHEET_X,-.01,-.35);coverPivot.add(leftStack);
const introLeft=new THREE.Mesh(introLeftGeo,pageMaterial(createIntroLeftTexture(),THREE.FrontSide));introLeft.position.set(SHEET_X,0,-.47);introLeft.rotation.y=Math.PI;introLeft.castShadow=introLeft.receiveShadow=true;coverPivot.add(introLeft);
const titlePlate=roundedBox(2.9,1.35,.05,.04,brass);titlePlate.position.set(PAGE_W/2+.05,.15,.2);coverPivot.add(titlePlate);
const inset=roundedBox(2.62,1.08,.06,.03,new THREE.MeshStandardMaterial({color:0x24130d,roughness:.65}));inset.position.set(PAGE_W/2+.05,.15,.245);coverPivot.add(inset);
const coverLabelTexture=canvasTexture((ctx,s)=>{ctx.clearRect(0,0,s,s);ctx.fillStyle='#d8a64c';ctx.textAlign='center';ctx.font='700 65px Georgia';ctx.fillText('THE',s/2,s*.38);ctx.fillText('ARCHIVE',s/2,s*.54);ctx.fillStyle='#e7c982';ctx.font='500 24px Montserrat';ctx.fillText('CAPTAIN’S LOG  ·  1718',s/2,s*.68);ctx.strokeStyle='rgba(220,174,82,.7)';ctx.lineWidth=3;ctx.strokeRect(75,220,s-150,s-440)},1024);
const hygLogoTexture=new THREE.TextureLoader().load(hygLogoUrl,texture=>{texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(8,maxAnisotropy)});
const coverLabel=new THREE.Mesh(new THREE.PlaneGeometry(2.34,.98),new THREE.MeshBasicMaterial({map:hygLogoTexture,transparent:true,depthTest:false,depthWrite:false,toneMapped:false,side:THREE.FrontSide}));coverLabel.position.set(PAGE_W/2+.05,.15,.36);coverLabel.renderOrder=50;coverPivot.add(coverLabel);
// Green-brown patina gathers around the brass title frame without obscuring it.
const patinaMaterial=new THREE.MeshBasicMaterial({color:0x34452f,transparent:true,opacity:.46,depthWrite:false});
for(let i=0;i<14;i++){const a=i/14*Math.PI*2,x=PAGE_W/2+.05+Math.cos(a)*(1.25+((i%3)-1)*.05),y=.15+Math.sin(a)*.55;const spot=new THREE.Mesh(new THREE.CircleGeometry(.025+(i%4)*.009,10),patinaMaterial);spot.position.set(x,y,.292);coverPivot.add(spot)}

// Captain's crest: brass medallion and crossed marks on the journal cover.
const crest=new THREE.Mesh(new THREE.CylinderGeometry(.28,.28,.07,32),brass);crest.rotation.x=Math.PI/2;crest.position.set(PAGE_W/2+.05,-1.25,.31);coverPivot.add(crest);
const skullShape=new THREE.Shape();skullShape.moveTo(-.22,-.05);skullShape.bezierCurveTo(-.29,-.3,-.2,-.48,0,-.5);skullShape.bezierCurveTo(.2,-.48,.29,-.3,.22,-.05);skullShape.lineTo(.15,.18);skullShape.lineTo(.08,.33);skullShape.lineTo(-.08,.33);skullShape.lineTo(-.15,.18);skullShape.closePath();
const skull=new THREE.Mesh(new THREE.ShapeGeometry(skullShape),brass);skull.position.set(PAGE_W/2+.05,-1.14,.4);skull.rotation.z=Math.PI;skull.scale.setScalar(.72);coverPivot.add(skull);
[-.09,.09].forEach(x=>{const eye=new THREE.Mesh(new THREE.CircleGeometry(.045,16),new THREE.MeshBasicMaterial({color:0x26130b}));eye.position.set(PAGE_W/2+.05+x,-1.22,.415);coverPivot.add(eye)});

// The chart table catches soft contact shadows; the large map sits just above it.
const tableMat=new THREE.MeshStandardMaterial({color:0xb7cad3,roughness:.84,metalness:0});
const table=new THREE.Mesh(new THREE.CylinderGeometry(15,15,1.1,64),tableMat);table.rotation.x=Math.PI/2;table.position.z=-1.4;table.receiveShadow=true;world.add(table);

const mapTexture=canvasTexture((ctx,s)=>{
  const g=ctx.createRadialGradient(s*.42,s*.4,20,s*.5,s*.5,s*.76);g.addColorStop(0,'#FAEBD7');g.addColorStop(.58,'#ead2ad');g.addColorStop(1,'#c49d67');ctx.fillStyle=g;ctx.fillRect(0,0,s,s);noise(ctx,s,.08);
  // Warm antique-white washes under the old navigation ink.
  ctx.globalCompositeOperation='multiply';[[.34,.42,.28],[.68,.64,.24],[.72,.27,.18]].forEach((w,i)=>{const wash=ctx.createRadialGradient(s*w[0],s*w[1],10,s*w[0],s*w[1],s*w[2]);wash.addColorStop(0,`rgba(${i===1?'145,105,54':'154,116,67'},.18)`);wash.addColorStop(1,'rgba(154,116,67,0)');ctx.fillStyle=wash;ctx.fillRect(0,0,s,s)});ctx.globalCompositeOperation='source-over';
  ctx.strokeStyle='rgba(41,30,20,.24)';ctx.lineWidth=1;for(let i=70;i<s;i+=70){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,s);ctx.stroke();ctx.beginPath();ctx.moveTo(0,i);ctx.lineTo(s,i);ctx.stroke()}
  ctx.strokeStyle='rgba(39,25,15,.82)';ctx.fillStyle='rgba(54,39,23,.34)';ctx.lineWidth=9;
  ctx.beginPath();ctx.moveTo(0,s*.24);ctx.bezierCurveTo(s*.14,s*.18,s*.17,s*.35,s*.29,s*.3);ctx.bezierCurveTo(s*.4,s*.25,s*.37,s*.08,s*.53,0);ctx.lineTo(0,0);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.moveTo(s,s*.62);ctx.bezierCurveTo(s*.83,s*.55,s*.83,s*.76,s*.68,s*.72);ctx.bezierCurveTo(s*.6,s*.69,s*.58,s*.9,s*.48,s);ctx.lineTo(s,s);ctx.closePath();ctx.fill();ctx.stroke();
  drawCompassRose(ctx,s*.17,s*.76,s*.11);drawTreasureRoute(ctx,s,3);drawJollyRoger(ctx,s*.82,s*.22,s*.12,.38);
  // A hand-painted crimson course and ominous whirlpool marks.
  ctx.strokeStyle='rgba(112,24,17,.72)';ctx.lineWidth=6;ctx.setLineDash([16,12]);ctx.beginPath();ctx.moveTo(s*.14,s*.58);ctx.bezierCurveTo(s*.31,s*.38,s*.5,s*.76,s*.74,s*.47);ctx.bezierCurveTo(s*.82,s*.37,s*.86,s*.31,s*.9,s*.27);ctx.stroke();ctx.setLineDash([]);
  ctx.strokeStyle='rgba(36,28,21,.5)';ctx.lineWidth=4;for(let r=18;r<66;r+=12){ctx.beginPath();ctx.arc(s*.62,s*.5,r,.35,Math.PI*1.85);ctx.stroke()}
  ctx.fillStyle='rgba(38,25,16,.76)';ctx.font='italic 55px Georgia';ctx.textAlign='center';ctx.fillText('Mare Incognitum',s*.55,s*.18);
  ctx.font='italic 24px Georgia';ctx.fillText('Dead Man’s Passage',s*.72,s*.48);ctx.fillText('Isla del Cuervo',s*.37,s*.63);
  // Small inked sea serpent for unmistakable old-world cartography.
  ctx.strokeStyle='rgba(32,25,19,.58)';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(s*.42,s*.33);ctx.bezierCurveTo(s*.47,s*.25,s*.5,s*.42,s*.55,s*.32);ctx.bezierCurveTo(s*.6,s*.23,s*.62,s*.36,s*.65,s*.3);ctx.stroke();ctx.beginPath();ctx.arc(s*.655,s*.285,16,0,Math.PI*2);ctx.stroke();
  const edge=ctx.createRadialGradient(s/2,s/2,s*.4,s/2,s/2,s*.72);edge.addColorStop(.62,'rgba(87,52,22,0)');edge.addColorStop(1,'rgba(87,52,22,.24)');ctx.fillStyle=edge;ctx.fillRect(0,0,s,s);
});
const mapMat=new THREE.MeshStandardMaterial({map:mapTexture,color:0xf6dec1,roughness:.98,side:THREE.DoubleSide});
const chart=new THREE.Mesh(new THREE.PlaneGeometry(22,14,20,12),mapMat);chart.position.set(0,0,-.81);chart.rotation.z=.055;chart.receiveShadow=true;world.add(chart);

// Layered letters and chart fragments reproduce the reference video's tactile
// tabletop collage while remaining procedural and asset-free.
function createScrap(label,x,y,w,h,rotation,tint){
  const texture=canvasTexture((ctx,s)=>{ctx.fillStyle=tint;ctx.fillRect(0,0,s,s);noise(ctx,s,.1);ctx.strokeStyle='rgba(77,43,19,.26)';ctx.lineWidth=8;ctx.strokeRect(24,24,s-48,s-48);ctx.fillStyle='rgba(65,39,20,.6)';ctx.font='italic 47px Georgia';ctx.textAlign='center';ctx.fillText(label,s/2,125);ctx.font='italic 25px Georgia';for(let i=0;i<7;i++)ctx.fillText('—  ———  ——  —————  —',s/2,230+i*70);drawCompassRose(ctx,s*.77,s*.75,s*.1)},512);
  const scrap=new THREE.Mesh(new THREE.PlaneGeometry(w,h,4,3),new THREE.MeshStandardMaterial({map:texture,roughness:1,side:THREE.DoubleSide}));scrap.position.set(x,y,-.63);scrap.rotation.z=rotation;scrap.castShadow=scrap.receiveShadow=true;world.add(scrap);
}
createScrap('Port Royal',-4.6,2.5,4.2,2.5,-.17,'#F0E2C8');
createScrap('Cape of Storms',4.8,2.7,4.5,2.7,.13,'#ead7b7');
createScrap('Admiralty Chart',-4.8,-2.2,4.1,2.35,.1,'#dcc49b');
createScrap('Letter of Marque',4.7,-2.3,4.0,2.4,-.12,'#F0E2C8');

const darkMetal=new THREE.MeshStandardMaterial({color:0x2b1d14,roughness:.35,metalness:.72});
const wood=new THREE.MeshStandardMaterial({color:0x4c2714,roughness:.72});
const wax=new THREE.MeshStandardMaterial({color:0x731b11,roughness:.58});

const compassDialTexture=canvasTexture((ctx,s)=>{
  const dial=ctx.createRadialGradient(s*.44,s*.38,10,s*.5,s*.5,s*.52);dial.addColorStop(0,'#d8c18a');dial.addColorStop(.72,'#9b7a48');dial.addColorStop(1,'#3b2919');ctx.fillStyle=dial;ctx.fillRect(0,0,s,s);noise(ctx,s,.12);
  ctx.translate(s/2,s/2);ctx.strokeStyle='rgba(36,25,16,.72)';ctx.fillStyle='rgba(36,25,16,.76)';
  for(let i=0;i<72;i++){const major=i%6===0,r1=s*(major?.36:.385),r2=s*.42,a=i/72*Math.PI*2;ctx.lineWidth=major?5:2;ctx.beginPath();ctx.moveTo(Math.cos(a)*r1,Math.sin(a)*r1);ctx.lineTo(Math.cos(a)*r2,Math.sin(a)*r2);ctx.stroke()}
  ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=`700 ${s*.085}px Georgia`;[['N',0,-.31],['E',.31,0],['S',0,.31],['W',-.31,0]].forEach(c=>ctx.fillText(c[0],c[1]*s,c[2]*s));
  ctx.strokeStyle='rgba(103,25,18,.7)';ctx.lineWidth=5;ctx.beginPath();ctx.arc(0,0,s*.25,0,Math.PI*2);ctx.stroke();
},1024);

function createCompass(){
  const g=new THREE.Group();
  const base=new THREE.Mesh(new THREE.CylinderGeometry(1.35,1.42,.18,64),brass);base.rotation.x=Math.PI/2;base.castShadow=true;g.add(base);
  const face=new THREE.Mesh(new THREE.CircleGeometry(1.18,64),new THREE.MeshStandardMaterial({map:compassDialTexture,color:0xd6bf91,roughness:.88}));face.position.z=.11;g.add(face);
  [1.18,.93].forEach((r,i)=>{const ring=new THREE.Mesh(new THREE.TorusGeometry(r,.035,12,64),i?darkMetal:brass);ring.position.z=.16;g.add(ring)});
  const rose=new THREE.Group();rose.position.z=.18;
  for(let i=0;i<8;i++){const shape=new THREE.Shape();shape.moveTo(0,i%2?-.35:-.82);shape.lineTo(-.09,0);shape.lineTo(.09,0);shape.closePath();const p=new THREE.Mesh(new THREE.ShapeGeometry(shape),i%2?darkMetal:brass);p.rotation.z=i*Math.PI/4;rose.add(p)}g.add(rose);
  const needleGroup=new THREE.Group();needleGroup.position.z=.225;needleGroup.rotation.z=.28;
  const northShape=new THREE.Shape();northShape.moveTo(0,.82);northShape.lineTo(-.085,0);northShape.lineTo(.085,0);northShape.closePath();
  const southShape=new THREE.Shape();southShape.moveTo(0,-.72);southShape.lineTo(-.075,0);southShape.lineTo(.075,0);southShape.closePath();
  needleGroup.add(new THREE.Mesh(new THREE.ShapeGeometry(northShape),new THREE.MeshStandardMaterial({color:0x821c16,metalness:.32,roughness:.46})),new THREE.Mesh(new THREE.ShapeGeometry(southShape),darkMetal));g.add(needleGroup);
  const hub=new THREE.Mesh(new THREE.CylinderGeometry(.095,.095,.05,20),brass);hub.rotation.x=Math.PI/2;hub.position.z=.25;g.add(hub);
  const glass=new THREE.Mesh(new THREE.CircleGeometry(1.12,64),new THREE.MeshPhysicalMaterial({color:0xcbe4df,transparent:true,opacity:.11,roughness:.08,metalness:0,clearcoat:.6,clearcoatRoughness:.12,depthWrite:false}));glass.position.z=.29;g.add(glass);
  for(let i=0;i<4;i++){const a=i*Math.PI/2,lug=new THREE.Mesh(new THREE.BoxGeometry(.22,.34,.09),brass);lug.position.set(Math.cos(a)*1.38,Math.sin(a)*1.38,.04);lug.rotation.z=a;g.add(lug)}
  g.userData.needle=needleGroup;g.userData.rose=rose;g.userData.face=face;g.userData.glass=glass;
  g.position.set(-7.65,-4.15,-.72);g.rotation.z=-.28;g.scale.setScalar(.78);return g;
}
const compass=createCompass();world.add(compass);

function createCoin(x,y,z,scale=1){const coin=new THREE.Mesh(new THREE.CylinderGeometry(.3*scale,.3*scale,.075,28),brass);coin.rotation.x=Math.PI/2;coin.position.set(x,y,z);coin.rotation.y=Math.random()*.15;coin.rotation.z=Math.random()*Math.PI;coin.castShadow=true;world.add(coin)}
[[-4.7,2.8,-.52,1],[-4.2,3.15,-.48,.8],[-4.55,3.35,-.42,.75],[5.8,-2.9,-.51,.9],[6.3,-2.6,-.52,.7]].forEach(c=>createCoin(...c));

function createSpyglass(){
  const g=new THREE.Group();
  const agedBrass=new THREE.MeshStandardMaterial({color:0x9a7134,roughness:.54,metalness:.72});
  const tarnish=new THREE.MeshStandardMaterial({color:0x283b2c,roughness:.9,metalness:.08});
  const darkLeather=new THREE.MeshStandardMaterial({color:0x2a1710,roughness:.94,metalness:0,bumpMap:leatherTexture,bumpScale:.04});
  const lensMat=new THREE.MeshPhysicalMaterial({color:0xb7e1df,transparent:true,opacity:.34,roughness:.05,metalness:0,clearcoat:1,clearcoatRoughness:.04,depthWrite:false});
  const tubeA=new THREE.Mesh(new THREE.CylinderGeometry(.25,.34,2.15,36),darkLeather);tubeA.castShadow=true;tubeA.receiveShadow=true;tubeA.position.y=-.42;g.add(tubeA);
  const tubeB=new THREE.Mesh(new THREE.CylinderGeometry(.2,.27,1.55,36),agedBrass);tubeB.castShadow=true;tubeB.position.y=.92;g.add(tubeB);
  const tubeC=new THREE.Mesh(new THREE.CylinderGeometry(.16,.2,1.12,36),agedBrass);tubeC.castShadow=true;tubeC.position.y=1.85;g.add(tubeC);
  const eyepiece=new THREE.Mesh(new THREE.CylinderGeometry(.22,.18,.38,36),darkMetal);eyepiece.position.y=-1.72;eyepiece.castShadow=true;g.add(eyepiece);
  const objective=new THREE.Mesh(new THREE.CylinderGeometry(.43,.34,.38,36),agedBrass);objective.position.y=2.55;objective.castShadow=true;g.add(objective);
  [-1.46,-.05,.74,1.48,2.35].forEach((y,i)=>{const band=new THREE.Mesh(new THREE.TorusGeometry(i===4?.42:i===0?.24:.29,.035,12,42),i===2?tarnish:agedBrass);band.rotation.x=Math.PI/2;band.position.y=y;band.castShadow=true;g.add(band)});
  const frontLens=new THREE.Mesh(new THREE.CircleGeometry(.35,42),lensMat);frontLens.position.y=2.76;frontLens.rotation.x=Math.PI/2;g.add(frontLens);
  const rearLens=new THREE.Mesh(new THREE.CircleGeometry(.14,28),lensMat);rearLens.position.y=-1.93;rearLens.rotation.x=-Math.PI/2;g.add(rearLens);
  for(let i=0;i<10;i++){const scratch=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-.18+Math.random()*.36,-1.25+Math.random()*.85,.255),new THREE.Vector3(-.15+Math.random()*.3,-1.18+Math.random()*.85,.265)]),new THREE.LineBasicMaterial({color:0xb08a5e,transparent:true,opacity:.35}));g.add(scratch)}
  const strapCurve=new THREE.CatmullRomCurve3([new THREE.Vector3(-.34,-1.35,.05),new THREE.Vector3(-.62,-.42,.1),new THREE.Vector3(-.45,.55,.08),new THREE.Vector3(-.2,1.12,.04)]);
  const strap=new THREE.Mesh(new THREE.TubeGeometry(strapCurve,42,.025,8,false),new THREE.MeshStandardMaterial({color:0x20100b,roughness:.94}));strap.castShadow=true;g.add(strap);
  g.position.set(6.2,2.35,-.2);g.rotation.set(.18,.03,-.9);g.scale.setScalar(1.08);return g;
}const telescope=createSpyglass();world.add(telescope);

function createQuill(){
  const g=new THREE.Group();
  const shaftMaterial=new THREE.MeshStandardMaterial({color:0x3b2c22,roughness:.72,metalness:.02});
  const featherMaterial=new THREE.MeshPhysicalMaterial({color:0x111918,roughness:.9,metalness:0,side:THREE.DoubleSide,transparent:true,opacity:.97,sheen:.28,sheenColor:new THREE.Color(0x315b58)});
  const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(0,-1.62,.08),new THREE.Vector3(.025,-.65,.09),new THREE.Vector3(.09,.4,.11),new THREE.Vector3(.16,1.35,.13),new THREE.Vector3(.08,2.22,.14)]);
  const shaft=new THREE.Mesh(new THREE.TubeGeometry(curve,56,.031,12,false),shaftMaterial);shaft.castShadow=true;g.add(shaft);

  // Asymmetric, tapered vanes with small gaps create a natural flight feather.
  function createVane(side){
    const shape=new THREE.Shape();shape.moveTo(side*.015,-.05);
    const points=[];
    for(let i=0;i<=15;i++){
      const t=i/15,y=-.02+t*2.22;
      const body=Math.sin(Math.pow(t,.82)*Math.PI)*(.5+(side>0?.07:0));
      const taper=(1-t*.2),notch=(i===4||i===9||i===12)?.08:0;
      points.push([side*(.09+body*taper-notch),y]);
    }
    points.forEach((p,i)=>{shape.lineTo(p[0],p[1]);if(i===4||i===9||i===12)shape.lineTo(p[0]*.76,p[1]+.045)});
    shape.lineTo(side*.04,2.25);shape.lineTo(side*.015,-.05);shape.closePath();
    const vane=new THREE.Mesh(new THREE.ShapeGeometry(shape),featherMaterial);vane.position.z=.045;vane.castShadow=true;return vane;
  }
  g.add(createVane(-1),createVane(1));

  // Dense diagonal barbs and a pale rachis highlight add feather texture.
  const barbMaterial=new THREE.LineBasicMaterial({color:0x748b82,transparent:true,opacity:.34});
  for(const side of [-1,1])for(let i=1;i<15;i++){
    const t=i/15,y=t*2.15,width=(.09+Math.sin(Math.pow(t,.82)*Math.PI)*(.46+(side>0?.06:0)))*(1-t*.16);
    const points=[new THREE.Vector3(.025*side,y,.07),new THREE.Vector3(width*side,y+(side>0?.1:.075),.07)];
    g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),barbMaterial));
  }
  const rachisHighlight=new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(42).map(p=>new THREE.Vector3(p.x-.012,p.y,p.z+.025))),new THREE.LineBasicMaterial({color:0x8f7959,transparent:true,opacity:.46}));g.add(rachisHighlight);

  // A shaped, split brass nib with a collar and ink-darkened point.
  const collar=new THREE.Mesh(new THREE.CylinderGeometry(.075,.09,.24,16),brass);collar.rotation.x=Math.PI/2;collar.position.set(0,-1.51,.09);g.add(collar);
  const cordMaterial=new THREE.MeshStandardMaterial({color:0x7b1f18,roughness:.92});
  for(let i=0;i<4;i++){const cord=new THREE.Mesh(new THREE.TorusGeometry(.073,.012,7,22),cordMaterial);cord.rotation.x=Math.PI/2;cord.position.set(0,-1.35+i*.035,.09);g.add(cord)}
  const bead=new THREE.Mesh(new THREE.SphereGeometry(.055,14,10),new THREE.MeshStandardMaterial({color:0x245b57,roughness:.55,metalness:.08}));bead.position.set(.105,-1.29,.09);g.add(bead);
  const nibShape=new THREE.Shape();nibShape.moveTo(-.105,-1.55);nibShape.quadraticCurveTo(-.12,-1.76,-.055,-1.9);nibShape.lineTo(0,-2.1);nibShape.lineTo(.055,-1.9);nibShape.quadraticCurveTo(.12,-1.76,.105,-1.55);nibShape.closePath();
  const nib=new THREE.Mesh(new THREE.ShapeGeometry(nibShape),brass);nib.position.z=.1;nib.castShadow=true;g.add(nib);
  const slit=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,-1.69,.115),new THREE.Vector3(0,-2.055,.115)]),new THREE.LineBasicMaterial({color:0x2b1a10}));g.add(slit);
  const vent=new THREE.Mesh(new THREE.CircleGeometry(.026,16),new THREE.MeshBasicMaterial({color:0x2b1a10}));vent.position.set(0,-1.72,.118);g.add(vent);
  const inkTip=new THREE.Mesh(new THREE.SphereGeometry(.035,12,8),new THREE.MeshBasicMaterial({color:0x17120f}));inkTip.position.set(0,-2.095,.11);g.add(inkTip);

  // Rest the quill on the chart table, clear of the book's right page.
  g.position.set(6.65,-.65,-.32);g.rotation.set(.035,0,-.43);g.scale.setScalar(.9);return g;
}world.add(createQuill());

function createLantern(){
  const g=new THREE.Group();const base=new THREE.Mesh(new THREE.CylinderGeometry(.65,.78,.25,24),darkMetal);base.rotation.x=Math.PI/2;g.add(base);const top=base.clone();top.scale.set(.72,.72,.72);top.position.z=2.15;g.add(top);
  for(let i=0;i<4;i++){const a=i*Math.PI/2;const rod=new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,2.1,8),darkMetal);rod.position.set(Math.cos(a)*.55,Math.sin(a)*.55,1.05);rod.rotation.x=Math.PI/2;g.add(rod)}
  const glass=new THREE.Mesh(new THREE.CylinderGeometry(.54,.6,1.85,24,1,true),new THREE.MeshPhysicalMaterial({color:0xf6a746,transparent:true,opacity:.18,roughness:.15,side:THREE.DoubleSide}));glass.rotation.x=Math.PI/2;glass.position.z=1.04;g.add(glass);
  const flame=new THREE.Mesh(new THREE.SphereGeometry(.16,16,12),new THREE.MeshBasicMaterial({color:0xffa22f}));flame.scale.y=1.7;flame.position.z=.85;g.add(flame);
  const glow=new THREE.PointLight(0xffb86e,1.15,6.2,2.4);glow.position.z=1;g.add(glow);g.position.set(-6.15,3.65,-.45);g.scale.setScalar(1.16);return g;
}const lantern=createLantern();world.add(lantern);

function createRope(){const pts=[];for(let i=0;i<26;i++){const a=i/25*Math.PI*2.2;pts.push(new THREE.Vector3(-5.8+Math.cos(a)*(1.7+i*.018),-.4+Math.sin(a)*1.2,-.45+i*.002))}const curve=new THREE.CatmullRomCurve3(pts);const rope=new THREE.Mesh(new THREE.TubeGeometry(curve,90,.09,8,false),new THREE.MeshStandardMaterial({color:0x80623b,roughness:1}));rope.castShadow=true;world.add(rope)}createRope();

const seal=new THREE.Mesh(new THREE.CylinderGeometry(.48,.52,.12,32),wax);seal.rotation.x=Math.PI/2;seal.position.set(5.45,-3.82,-.35);seal.castShadow=true;world.add(seal);
const sealMark=new THREE.Mesh(new THREE.TorusGeometry(.23,.045,8,24),new THREE.MeshStandardMaterial({color:0x481008,roughness:.7}));sealMark.position.set(5.45,-3.82,-.26);world.add(sealMark);

function noteTexture(text){return canvasTexture((ctx,s)=>{ctx.fillStyle='#F0E2C8';ctx.fillRect(0,0,s,s);noise(ctx,s,.07);ctx.fillStyle='rgba(58,39,22,.72)';ctx.font='italic 64px Georgia';ctx.textAlign='center';wrapText(ctx,text,70,180,s-140,78);ctx.strokeStyle='rgba(92,56,30,.55)';ctx.lineWidth=13;ctx.beginPath();ctx.moveTo(s*.7,s*.72);ctx.lineTo(s*.82,s*.84);ctx.moveTo(s*.82,s*.72);ctx.lineTo(s*.7,s*.84);ctx.stroke()},512)}
[['Trust the northern star',-4.7,-2.15,-.45,-.22],['To be continued…',5.0,-3.75,-.44,.16]].forEach(n=>{const note=new THREE.Mesh(new THREE.PlaneGeometry(2.3,1.45,5,4),new THREE.MeshStandardMaterial({map:noteTexture(n[0]),roughness:1,side:THREE.DoubleSide}));note.position.set(n[1],n[2],n[3]);note.rotation.z=n[4];note.castShadow=note.receiveShadow=true;world.add(note)});

// --- Lighting, atmospheric dust and volumetric shafts ------------------------
scene.add(new THREE.AmbientLight(0xf5fbff,1.12));
scene.add(new THREE.HemisphereLight(0xeaf7ff,0xd8e7ea,1.48));
const key=new THREE.SpotLight(0xfff8e8,72,48,.76,.9,1);key.position.set(-9,6,16);key.target.position.set(1.6,-.2,0);key.castShadow=true;key.shadow.mapSize.set(highQuality?2048:1024,highQuality?2048:1024);key.shadow.bias=-.0002;scene.add(key,key.target);
const fill=new THREE.PointLight(0xeaf7ff,22,28,2);fill.position.set(8,4,7);scene.add(fill);
const rim=new THREE.PointLight(0xcfeeff,14,26,2);rim.position.set(-8,3,6);scene.add(rim);

function addLightRay(x,y,rotation,scale){
  const geo=new THREE.CylinderGeometry(.15,2.5,14,32,1,true);
  const mat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.DoubleSide,uniforms:{color:{value:new THREE.Color(0xf4fbff)}},vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'uniform vec3 color;varying vec2 vUv;void main(){float a=sin(vUv.y*3.14159)*smoothstep(0.,.18,vUv.x)*smoothstep(0.,.18,1.-vUv.x);gl_FragColor=vec4(color,a*.024);}'});
  const ray=new THREE.Mesh(geo,mat);ray.position.set(x,y,8);ray.rotation.set(.55,rotation,.15);ray.scale.setScalar(scale);scene.add(ray);
}
addLightRay(-6,-2,-.5,.62);addLightRay(-3,1,-.2,.42);

const dustCount=compact?500:1300,dustGeo=new THREE.BufferGeometry(),dustPos=new Float32Array(dustCount*3),dustSeed=new Float32Array(dustCount);
for(let i=0;i<dustCount;i++){dustPos[i*3]=(Math.random()-.5)*24;dustPos[i*3+1]=(Math.random()-.5)*16;dustPos[i*3+2]=Math.random()*15-2;dustSeed[i]=Math.random()}
dustGeo.setAttribute('position',new THREE.BufferAttribute(dustPos,3));dustGeo.setAttribute('aSeed',new THREE.BufferAttribute(dustSeed,1));
const dustMat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,uniforms:{uTime:{value:0}},vertexShader:'uniform float uTime;attribute float aSeed;varying float vAlpha;void main(){vec3 p=position;p.y+=sin(uTime*.18+aSeed*20.)*.5;p.x+=cos(uTime*.12+aSeed*30.)*.35;vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=(2.0+aSeed*3.)*(10./-mv.z);gl_Position=projectionMatrix*mv;vAlpha=.07+aSeed*.16;}',fragmentShader:'varying float vAlpha;void main(){float d=distance(gl_PointCoord,vec2(.5));float a=smoothstep(.5,0.,d)*vAlpha;gl_FragColor=vec4(.9,.97,1.,a);}'});
scene.add(new THREE.Points(dustGeo,dustMat));

// --- Interaction and cinematic choreography ----------------------------------
let currentPage=0, entered=false, turning=false, dragStart=null,autoplayTimer=null;
const openingState={focusX:PAGE_W/2,focusY:0,active:true};
const chapters=pageStories.map(p=>p.chapter);
function updateUI(){
  ui.current.textContent=String(currentPage+1).padStart(2,'0');ui.chapter.textContent=String(currentPage+1).padStart(2,'0');ui.title.textContent=chapters[currentPage];
  ui.total.textContent=String(PAGE_COUNT).padStart(2,'0');
  ui.prev.disabled=currentPage===0;ui.next.disabled=currentPage===PAGE_COUNT-1;
  ui.chapterDots.forEach((dot,index)=>dot.classList.toggle('active',index===currentPage));
}
function stopAutoplay(){if(autoplayTimer){clearTimeout(autoplayTimer);autoplayTimer=null}}
function scheduleAutoplay(){stopAutoplay();if(currentPage<PAGE_COUNT-1)autoplayTimer=setTimeout(()=>turnTo(currentPage+1,true),2400)}
function setPageProgress(page,p){
  page.userData.progress=p;page.rotation.y=-p*Math.PI;
  page.userData.frontMat.uniforms.uTurn.value=p;page.userData.backMat.uniforms.uTurn.value=p;
}
function rightPageZ(index){return .13+(PAGE_COUNT-index)*.0038}
function leftPageZ(index){return .24+index*.0038}
function settlePagesForCurrentPage(activeIndex, exceptPage=null, extraVisible=[]){
  const extraVisibleSet=new Set(extraVisible.filter(index=>index>=0&&index<PAGE_COUNT));
  pages.forEach((page,i)=>{
    if(page===exceptPage){page.visible=true;return}
    const isLeft=i<activeIndex;
    setPageProgress(page,isLeft?1:0);
    page.position.z=isLeft?leftPageZ(i):rightPageZ(i);
    page.renderOrder=isLeft?20+i:0;
    if(isLeft)page.userData.backMat.uniforms.uReveal.value=1;
    if(i===activeIndex)page.userData.frontMat.uniforms.uReveal.value=1;
    page.visible=i===activeIndex||i===activeIndex-1||extraVisibleSet.has(i);
  });
}
function resetPagesForClosedBook(){
  pages.forEach((page,i)=>{
    gsap.killTweensOf(page.position);
    setPageProgress(page,0);
    page.position.z=rightPageZ(i);
    page.renderOrder=0;
    page.userData.frontMat.uniforms.uReveal.value=i===0?1:0;
    page.userData.backMat.uniforms.uReveal.value=0;
    page.visible=i===0;
  });
  currentPage=0;updateUI();
}
function turnTo(next,automatic=false){
  if(!automatic)stopAutoplay();
  if(!entered)return;
  next=Math.max(0,Math.min(PAGE_COUNT-1,next)); if(next===currentPage||turning)return;
  turning=true; const forward=next>currentPage; const page=pages[forward?currentPage:next]; const target=forward?1:0;
  settlePagesForCurrentPage(forward?next:currentPage,page,[currentPage-1,currentPage,next-1,next]);
  page.visible=true;page.renderOrder=100;
  const targetZ=forward ? leftPageZ(page.userData.index) : rightPageZ(page.userData.index);
  const state={p:page.userData.progress};
  const revealDuration=prefersReducedMotion?.42:1.05;
  const rightRevealDuration=prefersReducedMotion?.28:.72;
  const rightRevealDelay=prefersReducedMotion?.06:.22;
  if(forward){
    // Reveal the image on the reverse of the turning sheet and the image on
    // the next right-hand sheet with the same aged-ink animation.
    const backReveal=page.userData.backMat.uniforms.uReveal;
    const nextFrontReveal=pages[next].userData.frontMat.uniforms.uReveal;
    gsap.killTweensOf(backReveal);gsap.killTweensOf(nextFrontReveal);
    gsap.fromTo(backReveal,{value:0},{value:1,duration:revealDuration,delay:prefersReducedMotion?.12:.48,ease:'power2.out'});
    gsap.fromTo(nextFrontReveal,{value:0},{value:1,duration:rightRevealDuration,delay:rightRevealDelay,ease:'power2.out'});
  }else{
    // Replaying a previous page reveals its front face as it returns right.
    const frontReveal=page.userData.frontMat.uniforms.uReveal;
    gsap.killTweensOf(frontReveal);
    gsap.fromTo(frontReveal,{value:0},{value:1,duration:rightRevealDuration,delay:rightRevealDelay,ease:'power2.out'});
  }
  gsap.fromTo('.light-leak',{opacity:.055},{opacity:.14,duration:.5,yoyo:true,repeat:1,ease:'sine.inOut'});
  const pullbackDuration=prefersReducedMotion?.2:1.65;
  const flipStart=prefersReducedMotion?.08:1.55;
  const flipDuration=prefersReducedMotion?.45:1.85;
  const spreadZoomStart=flipStart+flipDuration+(prefersReducedMotion?0:.18);
  const leftZoomDuration=prefersReducedMotion?.2:1.85;
  const leftHoldDuration=prefersReducedMotion?0:2.4;
  const spreadScanDuration=prefersReducedMotion?.3:2.75;
  gsap.timeline({onComplete(){page.userData.progress=target;currentPage=next;settlePagesForCurrentPage(currentPage);turning=false;updateUI();if(automatic)scheduleAutoplay();}})
    .to(camera.position,{...cameraAngles.flipWide,duration:pullbackDuration,ease:'sine.inOut'},0)
    .to(camera,{fov:cameraFov.normal,duration:pullbackDuration,ease:'sine.inOut',onUpdate:()=>camera.updateProjectionMatrix()},0)
    .to(openingState,{focusY:0,duration:pullbackDuration,ease:'sine.inOut'},0)
    .to(state,{p:target,duration:flipDuration,ease:'power2.inOut',onUpdate(){
      setPageProgress(page,state.p);
    }},flipStart)
    .to(page.position,{z:targetZ,duration:flipDuration,ease:'power2.inOut'},flipStart)
    .to(camera.position,{...cameraAngles.pageTurn(forward),duration:flipDuration*.78,ease:'sine.inOut'},flipStart)
    .to(camera.position,{...cameraAngles.leftImageZoom,duration:leftZoomDuration,ease:'sine.inOut'},spreadZoomStart)
    .to(camera,{fov:cameraFov.close,duration:leftZoomDuration,ease:'sine.inOut',onUpdate:()=>camera.updateProjectionMatrix()},spreadZoomStart)
    .to(openingState,{focusX:VIDEO_SPREAD_SCAN_START_X,duration:leftZoomDuration,ease:'sine.inOut'},spreadZoomStart)
    .to(openingState,{focusY:VIDEO_LEFT_IMAGE_FOCUS_Y,duration:leftZoomDuration,ease:'sine.inOut'},spreadZoomStart)
    .to(camera.position,{...cameraAngles.spreadZoom,duration:spreadScanDuration,ease:'sine.inOut'},spreadZoomStart+leftZoomDuration+leftHoldDuration)
    .to(openingState,{focusX:VIDEO_SPREAD_SCAN_END_X,duration:spreadScanDuration,ease:'sine.inOut'},spreadZoomStart+leftZoomDuration+leftHoldDuration)
    .to(openingState,{focusY:VIDEO_RIGHT_IMAGE_FOCUS_Y,duration:spreadScanDuration,ease:'sine.inOut'},spreadZoomStart+leftZoomDuration+leftHoldDuration)
    .to(world.rotation,{z:forward?-.055:-.005,duration:flipDuration*.65,yoyo:true,repeat:1,ease:'sine.inOut'},flipStart);
}
function enterExperience(){
  if(entered)return;entered=true;
  document.documentElement.classList.remove('book-closed');
  if(ui.enter){ui.enter.tabIndex=-1;ui.enter.setAttribute('aria-hidden','true')}
  const openDuration=prefersReducedMotion ? .7 : 2.35;
  document.documentElement.classList.add('is-opening');
  const tl=gsap.timeline({delay:.8,defaults:{ease:'power3.inOut'},onComplete(){openingState.active=false;document.documentElement.classList.remove('is-opening');scheduleAutoplay()}});

  // 1. Establish the closed captain's journal with a deliberate camera push.
  moveCamera(tl,cameraAngles.establish,prefersReducedMotion ? .25 : .72,0,'power2.out')
    .to(camera.position,{...cameraAngles.closed,duration:prefersReducedMotion ? .35 : 1.05,ease:'power2.inOut'},prefersReducedMotion ? .18 : .42)
    .to(camera,{fov:cameraFov.normal,duration:prefersReducedMotion ? .35 : 1.05,ease:'power2.inOut',onUpdate:()=>camera.updateProjectionMatrix()},prefersReducedMotion ? .18 : .42)
    .to(book.rotation,{z:-.008,duration:1.05,ease:'sine.inOut'},0)

  // 2. Lift the heavy cover before swinging it. The upward motion creates a clear shadow gap.
    .to(coverPivot.position,{z:.68,duration:prefersReducedMotion ? .18 : .48,ease:'power2.out'},prefersReducedMotion ? .25 : 1.02)
    .to(coverPivot.rotation,{y:-.24,duration:prefersReducedMotion ? .18 : .48,ease:'power2.out'},prefersReducedMotion ? .25 : 1.02)

  // 3. Open through a wide arc, then drift into a slow scan across the first image.
    // Negative Y rotation carries the cover toward the camera and above the
    // page block. Positive rotation would send it underneath the book.
    .to(coverPivot.rotation,{y:-Math.PI,duration:openDuration,ease:'power3.inOut'},prefersReducedMotion ? .42 : 1.42)
    .to(world.position,{...worldPositions.open,duration:openDuration,ease:'power2.inOut'},prefersReducedMotion ? .42 : 1.42)
    .to(openingState,{focusX:FIRST_PHOTO_CENTER_X,duration:openDuration*.85,ease:'power2.inOut'},prefersReducedMotion ? .42 : 1.42)
    .to(openingState,{focusY:FIRST_PHOTO_CENTER_Y,duration:openDuration*.85,ease:'power2.inOut'},prefersReducedMotion ? .42 : 1.42)
    .to(camera.position,{...cameraAngles.coverOpen,duration:openDuration*.58,ease:'power2.inOut'},prefersReducedMotion ? .42 : 1.42)
    .to(camera.position,{...firstPhotoCamera,duration:openDuration*.82,ease:'sine.inOut'},prefersReducedMotion ? .72 : 2.45)
    .to(camera,{fov:cameraFov.close,duration:openDuration*.82,ease:'sine.inOut',onUpdate:()=>camera.updateProjectionMatrix()},prefersReducedMotion ? .72 : 2.45)
    .to(openingState,{focusX:FIRST_PHOTO_CENTER_X,duration:prefersReducedMotion ? .3 : 3.35,ease:'sine.inOut'},prefersReducedMotion ? .82 : 2.72)
    .to(openingState,{focusY:FIRST_PHOTO_CENTER_Y,duration:prefersReducedMotion ? .3 : 3.35,ease:'sine.inOut'},prefersReducedMotion ? .82 : 2.72)
    .to(pages[currentPage].userData.frontMat.uniforms.uReveal,{value:1,duration:1.25,ease:'power2.out'},prefersReducedMotion ? .68 : 3.42)
    .fromTo('.light-leak',{opacity:.05},{opacity:.16,duration:.55,yoyo:true,repeat:1,ease:'sine.inOut'},prefersReducedMotion ? .55 : 3.32)

  // 4. Settle only after the rotation is complete. Overlapping these motions
  // caused the cover to pass through its page block on the final quarter-turn.
    .to(coverPivot.position,{z:-.5,duration:prefersReducedMotion ? .18 : .6,ease:'back.out(1.2)'},prefersReducedMotion ? 1.12 : 3.8)
    .set(ui.story,{visibility:'visible'},prefersReducedMotion ? 1.08 : 4.02)
    .to(ui.story,{opacity:1,duration:.8},prefersReducedMotion ? 1.12 : 4.1);
}
function closeExperience(){
  if(!entered||turning)return;
  stopAutoplay();turning=true;openingState.active=true;document.documentElement.classList.add('is-opening');
  const closeDuration=prefersReducedMotion?.65:2.05;
  const returningPages=pages.filter(page=>page.visible&&page.userData.progress>.001).map(page=>({page,state:{p:page.userData.progress}}));
  const tl=gsap.timeline({defaults:{ease:'power3.inOut'},onComplete(){
    resetPagesForClosedBook();
    entered=false;turning=false;document.documentElement.classList.remove('is-opening');document.documentElement.classList.add('book-closed');
    if(ui.enter){ui.enter.textContent='Reopen Book';ui.enter.tabIndex=0;ui.enter.setAttribute('aria-hidden','false')}
    if(ui.intro)gsap.set(ui.intro,{opacity:1});
  }});
  returningPages.forEach(({page,state})=>{
    page.visible=true;page.renderOrder=90;
    tl.to(state,{p:0,duration:prefersReducedMotion?.2:.78,ease:'power2.inOut',onUpdate(){setPageProgress(page,state.p)}},0);
    tl.to(page.position,{z:rightPageZ(page.userData.index),duration:prefersReducedMotion?.2:.78,ease:'power2.inOut'},0);
  });
  tl
    .to(ui.story,{opacity:0,duration:.35},0)
    .set(ui.story,{visibility:'hidden'},.36)
    .to(coverPivot.position,{z:.68,duration:prefersReducedMotion?.16:.45,ease:'power2.out'},.12)
    .to(coverPivot.rotation,{y:0,duration:closeDuration},prefersReducedMotion?.22:.42)
    .to(world.position,{...worldPositions.closed,duration:closeDuration,ease:'power2.inOut'},prefersReducedMotion?.22:.42)
    .to(openingState,{focusX:PAGE_W/2,duration:closeDuration*.82,ease:'power2.inOut'},prefersReducedMotion?.22:.42)
    .to(openingState,{focusY:0,duration:closeDuration*.82,ease:'power2.inOut'},prefersReducedMotion?.22:.42)
    .to(camera.position,{...cameraAngles.closed,duration:closeDuration+.12,ease:'power2.inOut'},prefersReducedMotion?.22:.42)
    .to(camera,{fov:cameraFov.normal,duration:closeDuration+.12,ease:'power2.inOut',onUpdate:()=>camera.updateProjectionMatrix()},prefersReducedMotion?.22:.42)
    .to(coverPivot.position,{z:.43,duration:prefersReducedMotion?.16:.5,ease:'back.out(1.15)'},prefersReducedMotion?.7:2.48);
}
ui.enter?.addEventListener('click',enterExperience);ui.closeBook.addEventListener('click',closeExperience);ui.next.addEventListener('click',()=>turnTo(currentPage+1));ui.prev.addEventListener('click',()=>turnTo(currentPage-1));
ui.chapterDots.slice(0,PAGE_COUNT).forEach((dot,index)=>dot.addEventListener('click',()=>turnTo(index)));

// --- Temporary voyage photo uploads -----------------------------------------
// Object URLs keep photos in browser memory only. Nothing is uploaded or saved.
const uploadedPhotos=[];
function showToast(message){
  ui.toast.textContent=message;gsap.killTweensOf(ui.toast);gsap.timeline().to(ui.toast,{opacity:1,y:0,duration:.25}).to(ui.toast,{opacity:0,y:-8,duration:.4,delay:1.5});
}
function photoRectForPageSide(pageIndex,side){
  if(side==='back')return {x:120,y:165,w:780,h:430};
  return pageIndex===0?{x:132,y:225,w:750,h:390}:{x:122,y:190,w:780,h:445};
}
function setPhotoColorProtection(material,pageIndex,side){
  const rect=photoRectForPageSide(pageIndex,side);
  material.uniforms.uPhotoRect.value.set(rect.x/1024,1-(rect.y+rect.h)/1024,(rect.x+rect.w)/1024,1-rect.y/1024);
  material.uniforms.uPhotoProtect.value=1;
  material.uniforms.uPhotoBrightness.value=1.18;
}
function applyPhotoToFace(photo,pageIndex,side,{notify=true}={}){
  if(turning){if(notify)showToast('Wait for the page to settle');return false}
  if(pageIndex<0||pageIndex>=PAGE_COUNT)return false;
  const page=pages[pageIndex];
  const nextTexture=createPageTexture(pageStories[pageIndex],side,pageIndex,photo.image);
  if(side==='front'){
    page.userData.frontMat.uniforms.map.value=nextTexture;
    page.userData.frontTexture.dispose();page.userData.frontTexture=nextTexture;
    setPhotoColorProtection(page.userData.frontMat,pageIndex,side);
  }else{
    page.userData.backMat.uniforms.map.value=nextTexture;
    page.userData.backTexture.dispose();page.userData.backTexture=nextTexture;
    setPhotoColorProtection(page.userData.backMat,pageIndex,side);
  }
  if(pageIndex===currentPage)document.querySelectorAll('.photo-thumb').forEach(button=>button.classList.toggle('active',button.dataset.url===photo.url));
  if(notify)showToast(`Photo placed on ${side} of page ${pageIndex+1}`);
  return true;
}
function applyPhotoToPage(photo,pageIndex,options){
  return applyPhotoToFace(photo,pageIndex,'front',options);
}
function applyPhotoToCurrentPage(photo){
  applyPhotoToPage(photo,currentPage);
}
function applyPhotosAcrossPages(photos){
  if(turning){showToast('Wait for the page to settle');return}
  const available=(PAGE_COUNT-currentPage)*2;
  const placed=photos.slice(0,available).filter((photo,index)=>{
    const pageIndex=currentPage+Math.floor(index/2);
    const side=index%2===0?'front':'back';
    return applyPhotoToFace(photo,pageIndex,side,{notify:false});
  }).length;
  if(placed>0){
    document.querySelectorAll('.photo-thumb').forEach(button=>button.classList.toggle('active',button.dataset.url===photos[0].url));
    const lastPage=currentPage+Math.ceil(placed/2);
    const rangeText=placed===1?`Photo placed on page ${currentPage+1}`:`${placed} photos placed front/back across pages ${currentPage+1}-${lastPage}`;
    showToast(photos.length>available?`${rangeText}; ${photos.length-available} not placed`:rangeText);
  }else{
    showToast('No pages available from here');
  }
}
function addPhotoThumbnail(photo){
  ui.photoStrip.querySelector('.photo-strip__empty')?.remove();
  const button=document.createElement('button');button.type='button';button.className='photo-thumb';button.dataset.url=photo.url;button.setAttribute('aria-label',`Use ${photo.name} on the current page`);
  const image=document.createElement('img');image.src=photo.url;image.alt='';button.append(image);button.addEventListener('click',()=>applyPhotoToCurrentPage(photo));ui.photoStrip.append(button);
}
ui.addPhoto.addEventListener('click',()=>ui.photoInput.click());
ui.photoInput.addEventListener('change',()=>{
  // Multiple files are supported; each receives its own revokable browser URL.
  const files=[...ui.photoInput.files].filter(file=>file.type.startsWith('image/'));
  if(!files.length){ui.photoInput.value='';return}
  const photos=new Array(files.length);let finished=0;
  files.forEach((file,index)=>{
    const url=URL.createObjectURL(file);const image=new Image();
    image.onload=()=>{
      const photo={url,image,name:file.name};photos[index]=photo;uploadedPhotos.push(photo);addPhotoThumbnail(photo);
      finished++;
      if(finished===files.length)applyPhotosAcrossPages(photos.filter(Boolean));
    };
    image.onerror=()=>{
      URL.revokeObjectURL(url);showToast(`Could not read ${file.name}`);finished++;
      if(finished===files.length)applyPhotosAcrossPages(photos.filter(Boolean));
    };
    image.src=url;
  });
  ui.photoInput.value='';
});
// Release temporary photo memory when the experience closes.
addEventListener('beforeunload',()=>uploadedPhotos.forEach(photo=>URL.revokeObjectURL(photo.url)));

ui.editPage.addEventListener('click',()=>{
  const editing=document.querySelector('.experience').classList.toggle('editing');ui.editPage.querySelector('span').textContent=editing?'Save Page':'Edit Page';showToast(editing?'Page editing enabled':'Page changes kept for this session');
});
ui.settings.addEventListener('click',()=>{document.body.classList.toggle('calm-mode');showToast(document.body.classList.contains('calm-mode')?'Reduced visual effects':'Full atmosphere restored')});

addEventListener('keydown',e=>{if(!entered&&['Enter',' '].includes(e.key))enterExperience();else if(entered&&e.key==='Escape')closeExperience();else if(entered&&e.key==='ArrowRight')turnTo(currentPage+1);else if(entered&&e.key==='ArrowLeft')turnTo(currentPage-1)});
let wheelLock=false;addEventListener('wheel',e=>{if(!entered||wheelLock||Math.abs(e.deltaY)<8)return;wheelLock=true;turnTo(currentPage+(e.deltaY>0?1:-1));setTimeout(()=>wheelLock=false,1400)},{passive:true});
canvas.addEventListener('pointerdown',e=>{dragStart=e.clientX;canvas.setPointerCapture(e.pointerId)});
canvas.addEventListener('pointerup',e=>{if(entered&&dragStart!==null&&Math.abs(e.clientX-dragStart)>45)turnTo(currentPage+(e.clientX<dragStart?1:-1));dragStart=null});

const pointer=new THREE.Vector2(),lookTarget=new THREE.Vector3();
addEventListener('pointermove',e=>{pointer.x=e.clientX/innerWidth*2-1;pointer.y=e.clientY/innerHeight*2-1});
addEventListener('resize',()=>{
  camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setPixelRatio(Math.min(devicePixelRatio,innerWidth<760?1.35:1.8));renderer.setSize(innerWidth,innerHeight);composer.setSize(innerWidth,innerHeight);
});

// Intro reveal.
gsap.timeline({delay:.65})
  .to(ui.loader.querySelector('p'),{opacity:0,duration:.35})
  .to(ui.loader,{opacity:0,duration:.9,ease:'power2.inOut',onComplete:()=>{ui.loader.remove();enterExperience();}},.25);

const clock=new THREE.Clock();
// A restrained, perpetual orbit supplies the slow cinematic drift between actions.
if (!prefersReducedMotion) gsap.to(world.rotation,{y:.012,x:-.018,duration:8,ease:'sine.inOut',repeat:-1,yoyo:true});
function animate(){
  const t=clock.getElapsedTime();dustMat.uniforms.uTime.value=t;
  // Small camera drift keeps the frame alive without fighting the main GSAP move.
  const px=openingState.active?0:(entered?pointer.x*.09:pointer.x*.18),py=openingState.active?0:(entered?pointer.y*.07:pointer.y*.13);
  lookTarget.set(world.position.x+openingState.focusX+px,world.position.y+openingState.focusY-py,0);
  camera.lookAt(lookTarget);
  key.intensity=(openingState.active?78:72)+Math.sin(t*.7)*.65;
  const lanternGlow=lantern.children.find(child=>child.isPointLight);if(lanternGlow)lanternGlow.intensity=1.05+Math.sin(t*8.3)*.12+Math.sin(t*13.7)*.08;
  if(compass?.userData.needle){
    const panic=t*(5.8+Math.sin(t*1.7)*2.4)+Math.sin(t*11.5)*.42+Math.sin(t*23.3)*.12;
    compass.userData.needle.rotation.z=panic;
    compass.userData.rose.rotation.z=-panic*.12+Math.sin(t*7.1)*.035;
    compass.userData.face.rotation.z=Math.sin(t*5.6)*.018;
    compass.userData.glass.material.opacity=.1+Math.abs(Math.sin(t*10.2))*.08;
    compass.position.z=-.72+Math.sin(t*18.5)*.012;
  }
  telescope.rotation.x=.18+Math.sin(t*1.15)*.018;telescope.rotation.z=-.9+Math.sin(t*.85)*.012;
  if(highQuality)composer.render();else renderer.render(scene,camera);
  requestAnimationFrame(animate);
}
updateUI();animate();
