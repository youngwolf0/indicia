"use strict";function IsMalwareProxy(){try{return"www.samhohce.net"===window.location.host||"www.ftssales.net"===window.location.host||"stackoverflow.com.80bola.com"===window.location.host}catch(e){return!1}}function prepareEditor(e){var t=e.postfix||"",n=function(){setTimeout(function(){StackExchange.editor.initIfShown(e)},1)};if(!e.onDemand)return StackExchange.using("editor",n),void 0;for(var i="bold-button italic-button spacer1 link-button quote-button code-button image-button spacer2 olist-button ulist-button heading-button hr-button spacer3 undo-button redo-button".split(" "),a=$('<ul id="wmd-button-row'+t+'" class="wmd-button-row" />').appendTo(".wmd-button-bar"),s=0,o=0;o<i.length;o++){var r=i[o],c=/spacer/.test(r),l=$("<li id='wmd-"+r+t+"' />").prop("className","wmd-"+(c?"spacer":"button")).css("left",25*o).appendTo(a);$("<span />").css("background-position",s+"px -20px").appendTo(l),c||(s-=20)}var u=!1;$("#wmd-input, #title, #tagnames, #edit-comment, #m-address, #display-name").one("focus click keydown",function(){if(!u){u=!0;var t=function(){a.remove(),e.autoShowMarkdownHelp&&(e.immediatelyShowMarkdownHelp=!0),n()};a.addSpinner({"float":"right"}),StackExchange.using("editor",t)}})}if(window.StackExchange={},top!=self)throw top.location.replace(document.location),$(function(){$("head").add("body").remove()}),alert("For security reasons, framing is not allowed; click OK to remove the frames."),new Error;if(StackExchange.init=function(){function e(){$(document).on("click",".convert-to-post",function(e){e.preventDefault();var t=$(this).attr("data-confirm");if(!t||confirm(t)){var n=$("<form method='post'/>").attr("action",$(this).attr("href")).appendTo("body");n.append($("<input type='hidden' name='fkey' />").attr("value",$(this).attr("data-fkey"))).submit()}})}function t(){function e(e){StackExchange.options.user.fkey!==e&&(StackExchange.options.user.fkey=e,$("input[name=fkey]").val(e))}function t(e,t){try{localStorage.setItem(i,e+","+t)}catch(n){}}function n(){var e=localStorage.getItem(i);if(!e)return{"time":0};var t=e.split(/,/);return{"fkey":t[0],"time":parseInt(t[1],10)}}var i="se:fkey";$(window).on("storage",function(t){t=t.originalEvent,t.key==i&&t.newValue&&e(t.newValue.split(/,/)[0])});try{var a=StackExchange.options.user.fkey,s=n();s.fkey!==a&&(StackExchange.options.serverTime>s.time?t(a,StackExchange.options.serverTime):e(s.fkey))}catch(o){}}function n(){if(StackExchange.options.timingsGuid&&window.performance&&window.performance.timing){var e=window.performance.timing,t=e.navigationStart,n={"guid":StackExchange.options.timingsGuid,"Info":StackExchange.options.timingsInfo};for(var i in e)0!==e[i]&&(n[i]=0===e[i]?null:e[i]-t);$.post("/client-timings",n)}}function i(){var e,t=$("#hot-network-questions");if(t.length&&(e=t.find(".js-show-more")).length){var n=t.find(".js-hidden");e.click(function(){return n.show(),e.remove(),!1});var i=$("#mainbar").height(),a=$("#sidebar").height()+550;i>a&&(n.each(function(){return a+=$(this).show().height(),i>a}),0==n.filter(":hidden").length&&e.remove())}}var a=function(e){if(!window.jQuery){if("complete"!=document.readyState)return setTimeout(function(){a(e)},1e3),void 0;var t=document.createElement("div");t.id="noscript-padding";var n=document.createElement("div");n.id="noscript-warning",n.innerHTML=function(e){return e.siteName+" requires external JavaScript from another domain, which is blocked or failed to load."}({"siteName":e}),document.body.insertBefore(t,document.body.firstChild),document.body.appendChild(n)}},s=function(){var e=function(t,n){if(t){var i=$(t).filter(":not(.popup-stack-hidden)");if(!i.length)return;i.each(function(e,t){var n=$(t),a=n.data("_popup"),s=n.data("_lightbox");a&&(i=i.add(a)),s&&(i=i.add(s))}),i=$($.unique(i.get())),i=i.not(".popup-closing").addClass("popup-closing");var a={"closeTrigger":n},s=$.Event("popupClosing",a);if(i.trigger(s),s.isDefaultPrevented())return i.removeClass("popup-closing"),void 0;i=i.not(".popup-closed").addClass("popup-closed"),i.filter(":not(.esc-hide)").fadeOutAndRemove(),i.filter(".esc-hide").fadeOut(function(){i.removeClass("popup-closing").removeClass("popup-closed")}),i.trigger("popupClose",a)}else StackExchange.topbar&&StackExchange.topbar.hideAll(),e(".lightbox, .message-dismissable, .popup:not(.no-auto-close), .share-tip, .esc-remove, .esc-hide","esc")};$(document).keyup(function(t){27==t.which&&e()}),$("body").mousedown(function(t){var n=$(t.target);if(!n.closest(".ac_results, .popup, .wmd-prompt-dialog").length){var i="click outside";if(n.closest(".share-tip").length||e(".share-tip",i),1==t.which){if(n.is(".wmd-prompt-background"))return e(".wmd-prompt-dialog, .wmd-prompt-background, .popup#image-upload",i),void 0;n.closest(".popup").length||e(".popup:not(.no-auto-close), .lightbox",i),n.closest(".message-config").length||e(".message-config.message-dismissable",i)}}}),$(document).bind("closePopups",function(t){e(t.selectorToClose,t.closeTrigger)});var t=[];$(document).on("popupLoad",function(e){var n=e.popup;if(e.lightbox)for(var i=0;i<t.length;i++)t[i].css("display","none").addClass("popup-stack-hidden");var a=n.data("_lightbox");a&&(n=n.add(a)),n.data("popup-stack-index",t.length),t.push(n)}).on("popupClosing",function(n){if(!n.isDefaultPrevented()){var i,a=$(n.target).data("popup-stack-index");if(null!=a&&!isNaN(a)){for((0>a||a>=t.length)&&StackExchange.debug.log("popupStack index out of bounds");t.length>a;)i=t.pop(),i.data("popup-stack-index",null),e(i,n.closeTrigger);for(;a>0&&(i=t[--a],i.removeClass("popup-stack-hidden").css("display","block"),!i.filter(".lightbox").length););}}})},o=function(){var e,t=$("#hlinks"),n=$("#search input[name=q]"),i=n.width(),a=2.5*i,s="expand",o=100,r=function(e){n.queue(s,e)},c=function(){n.dequeue(s)},l=!1,u=!("placeholder"in document.createElement("input"));u&&!StackExchange.options.isMobile&&(n.length&&""==n[0].value&&(n[0].value="search"),n.bind({"focus":function(){"search"==this.value&&(this.value="")}})),n.keydown(function(i){return l||i.keyCode<46&&8!=i.keyCode&&32!=i.keyCode?!0:(l=!0,clearTimeout(e),n.clearQueue(s),r(function(e){n.length&&(n[0].placeholder=""),t.fadeOut(o,e)}),r(function(e){n.animate({"width":a,"max-width":a},o,e)}),r(function(){0==n.parent().find(".search-prompt").length&&n.before('<span class="search-prompt">search:</span>')}),3==n.queue(s).length&&c(),void 0)}).focusout(function(){e=setTimeout(function(){r(function(e){n.parent().find(".search-prompt").remove(),e()}),r(function(e){n.animate({"width":i,"max-width":i},o,e)}),r(function(e){n.length&&(u&&""==n[0].value&&(n[0].value="search"),n[0].placeholder="search"),t.fadeIn(o,e)}),3==n.queue(s).length&&c(),l=!1},200)}),$("#search").keydown(function(e){return 13==e.which&&e.ctrlKey&&n.val()?(window.open("/search?q="+encodeURIComponent(n.val()),"_newtab"),!1):void 0}).find("input[name=q]").keyup(function(e){27==e.which&&$(this).blur()})};return function(r){StackExchange.options=r,r.serverTimeOffsetSec=r.serverTime-(new Date).getTime()/1e3,a(r.site.name),$.ajaxSetup({"cache":!1}),StackExchange.init.createJqueryExtensions(),r.enableLogging=(r.user.isEmployee||r.isDebugBuild)&&"undefined"!=typeof console&&"undefined"!=typeof console.log,$(function(){IsMalwareProxy()&&(window.location.href="http://stackexchange.com/about/malware?host="+window.location.hostname),s(),o(),t(),e(),StackExchange.using(StackExchange.options.user.isAnonymous?"anonymous":"loggedIn",function(){StackExchange.initialized.resolve()},!0,r.fullPostfix);var a=StackExchange.options.styleCodeAdditionalLang;a&&StackExchange.ifUsing("prettify",function(){return StackExchange.loadJsFile("third-party/prettify/additional-langs/"+a)}),StackExchange.ready(function(){r.user.messages&&StackExchange.notify.showMessages(r.user.messages,r.isMobile),r.site.globalAuthDisabled||(!r.site.isChildMeta&&r.user.isAnonymous&&gauth.checkStackAuth(r.stackAuthUrl),gauth.informStackAuth(r.stackAuthUrl)),r.enableUserHovercards&&StackExchange.usermenu.init(),StackExchange.tagPreferences?StackExchange.tagPreferences.init():StackExchange.tagmenu.init(),r.timingsGuid&&$(window).load(function(){setTimeout(n,50)}),$("*[data-tracker]").track(),i();var e=function(){var e=!1;$("body > script:not([src])").each(function(){return this.textContent.length>4e4&&/currentSelectable/.test(this.textContent)?(e=!0,!1):void 0}),(e||r.user.keyboardShortcuts)&&StackExchange.using("keyboardShortcuts",function(){StackExchange.keyboardShortcuts.init(e)})};document.readyState&&"complete"!==document.readyState?$(window).load(function(){setTimeout(e,10)}):setTimeout(e,10)})})}}(),StackExchange.debug={"log":function(){},"init":function(){this.log=function(e){$(function(){var t=$("#debug-messages");t.length||(t=$("<div id='debug-messages' style='text-align:left;position:fixed;top:50px;left:50px;z-index:1000;background:white;border:2px solid black;width:300px;padding:10px;' />").append($("<span style='cursor:pointer;color:#999'>(close debug messages)</span>").click(function(){$("#debug-messages").remove()})).appendTo("body")),$("<div style='margin-top:10px' />").text(e).appendTo(t)})}}},StackExchange.initialized=$.Deferred(),StackExchange.ready=function(e){StackExchange.initialized.done(e)},window.serq)for(var i=0;i<window.serq.length;i++)StackExchange.ready(window.serq[i]);!function(){var e,t={"anonymous":"full-anon.js","loggedIn":"full.js","prettify":"prettify-full.js","pseudoModerator":"moderator.js","inlineEditing":"full.js","editor":"wmd.js","externalEditor":"external-editor.js","autocomplete":"third-party/jquery.autocomplete.min.js","tagAutocomplete":"tageditor.js","tagEditor":"tageditornew.js","tagSuggestions":"tagsuggestions.js","mobile":"mobile.js","help":"help.js","inlineTagEditing":"inline-tag-editing.js","mathjaxEditing":"mathjax-editing.js","revisions":"revisions.js","mockups":"external-editor.js","schematics":"external-editor.js","snippets":"snippet-javascript.js","snippetsJsCodeMirror":"snippet-javascript-codemirror.js","review":"review.js","translation":"full.js","gps":"full-anon.js","postValidation":"post-validation.js","exploreQuestions":"explore-qlist.js","eventCharts":"events.js","virtualKeyboard":"virtual-keyboard.js","keyboardShortcuts":"keyboard-shortcuts.js"},n={},i={},a={},s={},o={},r=function(e,t){return function(n){var i=e[n];return i||(i=e[n]=t(n)),i}},c=function(e){var t,n,i=a[e],s=$.Deferred(),o=$.when(s);if(i)for(var t=0;t<i.length;t++)n=i[t].call(null),n&&$.isFunction(n.promise)&&(o=$.when(o,n));return s.resolve(),o},l=function(){if(!e){var t=$("script[src]").filter(function(){return/stub.*\.js/.test($(this).attr("src"))}).first();0==t.length?(StackExchange.debug.log("couldn't figure out location of stub.js"),e="/content/js/"):e=t.attr("src").replace(/\/stub.*\.js.*$/,"/")}return e},u=function(e){var t=o["js/"+e];return t?"?v="+t:(StackExchange.debug.log("no cache breaker for "+e),"")},d=function(e){return e&&StackExchange.options.locale&&-1==e.indexOf("third-party")&&(e=e.replace(/^(.*)(\.js)(\?.*)?$/,"$1."+StackExchange.options.locale+"$2$3")),e},p=function(e,t){var n=$.Deferred(),i=document.createElement("script");return i.async="async",i.src=t?e:d(e),i.onload=i.onreadystatechange=function(e,t){(!i.readyState||/loaded|complete/.test(i.readyState))&&(t?n.reject():n.resolve())},i.onerror=function(){n.reject()},$("head")[0].appendChild(i),n.promise()},h=function(e){var n=t[e];return n?f(n):$.Deferred().reject().promise()},f=r(i,function(e){return p(l()+e+u(d(e)))}),g=r(n,function(e){function t(){return(i=StackExchange[e])?(c(e).done(function(){n.resolve()}),void 0):a>0?(a--,StackExchange.debug.log("retrying "+e),setTimeout(t,20),void 0):(StackExchange.debug.log("object StackExchange."+e+" not available although file was loaded"),n.reject(),void 0)}var n=$.Deferred(),i=StackExchange[e],a=3;return i?n.resolve():h(e).done(t).fail(n.reject),n.promise()}),m=$.Deferred(),v=function(e,n,i,a){if(!i&&!m.isResolved())return m.done(function(){v(e,n)}),void 0;if(i)for(var s in t)t.hasOwnProperty(s)&&(t[s]=t[s].replace(/^(full(?:-anon)?).js$/,"$1"+(a||"")+".js"));var o=g(e);return i?m.resolve():o=$.when(o,StackExchange.initialized),o.done(function(){n()}).fail(function(){StackExchange.debug.log("failed to provide object "+e)}),o};v.setCacheBreakers=function(e){for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t])};var b=function(e,t,n){if("undefined"!=typeof n){if(s["u_"+n])return;s["u_"+n]=!0}if(StackExchange[e])return t(),void 0;var i=a[e];i||(i=a[e]=[]),i.push(t)};StackExchange.using=v,StackExchange.ifUsing=b,StackExchange.loadJsFile=function(e,t){return p(l()+e,t)}}(),StackExchange.loadJqueryUi=function(){if($.ui)return $.Deferred().resolve();$("<link>").attr({"href":"//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/themes/smoothness/jquery-ui.css","rel":"stylesheet","type":"text/css","media":"all"}).appendTo("head");var result=$.Deferred(),locale=StackExchange.options.locale,datepickerLanguageGetter,datepickerLanguageScript;return $.ajaxSetup({"cache":!0}),"en"!==locale&&(datepickerLanguageGetter=$.ajax({"url":"/content/js/third-party/jquery-ui/datepicker-"+locale+".js","dataType":"text","type":"GET"}).done(function(e){datepickerLanguageScript=e})),$.when(datepickerLanguageGetter||$.Deferred().resolve(),$.getScript("//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js")).done(function(){eval(datepickerLanguageScript),result.resolve()}),$.ajaxSetup({"cache":!1}),result.promise()},String.prototype.formatUnicorn=function(){var e=this.toString();if(!arguments.length)return e;var t=typeof arguments[0],n="string"==t||"number"==t?Array.prototype.slice.call(arguments):arguments[0];for(var i in n)e=e.replace(new RegExp("\\{"+i+"\\}","gi"),n[i]);return e},String.prototype.truncate=function(e,t){var n=this.toString();return e&&n.length>e&&(n=n.substr(0,e)+t),n},String.prototype.splitOnLast=function(e){var t=this.lastIndexOf(e);return 0>t?[this]:[this.substr(0,t),this.substr(t)]},String.prototype.contains=function(e){return this.indexOf(e)>-1},String.prototype.endsWith||(String.prototype.endsWith=function(e){return-1!==this.indexOf(e,this.length-e.length)}),StackExchange.init.createJqueryExtensions=function(){var e=StackExchange.helpers;$.extend($.expr[":"],{"working":function(e){var t=$(e).data("working");return"undefined"!=typeof t&&t},"data":function(e,t,n){var i=n[3],a=$(e).data(i);switch(typeof a){case"undefined":return!1;case"boolean":return a;case"object":return null!==a}return!0},"containsCI":function(e,t,n){return jQuery(e).text().toUpperCase().indexOf(n[3].toUpperCase())>=0}}),$.fn.extend({"working":function(e){return this.each(function(){$(this).data("working",e)})},"track":function(){return this.each(function(){var e=$(this),t=e.is("a[href]")?e:e.find("a[href]"),n=e.data("tracker");t.each(function(){var e=this.href.splitOnLast("#"),t=e[0];t+=(t.contains("?")?"&":"?")+n+(e[1]||""),this.href=t})})},"fadeOutAndRemove":function(){return this.each(function(){var e=$(this);e.fadeOut("fast",function(){e.trigger("removing").remove()})})},"charCounter":function(t){return this.each(function(){var n=t.target?$(t.target):$(this).parents("form").find("span.text-counter"),i=this,a=function(){var e=t.min,a=t.max,s=t.setIsValid||function(){},o=i.value?i.value.replace(/\r\n/g,"\n").length:0,r=o>.8*a?"supernova":o>.6*a?"hot":o>.4*a?"warm":"cool",c="";if(0==o)0==e?(c=function(e){return 1==e.max?"enter up to "+e.max+" character":"enter up to "+e.max+" characters"}({"max":a}),s(!0)):(c=function(e){return 1==e.min?"enter at least "+e.min+" character":"enter at least "+e.min+" characters"}({"min":e}),s(!1));else if(e>o)c=function(e){return 1==e.count,e.count+" more to go..."}({"count":e-o}),s(!1);else{var l=a-o;c=l>=0?function(e){return 1==e.count?e.count+" character left":e.count+" characters left"}({"count":l}):function(e){return 1==e.count?"too long by "+e.count+" character":"too long by "+e.count+" characters"}({"count":Math.abs(l)}),s(a>=o)}n.text(c),n.hasClass(r)||n.removeClass("supernova hot warm cool").addClass(r)};$(this).bind("blur focus keyup paste charCounterUpdate",e.DelayedReaction(a,100,{"sliding":!0}).trigger)})},"selectRange":function(e,t){return this.each(function(){if(this.setSelectionRange)this.focus(),this.setSelectionRange(e,t);else if(this.createTextRange){var n=this.createTextRange();n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select()}})},"addSpinner":function(t){return this.each(function(){e.addSpinner(this,t)})},"addSpinnerAfter":function(t){return this.each(function(){$(this).after(e.getSpinnerImg(t))})},"addSpinnerBefore":function(t){return this.each(function(){$(this).before(e.getSpinnerImg(t))})},"removeSpinner":function(){return this.each(function(){$(this).find("img.ajax-loader").remove()})},"showErrorMessage":function(t,n){return this.each(function(){e.showErrorMessage(this,t,n)})},"showErrorPopup":function(t,n){return this.each(function(){e.showErrorMessage(this,t,n)})},"showInfoMessage":function(t,n){return this.each(function(){e.showInfoMessage(this,t,n)})},"center":function(e){if(StackExchange.options.isMobile)return this;e=e||{};var t=this.parent();"static"===t.css("position")&&(t=t.offsetParent());var n=t.offset(),i=$(window),a=e.top||Math.max((i.height()-this.outerHeight())/2+i.scrollTop()-n.top+(e.dy||0),0);this.css("position","absolute"),this.css("top",a+"px");var s=Math.max(20,(i.width()-this.outerWidth())/2+i.scrollLeft()-n.left);this.css("left",s+"px");var o="calc(50% - "+this.outerWidth()/2+"px)";return this.css("left",o),this.css("left","-webkit-"+o),this},"helpOverlay":function(){return e.bindHelpOverlayEvents(this),this},"hideHelpOverlay":function(){return e.hideHelpOverlay(this),this},"enable":function(){return 0==arguments.length||arguments[0]?this.removeAttr("disabled").css("cursor","pointer").removeClass("disabled-button"):this.attr("disabled","disabled").css("cursor","default").addClass("disabled-button"),this},"disable":function(){return this.enable(!1)},"checked":function(e){e?this.attr("checked","checked"):this.removeAttr("checked")},"loadPopup":function(t){var n=$.Deferred(),i=this,a=t.target||i.parent();t.html||i.addSpinnerAfter({"padding":"0 3px"}),t.loaded&&n.done(t.loaded);var s=function(s){var o,r=$(s).elementNodesOnly();r.find(".popup-actions-cancel, .popup-close a").click(function(){StackExchange.helpers.closePopups(o?r.add(o):r)}),r.find("input:radio[disabled=disabled] + label.action-label").addClass("action-disabled"),t.hideDescriptions&&r.find("ul.action-list > li:not(.action-selected) .action-desc").hide();var c=r.find("input:radio:not(.action-subform input)");c.closest("li").bind("hide-action",function(){var e=$(this),n=".action-subform"+(t.hideDescriptions?", .action-desc":"");e.removeClass("action-selected").find(n).slideUp("fast")}).bind("show-action",function(e){var n=$(this);return n.hasClass("action-selected")?(e.stopImmediatePropagation(),void 0):(n.siblings(".action-selected").trigger("hide-action"),n.addClass("action-selected").find(".action-subform").slideDown("fast",function(){if(t.subformShow&&t.subformShow($(this)),t.subformFocusInput){var e=$(this).find("input[type=text], textarea").not(".actual-edit-overlay").eq(0);e.length&&e.focus()}}),t.hideDescriptions&&n.find(".action-desc").slideDown("fast"),t.actionSelected&&t.actionSelected(n),r.find(".popup-submit").enable(),void 0)}),c.on("click",function(){$(this).closest("li").trigger("show-action")}),t.prepend?r.prependTo(a):r.appendTo(a),t.lightbox&&(o=$('<div class="lightbox"/>').appendTo($("body")).css("height",$(document).height()).data("_popup",r),r.css("z-index",+o.css("z-index")+1).data("_lightbox",o)),n.resolveWith(i,[r,o]),a.trigger($.Event("popupLoad",{"popup":r,"lightbox":o}));var l=function(){};if(t.subformShow){var u=r.find("li.action-selected .action-subform");u.length>0&&(l=function(){u.each(function(){t.subformShow($(this))})})}t.dontShow||(r.center().fadeIn("fast",l),o&&o.fadeIn("fast")),e.bindMovablePopups()};return t.html?s(t.html):$.ajax({"type":"GET","url":t.url,"dataType":"html","data":t.data,"success":s,"error":function(e){var i=e.responseText&&e.responseText.length<200?e.responseText:t.defaultErrorMessage||"Unable to load popup - please try again";a.showErrorMessage(i,{"transient":409==e.status}),n.reject(i)},"complete":e.removeSpinner}),n.promise()},"asyncLoad":function(e){return e=$.extend({"callback":null,"cache":{}},e),this.each(function(){var t=".async-load",n=$(this),i=n.find(t);n.is(t)&&(i=i.add(n)),i.each(function(){var t=$(this),n=t.data("load-url")||"";if(n&&!t.is(":working")){t.working(!0).addSpinner();var i=function(n){t.html(n).removeClass("async-load").mathjax();var i=t.data("after-load")||"";if(i||e.callback){for(var a,s=i.split("."),o=0;o<s.length;o++)a=(a||window)[s[o]];a=a||e.callback,"function"==typeof a&&a(t)}},a=e.cache[n];a?window.setTimeout(function(){i(a)},0):$.ajax({"type":"GET","url":n,"dataType":"html"}).done(function(t){e.cache[n]=t,i(t)}).fail(function(){t.removeSpinner().showErrorMessage("An error has occurred; please try again")})}})})},"mathjax":function(){return this.each(function(){"undefined"!=typeof MathJax&&MathJax.Hub.Typeset(this)})},"elementNodesOnly":function(){return this.filter(function(){return 1===this.nodeType})},"outerHTML":function(){return $("<div>").append(this.eq(0).clone()).html()}})},StackExchange.helpers=function(){function e(e,t,n){for(var i=0;i<n.length;i++){var a=n[i];try{if(/\*/.test(a))for(var s=0;4>s;s++){var o=a.replace(/\*/g,c[s]),r=e.css(o);t.css(o,r)}else t.css(a,e.css(a))}catch(l){}}}function t(t,n,i,a){if(t.is(":visible")){var s=$.browser.msie?0:.4;if(!i())return t.css("opacity",1).css("filter","").removeClass("edit-field-overlayed"),void 0;t.css("opacity",s+(a?.2:0)),t.addClass("edit-field-overlayed");var o=t.prev(".actual-edit-overlay");if(0==o.length){var c=$.trim(r(t).text()),l=t.width(),u=t.height();o=t.clone().prop("className","actual-edit-overlay").attr("name",null).attr("id",null).attr("disabled","disabled").css({"position":"absolute","backgroundColor":"white","color":"black","-webkit-text-fill-color":"black","opacity":1,"width":l,"height":u}),o.is("textarea,input")?(o.val(c),e(n,o,["line-height"])):o.text(c).css("line-height",u+"px").prepend("&nbsp;"),e(n,o,["font-family","font-size","text-align"]),e(t,o,["border-*-style","border-*-color","border-*-width"]),t.css({"zIndex":1,"position":"relative"}),o.insertBefore(t);var d=t.offset().top-o.offset().top;if(0!=d){var p=parseInt(o.css("margin-top")),h=p+d;t.is("textarea")||(h=parseInt(o.prevAll(":visible").eq(0).css("margin-bottom"))+p),o.css("margin-top",h)}var f=t.offset().left-o.offset().left;if(0!=f){var g=parseInt(o.css("margin-left"));o.css("margin-left",g+f)}}}}function n(e,t){$(e).find("input[type='submit']").prop("disabled",t)}var i,a,s,o=function(){if(!StackExchange.options.isMobile){var e=function(){i=a=null,$("body").removeAttr("style")},t=$("div.popup");t.each(function(e,t){var n=$(t).find(".handle");n.length&&(n.css({"cursor":"move"}),n.unbind("mousedown").bind("mousedown",function(e){var n=$(t).offset();a={"x":n.left-e.pageX,"y":n.top-e.pageY},i=$(t);var s=i.offset();i.offset(s).offset(s),$("body").attr("style","cursor:move"),e.preventDefault()}))}),s||(s=!0,$(document).on("mousemove",function(e){if(i){var t=e.pageY+a.y,n=e.pageX+a.x;i.offset({"top":t,"left":n})}}).on("keypress",e).on("mouseup",e))}},r=function(e){return e.parent().find("span.edit-field-overlay")},c=["left","right","top","bottom"],l={"bindMovablePopups":o,"genericBindOverlayEvents":function(e,n,i){StackExchange.options.isMobile||n.not("[placeholder]").bind("keydown contextmenu",function(){l.hideHelpOverlay(e)}).focus(function(){t(e,n,i,!0)}).on("blur change",function(){t(e,n,i)}).each(function(){t(e,n,i)})},"bindHelpOverlayEvents":function(e){e.each(function(){var e=$(this);l.genericBindOverlayEvents(e,e,function(){return""===e.val()})})},"hideHelpOverlay":function(e){e.css("opacity",1),e.css("filter",""),e.removeClass("edit-field-overlayed")},"onClickDraftSave":function(e){return $(e).click(function(e){if(null!=StackExchange.cardiologist){e.preventDefault();var t=this.href;return StackExchange.cardiologist.ensureDraftSaved(function(){window.onbeforeunload=null,window.location.href=t}),!1}}),!0},"showMessage":function(e,t,n){if(e=$(e),e.length){var i={"position":"inside","dismissable":!0,"type":"error","closeOthers":!0},a=$.extend({},i,n),s=9;a.closeOthers&&$(".message").fadeOutAndRemove();var o=$('<div class="message"><div class="message-inner"><div class="message-text"></div></div></div>'),r=o.find(".message-inner"),c=o.find(".message-text");if(o.addClass("message-"+a.type),c.html(t),a.dismissable&&(o.addClass("message-dismissable"),c.css("padding-right","35px"),r.prepend($("<div />",{"title":"close this message (or hit Esc)","class":"message-close","text":"×"})),o.click(function(e){var t=$(e.target),n=a.dismissable===!0&&!t.is("a")||"x-or-esc"===a.dismissable&&t.hasClass("message-close");n&&(a.dismissing&&a.dismissing(),o.fadeOutAndRemove())})),a.dismissing&&o.on("popupClose",function(e,t){"esc"==t.closeTrigger&&a.dismissing()}),a.css&&o.css(a.css),"inside"==a.position||"inline"==a.position||a.tip||(a.tip=a.position.my),a.tip&&r.addClass("message-tip message-tip-"+a.tip.replace(" ","-")),"inline"==a.position)e.append(o);else if("inside"==a.position)o.css("position","absolute"),e.append(o);else{o.css("position","absolute");var l=e.offsetParent();l.append(o);var u,d=e.position(),p=e.outerWidth(!0),h=e.outerHeight(!0),f=o.outerWidth(),g=o.outerHeight();switch(a.position.at){case"top left":u={"top":0,"left":0};break;case"top center":u={"top":0,"left":p/2};break;case"top right":u={"top":0,"left":p};break;case"right top":u={"top":0,"left":p};break;case"right center":u={"top":h/2,"left":p};break;case"right bottom":u={"top":h,"left":p};break;case"bottom right":u={"top":h,"left":p};break;case"bottom center":u={"top":h,"left":p/2};break;case"bottom left":u={"top":h,"left":0};break;case"left bottom":u={"top":h,"left":0};break;case"left center":u={"top":h/2,"left":0};break;case"left top":u={"top":0,"left":0}}var m;switch(a.position.my){case"left top":m={"top":0,"left":-s};break;case"top left":m={"top":-s,"left":0};break;case"top right":m={"top":-s,"left":f};break;case"right top":m={"top":0,"left":f+s};break;case"right bottom":m={"top":g,"left":f+s};break;case"bottom right":m={"top":g+s,"left":f};break;case"bottom left":m={"top":g+s,"left":0};break;case"left bottom":m={"top":g,"left":-s}}var v={"left":d.left+u.left-m.left,"top":d.top+u.top-m.top};o.data("initialTop",v.top),o.animateOffsetTop=function(e){o.animate({"top":o.data("initialTop")+e})},a.position.offsetTop&&(v.top+=a.position.offsetTop),a.position.offsetLeft&&(v.left+=a.position.offsetLeft),o.css({"top":v.top,"left":v.left})}return o.fadeIn(),a.transient&&setTimeout(function(){o.fadeOutAndRemove()},Math.max(2500,40*t.length)),a.removing&&o.on("removing",a.removing),o}},"showErrorMessage":function(e,t,n){var i={"position":"inside","type":"error"},a=$.extend({},i,n);return this.showMessage(e,t,a)},"showErrorPopup":function(e,t,n){return this.showErrorMessage(e,t,n)},"showInfoMessage":function(e,t,n){var i={"position":"inside","transient":!0,"type":"info"},a=$.extend({},i,n);return this.showMessage(e,t,a)},"removeMessages":function(){$(".message").fadeOutAndRemove()},"addSpinner":function(e,t){$(e).append(l.getSpinnerImg(t))},"getSpinnerImg":function(e){var t=$("<img />",{"class":"ajax-loader","src":"/content/img/progress-dots.gif","title":"loading...","alt":"loading..."});return e&&t.css(e),t},"removeSpinner":function(){$("img.ajax-loader").remove()},"closePopups":function(e,t){var n=$.Event("closePopups");n.selectorToClose=e,n.closeTrigger=t||"closePopups",$(document).trigger(n)},"enableSubmitButton":function(e){n(e,!1)},"disableSubmitButton":function(e){n(e,!0)},"loadTicks":function(e){var t;t=e?e.find(".edit-block"):$(".edit-block"),0==t.find("input[name=i1l]").length&&(t.data("loading-ticks")||(t.data("loading-ticks",!0),$.ajax({"url":"/questions/ticks","cache":!1,"success":function(e){t.append("<input type='hidden' name='i1l' value='"+e+"' />")},"complete":function(){t.data("loading-ticks",!1)}})))},"showFancyOverlay":function(e){e=e||{};var t=$("#overlay-header"),n=e.message||"",i=$.browser.msie?{"background":"#fff","opacity":0}:{};e.showClose!==!1&&(n+='<br><a class="close-overlay">close this message</a>'),t.html(n).css(i).animate({"opacity":"1","height":"show"},"slow",e.complete).find(".close-overlay").click(function(){t.animate({"opacity":"0","height":"hide"},"fast")})},"DelayedReaction":function(e,t,n){n=n||{};var i,a,s=n.always,o=function(){i=null,e.apply(null,a)};return{"trigger":function(){if(a=arguments,s&&s.apply(null,a),i){if(!n.sliding)return;clearTimeout(i),i=setTimeout(o,t)}else i=setTimeout(o,t)},"cancel":function(){i&&(clearTimeout(i),i=null)}}},"fireAndForget":function(e){$.ajax({"type":"POST","url":e,"async":!0})},"updateQueryStringParameter":function(e,t,n){var i=new RegExp("([?&])"+t+"=.*?(&|$)","i"),a=-1!==e.indexOf("?")?"&":"?";return e.match(i)?e.replace(i,"$1"+t+"="+n+"$2"):e+a+t+"="+n},"parseUrl":function(e){var t=document.createElement("a");return t.href=e,""===t.host&&(t.href=t.href),t},"isInNetwork":function(e){if("string"!=typeof e)throw new TypeError;try{var t=StackExchange.helpers.parseUrl(e.trim()).hostname;if(t===window.location.hostname)return!0;for(var n=["stackoverflow.com","stackexchange.com","serverfault.com","superuser.com","stackauth.com","stackapps.com","askubuntu.com","askdifferent.com","mathoverflow.net","askpatents.com"],i=0;i<n.length;i++){var a=n[i];if(t===a||t.endsWith("."+a))return!0}}catch(s){}return!1}};return l}(),StackExchange.switchMobile=function(e){$.post("/mobile/"+e,{"returnurl":window.location.href},function(e){window.location.href=e})},StackExchange.switchLocale=function(e,t){$.post("/locale/"+e,{"returnurl":t},function(e){window.location=e})},jQuery.cookie=function(e,t,n){if("undefined"==typeof t){var i=null;if(document.cookie&&""!=document.cookie)for(var a=document.cookie.split(";"),s=0;s<a.length;s++){var o=jQuery.trim(a[s]);if(o.substring(0,e.length+1)==e+"="){i=decodeURIComponent(o.substring(e.length+1));break}}return i}n=n||{},null===t&&(t="",n.expires=-1);var r="";if(n.expires&&("number"==typeof n.expires||n.expires.toUTCString)){var c;"number"==typeof n.expires?(c=new Date,c.setTime(c.getTime()+24*n.expires*60*60*1e3)):c=n.expires,r="; expires="+c.toUTCString()}var l=n.path?"; path="+n.path:"",u=n.domain?"; domain="+n.domain:"",d=n.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(t),r,l,u,d].join("")},jQuery.expr[":"].regex=function(e,t,n){var i=n[3].split(","),a=/^(data|css):/,s={"method":i[0].match(a)?i[0].split(":")[0]:"attr","property":i.shift().replace(a,"")},o="ig",r=new RegExp(i.join("").replace(/^\s+|\s+$/g,""),o);return r.test(jQuery(e)[s.method](s.property))},$.extend($.expr[":"],{"containsExact":function(e,t,n){return $.trim(e.innerHTML.toLowerCase())===n[3].toLowerCase()},"containsExactCase":function(e,t,n){return $.trim(e.innerHTML)===n[3]},"containsRegex":function(e,t,n){var i=/^\/((?:\\\/|[^\/])+)\/([mig]{0,3})$/,a=i.exec(n[3]);return RegExp(a[1],a[2]).test($.trim(e.innerHTML))}}),function(e){e.fn.typeWatch=function(t){function n(t,n){var i=e(t.el).val();(i.length>a.captureLength&&i.toUpperCase()!=t.text||n&&i.length>a.captureLength)&&(t.text=i.toUpperCase(),t.cb(i))}function i(t){if("TEXT"==t.type.toUpperCase()||"TEXTAREA"==t.nodeName.toUpperCase()){var i={"timer":null,"text":e(t).val().toUpperCase(),"cb":a.callback,"el":t,"wait":a.wait};a.highlight&&e(t).focus(function(){this.select()});var s=function(e){var t=i.wait,a=!1;13==e.keyCode&&"TEXT"==this.type.toUpperCase()&&(t=1,a=!0);var s=function(){n(i,a)};clearTimeout(i.timer),i.timer=setTimeout(s,t)};e(t).keydown(s).bind("paste",null,function(e){e.which||s(this)}).bind("input",null,function(e){e.which||s(this)})}}var a=e.extend({"wait":750,"callback":function(){},"highlight":!0,"captureLength":2},t);return this.each(function(){i(this)})}}(jQuery),function(e){function t(t){var n;
return t&&t.constructor==Array&&3==t.length?t:(n=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t))?[parseInt(n[1]),parseInt(n[2]),parseInt(n[3])]:(n=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t))?[2.55*parseFloat(n[1]),2.55*parseFloat(n[2]),2.55*parseFloat(n[3])]:(n=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t))?[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]:(n=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t))?[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)]:(n=/rgba\(0, 0, 0, 0\)/.exec(t))?i.transparent:i[e.trim(t).toLowerCase()]}function n(n,i){var a;do{if(a=e.curCSS(n,i),""!=a&&"transparent"!=a||e.nodeName(n,"body"))break;i="backgroundColor"}while(n=n.parentNode);return t(a)}e.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(i,a){e.fx.step[a]=function(e){e.colorInit||(e.start=n(e.elem,a),e.end=t(e.end),e.colorInit=!0),e.elem.style[a]="rgb("+[Math.max(Math.min(parseInt(e.pos*(e.end[0]-e.start[0])+e.start[0]),255),0),Math.max(Math.min(parseInt(e.pos*(e.end[1]-e.start[1])+e.start[1]),255),0),Math.max(Math.min(parseInt(e.pos*(e.end[2]-e.start[2])+e.start[2]),255),0)].join(",")+")"}});var i={"transparent":[255,255,255]}}(jQuery),!function(e,t,n){"function"==typeof define?define(n):"undefined"!=typeof module?module.exports=n():t[e]=n(t)}("klass",this,function(e){function t(e){return s.call(n(e)?e:function(){},e,1)}function n(e){return typeof e===r}function i(e,t,n){return function(){var i=this.supr;this.supr=n[l][e];var a={}.fabricatedUndefined,s=a;try{s=t.apply(this,arguments)}finally{this.supr=i}return s}}function a(e,t,a){for(var s in t)t.hasOwnProperty(s)&&(e[s]=n(t[s])&&n(a[l][s])&&c.test(t[s])?i(s,t[s],a):t[s])}function s(e,t){function i(){}function o(){this.initialize?this.initialize.apply(this,arguments):(t||u&&r.apply(this,arguments),d.apply(this,arguments))}i[l]=this[l];var r=this,c=new i,u=n(e),d=u?e:this,p=u?{}:e;return o.methods=function(e){return a(c,e,r),o[l]=c,this},o.methods.call(o,p).prototype.constructor=o,o.extend=s,o[l].implement=o.statics=function(e,t){return e="string"==typeof e?function(){var n={};return n[e]=t,n}():e,a(this,e,r),this},o}e=e||this;var o=e.klass,r="function",c=/.*/,l="prototype";return t.noConflict=function(){return e.klass=o,this},t}),StackExchange.gps=function(){function e(e,t,n,i){t=t||{};var a=null;StackExchange.options&&StackExchange.options.user&&(t.user_type=StackExchange.options.user.userType,a=StackExchange.options.user.ab);var s={"evt":e,"properties":t,"now":(new Date).getTime()};a&&(s.ab=a),StackExchange._gps_track.push(s),i&&i()}if(StackExchange._gps_track=[],window.location.href.indexOf("utm_")>=0){var t=function(e){var t=new RegExp("[\\?&]utm_"+e+"=([^&#]*)").exec(window.location.href);return t?decodeURIComponent(t[1])||void 0:void 0},n={"source":t("source"),"medium":t("medium")||"unknown","campaign":t("campaign"),"content":t("content")};n.source&&n.campaign&&e("utm.view",n,!1),StackExchange.using("gps",function(){StackExchange.gps.sendPending()})}return{"track":e,"sendPending":function(e){e&&e()}}}();