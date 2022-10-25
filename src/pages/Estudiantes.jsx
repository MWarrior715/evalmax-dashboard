import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { estudiantesData, estudiantesGrid } from '../data/dummy';
import { Header } from '../components';

const Estudiantes = () => {
  const selectionSettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting : true, allowEditing : true };

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-slate-200 dark:bg-slate-600 rounded-2xl'>
      <Header category="Página" title="Estudiantes" />
      <GridComponent
        dataSource={estudiantesData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionSettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {estudiantesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Estudiantes