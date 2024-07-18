# Stock Broker Client Web Dashboard - Frontend

This is the frontend part of the Stock Broker Client Web Dashboard, built with HTML, CSS, and JavaScript. This dashboard allows users to log in, subscribe to stocks, and receive real-time updates on stock prices.

## Features

- **User Login:** Users can log in using their email and password.
- **Stock Subscription:** Users can subscribe to five supported stocks (`GOOG`, `TSLA`, `AMZN`, `META`, `NVDA`).
- **Real-time Updates:** The dashboard updates stock prices in real-time without needing to refresh the page.

## Getting Started

### Prerequisites

- A web browser
- A running backend server (check the backend repository for setup instructions)

### Installation

1. Clone the repository or download the source code.

    ```bash
    git clone <repository_url>
    cd stock-dashboard/public
    ```

2. Ensure you have the backend server running. Refer to the backend setup instructions.

3. Open the `index.html` file in your web browser.

### Files

- `index.html`: The main HTML file that structures the web page.
- `styles.css`: The CSS file that styles the web page.
- `app.js`: The JavaScript file that handles the frontend logic, including user login, stock subscription, and real-time updates.

### How to Use

1. Open `index.html` in your web browser.
2. Enter your email and password, then click "Login".
3. Once logged in, select a stock from the dropdown and click "Subscribe".
4. The subscribed stock will appear with its current price.
5. Stock prices will update in real-time without needing to refresh the page.

### Code Overview

#### index.html

- Contains the structure of the web page, including input fields for login, a dropdown for stock subscription, and a section to display subscribed stocks.

#### styles.css

- Styles the elements on the web page, ensuring a clean and responsive design.

#### app.js

- Handles the user login process, sending credentials to the backend.
- Manages stock subscription by sending selected stock data to the backend.
- Listens for real-time stock price updates from the backend and updates the DOM accordingly.
