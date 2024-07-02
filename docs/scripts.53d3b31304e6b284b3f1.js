var cH,cW,c=document.getElementById("c"),ctx=c.getContext("2d"),bgColor="#FF6138",animations=[],circles=[],colorPicker=function(){var e=["#FF6138","#FFBE53","#2980B9","#282741"],t=0;return{next:function(){return t=t++<e.length-1?t:0,e[t]},current:function(){return e[t]}}}();function removeAnimation(e){var t=animations.indexOf(e);t>-1&&animations.splice(t,1)}function calcPageFillRadius(e,t){var n=Math.max(e-0,cW-e),i=Math.max(t-0,cH-t);return Math.sqrt(Math.pow(n,2)+Math.pow(i,2))}function addClickListeners(){document.addEventListener("touchstart",handleEvent),document.addEventListener("mousedown",handleEvent)}function handleEvent(e){e.touches&&(e.preventDefault(),e=e.touches[0]);for(var t=colorPicker.current(),n=colorPicker.next(),i=calcPageFillRadius(e.pageX,e.pageY),a=Math.min(200,.4*cW),o=new Circle({x:e.pageX,y:e.pageY,r:0,fill:n}),c=anime({targets:o,r:i,duration:Math.max(i/2,750),easing:"easeOutQuart",complete:function(){bgColor=o.fill,removeAnimation(c)}}),r=new Circle({x:e.pageX,y:e.pageY,r:0,fill:t,stroke:{width:3,color:t},opacity:1}),l=anime({targets:r,r:a,opacity:0,easing:"easeOutExpo",duration:900,complete:removeAnimation}),s=[],u=0;u<32;u++){var d=new Circle({x:e.pageX,y:e.pageY,fill:t,r:anime.random(24,48)});s.push(d)}var m=anime({targets:s,x:function(e){return e.x+anime.random(a,-a)},y:function(e){return e.y+anime.random(1.15*a,1.15*-a)},r:0,easing:"easeOutExpo",duration:anime.random(1e3,1300),complete:removeAnimation});animations.push(c,l,m)}function extend(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var Circle=function(e){extend(this,e)};Circle.prototype.draw=function(){ctx.globalAlpha=this.opacity||1,ctx.beginPath(),ctx.arc(this.x,this.y,this.r,0,2*Math.PI,!1),this.stroke&&(ctx.strokeStyle=this.stroke.color,ctx.lineWidth=this.stroke.width,ctx.stroke()),this.fill&&(ctx.fillStyle=this.fill,ctx.fill()),ctx.closePath(),ctx.globalAlpha=1};var animate=anime({duration:1/0,update:function(){ctx.fillStyle=bgColor,ctx.fillRect(0,0,cW,cH),animations.forEach((function(e){e.animatables.forEach((function(e){e.target.draw()}))}))}}),resizeCanvas=function(){cW=window.innerWidth,cH=window.innerHeight,c.width=cW*devicePixelRatio,c.height=cH*devicePixelRatio,ctx.scale(devicePixelRatio,devicePixelRatio)};function handleInactiveUser(){var e=setTimeout((function(){fauxClick(cW/2,cH/2)}),2e3);function t(){clearTimeout(e),document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}document.addEventListener("mousedown",t),document.addEventListener("touchstart",t)}function startFauxClicking(){setTimeout((function(){fauxClick(anime.random(.2*cW,.8*cW),anime.random(.2*cH,.8*cH)),startFauxClicking()}),anime.random(200,900))}function fauxClick(e,t){var n=new Event("mousedown");n.pageX=e,n.pageY=t,document.dispatchEvent(n)}resizeCanvas(),window.CP&&(window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT=6e3),window.addEventListener("resize",resizeCanvas),addClickListeners(),window.location.pathname.match(/fullcpgrid/)&&startFauxClicking(),handleInactiveUser();