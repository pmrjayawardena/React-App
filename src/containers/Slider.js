import { connect } from 'react-redux';
import SliderComponent2 from '../components/Slider';

const mapStateToProps = state => {
  return {
    profile : state.profile
  };
}

const Slider = connect(
  mapStateToProps
)(SliderComponent2);

export default Slider;
