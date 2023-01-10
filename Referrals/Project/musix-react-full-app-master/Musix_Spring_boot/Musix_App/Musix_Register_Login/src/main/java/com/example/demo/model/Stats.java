package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Stats {
	@JsonProperty(value="playcount")
	private Integer playCount;
    private Integer listeners;
    
    
	public Stats() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Stats(Integer playCount, Integer listeners) {
		super();
		this.playCount = playCount;
		this.listeners = listeners;
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
	
	@Override
	public String toString() {
		return "Stats [playCount=" + playCount + ", listeners=" + listeners + "]";
	}
    
    

}
