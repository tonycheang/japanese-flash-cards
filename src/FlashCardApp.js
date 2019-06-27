import React from 'react';
import CardDisplay from './CardDisplay';
import UserInputDisplay from './UserInputDisplay';
import { Button, Empty } from 'antd'
import './FlashCardApp.css';

class FlashCardApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.reportCorrectness = this.reportCorrectness.bind(this);
    this.readForm = this.readForm.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
    this.resetInputAfterTyping = this.resetInput.bind(this, 500);
    this.resetInputAfterReveal = this.resetInput.bind(this, 0, true);

    this.defaultBackgroundColor = "#FFFFFF"

    this.state = {
      currentCard: this.props.deck.getNextCard(),
      typed: "",
      textColor: "#000000",
      backgroundColor: this.defaultBackgroundColor,
      border: "1px solid",
      firstTimeTyping: true
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleInput);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleInput);
  }

  handleInput(event) {
    if (this.state.firstTimeTyping)
      this.setState({ firstTimeTyping: false });

    if (event.key === "Enter" || event.key === " ") {
      if (this.state.justRevealed)
        this.resetInputAfterReveal();
      else
        this.showAnswer();
    }

    let curText = this.state.typed;
    let isLetter = /^\w$/;
    if (event.key === "Backspace") {
      if (curText.length > 0) {
        this.setState({ typed: curText.slice(0, curText.length - 1) })
      }
    } else if (isLetter.test(event.key)) {
      this.setState((state) => state.typed += event.key)
    } else {
      // Do not extend timer for input or report correctness
      return;
    }

    // Extend the timer to recognize input if it exists, otherwise make one
    if (this.state.typingTimer)
      clearTimeout(this.state.typingTimer);
    this.setState({ typingTimer: setTimeout(this.reportCorrectness, 300) });
  }

  readForm(event) {
    // Temp holder while using window.addEventListener("keydown", this.handleInput);
    // console.log(event.target.value);
  }

  showAnswer(event) {
    // event.preventDefault();
    // event.stopPropagation();
    if (this.state.firstTimeTyping)
      this.setState({ firstTimeTyping: false });

    this.setState({ justRevealed: true, typed: this.state.currentCard.back })
  }

  reportCorrectness() {
    /* Flashes red or green on the page depending on input correctness */

    // Don't accept input if card got revealed
    if (this.state.justRevealed)
      return;

    let currentCard = this.state.currentCard;
    let answer = currentCard.back;
    let typed = this.state.typed.toLowerCase();

    // Don't report if the first few characters are correct
    if (typed.length < answer.length) {
      if (currentCard.startsWith(typed))
        return;
    }

    if (currentCard.hasAnswer(typed)) {
      this.setState({ backgroundColor: "#f6ffed", border: "1px solid #b7eb8f" });
      this.resetInputAfterTyping(true);
    } else {
      this.setState({ backgroundColor: "#fff1f0", border: "1px solid #ffa39e" });
      this.resetInputAfterTyping(false);
    }
  }

  resetInput(delay, nextCard) {
    /* Used to create partial functions via method.bind() for callback */
    if (nextCard) {
      this.setState({
        currentCard: this.props.deck.getNextCard(),
        typed: ""
      })
    }
    setTimeout(() => this.setState({ backgroundColor: this.defaultBackgroundColor, border: "1px solid" }), delay)
    this.setState({ typed: "", typingTimer: null, justRevealed: false });
  }

  render() {
    let card = this.state.currentCard;
    if (card.front == "No active cards!")
      card.front = <Empty description="No active cards!" image={Empty.PRESENTED_IMAGE_SIMPLE} />;

    let defaultText = this.state.firstTimeTyping ? "type the phonetic translation" : "";

    let displayButton;
    if (this.state.justRevealed)
      displayButton = <Button type="default" size="large" onClick={this.resetInputAfterReveal}
        style={{ backgroundColor: "transparent", margin: "2%" }}>continue</Button>;
    else
      displayButton = <Button type="default" size="large" onClick={this.showAnswer}
        style={{ backgroundColor: "transparent", margin: "2%" }}>show</Button>

    return (
      <div align="center">
        <div className="Card" style={{
          backgroundColor: this.state.backgroundColor,
          border: this.state.border,
        }}>

          <CardDisplay data={card.front}></CardDisplay>
          <UserInputDisplay data={this.state.typed}
            defaultText={defaultText}
            textColor={this.state.textColor}
            onChange={this.readForm}>
          </UserInputDisplay>
          <div>{displayButton}</div>

        </div>
      </div>
    )
  };
}

export default FlashCardApp;
