# SummifyAI - An Automatic Text Summarizer

SummifyAI is an advanced text summarization project that leverages the state-of-the-art Pegasus model to generate concise and accurate summaries for various types of text, including general content and chat conversations. This project includes model training, API creation, and a web application for user interaction.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview
The SummifyAI project aims to provide an efficient solution for summarizing various types of text, including chat conversations and general content. It utilizes the Pegasus text summarization model, which has been fine-tuned on the Samsum dataset to achieve a ROUGE-1 score of 23%. The project includes a FastAPI-based backend for API services and a Vite-powered React frontend for user interaction.

## Features
- **State-of-the-Art Summarization**: Uses the Pegasus model for high-quality text summarization.
- **General and Chat Summarization**: Capable of summarizing both general text content and chat conversations.
- **API Services**: FastAPI backend for summarization requests.
- **Responsive Web Application**: Built with Vite React, featuring a modern UI and smooth user experience.
- **State Management**: Utilizes Context API for efficient state management.
- **HTTP Request Handling**: Axios for seamless HTTP requests.
- **UI Components**: Shadcn/ui for ready-to-use UI components.
- **Database Integration**: MongoDB for data storage.
- **User Authentication**: Clerk for frontend authentication.

## Tech Stack
- **Backend**: Python, FastAPI, Node.js
- **Frontend**: Vite React, Context API, Axios, Shadcn/ui
- **Model**: Pegasus Text Summarizer
- **Database**: MongoDB
- **Authentication**: Clerk
- **Development Tools**: Jupyter Notebook, Postman(for model testing)

## Installation

### Prerequisites
- Python 3.8 or higher
- Node.js 14 or higher
- MongoDB
- npm (Node Package Manager)

### Setup

Follow these steps to set up the project for development:

1. **Clone the Repository**
   Clone the repository to your local machine:
   ```sh
   git clone https://github.com/your-username/SummifyAI-an-Automatic-text-summarizer.git
   cd SummifyAI-an-Automatic-text-summarizer
   ```

2. **Frontend Setup**
   Navigate to the `Frontend` directory and set up the environment variables:
   - Create a `.env` file with the following variables:
     ```
     VITE_MODEL_URL=<URL of the backend API>
     VITE_CLERK_PUBLISHABLE_KEY=<Your Clerk Publishable Key>
     ```
   - Install dependencies and start the development server:
     ```sh
     cd Frontend
     npm install
     npm run dev
     ```

3. **Backend Setup**
   Navigate to the root of the repository and set up the environment variables:
   - Create a `.env` file with the following variables:
     ```
     MONGODB_URI=<Your MongoDB URI>
     PORT=<Port number for the backend server>
     MODEL_API_URL=<URL of the model API>
     ```
   - Install dependencies and start the backend server:
     ```sh
     npm install
     node src/index.js
     ```

4. **Model Setup**
   Set up the model environment and start the model server:
   - Create a virtual environment and activate it:
     ```sh
     python -m venv venv
     source venv/bin/activate   # On Windows: venv\Scripts\activate
     ```
   - Install the model dependencies:
     ```sh
     pip install -r requirements.txt
     ```
   - Run the model server:
     ```sh
     python app.py
     ```
