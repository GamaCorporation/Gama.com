//    const words = document.querySelectorAll('.cd-words-wrapper b');
//     let currentIndex = 0;
 
//     function switchWord() {
//       words[currentIndex].classList.remove('is-visible');
//       words[currentIndex].classList.add('is-hidden');
//       currentIndex = (currentIndex + 1) % words.length;
//       words[currentIndex].classList.remove('is-hidden');
//       words[currentIndex].classList.add('is-visible');
//     }
 
//     setInterval(switchWord, 2000); 

// TYPEWRITER

const words = ["Tecnologias", "Inovação", "Modernidade"];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

const wordElement = document.querySelector('.cd-words-wrapper b');

function type() {
    const currentWord = words[currentWordIndex];
    const displayedText = currentWord.substring(0, currentCharIndex);

    wordElement.textContent = displayedText;

    if (!isDeleting) {
        if (currentCharIndex < currentWord.length) {
            currentCharIndex++;
            setTimeout(type, 150);
        } else {
            isDeleting = true;
            setTimeout(type, 1000); // Espera antes de começar a apagar
        }
    } else {
        if (currentCharIndex > 0) {
            currentCharIndex--;
            setTimeout(type, 100);
        } else {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(type, 200);
        }
    }
}

type();

