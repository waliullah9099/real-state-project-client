
export interface IBlog {
    id: number;
    date: string;
    image: string;
    author: string;
    category: string;
    title: string;
    excerpt: string;
  }
  

const BlogCard = ({ blog } : { blog: IBlog}) => {
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white">
      <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
      <div className="p-5">
        <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-4">
          {blog.date}
        </span>
        <div className="text-sm text-gray-500 mb-2">
          <span className="font-medium">{blog.author}</span> | {blog.category}
        </div>
        <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
        <p className="text-gray-600 text-sm">{blog.excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard;
