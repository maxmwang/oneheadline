import React from 'react';

function ChangesComponent({ changes }: { changes: number }) {
  return (
    <section>
      <b>Changes: </b>
      {changes}
    </section>
  );
}

export default ChangesComponent;
