(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},27:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(16),C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_style_calculator_scss__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(41),_style_calculator_scss__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_style_calculator_scss__WEBPACK_IMPORTED_MODULE_8__),buttons=[{button:"zero",value:0},{button:"one",value:1},{button:"two",value:2},{button:"three",value:3},{button:"four",value:4},{button:"five",value:5},{button:"six",value:6},{button:"seven",value:7},{button:"eight",value:8},{button:"nine",value:9},{button:"decimal",value:"."},{button:"add",value:"+"},{button:"subtract",value:"-"},{button:"multiply",value:"*"},{button:"divide",value:"/"},{button:"equals",value:"="},{button:"clear",value:"C"}],Calculator=function(_React$Component){function Calculator(e){var t;return Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Calculator),(t=Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator).call(this,e))).state={display:"0",evaluated:!1},t.handleClick=t.handleClick.bind(Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(t)),t}return Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.a)(Calculator,_React$Component),Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,[{key:"handleClick",value:function handleClick(event){var tempDisplay=this.state.display,lastCharacter=tempDisplay.split("")[tempDisplay.split("").length-1],secondLast=tempDisplay.split("")[tempDisplay.split("").length-2];if(!1===this.state.evaluated)switch(event.target.id){case"clear":this.setState({display:"0"});break;case"equals":if("+"===lastCharacter|"-"===lastCharacter|"*"===lastCharacter|"/"===lastCharacter)break;this.setState({display:eval(this.state.display).toString(),evaluated:!0});break;case"add":case"multiply":case"divide":"0"===tempDisplay?this.setState({display:tempDisplay+event.target.innerHTML}):"+"===lastCharacter|"*"===lastCharacter|"/"===lastCharacter?this.setState({display:Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(tempDisplay.split("").slice(0,tempDisplay.split("").length-1)).join("")+event.target.innerHTML}):"-"===lastCharacter?"+"===secondLast|"*"===secondLast|"/"===secondLast?this.setState({display:Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(tempDisplay.split("").slice(0,tempDisplay.split("").length-2)).join("")+event.target.innerHTML}):this.setState({display:Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(tempDisplay.split("").slice(0,tempDisplay.split("").length-1)).join("")+event.target.innerHTML}):this.setState({display:tempDisplay+event.target.innerHTML});break;case"decimal":if(this.state.display.match(/\./)){var numArr=this.state.display.split(/[+\-\/*\/]/);if(numArr[numArr.length-1].match(/\./))break;this.setState({display:tempDisplay+event.target.innerHTML});break}this.setState({display:tempDisplay+event.target.innerHTML});break;case"subtract":if("-"===lastCharacter)break;break;default:"0"===tempDisplay?this.setState({display:event.target.innerHTML}):this.setState({display:tempDisplay+event.target.innerHTML})}else switch(this.setState({evaluated:!1}),event.target.id){case"add":case"subtract":case"multiply":case"divide":this.setState({display:tempDisplay+event.target.innerHTML});break;case"clear":this.setState({display:"0"});break;case"equals":this.setState({evaluated:!0});break;default:this.setState({display:event.target.innerHTML})}}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"calc-wrapper"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"calc-container"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"calc-display",id:"display"},this.state.display),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ButtonLayout,{clicker:this.handleClick})))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component),ButtonLayout=function(e){function t(){return Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,t),Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(t).apply(this,arguments))}return Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.a)(t,e),Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(t,[{key:"render",value:function(){var e=this,t=buttons.map(function(t){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Button,{id:t.button,key:t.button,value:t.value,clicker:e.props.clicker})});return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"button-layout"},t)}}]),t}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component),Button=function(e){function t(){return Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,t),Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(t).apply(this,arguments))}return Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.a)(t,e),Object(C_Users_William_Documents_Portfolio_Website_react_playground_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(t,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{id:this.props.id,className:"calc-button",onClick:this.props.clicker,value:this.props.value},this.props.value)}}]),t}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);__webpack_exports__.a=Calculator},28:function(e,t,a){e.exports=a(43)},33:function(e,t,a){},34:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(23),_=a.n(r),l=a(11),i=(a(33),a(12)),o=a(2),c=a(3),u=a(5),m=a(4),d=a(6),h=(a(34),a(24)),p=a.n(h),b=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"home-container"},s.a.createElement("div",{className:"nav-box"},s.a.createElement("header",{className:"nav-header"},s.a.createElement("img",{src:p.a,className:"react-logo",alt:"React logo"}),s.a.createElement("h1",null,"Will's React Playground"),s.a.createElement("p",null,"Welcome!  This page was born of the need to host a few React doodles for display in my ",s.a.createElement("a",{href:"https://wbrueske.github.io/"},"portfolio")," in a way that shows the media queries in action\u2014through the use of a resizable ",s.a.createElement("code",null,"<iframe>"),".",s.a.createElement("br",null),s.a.createElement("a",{href:"https://wbrueske.github.io/"},"See my full portfolio here"),".")),s.a.createElement("nav",null,s.a.createElement("ul",{className:"home-link-ul"},s.a.createElement("li",null,s.a.createElement(l.b,{to:"/random-quote-machine",className:"home-link"},"Random Quote Machine")),s.a.createElement("li",null,s.a.createElement(l.b,{to:"/markdown-previewer",className:"home-link"},"Markdown Previewer")),s.a.createElement("li",null,s.a.createElement(l.b,{to:"/calculator",className:"home-link"},"JavaScript Calculator")),s.a.createElement("li",null,s.a.createElement(l.b,{to:"/pomodoro-clock",className:"home-link"},"Pomodoro Clock"))))))}}]),t}(s.a.Component),E=a(8),f=(a(39),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={text:"",author:"",quotes:[]},a.updateQuote=a.updateQuote.bind(Object(E.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(function(e){return e.json()}).then(function(t){var a=t.quotes[Math.floor(Math.random()*t.quotes.length)];e.setState({text:a.quote,author:a.author,quotes:t.quotes})})}},{key:"updateQuote",value:function(){var e=this.state.quotes[Math.floor(Math.random()*this.state.quotes.length)];this.setState({text:e.quote,author:e.author})}},{key:"render",value:function(){var e="http://twitter.com/intent/tweet?text=".concat(this.state.text," %0a-").concat(this.state.author);return s.a.createElement("div",{className:"quote-container"},s.a.createElement("div",{id:"quote-box"},s.a.createElement("p",{id:"text"},'"',this.state.text,'"'),s.a.createElement("p",{id:"author"},"- ",this.state.author),s.a.createElement("a",{id:"tweet-quote",href:e,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:"fab fa-twitter"})," Tweet Quote"),s.a.createElement("button",{id:"new-quote",onClick:this.updateQuote},s.a.createElement("i",{className:"fas fa-plus"})," New Quote")))}}]),t}(s.a.Component)),v=a(15),k=a.n(v);a(40);k.a.setOptions({breaks:!0});var C=new k.a.Renderer;C.link=function(e,t,a){return"<a href=".concat(e,' target="_blank">').concat(a,"</a>")},C.codespan=function(e){return'<code class="code-span">'.concat(e,"</code>")};var O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={markdown:P},a.handleChange=a.handleChange.bind(Object(E.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({markdown:e.target.value})}},{key:"render",value:function(){return s.a.createElement("div",{className:"markdown-previewer"},s.a.createElement("nav",null,s.a.createElement("h1",null,s.a.createElement("i",{className:"fab fa-markdown"})," Markdown Previewer")),s.a.createElement("p",{className:"enterMD"},"Enter markdown here:"),s.a.createElement("p",{className:"previewer-top"},"Preview:"),s.a.createElement("div",{className:"markdown-wrapper"},s.a.createElement("div",{className:"editor-wrapper"},s.a.createElement(D,{markdown:this.state.markdown,onChange:this.handleChange})),s.a.createElement("p",{className:"previewer-bottom"},"Preview:"),s.a.createElement(y,{markdown:this.state.markdown})))}}]),t}(s.a.Component),D=function(e){return s.a.createElement("textarea",{id:"editor",value:e.markdown,onChange:e.onChange,type:"text"})},y=function(e){return s.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:k()(e.markdown,{renderer:C})}})},P="# Heading 1\n---\n## Heading 2\n### Heading 3\n\nBody Text\n**Bold Text**\n_Italic Text_\n**_Bold & Italic Text_**\n~Strikethrough Text~\n[Hyperlinks](https://www.freecodecamp.com)\n\n```\n// This is a multi-line code block.\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nThere is separate styling for `in-line code` in this previewer.\n\n> Block Quotes are denoted as separate from code blocks by the left border color.\n\n1. List\n - Items\n    * Can\n1. Be\n * Indented\n    - Repeatedly\n    * Or\n    - Not\n\nTables | Can     | Be  | Created\n------ | ------- | --- | -------\nWith   | Pipes   | And | Hyphens\nWith   | Hyphens | And | Pipes  \nWith   | Pipes   | And | Hyphens\nWith   | Hyphens | And | Pipes  \n\n\nLastly, you can add images:\n![Markdown Image](https://biosector01.com/w/images/bs01/thumb/5/51/ToaMatacover.png/487px-ToaMatacover.png)\n",g=O,M=a(27),W=(a(42),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={currentMinutes:25,currentSeconds:0,currentPhase:"Session",sessionLength:25,breakLength:5,countdown:!1},a.incrementDecrement=a.incrementDecrement.bind(Object(E.a)(a)),a.reset=a.reset.bind(Object(E.a)(a)),a.startStop=a.startStop.bind(Object(E.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"incrementDecrement",value:function(e){if(!this.state.countdown)switch(e.target.id){case"session-increment":this.state.sessionLength<60&&this.setState({sessionLength:this.state.sessionLength+1,currentMinutes:this.state.sessionLength+1,currentSeconds:0});break;case"session-decrement":this.state.sessionLength>1&&this.setState({sessionLength:this.state.sessionLength-1,currentMinutes:this.state.sessionLength-1,currentSeconds:0});break;case"break-increment":this.state.breakLength<60&&this.setState({breakLength:this.state.breakLength+1});break;case"break-decrement":this.state.breakLength>1&&this.setState({breakLength:this.state.breakLength-1})}}},{key:"reset",value:function(){document.getElementById("beep").pause(),document.getElementById("beep").currentTime=0,clearInterval(this.interval),this.setState({currentMinutes:25,currentSeconds:0,currentPhase:"Session",sessionLength:25,breakLength:5,countdown:!1})}},{key:"tick",value:function(){this.state.currentSeconds>0?this.setState({currentSeconds:this.state.currentSeconds-1}):this.state.currentMinutes>0?this.setState({currentMinutes:this.state.currentMinutes-1,currentSeconds:59}):(document.getElementById("beep").currentTime=0,document.getElementById("beep").play(),"Session"===this.state.currentPhase?this.setState({currentPhase:"Break",currentMinutes:this.state.breakLength}):this.setState({currentPhase:"Session",currentMinutes:this.state.sessionLength}))}},{key:"startStop",value:function(){var e=this;this.state.countdown?(clearInterval(this.interval),this.setState({countdown:!1})):(this.setState({countdown:!0}),this.interval=setInterval(function(){return e.tick()},1e3))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return s.a.createElement("div",{className:"pomodoro-container"},s.a.createElement("div",{className:"pomodoro"},s.a.createElement("audio",{id:"beep",src:"https://freesound.org/data/previews/389/389523_5450487-lq.mp3"}),s.a.createElement("div",{className:"session-settings flank-display"},s.a.createElement("div",{id:"session-label",className:"flank-label"},"Session Length"),s.a.createElement("div",{className:"flank-items"},s.a.createElement("div",{id:"session-decrement",className:"pom-button flank-item",onClick:this.incrementDecrement},s.a.createElement("i",{className:"fas fa-minus"})),s.a.createElement("div",{id:"session-length",className:"flank-item flank-timer"},this.state.sessionLength),s.a.createElement("div",{id:"session-increment",className:"pom-button flank-item",onClick:this.incrementDecrement},s.a.createElement("i",{className:"fas fa-plus"})))),s.a.createElement("div",{className:"main-display"},s.a.createElement("div",{className:"main-label"},"Pomodoro Clock"),s.a.createElement("div",null,this.state.timer),s.a.createElement("div",{className:"session-break-label",id:"timer-label"},this.state.currentPhase),s.a.createElement(L,{minutes:this.state.currentMinutes,seconds:this.state.currentSeconds}),s.a.createElement("div",{className:"main-buttons"},s.a.createElement("div",{id:"reset",className:"pom-button flank-item",onClick:this.reset},s.a.createElement("i",{className:"fas fa-sync-alt"})),s.a.createElement("div",{id:"start_stop",className:"pom-button flank-item",onClick:this.startStop},s.a.createElement("i",{className:"fas fa-play"}),s.a.createElement("i",{className:"fas fa-pause"})))),s.a.createElement("div",{className:"break-settings flank-display"},s.a.createElement("div",{id:"break-label",className:"flank-label"},"Break Length"),s.a.createElement("div",{className:"flank-items"},s.a.createElement("div",{id:"break-decrement",className:"pom-button flank-item",onClick:this.incrementDecrement},s.a.createElement("i",{className:"fas fa-minus"})),s.a.createElement("div",{id:"break-length",className:"flank-item flank-timer"},this.state.breakLength),s.a.createElement("div",{id:"break-increment",className:"pom-button flank-item",onClick:this.incrementDecrement},s.a.createElement("i",{className:"fas fa-plus"}))))))}}]),t}(s.a.Component)),L=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"clockFace",value:function(e){return e<10?"0"+e:e}},{key:"render",value:function(){return s.a.createElement("div",{className:"main-timer",id:"time-left"},this.clockFace(this.props.minutes),":",this.clockFace(this.props.seconds))}}]),t}(s.a.Component),w=W;var T=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(i.a,{exact:!0,path:"/",component:b}),s.a.createElement(i.a,{exact:!0,path:"/random-quote-machine",component:f}),s.a.createElement(i.a,{exact:!0,path:"/markdown-previewer",component:g}),s.a.createElement(i.a,{exact:!0,path:"/calculator",component:M.a}),s.a.createElement(i.a,{exact:!0,path:"/pomodoro-clock",component:w}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));_.a.render(s.a.createElement(l.a,null,s.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.e073354c.chunk.js.map