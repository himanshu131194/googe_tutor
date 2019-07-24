module.exports=function(o){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return o[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=o,t.c=e,t.d=function(o,e,r){t.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:r})},t.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},t.t=function(o,e){if(1&e&&(o=t(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var a in o)t.d(r,a,function(e){return o[e]}.bind(null,a));return r},t.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(e,"a",e),e},t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},t.p="/dist/",t(t.s=18)}([function(o,e){o.exports=require("react-hot-loader")},function(o,e){o.exports=require("fs")},function(o,e,t){"use strict";(function(o){var r;(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).enterModule)&&r(o);var a,n,l={env:"production",port:process.env.PORT||4e3,API_URL:"http://localhost:3000",ACCESS_TOKEN:"0z6v8b4uua"};e.a=l,(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).default)&&a.register(l,"default","/Users/himanshusavita/Desktop/google_tutor-master/config/index.js"),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).leaveModule)&&n(o)}).call(this,t(5)(o))},function(o,e){o.exports=require("xlsx")},function(o,e){o.exports=require("jsontoxml")},function(o,e){o.exports=function(o){if(!o.webpackPolyfill){var e=Object.create(o);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(o,e){o.exports=require("path")},function(o,e){o.exports=require("express")},function(o,e){o.exports=require("webpack")},function(o,e){o.exports=require("body-parser")},function(o,e){o.exports=require("xml-formatter")},function(o,e,t){(function(o){var e;(e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).enterModule)&&e(o);var r,a,n=t(6),l=t(8),c=process.cwd(),s={name:"browser",mode:"development",devtool:"eval-source-map",entry:["babel-polyfill","react-hot-loader/patch","webpack-hot-middleware/client?reload=true",n.join(c,"client/main.js")],output:{path:n.join(c,"/dist"),filename:"bundle.js",publicPath:"/dist/"},module:{rules:[{test:/\.jsx?$/,exclude:/node_modules/,use:["babel-loader"]},{test:/.css$/,use:[{loader:"style-loader"},{loader:"css-loader"}]},{test:/\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,use:"file-loader"}]},plugins:[new l.HotModuleReplacementPlugin,new l.NoEmitOnErrorsPlugin]};o.exports=s,(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).default)&&(r.register(c,"CURRENT_WORKING_DIR","/Users/himanshusavita/Desktop/google_tutor-master/webpack.config.client.js"),r.register(s,"config","/Users/himanshusavita/Desktop/google_tutor-master/webpack.config.client.js")),(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).leaveModule)&&a(o)}).call(this,t(23)(o))},function(o,e,t){"use strict";(function(o){var r;(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).enterModule)&&r(o);var a,n,l=function(){return'<!doctype html>\n      <html lang="en">\n        <head>\n            <title>google_tutor</title>\n            <meta name="viewport"  content="width=device-width initial-scale=1"/>\n            <link rel="stylesheet" href="https://s3.amazonaws.com/assessts-book/css/impactwebfont.css">\n            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">\n            <link rel="stylesheet" href="/css/web-icons.css">\n        </head>\n        <body>\n          <div id="root"></div>\n          <script type="text/javascript" src="/dist/bundle.js"><\/script>\n          <script type="text/javascript" src="/js/vkbeauty.js"><\/script>\n        </body>\n      </html>'};e.a=l,(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).default)&&a.register(l,"default","/Users/himanshusavita/Desktop/google_tutor-master/template.js"),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).leaveModule)&&n(o)}).call(this,t(5)(o))},function(o,e){o.exports=require("formidable")},function(o,e){o.exports=require("uuid/v4")},function(o,e,t){"use strict";(function(o){var r,a=t(2),n=t(8),l=t.n(n),c=t(16),s=t.n(c),i=t(17),u=t.n(i),p=t(11),d=t.n(p);(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).enterModule)&&r(o);var m,f,v=function(o){if("development"===a.a.env){var e=l()(d.a),t=s()(e,{publicPath:d.a.output.publicPath});o.use(t),o.use(u()(e))}},_={compile:v};e.a=_,(m=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).default)&&(m.register(v,"compile","/Users/himanshusavita/Desktop/google_tutor-master/server/devBundle.js"),m.register(_,"default","/Users/himanshusavita/Desktop/google_tutor-master/server/devBundle.js")),(f=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).leaveModule)&&f(o)}).call(this,t(5)(o))},function(o,e){o.exports=require("webpack-dev-middleware")},function(o,e){o.exports=require("webpack-hot-middleware")},function(o,e,t){t(19),o.exports=t(20)},function(o,e){o.exports=require("babel-polyfill")},function(o,e,t){"use strict";t.r(e),function(o){var e,r=t(7),a=t.n(r),n=t(3),l=t.n(n),c=t(6),s=t.n(c),i=t(2),u=t(9),p=t.n(u),d=(t(21),t(1)),m=t.n(d),f=t(4),v=t.n(f),_=t(10),h=t.n(_),g=t(12),y=(t(22),t(13)),b=t.n(y),x=t(14),w=t.n(x),k=t(15);(e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).enterModule)&&e(o);var q=a()();q.use(p.a.urlencoded({extended:!1})),q.use(p.a.json());var S=process.cwd();function A(o){var e=[];if(o.paramsArr.length>0){var t=!0,r=!1,a=void 0;try{for(var n,l=o.paramsArr[Symbol.iterator]();!(t=(n=l.next()).done);t=!0){var c=n.value;e.push({name:"param",attrs:{name:c.key,type:c.type}})}}catch(o){r=!0,a=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw a}}}return{name:"tutelage_tmpl",attrs:{name:o.work_tmp_name},children:[{name:"params",children:e}]}}function j(o){var e='<problem_ref name="'.concat(o.prob_tmp_name,'">');if(o.paramsArr.length>0){var t=!0,r=!1,a=void 0;try{for(var n,l=o.paramsArr[Symbol.iterator]();!(t=(n=l.next()).done);t=!0){var c=n.value;"int"==c.type?e+='<bind name="'.concat(c.key,'" val="').concat(c.value,'"/>'):e+='<bind name="'.concat(c.key,'" type="').concat(c.type,'"><img src="').concat(c.value,'" width="20px"/></bind>')}}catch(o){r=!0,a=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw a}}}return e+"</problem_ref>"}function $(o){var e=[];if(o.paramsArr.length>0){var t=!0,r=!1,a=void 0;try{for(var n,l=o.paramsArr[Symbol.iterator]();!(t=(n=l.next()).done);t=!0){var c=n.value;e.push({name:"bind",attrs:{name:c.key,val:c.value}})}}catch(o){r=!0,a=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw a}}}return{name:"problem_ref",attrs:{name:o.prob_tmp_name},children:e}}function L(o){var e=[];if(o.paramsArr.length>0){var t=!0,r=!1,a=void 0;try{for(var n,l=o.paramsArr[Symbol.iterator]();!(t=(n=l.next()).done);t=!0){var c=n.value;e.push({name:"param",attrs:{name:c.key,type:c.type}})}}catch(o){r=!0,a=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw a}}}var s="".concat(o.ques_txt),i="";if(o.paramsArr.length>0){i+="<params>";var u=!0,p=!1,d=void 0;try{for(var m,f=o.paramsArr[Symbol.iterator]();!(u=(m=f.next()).done);u=!0){var v=m.value;i+='<param name="'.concat(v.key,'" type="').concat(v.type,'"/>')}}catch(o){p=!0,d=o}finally{try{u||null==f.return||f.return()}finally{if(p)throw d}}o.conditions.length>0&&(i+=Y(o)),i+="</params>"}return o.ques_width=o.ques_width||400,'<problem_tmpl name="'.concat(o.prob_tmp_name,'" width="').concat(o.ques_width,'">').concat(i).concat(s).concat(E(o),"</problem_tmpl>")}function M(o){o.boxing[0],o.boxing[1];var e=Math.floor(100*Math.random());return'<group><boxing name="BOX_'.concat(e,'" count="A*B" limit="Math.max(A-1,3)">$P$</boxing><solutions><solution><cond><boxing_ref name="BOX_').concat(e,'" field="group"/> == $A$</cond><cond><boxing_ref name="BOX_').concat(e,'" field="size"/> == $B$</cond></solution></solutions></group>')}function T(o){var e=o.sub_questions,t="",r="abcdefghikjklmnopqrstuvwxyzabcdefghikjklmnopqrstuvwxyz",a=0,n=!0,l=!1,c=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var u=s.value;console.log(u);var p=u.mcq_choises.length,d=1,m="",f=!1,v="",_="<group>";(u.mcq_question||e.length>1)&&(v="<p>".concat(u.mcq_question,"</p>"),_="<group name='".concat(o.prob_tmp_name,"' type='MCQ'>"));var h=!0,g=!1,y=void 0;try{for(var b,x=u.mcq_choises[Symbol.iterator]();!(h=(b=x.next()).done);h=!0){var w=b.value;/(https?:\/\/.*\.(?:png|jpg|svg))/.test(w)?(f=!0,m+='<cell><choice name="'.concat(r[a].toUpperCase()).concat(d,'">').concat(w,"</choice></cell>")):m+='<choice name="'.concat(r[a].toUpperCase()).concat(d,'">').concat(w,"</choice>"),++d}}catch(o){g=!0,y=o}finally{try{h||null==x.return||x.return()}finally{if(g)throw y}}f&&(m='<grid columns="150px 150px" gap="50px">'.concat(m,"</grid>"));var k=u.mcq_answer;u.mcq_answer&&u.mcq_answer.match("Choice")&&(k=u.mcq_answer.split(" ")[1]);var q='<repeat val="'.concat(p,'" index="i"><cond><choice_ref name="').concat(r[a].toUpperCase(),'$i+1$"/>==$(i)==(').concat(parseInt(k)-1,")$</cond></repeat>");t+="".concat(_).concat(v).concat(m,"<solutions><solution>").concat(q,"</solution></solutions></group>"),++a}}catch(o){l=!0,c=o}finally{try{n||null==i.return||i.return()}finally{if(l)throw c}}return t}function D(o){var e=1,t=o.ans_txt,r=!0,a=!1,n=void 0;try{for(var l,c=o.fib_conditions[0][Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var s=l.value;t=t.replace("<FIB_"+e+">",s),++e}}catch(o){a=!0,n=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw n}}var i="<group>";return o.mcq_question&&(i="<group name='".concat(o.prob_tmp_name,"' type='FIB'>")),"".concat(i).concat(t,"<solutions><solution>").concat(o.fib_conditions[1],"</solution></solutions></group>")}function U(o){var e=1,t=o.ans_txt,r=!0,a=!1,n=void 0;try{for(var l,c=o.fib_conditions[0][Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var s=l.value;t=t.replace("<FIB_"+e+">",s),++e}}catch(o){a=!0,n=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw n}}var i=Math.floor(100*Math.random()),u='<array name="ARY'.concat(i,'" row="A" column="B" symbol="').concat(o.symbol,'"/>'),p=o.solution,d="<solution><cond>".concat(p,' == $A*B$</cond><cond><array_ref name="ARY').concat(i,'" field="row"/>== $A$</cond><cond><array_ref name="ARY').concat(i,'" field="column"/>== $B$</cond></solution>');return 1==o.array_swap&&(d+="<solution><cond>".concat(p,' == $A*B$</cond><cond><array_ref name="ARY').concat(i,'" field="row"/>== $B$</cond><cond><array_ref name="ARY').concat(i,'" field="column"/>== $A$</cond></solution>')),"<group>".concat(o.ans_txt).concat(u,"<solutions>").concat(d,"</solutions></group>")}function G(o){for(var e='<grid columns="50% 50%" gap="2px 20px">',t=1,r=0;r<o.slotLArray.length;r++){var a=o.slotLArray[r],n=o.slotRArray[r];a.match("<FIB_")&&(a=a.replace("<FIB_"+t+">",'<fib type="int" name="fib'.concat(t,'"/>')),++t),n.match("<FIB_")&&(n=n.replace("<FIB_"+t+">",'<fib type="int" name="fib'.concat(t,'"/>')),++t),e+='<cell><slot name="slot1_'.concat(r+1,'">').concat(a,'</slot></cell><cell><slot name="slot2_').concat(r+1,'">').concat(n,"</slot></cell>")}e+="</grid>";for(var l="<solution>",c=0;c<o.slotLArraySolution.length;c++){var s=o.slotLArraySolution[c][o.slotLArraySolution[c].length-2];l+='<cond><slot_ref name="slot1_'.concat(c+1,'"/>=={"slot2_').concat(parseInt(s)+1,'"}</cond>')}return l+="</solution>","<group>".concat(e,"<solutions>").concat(l,"<solution>").concat(o.fib_conditions[1],"</solution></solutions></group>")}function H(o){Math.floor(100*Math.random());o.array_row=o.paramsArr[0].value,o.array_column=o.paramsArr[1].value;var e='<boxing_array name="ba1" count="'.concat(o.count,'" limit="').concat(o.limit,'">$P$</boxing_array>'),t=parseInt(o.array_row)*parseInt(o.array_column),r='<solution><boxing_array_ref name="ba1" />.row=='.concat(o.array_row);return r+='&& <boxing_array_ref name="ba1" />.column=='.concat(o.array_column),r+='<boxing_array_ref name="ba1" />.row * <boxing_array_ref name="ba1" />.column=='.concat(t,"</solution>"),"<group>".concat(e,"<solutions>").concat(r,"</solutions></group>")}function I(o){var e=Math.floor(100*Math.random()),t='<clock name="clock'.concat(e,'"/>'),r='<solution><cond><clock_ref name="clock'.concat(e,'" />=="').concat(o.time,'"</cond></solution>');return"<group>".concat(o.ans_txt).concat(t,"<solutions>").concat(r,"</solutions></group>")}function O(o){for(var e=Math.floor(100*Math.random()),t='"'.concat(o.paramsArr[1].value,'"'),r=[],a=parseInt(o.paramsArr[0].value);a>0;)r.push(t),--a;var n='<tape name="tape'.concat(e,'"/>'),l='<solution><cond><tape_ref name="tape'.concat(e,'" />.inOrder(').concat(r.toString(),")</cond></solution>");return"<group>".concat(o.ans_txt).concat(n,"<solutions>").concat(l,"</solutions></group>")}function B(o){var e=Math.floor(100*Math.random()),t=(parseInt(o.paramsArr[0].value),parseInt(o.paramsArr[1].value)),r='<number_line name="nbl'.concat(e,'"><start text="$A$:00"x="0"/><repeat val="(').concat(o.end,"/").concat(o.interval,'/)-1" index="i"><mark text="$A$:$(i+1)*').concat(o.interval,'$" x="$(i+1)*').concat(o.interval,'$" />');r+='</repeat><end text="$A$:'.concat(o.interval,'" x = "').concat(o.end,'" /></number_line>');var a='<solution><cond><number_line_ref name="nbl'.concat(e,'" />.containsExactly(').concat(t,") </solution>");return"<group>".concat(o.ans_txt).concat(r,"<solutions>").concat(a,"</solutions></group>")}function R(o){var e=Math.floor(100*Math.random()),t='<boxing_shading name="ss'.concat(e,'" count="').concat(o.count,'" limit="').concat(o.limit,'">$P$</boxing_shading>'),r='<solution><cond><boxing_shading_ref name="ss'.concat(e,'" />==').concat(o.shading_ref,"</cond></solution>");return"<group>".concat(o.ans_txt).concat(t,"<solutions>").concat(r,"</solutions></group>")}function C(o){for(var e=Math.floor(100*Math.random()),t='<bar name="bar'.concat(e,'" x-series="[').concat(o.x_point.toString(),']" x-label="').concat(o.x_axis_title,'" y-range="[').concat(o.y_axis_start,",").concat(o.y_axis_end,",").concat(o.y_axis_interval,']" y-label="true" show-y-label="false" width="200" height="100" show-x-gridlines="true", show-y-gridlines="false"/>'),r="<solution><cond>",a=0;a<o.y_value.length;a++)r+='<bar_ref name="bar'.concat(e,'"  />.columnHeightAtXIndex(').concat(a,")==").concat(o.y_value[a]," &&");return r=r.slice(0,-2),r+="</cond></solution>","<group>".concat(o.ans_txt).concat(t,"<solutions>").concat(r,"</solutions></group>")}function P(o){for(var e=Math.floor(100*Math.random()),t='<line_plot name="lp'.concat(e,'" x-range="[').concat(o.x_point.toString(),']" x-label="').concat(o.x_axis_title,'" y-range="[').concat(o.y_axis_start,",").concat(o.y_axis_end,",").concat(o.y_axis_interval,']" y-label="').concat(o.y_axis_title,'" show-y-label="false" width="200" height="100" show-x-gridlines="false", show-y-gridlines="false"/>'),r="<solution><cond>",a=0;a<o.y_value.length;a++)r+='<line_plot_ref name="bar'.concat(e,'"  />.columCountAtXValue(').concat(a,")==").concat(o.y_value[a]," &&");return r=r.slice(0,-2),r+="</cond></solution>","<group>".concat(o.ans_txt).concat(t,"<solutions>").concat(r,"</solutions></group>")}function F(){return"<solution></solution>"}function z(o){return{name:"worksheet_ref",attrs:{name:o.work_tmp_name}}}function N(o){return'<tutelage_ref name="T1"><bind name="A"  val="A"/><bind name="B"  val="B"/><bind name="AA" ><fib_ref name="fib1"/></bind></tutelage_ref>'}function X(o){var e=T(o);return D(o)+e}function E(o){return console.log(o.sub_questions),o.boxing.length>0?M(o):"normal"===o.ques_type?"<solution></solution>":"mcq"===o.ques_type?T(o):"fib"===o.ques_type?D(o):"array"===o.ques_type?U(o):"boxing"===o.ques_type||"slot"===o.ques_type?G(o):"aws"===o.ques_type?H(o):"clock"===o.ques_type?I(o):"tape"===o.ques_type?O(o):"numberline"===o.ques_type?B(o):"shadingbox"===o.ques_type?R(o):"bargraph"===o.ques_type?C(o):"lineplot"===o.ques_type?P(o):"mcq/fib"===o.ques_type?X(o):void 0}function Y(o){var e="<constraints>",t=!0,r=!1,a=void 0;try{for(var n,l=o.conditions[Symbol.iterator]();!(t=(n=l.next()).done);t=!0){var c=n.value.replace(/[\u00A0-\u9999<>\&]/gim,function(o){return"&#"+o.charCodeAt(0)+";"});e+="<cond>".concat(c.toString(),"</cond>")}}catch(o){r=!0,a=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw a}}return e+="</constraints>"}q.use(a.a.static(s.a.join(S,"public"))),k.a.compile(q),q.use("/dist",a.a.static(s.a.join(S,"dist"))),q.get("/list-wrksheets",function(o,e){e.send(JSON.parse(m.a.readFileSync("public/xmls/worksheets.json")))}),q.get("/test-xlsx",function(o,e){var t=l.a.readFile("public/xmls/zzzz.xlsx"),r=t.SheetNames,a=l.a.utils.sheet_to_json(t.Sheets[r[0]],{defVal:""}),n=0,c={};c.paramsArr=[],c.prob_tmp_name="zzzzzz";var s=!0,i=!1,u=void 0;try{for(var p,d=a[Symbol.iterator]();!(s=(p=d.next()).done);s=!0){var m=p.value;"Tutor ID"==m.col1?(c.work_tmp_name=m.col2,n=1):"Conditions"==m.col1&&(n=0),"QUESTION"==m.col1&&(c.ques_txt+=m.col2),"QuesType"==m.col1&&(c.ques_type=m.col2),"Answer stem"==m.col1&&(c.ans_txt+=m.col2),1==n&&"Tutor ID"!=m.col1&&c.paramsArr.push({key:m.col1,value:m.col2,type:m.col3})}}catch(o){i=!0,u=o}finally{try{s||null==d.return||d.return()}finally{if(i)throw u}}var f=[A(c),L(c),'<tutelage_ref name="T1"><bind name="A"  val="A"/><bind name="B"  val="B"/><bind name="AA" ><fib_ref name="fib1"/></bind></tutelage_ref>',j(c),z(c)],_=v()(f);e.send({test:_})}),q.get("*",function(o,e){e.send(Object(g.a)())}),q.post("/",function(o,e){var t=o.body.work_tmp_name.trim(),r=o.body.new_work_tmp_name?o.body.new_work_tmp_name.trim():"";r.length>0&&(o.body.work_tmp_name=r);var a=JSON.parse(m.a.readFileSync("public/xmls/worksheets.json"));if(a[t]){var n=L(o.body),l=JSON.parse(m.a.readFileSync("public/xmls/"+t+".txt"));l.unshift(n);for(var c=0;c<l.length;c++)"worksheet_tmpl"==l[c].name&&l[c].children.unshift($(o.body));m.a.writeFileSync("public/xmls/"+t+".txt",JSON.stringify(l));var s=v()(l);e.send(h()("<xml>".concat(s,"</xml>")))}else{var i=[A(o.body),L(o.body),'<tutelage_ref name="T1"><bind name="A"  val="A"/><bind name="B"  val="B"/><bind name="AA" ><fib_ref name="fib1"/></bind></tutelage_ref>',j(o.body),z(o.body)],u=v()(i);a[r]=r,m.a.writeFileSync("public/xmls/worksheets.json",JSON.stringify(a)),m.a.writeFileSync("public/xmls/"+r+".txt",JSON.stringify(i)),e.send(h()("<xml>".concat(u,"</xml>")))}});var Q,J,W="";function V(o,e){var t=l.a.utils.sheet_to_json(o.Sheets[e],{defVal:""}),r=0,a={};a.paramsArr=[],a.prob_tmp_name="PR2064",a.ques_txt="",a.ans_txt="",a.fib_conditions=[],a.conditions=[],a.boxing=[],a.array=[];var n=[],c="";a.slotLArray=[],a.slotRArray=[],a.slotLArraySolution=[],a.x_point=[],a.y_value=[];a.mcq_choises=[];var s=[],i={},u=!0,p=!1,d=void 0;try{for(var m,f=t[Symbol.iterator]();!(u=(m=f.next()).done);u=!0){var _=m.value;if("Tutor ID"==_.col1?(a.work_tmp_name=_.col2,r=1):"Conditions"!=_.col1&&"Condition"!=_.col1||(r=0),"Problem ID"==_.col1&&void 0!==_.col2&&(a.prob_tmp_name=_.col2),"QuestionWidth"==_.col1&&(a.ques_width=void 0!==_.col2?_.col2:400),"Conditions"!=_.col1&&"Condition"!=_.col1||void 0!==_.col2&&a.conditions.push(_.col2),"Question"==_.col1&&(void 0!==_.col2&&(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(_.col2)?(_.col3=_.col3||"",a.ques_txt+='<p><img src="'.concat(_.col2,'" width="100" alt="').concat(_.col3,'"/></p>')):a.ques_txt+="<p>".concat(_.col2,"</p>")),i.mcq_question=a.ques_txt),"QuesType"==_.col1&&void 0!==_.col2&&(a.ques_type=_.col2),"Answer stem"!=_.col1&&"Answer Stem"!=_.col1||void 0!==_.col2&&(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(_.col2)?(_.col3=_.col3||"",a.ans_txt+='<p><img src="'.concat(_.col2,'" width="100" alt="').concat(_.col3,'"/></p>')):a.ans_txt+="<p>".concat(_.col2,"</p>")),_.col1&&_.col1.match("Choice")&&"Choice Answer"!==_.col1&&void 0!==_.col2&&(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(_.col2)?(_.col3=_.col3||"",a.mcq_choises.push('<p><img src="'.concat(_.col2,'" width="100" alt="').concat(_.col3,'"/></p>'))):a.mcq_choises.push(_.col2),i.mcq_choises=a.mcq_choises),"Choice Answer"==_.col1&&(""===_.col2&&void 0===_.col2||(/(https?:\/\/.*\.(?:png|jpg|svg))/.test(_.col2)?(_.col3=_.col3||"",a.mcq_answer='<p><img src="'.concat(_.col2,'" width="100" alt="').concat(_.col3,'"/></p>')):a.mcq_answer=_.col2,i.mcq_answer=a.mcq_answer,s.push(i),i={},a.mcq_answer="",a.mcq_choises=[],a.ques_txt="")),"MCQ Question"==_.col1&&(""===_.col2&&void 0===_.col2||(a.mcq_question=_.col2)),"Boxing Group"==_.col1&&(a.boxing[0]=_.col2),_.col1&&/^Slot.*R$/i.test(_.col1)&&void 0!==_.col2&&a.slotRArray.push(_.col2),_.col1&&/^Slot.*L$/i.test(_.col1)&&void 0!==_.col2&&a.slotLArray.push(_.col2),_.col1&&/^Slot.*Answer$/i.test(_.col1)&&void 0!==_.col2&&a.slotLArraySolution.push(_.col2),"Boxing Size"==_.col1&&(a.boxing[1]=_.col2),"Array Row"==_.col1&&(a.array[0]=_.col2),"Array Column"==_.col1&&(a.array[1]=_.col2),"Solution"==_.col1&&(a.solution=_.col2),"Symbol"==_.col1&&(a.symbol=_.col2),_.col1&&"Limit"==_.col1&&void 0!==_.col2&&(a.limit=_.col2),_.col1&&"Count"==_.col1&&void 0!==_.col2&&(a.count=_.col2),_.col1&&"Array Row"==_.col1&&void 0!==_.col2&&(a.array_row=_.col2),_.col1&&"Array Column"==_.col1&&void 0!==_.col2&&(a.array_column=_.col2),_.col1&&"Time"==_.col1&&void 0!==_.col2&&(a.time=_.col2),_.col1&&"Tape"==_.col1&&void 0!==_.col2&&(a.tape=_.col2),_.col1&&"Order"==_.col1&&void 0!==_.col2&&(a.order=_.col2),_.col1&&"Start"==_.col1&&void 0!==_.col2&&(a.start=_.col2),_.col1&&"End"==_.col1&&void 0!==_.col2&&(a.end=_.col2),_.col1&&"Interval"==_.col1&&void 0!==_.col2&&(a.interval=_.col2),_.col1&&"Shading answer"==_.col1&&void 0!==_.col2&&(a.shading_ref=_.col2),_.col1&&"X axis title"==_.col1&&void 0!==_.col2&&(a.x_axis_title=_.col2),_.col1&&"X axis Start"==_.col1&&void 0!==_.col2&&(a.x_axis_start=_.col2),_.col1&&"X axis End"==_.col1&&void 0!==_.col2&&(a.x_axis_end=_.col2),_.col1&&"X axis Interval"==_.col1&&void 0!==_.col2&&(a.x_axis_interval=_.col2),_.col1&&"Y axis title"==_.col1&&void 0!==_.col2&&(a.y_axis_title=_.col2),_.col1&&"Y axis Start"==_.col1&&void 0!==_.col2&&(a.y_axis_start="'".concat(_.col2,"'")),_.col1&&"Y axis End"==_.col1&&void 0!==_.col2&&(a.y_axis_end="'".concat(_.col2,"'")),_.col1&&"Y axis Interval"==_.col1&&void 0!==_.col2&&(a.y_axis_interval="'".concat(_.col2,"'")),_.col1&&_.col1.match("X point")&&void 0!==_.col2&&a.x_point.push("'".concat(_.col2,"'")),_.col1&&_.col1.match("Y value")&&void 0!==_.col2&&a.y_value.push("'".concat(_.col2,"'")),_.col1&&_.col1.match("FIB_")&&void 0!==_.col2){var h=_.col1.split("_")[1];c+='<cond><fib_ref name="fib'.concat(h,'"/>==$').concat(_.col2,"$</cond>"),n.push('<fib type="int" name="fib'.concat(h,'"/>'))}_.col1&&"Swap"==_.col1&&(void 0!==_.col2&&1==_.col2?a.array_swap=1:a.array_swap=0),1==r&&"Tutor ID"!=_.col1&&"Variable"!=_.col1&&void 0!==_.col2&&a.paramsArr.push({key:_.col1,value:_.col2,type:_.col3})}}catch(o){p=!0,d=o}finally{try{u||null==f.return||f.return()}finally{if(p)throw d}}a.fib_conditions.push(n),a.fib_conditions.push(c),a.sub_questions=s;var g=[L(a)],y=v()(g);return W+=j(a),y}q.post("/upload-xlsx",function(o,e){(new b.a.IncomingForm).parse(o).on("file",function(o,t){var r=w()();console.log(r);var a="",n=l.a.readFile("".concat(t.path)),c=n.SheetNames;W="";var s=!0,i=!1,u=void 0;try{for(var p,d=c[Symbol.iterator]();!(s=(p=d.next()).done);s=!0){a+=V(n,p.value)}}catch(o){i=!0,u=o}finally{try{s||null==d.return||d.return()}finally{if(i)throw u}}var m=Math.floor(100*Math.random()),f='<worksheet_tmpl name="T1_1_WSM'.concat(m,'">').concat(W,'</worksheet_tmpl><worksheet_ref name="T1_1_WSM').concat(m,'"/>');e.send("".concat(a).concat(f))}).on("field",function(o,e){console.log(e),console.log("Got a field:",e)}).on("error",function(o){next(o)}).on("end",function(){e.end()})}),q.listen(i.a.port,function(o){o&&console.log(o),console.info("Server started on port %s.",i.a.port)}),(Q=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).default)&&(Q.register(q,"app","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(S,"CURRENT_WORKING_DIR","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(A,"tutelageTempalte","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(j,"worksheetTempalte","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register($,"problemRefTemplate","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(L,"problemTemplate","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(M,"checkBoxing","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(T,"multipleChoiseSolutionTemplate","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(D,"fibSolutionTemplate","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(U,"arraySolutionTempalte","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(G,"boxSolutionTemplate","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(H,"awsSolutionTemplate","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(I,"clockSolutionTemplate","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(O,"tapSolutionTemplate","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(B,"nblSolutionTemplate","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(R,"ssSolutionTemplate","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(C,"bgSolutionTemplate","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(P,"lpSolutionTemplate","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(F,"normalSolutionTemplate","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(z,"worksheetRefTempalte","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(N,"tutelageRefTempalte","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(X,"mcqfibSolutionTemplate","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(E,"solutionTemplate","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(Y,"genrateConstrains","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(W,"probRefsCollectionsStack","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js"),Q.register(V,"uploadXLSX","/Users/himanshusavita/Desktop/google_tutor-master/server/server.js")),(J=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).leaveModule)&&J(o)}.call(this,t(5)(o))},function(o,e){o.exports=require("crypto")},function(o,e){o.exports=require("querystring")},function(o,e){o.exports=function(o){return o.webpackPolyfill||(o.deprecate=function(){},o.paths=[],o.children||(o.children=[]),Object.defineProperty(o,"loaded",{enumerable:!0,get:function(){return o.l}}),Object.defineProperty(o,"id",{enumerable:!0,get:function(){return o.i}}),o.webpackPolyfill=1),o}}]);