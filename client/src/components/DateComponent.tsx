import React from 'react';

type DateComponentProps = {
  dateAsString: string;
  dateType: 'createdAt' | 'updatedAt';
};

function DateComponent({ dateAsString, dateType }: DateComponentProps) {
  const dateObj = new Date(dateAsString);
  const label = dateType === 'createdAt' ? 'created: ' : 'updated: ';

  return (
    <section>
      <b>{label}</b>
      {`${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`}
    </section>
  );
}

export default DateComponent;
