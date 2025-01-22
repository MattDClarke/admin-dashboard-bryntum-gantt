import { BryntumGanttProps } from "@bryntum/gantt-react";

const ganttProps : BryntumGanttProps = {
  columns: [
    { type: 'name', field: 'name', width: 350 }
  ],
  viewPreset: 'weekAndDayLetter',
  barMargin: 8,
  rowHeight: 50,
  taskRenderer: ({
    renderData
  }) => {
    renderData.cls += ' rounded-lg';
    return '';
  },
  project: {
    transport: {
      load: {
        url: 'data.json'
      }
    },
    autoLoad: true,
    // Automatically introduces a `startnoearlier` constraint for tasks that (a) have no predecessors, (b) do not use
    // constraints and (c) aren't `manuallyScheduled`
    autoSetConstraints: true
  }
};

export { ganttProps };