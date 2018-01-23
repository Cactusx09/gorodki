//table of contents generate plugin
/*! anchorific 2014-08-06 */
"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),function(a,b,c,d){"use strict";var e={init:function(b,c){var d=this;d.elem=c,d.$elem=a(c),d.opt=a.extend({},this.opt,b),d.headers=d.$elem.find("h1, h2, h3, h4, h5, h6"),d.previous=0,0!==d.headers.length&&(d.first=parseInt(d.headers.prop("nodeName").substring(1),null)),d.build()},opt:{navigation:".anchorific",speed:200,anchorClass:"anchor",anchorText:"#",top:".top",spy:!0,position:"append",spyOffset:!0},build:function(){var b,c=this,d=function(){};c.opt.navigation&&(a(c.opt.navigation).append("<ul />"),c.previous=a(c.opt.navigation).find("ul").last(),d=function(a){return c.navigations(a)});for(var e=0;e<c.headers.length;e++)b=c.headers.eq(e),d(b),c.anchor(b);c.opt.spy&&c.spy(),c.opt.top&&c.back()},navigations:function(b){var c,e,f,g=this,h=g.name(b);b.attr("id")!==d&&(h=b.attr("id")),c=a("<a />").attr("href","#"+h).text(b.text()),e=a("<li />").append(c),f=parseInt(b.prop("nodeName").substring(1),null),e.attr("data-tag",f),g.subheadings(f,e),g.first=f},subheadings:function(b,c){var d=this,e=(a(d.opt.navigation).find("ul"),a(d.opt.navigation).find("li"));b===d.first?d.previous.append(c):b>d.first?(e.last().append("<ul />"),a(d.opt.navigation).find("ul").last().append(c),d.previous=c.parent()):(a("li[data-tag="+b+"]").last().parent().append(c),d.previous=c.parent())},name:function(a){var b=a.text().replace(/[^\w\s]/gi,"").replace(/\s+/g,"-").toLowerCase();return b},anchor:function(b){var c,e,f=this,g=f.name(b),h=f.opt.anchorText,i=f.opt.anchorClass;b.attr("id")===d&&b.attr("id",g),e=b.attr("id"),c=a("<a />").attr("href","#"+e).html(h).addClass(i),"append"===f.opt.position?b.append(c):b.prepend(c)},back:function(){var b=this,c=a("body, html"),d=a(b.opt.top);d.on("click",function(a){a.preventDefault(),c.animate({scrollTop:0},b.opt.speed)})},top:function(b){var c,d=this,e=d.opt.top;e!==!1&&(c=a(b).scrollTop()>200?a(e).fadeIn():a(e).fadeOut())},spy:function(){var c,e,f,g=this;a(b).scroll(function(){g.top(this),c=g.headers.map(function(){return a(this).offset().top-a(b).scrollTop()<g.opt.spyOffset?this:void 0}),c=a(c).eq(c.length-1),c&&c.length&&(e=a('li:has(a[href="#'+c.attr("id")+'"])'),f!==d&&f.removeClass("active"),e.addClass("active"),f=e)})}};a.fn.anchorific=function(b){return this.each(function(){if(!a.data(this,"anchorific")){var c=Object.create(e);c.init(b,this),a.data(this,"anchorific",c)}})}}(jQuery,window,document);


