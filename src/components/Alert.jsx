import './Alert.css';

const getBgColor = variant => {
  switch (variant) {
    case 'info':
      return 'blue';
    case 'success':
      return 'green';
    case 'error':
      return 'red';
    case 'warning':
      return 'orange';
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const Alert = ({ variant, children }) => {
  return (
    <p
      className="alert"
      style={{
        backgroundColor: getBgColor(variant),
      }}
    >
      {children}
    </p>
  );
};
