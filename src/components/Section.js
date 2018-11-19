import Component from './Component';
// import styles from './Section.css';

export default class Section extends Component {
  render() {
    return `<section>${this.props.message}</section>`;
  }
}
