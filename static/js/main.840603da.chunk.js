(this.webpackJsonpsaysome=this.webpackJsonpsaysome||[]).push([[0],{52:function(e,t,a){e.exports=a(84)},57:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(28),r=a.n(s),c=(a(57),a(5)),i=a(2),l=a(6),m=a(7),u=a(8),d=a(20),p=a(21),h=a(4),_=a(3),f=Object(h.b)((function(e){return{authenticated:e.user.authenticated}}))((function(e){var t=e.component,a=e.authenticated,n=Object(_.a)(e,["component","authenticated"]);return o.a.createElement(p.b,Object.assign({},n,{render:function(e){return!0===a?o.a.createElement(p.a,{to:"/"}):o.a.createElement(t,e)}}))})),b=a(47),E=a.n(b),g=a(13),w=a.n(g),N=function(){return function(e){localStorage.removeItem("FBIdToken"),delete w.a.defaults.headers.common.Authorization,e({type:"SET_UNAUTHENTICATED"})}},v=function(e){var t="Bearer ".concat(e);localStorage.setItem("FBIdToken",e),w.a.defaults.headers.common.Authorization=t},y=function(){return function(e){e({type:"LOADING_USER"}),w.a.get("https://us-central1-mysocial-c77b8.cloudfunctions.net/api/user").then((function(t){e({type:"SET_USER",payload:t.data})})).catch((function(e){console.log(e.response)}))}},O=a(10),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={body:"",errors:""},a.handleAddPost=function(){var e={body:a.state.body};""!==a.state.body?(a.props.addPost(e),a.props.hideAddPostWindow(),a.setState({errors:""})):a.setState({errors:"Pole nie mo\u017ce by\u0107 puste"})},a.handleChange=function(e){var t;a.setState((t={},Object(O.a)(t,e.target.name,e.target.value),Object(O.a)(t,"errors",""),t))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.body.length>130&&this.state.body.length<150&&"Maksymalna d\u0142ugo\u015b\u0107 - 150 znak\xf3w (".concat(150-this.state.body.length,")"),t=150===this.state.body.length&&"Za d\u0142uga wypowied\u017a. Stre\u015b\u0107 to jako\u015b.";return o.a.createElement("div",{onClick:this.props.hideAddPostWindow,className:"add-post-window__container"},o.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"add-post-window__flex"},o.a.createElement("div",{className:"add-post-window__header"},o.a.createElement("div",{className:"saysymbol"},o.a.createElement("span",{className:"saysymbol__text"},"powiedz co\u015b"),o.a.createElement("span",{className:"saysymbol__plus"},"+"))),o.a.createElement("span",{className:"add-post-window__errors"},e,this.state.errors,t),o.a.createElement("div",{className:"add-post-window__form-container"},o.a.createElement("textarea",{maxLength:150,onChange:this.handleChange,name:"body",className:"add-post-window__textarea"}),o.a.createElement("div",{className:"add-post-window__buttons"},o.a.createElement("button",{onClick:this.handleAddPost,className:"add-post-window__button"},"powiedz to!"),o.a.createElement("button",{onClick:this.props.hideAddPostWindow,className:"add-post-window__button"},"nie m\xf3w...")))))}}]),t}(n.Component),S={addPost:function(e){return function(t){t({type:"LOADING_UI"}),w.a.post("https://us-central1-mysocial-c77b8.cloudfunctions.net/api/scream",e).then((function(e){t({type:"ADD_POST",payload:e.data})})).catch((function(e){console.log(e.code)}))}}},C=Object(h.b)(null,S)(j),k=a(27),I=a.n(k),A=a(48),P=a.n(A),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).openDeletionWindow=function(e){e.stopPropagation(),a.props.showQuestion(a.props.screamId)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){I.a.extend(P.a);var e=this.props,t=e.user,a=t.authenticated,n=t.credentials.handle,s=e.post,r=s.userHandle,c=s.createdAt,i=s.body,l=s.userImage,m=s.likeCount,u={backgroundImage:"url(".concat(l,")"),height:"100%",width:"220px",minWidth:"220px",backgroundSize:"cover",backgroundPosition:"center"},d=n===r&&a?o.a.createElement("button",{onClick:this.openDeletionWindow,className:"post__delete-button"},o.a.createElement("i",{className:"fas fa-trash"})):null;return o.a.createElement("div",{className:"main__post"},o.a.createElement("div",{className:"post__photo-content"},o.a.createElement("div",{style:u}),o.a.createElement("div",{className:"post__content"},o.a.createElement("div",{className:"post__header"},o.a.createElement("p",{className:"post__handle"},r),o.a.createElement("span",{className:"post__when"},I()(c).fromNow())),o.a.createElement("p",{className:"post__text"},i),o.a.createElement("h3",{className:"post__likes"},m," os\xf3b lubi to"))),d)}}]),t}(n.Component),T=Object(h.b)((function(e){return{user:e.user}}),{})(U),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={show:!1,screamId:null},a.handleDelete=function(){a.props.deletePost(a.state.screamId),a.hideQuestion()},a.componentDidMount=function(){a.props.getPosts()},a.showQuestion=function(e){a.props.hideAddPostButton(),a.setState({show:!0,screamId:e})},a.hideQuestion=function(){a.props.showAddPostButton(),a.setState({show:!1,screamId:null})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.posts,n=t.loading,s=this.state.show?o.a.createElement("div",{className:"question__container"},o.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"question__wrapper"},o.a.createElement("span",{className:"question__text"},"Na pewno ??"),o.a.createElement("div",{className:"question__buttons"},o.a.createElement("button",{onClick:this.handleDelete,className:"question__button question__button--delete"},"Usu\u0144 wypowied\u017a"),o.a.createElement("button",{onClick:this.hideQuestion,className:"question__button question__button--cancel"},"Anuluj")))):null;return n?o.a.createElement("div",{className:"saysome__flex"},o.a.createElement("div",{className:"saysome__background"},o.a.createElement("span",{className:"saysome__logo"},"SaySome"))):o.a.createElement("div",{onClick:this.hideQuestion,className:"main__container"},s,a.map((function(t){return o.a.createElement(T,{key:t.screamId,screamId:t.screamId,showQuestion:e.showQuestion,post:t})})))}}]),t}(n.Component),D={getPosts:function(){return function(e){e({type:"LOADING_DATA"}),w.a.get("https://us-central1-mysocial-c77b8.cloudfunctions.net/api/screams").then((function(t){e({type:"SET_POSTS",payload:t.data})})).catch((function(){e({type:"SET_POSTS",payload:[]})}))}},deletePost:function(e){return function(t){w.a.delete("https://us-central1-mysocial-c77b8.cloudfunctions.net/api/scream/".concat(e)).then((function(){t({type:"DELETE_POST",payload:e})})).catch((function(e){console.log(e.code)}))}},hideAddPostButton:function(){return function(e){e({type:"HIDE_BUTTON"})}},showAddPostButton:function(){return function(e){e({type:"SHOW_BUTTON"})}}},R=Object(h.b)((function(e){return{posts:e.data.posts,loading:e.data.loading}}),D)(x),L=a(93),W=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={email:"",password:"",errors:{}},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={email:a.state.email,password:a.state.password};a.props.loginUser(t),console.log(a.props)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.UI.loading,t=this.props.UI.errors&&o.a.createElement("div",{className:"form__error-container"},o.a.createElement("p",{className:"form__error"},this.props.UI.errors.general)),a=e?o.a.createElement("div",{className:"button__progress"},o.a.createElement(L.a,{color:"white"})):"Zaloguj";return o.a.createElement("div",{className:"login__flex"},o.a.createElement("div",{className:"login__background"},o.a.createElement("div",{className:"login__form-container"},o.a.createElement("span",{className:"login__title"},"Zaloguj si\u0119"),o.a.createElement("form",{autoComplete:"off",noValidate:!0,onSubmit:this.handleSubmit,className:"login__form"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{onChange:this.handleChange,className:"form__input form__input--email",type:"email",name:"email",id:"email"}),o.a.createElement("label",{htmlFor:"password"},"Has\u0142o"),o.a.createElement("input",{onChange:this.handleChange,className:"form__input form__input--password",type:"password",name:"password",id:"password"}),t,o.a.createElement("button",{className:"form__button"},a)))))}}]),t}(n.Component),F={loginUser:function(e){return function(t){t({type:"LOADING_UI"}),w.a.post("https://us-central1-mysocial-c77b8.cloudfunctions.net/api/login",e).then((function(e){v(e.data.token),t(y()),t({type:"CLEAR_ERRORS"})})).catch((function(e){t({type:"SET_ERRORS",payload:e.response.data})}))}}},z=Object(h.b)((function(e){return{user:e.user,UI:e.UI}}),F)(W),B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={email:"",password:"",confirmPassword:"",handle:"",errors:{}},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={email:a.state.email,password:a.state.password,confirmPassword:a.state.confirmPassword,handle:a.state.handle};a.props.signupUser(t)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.UI.loading?o.a.createElement("div",{className:"button__progress"},o.a.createElement(L.a,{color:"white"})):"Zarejestruj",t=this.props.UI.errors&&this.props.UI.errors.confirmPassword?o.a.createElement("div",{className:"form__error-container"},o.a.createElement("p",{className:"form__error"},this.props.UI.errors.confirmPassword)):this.props.UI.errors&&this.props.UI.errors.handle?o.a.createElement("div",{className:"form__error-container"},o.a.createElement("p",{className:"form__error"},this.props.UI.errors.handle)):this.props.UI.errors&&this.props.UI.errors.email?o.a.createElement("div",{className:"form__error-container"},o.a.createElement("p",{className:"form__error"},this.props.UI.errors.email)):0!==this.state.password.length&&this.state.password.length<6&&o.a.createElement("div",{className:"form__error-container"},o.a.createElement("p",{className:"form__error"},"Has\u0142o musi mie\u0107 conajmniej 6 znak\xf3w"));return o.a.createElement("div",{className:"signup__flex"},o.a.createElement("div",{className:"signup__background"},o.a.createElement("div",{className:"signup__form-container"},o.a.createElement("span",{className:"signup__title"},"Zarejestruj si\u0119"),o.a.createElement("form",{autoComplete:"off",onSubmit:this.handleSubmit,className:"signup__form"},o.a.createElement("label",{htmlFor:"handle"},"Nazwa u\u017cytkownika"),o.a.createElement("input",{onChange:this.handleChange,className:"signup-form__input signup-form__input--handle",type:"text",name:"handle",id:"handle"}),o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{onChange:this.handleChange,className:"signup-form__input signup-form__input--email",type:"email",name:"email",id:"email"}),o.a.createElement("label",{htmlFor:"password"},"Has\u0142o"),o.a.createElement("input",{onChange:this.handleChange,className:"signup-form__input signup-form__input--password",type:"password",name:"password",id:"password"}),o.a.createElement("label",{htmlFor:"confirmPassword"},"Potwierd\u017a has\u0142o"),o.a.createElement("input",{onChange:this.handleChange,className:"signup-form__input signup-form__input--confirm-password",type:"password",name:"confirmPassword",id:"confirmPassword"}),t,o.a.createElement("button",{className:"form__button"},e)))))}}]),t}(n.Component),H={signupUser:function(e){return function(t){t({type:"LOADING_UI"}),w.a.post("https://us-central1-mysocial-c77b8.cloudfunctions.net/api/signup",e).then((function(e){v(e.data.token),t(y()),t({type:"CLEAR_ERRORS"})})).catch((function(e){t({type:"SET_ERRORS",payload:e.response.data})}))}}},G=Object(h.b)((function(e){return{user:e.user,UI:e.UI}}),H)(B),q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={bio:"",website:"",location:""},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={bio:a.state.bio,location:a.state.location,website:a.state.website};a.props.editUserDetails(t),a.props.hideEditProfile()},a.mapUserDataToState=function(e){a.setState({bio:e.bio?e.bio:"",website:e.website?e.website:"",location:e.location?e.location:""})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.user.credentials;this.mapUserDataToState(e)}},{key:"render",value:function(){return o.a.createElement("div",{onClick:this.props.hideEditProfile,className:"edit__container"},o.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"edit__card"},o.a.createElement("div",{className:"edit__form__wrapper"},o.a.createElement("span",{className:"edit__header"},"Edytuj dane"),o.a.createElement("form",{autoComplete:"off",className:"edit__form"},o.a.createElement("label",{className:"edit__label",htmlFor:"bio"},"Opis"),o.a.createElement("input",{onChange:this.handleChange,value:this.state.bio,className:"edit__form-input",type:"text",id:"bio",name:"bio"}),o.a.createElement("label",{className:"edit__label",htmlFor:"location"},"Lokalizacja"),o.a.createElement("input",{onChange:this.handleChange,value:this.state.location,className:"edit__form-input",type:"text",id:"location",name:"location"}),o.a.createElement("label",{className:"edit__label",htmlFor:"website"},"Strona internetowa"),o.a.createElement("input",{onChange:this.handleChange,value:this.state.website,className:"edit__form-input",type:"text",id:"website",name:"website"}),o.a.createElement("div",{className:"edit__buttons-container"},o.a.createElement("button",{onClick:this.handleSubmit,className:"edit__form-button"},"Zapisz"),o.a.createElement("button",{onClick:this.props.hideEditProfile,className:"edit__form-button"},"Anuluj"))))))}}]),t}(n.Component),Q={editUserDetails:function(e){return function(t){t({type:"LOADING_USER"}),w.a.post("https://us-central1-mysocial-c77b8.cloudfunctions.net/api/user",e).then((function(){t(y())})).catch((function(e){return console.log(e)}))}}},M=Object(h.b)((function(e){return{user:e.user}}),Q)(q),Z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={show:!1},a.componentDidMount=function(){a.props.getUserData()},a.showEditProfile=function(){a.setState({show:!0})},a.hideEditProfile=function(){a.setState({show:!1})},a.handleImageChange=function(e){var t=e.target.files[0],n=new FormData;t&&n.append("image",t,t.name),a.props.uploadImage(n)},a.handleUploadImage=function(){document.getElementById("imageInput").click()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.user,t=e.loading,a=e.authenticated,n=e.credentials,s=n.handle,r=n.imageUrl,c=n.bio,i=n.website,l=n.location,m=n.createdAt,u=n.email,d={display:"flex",justifyContent:"flex-end",alignItems:"flex-end",margin:"12px 0 48px 0",backgroundImage:"url(".concat(r,")"),height:"260px",width:"300px",borderRadius:"2px",backgroundSize:"cover",backgroundPosition:"center",boxShadow:"10px 10px 14px 1px rgba(00,00,00,0.1)"},p=t?o.a.createElement("div",{className:"progress__flex"},o.a.createElement(L.a,{color:"#0E1C36"})):null,h=this.state.show?o.a.createElement(M,{hideEditProfile:this.hideEditProfile}):null,_=a?o.a.createElement("div",{className:"profile-page__container"},o.a.createElement("div",{className:"profile-page__image",style:d},p,o.a.createElement("input",{type:"file",id:"imageInput",hidden:"hidden",onChange:this.handleImageChange}),o.a.createElement("button",{onClick:this.handleUploadImage,className:"profile-page__image-button"},o.a.createElement("i",{className:"fas fa-user-edit"}))),o.a.createElement("div",{className:"profile-page__handle-container"},o.a.createElement("span",{className:"profile-page__handle"},s),o.a.createElement("span",{className:"profile-page__email"},u)),o.a.createElement("button",{onClick:this.showEditProfile,className:"profile-page__edit-profile"},o.a.createElement("i",{className:"fas fa-pen-fancy"}),"Edytuj dane"),c?o.a.createElement("span",{className:"profile-page__bio"},c):o.a.createElement("span",{className:"profile-page__bio"},"brak opisu ..."),o.a.createElement("hr",null),o.a.createElement("div",{className:"profile-page__additional-data"},l&&o.a.createElement("span",{className:"profile-page__location"},o.a.createElement("i",{className:"fas icon fa-map-marker-alt"}),l),i&&o.a.createElement("span",{className:"profile-page__website"},o.a.createElement("a",{className:"profile-page__website-link",target:"_blank",rel:"noopener noreferrer",href:i},o.a.createElement("i",{className:"fas icon fa-globe-europe"}),i))),o.a.createElement("span",{className:"profile-page__createdAt"},"konto od: ",I()(m).format("MMM YYYY"))):o.a.createElement("div",{className:"profile-page__not-logged-in"},"Nie jeste\u015b zalogowany");return o.a.createElement("div",{className:"profile-page__body"},h,o.a.createElement("div",{className:"profile-page__flex"},o.a.createElement("div",{className:"profile-page__background"},_)))}}]),t}(n.Component),Y={getUserData:y,uploadImage:function(e){return function(t){t({type:"LOADING_USER"}),w.a.post("https://us-central1-mysocial-c77b8.cloudfunctions.net/api/user/image",e).then((function(e){t(y())})).catch((function(e){return console.log(e)}))}}},J=Object(h.b)((function(e){return{user:e.user}}),Y)(Z),V=(a(82),a(83),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={show:!1},a.toggleOptions=function(e){e.stopPropagation(),a.setState({show:!a.state.show})},a.logout=function(){a.props.logoutUser(),a.setState({show:!1})},a.hideOptions=function(){a.setState({show:!1})},a.clearErrors=function(){a.props.clearErrors()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.user,t=e.authenticated,a=e.loading,n=e.credentials,s=n.imageUrl,r=n.handle,c={marginTop:"0",backgroundImage:"url(".concat(s,")"),height:"50px",width:"50px",maxWidth:"60px",borderRadius:"50%",backgroundSize:"cover",backgroundPosition:"center"},i=this.state.show&&o.a.createElement("div",{className:"options__container"},o.a.createElement("div",{className:"options"},o.a.createElement("ul",{className:"options__items"},o.a.createElement("li",{className:"options__item"},o.a.createElement(d.b,{to:"/profil",onClick:this.hideOptions},o.a.createElement("button",{className:"options__button"},"PROFIL"))),o.a.createElement("li",{className:"options__item"},o.a.createElement("button",{onClick:this.logout,className:"options__button"},o.a.createElement("span",{className:"logout"},"WYLOGUJ")))))),l=a?o.a.createElement(L.a,{color:"#0E1C36",className:"photo__loading"}):t?o.a.createElement(o.a.Fragment,null,this.props.data.button&&o.a.createElement("button",{onClick:this.props.showAddPostWindow,className:"navbar__add-post"},o.a.createElement("span",{className:"add-post add-post__text"},"powiedz co\u015b"),o.a.createElement("span",{className:"add-post add-post__plus"},"+")),o.a.createElement("button",{onClick:this.toggleOptions,className:"profile__button"},o.a.createElement("div",{className:"navbar__profile"},o.a.createElement("div",{className:"profile__picture",style:c}),o.a.createElement("span",{className:"profile__username"},r)))):o.a.createElement("div",{className:"navbar__buttons-area"},o.a.createElement(d.b,{className:"navbar__button navbar__button--signup",to:"/rejestracja"},o.a.createElement("span",{onClick:this.clearErrors},"rejestracja")),o.a.createElement(d.b,{className:"navbar__button navbar__button--login",to:"/logowanie"},o.a.createElement("span",{onClick:this.clearErrors},"logowanie")));return o.a.createElement("div",{onClick:this.hideOptions,className:"navbar"},o.a.createElement("div",{className:"profile__options-container"},o.a.createElement("div",{className:"navbar__container"},o.a.createElement(d.b,{className:"navbar__brand",to:"/"},o.a.createElement("span",null,"SaySome")),l),i))}}]),t}(n.Component)),K={logoutUser:N,clearErrors:function(){return function(e){e({type:"CLEAR_ERRORS"})}}},X=Object(h.b)((function(e){return{user:e.user,data:e.data}}),K)(V),$=a(24),ee=a(50),te=a(30),ae=a(11),ne={posts:[],post:{},loading:!1,button:!0,options:!0},oe={loading:!1,authenticated:!1,credentials:{},errors:{}},se={loading:!1,errors:null},re=[ee.a],ce=Object($.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_DATA":return Object(ae.a)({},e,{loading:!0});case"ADD_POST":return Object(ae.a)({},e,{posts:[t.payload].concat(Object(te.a)(e.posts))});case"SET_POSTS":return Object(ae.a)({},e,{posts:t.payload,loading:!1});case"DELETE_POST":var a=e.posts.filter((function(e){return e.screamId!==t.payload}));return Object(ae.a)({},e,{posts:a});case"HIDE_BUTTON":return Object(ae.a)({},e,{button:!1});case"SHOW_BUTTON":return Object(ae.a)({},e,{button:!0});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_USER":return Object(ae.a)({},e,{loading:!0});case"SET_USER":return Object(ae.a)({},e,{loading:!1,authenticated:!0},t.payload);case"SET_AUTHENTICATED":return Object(ae.a)({},e,{authenticated:!0});case"SET_UNAUTHENTICATED":return Object(ae.a)({},e,{authenticated:!1});default:return e}},UI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_UI":return Object(ae.a)({},e,{loading:!0});case"SET_ERRORS":return Object(ae.a)({},e,{loading:!1,errors:t.payload});case"CLEAR_ERRORS":return Object(ae.a)({},e,{loading:!1,errors:null});default:return e}}}),ie=Object($.e)(ce,{},Object($.d)($.a.apply(void 0,re))),le=localStorage.FBIdToken;le&&(1e3*E()(le).exp<Date.now()?ie.dispatch(N()):(ie.dispatch({type:"SET_AUTHENTICATED"}),w.a.defaults.headers.common.Authorization="Bearer ".concat(le),ie.dispatch(y())));var me=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={show:!1},a.showAddPostWindow=function(){a.setState({show:!0})},a.hideAddPostWindow=function(){a.setState({show:!1})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.show?o.a.createElement(C,{hideAddPostWindow:this.hideAddPostWindow}):null;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{store:ie},o.a.createElement(d.a,null,o.a.createElement(X,{showAddPostWindow:this.showAddPostWindow}),e,o.a.createElement(p.d,null,o.a.createElement(p.b,{exact:!0,path:"/",component:R}),o.a.createElement(f,{exact:!0,path:"/logowanie",component:z}),o.a.createElement(f,{exact:!0,path:"/rejestracja",component:G}),o.a.createElement(p.b,{exact:!0,path:"/profil",component:J})))))}}]),t}(n.Component);r.a.render(o.a.createElement(me,null),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.840603da.chunk.js.map