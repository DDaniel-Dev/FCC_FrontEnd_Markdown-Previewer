// 10:52 - https://www.youtube.com/watch?v=CJt7uZD_iK0


class App extends React.Component {
  state = {
    markdown: ""
  }

  handleChange = (event) => {
    this.setState({
      markdown: event.target.value
    })
  }

  render() {
    const { markdown } = this.state;

    return (
      <div>
        <h2 className="text-center">Convert your Markdown</h2>
        <div className="row">
          <div className="col-6">
            <textarea id="editor" value={markdown} onChange={this.handleChange}/>
          </div>
          <div className="col-6" id="preview"></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"))