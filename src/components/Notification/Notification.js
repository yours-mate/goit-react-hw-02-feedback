import css from '../Notification/Notification.module.css';
export function Notification({ message }) {
  return (
    <div>
      <h3 className={css.notification}>{message}</h3>
    </div>
  );
}
