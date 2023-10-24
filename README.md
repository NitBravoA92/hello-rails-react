<a name="readme-top"></a>

<div align="center">
  <h1><b>Hello API | Ruby on Rails & ReactJS</b></h1>
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [Hello API ](#hello-api-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run linters](#run-linters)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

---

<!-- PROJECT DESCRIPTION -->

# Hello API <a name="about-project"></a>

**"Hello App"** This is a simple application for displaying random greetings, made with Ruby on Rails. The application consists of an API in the backend, which has a single endpoint that is consumed from a frontend made with ReactJS and Redux toolkit to manage the global state of the application.

---

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Backend</summary>
  <ul>
    <li><a href="https://guides.rubyonrails.org/">Ruby on Rails (v7.0.8)</a></li>
    <li><a href="https://www.postgresql.org/docs/">PostgreSQL</a></li>
  </ul>
</details>

<details>
  <summary>Frontend</summary>
  <ul>
    <li><a href="https://www.w3schools.com/html/">HTML5</a></li>
    <li><a href="https://www.w3schools.com/css/">CSS</a></li>
    <li><a href="https://www.rubyguides.com/2018/11/ruby-erb-haml-slim/">ERB template</a></li>
    <li><a href="https://react.dev/learn">ReactJS</a></li>
    <li><a href="https://reactrouter.com/en/6.17.0/start/tutorial">React Router v6</a></li>
    <li><a href="https://axios-http.com/docs/intro">Axios</a></li>
    <li><a href="https://redux-toolkit.js.org/introduction/getting-started">Redux Toolkit</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

<ul>
  <li>Ruby on Rails framework</li>
  <li>
    Use Linters to check code quality
    <ul>
      <li>Rubocop</li>
      <li>Stylelint</li>
    </ul>
  </li>
  <li>MVC architectural/design pattern</li>
  <li>Data persistent in PostgreSQL</li>
  <li>Frontend with Reactjs, Redux and Webpack</li>
  <li>RESTful API</li>
</ul>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

<ul>
    <li><p>A code editor (we recommend Visual Studio Code)</p></li>
</ul>

<ul>
    <li><p>Git and a GitHub account</p></li>
</ul>

### Setup

Clone this repository to your desired folder by using this 👇️ command :

```
git clone https://github.com/NitBravoA92/hello-rails-react.git
```

### Install

Go to the project directory:

```
 cd hello-rails-react
```

Before to run the program, verify that you have Ruby on Rails installed on your OS running the following command:

```
 rails --version
```

It should show you the version of ruby on rails ​​installed. If this does not happen and only an error message is displayed, then you should either verify your installation or install Ruby on Rails from scratch.

[Download and Install Ruby on Rails](https://guides.rubyonrails.org/getting_started.html)

Once you have verified that you have Ruby on Rails installed, run the following command to install the necessary gems:

```
 bundle install
```

After installing the gems, run the following command to create the database:

```
 rails db:create
```

Then run the following command to migrate the database:

```
 rails db:migrate
```

Then run the following command to install React, Redux, and all the Node packages:

```
 npm install
```

if you have any problem with the previous command, try to run the following command:

```
 yarn install
```

### Usage

Run the following command inside the project folder to start the application:

```
  npm run build
  rails s
```

if you have any problem with the previous command, try to run the following command:

```
 ./bin/dev
```

Those commands will start the application on your local server. You can now open your browser and go to http://localhost:3000/ to see the application running.

### Run linters

To verify that the ruby and CSS code is written without errors and meets good practice standards, run the following command inside the project folder:

- **ruby linter:**
```
 rubocop
```

- **CSS linter:**
```
 stylelint "**/*.{css,scss}"
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Nitcelis Bravo**

- GitHub: [Nitcelis Bravo](https://github.com/NitBravoA92)
- Twitter: [@softwareDevOne](https://twitter.com/softwareDevOne)
- LinkedIn: [Nitcelis Bravo Alcala](https://www.linkedin.com/in/nitcelis-bravo-alcala-b65340158)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

Upcoming improvements:

- [ ] Add the endpoints to create, update and delete a greeting
- [ ] Add CSS styles to the app
- [ ] Deploy the application

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/NitBravoA92/hello-rails-react/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project and know someone who might find it helpful, please share it.
Or give it a **star** ⭐️ if you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I thank Microverse for this fantastic opportunity, and the code reviewers for their advice and time.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
