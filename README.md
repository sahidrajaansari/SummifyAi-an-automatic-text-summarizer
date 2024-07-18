# SummifyAI - Advanced Text Summarizer

SummifyAI is an advanced text summarization tool utilizing the Pegasus model to generate concise and coherent summaries for various types of texts, including general content and chat conversations. The project features a comprehensive system with model training, API development, and a user-friendly web application.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo
Explore the SummifyAI application using the following credentials:

**Email:**  
```sh
kimos89467@reebsd.com
```

**Password:**  
```sh
asdfghjkl012
```

### Live Website
Access the live SummifyAI application [here](https://your-website-url.com).

### Demo Video
Watch the demo video of SummifyAI [here](https://youtu.be/_7cHaofl5uA).

[![Watch the video](./Screenshot/homeDark.png)](https://youtu.be/_7cHaofl5uA)

## Overview
SummifyAI leverages the Pegasus model, fine-tuned on the Samsum dataset with a ROUGE-1 score of 23%, to provide accurate text summaries. The system includes a FastAPI backend and a Vite React frontend for a smooth user experience.

## Features
- **High-Quality Summarization:** Powered by the Pegasus model.
- **Versatile Summarization:** Supports general and chat text.
- **API Management:** FastAPI.
- **Modern UI:** Vite React with Context API.
- **State Management:** Context API.
- **HTTP Requests:** Axios.
- **UI Components:** Shadcn/ui.
- **Data Storage:** MongoDB.
- **User Authentication:** Clerk.

## Tech Stack
- **Backend:** Python, FastAPI, Node.js
- **Frontend:** Vite React, Context API, Axios, Shadcn/ui
- **Model:** Pegasus Text Summarizer
- **Database:** MongoDB
- **Authentication:** Clerk
- **Development Tools:** Jupyter Notebook, Postman

## Screenshots

### Homepage
![Homepage Screenshot](./Screenshot/homeLight.png)

### Sign In
![Sign In Screenshot](./Screenshot/Signin.png)

### Summary Page
![Summary Page Screenshot](./Screenshot/generateSummary.png)

### Dashboard
![Dashboard Screenshot](./Screenshot/Dashboard.png)

## Installation

### Prerequisites
- Python 3.8+
- Node.js 14+
- MongoDB
- npm

### Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/SummifyAI-an-Automatic-text-summarizer.git
   cd SummifyAI-an-Automatic-text-summarizer
   ```

2. **Frontend Setup**
   - Create a `.env` file in the `Frontend` directory with:
     ```
     VITE_MODEL_URL=<URL of the backend API>
     VITE_CLERK_PUBLISHABLE_KEY=<Your Clerk Publishable Key>
     ```
   - Install dependencies and start the server:
     ```sh
     cd Frontend
     npm install
     npm run dev
     ```

3. **Backend Setup**
   - Create a `.env` file in the `Backend` directory with:
     ```
     MONGODB_URI=<Your MongoDB URI>
     PORT=<Port number>
     MODEL_API_URL=<URL of the model API>
     ```
   - Install dependencies and start the server:
     ```sh
     cd Backend
     npm install
     node src/index.js
     ```

4. **Model Setup**
   - Create and activate a virtual environment:
     ```sh
     python -m venv venv
     source venv/bin/activate   # On Windows: venv\Scripts\activate
     ```
   - Install model dependencies:
     ```sh
     pip install -r requirements.txt
     ```
   - Start the model server:
     ```sh
     python app.py
     ```

## Usage
1. Ensure both frontend and backend servers are running.
2. Navigate to `http://localhost:3000` in your browser.
3. Authenticate using Clerk and start summarizing text data.

## Project Structure
```
SummifyAI-an-Automatic-text-summarizer/
│
├── Backend/
│   ├── src/
│   │   ├── controller/      # Request handling
│   │   ├── db/              # Database setup
│   │   ├── models/          # Data models
│   │   ├── router/          # API routes
│   │   ├── app.js           # App setup
│   │   └── index.js         # Server entry point
│   └── .env                 # Backend environment variables
│
├── Frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── Context/        # Context API
│   │   ├── Services/       # API services
│   │   ├── pages/          # App pages
│   │   ├── App.jsx         # Main app file
│   │   └── index.js        # Entry point
│   ├── public/             # Public assets
│   ├── .env                 # Frontend environment variables
│   ├── package.json        # Dependencies
│   └── ...
│
├── Model/
│   ├── src/
│   │   ├── textSummarizer/
│   │   │   ├── config/      # Config files
│   │   │   ├── constant/    # Constants
│   │   │   ├── entity/      # Data schemas
│   │   │   ├── logging/     # Logging setup
│   │   │   ├── pipeline/    # Data pipeline
│   │   │   └── utils/       # Utilities
│   ├── app.py               # Model API
│   ├── main.py              # Training script
│   └── research/           # Model testing notebooks
│
└── README.md               # Project documentation
```

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
