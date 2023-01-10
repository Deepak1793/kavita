package com.example.demo.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Artist {

	private String name;
	@JsonProperty(value="playcount")
	private Integer playCount;
	private Integer listeners;
	private String url;
	private List<ArtistImage> image;
	private String summary;
	private String content;
	private String largeImage;
	private User user;


	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getPlayCount() {
		return playCount;
	}
	public void setPlayCount(Integer playCount) {
		this.playCount = playCount;
	}
	public Integer getListeners() {
		return listeners;
	}
	public void setListeners(Integer listeners) {
		this.listeners = listeners;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public List<ArtistImage> getImage() {
		return image;
	}
	public void setImage(List<ArtistImage> image) {
		this.image = image;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getLargeImage() {
		return largeImage;
	}
	public void setLargeImage(String largeImage) {
		this.largeImage = largeImage;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Artist() {
		
	}
	public Artist(String name, Integer playCount, Integer listeners, String url, List<ArtistImage> image,
			String summary, String content, String largeImage, User user) {
		super();
		this.name = name;
		this.playCount = playCount;
		this.listeners = listeners;
		this.url = url;
		this.image = image;
		this.summary = summary;
		this.content = content;
		this.largeImage = largeImage;
		this.user = user;
	}
	@Override
	public String toString() {
		return "Artist [name=" + name + ", playCount=" + playCount + ", listeners=" + listeners + ", url=" + url
				+ ", image=" + image + ", summary=" + summary + ", content=" + content + ", largeImage=" + largeImage
				+ ", user=" + user + "]";
	}
	
	
	
	





}
