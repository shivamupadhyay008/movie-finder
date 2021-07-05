import {Spinner} from "react-bootstrap";
export const Loader =({text})=>{
    return (
      <div style={{width:"100%",textAlign:"center"}}>
        <h2>
          {text?text:"Loading"}... <Spinner animation="grow" />
        </h2>
      </div>
    );
}