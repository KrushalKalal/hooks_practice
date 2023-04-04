import React from 'react';
import HookCounter from "./Component/StateHook/HookCounter";
import HookCountTwo from "./Component/StateHook/HookCountTwo";
import HookObject from "./Component/StateHook/HookObject";
import HookArray from "./Component/StateHook/HookArray";
import EffectRenderHook from "./Component/EffectHook/EffectRenderHook";
import EffectCondition from "./Component/EffectHook/EffectCondition";
import DataFetch from "./Component/EffectHook/DataFetch";
import DataFetchwithId from "./Component/EffectHook/DataFetchwithId";
import ComponentA from "./Component/Context/ComponentA";
import ParentComponent from './Component/Callback/ParentComponent';
import CounterMemo from './Component/Memo/CounterMemo';
import CounterA from './Component/Custom/CounterA';
import CounterB from './Component/Custom/CounterB';

export const userContext = React.createContext()
export const dataContext = React.createContext()

function App() {
  return (
      <div>
        <ParentComponent/>
         <HookCounter/>
         <HookCountTwo/>
         <HookObject/>
         <CounterMemo/>
         <HookArray/>
         
         <EffectRenderHook/>
         <EffectCondition/>
         <userContext.Provider value={'karan'}>
            <dataContext.Provider value={'raj'}>
              <ComponentA/>
            </dataContext.Provider>
         </userContext.Provider>
         <CounterA/>
         <CounterB/>
         <DataFetch/>
         <DataFetchwithId/>
      </div>
  );
}

export default App;
