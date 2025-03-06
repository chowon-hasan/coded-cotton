export default function SizeChart() {
    return (
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Size Chart</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Size</th>
              <th className="border border-gray-300 px-4 py-2">Chest (inches)</th>
              <th className="border border-gray-300 px-4 py-2">Length (inches)</th>
              <th className="border border-gray-300 px-4 py-2">Sleeve (inches)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">S</td>
              <td className="border border-gray-300 px-4 py-2">36-38</td>
              <td className="border border-gray-300 px-4 py-2">27</td>
              <td className="border border-gray-300 px-4 py-2">8</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">M</td>
              <td className="border border-gray-300 px-4 py-2">38-40</td>
              <td className="border border-gray-300 px-4 py-2">28</td>
              <td className="border border-gray-300 px-4 py-2">8.5</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">L</td>
              <td className="border border-gray-300 px-4 py-2">40-42</td>
              <td className="border border-gray-300 px-4 py-2">29</td>
              <td className="border border-gray-300 px-4 py-2">9</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">XL</td>
              <td className="border border-gray-300 px-4 py-2">42-44</td>
              <td className="border border-gray-300 px-4 py-2">30</td>
              <td className="border border-gray-300 px-4 py-2">9.5</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  