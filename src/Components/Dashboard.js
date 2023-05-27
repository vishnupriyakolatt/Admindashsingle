import React from 'react';
import '../Components/Dash.css';
import { ResponsiveBar } from '@nivo/bar';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';

function Dashboard() {
    const data = {
        transactions: [
          { id: 1, account: 'Sales', debit: 25000, credit: 0, month: 'Aug' },
          { id: 2, account: 'Sales', debit: 65000, credit: 0, month: 'Sep' },
          { id: 3, account: 'Sales', debit: 52000, credit: 0, month: 'Aug' },
        ]
      };
      const Datasales = data.transactions.filter(transaction => transaction.account === 'Sales');
      
     
      

  return (
    <div>
 
      <div className='container'>
        <div className='column'>
          <h2 className='head'>Accounts Dashboard</h2>
          <table className='design'>
            <tr>
              <th className='heading'>Accounts</th>
              <th className='heading'>Debits</th>
              <th className='heading'>Credits</th>
            </tr>
            <tr>
              <td align='center'>sales</td>
              <td align='center'>520000</td>
              <td align='center'>0</td>
            </tr>
            <tr>
              <td align='center'>Purchase</td>
              <td align='center'>0</td>
              <td align='center'>520000</td>
            </tr>
            <tr>
              <td align='center'>Assets</td>
              <td align='center'>25000</td>
              <td align='center'>10000</td>
            </tr>
          </table>
        </div>
        <div className='column'>
       <div>
       <h2 className='head'>Account Balance</h2>
       </div>
       
       <BarChart width={600} height={400} data={Datasales}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="debit" fill="#8884d8" />
      </BarChart>
       
        
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
