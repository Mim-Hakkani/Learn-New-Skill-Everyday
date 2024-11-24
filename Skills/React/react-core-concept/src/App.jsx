
import './App.css'
import BlobImageComponent from './component/Core-Component/BlobImageComponent'
import EventHandler from './component/Core-Component/eventHandler/EventHandler'
import HandleUseState from './component/Core-Component/Hooks/UseStateHooks/HandleUseState'
import LocalStorage from './component/Core-Component/LocalStorage/LocalStorage'
import Text from './component/Core-Component/Text'
import SimpleAnimation from './component/Motion/SimpleAnimation'

function App() {

  return (
    <>
      {/* react core components  */}
         {/* <EventHandler/> */}
         {/* <HandleUseState/> */}
          {/* <Text/> */}
          {/* <BlobImageComponent/> */}
         {/* <LocalStorage/> */}


         {/* farmar motion  */}
         <SimpleAnimation/>
    </>
  )
}

export default App
