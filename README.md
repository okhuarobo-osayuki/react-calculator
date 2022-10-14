# AltSchool Challenge

This is a solution to the [AltSchool Africa](https://www.altschoolafrica.com/) challenge of building a simple calculator app with React.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Links

- Solution URL: [GitHub](https://github.com/okhuarobo-osayuki/react-calculator)
- Live Site URL: [Live Site](https://react-calculator-one-xi.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

On this project, I understood more on how to use the useState hook. See examples below:

```React
  const [prevState, setPrevState] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [num, setNum] = useState("");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

```

```React
  const inputNum = (e) => {
    if (currentState.includes(".") && e.target.innerText === ".") return;
    if (currentState === "0" && e.target.innerText === "0") return currentState;
    if (currentState === "" && e.target.innerText === ".") return currentState;

    if (total) {
      setPrevState("");
    }

    currentState
      ? setCurrentState((pre) => pre + e.target.innerText)
      : setCurrentState(e.target.innerText);
    setTotal(false);
  };
```

### Continued development

I would love to imporve on my knowledge of Props, useEffect, and more on mathematical functions.

### Useful resources

- [Build a Calculator with React JS By tommykelly100](https://www.youtube.com/watch?v=6PC_hz5TMYY)
- [The Perfect Beginner React Project By Web Dev Simplified](https://www.youtube.com/watch?v=DgRrrOt0Vr8&t=5s)

## Author

- Website - [Osayuki](https://github.com/okhuarobo-osayuki)
- Twitter - [@osayuki\_\_](https://twitter.com/osayuki__)
- LinkedIn - [@osayukiokhuarobo](https://www.linkedin.com/in/osayukiokhuarobo/)
