import React from 'react';
import Header from './component/header'
import Footer from './component/footer'
import MethodHeader from './MethodComponent/MethodHeader'
function MethodInput() {
  return (
    <div >
     <Header />
     <MethodHeader method="MAAU" description="Additive Weight utility"/>
     {/* <Criteria/>
     <Alternative />
     <Matrix /> */}
     <Footer />
    </div>
  );
}

export default MethodInput;
