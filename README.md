
# Quizart
Quizart is an interactive quiz game built with **React** + **Vite** that tests your knowledge of art history. 
Players can choose between **Artists** or **Movements** as a quiz mode and answer questions by flipping cards with artwork on them.

**Live Demo:** [https://dtavaresm.github.io/Quizart](https://dtavaresm.github.io/Quizart)

The game dynamically generates questions and options, ensuring a balanced mix without repeating the same artist or movement more than twice. At the end of the quiz, players see their score and can review the artworks with details.

### Features
- Interactive **flippable cards** with smooth 3D effects and dynamic shadows.
- Two game modes:
	- **Artists** → Guess the artist of the artwork.
	- **Movements** → Guess the artistic movement.
- Randomized and balanced question sets.
- End screen with score, performance message, and artwork review grid.
- Responsive design (mobile and desktop).
- Built with **React + Vite** for fast development and hot reloading.
- Styled with **TailwindCSS** for modern, responsive UI.

## How to Play
**1.** Start the app and select **Artists** or **Movements**.

**2.** A card with artwork will appear.

**3.** Choose the correct answer from the options.

**4.** Your choice flips the card, revealing details.

**5.** Continue through all 12 questions.

**6.** At the end, view your **score**, performance message, and review the artworks.

## Getting Started
**Prerequisites**
Make sure you have installed:
- [Node.js](https://nodejs.org/) (>= 16)
- npm or yarn
#### Installation
```bash
# Clone the repository
git clone https://github.com/dtavaresm/Quizart.git
```
```bash
# Enter project folder 
cd quizart
```
```bash
# Install dependencies
npm install
```
#### Running the Development Server
```bash
npm run dev
```
This will start the Vite development server. Open the URL from your terminal (usually `http://localhost:5173`) in your browser.
#### Build for Production
```bash
npm run build
```
#### Preview Production Build
```bash
npm run preview
```

## Technologies Used
- React 19.1.1
- Vite
- TailwindCSS

## License
This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it as long as the license is included.

---
**Author**
##### **Débora Machado**  
GitHub: [@dtavaresm](https://github.com/dtavaresm)  