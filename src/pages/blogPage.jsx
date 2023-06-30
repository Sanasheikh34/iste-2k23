import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import vim_plugins from '../data/Blogs/vim_plugins/vim_plugins.md';
import remarkGfm from 'remark-gfm'


const BlogPage = () => {

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

      <ReactMarkdown>{vim_plugins}  </ReactMarkdown>
    </motion.div>
  );
};

export default BlogPage;
