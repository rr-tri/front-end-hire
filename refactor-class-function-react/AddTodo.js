const Component = React.Component

class App extends Component {
  state = { input: "" };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({
      id: Date.now(),
      title: this.state.input,
      completed: false,
    });
    this.setState({ input: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

