const Button = ({ label, classChange, clickToChange }) => {
   return (
      <button className={classChange} onClick={clickToChange}>
         {label}
      </button>
   );
};

export default Button;
