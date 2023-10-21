"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[194],{7194:(e,o,i)=>{i.r(o),i.d(o,{default:()=>x});var a=i(9835);const l={class:"row"},n={class:"col-xs-4 col-md-4 q-pa-md"},d={class:"col-xs-4 col-md-4 q-pa-md"},t={class:"col-xs-4 col-md-4 q-pa-md"},c={style:{height:"500px"}};function r(e,o,i,r,s,u){const m=(0,a.up)("q-input"),p=(0,a.up)("q-select"),f=(0,a.up)("q-btn"),v=(0,a.up)("q-form"),g=(0,a.up)("q-td"),h=(0,a.up)("q-table"),E=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(E,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{onSubmit:e.agregarBonificacion,class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a._)("div",n,[(0,a.Wm)(m,{rounded:"",outlined:"",modelValue:e.periodoActivo,"onUpdate:modelValue":o[0]||(o[0]=o=>e.periodoActivo=o),type:"text",disable:"",label:"Id Periodo"},null,8,["modelValue"])]),(0,a._)("div",d,[(0,a.Wm)(p,{rounded:"",outlined:"",modelValue:e.modelEmpleado,"onUpdate:modelValue":[o[1]||(o[1]=o=>e.modelEmpleado=o),o[2]||(o[2]=o=>{e.getBonificacionEmpleado(o)})],options:e.optionsEmpleado,label:"Seleccione Empleado",filled:""},null,8,["modelValue","options"])]),(0,a._)("div",t,[(0,a.Wm)(m,{rounded:"",outlined:"",modelValue:e.piezas,"onUpdate:modelValue":o[3]||(o[3]=o=>e.piezas=o),type:"number",label:"Ingrese Total de Piezas Elaboradas"},null,8,["modelValue"])])]),(0,a._)("div",null,[(0,a.Wm)(f,{label:"Agregar",type:"submit",color:"primary"})])])),_:1},8,["onSubmit"]),(0,a._)("div",c,[(0,a.Wm)(h,{class:"full-height",title:"Comisiones Empleado",rows:e.bonificacionEmpleadoRows,columns:e.columns,filter:e.filter,pagination:{rowsPerPage:0}},{"body-cell-Eliminar":(0,a.w5)((o=>[(0,a.Wm)(g,{props:o,class:"q-pa-sm"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{outline:"",size:"sm",color:"red",icon:"delete",label:"Eliminar",onClick:i=>e.bajaBonificacion(o.row)},null,8,["onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","filter"])])])),_:1})}var s=i(9302),u=i(4136),m=i(8651),p=i(499),f=i(8339),v=function(e,o,i,a){function l(e){return e instanceof i?e:new i((function(o){o(e)}))}return new(i||(i=Promise))((function(i,n){function d(e){try{c(a.next(e))}catch(o){n(o)}}function t(e){try{c(a["throw"](e))}catch(o){n(o)}}function c(e){e.done?i(e.value):l(e.value).then(d,t)}c((a=a.apply(e,o||[])).next())}))};const g=[{name:"IdPeriodo",label:"Id Periodo",field:"id_periodo",align:"center"},{name:"IdEmpleado",label:"Id Empleado",field:"id_empleado",align:"center"},{name:"Bonificacion",label:"Bonificacion",field:"bonificacion",align:"center"},{name:"Eliminar",label:"Eliminar",field:"Eliminar",align:"center"}],h=(0,a.aZ)({name:"ComisionesPage",setup(){const e=(0,s.Z)(),o=(0,f.tv)(),i=(0,p.iH)(null),a=(0,p.iH)(""),l=(0,p.iH)([]),n=(0,p.iH)([]),d=(0,p.iH)(null),t=(0,p.iH)(null),c=()=>v(this,void 0,void 0,(function*(){yield u.api.get(u.endPoints.BONIFICACIONES+"/empleado").then((e=>{n.value=e.data})).catch((e=>{(0,m.L1)(e)}))})),r=o=>v(this,void 0,void 0,(function*(){const a=o.value;e.loading.show(),yield u.api.get(u.endPoints.BONIFICACIONES,{params:{idEmpleado:a,idPeriodo:i.value}}).then((e=>{l.value=e.data})).catch((e=>{(0,m.L1)(e)})).finally((()=>{e.loading.hide()}))})),h=o=>v(this,void 0,void 0,(function*(){const a=yield(0,m.pW)("Confirmacion","Esta seguro de Eliminar?",{});if(!a)return;const l=o.id_empleado;e.loading.show(),yield u.api.delete(u.endPoints.BONIFICACIONES,{params:{idEmpleado:l,idPeriodo:i.value}}).then((e=>v(this,void 0,void 0,(function*(){yield r({value:l}),(0,m.dF)("Proceso Correcto")})))).catch((e=>{(0,m.L1)(e)})).finally((()=>{e.loading.hide()}))})),E=()=>v(this,void 0,void 0,(function*(){e.loading.show(),yield u.api.get(u.endPoints.PERIODOS+"/activo").then((a=>{if(!a.data[0])return(0,m.x2)("Error",{subtitulo:"No existe un Periodo Activo, debe aperturar el periodo",timeout:1e4}),e.loading.hide(),void o.back();i.value=a.data[0].id})).catch((e=>{(0,m.L1)(e)})).finally((()=>{e.loading.hide()}))})),b=()=>v(this,void 0,void 0,(function*(){if(!i.value||!t.value||!d.value)return void(0,m.x2)("Debe Seleccionar todos los campos");const o=yield(0,m.pW)("Confirmacion","Desea Agregar la bonificacion al Empleado?",{});if(!o)return;const a={idPeriodo:i.value,piezas:t.value,idEmpleado:d.value.value};e.loading.show();yield u.api.post(u.endPoints.BONIFICACIONES,a).then((e=>v(this,void 0,void 0,(function*(){200===e.status&&((0,m.dF)("Agregado Correctamente"),yield r({value:a.idEmpleado}),t.value=null)})))).catch((e=>{(0,m.L1)(e)}));e.loading.hide()}));return{getPeriodoActivo:E,bonificacionEmpleadoRows:l,columns:g,periodoActivo:i,filter:a,agregarBonificacion:b,getEmpleados:c,modelEmpleado:d,optionsEmpleado:n,piezas:t,getBonificacionEmpleado:r,bajaBonificacion:h}},created(){this.getPeriodoActivo(),this.getEmpleados()}});var E=i(1639),b=i(9885),P=i(8326),w=i(3119),y=i(6384),I=i(8879),C=i(7580),_=i(7220),q=i(9984),A=i.n(q);const B=(0,E.Z)(h,[["render",r]]),x=B;A()(h,"components",{QPage:b.Z,QForm:P.Z,QInput:w.Z,QSelect:y.Z,QBtn:I.Z,QTable:C.Z,QTd:_.Z})}}]);