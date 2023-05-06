package fh_backend.backend;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
}
