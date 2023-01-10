package com.example.demo.model;

import java.util.List;

public class Similar {
 
	private List<Artist> artist;

	public Similar() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Similar(List<Artist> artist) {
		super();
		this.artist = artist;
	}

	public List<Artist> getArtist() {
		return artist;
	}

	public void setArtist(List<Artist> artist) {
		this.artist = artist;
	}

	@Override
	public String toString() {
		return "Similar [artist=" + artist + "]";
	}
	
	
	
}
