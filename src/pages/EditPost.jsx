import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import services from "../services/config.service.js";
import {Container, PostForm} from "../components/index.js";

const EditPost = () => {
  const [post, setPost] = useState(null);
  const {slug} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      services.getPost(slug)
        .then((post) => {
          if (post) setPost(post);
        })
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;