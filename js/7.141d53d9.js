(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{c298:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[e.inited?i("mqtt-client",{ref:"client",attrs:{useLocalStorage:e.useLS,initEntities:e.entities,initSettings:e.settings,needInitNewClient:!!e.settings,whiteLabel:e.whiteLabel,secure:e.secure,accentColor:e.accentColor,configuredClients:e.configuredClients,clientsCloseable:e.clientsCloseable},on:{change:e.update}}):e._e()],1)},s=[],o=i("e567"),c={name:"PageIntegration",data:function(){return{inited:!1,settings:void 0,clientsCloseable:void 0,useLS:void 0,entities:void 0,whiteLabel:void 0,secure:void 0,color:void 0,accentColor:void 0,configuredClients:void 0}},created:function(){var e=this;this.$integrationBus.on("SetSettings",(function(t){for(var i in t)e[i]=t[i];e.inited=!0})),this.$integrationBus.on("SetActive",(function(t){e.$refs.client.setActiveClient(t)})),this.$integrationBus.on("AddPublisher",(function(t){e.$refs.client.addPublisher(t)})),this.$integrationBus.on("AddSubscriber",(function(t){e.$refs.client.addSubscriber(t)})),this.$integrationBus.send("ready")},methods:{update:function(e){this.$integrationBus.send("updateSettings",{configuredClients:e})}},components:{MqttClient:o["a"]}},r=c,a=i("2877"),l=Object(a["a"])(r,n,s,!1,null,null,null);t["default"]=l.exports}}]);