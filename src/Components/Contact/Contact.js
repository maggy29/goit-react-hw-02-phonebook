import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";

function Contact({ id, name, number, onRemove }) {
  return (
    <li className={styles.container} key={id}>
      <p>
        {name}: {number}
      </p>
      <button className={styles.button} type="button" onClick={onRemove}>
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Contact;
