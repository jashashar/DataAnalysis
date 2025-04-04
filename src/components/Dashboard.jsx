import React, { useState, useEffect } from 'react';
import LineChart from '../components/LineCharts';
import PieChart from '../components/PieChart';
import DataTable from '../components/DataTable';
import '../styles.css';

const componentMap = {
  linechart: LineChart,
  semipiechart: PieChart,
  table: DataTable,
};

const Dashboard = ({ data }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data.cards.filter(card => card.active));
  }, [data.cards]);

  return (
    <div className='flex justify-center bg-[#fafafa]'>
      <div className="dashboard-container p-6 mb-20 max-w-[1064px]">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {cards.map(card => {
            const ChartComponent = componentMap[card.visualizationType];

            return (
              <div
                key={card.id}
                className={` rounded-[12px] p-4 ${card.visualizationType == 'table' ? 'table-main-container bg-[#fafafa]' : 'w-[349px] h-[292px] bg-white shadow-md' } `}
                style={{ gridColumn: `span ${card.gridStackProperties?.w || 1}` }}
              >
                {card.visualizationType == 'table' ? (
                  <div className='flex justify-between main-table-title items-center'>

                  <div>
                      <h3 className="text-[20px] font-bold text-[#031B15]">{card.title}</h3>
                      <p className='text-[#4F4D55] text-[14px]'>{card.description}</p>
                  </div>
                  
                    <div className='bg-[#027056] flex items-center rounded-[10px] gap-[8px] text-white border border-[#027056] filter-btn'>
                    <button className='text-[14px]'>Filters(1)</button>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5746 1.31723L7.32462 7.56723C7.26657 7.62534 7.19764 7.67144 7.12177 7.70289C7.04589 7.73435 6.96456 7.75053 6.88243 7.75053C6.80029 7.75053 6.71896 7.73435 6.64309 7.70289C6.56722 7.67144 6.49829 7.62534 6.44024 7.56723L0.19024 1.31723C0.0729647 1.19995 0.00708011 1.04089 0.00708011 0.875042C0.0070801 0.70919 0.0729647 0.55013 0.19024 0.432855C0.307516 0.315579 0.466575 0.249695 0.632428 0.249695C0.79828 0.249695 0.95734 0.315579 1.07462 0.432854L6.88243 6.24145L12.6902 0.432854C12.7483 0.374785 12.8172 0.328722 12.8931 0.297296C12.969 0.265869 13.0503 0.249694 13.1324 0.249694C13.2146 0.249694 13.2959 0.265869 13.3717 0.297296C13.4476 0.328722 13.5165 0.374785 13.5746 0.432854C13.6327 0.490923 13.6787 0.559861 13.7102 0.635731C13.7416 0.711602 13.7578 0.79292 13.7578 0.875042C13.7578 0.957164 13.7416 1.03848 13.7102 1.11435C13.6787 1.19022 13.6327 1.25916 13.5746 1.31723Z" fill="#FAFAFA" />
                    </svg>
                  </div>
                  </div>
                ) : (
                    <div className='card-title flex justify-between border-b-1 border-[#F1F1F1]'>
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.25745 11.25C9.25745 11.3983 9.21346 11.5433 9.13105 11.6667C9.04864 11.79 8.93151 11.8861 8.79446 11.9429C8.65742 11.9997 8.50662 12.0145 8.36113 11.9856C8.21565 11.9566 8.08201 11.8852 7.97712 11.7803C7.87223 11.6754 7.8008 11.5418 7.77186 11.3963C7.74292 11.2508 7.75777 11.1 7.81454 10.963C7.8713 10.8259 7.96743 10.7088 8.09077 10.6264C8.21411 10.544 8.35911 10.5 8.50745 10.5C8.70636 10.5 8.89713 10.579 9.03778 10.7197C9.17843 10.8603 9.25745 11.0511 9.25745 11.25ZM8.50745 4.5C7.1287 4.5 6.00745 5.50938 6.00745 6.75V7C6.00745 7.13261 6.06013 7.25979 6.1539 7.35355C6.24766 7.44732 6.37484 7.5 6.50745 7.5C6.64006 7.5 6.76723 7.44732 6.861 7.35355C6.95477 7.25979 7.00745 7.13261 7.00745 7V6.75C7.00745 6.0625 7.68057 5.5 8.50745 5.5C9.33432 5.5 10.0074 6.0625 10.0074 6.75C10.0074 7.4375 9.33432 8 8.50745 8C8.37484 8 8.24766 8.05268 8.1539 8.14645C8.06013 8.24021 8.00745 8.36739 8.00745 8.5V9C8.00745 9.13261 8.06013 9.25979 8.1539 9.35355C8.24766 9.44732 8.37484 9.5 8.50745 9.5C8.64006 9.5 8.76723 9.44732 8.861 9.35355C8.95477 9.25979 9.00745 9.13261 9.00745 9V8.955C10.1474 8.74563 11.0074 7.83625 11.0074 6.75C11.0074 5.50938 9.8862 4.5 8.50745 4.5ZM15.0074 8C15.0074 9.28558 14.6262 10.5423 13.912 11.6112C13.1978 12.6801 12.1826 13.5132 10.9949 14.0052C9.80717 14.4972 8.50024 14.6259 7.23936 14.3751C5.97849 14.1243 4.8203 13.5052 3.91126 12.5962C3.00221 11.6872 2.38315 10.529 2.13234 9.26809C1.88154 8.00721 2.01026 6.70028 2.50223 5.51256C2.9942 4.32484 3.82732 3.30968 4.89624 2.59545C5.96516 1.88122 7.22187 1.5 8.50745 1.5C10.2308 1.50182 11.883 2.18722 13.1016 3.40582C14.3202 4.62441 15.0056 6.27665 15.0074 8ZM14.0074 8C14.0074 6.9122 13.6849 5.84883 13.0805 4.94436C12.4762 4.03989 11.6172 3.33494 10.6122 2.91866C9.60721 2.50238 8.50135 2.39346 7.43445 2.60568C6.36756 2.8179 5.38755 3.34172 4.61836 4.11091C3.84917 4.8801 3.32535 5.86011 3.11313 6.927C2.90091 7.9939 3.00983 9.09977 3.42611 10.1048C3.84239 11.1098 4.54734 11.9687 5.45181 12.5731C6.35628 13.1774 7.41965 13.5 8.50745 13.5C9.96563 13.4983 11.3636 12.9184 12.3947 11.8873C13.4258 10.8562 14.0058 9.45818 14.0074 8Z" fill="#031B15" />
                    </svg>
                  </div>
                )}


                {ChartComponent ? (
                  <ChartComponent query={card.query} />
                ) : (
                  <p className="text-gray-500">Component not found</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>

  );
};

export default Dashboard;
