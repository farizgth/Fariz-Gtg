// Data materi
const materiContent = `
    <h4>Pengenalan Energi Terbarukan</h4>
    <p>Energi terbarukan adalah sumber energi yang dapat diperbarui secara alami dan berkelanjutan. Beberapa contoh energi terbarukan meliputi:</p>
    <ul>
        <li>Energi Surya</li>
        <li>Energi Angin</li>
        <li>Energi Air</li>
        <li>Energi Biomassa</li>
        <li>Energi Panas Bumi</li>
    </ul>
    <p>Mari kita pelajari lebih lanjut tentang masing-masing jenis energi terbarukan ini.</p>
`;

// Data quiz
const quizData = [
    {
        question: "Manakah yang bukan merupakan sumber energi terbarukan?",
        options: ["Matahari", "Angin", "Air", "Batu bara"],
        correctAnswer: 3
    },
    {
        question: "Apa keuntungan utama dari energi terbarukan?",
        options: ["Murah", "Tidak akan habis", "Mudah diakses", "Tidak memerlukan teknologi"],
        correctAnswer: 1
    },
    {
        question: "Energi apakah yang memanfaatkan panas dari dalam bumi?",
        options: ["Energi surya", "Energi angin", "Energi panas bumi", "Energi air"],
        correctAnswer: 2
    }
];

// Fungsi untuk menampilkan materi
function tampilkanMateri() {
    document.getElementById('materi-content').innerHTML = materiContent;
}

// Fungsi untuk menampilkan quiz
function tampilkanQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    
    quizData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${item.question}</p>
            ${item.options.map((option, optionIndex) => `
                <label>
                    <input type="radio" name="q${index}" value="${optionIndex}">
                    ${option}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
}

// Fungsi untuk menilai quiz
function nilaiQuiz() {
    let score = 0;
    quizData.forEach((item, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === item.correctAnswer) {
            score++;
        }
    });
    
    const percentage = (score / quizData.length) * 100;
    document.getElementById('hasil-penilaian').innerHTML = `
        <p>Skor Anda: ${score} dari ${quizData.length}</p>
        <p>Persentase: ${percentage.toFixed(2)}%</p>
    `;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    tampilkanMateri();
    tampilkanQuiz();
    
    document.getElementById('submit-quiz').addEventListener('click', nilaiQuiz);
});