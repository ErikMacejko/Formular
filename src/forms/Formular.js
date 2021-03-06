import { useRef,  useState } from "react";
import React, {Component} from "react";
import {useDropzone} from 'react-dropzone';

import Header from "../components/Header";
import Dropzone from "../components/Dropzone";

export default function Formular(props) {

  const nadpisInputRef = useRef();
  const imgInputRef = useRef(); 
  const cenaInputRef = useRef();
  const stavInputRef = useRef();
  const popisInputRef = useRef();

  function submitHandler(event){
    event.preventDefault();

    const enteredNadpis = nadpisInputRef.current.value;
    const enteredImg = imgInputRef.current.value;  
    const enteredCena = cenaInputRef.current.value;
    const enteredStav = stavInputRef.current.value;
    const enteredPopis = popisInputRef.current.value;

    const allData = {
      nadpis: enteredNadpis,
      cena: enteredCena,
      HlavniFotka: enteredImg,
      stav: enteredStav,
      popis: enteredPopis,
    };

   props.onAddForm(allData);

  }  

  return (
    <form onSubmit={submitHandler}>  
      <div className="wrapForm"> 
        <Header />
        <div className="wrapLabel">  
          <label>
            <span className="labelName"> Nadpis </span>
            <input ref={nadpisInputRef} 
                   pattern="^[ěřůľščťžýáíéúôäňa-zA-Z\s]+$" 
                   required={true}
                   type="text" 
                   placeholder="Nadpis" 
                   name="Nadpis" />
          </label>

          <label>
            <span className="labelName"> Hlavni fotka </span>
            <div>            
                <input className="inputImg"
                  ref={imgInputRef}
                  required={true}
                  accept="image/*"
                  name="image"
                  type="file"  />                                                       
            </div>
        </label>        

          <label>
            <span className="labelName"> Vedlejší fotky </span>
            <Dropzone />         
          </label>                        
        </div>

        <div className="wrapLabel">    
          <label>
            <span  className="labelName"> Cena </span>
            <input 
            ref={cenaInputRef} 
            pattern="^[0-9]+$"
            required={true}
            type="text" 
            placeholder="Cena" 
            name="Cena" />
          </label>

          <label>
            <span style={{display:"block"}} className="labelName"> Stav </span>
            <select style={{display:"block"}} ref={stavInputRef} required={true}>
            <option value="">Vybrať</option>
              <option value="Voľná">volná</option>
              <option value="Predaná">predaná</option>
          </select>    
          </label>
        </div>

        <div className="wrapLabel">       
            <label>
              <span className="labelName" style={{display:"block"}}> Popis </span>
              <textarea ref={popisInputRef} required={true} style={{display:"block"}} name="review" placeholder="Text area"></textarea>   
            </label>        
            <input className="inputButton" value="odeslat" type="submit" />      
        </div>    
      </div> 
  </form>
  );
}
