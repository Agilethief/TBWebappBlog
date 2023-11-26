const Button = (props) => {
  // props.buttonTitle

  return (
    <div>
      <button
        className='btn btn-primary'
        onClick={() => props.onClick("clickevent")}
      >
        {props.buttonTitle}
      </button>
    </div>
  );
};

export default Button;
