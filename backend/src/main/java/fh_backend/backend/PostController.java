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
public class PostController {
    @Autowired
    private PostRepository postReposotory;
    @GetMapping("/")
    public List<post> getPosts(){
        return postReposotory.findAll();
    }
    @GetMapping("/{id}")
    public post getPosts(@PathVariable String id){
        return postReposotory.findById(id).orElse(null);
    }
    @PostMapping("/")
    public post Postmethodname(@RequestBody post post){
        return postReposotory.save(post);
    }

    @DeleteMapping("/{id}")
        public String DeleteComment(@PathVariable String id){
            postReposotory.deleteById(id);
            return id;
        }

    @PutMapping("/{id}")
        public post PutMapping(@RequestBody post newPost){
        post oldPost = postReposotory.findById(newPost.getId()).orElse(null);
        oldPost.setPicture(newPost.getPicture());
        oldPost.setCaption(newPost.getCaption());
        postReposotory.save(oldPost);
        return oldPost;
    }
}
