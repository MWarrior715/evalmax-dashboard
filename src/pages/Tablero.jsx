import React from 'react'
import { GiTrophyCup, GiCheckMark } from 'react-icons/gi';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, certificacionBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import viaje1 from '../data/viaje1.jpg';
import product9 from '../data/product9.jpg';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Tablero = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className='mt-24'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Cursos Activos</p>
              <p className='text-2xl '>{'>>>'} 1351</p>
            </div>
            <button
              type='button'
              style={{ backgroundColor: currentColor }}
              className='text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4'
            >
              <GiTrophyCup />
            </button>
          </div>
          <div className='mt-6'>
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
{/* ------------------------------GRAFICA LINEA APROBADOS - PENDIENTES */}
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Analitica EvalMAX</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Pendientes</span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span>
                  <GiCheckMark />
                </span>
                <span>Aprobados</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className="bg-slate-200 border-r-1 border-color dark:bg-slate-600 m-4 p-8">
              <div>
                <p>
                  <span className="text-3xl font-semibold">801</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    35%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Aprobados</p>
              </div>
              <div className='mt-8'>
                <p className="text-3xl font-semibold">1488</p>
                <p className='text-gray-500 mt-1'>Pendientes</p>
              </div>
              <div className='mt-5 mb-4'>
                <SparkLine 
                  currentColor={currentColor} 
                  id="line.sparkLine" 
                  type="Line" 
                  height="80px" 
                  width="250px" 
                  data={SparklineAreaData} 
                  color={currentColor} 
                />
              </div>
              <div>
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Descargar Informe"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div className='dark:bg-slate-600 p-8'>
              <Stacked 
                currentMode={currentMode} 
                width="320px" 
                height="360px"
              />
            </div>
          </div>
        </div>
{/* ------------------------------GRAFICA BARRAS ESTADISTICA MENSUAL */}
        <div>
          <div 
            className='rounded-2xl md:w-400 p-4 m-3'
            style={{ backgroundColor: currentMode === 'Dark' ? '#475569' : '#e2e8f0' }}
          >
            <div className='flex justify-between items-center'>
              <p className="font-semibold text-gray dark:text-gray-200 text-2xl">Clases Complementarias </p>
              <div>
                <p className="text-2xl text-gray dark:text-gray-200 font-semibold mt-8">3,794</p>
                <p className="text-gray-400">Total por Mes</p>
              </div>
            </div>
            <div className="mt-4">
              <SparkLine currentColor={ currentMode === 'Dark' ? '#475569' : '#e2e8f0' } id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color={ currentColor } />
            </div>
          </div>
{/* ------------------------------GRAFICA PIE ESTADISTICA ANUAL */}
          <div>
            <div className="dark:text-gray-200 bg-slate-200 dark:bg-slate-600 rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
              <div>
                <p className="text-2xl font-semibold ">7,016</p>
                <p className="text-gray-400">NúmeroTotal Estudiantes</p>
              </div>
              <div className="w-40">
                <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
              </div>
            </div>
          </div>
        </div>
      </div>
{/* ------------------------------GRAFICA DROPDOWN ESTADISTICA CARRERAS*/}
      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="dark:text-gray-200 bg-slate-200 dark:bg-slate-600 rounded-2xl p-10">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Cursos Tendencia</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-base font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Más..."
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">36 Datos más</p>
          </div>
        </div>
{/* ------------------------------GRAFICA ESTADISTICA ANUAL DE VENTA*/}
        <div className="bg-slate-200 dark:bg-slate-600 rounded-2xl dark:text-gray-200 p-6 w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Estadistica Anual de Venta</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div>
{/* ------------------------------GRAFICA ESTADISTICA SEMANAL DE VENTA*/}
      <div className='flex flex-wrap justify-center'>
        <div className='md:w-400 bg-slate-200 dark:bg-slate-600 rounded-2xl dark:text-gray-200 p-10 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>Datos Semanales</p>
            <button type='button' className='text-xl font-semibold text-gray-500'>
              <IoIosMore />
            </button>
          </div>
          <div className='mt-10'>
            {weeklyStats.map((item) => (
              <div key={item.title} className="flex justify-between mt-4 w-full">
                <div className='flex gap-4'>
                  <button
                    type='button'
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className='text-base font-semibold'>{item.title}</p>
                    <p className='text-sm text-gray-400'>{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(208, 244, 247)" />
            </div>
          </div>
        </div>
{/* ------------------------------GRAFICA ESTADISTICA DE MARCA*/}
        <div className='w-400 bg-slate-200 dark:bg-slate-600 rounded-2xl dark:text-gray-200 p-10 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>EvalMAX Certificación BRANDING</p>
            <button type='button' className='text-xl font-semibold text-gray-400'>
              <IoIosMore />
            </button>
          </div>
          <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
            16 Abril, 2022
          </p>
          <div className="flex gap-4 border-b-1 border-color mt-6">
            {certificacionBranding.data.map((item) => (
              <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
                <p className="text-xs text-gray-400">{item.title}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="border-b-1 border-color pb-4 mt-2">
            <p className="text-md font-semibold mb-2">Equipo</p>
            <div className="flex gap-4">
              {certificacionBranding.teams.map((item) => (
                <p
                  key={item.name}
                  style={{ background: item.color }}
                  className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-base font-semibold mb-2'>Asesores</p>
            <div className='flex gap-4'>
              {certificacionBranding.leaders.map((item, index) => (
                <img key={index} className="rounded-full w-8 h-8" src={item.image} alt="" />
              ))}
            </div>
          </div>
          <div className='flex justify-between items-center mt-5 border-t-1 border-color'>
            <div className='mt-3'>
              <Button 
                color='white'
                bgColor={currentColor}
                text='Agregar'
                borderRadius='10px'
              />
            </div>
            <p className='text-gray-400 text-sm'>36 datos Recientes</p>
          </div>
        </div>
{/* ------------------------------ACTIVIDAD RECIENTE*/}
        <div className='w-400 bg-slate-200 dark:bg-slate-600 rounded-2xl dark:text-gray-200 p-10 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>Actividad Reciente</p>
            <button type='button' className='text-xl font-semibold text-gray-500' >
              <IoIosMore />
            </button>
          </div>           
          <div className='mt-10'>
            <img 
              className='md:w96 h-50'
              src={viaje1} 
              alt="" 
            />
            <div className='mt-8'>
              <p className='font-semibold text-lg'><span className='font-bold text-orange-700'>¡NUEVO PROGRAMA!</span> Técnico laboral por competencias en Agente de Viaje y Turismo</p>
              <p className='text-gray-400'>Por Manuel Guerrero</p>
              <p className='mt-8 text-sm text-gray-400'>Acelere su carrera con un programa riguroso diseñado para estudiantes de alto potencial que se inician en su carrera y que están ansiosos por marcar la diferencia.</p>
              <div>
                <Button 
                  color='white'
                  bgColor={currentColor}
                  text="Saber Más"
                  borderRadius='10px'
                />
              </div>
            </div>
          </div>     
        </div>
      </div>
    </div>    
  );
};

<div className="mt-10">
  <img
    className="md:w-96 h-50 "
    src={product9}
    alt=""
  />
</div>

export default Tablero;