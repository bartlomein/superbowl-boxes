(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(46)},22:function(e,a,t){},24:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(9),o=t.n(i),s=(t(22),t(10)),l=t(11),u=t(14),m=t(12),c=t(15),h=(t(24),function(e){var a=e.quarter,t=e.person,r=e.prize;return n.a.createElement("div",{className:"quarterCard"},n.a.createElement("h1",{className:"quarterName"},a),t?n.a.createElement("div",{className:"winningName"},n.a.createElement("span",{className:"winningPerson"},t," "),"is the winner of"," ",n.a.createElement("span",{className:"prize"},r)):n.a.createElement("div",{className:"noWinnerYet"},"No ballers yet :( "))}),p={0:["PE","JF","CM","Lindsey","Marri","GS","Jason Miguel","MW","PK","MJB"],1:["Marri","MV","GN","Streko","Lindsey","PE","GS","WDS","Kathrine","Chuck"],2:["CS","Joe A","Ao K","NL","SZ","JB","CD","DH","Phillippp","MG"],3:["Lana","Aman","AD","LK","TC","Streko","Nizza","EP","Ana","JH IV"],4:["JMN","Kaitlyn","FV","GL","GN","Daniel Madera","Barty Crouch Jr","JF","JD","DH"],5:["EP","Chuck","L + J","Joe A","NL","TC","Abi","Nizza","JB","Ana"],6:["LK","Carolyn","PK","Jorjeeee","GF","Tommy Raybould ","Navatta","Barty Crouch Jr","JD","MAW"],7:["L + J","Kathrine","Phillippp","MW","CS","Dylan Stark","Raymond","RAC","CD","LAU"],8:["MG","Navatta","MAW","Eli","AD","GF","Tommy Raybould","JMN","Aman","Karl D"],9:["JH IV","JZ","SAV","CB","BT? (not me)","CM","For D?","Jasmine Miguel","GL","Daniel Madera"]},w=t(13),d=t.n(w),y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).updateScore=function(){var e=t.state.data;e.home.score&&t.setState({homeFirstQuarter:e.home.score[1],homeHalfTime:e.home.score[1]+e.home.score[2],homeThirdQuarter:e.home.score[1]+e.home.score[2]+e.home.score[3],homeFinal:e.home.score[1]+e.home.score[2]+e.home.score[3]+e.home.score[4]+e.home.score[5]},function(){t.setState({homeFirstQuarterLast:Number(t.state.homeFirstQuarter.toString().split("").pop()),homeHalfTimeLast:Number(t.state.homeHalfTime.toString().split("").pop()),homeThirdQuarterLast:Number(t.state.homeThirdQuarter.toString().split("").pop()),homeFinalLast:Number(t.state.homeFinal.toString().split("").pop())})}),e.away.score&&t.setState({awayFirstQuarter:e.away.score[1],awayHalfTime:e.away.score[1]+e.away.score[2],awayThirdQuarter:e.away.score[1]+e.away.score[2]+e.away.score[3],awayFinal:e.away.score[1]+e.away.score[2]+e.away.score[3]+e.away.score[4]+e.away.score[5]},function(){t.setState({awayFirstQuarterLast:Number(t.state.awayFirstQuarter.toString().split("").pop()),awayHalfTimeLast:Number(t.state.awayHalfTime.toString().split("").pop()),awayThirdQuarterLast:Number(t.state.awayThirdQuarter.toString().split("").pop()),awayFinalLast:Number(t.state.awayFinal.toString().split("").pop())})}),t.returnWinner()},t.returnWinner=function(){var e=t.state,a=e.awayFinalLast,r=e.awayThirdQuarterLast,n=e.awayHalfTimeLast,i=e.awayFirstQuarterLast,o=e.homeFirstQuarterLast,s=e.homeHalfTimeLast,l=e.homeThirdQuarterLast,u=e.homeFinalLast;p[i][o]&&t.setState({firstQuarterWinner:p[i][o]}),p[n][s]&&t.setState({halftimeWinner:p[n][s]}),p[r][l]&&t.setState({thirdQuarterWinner:p[r][l]}),p[a][u]&&t.setState({finalWinner:p[a][u]})},t.getGameData=function(){d.a.get("http://www.nfl.com/liveupdate/scores/scores.json").then(function(e){var a=e.data[2019020300];t.setState({data:a})}).catch(function(e){return e})},t.state={data:null,homeFirstQuarter:null,homeHalfTime:null,homeThirdQuarter:null,homeFinal:null,awayFirstQuarter:null,awayHalfTime:null,awayThirdQuarter:null,awayFinal:null,homeFirstQuarterLast:null,homeHalfTimeLast:null,homeThirdQuarterLast:null,homeFinalLast:null,awayFirstQuarterLast:null,awayHalfTimeLast:null,awayThirdQuarterLast:null,awayFinalLast:null,firstQuarterWinner:null,halftimeWinner:null,thirdQuarterWinner:null,finalWinner:null},t}return Object(c.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getGameData(),window.setInterval(function(){return e.updateScore()},5e3),window.setInterval(function(){return e.getGameData()},6e4)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.state,a=e.firstQuarterWinner,t=e.halftimeWinner,r=e.thirdQuarterWinner,i=e.finalWinner;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"welcome"},"Check if you an EC Baller ",n.a.createElement("br",null),n.a.createElement("span",{className:"lit"},"for Superbowl LIII",n.a.createElement("span",{className:"t"},"(t)"))),n.a.createElement(h,{quarter:"1st Quarter",person:a,prize:"$75"}),n.a.createElement(h,{quarter:"Halftime",person:t,prize:"$125"}),n.a.createElement(h,{quarter:"3rd Quarter",person:r,prize:"$75"}),n.a.createElement(h,{quarter:"Final",person:i,prize:"$225"}),n.a.createElement("div",{className:"footer"},"made by ",n.a.createElement("span",{className:"devgod"},"earthcamdevgod1")))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.0043dbc1.chunk.js.map