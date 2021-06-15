import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const link1="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80";
const link2="https://images.unsplash.com/photo-1599982133170-2f359e2fca07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";
const link3="https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"
const link4="https://images.unsplash.com/photo-1550686041-366ad85a1355?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";
const link5="https://images.unsplash.com/photo-1558032040-b55d2adb9745?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";
const link6="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80";
const link7="https://images.unsplash.com/photo-1521178010706-baefe2334211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80";
const link8="https://images.unsplash.com/photo-1521127474489-d524412fd439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80";
const link9="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

ReactDOM.render(
  <>
     <u>Photo Gallery</u>
     <div class="first">
       <a href={link1} download="wallpaper"><img src={link1} /></a>
       <a href={link2} download="wallpaper"><img src={link2} /></a>
       <a href={link9} download="wallpaper"><img src={link9} /></a>
     </div>
     <div class="first">
       <a href={link4} download="wallpaper"><img src={link4} /></a>
       <a href={link5} download="wallpaper"><img src={link5} /></a>
       <a href={link6} download="wallpaper"><img src={link6} /></a>
     </div>
     <div class="first">
       <a href={link7} download="wallpaper"><img src={link7} /></a>
       <a href={link8} download="wallpaper"><img src={link8} /></a>
       <a href={link3} download="wallpaper"><img src={link3} /></a>
     </div>  
  </>,
  document.getElementById('root')
);
