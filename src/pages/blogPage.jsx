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
import SearchIcon from '@mui/icons-material/Search';


const BlogPage = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredblogs, setFilteredblogs] = useState(blogData);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    const filtered = blogData.filter((blog) => {
      const titleMatch = blog.blog_title.toLowerCase().includes(value.toLowerCase());
      const tagsMatch = blog.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()));
      return titleMatch || tagsMatch;
      
    });

    setFilteredblogs(filtered);
  };

  // const handleFilter = (filterValues) => {
  //   const { blogTitle, company, location } = filterValues;

  //   const filtered = blogData.filter((blog) => {
  //     const titleMatch = blog.blog_title.toLowerCase().includes(blogTitle.toLowerCase());
  //     const companyMatch = blog.company.toLowerCase().includes(company.toLowerCase());
  //     const locationMatch = blog.location.toLowerCase().includes(location.toLowerCase());
  //     return titleMatch && companyMatch && locationMatch;
  //   });

  //   setFilteredblogs(filtered);
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

            <SearchIcon className="search-icon"/>
      <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search blogs..."
          />
          
          
        </div>


      {/* <FilterCategories onFilter={handleFilter} /> */}
        <div className='blogcard-container' style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'center',gap:'50px'}}>
                  {filteredblogs.map(contents => (
                      <BlogCard
                        key={contents.id}
                        image={contents.image}
                        blog_title={contents.blog_title}
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
