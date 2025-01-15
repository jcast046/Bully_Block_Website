# -> [Project Website](https://jcast046.github.io/Bully_Block_Website/) <-
# Team Members 
  Trevor Newberry, Jacob Braley, Joshua Castillo, 
  Reagan McCoy, Skyler Williams, Nomar Rodriguez, Peter Spadaro

## Overview
The Cyberbullying Detection System is a web application designed to enhance the safety and educational quality of K-12 public schools by integrating directly with the Canvas Learning Management System (LMS). This system uses advanced Natural Language Processing (NLP) techniques to monitor, analyze, and alert on potential cyberbullying communications in real time.

## Features
- **Automatic Alerts:** Immediate notifications for suspected cyberbullying incidents to ensure rapid response.
- **Comprehensive Dashboard:** A user-friendly dashboard for detailed incident review and management, providing educators and security personnel with real-time data and analytics.
- **Immediate Linkage to Security Personnel:** Direct communication channels to school security staff to quickly address and manage incidents.

## Technologies Used
- **Backend Framework:** Node.js with Express
  - **Node.js** is chosen for its efficiency in handling real-time data processing, which is critical for the swift alerting mechanisms needed in cyberbullying detection.
  - **Express.js** facilitates the creation of API routes and manages HTTP requests, integrating seamlessly with the Canvas LMS API.
- **Frontend Framework:** React
  - **React** is selected for its ability to dynamically and responsively update the user interface, making it ideal for the dashboard that displays real-time alerts.
- **Database:** MongoDB
  - **MongoDB** is utilized for its flexibility in handling unstructured data from various interactions within Canvas, allowing for rapid adjustments and scalability.
- **NLP Tools:** IBM Watson and `natural` library
  - **IBM Watson** provides deep learning analytics to extract insights from text data, identifying potential cyberbullying with high accuracy.
  - **`natural` library** supports tasks such as tokenizing, stemming, classification, crucial for tailored text analysis tasks.
- **Integration Tools:** Webpack and Babel
  - **Webpack** bundles the application's assets into optimized files, enhancing performance by reducing load times.
  - **Babel** ensures the application’s JavaScript code is backward compatible with older browsers, supporting modern JavaScript across all user devices.




