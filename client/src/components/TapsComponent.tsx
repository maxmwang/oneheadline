import React from 'react';

function TapsComponent({ taps }: { taps: number }) {
  return (
    <section>
      <b>Taps: </b>
      {taps}
    </section>
  );
}

export default TapsComponent;
