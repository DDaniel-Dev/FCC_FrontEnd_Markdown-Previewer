// 10:52 - https://www.youtube.com/watch?v=CJt7uZD_iK0

/*
class App extends React.Component {
  state = {
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    const { text } = this.state;

    return (
      <div>
        <h2 className="text-center">Convert your Markdown</h2>
        <div className="row">
          <div className="col-6">
            <textarea id="editor" value={text} onChange={this.handleChange}/>
          </div>
          <div className="col-6" id="preview"></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"))
*/

// 10:52 - https://www.youtube.com/watch?v=CJt7uZD_iK0
// 8:04 - https://www.youtube.com/watch?v=dW0vY5vvU1U 


class App extends React.Component {
  state = {
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    const { text } = this.state;
    const markdown = marked(text);

    return (
      <div>
        <h1 className="text-center mt-4" style={{fontSize: "1.5em"}}>Convert your Markdown</h1>
        <div className="row">
          <div className="col-6">
            <h2 className="text-center" style={{fontSize: "1em"}}>Enter your markdown here:</h2>
            <textarea className="form-control" style={{minHeight: 400}} id="editor" value={text} onChange={this.handleChange}/>
          </div>
          <div className="col-6" id="preview">
            <h2 className="text-center" style={{fontSize: "1em"}}>See the result:</h2>
            <div 
              className="col-6 form-control" 
              style={{color: "white", backgroundColor: "black", minHeight: 400}}
              dangerouslySetInnerHTML={{__html: markdown}}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"))




/*
function App() {
  const [text, setText] = React.useState("")

  return (
  <div>
    <h1 className="text-center mt-4" style={{fontSize: "1.5em"}}>Convert your Markdown</h1>
    <div className="row">
      <div className="col-6">
        <h2 className="text-center" style={{fontSize: "1em"}}>Enter your markdown here:</h2>
        <textarea className="form-control" style={{minHeight: 400}} id="editor" value={text} onChange={(event) => setText(event.target.value)}/>
      </div>
      <div className="col-6" id="preview">
        <h2 className="text-center" style={{fontSize: "1em"}}>See the result:</h2>
        <div 
          className="col-6 form-control" 
          style={{color: "white", backgroundColor: "black", minHeight: 400}}
        />
      </div>
    </div>
  </div>
  )
}



ReactDOM.render(<App/>, document.getElementById("app"));
*/