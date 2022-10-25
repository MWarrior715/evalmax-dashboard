import React from 'react';

import { ChartsHeader, LineChart } from '../../components';

const Line = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-slate-200 dark:bg-slate-600 rounded-2xl">
    <ChartsHeader category="Tendencia" title="Tasa de Crecimiento - Mercado" />
    <div className='w-full'>
      <LineChart />
    </div>
  </div>
);

export default Line;