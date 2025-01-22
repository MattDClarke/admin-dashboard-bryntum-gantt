import { useRef } from 'react';
import { BryntumGantt } from '@bryntum/gantt-react';
import { ganttProps } from '../../config/ganttConfig';

const Gantt = () => {
  const ganttRef = useRef<BryntumGantt>(null);

  return <BryntumGantt ref={ganttRef} {...ganttProps}  />;
};

export default Gantt;