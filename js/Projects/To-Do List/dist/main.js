(()=>{"use strict";document.getElementById("content").append((()=>{null===localStorage.getItem("data")&&localStorage.setItem("data",JSON.stringify({Daily:[{id:"1",task:"Do work"},{id:"2",task:"Do more work"}],Weekly:[{id:"1",task:"Do weekly work"}]}));const e=document.createElement("div"),t=["Daily","Weekly"];for(var n=0;n<t.length;n++){const o=document.createElement("button");o.classList.add("btn","btn-primary"),o.style.marginRight="20px",o.innerHTML=t[n],o.onclick=()=>{a(o.innerHTML)};const c=document.createElement("button");c.classList.add("btn","btn-secondary"),c.style.marginRight="20px",c.innerHTML="ADD",e.append(c),e.append(o)}const a=e=>{var t=localStorage.getItem("data");t=JSON.parse(t),l();const n=document.createElement("div");for(var a=0;a<t[e].length;a++)n.append(o(t[e][a],e,a));canvas.append(n)},o=(e,t,n)=>{const a=document.createElement("p");a.innerHTML=e.task;const o=document.createElement("button");return o.classList.add("btn"),o.classList.add("btn-danger"),o.innerHTML="Delete",o.type="button",o.onclick=()=>{c()},o.onclick=()=>{c(e.id,t,n)},a.append(o),a},c=(e,t,n)=>{var a=localStorage.getItem("data");a=JSON.parse(a),console.log(a[t][n]),a[t].splice(n,1),console.log(a[t]),localStorage.setItem("data",JSON.stringify(a))},l=()=>{document.getElementById("canvas").innerHTML=""};return e})())})();