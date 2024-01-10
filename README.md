# Survey App

This is a React-based survey application with a timer, a stepper, and additional pages for registration, result, restart survey.

## Features

- Multi-step survey with a progress stepper.
- Timer to track the duration of the survey.
- Dynamic content loading based on the current step.
- Navigation between steps with a "Next" button.
- Additional pages for registration, result.
- Automatic submission and redirection to the result page on completion.
- Restart survey if needed and go to homepage.

## Getting Started

Follow the steps below to set up and run the project locally:

### Prerequisites

- Node.js minimum v16 installed on your machine.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/garsetayusuf/survey-app.git

   ```

2. Change the directory

   ```bash
   cd survey-app

   ```

3. Install the dependencies:

   ```bash
   npm install

   ```

4. Start development

   ```bash
   npm run start

   ```

5. Open your browser and visit http://localhost:3000 to view the survey app.

## Survey Configuration

- Default configuration 10 second
- Go to pages > index

  ```bash
  const duration = 10; (change duration)
  ```

## Tech Stack

**Client:** React, TailwindCSS
