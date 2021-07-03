import {Spinner} from "react-bootstrap";
export const Loader =()=>{
    return (
      <div style={{width:"100%",textAlign:"center"}}>
        <h2>
          Loading <Spinner animation="grow" />
        </h2>
      </div>
    );
}