//preloader
window.paceOptions={
//	ajax: false,
	restartOnPushState: false,
//	restartOnRequestAfter: false
};
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].slice,Y={}.hasOwnProperty,Z=function(a,b){function c(){this.constructor=a}for(var d in b)Y.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},$=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(u={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},C=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(a){return setTimeout(a,50)},t=function(a){return clearTimeout(a)}),G=function(a){var b,c;return b=C(),(c=function(){var d;return d=C()-b,d>=33?(b=C(),a(d,function(){return E(c)})):setTimeout(c,33-d)})()},F=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?X.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},v=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?X.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)Y.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?v(b[a],e):b[a]=e);return b},q=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},x=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)this.bindings[a][c].handler===b?e.push(this.bindings[a].splice(c,1)):e.push(c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),f?i.push(this.bindings[c].splice(e,1)):i.push(e++);return i}},a}(),j=window.Pace||{},window.Pace=j,v(j,g.prototype),D=j.options=v({},u,window.paceOptions,x()),U=["ajax","document","eventLag","elements"],Q=0,S=U.length;S>Q;Q++)K=U[Q],D[K]===!0&&(D[K]=u[K]);i=function(a){function b(){return V=b.__super__.constructor.apply(this,arguments)}return Z(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(D.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b,c,d,e,f,g;if(null==document.querySelector(D.target))return!1;for(a=this.getElement(),d="translate3d("+this.progress+"%, 0, 0)",g=["webkitTransform","msTransform","transform"],e=0,f=g.length;f>e;e++)b=g[e],a.children[0].style[b]=d;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?c="99":(c=this.progress<10?"0":"",c+=0|this.progress),a.children[0].setAttribute("data-progress",""+c)),this.lastRenderedProgress=this.progress},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),P=window.XMLHttpRequest,O=window.XDomainRequest,N=window.WebSocket,w=function(a,b){var c,d,e;e=[];for(d in b.prototype)try{null==a[d]&&"function"!=typeof b[d]?"function"==typeof Object.defineProperty?e.push(Object.defineProperty(a,d,{get:function(){return b.prototype[d]},configurable:!0,enumerable:!0})):e.push(a[d]=b.prototype[d]):e.push(void 0)}catch(f){c=f}return e},A=[],j.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("ignore"),c=b.apply(null,a),A.shift(),c},j.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("track"),c=b.apply(null,a),A.shift(),c},J=function(a){var b;if(null==a&&(a="GET"),"track"===A[0])return"force";if(!A.length&&D.ajax){if("socket"===a&&D.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),$.call(D.ajax.trackMethods,b)>=0)return!0}return!1},k=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e,f){return J(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new P(b),a(c),c};try{w(window.XMLHttpRequest,P)}catch(d){}if(null!=O){window.XDomainRequest=function(){var b;return b=new O,a(b),b};try{w(window.XDomainRequest,O)}catch(d){}}if(null!=N&&D.ajax.trackWebSockets){window.WebSocket=function(a,b){var d;return d=null!=b?new N(a,b):new N(a),J("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d};try{w(window.WebSocket,N)}catch(d){}}}return Z(b,a),b}(h),R=null,y=function(){return null==R&&(R=new k),R},I=function(a){var b,c,d,e;for(e=D.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},y().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,I(g)?void 0:j.running||D.restartOnRequestAfter===!1&&"force"!==J(f)?void 0:(d=arguments,c=D.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,k;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(j.restart(),i=j.sources,k=[],c=0,g=i.length;g>c;c++){if(K=i[c],K instanceof a){K.watch.apply(K,d);break}k.push(void 0)}return k}},c))}),a=function(){function a(){var a=this;this.elements=[],y().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,I(e)?void 0:(c="socket"===d?new n(b):new o(b),this.elements.push(c))},a}(),o=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return a.lengthComputable?h.progress=100*a.loaded/a.total:h.progress=h.progress+(100-h.progress)/2},!1),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100},!1);else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),n=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100},!1)}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},D.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=C(),b=setInterval(function(){var g;return g=C()-c-50,c=C(),e.push(g),e.length>D.eventLag.sampleCount&&e.shift(),a=q(e),++d>=D.eventLag.minSamples&&a<D.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),m=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=D.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=F(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=F(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/D.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,D.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+D.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),L=null,H=null,r=null,M=null,p=null,s=null,j.running=!1,z=function(){return D.restartOnPushState?j.restart():void 0},null!=window.history.pushState&&(T=window.history.pushState,window.history.pushState=function(){return z(),T.apply(window.history,arguments)}),null!=window.history.replaceState&&(W=window.history.replaceState,window.history.replaceState=function(){return z(),W.apply(window.history,arguments)}),l={ajax:a,elements:d,document:c,eventLag:f},(B=function(){var a,c,d,e,f,g,h,i;for(j.sources=L=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],D[a]!==!1&&L.push(new l[a](D[a]));for(i=null!=(h=D.extraSources)?h:[],d=0,f=i.length;f>d;d++)K=i[d],L.push(new K(D));return j.bar=r=new b,H=[],M=new m})(),j.stop=function(){return j.trigger("stop"),j.running=!1,r.destroy(),s=!0,null!=p&&("function"==typeof t&&t(p),p=null),B()},j.restart=function(){return j.trigger("restart"),j.stop(),j.start()},j.go=function(){var a;return j.running=!0,r.render(),a=C(),s=!1,p=G(function(b,c){var d,e,f,g,h,i,k,l,n,o,p,q,t,u,v,w;for(l=100-r.progress,e=p=0,f=!0,i=q=0,u=L.length;u>q;i=++q)for(K=L[i],o=null!=H[i]?H[i]:H[i]=[],h=null!=(w=K.elements)?w:[K],k=t=0,v=h.length;v>t;k=++t)g=h[k],n=null!=o[k]?o[k]:o[k]=new m(g),f&=n.done,n.done||(e++,p+=n.tick(b));return d=p/e,r.update(M.tick(b,d)),r.done()||f||s?(r.update(100),j.trigger("done"),setTimeout(function(){return r.finish(),j.running=!1,j.trigger("hide")},Math.max(D.ghostTime,Math.max(D.minTime-(C()-a),0)))):c()})},j.start=function(a){v(D,a),j.running=!0;try{r.render()}catch(b){i=b}return document.querySelector(".pace")?(j.trigger("start"),j.go()):setTimeout(j.start,50)},"function"==typeof define&&define.amd?define(["pace"],function(){return j}):"object"==typeof exports?module.exports=j:D.startOnPageLoad&&j.start()}).call(this);


$(document).ready(function(){
	jQuery.Random = function(m,n) {
		m = parseInt(m);
		n = parseInt(n);
		return Math.floor(Math.random() * (n - m + 1)) + m;
	}
	var ww = $(window).outerWidth(),
		wv = $(window).outerHeight();


	var pc = false,
		md = false,
		mb = false;
	if(Modernizr.mq('only screen and (min-width: 1070px)')){
		pc = true;
	}
	if(Modernizr.mq('only screen and (max-width: 1070px) and (min-width: 800px)')){
		md = true;
	}
	if(Modernizr.mq('only screen and (max-width: 800px)')){
		mb = true;
	}

	//fixed header
	$('.header__bot').sticky({
		zIndex: 999
	});
	//preloader progress top position calc
	$('.pace-progress').css({
		'top': $('.header').outerHeight()+'px'
	});
	$('.header__bot').on('sticky-start', function(){
		$('.pace-progress').css({
			'top': $('.header__bot').outerHeight()+'px'
		});
	});

	////sliders
	//main
	var navSlider = new Swiper('.header__bot_slider',{
		slidesPerView: 'auto',
		navigation:{
			prevEl: '.header__arr_prev',
			nextEl: '.header__arr_next'
		}
	});
	if($('.s_category__price').length==0 & $('.s_pricing__filter_wrp').length){
		$('.s_pricing__filter_wrp').each(function(){
			var el = $(this);
			var navSlider = new Swiper(el,{
				slidesPerView: 'auto',
				navigation:{
					prevEl: el.find('.s_pricing__arr_prev'),
					nextEl: el.find('.s_pricing__arr_next')
				}
			});
		});
		//filter
		var Shuffle = window.Shuffle,
			element = document.querySelector('.s_category__sub_body'),
			sh = new Shuffle(element,{
				itemSelector: '.s_items__item',
				speed: 650
			});
		Shuffle.ShuffleItem.Scale.HIDDEN = 0.5;

		$('.s_pricing__filter a').click(function(e){
			e.preventDefault();
			var el = $(this),
				categ = el.text();
			el.addClass('_current').siblings().removeClass('_current');
			if(categ!="Все"){
				sh.filter(categ);
			}else{
				sh.filter();
			}
		});
	}else{
		$('.s_pricing__filter_wrp').each(function(){
			var el = $(this),
				item = el.closest('.s_pricing__item'),
				element = item.find('tbody');
			var navSlider = new Swiper(el,{
				slidesPerView: 'auto',
				navigation:{
					prevEl: el.find('.s_pricing__arr_prev'),
					nextEl: el.find('.s_pricing__arr_next')
				}
			});
			var Shuffle = window.Shuffle;
			var shuff = new Shuffle(element[0],{
				itemSelector: '.s_pricing__item_tr',
				speed: 650
			});
			Shuffle.ShuffleItem.Scale.HIDDEN = 0.5;

			item.find('.s_pricing__filter a').click(function(e){
				e.preventDefault();
				var el = $(this),
					categ = el.text();
				el.addClass('_current').siblings().removeClass('_current');
				if(categ!="Все"){
					shuff.filter(categ);
				}else{
					shuff.filter();
				}
			});
		});
	}
	if($('.s_main__slider_wrp').length){
		$('.s_main__item').each(function(){
			$(this).find('.s_main__item_txt').attr('data-swiper-parallax-y',$.Random(-600,600));
			$(this).find('.s_main__item_txt').attr('data-swiper-parallax-x',$.Random(-600,600));
			$(this).find('.s_main__item_img').attr('data-swiper-parallax-y',$.Random(-600,600));
			$(this).find('.s_main__item_img').attr('data-swiper-parallax-x',$.Random(-600,600));
		});
		var mainSlider = new Swiper('.s_main__slider_wrp',{
			slidesPerView: 1,
			parallax: true,
			speed: 680,
			spaceBetween: 350,
			loop: true,
			autoplay: true,
			on:{
				slideChange: function(){
					var n = this.realIndex;
					$('.s_main__links a').eq(n).addClass('_current').siblings().removeClass('_current');
				}
			},
			effect: 'fade',
			fadeEffect:{
				crossFade: true
			}
		});
		$('.s_main__links a').click(function(e){
			e.preventDefault();
			mainSlider.slideTo($(this).index()+1);
		});
	}
	if($('.s_items__slider_wrp').length){
		$('.s_items__slider_wrp').each(function(){
			var el = $(this);
			var itemsSlider = new Swiper(el,{
				slidesPerView: 4,
				spaceBetween: 30,
				loop: true,
				speed: 500,
				autoHeight: true,
				navigation:{
					prevEl: el.find('.g_arr__prev')[0],
					nextEl: el.find('.g_arr__next')[0]
				},
				breakpoints:{
					1250:{
						slidesPerView: 3
					},
					1000:{
						slidesPerView: 2
					},
					666:{
						slidesPerView: 1
					}
				}
			});
		});
	}
	if($('.s_items_grid').length){
		$('.s_items_grid__slider_wrp').each(function(){
			var el = $(this);
			var itemsSlider = new Swiper(el,{
				slidesPerView: 'auto',
				spaceBetween: 30,
				loop: true,
				speed: 500,
				autoHeight: true,
				navigation:{
					prevEl: el.find('.g_arr__prev')[0],
					nextEl: el.find('.g_arr__next')[0]
				}
			});
		});
	}
	if($('.s_princip__slider_wrp').length){
		$('.s_princip__item').each(function(){
			$(this).find('.s_princip__txt').attr('data-swiper-parallax-x',$.Random(200,300));
			$(this).find('.s_princip__img').attr('data-swiper-parallax-y',$.Random(-200,-600));
		});
		var principSlider = new Swiper('.s_princip__slider_wrp',{
			slidesPerView: 1,
			parallax: true,
			speed: 680,
			spaceBetween: 350,
			loop: true,
			autoHeight: true,
			effect: 'fade',
			fadeEffect:{
				crossFade: true
			},
			navigation:{
				prevEl: '.s_princip__slider_wrp .g_arr__prev',
				nextEl: '.s_princip__slider_wrp .g_arr__next'
			}
		});
	}
	if($('.s_works__slider_wrp').length || $('.s_works__item').length){
		var solveSlider = new Swiper('.s_works__slider_wrp',{
			spaceBetween: 30,
			slidesPerView: 1,
			loop: true,
			speed: 850,
			autoplay: true,
			navigation: {
				nextEl: '.s_works__slider_wrp .g_arr__next',
				prevEl: '.s_works__slider_wrp .g_arr__prev',
			},
			breakpoints:{
				1000:{
					autoplay: false,
					autoHeight: true
				}
			}
		});
		$('.s_works__item').each(function(){
			var item = $(this),
				galleryTop = new Swiper(item.find('.s_works__img'), {
					spaceBetween: 20,
					slidesPerView: 1,
					autoHeight: false,
					nested: true
				}),
				galleryThumbs = new Swiper(item.find('.s_works__thumb'), {
					spaceBetween: 10,
					centeredSlides: true,
					slidesPerView: 5,
					touchRatio: 0.2,
					slideToClickedSlide: true,
					autoHeight: false,
					nested: true,
					breakpoints:{
						1250:{
							slidesPerView: 3
						},
						1000:{
							slidesPerView: 5
						},
						666:{
							slidesPerView: 4
						},
						444:{
							slidesPerView: 3
						}
					}
				});
			galleryTop.controller.control = galleryThumbs;
			galleryThumbs.controller.control = galleryTop;
		});
	}
	if($('.s_item__block_left').length){
		var item = $('.s_item__block_left'),
			galleryTop = new Swiper(item.find('.s_item__img'), {
				spaceBetween: 20,
				slidesPerView: 1,
				autoHeight: false,
				nested: true
			}),
			galleryThumbs = new Swiper(item.find('.s_item__thumb'), {
				spaceBetween: 10,
				centeredSlides: true,
				slidesPerView: 5,
				touchRatio: 0.2,
				slideToClickedSlide: true,
				autoHeight: false,
				nested: true,
				breakpoints:{
					1250:{
						slidesPerView: 3
					},
					1000:{
						slidesPerView: 5
					},
					666:{
						slidesPerView: 4
					},
					444:{
						slidesPerView: 3
					}
				}
			});
		galleryTop.controller.control = galleryThumbs;
		galleryThumbs.controller.control = galleryTop;
	}
	if($('.s_category__sub_slider_wrp').length){
		var el = $('.s_category__sub_slider_wrp');
		var itemsSlider = new Swiper(el,{
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			speed: 500,
			autoHeight: true,
			navigation:{
				prevEl: el.find('.g_arr__prev')[0],
				nextEl: el.find('.g_arr__next')[0]
			},
			breakpoints:{
				1300:{
					slidesPerView: 2
				},
				722:{
					spaceBetween: 15,
					slidesPerView: 2
				},
				664:{
					slidesPerView: 1
				}
			}
		});
	}
	if($('.s_cert__slider_wrp').length){
		var el = $('.s_cert__slider_wrp');
		var itemsSlider = new Swiper(el,{
			slidesPerView: 5,
			spaceBetween: 30,
			loop: true,
			speed: 500,
			autoplay: true,
			navigation:{
				prevEl: el.find('.g_arr__prev')[0],
				nextEl: el.find('.g_arr__next')[0]
			},
			breakpoints:{
				1041:{
					spaceBetween: 15
				},
				830:{
					slidesPerView: 4,
					spaceBetween: 15
				},
				630:{
					slidesPerView: 3,
					spaceBetween: 15
				},
				441:{
					slidesPerView: 2,
					spaceBetween: 15
				},
				395:{
					slidesPerView: 1
				}
			}
		});
		$('.s_cert__slider_wrp').lightGallery({
			selector: '.s_cert__item'
		});
	}

	//toc
	if($('.toc_content').length){
		$('.toc_content').anchorific({
			navigation: '.toc_body', // position of navigation
			headers: 'h2, h3, h4, h5, h6', // headers that you wish to target
			anchorClass: '_anchor', // class of anchor links
			anchorText: '#', // prepended or appended to anchor headings
			spy: true, // scroll spy
		});
	}

	////scrolls
	if($('.s_inner__aside_links').length & pc){
		if($('.s_inner__aside_links ._anchor').length){
			$(document).scroll(function(){
				var scrollPosition = $(document).scrollTop()+320;
				$('.s_inner__aside_links a').each(function () {
					var currentLink = $(this);
					var refElement = $('.'+currentLink.attr("href"));
					if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
						$(this).addClass('_current').siblings().removeClass('_current');
					} else {
						currentLink.removeClass("_current");
					}
				});
			});
		}
		var botSpace = $(document).outerHeight() - $('.s_inner').outerHeight() -$('.header').outerHeight();
		var topSpace = $('.header__bot').outerHeight();
		$('.s_inner__aside_wrp').sticky({
			topSpacing: topSpace,
			bottomSpacing: botSpace
		});
	}
	if($('.s_inner__aside_links').length & !pc){
		if($('.s_inner__aside_links ._anchor').length){
			$(document).scroll(function(){
				var scrollPosition = $(document).scrollTop()+320;
				$('.s_inner__aside_links a').each(function () {
					var currentLink = $(this);
					var refElement = $('.'+currentLink.attr("href"));
					if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
						$(this).addClass('_current').siblings().removeClass('_current');
					} else {
						currentLink.removeClass("_current");
					}
				});
			});
			$('.s_inner__aside_links ._anchor').click(function(){
				$('.s_inner__aside').removeClass('_active');
				$('.s_inner__aside_hamb').removeClass('_active');
				enableScroll();
			});
		}
		$('.footer').after('<div class="s_inner__aside_hamb"><i></i></div>');
		$('.s_inner__aside_hamb').click(function(){
			$('.s_inner__aside').toggleClass('_active');
			$(this).toggleClass('_active');
			if($(this).hasClass('_active')){
				disableScroll();
			}else{
				enableScroll();
			}
		});
		$('.s_inner__aside').click(function(){
			$(this).removeClass('_active');
			$('.s_inner__aside_hamb').removeClass('_active');
			enableScroll();
		});
		$('.s_inner__aside_wrp').click(function(e){
			e.stopPropagation();
		});
	}

	////forms
	//validate
	$("._validate").each(function () {
		var it = $(this);
		it.validate({
			rules: {
				form: {required: false},
				phone: {required: true},
				name: {required: true},
				mail: {required: true}
			},
			messages: {},
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				var data = new FormData(it[0]);
				$.ajax({
					url: 'mail.php',
					type: 'POST',
					data: data,
					cache: false,
					processData: false,
					contentType: false,
					success: function( respond, textStatus, jqXHR ){
						disableScroll();
						var btn = $(this),
							name = 'thnx',
							popup = $('.popup_'+name),
							cX = ww/2,
							cY = wv/2,
							path = $('#clip_pop circle');
						popup.addClass('_current');
						$('.overlay').addClass('_active');
						path.attr('cx',cX);
						path.attr('cy',cY);
						popup.addClass('_visible');
						anime({
							targets: '#clip_pop circle',
							r: ww+wv,
							easing: 'easeInQuint',
							duration: 400
						});
						$("form").trigger( 'reset' );
					},
					error: function( jqXHR, textStatus, errorThrown ){
						console.log('ОШИБКИ AJAX запроса: ' + textStatus );
					}
				});
			},
			success: function () {},
			highlight: function (element, errorClass) {
				$(element).addClass('_error');
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).removeClass('_error');
			}
		});
	});
	//filter form
	(function(){
		var it = $('.s_inner__aside_filter');
		it.validate({
			rules: {
				filter: {required:true}
			},
			messages: {},
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
			},
			success: function () {

			},
			highlight: function (element, errorClass) {
				$(element).addClass('_error');
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).removeClass('_error');
			}
		});
	}());

	//lg
