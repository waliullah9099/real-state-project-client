import { blogs } from "../../../public/data/blogs";
import BlogCard from "../Home/OurBlogs/BlogCard";

const Blog = () => {
  return (
    <div className="bg-white">
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url('https://i.ibb.co.com/q3j6cgSJ/blogPage.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center md:pt-24">
          <div className="text-center text-white">
            <p className="text-sm mb-2">Home / Pages / Latest News</p>
            <h1 className="text-4xl font-bold">Latest News</h1>
          </div>
        </div>
      </div>

      {/* Blog cards */}
      <div className="project-container pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {blogs?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
