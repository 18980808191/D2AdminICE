(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed2e1094"],{"8d67":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}],staticClass:"d2-contextmenu",style:e.style},[e._t("default")],2)},s=[],o=(n("c5f6"),{name:"d2-contextmenu",props:{visible:{type:Boolean,default:!1},x:{type:Number,default:0},y:{type:Number,default:0}},computed:{flag:{get:function(){return this.visible&&window.addEventListener("mousedown",this.watchContextmenu),this.visible},set:function(e){this.$emit("update:visible",e)}},style:function(){return{left:this.x+"px",top:this.y+"px",display:this.visible?"block":"none "}}},methods:{watchContextmenu:function(e){this.$el.contains(e.target)&&0===e.button||(this.flag=!1),window.removeEventListener("mousedown",this.watchContextmenu)}},mounted:function(){document.querySelector("body").appendChild(this.$el)}}),u=o,l=(n("d1f4"),n("2877")),a=Object(l["a"])(u,i,s,!1,null,null,null);t["default"]=a.exports},d1f4:function(e,t,n){"use strict";var i=n("dfe8"),s=n.n(i);s.a},dfe8:function(e,t,n){}}]);
//# sourceMappingURL=chunk-ed2e1094.437c056f.js.map