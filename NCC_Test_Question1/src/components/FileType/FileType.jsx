import './FileType.css';

function FileType({ data }) {
  const { content, image, title } = data;
  return (
    <div className='filetype'>
      <p className='filetype__title'>{title}</p>
      <div className='filetype__container'>
        <img className='filetype__image' src={image} alt='' />
        <p className='filetype__content'>{content}</p>
      </div>
    </div>
  );
}

export default FileType;
