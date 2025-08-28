import Button2Content from "./components/Button2Content"
import ButtonContainer from "./components/ButtonContainer"
import IconContainer from "./components/IconContainer"
import ProfileContainer from "./components/ProfileContainer"


const App = () => {
  return (
    <div className=" max-w-[400px] flex justify-center flex-col m-auto">
          <IconContainer/>
          <div className="profile shadow-2xl rounded-3xl py-10">
            <ProfileContainer/>
             <ButtonContainer/>
          </div>
          
     </div>
   
  )
}
export default App
