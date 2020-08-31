import React,{ createContext, useContext, useState } from 'react';
import useMemberStore from './store';


export function Member() {
  const {member , count}= useMemberStore(state => ({member : state.member,count : state.count}));
  const items = useMemberStore(state => state.items);
  return (<div><h1>{count}</h1>
    <p>{member.age}</p>
    {items.map((i)=>{ return <p>{i}</p>})}
    </div>
    );
}


