(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{16:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),s=a.n(c),o=(a(15),a(16),a(3)),i=a(4),h=a(6),u=a(5),l=a(8),m=(a(17),a(1)),b=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchName:""},e.handleSearchChange=function(t){e.setState({searchName:t.currentTarget.value.toLowerCase()})},e.handleFormSubmit=function(t){if(t.preventDefault()," "===e.state.searchName.trim())return l.b.error("Enter correct request!");e.props.onSubmit(e.state.searchName),e.formReset()},e.formReset=function(){e.setState({searchName:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{onSubmit:this.handleFormSubmit,className:"SearchForm",children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleSearchChange})]})})})}}]),a}(r.Component),j=a(10),p=a.n(j),d=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={hits:null,loader:!1},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.searchName!==this.props.searchName&&(this.setState({loader:!0}),fetch("https://pixabay.com/api/?q=".concat(this.props.searchName,"&page=1&key=21902781-05f70a6abac1a4120ac7c9ed1&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){var t=e.hits;return a.setState({hits:t})})).finally((function(){return a.setState({loader:!1})})))}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[this.state.loader&&Object(m.jsx)(p.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}),Object(m.jsx)("ul",{className:"ImageGallery",children:this.state.search&&Object(m.jsx)("div",{children:this.state.hits.id})})]})}}]),a}(r.Component),f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchName:" "},e.formSubmit=function(t){e.setState({searchName:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(l.a,{position:"top-center",autoClose:2e3,newestOnTop:!1,closeOnClick:!0,rtl:!1}),Object(m.jsx)(b,{onSubmit:this.formSubmit}),Object(m.jsx)(d,{searchName:this.state.searchName})]})}}]),a}(r.Component);s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b81cbec9.chunk.js.map