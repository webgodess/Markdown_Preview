let init = ` 
# I am a H1 
## Heading level 2
My favorite search engine is [Duck Duck Go](https://duckduckgo.com)

At the command prompt, type \`nano\`
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

1. First item
2. Second item
3. Third item
4. Fourth item

> Dorothy followed her through many of the beautiful rooms in her castle.

I just love **bold text**.

![Benjamin Bannekat](https://octodex.github.com/images/bannekat.png)  
`



class Editor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: init
    }
  this.handleChange = this.handleChange.bind(this); 
    
  }
  
  handleChange(e){
    this.setState({
      value:e.target.value
    })
  }
  
  render() {
    return (
      
<div>
       <textarea id="editor" value={this.state.value}  onChange={this.handleChange}/>
  
  <Parsed content={this.state.value}/>
  </div>
    )
    
  }
  
}



class Parsed extends React.Component{
  constructor(props){
    super(props);
    
  }
  render(){
    return(
    <div id="preview">
       <ReactMarkdown children={this.props.content}/>
    </div>
    )
  }
}





ReactDOM.render(<Editor />, document.getElementById("root"))

