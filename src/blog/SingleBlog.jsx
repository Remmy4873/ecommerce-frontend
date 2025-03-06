import React, { useState } from 'react';
import blogList from "../utilis/blogdata";
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from '../shop/Tags'; 
import PopularPost from '../shop/PopularPost'; // Adjust the path as necessary



const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog] = useState(blogList);
  const { id } = useParams();

  // Filter the blog based on the id
  const result = blog.filter((b) => b.id === Number(id));

  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog/Blog Details"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img src={item.imgUrl} alt="" className="w-100" />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i> {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Serenity has taken possession of my entire soul, these sweet mornings of spring which I enjoy with my whole heart. I am alone and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, absorbed in the sense of enjoying my whole heart alone and feeling the charm of sports.
                                </p>

                                <blockquote>
                                  <p>
                                    Dynamically recaptualize distributed technologies whereas turnkey channels.
                                  </p>
                                  <cite>
                                    <a href="#">...Melissa Hunter</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  Serenity has taken possession of my entire soul, these sweet mornings of spring which I enjoy with my whole heart. I am alone and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, absorbed in the sense of enjoying my whole heart alone and feeling the charm of sports.
                                </p>

                                <img src="/src/assets/images/blog/single/01.jpg" alt="" />

                                <p>
                                  Serenity has taken possession of my entire soul, these sweet mornings of spring which I enjoy with my whole heart. I am alone and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, absorbed in the sense of enjoying my whole heart alone and feeling the charm of sports.
                                </p>

                                <div className="video-thumb">
                                  <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                  <a
                                    href="https://youtu.be/g6BtbIiJ_rc?si=2fiS6cAB_rW8Nc9i"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>

                                <p>
                                  Serenity has taken possession of my entire soul, these sweet mornings of spring which I enjoy with my whole heart. I am alone and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, absorbed in the sense of enjoying my whole heart alone and feeling the charm of sports.
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li><a href="#">Agency</a></li>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Personal</a></li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href={val.link} className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left"></i> Previous Blog
                          </a>
                          <a href="#" className="title">
                            Evisculate Parallel Process via Technical Sound Models Authoritative
                          </a>
                        </div>
                        <div className="right">
                          <a href="#" className="next">
                            <i className="icofont-double-right"></i> Next Blog
                          </a>
                          <a href="#" className="title">
                            Evisculate Parallel Process via Technical Sound Models Authoritative
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
