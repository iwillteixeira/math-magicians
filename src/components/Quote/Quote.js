import React from 'react';
import styles from './Quote.module.css';

const Quote = () => (

  <p className={styles.quote}>

    <q>
      A man may imagine things that are false,
      <br />
      but he can only understand things that are true.
    </q>
  </p>
);

Quote.propTypes = {};

Quote.defaultProps = {};

export default Quote;
