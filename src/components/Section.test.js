import Section from './Section';

describe('Section Component', () => {
  it('should be a section', () => {
    const section = new Section({
      message: 'Hello World!'
    });

    expect(section.render()).toMatchSnapshot();
  });
});
