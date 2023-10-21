"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[926],{2183:(e,o,l)=>{l.r(o),l.d(o,{default:()=>W});var a=l(9835);const i={class:"row"},d={class:"col-xs-4 col-md-4 q-pa-md"},t={class:"col-xs-4 col-md-4 q-pa-md"},n={class:"col-xs-4 col-md-4 q-pa-md"},r={class:"col-xs-4 col-md-4 q-pa-md"},s={style:{height:"500px"}};function u(e,o,l,u,c,m){const p=(0,a.up)("q-input"),v=(0,a.up)("q-select"),h=(0,a.up)("q-btn"),g=(0,a.up)("q-form"),f=(0,a.up)("q-td"),b=(0,a.up)("q-table"),E=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(E,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{onSubmit:e.agregarHoras,class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a._)("div",d,[(0,a.Wm)(p,{rounded:"",outlined:"",modelValue:e.periodoActivo,"onUpdate:modelValue":o[0]||(o[0]=o=>e.periodoActivo=o),type:"text",disable:"",label:"Id Periodo"},null,8,["modelValue"])]),(0,a._)("div",t,[(0,a.Wm)(v,{rounded:"",outlined:"",modelValue:e.modelEmpleado,"onUpdate:modelValue":[o[1]||(o[1]=o=>e.modelEmpleado=o),o[2]||(o[2]=o=>{e.getHorasEmpleado(o)})],options:e.optionsEmpleado,label:"Seleccione Empleado",filled:""},null,8,["modelValue","options"])]),(0,a._)("div",n,[(0,a.Wm)(p,{rounded:"",outlined:"",modelValue:e.horasExtras,"onUpdate:modelValue":o[3]||(o[3]=o=>e.horasExtras=o),type:"number",label:"Ingrese Total de Horas Extras"},null,8,["modelValue"])]),(0,a._)("div",r,[(0,a.Wm)(p,{rounded:"",outlined:"",modelValue:e.horasDobles,"onUpdate:modelValue":o[4]||(o[4]=o=>e.horasDobles=o),type:"number",label:"Ingrese Total de Horas Dobles"},null,8,["modelValue"])])]),(0,a._)("div",null,[(0,a.Wm)(h,{label:"Agregar",type:"submit",color:"primary"})])])),_:1},8,["onSubmit"]),(0,a._)("div",s,[(0,a.Wm)(b,{class:"full-height",title:"Horas Empleado",rows:e.horasEmpleadoRows,columns:e.columns,filter:e.filter,pagination:{rowsPerPage:0}},{"body-cell-Eliminar":(0,a.w5)((o=>[(0,a.Wm)(f,{props:o,class:"q-pa-sm"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{outline:"",size:"sm",color:"red",icon:"delete",label:"Eliminar",onClick:l=>e.bajaHoras(o.row)},null,8,["onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","filter"])])])),_:1})}var c=l(9302),m=l(4136),p=l(8651),v=l(499),h=l(8339),g=function(e,o,l,a){function i(e){return e instanceof l?e:new l((function(o){o(e)}))}return new(l||(l=Promise))((function(l,d){function t(e){try{r(a.next(e))}catch(o){d(o)}}function n(e){try{r(a["throw"](e))}catch(o){d(o)}}function r(e){e.done?l(e.value):i(e.value).then(t,n)}r((a=a.apply(e,o||[])).next())}))};const f=[{name:"IdPeriodo",label:"Id Periodo",field:"id_periodo",align:"center"},{name:"IdEmpleado",label:"Id Empleado",field:"id_empleado",align:"center"},{name:"HorasExtras",label:"Horas Extras",field:"horas_extas",align:"center"},{name:"HorasDobles",label:"Horas Dobles",field:"horas_dobles",align:"center"},{name:"Eliminar",label:"Eliminar",field:"Eliminar",align:"center"}],b=(0,a.aZ)({name:"HorasPage",setup(){const e=(0,c.Z)(),o=(0,h.tv)(),l=(0,v.iH)(null),a=(0,v.iH)(""),i=(0,v.iH)([]),d=(0,v.iH)([]),t=(0,v.iH)(null),n=(0,v.iH)(null),r=(0,v.iH)(null),s=()=>g(this,void 0,void 0,(function*(){yield m.api.get(m.endPoints.EMPLEADOS+"/combo").then((e=>{d.value=e.data})).catch((e=>{(0,p.L1)(e)}))})),u=o=>g(this,void 0,void 0,(function*(){const a=o.value;e.loading.show(),yield m.api.get(m.endPoints.HORAS,{params:{idEmpleado:a,idPeriodo:l.value}}).then((e=>{i.value=e.data})).catch((e=>{(0,p.L1)(e)})).finally((()=>{e.loading.hide()}))})),b=o=>g(this,void 0,void 0,(function*(){const a=yield(0,p.pW)("Confirmacion","Esta seguro de Eliminar?",{});if(!a)return;const i=o.id_empleado;e.loading.show(),yield m.api.delete(m.endPoints.HORAS,{params:{idEmpleado:i,idPeriodo:l.value}}).then((e=>g(this,void 0,void 0,(function*(){yield u({value:i}),(0,p.dF)("Proceso Correcto")})))).catch((e=>{(0,p.L1)(e)})).finally((()=>{e.loading.hide()}))})),E=()=>g(this,void 0,void 0,(function*(){e.loading.show(),yield m.api.get(m.endPoints.PERIODOS+"/activo").then((a=>{if(!a.data[0])return(0,p.x2)("Error",{subtitulo:"No existe un Periodo Activo, debe aperturar el periodo",timeout:1e4}),e.loading.hide(),void o.back();l.value=a.data[0].id})).catch((e=>{(0,p.L1)(e)})).finally((()=>{e.loading.hide()}))})),H=()=>g(this,void 0,void 0,(function*(){if(!l.value||!r.value||!n.value||!t.value)return void(0,p.x2)("Debe Seleccionar todos los campos");const o=yield(0,p.pW)("Confirmacion","Desea Agregar las Horas al Empleado?",{});if(!o)return;const a={idPeriodo:l.value,horasDobles:r.value,horasExtras:n.value,idEmpleado:t.value.value};e.loading.show();yield m.api.post(m.endPoints.HORAS,a).then((e=>g(this,void 0,void 0,(function*(){200===e.status&&((0,p.dF)("Agregado Correctamente"),yield u({value:a.idEmpleado}),n.value=null,r.value=null)})))).catch((e=>{(0,p.L1)(e)}));e.loading.hide()}));return{getPeriodoActivo:E,horasEmpleadoRows:i,columns:f,periodoActivo:l,filter:a,agregarHoras:H,getEmpleados:s,modelEmpleado:t,optionsEmpleado:d,horasExtras:n,horasDobles:r,getHorasEmpleado:u,bajaHoras:b}},created(){this.getPeriodoActivo(),this.getEmpleados()}});var E=l(1639),H=l(9885),y=l(8326),P=l(3119),w=l(6384),x=l(8879),_=l(7580),q=l(7220),A=l(9984),V=l.n(A);const D=(0,E.Z)(b,[["render",u]]),W=D;V()(b,"components",{QPage:H.Z,QForm:y.Z,QInput:P.Z,QSelect:w.Z,QBtn:x.Z,QTable:_.Z,QTd:q.Z})}}]);