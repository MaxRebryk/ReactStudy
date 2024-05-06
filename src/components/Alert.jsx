import './Alert.css';
import css from './Alert.module.css';
import clsx from 'clsx';

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

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx('alert', variant, {
//         'is-outlined': outlined,
//         'is-elevated': elevated,
//       })}
//     >
//       {children}
//     </p>
//   );
// };

// const Alert = ({ children }) => {
//   // Звертаємось до властивості об'єкта на ім'я класу з файлу CSS-модуля
//   return <p className={css.alert}>{children}</p>;
// };

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(
//         'alert',
//         variant,
//         outlined && 'is-outlined',
//         elevated && 'is-elevated'
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// export const Alert = ({ variant, children, outlined, elevated }) => {
//   const classNames = ['alert', variant];
//   if (outlined) {
//     classNames.push('is-outlined');
//   }
//   if (elevated) {
//     classNames.push('is-elevated');
//   }
//   return <p className={classNames.join(' ')}>{children}</p>;
// };

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
