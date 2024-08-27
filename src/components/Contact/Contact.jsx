import styles from "./Contact.module.css";

export default function Contact({ contact, deleteContact }) {
  return (
    <div className={styles.contact}>
      <span>
        <span className={styles.icon}>👤</span>
        <span className={styles.name}>{contact.name}</span>
      </span>
      <span className={styles.number}>{contact.number}</span>
      <button
        className={styles.button}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}
