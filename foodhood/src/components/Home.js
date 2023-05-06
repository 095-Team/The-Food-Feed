import React from 'react'
import "../css/Home.css"
import * as IoIcons5 from "react-icons/io5";
import Axios from "axios"
import {useEffect,useState} from "react"

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [listOfComments, setListOfComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
//Posting Comments
  const handlePostComment = () => {
    Axios.post('http://localhost:8080/comments', {
      comment: commentInput,
    })
      .then((response) => {
        console.log(response);
        setListOfComments([...listOfComments, response.data]);
        setCommentInput('');
      })
      .catch((error) => {
        console.log(error);
      });
  };
//Viewing Comments
  useEffect(() => {
    Axios.get('http://localhost:8080/').then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get('http://localhost:8080/comments').then((response) => {
      setListOfComments(response.data);
    });
  }, []);
//Deleting Comments
  const deleteComment = (id) => {
    console.log(id, 'delete');
    Axios.delete(`http://localhost:8080/comments/${id}`)
      .then((response) => {
        alert('deleted');
      })
      .catch((e) => {
        console.error(e);
      });
  };
//Editing Comments
  const editcomment = (event, id, comment) => {
    event.preventDefault();
    const updatedComment = prompt("Edit Comment",comment)
    Axios.put(`http://localhost:8080/comments/${id}`, {
      comment:updatedComment,
      id:id,
    })
      .then((response) => {
        alert('updated');
        setListOfComments(
          listOfComments.map((content) =>
            content.id === id ? { ...content, comment: updatedComment } : content
          )
        );
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    //Leftside Profile Section
    <div className='home'>
      <div className='profilesection'>
        <div className='dp'></div>
        <div className='profilename'>
          Luke Skywalker
        </div>
        <div className='profilebio'>
        Luke Skywalker was a Tatooine farmboy who rose from humble 
        beginnings to become one of the greatest Jedi the galaxy has ever known. 
        </div>
        <div className='profilesectionbuttons'>
          <button className='profilecreatepostbutton'>Create Post</button>
          <button className='profilesettingsbutton'>Settings</button>
          <button className='profilesignoutbutton'>Sign Out</button>
        </div>
      </div>
      <div className='feed'>
        <div className='search'>Looking for something...?
        </div>
        <div className='feedpostcontainer'>
           <div className='postuserinfo'>
              <div className='postdp'></div>
              < div className='postuser'>Padme Amidala
              </div>
            </div> 
           { listOfPosts.map((food,id)=>{
            return <div key={food.id} className='postpicture'>
               <img className="postpictureimage" src={food.picture} alt="blah"/>
                    <div className="postcaption">
                      {food.caption}
                    </div>
                  </div>
            })}
        
          <div className='postinteractions'>
            <button className='likebutton'><IoIcons5.IoFastFoodOutline /></button>
            <button className='commentbutton'><IoIcons5.IoChatbubblesOutline /></button>
          </div>
          <div className='comments'>

            { listOfComments.map((content)=>{
              return <div key={content.id} className='comments'>
                    <div className="comment-button-wrapper">{content.comment}
                      <div> 
                        <button className='comment-edit-button' onClick={(event)=>{editcomment(event, content.id, content.comment)}}><IoIcons5.IoPencilSharp/></button>
                        <button className='comment-delete-button' onClick={()=>deleteComment(content.id)}><IoIcons5.IoTrashOutline/></button> 
                      </div>
                    </div>
                </div>
            })}
                <div className="main-container">
                  <div className="comment-flexbox">
                    <textarea className="inputbox" placeholder="Add comment" 
                      value={commentInput} 
                        onChange={(e)=>setCommentInput(e.target.value)}
                      ></textarea>
                        <button className="post-comment-button" onClick={handlePostComment}>Post</button>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <div className='notifications'>
      </div>
    </div>
    
  )
}

export default Home