
const InfoTable = () => {

    const data = [
        { id: 1, col1: 'Row 1 Col 1', col2: 'Row 1 Col 2', col3: 'Row 1 Col 3' },
        { id: 2, col1: 'Row 2 Col 1', col2: 'Row 2 Col 2', col3: 'Row 2 Col 3' },
        { id: 3, col1: 'Row 3 Col 1', col2: 'Row 3 Col 2', col3: 'Row 3 Col 3' },
      ];
    return (
        <div className="overflow-x-auto m-8">
          <table className="min-w-full bg-white border-separate border-spacing-y-0">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left bg-sky-200">Header 1</th>
                <th className="px-4 py-2 text-left bg-sky-200">Header 2</th>
                <th className="px-4 py-2 text-left bg-sky-200">Header 3</th>
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
  