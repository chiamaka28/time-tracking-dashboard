import ellipsis from '../images/icon-ellipsis.svg';


const Work= () => {
    return (
      <div className="w-[270px] h-[120px] mx-auto bg-light-red flex flex-col justify-end">
        <div ></div>
       <div className='bg-dark-blue'>
         <div>
          <h2>Work</h2>
          <div><img src={ellipsis} alt="/" /></div>
         </div>
         <div>
          <p>32hrs</p>
          <p>Last Week</p>
         </div>
       </div>
      </div>
    );
}


export default Work;