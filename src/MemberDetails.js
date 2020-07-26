import React,{ createContext, useContext, useState } from 'react';
import useMemberStore from './store';
import {Button,FormLabel,Input,InputLabel } from '@material-ui/core';
import shallow from 'zustand/shallow'




export function MemberDetails() {
  const member = useMemberStore(state => state.member);
  const increase = useMemberStore(state => state.increase);
  const reset = useMemberStore(state => state.reset);
  const parentname = useMemberStore(state => state.name);
  const updatename = useMemberStore(state=>state.saveMember);
  return (
    <div>
    <InputLabel>Member name:</InputLabel>
    <Input value={member.Name} onChange={(evt)=>{updatename(evt.target.value)}}></Input>
    <p>{member.Name}</p>
    <p>{parentname}</p>
  <Button  variant="contained" color="primary" onClick={()=>{increase(5)}}>up</Button>
  <Button  variant="contained" color="primary" onClick={reset}>reset</Button>
  </div>
  );
}

