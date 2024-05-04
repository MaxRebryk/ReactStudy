import './Alert.css';

// const getBgColor = variant => {
//   switch (variant) {
//     case 'info':
//       return 'blue';
//     case 'success':
//       return 'green';
//     case 'error':
//       return 'red';
//     case 'warning':
//       return 'orange';
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

export const Alert = ({ variant, children, outlined, elevated }) => {
  const classNames = ['alert', variant];
  if (outlined) {
    classNames.push('is-outlined');
  }
  if (elevated) {
    classNames.push('is-elevated');
  }
  return <p className={classNames.join(' ')}>{children}</p>;
};

// export const Alert = ({ variant, children }) => {
//   return (
//     <p
//       className="alert"
//       style={{
//         backgroundColor: getBgColor(variant),
//       }}
//     >
//       {children}
//     </p>
//   );
// };
