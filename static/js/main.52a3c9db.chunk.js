(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,t,a){e.exports=a.p+"static/media/worklist.d329b711.csv"},167:function(e,t,a){e.exports=a.p+"static/media/PSE_RJ-1.b3f9e8e8.png"},26:function(e,t,a){"use strict";a.d(t,"c",function(){return o}),a.d(t,"d",function(){return i}),a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l});a(18),a(39);var n=a(19),r=a(0),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Valley";Object(r.useEffect)(function(){document.title=e},[e])},i=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(r.useState)(e),a=Object(n.a)(t,2),o=a[0],i=a[1];return{toggle:o,setToggle:Object(r.useCallback)(function(){return i(function(e){return!e})},[])}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(r.useState)(e),a=Object(n.a)(t,2),o=a[0],i=a[1];return[o,Object(r.useCallback)(function(e){return i(e.target.value)},[])]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(r.useState)(e),a=Object(n.a)(t,2),o=a[0],i=a[1];return[o,{setTarget:Object(r.useCallback)(function(e){return i(e.currentTarget)},[]),freeTarget:Object(r.useCallback)(function(){return i(null)},[])}]}},33:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(7),i=a.n(o),c=a(5),l=a(17),s=a(20),u=Object(l.c)(function(e){return{appBar:{backgroundColor:"dark"===e.palette.type?"#1e1e1e":"#blue",opacity:.85,zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:36,color:"white"},hide:{display:"none"},grow:{flexGrow:1},cardLink:{textDecoration:"none",color:"dark"===e.palette.type?"#fbfbfb":"#1e1e1e"}}});var d=function(e){var t=e.toggle,a=e.setToggle,n=u();return r.a.createElement(c.a,{position:"absolute",className:i()(n.appBar,t&&n.appBarShift)},r.a.createElement(c.t,{disableGutters:!t,variant:"dense"},r.a.createElement(c.k,{"aria-label":"Open drawer",onClick:a,className:i()(n.menuButton,t&&n.hide)},r.a.createElement(s.h,null)),"PSE Brazil - 2019"))},m=a(5611),f=a(167),p=a.n(f),g=[[{children:r.a.createElement(s.e,null),label:"Initial Page",route:"/"},{children:r.a.createElement(s.i,null),label:"Schedule",route:"/schedule"},{children:r.a.createElement(function(){return r.a.createElement(c.s,{fontSize:"small"},r.a.createElement("path",{fill:"#000000",d:"M4,4H10V10H4V4M20,4V10H14V4H20M14,15H16V13H14V11H16V13H18V11H20V13H18V15H20V18H18V20H16V18H13V20H11V16H14V15M16,15V18H18V15H16M4,20V14H10V20H4M6,6V8H8V6H6M16,6V8H18V6H16M6,16V18H8V16H6M4,11H6V13H4V11M9,11H13V15H11V13H9V11M11,6H13V10H11V6M2,2V6H0V2A2,2 0 0,1 2,0H6V2H2M22,0A2,2 0 0,1 24,2V6H22V2H18V0H22M2,18V22H6V24H2A2,2 0 0,1 0,22V18H2M22,22V18H24V22A2,2 0 0,1 22,24H18V22H22Z"}))},null),label:"Rate Papers",route:"/rate-papers"},{children:r.a.createElement(function(){return r.a.createElement(c.s,{fontSize:"small"},r.a.createElement("path",{fill:"#000000",d:"M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.58,2.58C8.95,2.2 9.42,2 10,2H14C14.58,2 15.05,2.2 15.42,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M14,6V4H10V6H14Z"}),"    )")},null),label:"Papers",route:"/papers"},{children:r.a.createElement(s.d,null),label:"Favorites",route:"/favorites"},{children:r.a.createElement(s.f,null),label:"Information",route:"/info"}]],h=function(e){var t=e.menus,a=e.toggle;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(m.a,{to:e.route,key:e.label,style:{textDecoration:"none"}},r.a.createElement(c.n,{button:!0,onClick:a},r.a.createElement(c.o,null,e.children),r.a.createElement(c.p,{primary:e.label})))}))},b=Object(l.c)(function(e){return{drawerPaper:{whiteSpace:"nowrap",backgroundColor:"dark"===e.palette.type?"#212121":"#fafafa",opacity:.95,width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:{overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:0},toolbar:{display:"flex",alignItems:"center",justifyContent:"flex-end",height:80},imgPseRj:{height:80}}});var v=function(e){var t=e.toggle,a=e.setToggle,o=b();return r.a.createElement(c.i,{variant:"permanent",classes:{paper:i()(o.drawerPaper,t||o.drawerPaperClose)},open:t},r.a.createElement("div",{className:o.toolbar},r.a.createElement("img",{src:p.a,alt:"PSE",className:o.imgPseRj}),t&&r.a.createElement(c.k,{"aria-label":"Close drawer",onClick:a},r.a.createElement(s.b,null))),g.map(function(e,t){return r.a.createElement(n.Fragment,{key:t},r.a.createElement(c.h,null),r.a.createElement(c.m,{component:"nav"},r.a.createElement(h,{menus:e,toggle:a})))}))},E=Object(l.c)(function(e){return{container:{paddingTop:100,textAlign:"center"},progress:{margin:2*e.spacing.unit,color:"dark"===e.palette.type?"#fbfbfb":"#333333"}}}),j=function(e){var t=e.error,a=E();return r.a.createElement("div",{className:a.container},t?r.a.createElement(c.v,{component:"h6",variant:"h6"},"Opps!"):r.a.createElement(c.f,{className:a.progress,size:100}))},O=a(71),k=a(72),y=a(78),w=a(73),C=a(79),x=a(168),S=a.n(x),V={display:"flex",flexDirection:"column",alignItems:"center"},H=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).state={result:"Point the camera to the QR Code of the work within the marker."},a.validateQrData=function(e){return!!e.includes("https://docs.google.com/forms")},a.handleScan=function(e){e&&a.setState({result:e}),a.validateQrData(e)&&window.open(a.state.result,"_blank")},a}return Object(C.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:V},r.a.createElement(S.a,{delay:300,onError:this.props.handleError,onScan:this.handleScan,style:{width:"100%",maxWidth:400}}),r.a.createElement("p",null,this.state.result))}}]),t}(n.Component);a(47);a.d(t,"a",function(){return d}),a.d(t,"b",function(){return v}),a.d(t,"c",function(){return j}),a.d(t,"d",function(){return H})},47:function(e,t,a){"use strict";a.d(t,"b",function(){return M});var n,r=a(71),o=a(72),i=a(78),c=a(73),l=a(79),s=a(174),u=a(0),d=a.n(u),m=a(69),f=a.n(m),p=a(48),g=a.n(p),h=a(65),b=a.n(h),v=a(31),E=a.n(v),j=a(7),O=a.n(j),k=a(64),y=a.n(k),w=a(66),C=a.n(w),x=a(67),S=a.n(x),V=a(68),H=a.n(V),I=a(170),T=a.n(I),N=a(74),A=a.n(N),L=a(23),R={success:y.a,warning:b.a,error:C.a,info:S.a};var P=Object(L.withStyles)(function(e){return{success:{backgroundColor:T.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:A.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing.unit},message:{display:"flex",alignItems:"center"}}})(function(e){var t=e.classes,a=e.className,n=e.message,r=e.onClose,o=e.variant,i=Object(s.a)(e,["classes","className","message","onClose","variant"]),c=R[o];return d.a.createElement(g.a,Object.assign({className:O()(t[o],a),"aria-describedby":"client-snackbar",message:d.a.createElement("span",{id:"client-snackbar",className:t.message},d.a.createElement(c,{className:O()(t.icon,t.iconVariant)}),n),action:[d.a.createElement(E.a,{key:"close","aria-label":"Close",color:"inherit",className:t.close,onClick:r},d.a.createElement(H.a,{className:t.icon}))]},i))}),D=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,message:"",variant:"success"},a.openSnackbar=function(e){var t=e.message,n=e.variant;a.setState({open:!0,message:t,variant:n})},a.handleSnackbarClose=function(){a.setState({open:!1,message:""})},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){n=this.openSnackbar}},{key:"render",value:function(){var e=d.a.createElement("span",{id:"snackbar-message-id",dangerouslySetInnerHTML:{__html:this.state.message}});return d.a.createElement(f.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},message:e,autoHideDuration:3e3,onClose:this.handleSnackbarClose,open:this.state.open},d.a.createElement(P,{onClose:this.handleClose,variant:this.state.variant,message:e}))}}]),t}(d.a.Component);function M(e){var t=e.message,a=e.variant;n({message:t,variant:a})}t.a=D},5451:function(e,t,a){e.exports=a(5609)},5494:function(e,t,a){},5609:function(e,t,a){"use strict";a.r(t);var n=a(17);Object(n.b)();var r=a(0),o=a.n(r),i=a(22),c=a.n(i),l=a(23),s=a(74),u=a.n(s),d=(a(5494),a(39)),m=a(106),f=a(19),p=a(5614),g=a(5613),h=a(5615),b=a(5612),v=a(5),E=a(173),j=a(166),O=a.n(j),k=a(33),y=a(26),w=a(18),C=a(31),x=a.n(C),S=a(20),V=Object(n.c)(function(e){var t;return{card:{borderRadius:"0",display:"flex",position:"relative",transition:"all 0.2s ease-in-out",height:"100%",backgroundColor:"dark"===e.palette.type?"#333":"#fff"},cardMedia:(t={flexShrink:0,width:0},Object(w.a)(t,e.breakpoints.up("sm"),{width:256}),Object(w.a)(t,"height",350),Object(w.a)(t,"transition","all 0.5s ease-in-out"),Object(w.a)(t,"&:hover",{transform:"scale(1.1)"}),Object(w.a)(t,"cursor","pointer"),t),details:{display:"flex",flexDirection:"column",width:"100%"},summary:{maxHeight:190,margin:0,overflowY:"auto",textAlign:"justify"},content:{flex:"1 0 auto",paddingTop:"5px","&:last-child":{paddingBottom:"5px"}},bold:{fontWeight:700},textTn:{fontSize:"0.8rem"},cardHeader:{fontSize:"0.7rem",padding:e.spacing.unit/2,width:"100%",color:"white",fontWeight:600,textAlign:"center"},smallInfos:{display:"flex",fontSize:"0.8rem"},infosItens:{paddingRight:4*e.spacing.unit},controls:{display:"flex",alignItems:"center",paddingLeft:4*e.spacing.unit,paddingBottom:e.spacing.unit}}});function H(e){console.log("Avaliando!")}function I(e){console.log("Visualizando!")}var T={"controle e instrumenta\xe7\xe3o de processos":"darkred","integra\xe7\xe3o":"orange","modelagem e simula\xe7\xe3o de processos":"darkgreen","aplica\xe7\xf5es industriais de ferramentas de pse":"blue","detec\xe7\xe3o e diagn\xf3stico de falhas":"#A52A2A","s\xedntese e projeto de processos":"\t#800000","integra\xe7\xe3o e intensifica\xe7\xe3o de processos":"darkgrey","tratamento de dados e aprendizado de m\xe1quina":"black","otimiza\xe7\xe3o de processos":"#3cb371","modelagem molecular e projeto de produto":"#2f4f4f","planejamento e programa\xe7\xe3o da produ\xe7\xe3o":"#808000"};var N=o.a.memo(function(e){var t=e.ID,a=e.TITLE,n=e.AUTHOR,r=e.TYPE,i=e.LOCATION,c=e.DATE,l=e.ABSLINK,s=e.FORMLINK,u=e.AXIS,d=e.PAPERLINK,m=e.favorited,f=e.handleFavoriteButton,p=V(),g={ID:t,TITLE:a,AUTHOR:n,TYPE:r,LOCATION:i,DATE:c,ABSLINK:l,FORMLINK:s,AXIS:u,PAPERLINK:d,favorited:m};return o.a.createElement(v.c,{className:p.card},o.a.createElement("div",{className:p.details},o.a.createElement("section",{className:p.cardHeader,style:{backgroundColor:T[u.toLowerCase()]}},u),o.a.createElement(v.e,{className:p.content},o.a.createElement(v.j,{container:!0},o.a.createElement(v.j,{item:!0,xs:10,container:!0,direction:"column"},o.a.createElement(v.d,{target:"_blank",rel:"noreferrer",href:l},o.a.createElement(v.v,{variant:"caption",className:p.bold},a),o.a.createElement(v.v,{variant:"body2"},n),o.a.createElement("section",{className:p.smallInfos},o.a.createElement(v.v,{variant:"caption",color:"textSecondary",className:p.infosItens},"ID: ",t),o.a.createElement(v.v,{variant:"caption",color:"textSecondary",className:p.infosItens},"Type: ",r)),o.a.createElement("section",{className:p.summary},o.a.createElement(v.v,{variant:"caption",color:"textSecondary",className:p.infosItens},"Location: ",i)))),o.a.createElement(v.j,{container:!0,item:!0,xs:2,direction:"column"},o.a.createElement(v.u,{title:"Favorite","aria-label":"Favorite"},o.a.createElement(x.a,{tooltip:"Favorite",style:{padding:2},onClick:function(e){return f(e,g)}},o.a.createElement(S.c,{color:!0===m?"secondary":"inherit"}))),o.a.createElement(v.u,{title:"Rate","aria-label":"Rate"},o.a.createElement(x.a,{tooltip:"Rate",style:{padding:2},target:"_blank",href:s,onClick:H},o.a.createElement(S.g,null))),o.a.createElement(v.u,{title:"Open Abstract","aria-label":"Open Abstract"},o.a.createElement(x.a,{tooltip:"Open Abstract",style:{padding:2},target:"_blank",rel:"noreferrer",href:l,onClick:I},o.a.createElement(S.a,null))))))))},function(e,t){return e.ID===t.ID&&e.favorited===t.favorited}),A=a(30),L={Autor:"AUTHOR",Id:"ID","T\xedtulo":"TITLE",Tipo:"TYPE","\xc1rea":"AXIS"},R=Object(n.c)(function(e){return{content:{backgroundColor:"transparent",boxShadow:"none",marginTop:-3*e.spacing.unit},grow:{flexGrow:1},search:Object(w.a)({position:"relative",height:"90%",borderRadius:e.shape.borderRadius,backgroundColor:Object(A.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(A.fade)(e.palette.common.white,.2)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:8*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",height:"100%",width:"100%"},inputInput:Object(w.a)({paddingLeft:8*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}}),summary:{display:"flex",flexDirection:"row-reverse"}}});var P=function(e){e.toggle,e.setToggle;var t=e.searchValue,a=e.setSearchValue,n=e.setLSortValue,r=R(),i=Object(y.b)(),c=Object(f.a)(i,2),l=c[0],s=c[1],u=s.setTarget,d=s.freeTarget;function m(e){n(L[e.currentTarget.textContent]),d()}return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.j,{container:!0,justify:"center"},o.a.createElement(v.j,{item:!0,xs:6},o.a.createElement(v.k,{"aria-label":"Toggle sorted",onClick:u},o.a.createElement(S.k,{fontSize:"small"}),o.a.createElement(v.v,{variant:"body2"},"Sort by ")),o.a.createElement(v.q,{id:"simple-menu",anchorEl:l,open:Boolean(l),onClose:d},Object.keys(L).map(function(e,t){return o.a.createElement(v.r,{key:t,onClick:m},e)}))),o.a.createElement(v.j,{item:!0,xs:6},o.a.createElement("div",{className:r.grow}),o.a.createElement("div",{className:r.search},o.a.createElement("div",{className:r.searchIcon},o.a.createElement(S.j,null)),o.a.createElement(v.l,{placeholder:"Search for...",value:t,onChange:a,classes:{root:r.inputRoot,input:r.inputInput}})))))},D={xs:12,sm:12,md:12,lg:6,xl:6};var M=function(e){var t=e.favorites,a=e.handleFavoriteButton;return Object(y.c)("PSE-2019 | Favorites"),o.a.createElement(o.a.Fragment,null,o.a.createElement(v.j,{container:!0,spacing:32,style:{marginTop:"5px"},key:"fdsfds"},t.length>0?t.map(function(e,t){return o.a.createElement(v.j,Object.assign({item:!0,key:"".concat(t,"-").concat(e.ID)},D,{style:{padding:"5px 5px"}}),o.a.createElement(N,Object.assign({},e,{favorited:e.favorited,handleFavoriteButton:a})))}):o.a.createElement("p",{style:{width:"100%",textAlign:"center"}},"Nenhum favorito selecionado.")))},z={xs:12,sm:12,md:12,lg:6,xl:6};var B=function(e){var t=e.works,a=(e.setWorks,e.handleFavoriteButton),n=Object(r.useState)(""),i=Object(f.a)(n,2),c=i[0],l=i[1],s=Object(y.d)(),u=s.toggle,d=s.setToggle,m=Object(y.a)(),p=Object(f.a)(m,2),g=p[0],h=p[1];Object(y.c)("Papers | PSE-2019");var b={toggle:u,setToggle:d,searchValue:g,setSearchValue:h,setLSortValue:l},E=null;return t&&(E=function(e,t,a){return e.filter(function(e){var a=e.TITLE,n=e.AUTHOR,r=e.AXIS;return a.toLowerCase().includes(t.toLowerCase())||n.toLowerCase().includes(t.toLowerCase())||r.toLowerCase().includes(t.toLowerCase())}).sort(function(e,t){return e[a]<t[a]?-1:e[a]>t[a]?1:0})}(t,g,c)),o.a.createElement(o.a.Fragment,null,o.a.createElement(P,b),o.a.createElement(r.Suspense,{fallback:o.a.createElement(k.c,null)},o.a.createElement(v.j,{container:!0,spacing:32,justify:"center",style:{marginTop:"5px"}},E?E.map(function(e,t){return o.a.createElement(v.j,Object.assign({item:!0,key:e.ID},z,{style:{padding:"5px 5px"}}),o.a.createElement(N,Object.assign({},e,{favorited:e.favorited,handleFavoriteButton:a})))}):o.a.createElement(k.c,null))))},F=a(47),W=Object(n.c)(function(e){return{root:{height:"100vh",position:"relative",display:"flex"},content:{flexGrow:1,overflowY:"auto",backgroundColor:"dark"===e.palette.type?"#191919":"#ffffff",padding:3*e.spacing.unit},toolbar:{display:"flex",alignItems:"center",justifyContent:"flex-end",height:48}}}),U=[{path:"/",render:Object(p.a)(Object(r.lazy)(function(){return a.e(5).then(a.bind(null,5623))}))},{path:"/rate-papers",render:Object(p.a)(Object(r.lazy)(function(){return a.e(6).then(a.bind(null,5624))}))},{path:"/schedule",render:Object(p.a)(Object(r.lazy)(function(){return a.e(4).then(a.bind(null,5625))}))},{path:"/info",render:Object(p.a)(Object(r.lazy)(function(){return a.e(3).then(a.bind(null,5626))}))},{path:"(.*)",render:Object(p.a)(Object(r.lazy)(function(){return a.e(7).then(a.bind(null,5627))}))}],_=!1,K=function(e){var t=o.a.useState(function(){return _=!0,JSON.parse(localStorage.getItem(e))||[]}),a=Object(f.a)(t,2);return[a[0],a[1]]};var J=function(){var e=W(),t=Object(y.d)(),a=Object(r.useState)(null),n=Object(f.a)(a,2),i=n[0],c=n[1],l=K("favoritesWorksPse2019"),s=Object(f.a)(l,2),u=s[0],p=s[1];function j(e,t){p(function(e){var a=e.findIndex(function(e){return e.ID===t.ID});return a>-1?(e.splice(a,1),e):[].concat(Object(m.a)(e),[Object(d.a)({},t,{favorited:!0})])}),c(function(e){var a=e.map(function(e){return e}),n=a.map(function(e){return e.ID}).indexOf(t.ID);return a[n]=Object(d.a)({},t,{favorited:!t.favorited}),a});var a=t.favorited?"Removido dos favoritos.":"Adicionado ao link de Favoritos";Object(F.b)({message:a,variant:"info"})}return Object(r.useEffect)(function(){localStorage.setItem("favoritesWorksPse2019",JSON.stringify(u))}),_&&i&&(u.length>0&&c(function(e){for(var t=Object(m.a)(e),a=function(a){var n=e.findIndex(function(e){return e.ID===u[a].ID});t[n]=Object(d.a)({},t[n],{favorited:!0})},n=0;n<u.length;n++)a(n);return t}),_=!1),Object(r.useEffect)(function(){Object(E.a)(";",O.a,function(e){return Object.keys(e).map(function(t,a){return e[t]=e[t].trim(),0}),e.favorited=!1,e}).then(function(e){c(e)}).catch(function(e){return console.log(e)})},[]),o.a.createElement(g.a,{basename:"/pse2019"},o.a.createElement("div",{className:e.root},o.a.createElement(v.g,null),o.a.createElement(k.a,t),o.a.createElement(k.b,t),o.a.createElement("main",{className:e.content},o.a.createElement("div",{className:e.toolbar}),o.a.createElement(r.Suspense,{fallback:o.a.createElement(k.c,null)},o.a.createElement(h.a,null,o.a.createElement(b.a,{key:"favorites",exact:!0,path:"/favorites",render:function(e){return o.a.createElement(M,Object.assign({},e,{favorites:u,handleFavoriteButton:j}))}}),o.a.createElement(b.a,{key:"papers",exact:!0,path:"/papers",render:function(e){return o.a.createElement(B,Object.assign({},e,{works:i,setWorks:c,handleFavoriteButton:j}))}}),U.map(function(e,t){return o.a.createElement(b.a,Object.assign({key:t,exact:!0},e))})))),o.a.createElement(F.a,null)))},X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var G=Object(l.createMuiTheme)({typography:{useNextVariants:!0},palette:{type:"light",secondary:u.a}});c.a.render(o.a.createElement(n.a,{theme:G},o.a.createElement(J,null)),document.querySelector("#root")),function(e){if("serviceWorker"in navigator){if(new URL("/pse2019",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/pse2019","/service-worker.js");X?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Y(t,e)})}}()}},[[5451,1,2]]]);
//# sourceMappingURL=main.52a3c9db.chunk.js.map