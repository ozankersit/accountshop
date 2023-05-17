import BackToTopIcon from '../Icons/BackToTopIcon'

const BackToTopButton = () => {
    const backToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      };
  return (
    <button
    className='fixed bottom-[30px] right-5 border rounded-[50%] border-black p-3' onClick={backToTop}>
        <BackToTopIcon/>
    </button>
  )
}

export default BackToTopButton