 
import { Link } from 'react-router-dom';
import { Appbar } from '../components/Appbar';
import { BlogCard } from '../components/BlogCard';

export const Home = () => {
  const featuredBlogs = [
    {
      id: 1,
      title: "The Future of Technology",
      content: "Discover what the future holds for tech innovations...",
      author: "Jane Doe",
      date: "June 10, 2024"
    },
    {
      id: 2,
      title: "Health and Wellness",
      content: "Tips to keep yourself healthy and vibrant...",
      author: "John Smith",
      date: "June 15, 2024"
    },
    {
      id: 3,
      title: "The Art of Cooking",
      content: "Explore culinary skills that will amaze your taste buds...",
      author: "Alice Johnson",
      date: "June 20, 2024"
    }
  ];

  return (
    <>
      <Appbar />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{ minHeight: "75vh" }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')" }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl mb-4">
                      Explore, Read, Contribute
                    </h1>
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                      Dive into the heart of blogging with MindMint, where every voice matters.
                      Read the latest posts or share your own insights.
                    </p>
                    <div className="flex justify-center gap-4">
                      <Link to="/blogs">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
                          Explore Blogs
                        </button>
                      </Link>
                      <Link to="/publish">
                        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 shadow-md">
                          Publish Your Blog
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: "70px" }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-100 -mt-24">
          <div className="container mx-auto px-4">
            <div className="bg-white py-12 rounded-lg shadow-md">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 justify-items-center">
                {featuredBlogs.map(blog => (
                  <BlogCard 
                    key={blog.id} 
                    id={blog.id} 
                    title={blog.title} 
                    content={blog.content} 
                    authorName={blog.author} 
                    publishedDate={blog.date} 
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 MindMint. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link to="#" className="hover:text-gray-400 transition duration-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-gray-400 transition duration-300">Terms of Service</Link>
            <Link to="#" className="hover:text-gray-400 transition duration-300">Contact Us</Link>
          </div>
        </div>
      </footer>
    </>
  );
};