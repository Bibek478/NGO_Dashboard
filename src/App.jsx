import React, { useState } from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const menuItems = [
    { label: 'Overview', active: true },
    { label: 'View Submissions' },
    { label: 'Map View' },
    { label: 'Excel Export' },
    { label: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between border-b">
          <div className={`flex items-center ${!sidebarOpen && 'justify-center'}`}>
            <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            {sidebarOpen && <span className="ml-2 font-semibold text-lg">Admin Panel</span>}
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {sidebarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        <nav className="flex-1 p-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center p-3 rounded-lg mb-2 
                ${item.active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}
                ${!sidebarOpen && 'justify-center'}`}
            >
              <span className={!sidebarOpen ? 'sr-only' : 'ml-3'}>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h1>
            
            <div className="flex items-center space-x-6">
              <input
                type="date"
                value={selectedDate.toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
              <div className="relative">
                <button className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded-lg">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Admin</span>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              { label: 'Total Submissions', value: '1,234', color: 'blue' },
              { label: 'Total Users', value: '567', color: 'green' },
              { label: 'Total Images', value: '2,345', color: 'purple' },
              { label: "Today's Submissions", value: '42', color: 'orange' }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              >
                <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
                <p className={`text-2xl font-semibold mt-2 text-${stat.color}-600`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Submissions</h2>
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Image</th>
                    <th className="text-left py-3 px-4">User ID</th>
                    <th className="text-left py-3 px-4">Type</th>
                    <th className="text-left py-3 px-4">Date & Time</th>
                    <th className="text-left py-3 px-4">Location</th>
                    <th className="text-left py-3 px-4">Scheme</th>
                    <th className="text-left py-3 px-4">Block</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3].map((_, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <img
                          src="https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?w=50&h=50&fit=crop"
                          alt="Submission"
                          className="w-10 h-10 rounded object-cover"
                        />
                      </td>
                      <td className="py-3 px-4">USER_{index + 1}</td>
                      <td className="py-3 px-4">Pump Operator</td>
                      <td className="py-3 px-4">2024-03-10 09:30</td>
                      <td className="py-3 px-4">12.34, 56.78</td>
                      <td className="py-3 px-4">Scheme A</td>
                      <td className="py-3 px-4">Block {index + 1}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;