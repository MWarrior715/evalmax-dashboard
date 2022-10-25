import React from 'react';

import { ChartsHeader, Stacked as StackedChart } from '../../components';

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-slate-200 dark:bg-slate-600 rounded-2xl">
    <ChartsHeader category="Columnas" title="Detalle de Ingresos por Certificaciones" />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;