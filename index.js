!function(){
  "use strict";
  function e(e,t){
    for(var n=0;n<t.length;n++){
      var r=t[n];
      r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}};
  function t(e){
    return t=Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)
  };
  function n(e,t){
    return n=Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function(e,t){return e.__proto__=t,e},n(e,t)
  };
  function r(e){
    if(void 0===e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  };
  
  function a(e,t){
    if(t&&("object"==typeof t||"function"==typeof t))
      return t;
    if(void 0!==t)
      throw new TypeError("Derived constructors may only return object or undefined");
    return r(e)
  };
  
  function i(e){
    var n=function(){
      if("undefined"==typeof Reflect||!Reflect.construct)
        return!1;
      if(Reflect.construct.sham)
        return!1;
      if("function"==typeof Proxy)
        return!0;
      try{
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}
        catch(e){return!1}}();
      return function(){
        var r,i=t(e);
        if(n){
          var o=t(this).constructor;r=Reflect.construct(i,arguments,o)}
        else r=i.apply(this,arguments);return a(this,r)}
  };
        
  marked.setOptions({
    breaks:!0,
    highlight:function(e){
      return Prism.highlight(e,Prism.languages.javascript,"javascript")}}
  );
  
  var o=new marked.Renderer;
  o.link=function(e,t,n){
    return'<a target="_blank" href="'.concat(e,'">').concat(n,"</a>")
  };
  
  var c=function(t){
    !function(e,t){
      if("function"!=typeof t&&null!==t)
        throw new TypeError("Super expression must either be null or a function");
      e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),
      Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)}(m,React.Component);
    var a,o,c,f=i(m);
    
    function m(e){
      var t;
      return function(e,t){
        if(!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")}(this,m),
      (t=f.call(this,e)).state={
        markdown:u,editorMaximized:!1,
        previewMaximized:!1},
      t.handleChange=t.handleChange.bind(r(t)),
      t.handleEditorMaximize=t.handleEditorMaximize.bind(r(t)),
      t.handlePreviewMaximize=t.handlePreviewMaximize.bind(r(t)),t}
    return a=m,(o=[{
      key:"handleChange",
      value:function(e){
        this.setState({markdown:e.target.value})}
    }, {
      key:"handleEditorMaximize",
      value:function(){
        this.setState({
          editorMaximized:!this.state.editorMaximized})}
    },{
      key:"handlePreviewMaximize",
      value:function(){
        this.setState({
          previewMaximized:!this.state.previewMaximized})}
    },{
      key:"render",
      value:function(){
        var e=this.state.editorMaximized
        ? ["editorWrap maximized","previewWrap hide","fa fa-compress"]
        : this.state.previewMaximized
          ? ["editorWrap hide","previewWrap maximized","fa fa-compress"]
          : ["editorWrap","previewWrap","fa fa-arrows-alt"];
        return React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            {className:e[0]},
            React.createElement(
              s,
              {icon:e[2],onClick:this.handleEditorMaximize,text:"Editor"}
            ), React.createElement(
              l,
              {markdown:this.state.markdown,onChange:this.handleChange})),
          React.createElement(
            "div",
            {className:"converter"}),
            React.createElement(
              "div",
              {className:e[1]},
              React.createElement(
                s,
                {icon:e[2],onClick:this.handlePreviewMaximize,text:"Previewer"}
              ), React.createElement(
                d,
                {markdown:this.state.markdown})
            )
        )
      }
    }])&&e(a.prototype,o),
    c&&e(a,c),
    Object.defineProperty(a,"prototype",{writable:!1}),m}(),
  
  s=function(e){
    return React.createElement(
      "div",
      {className:"toolbar"},
      React.createElement("i",{className:"fa fa-free-code-camp",title:"no-stack-dub-sack"}),
      e.text,
      React.createElement("i",{className:e.icon,onClick:e.onClick}))
  },
  l=function(e){
    return React.createElement(
      "textarea",
      {id:"editor",onChange:e.onChange,type:"text",value:e.markdown})
  },
  d=function(e){
    return React.createElement(
      "div",
      {dangerouslySetInnerHTML:{__html:marked(e.markdown,{renderer:o})},id:"preview"})
  },
  u="# Welcome to Daniel Markdown Previewer!\n\n## This is a sub-heading...\n### And here are other cool tools:\n\nHere\'s some code, `<div>1 + 1 = 3</div>`.\n\n```\n// this is multi-line code:\n\nfunction renameYourself(firstName, lastName) {\n  if (firstName == '```' && lastName == '```') {\n    return {yourIdentity: firstName+lastName};\n  }\n}\n```\n\nYou are **bold**... whoa!\nOr _italic-an_?\nOh... wait... **_both?_**\n~~Don\'t go crazy~~.\n\nHere\'s also a [links](https://www.linkedin.com/in/danielddoan/), and more..\n> Random Block Quotes!\n\nAnd if you want more? Look at this random tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course, here are the lists.\n  - Some are bulleted.\n     - Then with different indentation levels.\n        - That look like these.\n\n\n1. And here are numbered lists...\n1. Use just 1s if you feeling you are special.\n1. Last but not least, let's not forget this creature:\n\n![Capybara's Chill-in](https://japanhouse.illinois.edu/imager/general/46004/capybara-yuzuyu_bcc9dce125f07f9985fad0e7251f4966.jpeg)\n";

ReactDOM.render(React.createElement(c,null),document.getElementById("app"))}();
