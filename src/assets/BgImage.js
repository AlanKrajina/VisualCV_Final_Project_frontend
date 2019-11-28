import home from './home.jpeg';
import React, {Component} from 'react';

const sectionStyle = {
  backgroundImage: `url(${home})`,
};

class Section extends Component {
  render() {
    return (
      <section id="sectionStyle" style={ sectionStyle }>
      </section>
    );
  }
}

export default Section;