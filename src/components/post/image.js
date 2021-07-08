import PropTypes from "prop-types";

export default function Image({ src, caption }) {
  return (
    <div className="overflow-hidden h-full">
      <img src={src} alt={caption} className="object-fill w-full" />
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
