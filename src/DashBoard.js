import React,{ createContext, useContext, useState } from 'react';

import {Member} from './member';
import {MemberDetails} from './MemberDetails';

function DashBoard() {
  
  return (
    <div>
   <Member>
   </Member>
   <MemberDetails></MemberDetails>
    </div>
  );
}
export default DashBoard;