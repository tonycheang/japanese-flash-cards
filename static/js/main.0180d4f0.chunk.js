(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(t,e,n){},132:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(14),o=n.n(s),i=(n(84),n(24)),c=n(28),u=n(25),l=n(7),d=n(29),h=n(15),p=function(t){function e(){return Object(h.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{style:{fontSize:70,margin:"2%"}},this.props.data)}}]),e}(r.a.Component),f=n(77),y={backgroundColor:"transparent",fontSize:20,textAlign:"center"},m=function(t){function e(){return Object(h.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{align:"center",style:{margin:"2%",width:"80%"}},r.a.createElement(f.a,{autoFocus:!0,ghost:!0,placeholder:this.props.defaultText,value:this.props.data,style:y,onChange:this.props.onChange}))}}]),e}(r.a.Component),b=n(17),g=(n(131),function t(e,n){Object(h.a)(this,t),this.front=e,this.back=n}),k=function(t){function e(t){var n;Object(h.a)(this,e),(n=Object(c.a)(this,Object(u.a)(e).call(this,t))).handleInput=n.handleInput.bind(Object(l.a)(n)),n.reportCorrectness=n.reportCorrectness.bind(Object(l.a)(n)),n.readForm=n.readForm.bind(Object(l.a)(n)),n.showAnswer=n.showAnswer.bind(Object(l.a)(n)),n.resetInputAfterTyping=n.resetInput.bind(Object(l.a)(n),500),n.resetInputAfterReveal=n.resetInput.bind(Object(l.a)(n),0,!0),n.defaultBackgroundColor="#FFFFFF";var a=["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so","ta","chi","tsu","te","to","na","ni","nu","ne","no","ha","hi","fu","he","ho","ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa","wo","n"];return n.cards=["\u3042","\u3044","\u3046","\u3048","\u304a","\u304b","\u304d","\u304f","\u3051","\u3053","\u3055","\u3057","\u3059","\u305b","\u305d","\u305f","\u3061","\u3064","\u3066","\u3068","\u306a","\u306b","\u306c","\u306d","\u306e","\u306f","\u3072","\u3075","\u3078","\u307b","\u307e","\u307f","\u3080","\u3081","\u3082","\u3084","\u3086","\u3088","\u3089","\u308a","\u308b","\u308c","\u308d","\u308f","\u3092","\u3093"].map(function(t,e){return new g(t,a[e])}),n.state={currentCard:n.cards[Math.floor(n.cards.length*Math.random())],typed:"",textColor:"#000000",backgroundColor:n.defaultBackgroundColor,border:"1px solid",firstTimeTyping:!0},n}return Object(d.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleInput)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleInput)}},{key:"handleInput",value:function(t){this.state.firstTimeTyping&&this.setState({firstTimeTyping:!1}),"Enter"!==t.key&&" "!==t.key||(this.state.justRevealed?this.resetInputAfterReveal():this.showAnswer());var e=this.state.typed;if("Backspace"===t.key)e.length>0&&this.setState({typed:e.slice(0,e.length-1)});else{if(!/^\w$/.test(t.key))return;this.setState(function(e){return e.typed+=t.key})}this.state.typingTimer&&clearTimeout(this.state.typingTimer),this.setState({typingTimer:setTimeout(this.reportCorrectness,300)})}},{key:"readForm",value:function(t){}},{key:"showAnswer",value:function(t){this.state.firstTimeTyping&&this.setState({firstTimeTyping:!1}),this.setState({justRevealed:!0,typed:this.state.currentCard.back})}},{key:"reportCorrectness",value:function(){if(!this.state.justRevealed){var t=this.state.currentCard.back,e=this.state.typed.toLowerCase();e.length<t.length&&e===t.slice(0,e.length)||(e===this.state.currentCard.back?(this.setState({backgroundColor:"#f6ffed",border:"1px solid #b7eb8f"}),this.resetInputAfterTyping(!0)):(this.setState({backgroundColor:"#fff1f0",border:"1px solid #ffa39e"}),this.resetInputAfterTyping(!1)))}}},{key:"resetInput",value:function(t,e){var n=this;e&&this.setState({currentCard:this.cards[Math.floor(this.cards.length*Math.random())],typed:""}),setTimeout(function(){return n.setState({backgroundColor:n.defaultBackgroundColor,border:"1px solid"})},t),this.setState({typed:"",typingTimer:null,justRevealed:!1})}},{key:"render",value:function(){var t,e=this.state.currentCard,n=this.state.firstTimeTyping?"type the phonetic translation":"";return t=this.state.justRevealed?r.a.createElement(b.a,{type:"default",onClick:this.resetInputAfterReveal,style:{backgroundColor:"transparent",margin:"2%"}},"continue"):r.a.createElement(b.a,{type:"default",onClick:this.showAnswer,style:{backgroundColor:"transparent",margin:"2%"}},"show"),r.a.createElement("div",{align:"center"},r.a.createElement("div",{class:"Card",style:{backgroundColor:this.state.backgroundColor,border:this.state.border}},r.a.createElement("header",{style:{fontSize:20}},"A Flash Card Mini-Game for Japanese"),r.a.createElement(p,{data:e.front}),r.a.createElement(m,{data:this.state.typed,defaultText:n,textColor:this.state.textColor,onChange:this.readForm}),r.a.createElement("div",null,t)))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},79:function(t,e,n){t.exports=n(132)},84:function(t,e,n){}},[[79,1,2]]]);
//# sourceMappingURL=main.0180d4f0.chunk.js.map