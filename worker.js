import {Encoder} from './encoder.js';
let encoder;
onmessage=e=>{try{const d=e.data;if(d.type==='start'){encoder=new Encoder(d.w,d.h,d.repeat);postMessage({type:'ready'})}if(d.type==='frame'){encoder.frame(new Uint8ClampedArray(d.rgba),d.delay,d.colors,d.fine,d.transparent);postMessage({type:'frame'})}if(d.type==='finish'){const bytes=encoder.finish();postMessage({type:'done',bytes},[bytes.buffer]);encoder=null}}catch(error){postMessage({type:'error',message:error.message})}};
