(this["webpackJsonpdnd-attack-comparison"]=this["webpackJsonpdnd-attack-comparison"]||[]).push([[0],{191:function(t,e,a){},192:function(t,e,a){"use strict";a.r(e);var r=a(0),c=a.n(r),n=a(8),l=a.n(n),o=(a(93),a(17)),i=a(30),s=a(31),d=a(38),m=a(37),u=a(200),h=a(201),f=a(198),k=a(81),A=a(204),E=a(202),g=a(62),p=a(13),v=a(197),b=a(203),D=a(199),M=new RegExp(/^(\d{1,2}d\d{1,2})(\+\d{1,2}d\d{1,2})*([-+]\d{1,2})*$/);var C=function(t){Object(d.a)(a,t);var e=Object(m.a)(a);function a(t){return Object(i.a)(this,a),e.call(this,t)}return Object(s.a)(a,[{key:"render",value:function(){var t=this;return c.a.createElement(v.a,{className:"add-attack"},c.a.createElement("div",{className:"add-attack-button-div text-center"},c.a.createElement("button",{className:"btn btn-outline-dark add-attack-button",onClick:function(){t.props.setShowAttackModal(!0)}},c.a.createElement("h5",null,"+ Add Attack +")),c.a.createElement("br",null)),c.a.createElement(N,{showAttackModal:this.props.showAttackModal,hideAttackModal:function(){t.props.setShowAttackModal(!1)},char:this.props.char,handleAddAttack:this.props.handleAddAttack,attackToEdit:this.props.attackToEdit,setAttackToEdit:this.props.setAttackToEdit,handleEditAttack:this.props.handleEditAttack}))}}]),a}(c.a.Component),N=function(t){Object(d.a)(a,t);var e=Object(m.a)(a);function a(t){var r;return Object(i.a)(this,a),(r=e.call(this,t)).updateDamage=function(t,e){var a,c=JSON.parse(JSON.stringify(r.state.errors)),n=e.replace(/ /g,"");n.length>0&&!Boolean(n.match(M))?c.includes(t)||c.push(t):c=c.filter((function(e){return e!==t})),r.setState((a={},Object(g.a)(a,t,e),Object(g.a)(a,"errors",c),a))},r.clearForm=function(){r.setState({attackId:null,attackName:"",firstAttackModifier:"",firstAttackDamage:"",secondAttackModifier:"",secondAttackDamage:"",thirdAttackModifier:"",thirdAttackDamage:"",fourthAttackModifier:"",fourthAttackDamage:"",errors:[]},r.props.setAttackToEdit(null))},r.state={attackName:"",firstAttackModifier:"",firstAttackDamage:"",secondAttackModifier:"",secondAttackDamage:"",thirdAttackModifier:"",thirdAttackDamage:"",fourthAttackModifier:"",fourthAttackDamage:"",errors:[]},r}return Object(s.a)(a,[{key:"render",value:function(){var t=this;return c.a.createElement(u.a,{show:this.props.showAttackModal,centered:!0,size:"lg",onHide:function(){t.clearForm(),t.props.hideAttackModal()}},c.a.createElement(u.a.Header,{closeButton:!0},c.a.createElement(u.a.Title,null,"Add Attack - ",this.props.char.name)),c.a.createElement("br",null),c.a.createElement(v.a,null,c.a.createElement(h.a,null,c.a.createElement(h.a.Group,{controlId:"CharacterName",as:v.a},c.a.createElement(f.a,null,c.a.createElement(h.a.Label,{as:k.a},"Attack Name"),c.a.createElement(k.a,null,c.a.createElement(h.a.Control,{type:"text",name:"AttackName",required:!0,autoComplete:"off",placeholder:"Attack Name",value:this.state.attackName,onChange:function(e){t.setState({attackName:e.target.value})}}))),c.a.createElement(f.a,null,"First Attack"),c.a.createElement(f.a,null,c.a.createElement(h.a.Label,{as:w},"Attack Modifier"),c.a.createElement(w,null,c.a.createElement(h.a.Control,{type:"number",name:"FirstAttackModifier",autoComplete:"off",placeholder:"Ex: 3",value:this.state.firstAttackModifier,onChange:function(e){t.setState({firstAttackModifier:e.target.value})}})),c.a.createElement(h.a.Label,{as:w},"Damage Dice"),c.a.createElement(w,null,c.a.createElement(h.a.Control,{type:"text",name:"FirstAttackDamage",className:this.state.errors.includes("firstAttackDamage")?"is-invalid":"",autoComplete:"off",placeholder:"Ex: 2d8 + 1d4 + 5",value:this.state.firstAttackDamage,onChange:function(e){t.updateDamage("firstAttackDamage",e.target.value)}}))),c.a.createElement(f.a,null,"Second Attack"),c.a.createElement(f.a,null,c.a.createElement(h.a.Label,{as:w},"Attack Modifier"),c.a.createElement(w,null,c.a.createElement(h.a.Control,{type:"number",name:"SecondAttackModifier",autoComplete:"off",placeholder:"Ex: 3",value:this.state.secondAttackModifier,onChange:function(e){t.setState({secondAttackModifier:e.target.value})}})),c.a.createElement(h.a.Label,{as:w},"Damage Dice"),c.a.createElement(w,null,c.a.createElement(h.a.Control,{type:"text",name:"SecondAttackDamage",className:this.state.errors.includes("secondAttackDamage")?"is-invalid":"",autoComplete:"off",placeholder:"Ex: 2d8 + 1d4 + 5",value:this.state.secondAttackDamage,onChange:function(e){t.updateDamage("secondAttackDamage",e.target.value)}}))),c.a.createElement(f.a,null,"Third Attack"),c.a.createElement(f.a,null,c.a.createElement(h.a.Label,{as:w},"Attack Modifier"),c.a.createElement(w,null,c.a.createElement(h.a.Control,{type:"number",name:"ThirdAttackModifier",autoComplete:"off",placeholder:"Ex: 3",value:this.state.thirdAttackModifier,onChange:function(e){t.setState({thirdAttackModifier:e.target.value})}})),c.a.createElement(h.a.Label,{as:w},"Damage Dice"),c.a.createElement(w,null,c.a.createElement(h.a.Control,{type:"text",name:"ThirdAttackDamage",className:this.state.errors.includes("thirdAttackDamage")?"is-invalid":"",autoComplete:"off",placeholder:"Ex: 2d8 + 1d4 + 5",value:this.state.thirdAttackDamage,onChange:function(e){t.updateDamage("thirdAttackDamage",e.target.value)}}))),c.a.createElement(f.a,null,"Fourth Attack"),c.a.createElement(f.a,null,c.a.createElement(h.a.Label,{as:w},"Attack Modifier"),c.a.createElement(w,null,c.a.createElement(h.a.Control,{type:"number",name:"fourthAttackModifier",autoComplete:"off",placeholder:"Ex: 3",value:this.state.fourthAttackModifier,onChange:function(e){t.setState({fourthAttackModifier:e.target.value})}})),c.a.createElement(h.a.Label,{as:w},"Damage Dice"),c.a.createElement(w,null,c.a.createElement(h.a.Control,{type:"text",name:"FourthAttackDamage",className:this.state.errors.includes("fourthAttackDamage")?"is-invalid":"",autoComplete:"off",placeholder:"Ex: 2d8 + 1d4 + 5",value:this.state.fourthAttackDamage,onChange:function(e){t.updateDamage("fourthAttackDamage",e.target.value)}}))),c.a.createElement("br",null),c.a.createElement(f.a,{className:"justify-conent-md-center"},c.a.createElement(k.a,{className:"text-center"},0===this.state.errors.length?c.a.createElement("button",{className:"btn btn-outline-dark",onClick:function(e){e.preventDefault();var a=t.state,r=a.attackName,c=a.firstAttackModifier,n=a.firstAttackDamage,l=a.secondAttackModifier,o=a.secondAttackDamage,i=a.thirdAttackModifier,s=a.thirdAttackDamage,d=a.fourthAttackModifier,m=a.fourthAttackDamage;e.formData={charId:t.props.char.id,attackName:r,firstAttackModifier:c,firstAttackDamage:n,secondAttackModifier:l,secondAttackDamage:o,thirdAttackModifier:i,thirdAttackDamage:s,fourthAttackModifier:d,fourthAttackDamage:m},t.state.attackId?(e.formData.attackId=t.state.attackId,t.props.handleEditAttack(e)):t.props.handleAddAttack(e),t.clearForm(),t.props.hideAttackModal()}},this.state.attackId?"Edit":"Add"," Attack"):null,c.a.createElement("br",null)))))))}},{key:"componentDidUpdate",value:function(t,e,a){var r=Object.assign({},t.attackToEdit),c=Object.assign({},this.props.attackToEdit);JSON.stringify(r)!==JSON.stringify(c)&&this.setState({attackId:c.attackId,attackName:c.attackName,firstAttackModifier:c.firstAttackModifier,firstAttackDamage:c.firstAttackDamage,secondAttackModifier:c.secondAttackModifier,secondAttackDamage:c.secondAttackDamage,thirdAttackModifier:c.thirdAttackModifier,thirdAttackDamage:c.thirdAttackDamage,fourthAttackModifier:c.fourthAttackModifier,fourthAttackDamage:c.fourthAttackDamage})}}]),a}(c.a.Component);function w(t){return c.a.createElement(k.a,{sm:5,md:3,lg:3},t.children)}function y(t){var e=Object(r.useState)(!1),a=Object(p.a)(e,2),n=a[0],l=a[1],o=Object(r.useState)(!1),i=Object(p.a)(o,2),s=i[0],d=i[1],m=Object(r.useRef)(null),h=t.attack,A=c.a.createElement("svg",{className:"bi bi-pencil-square attack-control",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",onClick:function(){t.setAttackToEdit(t.attack),t.setShowAttackModal(!0)}},c.a.createElement("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),c.a.createElement("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})),E=c.a.createElement("svg",{className:"attack-control",onClick:function(t){t.preventDefault(),d(!0)},height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fillRule:"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),c.a.createElement("path",{fillRule:"evenodd",d:"M5.23 5.146a.5.5 0 0 0 0 .708l5 5a.5.5 0 0 0 .707-.708l-5-5a.5.5 0 0 0-.708 0z"}),c.a.createElement("path",{fillRule:"evenodd",d:"M10.937 5.146a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .707 0z"})),g=c.a.createElement(u.a,{show:s,centered:!0,onHide:function(){d(!1)}},c.a.createElement(u.a.Header,{closeButton:!0},c.a.createElement(u.a.Title,null,"Delete Attack")),c.a.createElement(v.a,null,c.a.createElement("h3",null,"Are you sure you want to delete ",t.attack.attackName,"?"),c.a.createElement("br",null),c.a.createElement(f.a,{className:"justify-content-around"},c.a.createElement("button",{className:"btn btn-outline-dark",onClick:function(e){e.attackId=t.attack.attackId,t.handleDeleteAttack(e)}},c.a.createElement("h3",null,"Yes")),c.a.createElement("button",{className:"btn btn-outline-dark",onClick:function(){d(!1)}},c.a.createElement("h3",null,"No"))),c.a.createElement("br",null)));return c.a.createElement(f.a,{className:"attack"},c.a.createElement(k.a,null,h.attackName),c.a.createElement(k.a,null,h.firstAttackModifier,"/",h.firstAttackDamage),c.a.createElement(k.a,null,h.secondAttackModifier,"/",h.secondAttackDamage),c.a.createElement(k.a,null,h.thirdAttackModifier,"/",h.thirdAttackDamage),c.a.createElement(k.a,null,h.fourthAttackModifier,"/",h.fourthAttackDamage),c.a.createElement(k.a,{className:"attack-controls",xs:"7",sm:"4",md:"3",lg:"2",xl:"2"},c.a.createElement(f.a,{className:"ml-auto mr-0 justify-content-between"},c.a.createElement(k.a,null,c.a.createElement("input",{className:"attack-control",ref:m,type:"checkbox",checked:h.compare,onChange:function(e){t.changeComparison(h.attackId,e.target.checked)},onMouseEnter:function(){l(!n)},onMouseLeave:function(){l(!n)}})),c.a.createElement(k.a,null,A),c.a.createElement(k.a,null,E)),g,c.a.createElement(b.a,{show:n,placement:"right",target:m.current},(function(t){return c.a.createElement(D.a,t,"Compare?")}))))}var S=function(t){var e=Object(r.useState)(!1),a=Object(p.a)(e,2),n=a[0],l=a[1],o=Object(r.useState)(!1),i=Object(p.a)(o,2),s=i[0],d=i[1],m=Object(r.useState)(null),h=Object(p.a)(m,2),A=h[0],E=h[1],g=Object(r.useState)(!1),b=Object(p.a)(g,2),D=b[0],M=b[1],N=c.a.createElement("svg",{onClick:function(){l(!0)},width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-chevron-down",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})),w=c.a.createElement("svg",{onClick:function(){l(!1)},width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-chevron-up",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fillRule:"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"})),S=c.a.createElement("svg",{onClick:function(t){t.preventDefault(),d(!0)},width:"1em",height:"1em",viewBox:"0 0 16 16",className:"",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fillRule:"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),c.a.createElement("path",{fillRule:"evenodd",d:"M5.23 5.146a.5.5 0 0 0 0 .708l5 5a.5.5 0 0 0 .707-.708l-5-5a.5.5 0 0 0-.708 0z"}),c.a.createElement("path",{fillRule:"evenodd",d:"M10.937 5.146a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .707 0z"}),c.a.createElement(u.a,{show:s,centered:!0},c.a.createElement(u.a.Header,{closeButton:!0},c.a.createElement(u.a.Title,null,"Delete Character")),c.a.createElement(v.a,null,c.a.createElement("h3",null,"Are you sure you want to delete ",t.char.name,"?"),c.a.createElement("br",null),c.a.createElement(f.a,{className:"justify-content-around"},c.a.createElement("button",{className:"btn btn-outline-dark",onClick:function(){t.handleDeleteCharacter(t.char.id)}},c.a.createElement("h3",null,"Yes")),c.a.createElement("button",{className:"btn btn-outline-dark",onClick:function(t){d(!1),t.stopPropagation()}},c.a.createElement("h3",null,"No"))),c.a.createElement("br",null)))),x=c.a.createElement("svg",{height:"20",viewBox:"0 0 16 16",className:"bi bi-pencil-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",onClick:function(){t.editCharacter(t.char.id)}},c.a.createElement("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),c.a.createElement("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"}));return c.a.createElement(v.a,{className:"character-bar"},c.a.createElement(f.a,{className:"character-bar-heading"},c.a.createElement(k.a,{className:"character-name"},t.char.name),c.a.createElement(k.a,{xs:"7",sm:"4",md:"3",lg:"3",xl:"2",className:"expand-toggle ml-auto mr-0 justify-content-between"},c.a.createElement(f.a,null,c.a.createElement(k.a,null,n?w:N),c.a.createElement(k.a,null,x),c.a.createElement(k.a,null,S)))),n?c.a.createElement("h5",{style:{textAlign:"center"}}," \u2015Attacks\u2015 "):"",n?t.char.attacks.map((function(e){return c.a.createElement(y,{attack:e,key:e.attackId,changeComparison:t.changeComparison,setAttackToEdit:E,setShowAttackModal:M,handleDeleteAttack:t.handleDeleteAttack})})):"",n?c.a.createElement(C,{handleAddAttack:t.handleAddAttack,handleEditAttack:t.handleEditAttack,char:t.char,setExpanded:l,attackToEdit:A,showAttackModal:D,setAttackToEdit:E,setShowAttackModal:M}):"")},x=a(83);function O(t){var e;function a(t){return(function(t){if(""===t)return 0;var e=t.split(/d/i),a=Object(p.a)(e,2),r=a[0];return a[1],Number(r)}(t)+function(t){if(""===t)return 0;var e=t.split(/d/i),a=Object(p.a)(e,2),r=a[0],c=a[1];return Number(r)*(Number(c)||1)}(t))/2}function r(t,e,r){var c=.05*(Number(t)+20-r);return c=Math.min(c,1),(c=Math.max(c,0))*function(t){var e,r=(t=t||"").split("+"),c=0,n=Object(o.a)(r);try{for(n.s();!(e=n.n()).done;){var l=e.value;l.match(/d/i)?c+=a(l):c+=Number(l)}}catch(i){n.e(i)}finally{n.f()}return c}(e)}var n=["black","red","green","blue"],l=null===t||void 0===t||null===(e=t.attacks)||void 0===e?void 0:e.map((function(t,e){var a=n[e%n.length],c=t.characterName,l=t.attackName;return{borderColor:a,backgroundColor:"rgba(0,0,0,0)",label:"".concat(c," - ").concat(l),data:function(t){for(var e=t.characterName,a=t.attackName,c=t.firstAttackModifier,n=t.firstAttackDamage,l=t.secondAttackModifier,o=t.secondAttackDamage,i=t.thirdAttackModifier,s=t.thirdAttackDamage,d=t.fourthAttackModifier,m=t.fourthAttackDamage,u=[],h=0;h<31;h++)u.push(h);return u.map((function(t){var u=r(c,n,t)+r(l,o,t)+r(i,s,t)+r(d,m,t);return{characterName:e,attackName:a,expectedDamage:u,AC:t}}))}(t).map((function(t){return Math.round(1e3*t.expectedDamage)/1e3}))}})),i=c.a.createElement(x.a,{data:{labels:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],datasets:l},options:{scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Avg. Proj. Damage",fontFamily:"Alegreya SC",fontSize:"18"}}],xAxes:[{scaleLabel:{display:!0,labelString:"Targeted Armor Class",fontFamily:"Alegreya SC",fontSize:"18"}}]},legend:{labels:{fontFamily:"Alegreya SC"}}}});return c.a.createElement(v.a,{xs:"12"},c.a.createElement("br",null),c.a.createElement("h5",{style:{textAlign:"center"}},"\u2015Attack Comparison Against AC Values\u2015"),i)}var j=function(t){var e=t.characters,a=[];e.forEach((function(t){t.attacks.forEach((function(e){if(!0===e.compare){var r=Object.assign({},{characterName:t.name},e);a.push(r)}}))}));var r=a.map((function(t){return c.a.createElement(f.a,{className:"comp-attack",key:"attack-comparison-".concat(t.attackId)},c.a.createElement(k.a,null,t.characterName,"-",t.attackName),c.a.createElement(k.a,null,t.firstAttackModifier,"/",t.firstAttackDamage),c.a.createElement(k.a,null,t.secondAttackModifier,"/",t.secondAttackDamage),c.a.createElement(k.a,null,t.thirdAttackModifier,"/",t.thirdAttackDamage),c.a.createElement(k.a,null,t.fourthAttackModifier,"/",t.fourthAttackDamage))}));return c.a.createElement(v.a,{className:"comparison"},c.a.createElement("h2",{style:{textAlign:"center"}},"Attack Comparison"),c.a.createElement("h5",{style:{textAlign:"center"}}," \u2015Attacks\u2015 "),r,c.a.createElement(O,{attacks:t.attacks}))};a(191);function I(t){return c.a.createElement(E.a,{className:"titlebar"},c.a.createElement("h2",null,t.children))}var T=function(t){Object(d.a)(a,t);var e=Object(m.a)(a);function a(t){var r;return Object(i.a)(this,a),(r=e.call(this,t)).editCharacter=function(t){var e=r.state.characters.find((function(e){return e.id===t})).name;r.setState({showCharacterModal:!0,charModalName:e,createTrueEditFalse:!1,editId:t})},r.handleCreateCharacter=function(t){t.preventDefault();var e=JSON.parse(JSON.stringify(r.state.characters));e.push({name:r.state.charModalName,attacks:[],id:r.state.nextID}),r.setState({showCharacterModal:!1,charModalName:"",characters:e,createTrueEditFalse:!0,nextID:++r.state.nextID,editId:null})},r.handleEditCharacter=function(t){t.preventDefault();var e=JSON.parse(JSON.stringify(r.state.characters));e.find((function(t){return t.id===r.state.editId})).name=r.state.charModalName,r.setState({showCharacterModal:!1,charModalName:"",createTrueEditFalse:!0,characters:e,editId:null})},r.handleDeleteCharacter=function(t){var e=JSON.parse(JSON.stringify(r.state.characters));e=e.filter((function(e){return e.id!==t})),r.setState({showCharacterModal:!1,charModalName:"",characters:e,createTrueEditFalse:!0,nextID:++r.state.nextID,editId:null})},r.handleAddAttack=function(t){t.preventDefault();var e=t.formData,a=e.charId,c=e.attackName,n=e.firstAttackModifier,l=e.firstAttackDamage,o=e.secondAttackModifier,i=e.secondAttackDamage,s=e.thirdAttackModifier,d=e.thirdAttackDamage,m=e.fourthAttackModifier,u=e.fourthAttackDamage,h=JSON.parse(JSON.stringify(r.state.characters)),f=h.find((function(t){return t.id===a})),k=r.state.nextID;f.attacks.push({attackName:c,attackId:k,firstAttackModifier:n,firstAttackDamage:l,secondAttackModifier:o,secondAttackDamage:i,thirdAttackModifier:s,thirdAttackDamage:d,fourthAttackModifier:m,fourthAttackDamage:u,compare:!1}),r.setState({characters:h,nextID:r.state.nextID+1})},r.handleEditAttack=function(t){t.preventDefault();var e,a=JSON.parse(JSON.stringify(r.state.characters)),c=Object(o.a)(a);try{for(c.s();!(e=c.n()).done;){var n=e.value;for(var l in n.attacks){if(n.attacks[l].attackId===t.formData.attackId){n.attacks[l]=t.formData;break}}}}catch(i){c.e(i)}finally{c.f()}r.setState({characters:a})},r.handleDeleteAttack=function(t){t.preventDefault();var e=JSON.parse(JSON.stringify(r.state.characters));console.log(t.attackId);var a,c=Object(o.a)(e);try{for(c.s();!(a=c.n()).done;){var n=a.value;for(var l in n.attacks)if(n.attacks[l].attackId===t.attackId){n.attacks.splice(l,1);break}}}catch(i){c.e(i)}finally{c.f()}r.setState({characters:e})},r.changeComparison=function(t,e){var a,c=JSON.parse(JSON.stringify(r.state.characters)),n=Object(o.a)(c);try{for(n.s();!(a=n.n()).done;){var l,i=a.value,s=Object(o.a)(i.attacks);try{for(s.s();!(l=s.n()).done;){var d=l.value;d.attackId===t&&(d.compare=e,r.setState({characters:c}))}}catch(m){s.e(m)}finally{s.f()}}}catch(m){n.e(m)}finally{n.f()}},r.state={showCharacterModal:!1,charModalName:"",characters:[],createTrueEditFalse:!0,editId:null,nextID:0},r}return Object(s.a)(a,[{key:"render",value:function(){var t,e=this,a=this.state.characters.map((function(t){return c.a.createElement(S,{char:t,key:t.id,handleAddAttack:e.handleAddAttack,handleEditAttack:e.handleEditAttack,handleDeleteAttack:e.handleDeleteAttack,changeComparison:e.changeComparison,editCharacter:e.editCharacter,handleDeleteCharacter:e.handleDeleteCharacter})})),r=[],n=Object(o.a)(this.state.characters);try{for(n.s();!(t=n.n()).done;){var l,i=t.value,s=Object(o.a)(i.attacks);try{for(s.s();!(l=s.n()).done;){var d=l.value;if(d.compare){var m=Object.assign({},d,{characterName:i.name});r.push(m)}}}catch(E){s.e(E)}finally{s.f()}}}catch(E){n.e(E)}finally{n.f()}return c.a.createElement("div",{className:"app",id:"app-body"},c.a.createElement(I,null,"Attack Comparison"),c.a.createElement("div",{className:"add-character-button-div text-center"},c.a.createElement("button",{className:"btn btn-outline-dark add-character-button",onClick:function(){e.setState({showCharacterModal:!0})}},c.a.createElement("h4",null,"+ Add Character +")),c.a.createElement(u.a,{show:this.state.showCharacterModal,onHide:function(){e.setState({showCharacterModal:!1})}},c.a.createElement(u.a.Header,{closeButton:!0},c.a.createElement(u.a.Title,null,"Create a Character")),c.a.createElement(u.a.Body,null,c.a.createElement(h.a,{onSubmit:this.state.createTrueEditFalse?this.handleCreateCharacter:this.handleEditCharacter},c.a.createElement(h.a.Group,{controlId:"CharacterName",as:f.a},c.a.createElement(h.a.Label,{column:!0,sm:"4"},"Character Name"),c.a.createElement(k.a,{sm:"6"},c.a.createElement(h.a.Control,{type:"text",name:"CharacterName",required:!0,autoComplete:"off",placeholder:"Character Name",onChange:function(t){e.setState({charModalName:t.target.value})},value:this.state.charModalName}))),c.a.createElement(A.a,{type:"submit"},"Submit"))))),a,c.a.createElement(j,{characters:this.state.characters,attacks:r}))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},88:function(t,e,a){t.exports=a(192)},93:function(t,e,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.20665542.chunk.js.map