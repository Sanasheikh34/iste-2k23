// eslint-disable-next-line
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function BlogCard(props) {

const navigate = useNavigate()
const navigatetoblogDetails = () => {
    navigate('/blog-details', { state: { blogProps: props } }); 
  };
  
const navigatetoTagsPage = () => {
    navigate('/tags'); 
  };
    


const customClassName = props.work_type;
return (
<div className='blogList'>
  <div key={props.id} className={`${customClassName} blogCard`} >
    <div className='blogCard__content'>
      <div className='blogCard__header' onClick={navigatetoblogDetails}>
        <img src={props.image} alt='blog-img' className='blogImage' />
        <h3 className='blogName '>{props.blog_title}</h3>
      </div>
      <div className='displayStack__1'>
        <div className='tagsContainer'>
          {props.tags.map((tag, index) => (
            <span key={index} className='tagItem' onClick={navigatetoTagsPage}>{tag}</span>
          ))}
        </div>
      </div>
        <h3 className='blogCompany'>{props.company}</h3>
        <div className="blog-description">
            {props.description}
        </div>
    </div>
  </div>
</div>
);
}

