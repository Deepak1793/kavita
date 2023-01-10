package com.example.demo.controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Recommend;
import com.example.demo.repository.RecommendRepository;
@CrossOrigin(origins="*",allowedHeaders="*")
@RestController
public class RecommendController {
	static int count=0;
	
	
	@Autowired
	private RecommendRepository repository;
	
	@GetMapping("/")
	@CrossOrigin(origins="*")
    public ResponseEntity<?> welcome(){
        return new ResponseEntity<String>("Welcome to Recommand and FavList"
                ,HttpStatus.OK );
    }
	
	@PostMapping("/addtorecommend")
	@CrossOrigin(origins="*")
	public String addtoRecommend(@RequestBody Recommend recommend)
	{
		count=repository.findAll().size()+1;
		recommend.setId(count);
		
		
		repository.save(recommend);
		System.out.println(recommend);
		
		return "Added in Recommend";
	}
	
	@GetMapping("/getallrecommend")
	@CrossOrigin(origins="*")
	public List<Recommend> getRecommend()
	{
		return repository.findAll();
	}
	
	@GetMapping("/reclist/{userName}")
	@CrossOrigin(origins="*")
	public ResponseEntity<?>getfavByUserName(@PathVariable String userName){
		
		List<Recommend>recList = repository.findAll();
		Optional<Recommend>op = recList.stream().filter(fav->fav.getUser().getUserName().equals(userName)).findFirst();
		Recommend rac =op.isPresent() ? op.get(): null;
		ResponseEntity<?> entity = null;
		if(rac!=null) {
			entity= new ResponseEntity<Recommend>(rac,HttpStatus.OK);
		}
		else {
			entity= new ResponseEntity<String>("Recommend List is empity",HttpStatus.NO_CONTENT);
		}
		return entity;
	}
	
}