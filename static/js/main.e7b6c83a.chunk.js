(this["webpackJsonpsd-0x-project-frontend-online-store"]=this["webpackJsonpsd-0x-project-frontend-online-store"]||[]).push([[0],{23:function(t,e,a){t.exports=a(38)},28:function(t,e,a){},38:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),i=(a(28),a(14)),u=a(1),s=a(17),l=a(3),d=a.n(l),p=a(11),m=a(7),h=a(8),f=a(10),v=a(9),g=function(t){Object(f.a)(a,t);var e=Object(v.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(i.b,{to:"/cart","data-testid":"shopping-cart-button"},"Carrinho")}}]),a}(r.a.Component),b=a(12),y=function(t){Object(f.a)(a,t);var e=Object(v.a)(a);function a(){var t;return Object(m.a)(this,a),(t=e.call(this)).addItem=t.addItem.bind(Object(b.a)(t)),t}return Object(h.a)(a,[{key:"addItem",value:function(){var t=this.props.product;t.quantity=t.quantity||1;var e=localStorage.cartItems,a=[];e&&(a=JSON.parse(e)),a.push(t),localStorage.cartItems=JSON.stringify(a)}},{key:"render",value:function(){var t=this.props.dataTestId;return r.a.createElement("input",{type:"button",value:"Adicionar item no carrinho","data-testid":t,onClick:this.addItem})}}]),a}(r.a.Component);y.defaultProps={product:{quantity:1},dataTestId:""};var j=y;function E(){return O.apply(this,arguments)}function O(){return(O=Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.mercadolibre.com/sites/MLB/categories");case 2:return t.abrupt("return",t.sent.json());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t,e){return x.apply(this,arguments)}function x(){return(x=Object(p.a)(d.a.mark((function t(e,a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.mercadolibre.com/sites/MLB/search?category=".concat(e,"&q=").concat(a),t.next=3,fetch(n);case 3:return t.abrupt("return",t.sent.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t){return w.apply(this,arguments)}function w(){return(w=Object(p.a)(d.a.mark((function t(e){var a,n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://api.mercadolibre.com/items/".concat(e),t.next=3,fetch(a);case 3:return t.next=5,t.sent.json();case 5:return n=t.sent,t.next=8,fetch("".concat(a,"/description"));case 8:return t.next=10,t.sent.json();case 10:return r=t.sent.plain_text,n.itemDescription=r,t.abrupt("return",n);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var S=function(t){Object(f.a)(a,t);var e=Object(v.a)(a);function a(t){var n;return Object(m.a)(this,a),(n=e.call(this,t)).pegarCategorias=Object(p.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:e=t.sent,n.setState({categories:e,isLoading:!1});case 4:case"end":return t.stop()}}),t)}))),n.getProduct=Object(p.a)(d.a.mark((function t(){var e,a,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.setState({isLoadingProducts:!0}),e=n.state,a=e.inputSearch,r=e.category,t.next=4,k(r,a);case 4:c=t.sent,n.setState({products:c.results,isLoadingProducts:!1});case 6:case"end":return t.stop()}}),t)}))),n.handleChange=function(t){t.preventDefault(),n.setState(Object(s.a)({},t.target.name,t.target.value))},n.handleClick=function(){var t=Object(p.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.setState(Object(s.a)({},e.target.name,e.target.id)),t.next=3,e.preventDefault();case 3:n.getProduct();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.renderProducts=function(){var t=n.state.products;return r.a.createElement("div",null,t.map((function(t){var e=t.id,a=t.title,n=t.thumbnail,c=t.price,o=t.category_id;return r.a.createElement("div",{key:e},r.a.createElement(i.b,{to:"/product/".concat(o,"/").concat(a.replace("%","").replace("/",""),"/").concat(e),"data-testid":"product-detail-link"},r.a.createElement("div",{"data-testid":"product"},r.a.createElement("img",{src:n,alt:"imagem do produto"}),r.a.createElement("p",null,a),r.a.createElement("p",null,"R$:".concat(c)))),r.a.createElement(j,{product:t,dataTestId:"product-add-to-cart"}))})))},n.state={categories:[],category:"",products:[],isLoading:!0,isLoadingProducts:!1,inputSearch:""},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.pegarCategorias()}},{key:"renderCategories",value:function(){var t=this,e=this.state.categories;return r.a.createElement("div",null,e.map((function(e){return r.a.createElement("input",{key:e.id,id:e.id,"data-testid":"category",name:"category",onClick:t.handleClick,value:e.name,type:"button"})})))}},{key:"render",value:function(){var t=this.state,e=t.isLoading,a=t.inputSearch,n=t.isLoadingProducts;return r.a.createElement("div",null,r.a.createElement("p",{"data-testid":"home-initial-message"},"Digite algum termo de pesquisa ou escolha uma categoria."),r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Pesquisa Aqui",name:"inputSearch",value:a,onChange:this.handleChange,"data-testid":"query-input"}),r.a.createElement("button",{type:"button","data-testid":"query-button",onClick:this.getProduct},"Pesquisar")),r.a.createElement(g,null),e?null:this.renderCategories(),n?null:this.renderProducts())}}]),a}(r.a.Component),I=function(t){Object(f.a)(a,t);var e=Object(v.a)(a);function a(){var t;return Object(m.a)(this,a),(t=e.call(this)).state={cart:[]},t.getCartItems=t.getCartItems.bind(Object(b.a)(t)),t.productCard=t.productCard.bind(Object(b.a)(t)),t}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getCartItems()}},{key:"getCartItems",value:function(){var t=localStorage.cartItems;t&&this.setState({cart:JSON.parse(t)})}},{key:"productCard",value:function(t,e){var a=t.title,n=t.quantity;return r.a.createElement("div",{key:"".concat(a,"-").concat(e)},r.a.createElement("p",{"data-testid":"shopping-cart-product-name"},a),r.a.createElement("span",null,"Quantidade: "),r.a.createElement("span",{"data-testid":"shopping-cart-product-quantity"},n))}},{key:"render",value:function(){var t=this,e=this.state.cart;return r.a.createElement("section",null,0===e.length?r.a.createElement("p",{"data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio"):e.map((function(e,a){return t.productCard(e,a)})))}}]),a}(r.a.Component),P=function(t){Object(f.a)(a,t);var e=Object(v.a)(a);function a(t){var n;return Object(m.a)(this,a),(n=e.call(this,t)).state={product:{}},n.getProduct=n.getProduct.bind(Object(b.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getProduct()}},{key:"getProduct",value:function(){var t=Object(p.a)(d.a.mark((function t(){var e,a,n,r,c,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params,a=e.category,n=e.title,r=e.id,t.next=3,k(a,n);case 3:if(c=t.sent.results[0],o=C(r),c.id!==r){t.next=7;break}return t.abrupt("return",this.setState({product:c}));case 7:return t.t0=this,t.next=10,o;case 10:t.t1=t.sent,t.t2={product:t.t1},t.t0.setState.call(t.t0,t.t2);case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.product,e=t.title,a=t.price,n=t.thumbnail,c=t.itemDescription;return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("p",{"data-testid":"product-detail-name"},e),r.a.createElement("p",null,a),r.a.createElement("img",{src:n,alt:e}),c?r.a.createElement("p",null,c):null,r.a.createElement(j,{product:t,dataTestId:"product-detail-add-to-cart"}))}}]),a}(r.a.Component);var q=function(){return r.a.createElement(i.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:S}),r.a.createElement(u.a,{exact:!0,path:"/cart",component:I}),r.a.createElement(u.a,{exact:!0,path:"/product/:category/:title/:id",component:P})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.e7b6c83a.chunk.js.map