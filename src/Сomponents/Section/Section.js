import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
