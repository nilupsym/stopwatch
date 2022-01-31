import './styles.css';

export const Time = ({ time }) => {
    return <div className='time-wrapper'>
        <span className='time'>
            {(time.h >= 10) ? time.h : '0' + time.h}
        </span>
        <span className='time'>
            {(time.min >= 10) ? time.min : '0' + time.min}
        </span>
        <span className='time'>
            {(time.s >= 10) ? time.s : '0' + time.s}
        </span>
        <span className='time'>
            {(time.ms >= 10) ? time.ms : '0' + time.ms}
        </span>
  </div>;
};
