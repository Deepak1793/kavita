package com.example.demo.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
@Document(collection= "Favourite")
@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class Favourite {
	
	@Id
	private int id;
	private String name;
	@JsonProperty(value="playcount")
	private Integer playCount;
    private Integer listeners;
    private String url;
    private String image;
    private String summary;
    private String content;
    private String largeImage;
    private String user;
	private boolean isaddedtofav=false;
}