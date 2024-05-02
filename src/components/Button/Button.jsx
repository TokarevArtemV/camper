import s from './Button.module.css';

const Button = ({
  type = 'button',
  title,
  children,
  className,
  onClick,
  loading,
  ...rest
}) => {
  const buttonClasses = `${s.button} ${s[className]}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={loading}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
