import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import { useState, useEffect } from "react";
const MainComp = ()=>{
    let [vari,setVari] = useState('vali');
    let [dep2,setdep2] = useState('val1');
    let [dep3,setdep3] = useState('val1');
    let [dep4,setdep4] = useState('val1');
    let [dep5,setdep5] = useState('val1');
    // 📌 USEEFFECT WITHOUT SECOND ARGUMENT 
    // useEffect(()=>{
    //     console.log("useEffect called");
    // });
    // 📌 USEEFFECT WITH EMPTY DEPENDENCY ARRAY
    // useEffect(()=>{
    //     console.log("useEffect called");
    // },[]);
    // 📌 USEEFFECT WITH SOME DEPENDENCIES
    useEffect(()=>{
        console.log("useEffect called");
    },[dep2,dep4]);
    console.log("component rendered");
    return (
        <div>
            {/* FIRST HEADING FOR UNDERSTAIND THE FIRST TWO CASES OF USEEFFECT (WHEN SECOND ARGUMENT IS NOT GIVE AND WHEN AN EMPTY ARRAY IS GIVE AS A DEPENDENCY ARRAY) */}
            <h1 onClick={
                function(e){
                    if(vari=='vali')
                    {
                        setVari('vala');
                    }
                    else
                    {
                        setVari('vali');
                    };
                }
            }>heading 1</h1>
            {/* REST HEADINGS FOR UNDERSTANDING THE THIRD CASE OF USEEFFECT (WHEN SOME DPEENDENCIES ARE MENTIONED IN THE DEPENDENCY ARRAY) */}
            <h2 onClick={
                function(){
                    if(dep2=='val1')
                    {
                        setdep2('val0');
                    }
                    else
                    {
                        setdep2('val1');
                    }
                }
            }>heading 2</h2>
            <h3 onClick={
                function(){
                    if(dep3=='val1')
                    {
                        setdep3('val0');
                    }
                    else
                    {
                        setdep3('val1');
                    }
                }
            }>heading 3</h3>
            <h4 onClick={
                function(){
                    if(dep4=='val1')
                    {
                        setdep4('val0');
                    }
                    else
                    {
                        setdep4('val1');
                    }
                }
            }>heading 4</h4>
            <h5 onClick={
                function(){
                    if(dep5=='val1')
                    {
                        setdep5('val0');
                    }
                    else
                    {
                        setdep5('val1');
                    }
                }
            }>heading 5</h5>
        </div>
    )
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<MainComp/>);