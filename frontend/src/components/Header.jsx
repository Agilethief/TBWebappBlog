const Header = () => {
  return (
    <div className='blogHeader'>
      <div className='topBar'>
        <div className='topBarLeft'>
          <a href='/'>
            <img
              src='/content/images/logo.png'
              alt='logo'
            />
          </a>
        </div>
        <div className='topBarRight'>
          <a href='/blog'>Blog</a>
          <a href='/about'>About</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
