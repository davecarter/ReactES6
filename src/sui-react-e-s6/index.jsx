import React from 'react';

class ReactES6 extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className='sui-ReactES6'>
        <h2>Congratulations!</h2>
        <h4><strong>Your ReactJS component development environment is up and running.</strong></h4>
        <p>We use <a href='https://webpack.github.io/'>Webpack</a> as module bundler, <a href='http://mochajs.org/'>Mocha</a> for Unit Testing and the following <a href='https://github.com/scm-spain/frontend-pre-commit-rules'>Precommit Rules</a>. Check out these links if you need further information.</p>
      </div>
    );
  }
}

export default ReactES6;
