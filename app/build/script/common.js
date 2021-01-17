"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}var main_body=document.querySelector(".main_body"),header=document.querySelector(".header"),look_btn=document.querySelectorAll(".look_btn"),view_btn=document.querySelector(".view_btn"),back_btn=document.querySelector(".back_btn"),Slider=function(){function Slider(obj){var _this=this;_classCallCheck(this,Slider),this.slider=document.querySelector(obj.slider),this.pages=this.slider.querySelector(".carousel_pages").children,this.indicators=this.slider.querySelectorAll(".indicator"),this.prevBtn=this.slider.querySelector(".prev_btn"),this.nextBtn=this.slider.querySelector(".next_btn"),this.activePage=0,this.pageHeight=this.slider.clientHeight,this.pageWidth=this.slider.clientWidth,this.swipeRatio=500>this.pageWidth?5:3,this.flag=!0;for(var i=0;i<this.pages.length;i++)this.pages[i].style.transform="translateY(".concat(this.pageHeight,"px)");this.pages[this.activePage].style.transform="translateY(0)",this.prevBtn.addEventListener("click",function(){!0==_this.flag&&(_this.move(_this.prevBtn),_this.disableBtns(!0),setTimeout(function(){_this.disableBtns(!1)},1e3))}),this.nextBtn.addEventListener("click",function(){!0==_this.flag&&(_this.move(_this.nextBtn),_this.disableBtns(!0),setTimeout(function(){_this.disableBtns(!1)},1e3))});for(var _loop=function(_i){_this.indicators[_i].addEventListener("click",function(){if(!0==_this.flag)if(_i>_this.activePage){_this.flag=!1;var interval=setInterval(function(){_this.move(_this.nextBtn),_i==_this.activePage&&(clearInterval(interval),_this.disableIndicators(!1),_this.flag=!0)},100)}else if(_i<_this.activePage){_this.flag=!1;var interval=setInterval(function(){_this.move(_this.prevBtn),_i==_this.activePage&&(clearInterval(interval),_this.disableIndicators(!1),_this.disableBtns(!0),_this.flag=!0)},100)}})},_i=0;_i<this.indicators.length;_i++)_loop(_i);window.addEventListener("wheel",function(e){!0==_this.flag&&(0<e.deltaY?_this.move(_this.nextBtn):0>e.deltaY&&_this.move(_this.prevBtn),_this.flag=!1,setTimeout(function(){_this.flag=!0},1e3))}),window.addEventListener("keydown",function(e){!0===_this.flag&&("ArrowDown"==e.code?_this.move(_this.nextBtn):"ArrowUp"==e.code&&_this.move(_this.prevBtn),_this.flag=!1,setTimeout(function(){_this.flag=!0},1e3))}),this.touchStartY;for(var _i2=0;_i2<this.pages.length;_i2++)this.pages[_i2].addEventListener("touchstart",function(e){_this.touchStartY=e.touches[0].clientY}),this.pages[_i2].addEventListener("touchmove",function(e){!0==_this.flag&&(_this.change=e.touches[0].clientY-_this.touchStartY,0<_this.change&&0<_this.activePage?(_this.pages[_this.activePage].style.transition="0s",_this.pages[_this.activePage-1].style.transition="0s",_this.pages[_this.activePage].style.transform="translateY(".concat(_this.change,"px)"),_this.pages[_this.activePage-1].style.transform="translateY(".concat(-_this.pageHeight+_this.change,"px)")):0>_this.change&&_this.activePage<_this.pages.length-1?(_this.pages[_this.activePage].style.transition="0s",_this.pages[_this.activePage+1].style.transition="0s",_this.pages[_this.activePage].style.transform="translateY(".concat(_this.change,"px)"),_this.pages[_this.activePage+1].style.transform="translateY(".concat(_this.pageHeight+_this.change,"px)")):console.log("no change"))}),this.pages[_i2].addEventListener("touchend",function(){if(!0==_this.flag){var translateSize=_this.pages[_this.activePage].getBoundingClientRect().top;0<translateSize?translateSize>_this.pageHeight/_this.swipeRatio?_this.move(_this.prevBtn):(_this.pages[_this.activePage].style.transition="1s",_this.pages[_this.activePage-1].style.transition="1s",_this.pages[_this.activePage].style.transform="translateY(0)",_this.pages[_this.activePage-1].style.transform="translateY(".concat(-_this.pageHeight,"px)")):Math.abs(translateSize)>_this.pageHeight/_this.swipeRatio?_this.move(_this.nextBtn):(_this.pages[_this.activePage].style.transition="1s",_this.pages[_this.activePage+1].style.transition="1s",_this.pages[_this.activePage].style.transform="translateY(0)",_this.pages[_this.activePage+1].style.transform="translateY(".concat(_this.pageHeight,"px)")),_this.flag=!1,setTimeout(function(){_this.flag=!0,console.log(_this.flag)},1e3)}})}return _createClass(Slider,[{key:"move",value:function move(btn){if(btn==this.prevBtn&&0<this.activePage){this.pages[this.activePage].style.transition="1s",this.pages[this.activePage].classList.remove("active"),this.activePage--;for(var i=0;i<this.pages.length;i++)i>this.activePage&&(this.pages[i].style.transform="translateY(".concat(this.pageHeight,"px)"));this.pages[this.activePage].style.transition="1s",this.pages[this.activePage].style.transform="translateY(0)",this.pages[this.activePage].classList.add("active"),this.checkIndicator()}else if(btn==this.nextBtn&&this.activePage<this.pages.length-1){this.pages[this.activePage].classList.remove("active"),this.pages[this.activePage].style.transition="1s",this.activePage++;for(var _i3=0;_i3<this.pages.length;_i3++)_i3<this.activePage&&(this.pages[_i3].style.transform="translateY(".concat(-this.pageHeight,"px)"));this.pages[this.activePage].style.transition="1s",this.pages[this.activePage].style.transform="translateY(0)",this.pages[this.activePage].classList.add("active"),this.checkIndicator()}this.topPageCheck()}},{key:"checkIndicator",value:function checkIndicator(){for(var i=0;i<this.indicators.length;i++)this.indicators[i].classList.remove("active");this.indicators[this.activePage].classList.add("active")}},{key:"disableBtns",value:function disableBtns(checker){!0==checker?(this.nextBtn.disabled=!0,this.nextBtn.disabled=!0):(this.nextBtn.disabled=!1,this.nextBtn.disabled=!1)}},{key:"disableIndicators",value:function disableIndicators(checker){if(!0==checker)for(var i=0;i<this.indicators.length;i++)this.indicators[i].disabled=!0;else for(var _i4=0;_i4<this.indicators.length;_i4++)this.indicators[_i4].disabled=!1}},{key:"topPageCheck",value:function topPageCheck(){0==this.activePage?(main_body.style.overscrollBehavior="auto",main_body.style.overflow="visible",header.style.backdropFilter="none"):(main_body.style.overscrollBehavior="none",main_body.style.overflow="hidden",header.style.backdropFilter="blur(5px)")}}]),Slider}(),slider1=new Slider({slider:".carousel"});window.addEventListener("resize",function(){slider1.pages[slider1.activePage].transform="translateY(".concat(slider1.pageHeight,")")});var burger_icon=document.querySelector(".header_burger"),header_list=document.querySelectorAll(".header_nav_list"),header__content_top=document.querySelector(".header__nav");burger_icon.addEventListener("click",function(){burger_icon.classList.contains("clicked")?burger_icon.classList.remove("clicked"):burger_icon.classList.add("clicked")});for(var lookInterval,_loop2=function(i){look_btn[i].addEventListener("click",function(){slider1.flag=!1,lookInterval=setInterval(function(){!0==slider1.flag&&(slider1.flag=!1)},10),console.log(slider1.flag),header.style.transition="1s",header.style.top="-100%",document.querySelectorAll(".page2_inner_content")[i].style.display="none",document.querySelectorAll(".page2_inner")[i].style.border="none",document.querySelector(".carousel_indicators").style.transition="1s",document.querySelector(".carousel_indicators").style.right="-100%",main_body.style.overflow="hidden",look_btn[i].style.display="none"})},i=0;i<look_btn.length;i++)_loop2(i);for(var timeClick=0,_i5=0;_i5<slider1.pages.length;_i5++)slider1.pages[_i5].addEventListener("click",function(){0==timeClick?timeClick=new Date().getTime():500>new Date().getTime()-timeClick?(clearInterval(lookInterval),slider1.flag=!0,header.style.top="0",document.querySelectorAll(".page2_inner_content")[slider1.activePage-1].style.display="flex",document.querySelectorAll(".page2_inner")[slider1.activePage-1].style.border="2px solid #CCAF40",document.querySelector(".carousel_indicators").style.transition="1s",document.querySelector(".carousel_indicators").style.right="0.5%",look_btn[slider1.activePage-1].style.display="block",main_body.style.overflow="visible",timeClick=0):timeClick=new Date().getTime()});view_btn.addEventListener("click",function(){slider1.move(slider1.nextBtn),console.log("view")}),back_btn.addEventListener("click",function(){slider1.indicators[0].click()});var loading_page=document.querySelector(".loading_page"),overlays=document.querySelectorAll(".overlay"),loading_animation=document.querySelector(".loading_animation"),percentage=document.querySelector(".inner_circle");function onLoad(){var i=0;main_body.style.overflow="hidden";var interval=setInterval(function(){if(percentage.innerHTML="".concat(++i,"%"),100==i){clearInterval(interval),loading_animation.style.opacity=0;for(var _loop3=function(_i6){setTimeout(function(){overlays[_i6].style.transform=0==_i6%2?"translateY(-200%)":"translateY(200%)"},100*_i6)},_i6=0;_i6<overlays.length;_i6++)_loop3(_i6)}},20)}setTimeout(function(){loading_page.style.display="none",main_body.style.overflow="visible"},3500),onLoad();