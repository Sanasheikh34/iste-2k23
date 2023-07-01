// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import blogData from "../data/blogData"
import { BlogCard } from '../components/blogCards';
// eslint-disable-next-line
import ReactMarkdown from 'react-markdown';
// eslint-disable-next-line
import vim_plugins from '../data/Blogs/vim_plugins/vim_plugins.md';
// import remarkGfm from 'remark-gfm'


const BlogPage = () => {

  // const [searchQuery, setSearchQuery] = useState('');
  // const [filteredJobs, setFilteredJobs] = useState(jobData);

  // const handleSearch = (event) => {
  //   const { value } = event.target;
  //   setSearchQuery(value);

  //   const filtered = jobData.filter((job) => {
  //     const titleMatch = job.job_title.toLowerCase().includes(value.toLowerCase());
  //     const companyMatch = job.company.toLowerCase().includes(value.toLowerCase());
  //     const locationMatch = job.location.toLowerCase().includes(value.toLowerCase());
  //     return titleMatch || companyMatch || locationMatch;
  //   });

  //   setFilteredJobs(filtered);
  // };

  // const handleFilter = (filterValues) => {
  //   const { jobTitle, company, location } = filterValues;

  //   const filtered = jobData.filter((job) => {
  //     const titleMatch = job.job_title.toLowerCase().includes(jobTitle.toLowerCase());
  //     const companyMatch = job.company.toLowerCase().includes(company.toLowerCase());
  //     const locationMatch = job.location.toLowerCase().includes(location.toLowerCase());
  //     return titleMatch && companyMatch && locationMatch;
  //   });

  //   setFilteredJobs(filtered);
  // };


 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="center-header-div">
        <h2 className="center-heading">Blogs</h2>
      </div>

      {/* <ReactMarkdown>{vim_plugins}  </ReactMarkdown> */}

      {/* <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search jobs..."
          />
          
            <SearchIcon className="search-icon"/>
          
        </div>


      <FilterCategories onFilter={handleFilter} /> */}
        <div className='jobcard-container' style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'center',gap:'50px'}}>
                  {blogData.map(contents => (
                      <BlogCard
                        key={contents.id}
                        image={contents.image}
                        blog_title={contents.job_title}
                        company={contents.company}
                        tags = {contents.tags}
                        description = {contents.description}
                        // onSaveCard={handleSaveCard} 
                        style={{ flex: '1 10 50%', maxWidth: '50%'  }}
                    />
                ))}
            </div>



    </motion.div>
  );
};

export default BlogPage;
