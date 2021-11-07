
const pre = document.querySelector("pre");
const body = document.querySelector("body");
if(pre){
    pre.innerText =JSON.stringify(JSON.parse(pre.innerText), null, 4);
}else{
    body.innerText =JSON.stringify(JSON.parse(body.innerText), null, 4)

}
