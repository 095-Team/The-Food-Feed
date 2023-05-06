package fh_backend.backend;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CommentsRepository extends MongoRepository<comments,String>{
    
}