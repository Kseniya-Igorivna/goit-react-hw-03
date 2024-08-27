import styles from "./SearchBox.module.css";

export default function SearchBox({ filter, handleFilterChange }) {
  return (
    <div className={styles.searchBox}>
      <label>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
}
