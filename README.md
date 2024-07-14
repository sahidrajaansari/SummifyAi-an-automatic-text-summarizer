# SummifyAI - An Automatic Text Summarizer

SummifyAI is an advanced text summarization project that leverages the state-of-the-art Pegasus model to generate concise and accurate summaries of chat data. This project includes model training, API creation, and a web application for user interaction.

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
The SummifyAI project aims to provide an efficient solution for summarizing chat conversations. It utilizes the Pegasus text summarization model, which has been fine-tuned on the Samsum dataset to achieve a ROUGE-1 score of 23%. The project includes a FastAPI-based backend for API services and a Vite-powered React frontend for user interaction.

## Features
- **State-of-the-Art Summarization**: Uses the Pegasus model for high-quality text summarization.
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
- **Development Tools**: Jupyter Notebook (for model testing)

## Installation

### Prerequisites
- Python 3.8 or higher
- Node.js 14 or higher
- MongoDB
- npm (Node Package Manager)

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/SummifyAI-an-Automatic-text-summarizer.git
   cd SummifyAI-an-Automatic-text-summarizer
