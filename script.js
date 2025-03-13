document.addEventListener('DOMContentLoaded', () => {
  const commandInput = document.getElementById('commandInput');
  const output = document.getElementById('output');

  // Command handler for input
  commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = commandInput.value.trim().toLowerCase();
      processCommand(command);
      commandInput.value = ''; // Clear input after Enter
    }
  });

  // Function to process commands
  function processCommand(command) {
    output.innerHTML = `<p>Muhammad Awais\\Portfolio> ${command}</p>`;
    switch (command) {
      case 'help':
        output.innerHTML += `
                    <p>Available commands:</p>
                    <p>about - Show information about me</p>
                    <p>education - Display my education details</p>
                    <p>projects - List my projects</p>
                    <p>skills - Show my technical skills</p>
                    <p>clear - Clear the terminal</p>
                `;
        break;

      case 'about':
        output.innerHTML += `
                    <p>MUHAMMAD AWAIS</p>
                    <p>Email: awais14940@gmail.com | Mobile: +923269872844</p>
                    <p>Residence: Rawalpindi, Pakistan</p>
                    <p>Links: <a href="https://linkedin.com/in/muhammad-awais-124" target="_blank">LinkedIn</a> | <a href="https://github.com/awais-124" target="_blank">GitHub</a></p>
                    <p>Assalam u Alaikum (Greetings)! I'm Muhammad Awais, a final-year Computer Science student at Capital University of Science and Technology (CUST), Islamabad, with a deep passion for tech innovation.</p>
                    <p>Currently, I'm working on my Final Year Project, exploring Large Language Models (LLMs), Generative AI, and Flutter to create impactful solutions. I’m a dedicated learner with a hardworking mindset—believing that consistent effort leads to big milestones—and I put this into practice daily.</p>
                    <p>I excel at crafting solutions by analyzing data and delivering clear visual insights. My experience spans web and app development, with several projects showcased on my GitHub (awais-124). Competing in events like ICPC has sharpened my problem-solving skills and boosted my confidence.</p>
                    <p>With a solid foundation in Computer Science from CUST, I’m eager to contribute as a Software Engineer, Data Analyst, or AI Engineer. If you’re looking for a committed team member to add value while growing, let’s connect! I’m open to part-time roles alongside my studies.</p>
                `;
        break;

      case 'education':
        output.innerHTML += `
                    <p>EDUCATION</p>
                    <p>Capital University of Science and Technology</p>
                    <p>Bachelors in Computer Science (CGPA: 3.93/4)</p>
                    <p>Received Dean's Honor Role Certificate for 5 consecutive semesters.</p>
                `;
        break;

      case 'projects':
        output.innerHTML += `
            <p>PROJECTS</p>
            <strong><p>A Secure Messaging Application | CipherChat | <a href="#" target="_blank">LINK</a></p></strong>
            <p>May 2024 - June 2024</p>
            <p>- Developed a secure messaging Android app with real-time messaging (<100ms response time).</p>
            <p>- Integrated end-to-end encryption (RSA, AES, SHA-256) for 100% secure communication.</p>
            <p>- Built with React Native and Firebase.</p>
            <strong><p>Network Intrusion Detection System using ML | <a href="https://github.com/awais-124/intrusion-detection-using-ml" target="_blank">LINK</a></p></strong>
            <p>December 2024</p>
            <p>- Trained ML models (Logistic Regression, Random Forest, Gradient Boosting) for intrusion detection.</p>
            <p>- Visualized results with confusion matrices and ROC curves.</p>
            <strong><p>JobSpark - A Job Portal | <a href="https://github.com/awais-124/JobSpark---PHP-SQL" target="_blank">LINK</a></p></strong>
            <p>- Built a web application to connect job seekers and employers with an intuitive interface.</p>
            <p>- Features include job listings, user registration/login, employer module, and admin panel.</p>
            <p>- Developed using PHP, MySQL, CSS, and JavaScript.</p>
            <strong><p>Fine-Tuning DistillBERT for Sentiment Analysis | <a href="https://github.com/awais-124/fine-tuning-distilbert" target="_blank">LINK</a></p></strong>
            <p>- Fine-tuned DistillBERT to classify airline tweets into positive, neutral, and negative sentiments.</p>
            <p>- Included data preprocessing, tokenization, training, and evaluation with accuracy and F1-score metrics.</p>
            <p>- Built with Python, TensorFlow, and Hugging Face Transformers.</p>
        `;
        break;

      case 'skills':
        output.innerHTML += `
                    <p>SKILLS</p>
                    <p>Languages:</p>
                    <p>- JavaScript, C++, Python, SQL, PHP, Assembly</p>
                    <p>Frameworks & Libraries:</p>
                    <p>- React Native, ReactJS, NodeJS, Bootstrap, TailwindCSS, STL C++, Numpy, Pandas, Scikit-learn, Matplotlib, NLTK, Seaborn, TensorFlow, Laravel</p>
                    <p>Platforms:</p>
                    <p>- Android Studio, Firebase, Google Colab, Wordpress</p>
                    <p>Tools:</p>
                    <p>- VS Code, Xampp, Git, Postman, Microsoft Visual Studio, Cisco Packet Tracer, Github</p>
                    <p>Design & Productivity:</p>
                    <p>- Figma, Adobe Illustrator, Microsoft Office (Excel, PowerPoint, Word)</p>
                    <p>Competitive Programming:</p>
                    <p>- Problem-solving on Hackerrank, Leetcode, Kattis, Codeforces</p>
                    <p>Core Computer Science:</p>
                    <p>- Programming, OOP, Data Structures, Algorithms, Computer Networks, Operating Systems, Information Security, AI, Machine Learning, NLP, Database Systems</p>
                `;
        break;

      case 'clear':
        output.innerHTML = `<p>Type a command or use the sidebar buttons.</p>`;
        break;

      default:
        output.innerHTML += `<p>'${command}' is not recognized as a command. Type 'help' or use the sidebar.</p>`;
    }
    output.scrollTop = output.scrollHeight; // Auto-scroll to bottom
  }

  // Function for button clicks
  window.executeCommand = function (command) {
    commandInput.value = command; // Reflect command in input
    processCommand(command);
    commandInput.value = ''; // Clear input after execution
    commandInput.focus(); // Keep input focused
  };
});
