import create from 'zustand'
import producer from 'immer'

const baseMember = { 
    
        Name:"Hiran",
        age:35
    

}

const [useMemberStore] = create(set => ({ 
    count: 0,
    name:"test",
    member:baseMember,
  increase: (i) =>  set(state =>producer(state,df=>{
      df.member.age=df.member.age+1;
      df.count = df.count+1;

}))  ,
  reset: () => set({ count: 0, name:"test rebump", member:baseMember }),
  saveMember: (name)=>
      set(state =>producer(state,df=>{df.member.Name=name}))   
}))

export default useMemberStore;