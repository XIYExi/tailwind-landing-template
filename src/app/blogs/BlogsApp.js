import BlogsHeaderApp from "./BlogsHeaderApp";
import BlogsFooterApp from "./BlogsFooterApp";
import BlogsNavApp from "./BlogsNavApp";
import BlogsContainerApp from "./BlogsContainerApp";
import './index.css';


function BlogsApp(props) {


    return (
        <div>
            <BlogsHeaderApp />

            <BlogsNavApp />

            <BlogsContainerApp />

            <BlogsFooterApp />
        </div>
    )
}

export default BlogsApp;
