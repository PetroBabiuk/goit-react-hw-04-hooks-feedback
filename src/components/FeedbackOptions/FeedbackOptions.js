import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({onClick, options}) => (
    <div>
        {options.map(option => (
            <button 
            type="button" 
            onClick={onClick}
            className={s.button}
            >
                {option}
            </button>
        ))}
    </div>
);

FeedbackOptions.propTypes = {
    onClick: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string)
};

export default FeedbackOptions;