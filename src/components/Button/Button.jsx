import s from './Button.module.css';

const Button = ({
  type = 'button',
  title,
  children,
  className,
  onClick,
  isDisabled,
  ...rest
}) => {
  const buttonClasses = `${s.button} ${s[className]}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
