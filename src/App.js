import logo from './logo.svg';
import React from 'react';
import './App.css';
import './styles.css';


class MarkdownRender extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          textareaValue: "This is a React Markdown. Whatever is typed in the editor will appear in the preview as well. You can delete these texts and put in your own. Thanks for checking by. #W-I-P.",
      };
  }

  markdownChange() {
      const updatedValue = document.getElementById('markdownInput').value;
      this.setState({
          textareaValue: updatedValue,
      });

      // Render the updated value to the output div
      this.renderToOutput(updatedValue);
  }

  // New method to render the updated value to the output div
  renderToOutput(value) {
      const outputContentElement = document.getElementById('outputContent');
      if (outputContentElement) {
          outputContentElement.textContent = `${value}`;
      }
  }

  render() {
      return (
          <div className='App'>
            <img src={logo} className="App-logo" alt="logo" />
      <p>
         This app was built using React!!!
        </p>
              <section className="editor">
                  <div className="section-title">
                      <h2><i className="fa fa-pen"></i>Editor</h2>
                      <i className="fa fa-arrows-alt"></i>
                  </div>
                  
                  <textarea
                      id="markdownInput"
                      value={this.state.textareaValue}
                      onChange={() => this.markdownChange()}
                  ></textarea>
              </section>
              <section className="previewer">
                  <div className="section-title">
                      <h2><i className="fa fa-eye"></i>Previewer</h2>
                      <i className="fa fa-arrows-alt"></i>
                  </div>
                  <div id="output" className="preview-output">
                      
                      <textarea id='outputContent' value={this.state.textareaValue} readOnly>
                        
                      </textarea>
                  </div>
              </section>
             
              
          </div>
      );
  }
}

// git remote add origin https://github.com/stunneagle/react_markdown_previewer.git
// git branch -M main
// git push -u origin main



export default MarkdownRender ;
