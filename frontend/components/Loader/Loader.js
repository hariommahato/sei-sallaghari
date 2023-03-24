
import React from "react";
import { Dna } from "react-loader-spinner";
const Loader = () => {
  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        width:"50%",
        margin:"auto"
    }}>
      <Dna
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
