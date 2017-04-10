import { Component } from '@angular/core';
import { PostsService } from '../services/post.service';


@Component({
	moduleId: module.id,
  selector: 'test',
  templateUrl: 'test.component.html',
  providers: [ PostsService ]
})
export class TestComponent  { 
	name: string;
	email: string;
	address: address;
	hobbies: string[];
	showHobbies: boolean;
	posts: post[];

	constructor(private postsService: PostsService) {
		this.name = 'Sergej Kukharev';
		this.email = 'sergej.kucharev@gmail.com';
		this.address = {
			street: 'pr. Pobedy, 37',
			city: 'Kiev',
			country: 'Ukraine'
		};
		this.hobbies = ['A', 'B', 'C'];
		this.showHobbies = false;
		this.postsService.getPost().subscribe(posts => {
			this.posts = posts;
		});
		console.log('constructor run!');
	}

	toggleHobies() {
		this.showHobbies = !this.showHobbies;
		console.log('show');
	}

	addHobby(hobby){
		this.hobbies.push(hobby);
	}

	deleteHobby(index) {
		this.hobbies.splice(index, 1);
	}
}

interface address {
	street: string;
	city: string;
	country: string;
};

interface post {
	userId: number;
	id: number;
	title: string;
	body: string;
};
