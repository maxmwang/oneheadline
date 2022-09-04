import React from 'react';

function TapsComponent({ taps }: { taps: number }) {
  return (
    <section>
      <b>taps: </b>
      {taps}
    </section>
  );
}

export default TapsComponent;
