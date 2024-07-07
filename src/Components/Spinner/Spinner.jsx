import spinner from '../../assets/Double Ring@1x-1.0s-200px-200px.gif'

const Spinner = () => {
    return (
        <div className='min-h-[50vh] flex justify-center items-center'>
            <img src={spinner} alt="" />
        </div>
    );
};

export default Spinner;