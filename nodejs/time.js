const str=new Date();
console.log(str);
const y=str.getFullYear();
const m=str.getMonth();
const d=str.getDate();
const hh=str.getHours();
const mi=str.getMinutes();
const ss=str.getSeconds();
console.log(`${y}-${m}-${d} ${hh}:${mi}:${ss}`);
