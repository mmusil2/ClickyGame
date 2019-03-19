import React, { Component } from "react";
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import fighters from "./fighters.json";

class App extends Component {
  state = {
    fighters,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score});
    }
    this.state.fighters.forEach(fighter => {
      fighter.count = 0;
    });
    this.setState({score: 0});
  }

  clickCount = id => {
    // console.log(id);
    let result = this.state.fighters.find( fighter => fighter.id === id);
    if (result.count === 0) {
      result.count = result.count + 1;
      console.log(result);
      this.setState( prevState => {
        return {
          score: prevState.score + 1
        };
      });
      this.state.fighters.sort(function(a, b){return 0.5 - Math.random()});
    } else if (result.count > 0) {
      this.gameOver();
      // console.log("gameover");
    }
  };

  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}></Title>
        {this.state.fighters.map(fighter => (
          <Card
            id={fighter.id}
            key={fighter.id}
            name={fighter.name}
            image={fighter.image}
            count={fighter.count}
            clickCount={this.clickCount}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
