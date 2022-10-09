# AltSchool Challenge

This is a solution to the [AltSchool Africa](https://www.altschoolafrica.com/) challenge of building a simple calculator app with React.
## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![Desktop](/src/calculator.png)

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
const [data, setData] = useState("0");
```

```React
const handleOperator = (e) => {
    if (data === "0") {
      return data;
    } else if (data !== "0") {
      return setData(data + e.target.value);
    }
  };
```

### Continued development

I would love to imporve on my knowledge of Props, useEffect, and more on mathematical functions.

### Useful resources

- [Build a Calculator with React JS By tommykelly100](https://www.youtube.com/watch?v=6PC_hz5TMYY)
- [The Perfect Beginner React Project By Web Dev Simplified](https://www.youtube.com/watch?v=DgRrrOt0Vr8&t=5s)

## Author

- Website - [Osayuki](https://github.com/okhuarobo-osayuki)
- Twitter - [@osayuki__](https://twitter.com/osayuki__)
- LinkedIn - [@osayukiokhuarobo](https://www.linkedin.com/in/osayukiokhuarobo/)