var t,i;import{G as e,c as n}from"./vendor.13378c34.js";!function(t=".",i="__import__"){try{self[i]=new Function("u","return import(u)")}catch(e){const n=new URL(t,location),s=t=>{URL.revokeObjectURL(t.src),t.remove()};self[i]=t=>new Promise(((e,a)=>{const r=new URL(t,n);if(self[i].moduleMap[r])return e(self[i].moduleMap[r]);const o=new Blob([`import * as m from '${r}';`,`${i}.moduleMap['${r}']=m;`],{type:"text/javascript"}),h=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){a(new Error(`Failed to import: ${t}`)),s(h)},onload(){e(self[i].moduleMap[r]),s(h)}});document.head.appendChild(h)})),self[i].moduleMap={}}}("assets/");let s={x:0,y:0,down:!1};const a=document.getElementById("canvas"),r=a.getContext("2d");a.addEventListener("mousedown",(()=>{s.down=!0}));const o=1024;var h=window.innerWidth,l=window.innerHeight,d=window.innerWidth*(null!=(t=window.devicePixelRatio)?t:1),c=window.innerHeight*(null!=(i=window.devicePixelRatio)?i:1);let y=Math.min(o/d,o/c);h=y*d,l=y*c,a.addEventListener("mousemove",(t=>{var i,e;s.x=t.clientX*y*(null!=(i=window.devicePixelRatio)?i:1),s.y=t.clientY*y*(null!=(e=window.devicePixelRatio)?e:1)}));const m=()=>{var t,i;d=window.innerWidth*(null!=(t=window.devicePixelRatio)?t:1),c=window.innerHeight*(null!=(i=window.devicePixelRatio)?i:1),y=Math.min(o/d,o/c),h=y*d,l=y*c,a.width=d,a.height=c};window.addEventListener("resize",m);const f=new class{constructor(){this.ARC=!1,this.GRAVITY_Y=.125,this.GRAVITY_X=0,this.RANGE=32,this.PRESSURE=1,this.VISCOSITY=.05,this.DARK=!0}},x=new e;x.add(f,"DARK").name("dark mode"),x.add(f,"ARC").name("circles"),x.add(f,"VISCOSITY").name("viscosity").max(.5).min(0).step(.025),x.add(f,"GRAVITY_X").name("gravity x").max(1).min(-1).step(.125),x.add(f,"GRAVITY_Y").name("gravity y").max(1).min(-1).step(.125),m();var v=f.RANGE*f.RANGE,w=Math.ceil(o/f.RANGE),u=Math.ceil(o/f.RANGE),R=1/(h/w),g=1/(l/u),p=[],E=0,A=[],M=0,G=0,_=[],S=0,P=new Date;function N(t,i){for(var e=0;e<i.numParticles;e++){var n=i.particles[e];if(t!=n)(t.x-n.x)*(t.x-n.x)+(t.y-n.y)*(t.y-n.y)<v&&(A.length==M&&(A[M]=new b),A[M++].setParticle(t,n))}}class I{constructor(t,i){this.min_d=f.RANGE,this.min_dc=1,this.x=t,this.y=i,this.gx=0,this.gy=0,this.vx=0,this.vy=0,this.fx=0,this.fy=0,this.rx=0,this.ry=0,this.density=0,this.pressure=0,this.color=Math.random()}move(){this.rx=.9*this.rx+.1*this.fx*Math.sign(this.fy),this.ry=.9*this.ry+.1*this.fy*Math.sign(this.fy),this.vy+=f.GRAVITY_Y+1e-4*(Math.random()-.5),this.vx+=f.GRAVITY_X+1e-4*(Math.random()-.5),this.vx+=this.fx,this.vy+=this.fy,this.x+=this.vx,this.y+=this.vy,this.color=0}calcForce(){let t=f.RANGE;this.x<t&&(this.fx+=.125*(t-this.x)-.5*this.vx),this.y<t&&(this.fy+=.125*(t-this.y)-.5*this.vy),this.x>h-t&&(this.fx+=.125*(h-t-this.x)-.5*this.vx),this.y>l-t&&(this.fy+=.125*(l-t-this.y)-.5*this.vy)}}class b{constructor(){this.distance=0,this.nx=0,this.ny=0,this.weight=0}setParticle(t,i){this.p1=t,this.p2=i,this.nx=t.x-i.x+.005*(Math.random()-.5),this.ny=t.y-i.y+.005*(Math.random()-.5),this.distance=Math.sqrt(this.nx*this.nx+this.ny*this.ny),this.weight=1-Math.max(this.distance,1)/f.RANGE;var e=this.weight*this.weight*this.weight;t.density+=e,i.density+=e,e=1/Math.max(this.distance,1),this.nx*=e,this.ny*=e}calcForce(){if(!this.p1||!this.p2)return;let{p1:t,p2:i}=this;var e=this.weight*(t.pressure+i.pressure)/(t.density+i.density)*f.PRESSURE,n=this.weight/(t.density+i.density)*f.VISCOSITY;t.fx+=this.nx*e,t.fy+=this.ny*e,i.fx-=this.nx*e,i.fy-=this.ny*e;var s=i.vx-t.vx,a=i.vy-t.vy;t.fx+=s*n,t.fy+=a*n,i.fx-=s*n,i.fy-=a*n,t.min_d=Math.min(t.min_d,this.distance),t.min_dc=1,i.min_d=Math.min(i.min_d,this.distance),i.min_dc=1}}class C{constructor(){this.particles=[],this.numParticles=0}clear(){this.numParticles=0,this.particles=[]}add(t){this.particles[this.numParticles++]=t}}for(var D=0;D<w;D++){_[D]=new Array(u);for(var T=0;T<u;T++)_[D][T]=new C}a.addEventListener("mouseup",(()=>{s.down=!1}),!1),window.setInterval((function(){var t=S+0;S=0,s.down&&function(){if(G%1==0){var t=new I(s.x+(Math.random()-.5)*f.RANGE,s.y+(Math.random()-.5)*f.RANGE);p[E++]=t}}(),Math.sin((new Date).getTime()/2e3),function(t){G++;for(var i=0;i<E;i++)for(var e=p[i],n=0;n<t;n++)e.move()}(t),r.font="30px Arial"}),1e3/60),window.setInterval((function(){let t=new Date;S+=Math.min((+t-+P)/60,2),P=t}),1e3/60),window.setTimeout((function t(){!function(){var t,i;for(R=1/(h/w),g=1/(l/u),t=0;t<w;t++)for(i=0;i<u;i++)_[t][i].clear();for(t=0;t<E;t++){var e=p[t];e.min_d=f.RANGE,e.min_dc=1,e.fx=e.fy=e.density=0,e.gx=Math.floor(e.x*R),e.gy=Math.floor(e.y*g),e.gx<0&&(e.gx=0),e.gy<0&&(e.gy=0),e.gx>w-1&&(e.gx=w-1),e.gy>u-1&&(e.gy=u-1),_[e.gx][e.gy].add(e)}}(),function(){M=0;let t=Math.ceil(f.RANGE/(h/w)),i=Math.ceil(f.RANGE/(l/u));for(var e=0;e<E;e++){var n=p[e];for(let e=-t;e<=t;e+=1)if(e+n.gx>=0&&e+n.gx<w)for(let t=-i;t<=i;t+=1)t+n.gy>=0&&t+n.gy<u&&N(n,_[n.gx+e][n.gy+t])}}(),function(){for(var t=0;t<E;t++){var i=p[t];i.density<.1&&(i.density=.1),i.pressure=i.density-.1}}(),function(){for(var t=0;t<M;t++){A[t].calcForce()}for(t=0;t<E;t++)p[t].calcForce()}(),window.setTimeout(t,1e3/60)}),1e3/60),requestAnimationFrame((function t(){r.resetTransform(),r.scale(1/y,1/y),r.fillStyle="#EBE8E7",r.fillStyle="#312D32";let i=f.DARK?"#312D32":"#EBE8E7";r.fillStyle=i,r.fillRect(0,0,h,l),r.fillStyle="blue",r.strokeStyle="blue",r.fillStyle="#3ED9D8",r.globalCompositeOperation="source-over",r.fillStyle=n.blend(n("#55EEEE"),i,f.DARK?"screen":"multiply").hex();for(var e=0;e<E;e++){var s=p[e];r.save(),r.translate(s.x,s.y),r.rotate(Math.atan2(s.rx,-s.ry));let t=Math.max(f.RANGE/2-(s.min_dc<1?f.RANGE/2:s.min_d/s.min_dc/2),0)/2,i=t;f.ARC?(r.beginPath(),r.arc(0,0,i+2,0,2*Math.PI,!1),r.fill()):r.fillRect(0-(i+2),0-(t+2),2*(i+2),2*(t+2)),r.restore()}for(r.globalCompositeOperation="source-over",r.fillStyle=n.blend(n("#55EEEE").brighten(f.DARK?-1:1),i,f.DARK?"screen":"multiply").hex(),e=0;e<E;e++){s=p[e];r.save(),r.translate(s.x,s.y),r.rotate(Math.atan2(s.rx,-s.ry));let t=Math.max(0,f.RANGE/2-(s.min_dc<1?f.RANGE/2:s.min_d/s.min_dc/2))/2,i=t;f.ARC?(r.beginPath(),r.arc(0,0,i,0,2*Math.PI,!1),r.fill()):r.fillRect(0-i,0-t,2*i,2*t),r.restore()}var a=r.createRadialGradient(0,0,0,0,0,f.RANGE/Math.sqrt(2));a.addColorStop(0,"hsla(180, 67%, 55%,100%)"),a.addColorStop(1,"hsla(180, 67%, 55%,0%)"),r.fillStyle=a,r.globalAlpha=1,r.filter="none",r.globalCompositeOperation="source-over",requestAnimationFrame(t)}));