import React from 'react';

type DateComponentProps = {
  dateAsString: string;
  dateType: 'createdAt' | 'updatedAt';
};

function DateComponent({ dateAsString, dateType }: DateComponentProps) {
  const dateObj = new Date(dateAsString);
  const label = dateType === 'createdAt' ? 'Created At: ' : 'Last Updated At: ';

  return (
    <section>
      <b>{label}</b>
      {`${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`}
    </section>
  );
}

export default DateComponent;
