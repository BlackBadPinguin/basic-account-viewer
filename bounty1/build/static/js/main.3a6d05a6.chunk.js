(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(6),s=c.n(i),o=c(14),r=c(15),u=c(23),l=c(22),d=c(58),j=c(59),f=c(16),h=c.n(f),p=(c(35),c(36),c(2)),b=function(e){Object(u.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(o.a)(this,c),(a=t.call(this,e)).state={value:null,error:null,isLoaded:!1,isLoaded2:!1,balances:[],account:[]},a}return Object(r.a)(c,[{key:"Albedo",value:function(){var e=this;h.a.publicKey({}).then((function(t){t.intent;var c=t.pubkey;t.signature,t.signed_message;e.setState((function(t){return fetch("https://horizon.stellar.org/accounts/"+c).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,balances:t.balances})}),(function(t){e.setState({isLoaded:!0,error:t})})),fetch("https://horizon.stellar.org/accounts/"+c+"/payments?cursor=&limit=1&order=asc").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded2:!0,account:t._embedded.records})}),(function(t){e.setState({isLoaded2:!0,error:t})})),{value:c}}))}))}},{key:"render",value:function(){var e=this.state,t=e.value,c=e.balances,a=e.account;return Object(p.jsxs)("div",{class:"center",children:[Object(p.jsxs)(d.a,{style:{width:"207px",height:"40px"},variant:"contained",color:"default",onClick:this.Albedo.bind(this),children:["Login With ",Object(p.jsx)(j.a,{style:{width:"55px"},src:"data:image/png;base64,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"})]}),Object(p.jsxs)("p",{children:["Public-Key: ",t]}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("p",{children:"Balances:"}),c.map((function(e){return Object(p.jsxs)("li",{children:[e.balance," ",e.asset_code]},e.asset_code)})),Object(p.jsx)("p",{children:"When there is no currency behind the balance, its native XLM."})]}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("p",{children:"Account was created at:"}),a.map((function(e){return Object(p.jsx)("li",{children:e.created_at},e.created_at)}))]}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("p",{children:"Account was created by:"}),a.map((function(e){return Object(p.jsx)("li",{children:e.source_account},e.source_account)}))]})]})}}]),c}(a.Component);s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.3a6d05a6.chunk.js.map