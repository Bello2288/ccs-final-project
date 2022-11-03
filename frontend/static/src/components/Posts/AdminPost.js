import "../../styles/Post-styles/AdminPost.css";
import { Link } from "react-router-dom";
import moment from 'moment';


function AdminPost({ post }) {
  return (
    <li key={post.id} className="list creator-list">
      <div className="post-info">
        <h3 className="user-post-data">{post.teamname}</h3>
        <h3 className="user-post-data">{post.location}</h3>
        <p className="user-post-data">{moment(post.date).format('MMMM Do, YYYY')}</p>
        <p className="user-post-data">{moment(post.time, "HH:mm:ss").format('h:mm a')}</p>
        <span>By {post.author_name}</span>
        <div className="view-button">
          <Link className="view-link" to={`/posts/editor/${post.id}`}>
            View Post
          </Link>
        </div>
      </div>
      {/* <img className="aside-image" src={post.image} alt="post" /> */}
    </li>
  );
}

export default AdminPost;