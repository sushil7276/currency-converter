import { useId } from "react";

function InputBox({
   label,
   amount,
   onChangeAmount,
   currencyOptions = [],
   selectCurrency = "usd",
   onChangeCurrency,
   amountDisable = false,
   currencyDisable = false,
}) {
   const amountInputId = useId();

   return (
      <div className='w-[30vw] h-[15vh] bg-white rounded-xl p-4 flex justify-between'>
         <div className='flex flex-col justify-around items-start gap-4'>
            <label htmlFor={amountInputId} className='text-gray-500 text-lg'>
               {label}
            </label>
            <input
               id={amountInputId}
               className='focus:outline-none text-lg'
               type='text'
               placeholder='Enter amount'
               disabled={amountDisable}
               value={amount}
               onChange={(e) =>
                  onChangeAmount && onChangeAmount(Number(e.target.value))
               }
            />
         </div>

         <div className='flex flex-col justify-around items-end gap-4'>
            <label className='text-gray-500 text-lg'>Currency Type</label>

            <select
               name='currency'
               id='currency'
               className='bg-gray-200 px-3 py-1 rounded-lg focus:outline-none text-lg'
               value={selectCurrency}
               onChange={(e) =>
                  onChangeCurrency && onChangeCurrency(e.target.value)
               }
               disabled={currencyDisable}
            >
               {currencyOptions?.map((currency) => (
                  <option key={currency} value={currency}>
                     {currency}
                  </option>
               ))}
            </select>
         </div>
      </div>
   );
}

export default InputBox;
