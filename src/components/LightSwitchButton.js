import React,{ useState } from 'react';
function LightSwitchButton(props){
  const[light,setLight ] = useState('off')
  //props.switchLight(); update the state, causing the page to blink.
  const handleClick = () => {
  props.switchLight();
  setLight((light === "on") ? "off" : "on");}
return(
<button onClick={handleClick} className="LightSwitchButton">
      {props.light === "on" && <span><i>💡</i> I'm on!</span>}
      {props.light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
    );
};
export default LightSwitchButton;