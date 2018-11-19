import Component from './Component';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

export default class App extends Component {
  render() {
    const header = new Header({
      links: ['home', 'about', 'contact']
    });

    const section1 = new Section({
      message: 'SECTION ONE!!!'
    });
    const section2 = new Section({
      message: 'SECTION TWO!!!'
    });
    const footer = new Footer();

    return `
        ${header.render()}
        ${section1.render()}
        ${section2.render()}
        ${footer.render()}
      `;
  }
}
