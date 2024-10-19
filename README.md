## Getting Started

This project uses [pnpm](https://pnpm.io/) as package manager.

First, install dependecies:

```bash
pnpm install
```

Second, run the dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to access the application.

## Feature Requirements and Expectations

- "As an avid fan of the epic series A Song of Ice and Fire, I have a hard time keeping up with all of the characters who lose their heads. As such, I would like to have an application that can help me track which characters from the series are alive or dead."
- Uses https://anapioficeandfire.com/ as a data source
- The Houses resource from the API (https://anapioficeandfire.com/api/houses) is paginated by default to 10 results, for these 10 houses please display a list of all of their Sworn Members grouped by house
- For each Sworn Member display their full name and whether they are alive or dead
- If a character is dead, please display the information provided by the API about their death
- If a house has no Sworn Members, please display the message "This house has no sworn members"

## Project Structure

The project is structured as follows:

- `/app`: This is the Next.js app router folder. It contains the main application code, including pages, components, and API requests.
- `/app/api`: This folder contains the API requests and types for the application.
- `/app/components`: This folder contains reusable components for the application.
- `/app/utils`: This folder contains utility functions for the application.

## Tools Used

- Next.js App Router
- Tanstack Query: For managing async state and caching. This is a great tool for optimizing data fetching and caching.
- Tailwind CSS: CSS framework for styling inline using utility classes. Easy to customize and fast for prototyping.
- TypeScript: for static type checking. Helps catch errors early and improves code quality.

## Follow Up Improvements

- Write components tests
- Improve error handling and user feedback
- Improve documentation
- Handle suspense fallback on search param changes
- Work on mobile responsiveness
