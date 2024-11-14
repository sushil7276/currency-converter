import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrency from "./Hook/useCurrency";
import Button from "./components/Button";

const Convert = () => {
   // const [data,setData] = useState()
   const [fromAmount, setFromAmount] = useState(0);
   const [convertedAmount, setConvertedAmount] = useState(0);
   const [fromCurrency, setFromCurrency] = useState("usd");
   const [toCurrency, setToCurrency] = useState("inr");

   const allData = useCurrency(fromCurrency);
   const allCurrencyCode = Object.keys(allData);

   const swap = () => {
      setToCurrency(fromCurrency);
      setFromCurrency(toCurrency);
      setConvertedAmount(fromAmount);
      setFromAmount(convertedAmount);
   };

   const convertBtn = () => {
      setConvertedAmount(fromAmount * allData[toCurrency]);
   };
   return (
      <div className='flex flex-col items-center justify-center gap-3 backdrop-blur-sm bg-white/30 rounded-lg p-5 border border-collapse'>
         {/* convert From */}
         <InputBox
            label='From'
            amount={fromAmount}
            onChangeAmount={setFromAmount}
            currencyOptions={allCurrencyCode}
            selectCurrency={fromCurrency}
            onChangeCurrency={setFromCurrency}
            amountDisable={false}
            currencyDisable={false}
         />

         {/* swap */}
         <Button
            label='swap'
            classChange='bg-blue-600 rounded-lg text-white text-xl px-5 py-1 absolute top-[16vh] border-white border-2  hover:bg-blue-500'
            clickToChange={swap}
         />

         {/* convert TO */}
         <InputBox
            label='To'
            amount={convertedAmount}
            onChangeAmount={setConvertedAmount}
            currencyOptions={allCurrencyCode}
            selectCurrency={toCurrency}
            onChangeCurrency={setToCurrency}
            amountDisable={true}
            currencyDisable={false}
         />

         {/* Convert Button */}
         <Button
            label={`Convert ${fromCurrency.toUpperCase()} To ${toCurrency.toUpperCase()}`}
            classChange='bg-blue-600 w-full rounded-lg text-white text-xl px-5 py-3 hover:bg-blue-500'
            clickToChange={convertBtn}
         />
      </div>
   );
};

export default Convert;
