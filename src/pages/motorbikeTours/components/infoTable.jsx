
const InfoTable = () => {

    const data = [
        { id: 1, col1: 'Number of people	', col2: '1 person – 10 people max (road). 1 – 5 people max (off-road)', col3: '2 – 10 per guide (road). 2 – 5 per guide (off-road)' },
        { id: 2, col1: 'Tour Price	', col2: '1 rider - $140 per day (non inclusive). Each extra rider +$15 per day	', col3: '$200 per day (all inclusive CB 500X).' },
        { id: 3, col1: 'Route style	', col2: 'We plan or you plan, it doesnt matter!	', col3: 'Set route' },
      ];
    return (
        <div className="overflow-x-auto m-8">
          <table className="min-w-full bg-white border-separate border-spacing-y-0">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left bg-sky-200">Tour package	</th>
                <th className="px-4 py-2 text-left bg-sky-200">Rent-a-Guide	</th>
                <th className="px-4 py-2 text-left bg-sky-200">Set tour
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={row.id}
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                  } border-b border-gray-300`}
                >
                  <td className="px-4 py-2" style={{ width: '12.5%' }}>
                    {row.col1}
                  </td>
                  <td className="px-4 py-2" style={{ width: '50%' }}>
                    {row.col2}
                  </td>
                  <td className="px-4 py-2" style={{ width: '37.5%' }}>
                    {row.col3}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  };
  
  export default InfoTable;
  