import PropTypes from "prop-types";

export default function Profile({ user }) {
  return <p>Profile of other user</p>;
}

Profile.propTypes = {
  user: PropTypes.object,
};
