import { blogs } from "../../../../public/data/blogs";
import SectionTitle from "../../ui/SectionTitle";
import BlogCard from "./BlogCard";
const OurBlogs = () => {
  return (
    <>
      <div className="project-container pt-12">
        <SectionTitle title="From Our Blog" subTitle="Latest New" />
        {/* all blogs  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurBlogs;
