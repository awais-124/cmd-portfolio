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
    let response = '';
    switch (command) {
      case 'help':
        response = `
                    <p>Available commands:</p>
                    <p>about - Show information about me</p>
                    <p>education - Display my education details</p>
                    <p>projects - List my projects</p>
                    <p>skills - Show my technical skills</p>
                    <p>clear - Clear the terminal</p>
                `;
        break;

      case 'about':
        response = `
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
        response = `
                    <p>EDUCATION</p>
                    <p>Capital University of Science and Technology</p>
                    <p>Bachelors in Computer Science (CGPA: 3.93/4)</p>
                    <p>Received Dean's Honor Role Certificate for 5 consecutive semesters.</p>
                `;
        break;

      case 'projects':
        response = `
                <p>PROJECTS</p>
                <br/>
                <strong><p>1. A Secure Messaging Application | CipherChat | <a href="https://github.com/awais-124/react-native-chat-app" target="_blank">LINK</a></p></strong>
                <p>May 2024 - June 2024</p>
                <p>- Purpose: Built a secure, real-time messaging Android app to ensure private communication.</p>
                <p>- Features: Real-time messaging with <100ms response time, end-to-end encryption using RSA, AES, and SHA-256 for 100% secure data transfer.</p>
                <p>- Tech Stack: React Native, Firebase (for backend and real-time database).</p>
                <p>- Outcome: Successfully tested with 50+ users, achieving zero security breaches and a smooth UI for encryption steps.</p>
                <br/><br/>
                <strong><p>2. Network Intrusion Detection System using ML | <a href="https://github.com/awais-124/intrusion-detection-using-ml" target="_blank">LINK</a></p></strong>
                <p>December 2024</p>
                <p>- Purpose: Developed an ML-based system to detect network intrusions as a semester project.</p>
                <p>- Features: Preprocessed network data (handling duplicates, outliers), trained models like Logistic Regression, Random Forest, and Gradient Boosting.</p>
                <p>- Evaluation: Visualized performance with confusion matrices and ROC curves, achieving high accuracy in identifying intrusions.</p>
                <p>- Tech Stack: Python, Scikit-learn, Matplotlib, Pandas.</p>
                <p>- Outcome: Presented findings with clear insights, demonstrating ML expertise.</p>
                <br/><br/>
                <strong><p>3. JobSpark - A Job Portal | <a href="https://github.com/awais-124/JobSpark---PHP-SQL" target="_blank">LINK</a></p></strong>
                <p>Oct 2024 - January 2025</p>
                <p>- Purpose: Created a web platform to connect job seekers and employers seamlessly.</p>
                <p>- Features: Job listings, user registration/login, employer job posting module, admin panel for managing categories and users.</p>
                <p>- Tech Stack: PHP, MySQL (database), CSS (styling), JavaScript (interactivity).</p>
                <p>- Highlights: Intuitive UI with reusable components (e.g., navbars, modals), supported file uploads for resumes.</p>
                <p>- Outcome: Fully functional portal with a structured backend, deployable via XAMPP.</p>
                <br/><br/>
                <strong><p>4. Fine-Tuning DistillBERT for Sentiment Analysis | <a href="https://github.com/awais-124/fine-tuning-distilbert" target="_blank">LINK</a></p></strong>
                <p>January 2025</p>
                <p>- Purpose: Fine-tuned DistillBERT to classify airline tweets into positive, neutral, and negative sentiments.</p>
                <p>- Features: Data preprocessing (lowercase, removing columns), tokenization with DistilBertTokenizer, trained using TensorFlow.</p>
                <p>- Evaluation: Measured accuracy, precision, recall, and F1-score; visualized word frequency with a Word Cloud.</p>
                <p>- Tech Stack: Python, TensorFlow, Hugging Face Transformers, Pandas, NLTK, Matplotlib, Plotly.</p>
                <p>- Outcome: Achieved robust sentiment classification, showcasing NLP and ML skills.</p>
            `;
        break;

      case 'skills':
        response = `
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
        response = `<p>Type a command or use the sidebar buttons.</p>`;
        break;

      default:
        response = `<p>'${command}' is not recognized as a command. Type 'help' or use the sidebar.</p>`;
    }
    typeResponse(response); // Trigger typing animation
  }

  // Typing animation function with clickable links
  function typeResponse(html) {
    // Set the full HTML structure immediately
    output.innerHTML += `<div class="typing-container">${html}</div>`;
    const container = output.querySelector('.typing-container:last-child');
    const elements = container.querySelectorAll('p, strong'); // Target all <p> and <strong>

    elements.forEach((element, index) => {
      // Store original HTML (including <a> tags)
      const originalHTML = element.innerHTML;
      element.innerHTML = ''; // Clear content for typing

      // Extract text nodes and <a> tags separately
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = originalHTML;
      const children = Array.from(tempDiv.childNodes);
      let currentText = '';
      let i = 0;
      const speed = 20; // Fast typing speed (20ms per character)

      const type = () => {
        if (i < children.length) {
          const node = children[i];
          if (node.nodeType === Node.TEXT_NODE) {
            // Type text content character-by-character
            const text = node.textContent;
            let j = 0;
            const textInterval = setInterval(() => {
              if (j < text.length) {
                currentText += text.charAt(j);
                element.innerHTML =
                  currentText +
                  children
                    .slice(i + 1)
                    .map((n) => n.outerHTML || n.textContent)
                    .join('');
                j++;
                output.scrollTop = output.scrollHeight;
              } else {
                clearInterval(textInterval);
                i++;
                type(); // Move to next node
              }
            }, speed);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Append HTML elements (like <a>) instantly
            currentText += node.outerHTML;
            element.innerHTML =
              currentText +
              children
                .slice(i + 1)
                .map((n) => n.outerHTML || n.textContent)
                .join('');
            i++;
            setTimeout(type, speed); // Small delay before next node
          }
        }
      };
      // Delay each element slightly for sequential typing
      setTimeout(type, index * 200); // 200ms delay between elements
    });
  }

  // Function for button clicks
  window.executeCommand = function (command) {
    commandInput.value = command; // Reflect command in input
    processCommand(command);
    commandInput.value = ''; // Clear input after execution
  };
});
