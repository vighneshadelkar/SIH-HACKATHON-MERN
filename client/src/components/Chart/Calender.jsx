import { useState } from 'react';
import Calendar from 'react-calendar';


let ValuePiece= Date | null;

let Value = ValuePiece | [ValuePiece, ValuePiece];

const style={
    borderRadius: 20,
}

export default function Calender() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} style={style}/>
    </div>
  );
}