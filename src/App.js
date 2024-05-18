import React, { useState } from "react";
import OrderSummary from "./components/OrderSummary";
import SplitBillOptions from "./components/SplitBillOptions";
import SplitBill from "./components/SplitBill";
import Payment from "./components/Payment";
import "./App.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [splitOption, setSplitOption] = useState(null);
  const [splitDetails, setSplitDetails] = useState({});

  const nextStep = (details) => {
    setSplitDetails(details);
    setStep(step + 1);
  };

  return (
    <div className="App">
      {step === 1 && <OrderSummary nextStep={() => setStep(2)} />}
      {step === 2 && (
        <SplitBillOptions
          nextStep={() => setStep(3)}
          setSplitOption={setSplitOption}
        />
      )}
      {step === 3 && (
        <SplitBill splitOption={splitOption} nextStep={nextStep} />
      )}
      {step === 4 && <Payment splitDetails={splitDetails} />}
    </div>
  );
};

export default App;
