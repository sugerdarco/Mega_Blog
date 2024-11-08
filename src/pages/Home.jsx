import React, {useEffect} from 'react';
import services from "../services/config.service.js";
import {Container, PostCard} from "../components/index.js";

const Home = () => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    services.getPosts()
      .then((posts) => {
        if (posts) setPosts(posts.documents);
      })
  }, []);

  return (posts.length === 0) ?  (
    <div className="w-full py-8 mt-4 text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className="w-full p-2">
            <h1 className="text-2xl font-bold hover:text-gray-500">
              Login to read posts
            </h1>
          </div>
        </div>
      </Container>
    </div>
  ) : (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;