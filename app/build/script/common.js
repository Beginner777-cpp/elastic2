"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}var Slider=function(){function Slider(obj){var _this=this;_classCallCheck(this,Slider),this.slider=document.querySelector(obj.slider),this.pages=this.slider.querySelector(".carousel_pages").children,this.indicators=this.slider.querySelector(".indicators_list").children,this.prevBtn=this.slider.querySelector(".prev_btn"),this.nextBtn=this.slider.querySelector(".next_btn"),this.activePage=0,this.pageHeight=this.slider.clientHeight;for(var i=0;i<this.pages.length;i++)this.pages[i].style.transform="translateY(".concat(this.pageHeight,"px)");this.pages[this.activePage].style.transform="translateY(0)",this.prevBtn.addEventListener("click",function(){_this.move(_this.prevBtn)}),this.nextBtn.addEventListener("click",function(){_this.move(_this.nextBtn)});for(var _loop=function(_i){_this.indicators[_i].addEventListener("click",function(){if(_i>_this.activePage)for(var j=_this.activePage;j<_i;j++)_this.move(_this.nextBtn);else if(_i<_this.activePage)for(var _j=_this.activePage;_j>_i;_j--)_this.move(_this.prevBtn)})},_i=0;_i<this.indicators.length;_i++)_loop(_i)}return _createClass(Slider,[{key:"move",value:function move(btn){if(btn==this.prevBtn&&0<this.activePage){this.pages[this.activePage].style.transition="1s",this.pages[this.activePage].classList.remove("active"),this.activePage--;for(var i=0;i<this.pages.length;i++)i!=this.activePage+1&&(this.pages[i].style.transition="0s"),i>this.activePage&&(this.pages[i].style.transform="translateY(".concat(this.pageHeight,"px)"));this.pages[this.activePage].style.transition="1s",this.pages[this.activePage].style.transform="translateY(0)",this.pages[this.activePage].classList.add("active"),this.checkIndicator()}else if(btn==this.nextBtn&&this.activePage<this.pages.length-1){this.pages[this.activePage].classList.remove("active"),this.pages[this.activePage].style.transition="1s",this.activePage++;for(var _i2=0;_i2<this.pages.length;_i2++)_i2!=this.activePage-1&&(this.pages[_i2].style.transition="0s"),_i2<this.activePage&&(this.pages[_i2].style.transform="translateY(".concat(-this.pageHeight,"px)"));this.pages[this.activePage].style.transition="1s",this.pages[this.activePage].style.transform="translateY(0)",this.pages[this.activePage].classList.add("active"),this.checkIndicator()}}},{key:"checkIndicator",value:function checkIndicator(){for(var i=0;i<this.indicators.length;i++)this.indicators[i].classList.remove("active");this.indicators[this.activePage].classList.add("active")}}]),Slider}(),slider1=new Slider({slider:".carousel"});