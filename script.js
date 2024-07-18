document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'http://localhost:3000/companies';
    const companySelect = document.getElementById('companySelect');
    const accountSelect = document.getElementById('accountSelect');
    const transactionTable = document.getElementById('transactionTable');
    const balanceElement = document.getElementById('balance');
  
    let companies = [];
    let transactions = [];
  
    // Fetch companies and transactions
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        companies = data;
        populateSelects(companies);
        transactions = getAllTransactions(companies);
        displayTransactions(transactions);
        updateBalance(transactions);
      });
  
    // Populate company and account select options
    function populateSelects(companies) {
      companies.forEach(company => {
        const companyOption = document.createElement('option');
        companyOption.value = company.company_name;
        companyOption.textContent = company.company_name;
        companySelect.appendChild(companyOption);
  
        company.accounts.forEach(account => {
          const accountOption = document.createElement('option');
          accountOption.value = account.account_number;
          accountOption.textContent = account.account_number;
          accountSelect.appendChild(accountOption);
        });
      });
    }
  
    // Get all transactions
    function getAllTransactions(companies) {
      return companies.flatMap(company =>
        company.accounts.flatMap(account =>
          account.transactions.map(transaction => ({
            ...transaction,
            account_number: account.account_number
          }))
        )
      );
    }
  
    // Display transactions in the table
    function displayTransactions(transactions) {
      transactionTable.innerHTML = '';
      transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${new Date(transaction.datetime).toLocaleString()}</td>
          <td>${transaction.credit > 0 ? `₹ ${transaction.credit.toFixed(2)}` : ''}</td>
          <td>${transaction.credit < 0 ? `₹ ${Math.abs(transaction.credit).toFixed(2)}` : ''}</td>
          <td>${transaction.transaction_number}</td>
          <td>${transaction.account_number}</td>
        `;
        transactionTable.appendChild(row);
      });
    }
  
    // Update balance
    function updateBalance(transactions) {
      const balance = transactions.reduce((total, transaction) => total + transaction.credit, 0);
      balanceElement.textContent = `₹ ${balance.toFixed(2)}`;
    }
  
    // Filter transactions by company
    companySelect.addEventListener('change', function () {
      const selectedCompany = this.value;
      if (selectedCompany) {
        const company = companies.find(company => company.company_name === selectedCompany);
        transactions = getAllTransactions([company]);
      } else {
        transactions = getAllTransactions(companies);
      }
      displayTransactions(transactions);
      updateBalance(transactions);
    });
  
    // Filter transactions by account
    accountSelect.addEventListener('change', function () {
      const selectedAccount = this.value;
      if (selectedAccount) {
        transactions = getAllTransactions(companies).filter(transaction => transaction.account_number === selectedAccount);
      } else {
        transactions = getAllTransactions(companies);
      }
      displayTransactions(transactions);
      updateBalance(transactions);
    });
  });
  