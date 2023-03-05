import React from 'react';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomQuote: {
        text: '',
        author: '',
      },
    };
  }

  componentDidMount() {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          randomQuote: data[Math.floor(Math.random() * data.length)],
        });
      });
  }

  render() {
    const { randomQuote } = this.state;
    return (
      <div className="main-container quote-container">
        <p>
          {randomQuote.text}
          &nbsp;—
          {randomQuote.author}
        </p>
      </div>
    );
  }
}

export default Quote;
