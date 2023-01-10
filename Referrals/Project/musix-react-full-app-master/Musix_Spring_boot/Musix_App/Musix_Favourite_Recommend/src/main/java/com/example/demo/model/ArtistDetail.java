package com.example.demo.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ArtistDetail {
	
	private String name;
	@JsonProperty(value="playcount")
	private Integer playCount;
    private Integer listeners;
	private String url;
	private List<Artists> similarArtist;
	private List<Tag> genreTags;
	private String bioSummary;
	private String bioContent;
	private String ontour;
	private String streamable;
	private List<ArtistImage> image;	
    private String largeImage;

	
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
	public List<Artists> getSimilarArtist() {
		return similarArtist;
	}
	public void setSimilarArtist(List<Artists> similarArtist) {
		this.similarArtist = similarArtist;
	}
	public List<Tag> getGenreTags() {
		return genreTags;
	}
	public void setGenreTags(List<Tag> genreTags) {
		this.genreTags = genreTags;
	}
	public ArtistDetail(String name, Integer playCount, Integer listeners, String url, List<Artists> similarArtist,
			List<Tag> genreTags, String bioSummary, String bioContent, String ontour, String streamable,
			List<ArtistImage> image, String largeImage) {
		super();
		this.name = name;
		this.playCount = playCount;
		this.listeners = listeners;
		this.url = url;
		this.similarArtist = similarArtist;
		this.genreTags = genreTags;
		this.bioSummary = bioSummary;
		this.bioContent = bioContent;
		this.ontour = ontour;
		this.streamable = streamable;
		this.image = image;
		this.largeImage = largeImage;
	}
	
	public ArtistDetail() {
		
	}
	@Override
	public String toString() {
		return "ArtistDetail [name=" + name + ", playCount=" + playCount + ", listeners=" + listeners + ", url=" + url
				+ ", similarArtist=" + similarArtist + ", genreTags=" + genreTags + ", bioSummary=" + bioSummary
				+ ", bioContent=" + bioContent + ", ontour=" + ontour + ", streamable=" + streamable + ", image="
				+ image + ", largeImage=" + largeImage + "]";
	}
	

}
