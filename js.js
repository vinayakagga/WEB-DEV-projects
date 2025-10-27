let col=['red','blue','green']
let z=col.concat(col)
let r=()=>Math.random()-.5

z.sort(r)

let g=document.getElementById('g')
let s=[]
let f=[]

z.forEach(v=>{
let d=document.createElement('div')
d.className='c'
d.style.setProperty('--clr',v)
d.onclick=()=>{
if(f.includes(d)||s.includes(d))return
d.classList.add('on')
s.push(d)
if(s.length==2){
if(s[0].style.getPropertyValue('--clr')==s[1].style.getPropertyValue('--clr')){
f.push(s[0]);
f.push(s[1]);
s = [];
if(f.length==z.length){
document.getElementById('msg').style.display='block'
document.getElementById('r').style.display='block'
}
}else{
setTimeout(()=>{s.forEach(x=>x.classList.remove('on'));s=[]},400)
}
}
}
g.appendChild(d)
})
