import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { CSVLink } from 'react-csv'
import DashboardHeader from './DashboardHeader'
import Footer from './Footer'

const MiniStatement = () => {
  const loggeduser = JSON.parse(localStorage.getItem('loggedUser'));
  const [recentTransactions, setRecentTransactions] = useState([]);
  const headers = [

    { label: "Transaction ID", key: "transactionid" },
    { label: "Account No", key: "accNo" },
    { label: "Date of Transaction", key: "dateOfTransaction" },
    { label: "Description", key: "transactionType" },
    { label: "Credit", key: "depositAmount" },
    { label: "Debit", key: "withdrawalAmount" },
    { label: "Closing Balance", key: "balance" }
  ]


  // const load = () => {
    
    // console.log(loggeduser);
    useEffect(() => {
      axios.get(`http://localhost:8080/banktransactions/accno?accno=${loggeduser.accountno}`)
      .then(response => {
        console.log(response.data)
        setRecentTransactions(response.data)
      })
      .catch(error => console.log(error))  
    })
    
    
  
      // }




  const downloadAsCsv = {
    'data': recentTransactions,
    'headers': headers,
    'filename': 'Recent Transactions.csv'
  }


  return (
    <div  >

      <DashboardHeader />
      
      <Container className='mt-3 pt-3' style={{ backgroundColor: '#F4F0E8',  borderRadius: '5px' }} >
      <div>
        
      <h4 className="d-flex justify-content-start" > Please find your recent transactions for your account No. {loggeduser.accountno} </h4>  
      
        <div className='m-3 d-flex justify-content-end' >
        {/* <Button className='me-3' onClick={load}>Show</Button> */}
        <Button>
        <CSVLink style={{ textDecoration: 'none', color: 'white' }} {...downloadAsCsv} >Export as CSV</CSVLink>
        </Button>
        </div>
        </div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Account No</th>
              <th>Date Of Transaction</th>
              <th>Description</th>
              <th>Withdrawal Amount</th>
              <th>Deposit Amount</th>
              <th>Closing Balance</th>
            </tr>
          </thead>
          <tbody>
            {

              recentTransactions.map(recentTransaction =>




                <tr key={recentTransaction.transactionid} >
                  <td>{recentTransaction.transactionid}</td>
                  <td>{recentTransaction.accNo}</td>
                  <td>{recentTransaction.dateOfTransaction}</td>
                  <td>{recentTransaction.transactionType}</td>
                  <td>{recentTransaction.withdrawalAmount}</td>
                  <td>{recentTransaction.depositAmount}</td>
                  <td>{recentTransaction.balance}</td>
                </tr>

              )}
          </tbody>
        </Table>
      </Container>

      <Footer />
    </div>
  )
}

export default MiniStatement