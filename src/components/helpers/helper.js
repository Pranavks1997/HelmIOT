import React from 'react';
// import { Link } from 'react-router-dom';
import './helper.css';

export const Hello = () => {
    return (<p>Hello World</p>);
 }
export const Textinput = (props) => {
   return (<div class="textinput"><i className={props.icon_value}></i><input type="text" placeholder={props.placeholder_value}/></div>)
 };

 export const Button = (props) => {
     return (<a class="btn">{props.value}</a>)
 }