//	$('.s_category__item_lg').click(function(e){
//		e.preventDefault();
//		var btn = $(this),
//			imgs = btn.data('imgs'),
//			img = imgs.split(';'),
//			imgArr = [];
//		for(var i = 0; i<img.length;i++){
//			imgArr[i] = {src: img[i]};
//		}
//		console.log(imgArr);
//		$(this).lightGallery({
//			dynamic: true,
//			dynamicEl: imgArr
//		})
//	});

	//prevent only numbers
	var eBackspace = jQuery.Event("keydown", { keyCode: 20 });
	$('._num, input[name="phone"]').on('keydown',function(e){
		-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault();
		if($(this).val().length==12){
			$(this).val($(this).val().slice(0,-1));
		}
	});
	//g_txt
	if($('.g_txt table').length){
		$('.g_txt table').wrap('<div class="g_txt__table"></div>');
	}
	if($('.g_txt .alignleft').length){
		$('.g_txt .alignleft').wrap('<div class="g_txt__center"></div>');
	}
	if($('.g_txt .alignright').length){
		$('.g_txt .alignright').wrap('<div class="g_txt__center"></div>');
	}
	//inputs
	$('input,textarea').change(function(){
		if($(this).val()==''){
			$(this).removeClass('_active');
		}else{
			$(this).addClass('_active');
		}
	});
	//anchors
	$('._anchor, .toc_body a').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		var el = $(this).attr('href'),px;
		if(el==0){
			px = 0;
		}else{
			if($(this).closest('.toc_content').length){
				px = $(el).offset().top - $('.header__bot').outerHeight() - 10;
			}else{
				px = $('.'+el).offset().top - $('.header__bot').outerHeight() - 10;
			}
		}
		$('body,html').stop().animate({scrollTop:px},400);
	});
	//popups
	$('._open_pop').click(function(e){
		e.preventDefault();
		disableScroll();
		var btn = $(this),
			name = btn.data('name'),
			popup = $('.popup_'+name),
			cX = e.clientX,
			cY = e.clientY ,
			path = $('#clip_pop circle');
		popup.addClass('_current');
		if(name=="order"){
			var itemName = btn.data('item');
			popup.find('.g_title span').text(itemName);
			popup.find('input[name="form"]').val(itemName);
		}
		$('.overlay').addClass('_active');
		path.attr('cx',cX);
		path.attr('cy',cY);
		popup.addClass('_visible');
		anime({
			targets: '#clip_pop circle',
			r: ww+wv,
			easing: 'easeInQuint',
			duration: 400
		});
	});
	$('.popup').click(function(e){
		e.stopPropagation();
	});
	$('.overlay, ._close_pop').click(function(e){
		enableScroll();
		var btn = $(this),
			name = btn.data('name'),
			popup = $('.popup_'+name)
			cX = e.clientX,
			cY = e.clientY,
			path = $('#clip_pop circle');
		path.attr('cx',cX);
		path.attr('cy',cY);
		anime({
			targets: '#clip_pop circle',
			r: 0,
			easing: 'easeOutQuint',
			duration: 600,
			begin: function(){
				setTimeout(function(){
					$('.popup').removeClass('_current');
					$('.overlay').removeClass('_active');
				},500);
			}
		});
	});

	if($('.s_map').length){
		var height = $(window).height() -$('.header').outerHeight()-$('.s_form').outerHeight()-$('.footer').outerHeight()-$('.s_inner').outerHeight();
		$('#s_map').css({'height': height+'px'});
		mapInitialize('s_map');
	}
});

