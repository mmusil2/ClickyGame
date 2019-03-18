import React, { Component } from "react";
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import fighters from "./fighters.json";

class App extends Component {
  state = {
    fighters,
    score: 0
  };

  clickCount = id => {
    this.setState( prevState => {
      return {
          score: prevState.score + 1
      };
    });
    this.state.fighters.sort(function(a, b){return 0.5 - Math.random()});
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score}>Street Fighter</Title>
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
