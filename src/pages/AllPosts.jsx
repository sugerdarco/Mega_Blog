import React, {useEffect, useState} from 'react';
import services from "../services/config.service.js";
import {Container, PostCard} from "../components/index.js";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    services.getPosts([])
      .then((posts) => {
        if (posts) setPosts(posts.documents);
      })
  }, []);

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;