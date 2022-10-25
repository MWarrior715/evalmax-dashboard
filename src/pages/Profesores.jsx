import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { profesoresData, profesoresGrid } from '../data/dummy';
import { Header } from '../components';

const Profesores = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting : true, allowEditing : true };

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-slate-200 dark:bg-slate-600 rounded-2xl dark:text-gray-200'>
      <Header category="Página" title="Profesores" />
      <GridComponent
        dataSource={profesoresData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {profesoresGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />
      </GridComponent>
    </div>
  );
};

export default Profesores;