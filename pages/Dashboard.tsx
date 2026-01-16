import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Metric } from '../types';

const data = [
  { name: 'Jan', students: 400, placements: 240 },
  { name: 'Feb', students: 300, placements: 139 },
  { name: 'Mar', students: 200, placements: 980 },
  { name: 'Apr', students: 278, placements: 390 },
  { name: 'May', students: 189, placements: 480 },
  { name: 'Jun', students: 239, placements: 380 },
];

const metrics: Metric[] = [
  { label: 'Total Apprentices', value: '2,450', trend: '+12%', color: 'bg-blue-100 text-blue-800' },
  { label: 'Partner Hospitals', value: '145', trend: '+5%', color: 'bg-indigo-100 text-indigo-800' },
  { label: 'Schools Digitalized', value: '32', trend: '+8%', color: 'bg-purple-100 text-purple-800' },
  { label: 'Placement Rate', value: '94%', trend: '+2%', color: 'bg-emerald-100 text-emerald-800' },
];

export const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-brand-dark">Admin Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, Admin</p>
          </div>
          <button className="bg-brand-primary text-white px-4 py-2 rounded text-sm font-bold shadow-md hover:bg-blue-700 transition-colors">Download Report</button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">{metric.label}</p>
              <div className="flex justify-between items-end">
                <span className="text-3xl font-bold text-brand-dark">{metric.value}</span>
                <span className={`text-xs px-2 py-1 rounded font-bold ${metric.color}`}>{metric.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-brand-dark mb-6">Enrollment vs Placements</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{border: 'none', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
                  <Bar dataKey="students" fill="#1e293b" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="placements" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-brand-dark mb-6">Impact Trajectory</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip contentStyle={{border: 'none', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
                  <Line type="monotone" dataKey="placements" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, fill: '#2563eb', strokeWidth: 0 }} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-brand-dark">Recent Partnership Inquiries</h3>
            <span className="text-xs font-bold text-brand-primary cursor-pointer hover:underline">View All</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3 font-semibold">Organization</th>
                  <th className="px-6 py-3 font-semibold">Type</th>
                  <th className="px-6 py-3 font-semibold">Date</th>
                  <th className="px-6 py-3 font-semibold">Status</th>
                  <th className="px-6 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-brand-dark">Lagos Teaching Hospital</td>
                  <td className="px-6 py-4 text-gray-600">Healthcare Inst.</td>
                  <td className="px-6 py-4 text-gray-600">Oct 24, 2023</td>
                  <td className="px-6 py-4"><span className="text-yellow-700 bg-yellow-100 px-2 py-1 rounded font-bold text-xs">Pending</span></td>
                  <td className="px-6 py-4 text-brand-primary font-bold hover:underline cursor-pointer">Review</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-brand-dark">Grace Nursing School</td>
                  <td className="px-6 py-4 text-gray-600">Education</td>
                  <td className="px-6 py-4 text-gray-600">Oct 22, 2023</td>
                  <td className="px-6 py-4"><span className="text-green-700 bg-green-100 px-2 py-1 rounded font-bold text-xs">Approved</span></td>
                  <td className="px-6 py-4 text-brand-primary font-bold hover:underline cursor-pointer">Details</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-brand-dark">Apex Capital</td>
                  <td className="px-6 py-4 text-gray-600">Investor</td>
                  <td className="px-6 py-4 text-gray-600">Oct 21, 2023</td>
                  <td className="px-6 py-4"><span className="text-blue-700 bg-blue-100 px-2 py-1 rounded font-bold text-xs">New</span></td>
                  <td className="px-6 py-4 text-brand-primary font-bold hover:underline cursor-pointer">Review</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};