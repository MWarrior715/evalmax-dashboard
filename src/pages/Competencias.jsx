import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { competenciasData, contextMenuItems, competenciasGrid } from '../data/dummy';
import { Header } from '../components';

const Competencias = () => {
  const editing = { allowDeleting: true , allowEditing: true };
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-slate-200 dark:bg-slate-600 rounded-2xl dark:text-gray-200'>
      <Header category="Página" title="Competencias" />
      <GridComponent
        id="gridcomp"
        dataSource={competenciasData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {competenciasGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[ Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport ]} />
      </GridComponent>
    </div>
  );
};

export default Competencias;