//gmap init
function mapInitialize(el_id) {
	var center = $('#'+el_id).data('center').split(',');
	var kz = new google.maps.LatLng(center[0],center[1]);
	var mapOptions = {
		zoom: 18,
		center: kz,
		mapTypeControl: false,
		scrollwheel: false,
		navigationControl: false,
		scaleControl: false
	};
	var mapElement = document.getElementById(el_id);
	var map = new google.maps.Map(mapElement, mapOptions);


	var points = $('#'+el_id).data('points').split(';');
	points.forEach(function(feature) {
		var dot_info = feature.split('['),
			dot = dot_info[0].split(','),
			content = dot_info[1];
		var icoImg = {
			path: 'M8 0C3.6 0 0 3.63 0 8.1c0 1.16.24 2.28.7 3.3 2 4.44 5.83 9.1 6.96 10.44.1.1.2.16.34.16.13 0 .25-.06.34-.16 1.13-1.33 4.96-6 6.96-10.44.46-1.02.7-2.14.7-3.3C16 3.63 12.4 0 8 0zm0 12.3c-2.3 0-4.16-1.88-4.16-4.2C3.84 5.78 5.7 3.9 8 3.9s4.15 1.88 4.15 4.2c0 2.32-1.86 4.2-4.15 4.2z',
			fillColor: '#ff7200',
			fillOpacity: 1,
			scale: 1.95,
			strokeOpacity: 0
		};
		var marker = new google.maps.Marker({
			position: {
				lat: Number(dot[0]),
				lng: Number(dot[1])
			},
			icon: icoImg,
			map: map,
			title: "Мы находимся тут!",
			optimized: false
		});
		var infowindow = new google.maps.InfoWindow({
			content: content
		});
		marker.addListener('click', function () {
			infowindow.open(map, marker);
		});
	});
}

