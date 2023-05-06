package fh_backend.backend;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
public class CommentsController { 
@Autowired
    private CommentsRepository commentsReposotory;
        @GetMapping("/comments")
        public List<comments> getComments(){
            return commentsReposotory.findAll();
        }
        @GetMapping("/comments/{id}")
        public comments getPosts(@PathVariable String id){
            return commentsReposotory.findById(id).orElse(null);
        }
        @PostMapping("/comments")
        public comments Postmethodname(@RequestBody comments comments){
            return commentsReposotory.save(comments);
        }

        @DeleteMapping("/comments/{id}")
        public String DeleteComment(@PathVariable String id){
            commentsReposotory.deleteById(id);
            return id;
        }

        @PutMapping("/comments/{id}")
        public comments PutMapping(@RequestBody comments newComments){
        comments oldComment = commentsReposotory.findById(newComments.getId()).orElse(null);
        oldComment.setComment(newComments.getComment());
        commentsReposotory.save(oldComment);
        return oldComment;
        }
    } 
