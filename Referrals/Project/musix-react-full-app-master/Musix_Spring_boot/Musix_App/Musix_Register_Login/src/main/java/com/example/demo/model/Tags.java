package com.example.demo.model;

import java.util.List;

public class Tags {
	
	private List<Tag> tag;

	public Tags() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Tags(List<Tag> tag) {
		super();
		this.tag = tag;
	}

	public List<Tag> getTag() {
		return tag;
	}

	public void setTag(List<Tag> tag) {
		this.tag = tag;
	}

	@Override
	public String toString() {
		return "Tags [tag=" + tag + "]";
	}

	
	
	
}