//mobile hover disable
function getMobileOperatingSystem() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	// Windows Phone must come first because its UA also contains "Android"
	if (/windows phone/i.test(userAgent)) {
		return "Windows Phone";
	}

	if (/android/i.test(userAgent)) {
		return "Android";
	}

	// iOS detection from: http://stackoverflow.com/a/9039885/177710
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		return "iOS";
	}

	return null;
}

if (getMobileOperatingSystem()) {
	try {
		for (var si in document.styleSheets) {
			var styleSheet = document.styleSheets[si];
			if (!styleSheet.rules) continue;

			for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
				if (!styleSheet.rules[ri].selectorText) continue;

				if (styleSheet.rules[ri].selectorText.match(':hover')) {
					styleSheet.deleteRule(ri);
				}
			}
		}
	} catch (ex) {}
}

//scroll
var keys = {37: 1, 38: 1, 39: 1, 40: 1};
function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}
}
function disableScroll(elem) {
	if(!elem){
		elem=$(document);
	}
	if (elem.addEventListener) // older FF
		elem.addEventListener('DOMMouseScroll', preventDefault, false);
	elem.onwheel = preventDefault; // modern standard
	elem.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	elem.ontouchmove  = preventDefault; // mobile
	document.onkeydown  = preventDefaultForScrollKeys;
}
function enableScroll(elem) {
	if(!elem){
		elem=$(document);
	}
	if (elem.removeEventListener)
		elem.removeEventListener('DOMMouseScroll', preventDefault, false);
	elem.onmousewheel = document.onmousewheel = null;
	elem.onwheel = null;
	elem.ontouchmove = null;
	document.onkeydown = null;
}
