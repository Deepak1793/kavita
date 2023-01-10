package com.example.demo.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;


@Document(collection= "Recommend")
@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class Recommend {
	
	@Id
	private int id;
	private String name;
	@JsonProperty(value="playcount")
	private Integer playCount;
    private Integer listeners;
    private String url;
    private String summary;
    private String content;
    private String largeImage;
	private User user;
	
}
