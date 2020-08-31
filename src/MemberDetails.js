import React,{ createContext, useContext, useState } from 'react';
import useMemberStore from './store';
import {Button,FormLabel,Input,InputLabel } from '@material-ui/core';
import shallow from 'zustand/shallow'




export function MemberDetails() {
  const member = useMemberStore(state => state.member);
  const increase = useMemberStore(state => state.increase);
  const items = useMemberStore(state => state.items);
  const addItem = useMemberStore(state => state.addItem);
  const reset = useMemberStore(state => state.reset);
  const parentname = useMemberStore(state => state.name);
  const updatename = useMemberStore(state=>state.saveMember);

  let [newItem,setItem] = useState("");
  const clickText = (target) => {}
  return (
    <div>

 <div className="floating">
    <div className="thickness"></div>
    <div className="thickness"></div>
    <div className="thickness"></div>
    <div className="card_body">
      <div className="paypal_center svg">

      </div>
      <div >
      <Button variant="contained" color="secondary">Delete</Button>
     
      </div>
     
      <div className="paywave svg"></div>
      
      <div className="chips svg"></div>
      <div className="card_no text">
        1234-5678-9012-3456
      </div>
      <div className="valid text">
        VALID <br/> THUR
      </div>
      
      <div className="valid_date text">
        12/20
      </div>
      <div className="holder text">
      <Input  disableUnderline={true} style={{ color: "white", disableUnderline:"true"}} color="secondary" value={member.Name} onChange={(evt)=>{updatename(evt.target.value)}}></Input>

      </div>
     
      
      
      <div className="mastercard_icon svg">

      </div>

    </div>
    

  </div>



    <InputLabel>Member name:</InputLabel>
    <Input value={member.Name} onChange={(evt)=>{updatename(evt.target.value)}}></Input>
    <p>{member.Name}</p>
    <p>{parentname}</p>
    <Input value={newItem} onInput={evt=>{setItem(evt.target.value)}}></Input>
    <button onClick={addItem.bind(this,newItem)}>add item</button>
    
  <Button  variant="contained" color="primary" onClick={increase.bind(this,4)}>up</Button>
  <Button  variant="contained" color="primary" onClick={reset}>reset</Button>
  </div>
  );
}

