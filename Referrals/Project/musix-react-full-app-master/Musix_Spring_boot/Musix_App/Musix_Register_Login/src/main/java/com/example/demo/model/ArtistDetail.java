package com.example.demo.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ArtistDetail {
	
	private String name;
    private Stats stats;
	private String url;
	private Similar similar;
	private Tags tags;
	private String bioSummary;
	private String bioContent;
	private String ontour;
	private String streamable;
	private List<ArtistImage> image;	
    private String largeImage;

   
	
	public ArtistDetail(String name, Stats stats, String url, Similar similar, Tags tags, String bioSummary,
			String bioContent, String ontour, String streamable, List<ArtistImage> image, String largeImage) {
		super();
		this.name = name;
		this.stats = stats;
		this.url = url;
		this.similar = similar;
		this.tags = tags;
		this.bioSummary = bioSummary;
		this.bioContent = bioContent;
		this.ontour = ontour;
		this.streamable = streamable;
		this.image = image;
		this.largeImage = largeImage;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	
	public String getBioSummary() {
		return bioSummary;
	}
	public void setBioSummary(String bioSummary) {
		this.bioSummary = bioSummary;
	}
	public String getBioContent() {
		return bioContent;
	}
	public void setBioContent(String bioContent) {
		this.bioContent = bioContent;
	}
	public String getOntour() {
		return ontour;
	}
	public void setOntour(String ontour) {
		this.ontour = ontour;
	}
	public String getStreamable() {
		return streamable;
	}
	public void setStreamable(String streamable) {
		this.streamable = streamable;
	}
	public List<ArtistImage> getImage() {
		return image;
	}
	public void setImage(List<ArtistImage> image) {
		this.image = image;
	}
	public String getLargeImage() {
		return largeImage;
	}
	public void setLargeImage(String largeImage) {
		this.largeImage = largeImage;
	}
	
	
	public Tags getTags() {
		return tags;
	}

	public void setTags(Tags tags) {
		this.tags = tags;
	}

	public Similar getSimilar() {
		return similar;
	}
	public void setSimilar(Similar similar) {
		this.similar = similar;
	}
	public ArtistDetail() {
		
	}
	public Stats getStats() {
		return stats;
	}
	public void setStats(Stats stats) {
		this.stats = stats;
	}

	@Override
	public String toString() {
		return "ArtistDetail [name=" + name + ", stats=" + stats + ", url=" + url + ", similar=" + similar + ", tags="
				+ tags + ", bioSummary=" + bioSummary + ", bioContent=" + bioContent + ", ontour=" + ontour
				+ ", streamable=" + streamable + ", image=" + image + ", largeImage=" + largeImage + "]";
	}
	
	
		

}
