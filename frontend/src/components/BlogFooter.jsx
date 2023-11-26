import Button from "./button";

const BlogFooter = () => {
  return (
    <div className='blogFooterContainer'>
      <hr></hr>
      <div className='blogFooter'>
        <div className='footerLeft'>
          <Button buttonTitle='Previous' />
        </div>
        <div className='footerRight'>
          <Button buttonTitle='Next' />
        </div>
      </div>
    </div>
  );
};

export default BlogFooter;
